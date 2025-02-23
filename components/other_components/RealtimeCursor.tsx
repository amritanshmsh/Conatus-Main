"use client";
import { useEffect, useState, useRef } from "react";
import { generateRandomCursor } from "@/lib/generate-random-cursor";
import { motion, AnimatePresence } from "framer-motion";

interface CursorData {
    id: string;
    user_id: string;
    x_position: number;
    y_position: number;
    last_updated: string;
    color: string;
    message: string;
    is_typing: boolean;
}

const FloatingMessage = ({ message }: { message: string }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: -1000 }}
            exit={{ opacity: 0 }}
            transition={{ 
                duration: 5,
                ease: "easeOut"
            }}
            className="fixed bottom-20 left-1/2 -translate-x-1/2 pointer-events-none z-[999999]"
        >
            <div className="bg-black/80 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
                <span className="animate-rainbow-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                    {message}
                </span>
            </div>
        </motion.div>
    );
};

export default function RealtimeCursor() {
    const [cursors, setCursors] = useState<Record<string, CursorData>>({});
    const [isTyping, setIsTyping] = useState(false);
    const [message, setMessage] = useState("");
    const [floatingMessages, setFloatingMessages] = useState<{ id: string; message: string }[]>([]);
    const userId = typeof window !== "undefined" ? localStorage.getItem("user_id") || crypto.randomUUID() : "";
    const [cursorStyle] = useState(generateRandomCursor());
    const lastKnownPosition = useRef({ x: 0, y: 0 });
    const messageTimeout = useRef<NodeJS.Timeout>();

    const updateCursorPosition = (x: number, y: number, typing = isTyping, msg = message) => {
        lastKnownPosition.current = { x, y };

        setCursors(prev => ({
            ...prev,
            [userId]: {
                id: userId,
                user_id: userId,
                x_position: x,
                y_position: y,
                color: cursorStyle.color,
                is_typing: typing,
                message: msg,
                last_updated: new Date().toISOString()
            }
        }));
    };

    useEffect(() => {
        if (typeof window !== "undefined") localStorage.setItem("user_id", userId);

        const handleMouseMove = (e: MouseEvent) => {
            updateCursorPosition(e.pageX, e.pageY, isTyping, message);
        };

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Enter') {
                if (isTyping && message) {
                    if (messageTimeout.current) {
                        clearTimeout(messageTimeout.current);
                    }

                    updateCursorPosition(
                        lastKnownPosition.current.x,
                        lastKnownPosition.current.y,
                        false,
                        message
                    );

                    messageTimeout.current = setTimeout(() => {
                        updateCursorPosition(
                            lastKnownPosition.current.x,
                            lastKnownPosition.current.y,
                            false,
                            ""
                        );
                        setMessage("");
                        setIsTyping(false);
                    }, 5000);
                } else {
                    setIsTyping(true);
                    updateCursorPosition(
                        lastKnownPosition.current.x,
                        lastKnownPosition.current.y,
                        true,
                        ""
                    );
                }
            } else if (e.key === 'Escape' && isTyping) {
                if (messageTimeout.current) {
                    clearTimeout(messageTimeout.current);
                }
                setIsTyping(false);
                setMessage("");
                updateCursorPosition(
                    lastKnownPosition.current.x,
                    lastKnownPosition.current.y,
                    false,
                    ""
                );
            }
        };

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("keydown", handleKeyDown);
            if (messageTimeout.current) {
                clearTimeout(messageTimeout.current);
            }
        };
    }, [userId, cursorStyle, isTyping, message]);

    const handleMessageUpdate = (newMessage: string) => {
        setMessage(newMessage);
        updateCursorPosition(
            lastKnownPosition.current.x,
            lastKnownPosition.current.y,
            true,
            newMessage
        );
    };

    return (
        <>
            <div className="fixed inset-0 pointer-events-none isolate" style={{ zIndex: 999999 }}>
                {Object.values(cursors).map((cursor) => (
                    <motion.div
                        key={cursor.user_id}
                        className="absolute"
                        initial={false}
                        animate={{
                            left: cursor.x_position,
                            top: cursor.y_position,
                        }}
                        transition={{
                            duration: 0.2,
                            ease: "easeOut",
                        }}
                    >
                        <svg
                            width="24"
                            height="36"
                            viewBox="0 0 24 36"
                            fill="none"
                            className="transform -translate-x-1/4 -translate-y-1/4"
                        >
                            <path
                                d="M5.65376 12.3673H5.46026L5.31717 12.4976L0.500002 16.8829L0.500002 1.19841L11.7841 12.3673H5.65376Z"
                                fill={cursor.color || cursorStyle.color}
                                stroke="white"
                                strokeWidth="1"
                            />
                        </svg>

                        {cursor.is_typing && (
                            <div 
                                className="absolute px-4 py-2 rounded-full bg-black/80 text-white whitespace-nowrap transition-all"
                                style={{
                                    transform: 'translateX(20px)',
                                }}
                            >
                                {cursor.message || (
                                    <div className="flex space-x-1">
                                        <div className="w-1.5 h-1.5 rounded-full bg-white animate-bounce" />
                                        <div className="w-1.5 h-1.5 rounded-full bg-white animate-bounce [animation-delay:0.2s]" />
                                        <div className="w-1.5 h-1.5 rounded-full bg-white animate-bounce [animation-delay:0.4s]" />
                                    </div>
                                )}
                            </div>
                        )}
                    </motion.div>
                ))}
                {isTyping && (
                    <input
                        type="text"
                        value={message}
                        onChange={(e) => handleMessageUpdate(e.target.value)}
                        className="fixed bottom-4 left-1/2 -translate-x-1/2 w-64 px-4 py-2 rounded-full bg-black/80 text-white outline-none pointer-events-auto"
                        placeholder="Type your message..."
                        autoFocus
                    />
                )}
            </div>
            <AnimatePresence>
                {floatingMessages.map(({ id, message }) => (
                    <FloatingMessage key={id} message={message} />
                ))}
            </AnimatePresence>
        </>
    );
}