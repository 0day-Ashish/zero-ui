"use client";

import { useState } from "react";
import { ChevronDown, Terminal, Copy, Check } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "What is ZeroUI?",
    answer:
      "ZeroUI is a modern React component library designed to help developers build beautiful, responsive websites quickly. It provides pre-designed, customizable components that can be seamlessly integrated into any project.",
  },
  {
    question: "Is ZeroUI free to use?",
    answer:
      "Yes, ZeroUI offers a free tier with access to core components. We also offer premium plans with advanced components, templates, and priority support for teams and enterprises.",
  },
  {
    question: "What frameworks does ZeroUI support?",
    answer:
      "ZeroUI is built for React and works seamlessly with Next.js, Vite, and other React-based frameworks. Components are written in TypeScript and styled with Tailwind CSS for maximum flexibility.",
  },
  {
    question: "Can I customize the components?",
    answer:
      "Absolutely! All components are fully customizable. You can modify colors, sizes, animations, and styles using Tailwind CSS classes or by extending the base components to match your design system.",
  },
  {
    question: "Do you offer support?",
    answer:
      "Yes! Free users have access to our community Discord and documentation. Premium users get priority email support and direct access to our engineering team for complex implementations.",
  },
  {
    question: "How do I update ZeroUI?",
    answer:
      "Run 'npx zeroui update' to check for and install the latest versions of your components. We release updates regularly with new features and bug fixes.",
  },
  {
    question: "Can I use ZeroUI commercially?",
    answer:
      "Yes! ZeroUI can be used in commercial projects. Free tier components are MIT licensed. Premium components require an active subscription for commercial use.",
  },
];

const quickStartSteps = [
  {
    step: 1,
    title: "Initialize ZeroUI",
    command: "npx zeroui init",
    description: "Set up ZeroUI in your project",
  },
  {
    step: 2,
    title: "Add a component",
    command: "npx zeroui add button",
    description: "Add components you need",
  },
  {
    step: 3,
    title: "Import and use",
    command: "import { Button } from '@/components/ui'",
    description: "Start building your UI",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-b border-zinc-200 dark:border-zinc-800/50">
      <button
        onClick={onClick}
        className="w-full py-4 flex items-center justify-between text-left group"
      >
        <span className="text-zinc-900 dark:text-white font-medium text-sm group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
          {question}
        </span>
        <ChevronDown
          size={18}
          className={`text-zinc-500 transition-transform duration-300 shrink-0 ml-2 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-out ${
          isOpen ? "max-h-48 pb-4" : "max-h-0"
        }`}
      >
        <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

function CommandBlock({ command }: { command: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-2 px-3 py-2 bg-zinc-100 dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800 group">
      <Terminal size={14} className="text-zinc-500 shrink-0" />
      <code className="text-xs text-zinc-700 dark:text-zinc-300 flex-1 font-mono truncate">{command}</code>
      <button
        onClick={handleCopy}
        className="text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors shrink-0"
      >
        {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
      </button>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full flex flex-col justify-center items-center pt-10 mb-20">
      {/* Two Column Layout */}
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Left - FAQ */}
        <div>
          <div className="mb-8">
            <h2 className="text-3xl tracking-tighter font-medium mb-2 text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="text-zinc-600 dark:text-zinc-500 text-sm">
              Everything you need to know about ZeroUI.
            </p>
          </div>

          <div>
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => handleClick(index)}
              />
            ))}
          </div>
        </div>

        {/* Right - Quick Start Guide */}
        <div>
          <div className="mb-8">
            <h2 className="text-3xl tracking-tighter font-medium mb-2 text-foreground">
              Quick Start Guide
            </h2>
            <p className="text-zinc-600 dark:text-zinc-500 text-sm">
              Get up and running in under a minute. Check out our{" "}
              <Link href="/docs" className="text-violet-500 dark:text-violet-400 hover:text-violet-600 dark:hover:text-violet-300 underline underline-offset-2 transition-colors">
                documentation
              </Link>{" "}
              for more details.
            </p>
          </div>

          {/* Terminal Window */}
          <div className="rounded-lg overflow-hidden border border-zinc-300 dark:border-zinc-800 bg-[#0d0d0d] shadow-2xl">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-[#1a1a1a] border-b border-zinc-800">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>
              <span className="flex-1 text-center text-xs text-zinc-500 font-mono">zsh</span>
              <div className="w-12" />
            </div>

            {/* Terminal Content */}
            <div className="p-4 font-mono text-sm space-y-4">
              {quickStartSteps.map((item, index) => (
                <div key={item.step} className="group">
                  <div className="flex items-center gap-2 text-zinc-500 text-xs mb-1">
                    <span className="text-emerald-500">#</span>
                    <span>{item.description}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400">$</span>
                    <code className="text-zinc-100 flex-1">{item.command}</code>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(item.command);
                      }}
                      className="opacity-0 group-hover:opacity-100 text-zinc-500 hover:text-zinc-300 transition-all cursor-pointer"
                    >
                      <Copy size={14} />
                    </button>
                  </div>
                  {index < quickStartSteps.length - 1 && (
                    <div className="mt-2 text-zinc-600 text-xs">
                      <span className="text-emerald-600">✓</span> Done
                    </div>
                  )}
                </div>
              ))}

              {/* Blinking cursor */}
              <div className="flex items-center gap-2">
                <span className="text-emerald-400">$</span>
                <span className="w-2 h-4 bg-emerald-400 animate-blink" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
