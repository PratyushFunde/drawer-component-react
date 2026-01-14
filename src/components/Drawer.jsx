import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNestedMenu } from "../hooks/useNestedMenu";
import { menuData } from "../data/menu.data";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Drawer = ({ open, onClose }) => {
    const { items, path, openChild, goBack, reset } = useNestedMenu(menuData);
    const [direction, setDirection] = useState(1);

    const closeDrawer = () => {
        reset();
        onClose();
    };

    return (
        <AnimatePresence>
            {open && (
                <>
                    {/* Overlay */}
                    <motion.div
                        className="fixed inset-0 bg-black/40 z-40"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeDrawer}
                    />

                    {/* Bottom Sheet */}
                    <motion.div
                        className="fixed bottom-0 left-0 right-0 z-50 px-4"
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "100%" }}
                        transition={{ type: "spring", damping: 20 }}
                    >
                        {/* Draggable Sheet */}
                        <motion.div
                            className="mx-auto max-w-md bg-white rounded-t-2xl flex flex-col"
                            drag="y"
                            dragConstraints={{ top: 0 }}
                            dragElastic={0.2}
                            onDragEnd={(e, info) => {
                                if (info.offset.y > 120) closeDrawer();
                            }}
                            style={{ maxHeight: '90vh' }} 
                        >
                        

                            {/* Menu Content */}
                            <div className="relative flex-1 flex flex-col"> {/* removed overflow-hidden */}
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={path.join("-") || "root"}
                                        initial={{ x: direction === 1 ? 60 : -60, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        exit={{ x: direction === 1 ? -60 : 60, opacity: 0 }}
                                        transition={{ duration: 0.09, ease: "easeOut" }}
                                        className="w-full flex flex-col flex-1"
                                    >
                                        {/* Header */}
                                        <div className="flex items-center gap-3 p-4 shrink-0">
                                            {path.length > 0 && (
                                                <button
                                                    onClick={() => {
                                                        setDirection(-1);
                                                        goBack();
                                                    }}
                                                    className="font-medium flex items-center gap-1"
                                                >
                                                    <ChevronLeft size={18} /> Back
                                                </button>
                                            )}
                                        </div>

                                        {/* Scrollable Menu Items */}
                                        <div className="p-4 space-y-3 overflow-y-auto flex-1 max-h-[calc(90vh-64px)] scrollbar-none">
                                            {items.length > 0 ? (
                                                items.map((item) => {
                                                    const Icon = item.icon;
                                                    return (
                                                        <button
                                                            key={item.id}
                                                            onClick={() => {
                                                                if (item.children) {
                                                                    setDirection(1);
                                                                    openChild(item.id);
                                                                }
                                                            }}
                                                            className="w-full flex justify-between items-start p-1 rounded-lg"
                                                        >
                                                            <div className="flex flex-col w-full text-left">
                                                                <div className="flex items-center gap-2">
                                                                    {Icon && <Icon size={18} className="text-gray-700" />}
                                                                    <span className="font-medium">{item.label}</span>
                                                                </div>

                                                                {item.description && (
                                                                    <div className="text-gray-400 text-sm mt-1">
                                                                        {item.description}
                                                                    </div>
                                                                )}
                                                            </div>

                                                            {item.children && <ChevronRight />}
                                                        </button>
                                                    );
                                                })
                                            ) : (
                                                <p className="text-center text-gray-400">No options available</p>
                                            )}
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                        </motion.div>
                    </motion.div>

                </>
            )}
        </AnimatePresence>
    );
};

export default Drawer;
