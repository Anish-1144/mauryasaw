"use client"

import React from "react"
import { cx } from "class-variance-authority"
import { AnimatePresence, motion } from "motion/react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface OrbProps {
  dimension?: string
  className?: string
  tones?: {
    base?: string
    accent1?: string
    accent2?: string
    accent3?: string
  }
  spinDuration?: number
}

const ColorOrb: React.FC<OrbProps> = ({
  dimension = "192px",
  className,
  tones,
  spinDuration = 20,
}) => {
  const fallbackTones = {
    base: "oklch(95% 0.02 264.695)",
    accent1: "oklch(75% 0.15 350)",
    accent2: "oklch(80% 0.12 200)",
    accent3: "oklch(78% 0.14 280)",
  }

  const palette = { ...fallbackTones, ...tones }

  const dimValue = parseInt(dimension.replace("px", ""), 10)

  const blurStrength =
    dimValue < 50 ? Math.max(dimValue * 0.008, 1) : Math.max(dimValue * 0.015, 4)

  const contrastStrength =
    dimValue < 50 ? Math.max(dimValue * 0.004, 1.2) : Math.max(dimValue * 0.008, 1.5)

  const pixelDot = dimValue < 50 ? Math.max(dimValue * 0.004, 0.05) : Math.max(dimValue * 0.008, 0.1)

  const shadowRange = dimValue < 50 ? Math.max(dimValue * 0.004, 0.5) : Math.max(dimValue * 0.008, 2)

  const maskRadius =
    dimValue < 30 ? "0%" : dimValue < 50 ? "5%" : dimValue < 100 ? "15%" : "25%"

  const adjustedContrast =
    dimValue < 30 ? 1.1 : dimValue < 50 ? Math.max(contrastStrength * 1.2, 1.3) : contrastStrength

  return (
    <div
      className={cn("color-orb", className)}
      style={{
        width: dimension,
        height: dimension,
        "--base": palette.base,
        "--accent1": palette.accent1,
        "--accent2": palette.accent2,
        "--accent3": palette.accent3,
        "--spin-duration": `${spinDuration}s`,
        "--blur": `${blurStrength}px`,
        "--contrast": adjustedContrast,
        "--dot": `${pixelDot}px`,
        "--shadow": `${shadowRange}px`,
        "--mask": maskRadius,
      } as React.CSSProperties}
    >
      <style jsx>{`
        @property --angle {
          syntax: "<angle>";
          inherits: false;
          initial-value: 0deg;
        }

        .color-orb {
          display: grid;
          grid-template-areas: "stack";
          overflow: hidden;
          border-radius: 50%;
          position: relative;
          transform: scale(1.1);
        }

        .color-orb::before,
        .color-orb::after {
          content: "";
          display: block;
          grid-area: stack;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          transform: translateZ(0);
        }

        .color-orb::before {
          background:
            conic-gradient(
              from calc(var(--angle) * 2) at 25% 70%,
              var(--accent3),
              transparent 20% 80%,
              var(--accent3)
            ),
            conic-gradient(
              from calc(var(--angle) * 2) at 45% 75%,
              var(--accent2),
              transparent 30% 60%,
              var(--accent2)
            ),
            conic-gradient(
              from calc(var(--angle) * -3) at 80% 20%,
              var(--accent1),
              transparent 40% 60%,
              var(--accent1)
            ),
            conic-gradient(
              from calc(var(--angle) * 2) at 15% 5%,
              var(--accent2),
              transparent 10% 90%,
              var(--accent2)
            ),
            conic-gradient(
              from calc(var(--angle) * 1) at 20% 80%,
              var(--accent1),
              transparent 10% 90%,
              var(--accent1)
            ),
            conic-gradient(
              from calc(var(--angle) * -2) at 85% 10%,
              var(--accent3),
              transparent 20% 80%,
              var(--accent3)
            );
          box-shadow: inset var(--base) 0 0 var(--shadow) calc(var(--shadow) * 0.2);
          filter: blur(var(--blur)) contrast(var(--contrast));
          animation: spin var(--spin-duration) linear infinite;
        }

        .color-orb::after {
          background-image: radial-gradient(
            circle at center,
            var(--base) var(--dot),
            transparent var(--dot)
          );
          background-size: calc(var(--dot) * 2) calc(var(--dot) * 2);
          backdrop-filter: blur(calc(var(--blur) * 2)) contrast(calc(var(--contrast) * 2));
          mix-blend-mode: overlay;
        }

        .color-orb[style*="--mask: 0%"]::after {
          mask-image: none;
        }

        .color-orb:not([style*="--mask: 0%"])::after {
          mask-image: radial-gradient(black var(--mask), transparent 75%);
        }

        @keyframes spin {
          to {
            --angle: 360deg;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .color-orb::before {
            animation: none;
          }
        }
      `}</style>
    </div>
  )
}

const SPEED_FACTOR = 1

const CHAT_WIDTH_DESKTOP = 380
const CHAT_HEIGHT_DESKTOP = 480

function useChatDimensions() {
  const [dimensions, setDimensions] = React.useState({
    width: CHAT_WIDTH_DESKTOP,
    height: CHAT_HEIGHT_DESKTOP,
    isMobile: false,
  })

  React.useEffect(() => {
    const update = () => {
      const isMobile = typeof window !== "undefined" && window.innerWidth < 640
      if (isMobile) {
        setDimensions({
          width: Math.min(window.innerWidth - 24, CHAT_WIDTH_DESKTOP),
          height: Math.min(Math.round(window.innerHeight * 0.82), CHAT_HEIGHT_DESKTOP),
          isMobile: true,
        })
      } else {
        setDimensions({
          width: CHAT_WIDTH_DESKTOP,
          height: CHAT_HEIGHT_DESKTOP,
          isMobile: false,
        })
      }
    }
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  return dimensions
}

export type Message = { id: string; role: "user" | "support"; content: string }

interface ContextShape {
  showForm: boolean
  successFlag: boolean
  triggerOpen: () => void
  triggerClose: () => void
}

const FormContext = React.createContext({} as ContextShape)
const useFormContext = () => React.useContext(FormContext)

const WELCOME_MESSAGE: Message = {
  id: "welcome",
  role: "support",
  content:
    "Hi! How can we help you today? Ask about our bandsaw machines, saw blades, or any product—we're here to assist.",
}

export function MorphPanel() {
  const wrapperRef = React.useRef<HTMLDivElement>(null)
  const inputRef = React.useRef<HTMLInputElement | null>(null)
  const messagesEndRef = React.useRef<HTMLDivElement>(null)

  const [showForm, setShowForm] = React.useState(false)
  const [successFlag, setSuccessFlag] = React.useState(false)
  const [messages, setMessages] = React.useState<Message[]>([WELCOME_MESSAGE])

  const triggerClose = React.useCallback(() => {
    setShowForm(false)
    inputRef.current?.blur()
  }, [])

  const triggerOpen = React.useCallback(() => {
    setShowForm(true)
    setTimeout(() => inputRef.current?.focus())
  }, [])

  const scrollToBottom = React.useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [])

  React.useEffect(() => {
    if (showForm) scrollToBottom()
  }, [showForm, messages, scrollToBottom])

  React.useEffect(() => {
    function clickOutsideHandler(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node) && showForm) {
        triggerClose()
      }
    }
    document.addEventListener("mousedown", clickOutsideHandler)
    return () => document.removeEventListener("mousedown", clickOutsideHandler)
  }, [showForm, triggerClose])

  const { width: chatWidth, height: chatHeight, isMobile } = useChatDimensions()
  const collapsedHeight = isMobile ? 36 : 44

  const ctx = React.useMemo(
    () => ({ showForm, successFlag, triggerOpen, triggerClose }),
    [showForm, successFlag, triggerOpen, triggerClose]
  )

  return (
    <div
      className="flex items-end justify-end"
      style={{ width: chatWidth, height: chatHeight }}
    >
      <motion.div
        ref={wrapperRef}
        data-panel
        className={cx(
          "relative z-10 flex flex-col items-stretch overflow-hidden shadow-xl max-sm:max-h-[82vh]",
          showForm
            ? "border border-gray-100 bg-white shadow-gray-200/40"
            : "border-0 bg-gradient-to-r from-[#fff5eb] via-[#ffedd5] to-[#fed7aa] shadow-orange-200/30 border border-orange-200/50"
        )}
        initial={false}
        animate={{
          width: showForm ? chatWidth : "auto",
          height: showForm ? chatHeight : collapsedHeight,
          borderRadius: showForm ? 14 : 20,
        }}
        transition={{
          type: "spring",
          stiffness: 550 / SPEED_FACTOR,
          damping: 45,
          mass: 0.7,
          delay: showForm ? 0 : 0.08,
        }}
      >
        <FormContext.Provider value={ctx}>
          <DockBar />
          <ChatPanel
            ref={inputRef}
            messagesEndRef={messagesEndRef}
            messages={messages}
            setMessages={setMessages}
            chatWidth={chatWidth}
            chatHeight={chatHeight}
            onSuccess={() => {
              setSuccessFlag(true)
              setTimeout(() => setSuccessFlag(false), 1500)
            }}
          />
        </FormContext.Provider>
      </motion.div>
    </div>
  )
}

function DockBar() {
  const { showForm, triggerOpen } = useFormContext()
  const isCollapsed = !showForm
  return (
    <footer className="mt-auto flex items-center justify-center whitespace-nowrap select-none max-sm:h-9 max-sm:min-h-[36px] sm:h-11 sm:min-h-[44px]">
      <div className="flex w-full items-center justify-center gap-1.5 px-2 py-1.5 max-sm:gap-1 max-sm:px-2 max-sm:py-1 sm:gap-2 sm:px-3 sm:py-2">
        <div className="flex w-fit items-center gap-1 max-sm:gap-0.5 sm:gap-2">
          <AnimatePresence mode="wait">
            {showForm ? (
              <motion.div
                key="blank"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                className="h-5 w-5 max-sm:h-4 max-sm:w-4"
              />
            ) : (
              <motion.div
                key="orb"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="max-sm:scale-90"
              >
                <ColorOrb dimension="24px" tones={{ base: "oklch(22.64% 0 0)" }} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <Button
          type="button"
          className={cx(
            "flex h-fit flex-1 justify-end rounded-full max-sm:min-h-[32px] max-sm:px-2 max-sm:py-1.5 sm:min-h-[44px] sm:px-4 sm:py-2",
            isCollapsed
              ? "text-[#1A1A1A] hover:bg-orange-200/30 hover:text-[#1A1A1A]"
              : "text-[#1A1A1A] hover:bg-gray-100 hover:text-[#1A1A1A]"
          )}
          variant="ghost"
          onClick={triggerOpen}
        >
          <span className="truncate text-xs max-sm:text-[11px] sm:text-sm">Ask AI</span>
        </Button>
      </div>
    </footer>
  )
}

const SUPPORT_REPLY =
  "Thanks for your message. Our team will get back to you shortly. For urgent inquiries, you can also call us or email."

const ChatPanel = React.forwardRef<
  HTMLInputElement,
  {
    messagesEndRef: React.RefObject<HTMLDivElement | null>
    messages: Message[]
    setMessages: React.Dispatch<React.SetStateAction<Message[]>>
    chatWidth: number
    chatHeight: number
    onSuccess: () => void
  }
>(function ChatPanel({ messagesEndRef, messages, setMessages, chatWidth, chatHeight, onSuccess }, ref) {
  const { triggerClose, showForm } = useFormContext()
  const [input, setInput] = React.useState("")

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const text = input.trim()
    if (!text) return
    const userMsg: Message = { id: `u-${Date.now()}`, role: "user", content: text }
    setMessages((prev) => [...prev, userMsg])
    setInput("")
    onSuccess()
    // Mock support reply
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: `s-${Date.now()}`, role: "support", content: SUPPORT_REPLY },
      ])
    }, 600)
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Escape") triggerClose()
  }

  return (
    <div
      className="absolute bottom-0 flex flex-col"
      style={{ width: chatWidth, height: chatHeight, pointerEvents: showForm ? "all" : "none" }}
    >
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", stiffness: 550 / SPEED_FACTOR, damping: 45, mass: 0.7 }}
            className="flex h-full flex-col"
          >
            {/* Chat header - touch-friendly on mobile */}
            <div className="flex shrink-0 items-center justify-between border-b border-gray-100 px-3 py-2.5 max-sm:min-h-[52px] sm:px-4 sm:py-3">
              <div className="flex min-h-[44px] items-center gap-2 max-sm:min-h-[48px]">
                <ColorOrb dimension="24px" tones={{ base: "oklch(22.64% 0 0)" }} />
                <span className="font-medium text-[#1A1A1A] text-sm sm:text-base">Chat support</span>
              </div>
              <button
                type="button"
                onClick={triggerClose}
                className="touch-manipulation rounded-lg p-2.5 text-[#4B5563] hover:bg-gray-100 hover:text-[#1A1A1A] active:bg-gray-200 max-sm:min-h-[44px] max-sm:min-w-[44px]"
                aria-label="Close chat"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="max-sm:h-5 max-sm:w-5">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Message list - scrollable, responsive padding */}
            <div className="min-h-0 flex-1 overflow-y-auto overflow-x-hidden px-3 py-3 max-sm:px-2.5 max-sm:py-2 sm:py-4">
              <div className="space-y-3 max-sm:space-y-2.5">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={cn(
                      "rounded-2xl px-3.5 py-2.5 text-sm max-sm:px-3 max-sm:py-2 max-sm:text-[13px] sm:px-4",
                      msg.role === "user"
                        ? "ml-auto w-fit max-w-[90%] max-sm:max-w-[92%] sm:max-w-[85%] bg-orange-100 text-[#1A1A1A] border border-orange-200/60"
                        : "mr-auto max-w-[90%] max-sm:max-w-[92%] sm:max-w-[85%] bg-gray-100 text-[#1A1A1A]"
                    )}
                  >
                    {msg.content}
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Input row - touch-friendly, no zoom on focus (iOS) */}
            <form
              onSubmit={handleSubmit}
              className="shrink-0 border-t border-gray-100 p-2.5 max-sm:p-2 sm:p-3"
            >
              <div className="flex gap-2 rounded-xl border border-gray-200 bg-gray-50 px-2.5 py-2 focus-within:border-[#f58220] focus-within:ring-1 focus-within:ring-[#f58220] max-sm:min-h-[48px] max-sm:px-3 max-sm:py-2.5 sm:py-2">
                <input
                  ref={ref}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your message..."
                  className="min-w-0 flex-1 bg-transparent text-[#1A1A1A] outline-0 placeholder:text-[#4B5563] max-sm:min-h-[44px] max-sm:text-base"
                  spellCheck={false}
                  style={{ fontSize: "16px" }}
                />
                <button
                  type="submit"
                  disabled={!input.trim()}
                  className="touch-manipulation shrink-0 rounded-lg bg-[#f58220] px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-50 max-sm:min-h-[44px] max-sm:px-4 max-sm:py-2.5"
                >
                  Send
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
})

function KeyHint({ children, className }: { children: string; className?: string }) {
  return (
    <kbd
      className={cx(
        "flex h-6 w-fit items-center justify-center rounded-sm border border-gray-200 px-[6px] font-sans text-[#1A1A1A]",
        className
      )}
    >
      {children}
    </kbd>
  )
}

export default MorphPanel
