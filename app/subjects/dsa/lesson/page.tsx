"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock3,
  Code2,
  FileText,
  Menu,
  Play,
  Sparkles,
  Target,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";

const LOGO = "/study-sphere-logo-cropped.png";

const lessons = [
  {
    id: 1,
    title: "What is a Stack?",
    type: "Concept",
    duration: "8 min",
    completed: true,
  },
  {
    id: 2,
    title: "Stack Operations",
    type: "Concept",
    duration: "10 min",
    completed: true,
  },
  {
    id: 3,
    title: "Stack Implementation in C",
    type: "Coding",
    duration: "14 min",
    completed: false,
    current: true,
  },
  {
    id: 4,
    title: "Applications of Stack",
    type: "Concept",
    duration: "9 min",
    completed: false,
  },
  {
    id: 5,
    title: "Queue Fundamentals",
    type: "Concept",
    duration: "11 min",
    completed: false,
  },
];

export default function LessonPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [completed, setCompleted] = useState(false);

  return (
    <main className="min-h-screen bg-[#f5f8fd] text-[#071426]">

      {/* MOBILE OVERLAY */}

      {sidebarOpen && (
        <button
          aria-label="Close lesson navigation"
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-[#061529]/40 backdrop-blur-sm lg:hidden"
        />
      )}

      {/* HEADER */}

      <header className="sticky top-0 z-50 h-[70px] border-b border-blue-100 bg-white/90 backdrop-blur-xl">

        <div className="flex h-full items-center justify-between px-4 sm:px-6 lg:px-8">

          <div className="flex items-center gap-3">

            <button
              onClick={() => setSidebarOpen(true)}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-blue-100 bg-white text-slate-500 lg:hidden"
            >
              <Menu size={17} />
            </button>

            <Link href="/subjects/dsa">
              <Image
                src={LOGO}
                alt="Study Sphere"
                width={190}
                height={60}
                priority
                className="h-9 w-auto object-contain"
              />
            </Link>

            <div className="hidden h-6 w-px bg-slate-200 sm:block" />

            <div className="hidden sm:block">

              <p className="text-[9px] font-bold text-slate-400">
                DATA STRUCTURES
              </p>

              <p className="text-[10px] font-bold text-slate-700">
                Stacks & Queues
              </p>

            </div>

          </div>

          <div className="flex items-center gap-3">

            <div className="hidden items-center gap-2 md:flex">

              <div className="h-1.5 w-28 overflow-hidden rounded-full bg-blue-50">

                <div className="h-full w-[60%] rounded-full bg-blue-600" />

              </div>

              <span className="text-[9px] font-bold text-blue-600">
                60%
              </span>

            </div>

            <button className="flex h-9 w-9 items-center justify-center rounded-xl border border-blue-100 text-slate-500">
              <Sparkles size={15} />
            </button>

            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-400 text-[9px] font-bold text-white">
              S
            </div>

          </div>

        </div>

      </header>

      {/* LESSON SIDEBAR */}

      <aside
        className={`fixed left-0 top-[70px] z-50 h-[calc(100vh-70px)] w-[280px] overflow-y-auto border-r border-blue-100 bg-white transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >

        <div className="flex items-center justify-between border-b border-blue-50 p-5 lg:hidden">

          <span className="text-[11px] font-extrabold">
            Course Navigation
          </span>

          <button
            onClick={() => setSidebarOpen(false)}
            className="text-slate-400"
          >
            <X size={17} />
          </button>

        </div>

        <div className="p-5">

          <Link
            href="/subjects/dsa"
            className="mb-6 flex items-center gap-2 text-[10px] font-bold text-blue-600"
          >
            <ArrowLeft size={13} />
            Back to course
          </Link>

          <div className="mb-6">

            <p className="text-[8px] font-bold tracking-[0.18em] text-blue-600">
              MODULE 03
            </p>

            <h2 className="mt-1 text-base font-extrabold">
              Stacks & Queues
            </h2>

            <p className="mt-1 text-[9px] leading-4 text-slate-400">
              6 lessons • 51 minutes
            </p>

          </div>

          <div className="space-y-1">

            {lessons.map((lesson) => (

              <button
                key={lesson.id}
                className={`flex w-full items-center gap-3 rounded-xl p-3 text-left transition ${
                  lesson.current
                    ? "border border-blue-100 bg-blue-50"
                    : "hover:bg-slate-50"
                }`}
              >

                <div
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${
                    lesson.completed
                      ? "bg-emerald-50 text-emerald-600"
                      : lesson.current
                        ? "bg-blue-600 text-white"
                        : "bg-slate-100 text-slate-400"
                  }`}
                >

                  {lesson.completed ? (
                    <Check size={12} />
                  ) : lesson.current ? (
                    <Play size={10} fill="currentColor" />
                  ) : (
                    <span className="text-[8px] font-bold">
                      {lesson.id}
                    </span>
                  )}

                </div>

                <div className="min-w-0 flex-1">

                  <p
                    className={`truncate text-[9px] font-bold ${
                      lesson.current
                        ? "text-blue-700"
                        : "text-slate-600"
                    }`}
                  >
                    {lesson.title}
                  </p>

                  <p className="mt-0.5 text-[7px] text-slate-400">
                    {lesson.type} • {lesson.duration}
                  </p>

                </div>

              </button>

            ))}

          </div>

          <div className="mt-7 border-t border-blue-50 pt-5">

            <p className="mb-3 text-[8px] font-bold tracking-[0.15em] text-slate-400">
              COURSE TOOLS
            </p>

            <ToolLink icon={FileText} text="Course Notes" />
            <ToolLink icon={Target} text="Practice Questions" />
            <ToolLink icon={Users} text="Study Group" />
            <ToolLink icon={Sparkles} text="Ask AI Tutor" />

          </div>

        </div>

      </aside>

      {/* CONTENT */}

      <div className="lg:pl-[280px]">

        <div className="mx-auto max-w-[1050px] px-5 py-7 sm:px-8 lg:px-10 lg:py-10">

          {/* BREADCRUMB */}

          <div className="flex flex-wrap items-center gap-2 text-[8px] font-semibold text-slate-400">

            <Link
              href="/dashboard"
              className="hover:text-blue-600"
            >
              Dashboard
            </Link>

            <ChevronRight size={11} />

            <Link
              href="/subjects"
              className="hover:text-blue-600"
            >
              Subjects
            </Link>

            <ChevronRight size={11} />

            <Link
              href="/subjects/dsa"
              className="hover:text-blue-600"
            >
              Data Structures
            </Link>

            <ChevronRight size={11} />

            <span className="text-slate-600">
              Stacks & Queues
            </span>

          </div>

          {/* LESSON HEADER */}

          <section className="mt-7">

            <div className="flex flex-wrap items-center gap-2">

              <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[8px] font-bold text-blue-600">
                MODULE 03
              </span>

              <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[8px] font-bold text-slate-500">
                CODING LESSON
              </span>

            </div>

            <h1 className="mt-4 text-3xl font-extrabold tracking-[-0.045em] sm:text-4xl">
              Stack Implementation in C
            </h1>

            <p className="mt-3 max-w-2xl text-[12px] leading-6 text-slate-500">
              Learn how to implement a stack using arrays in C and understand
              the logic behind push, pop and peek operations.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-4">

              <span className="flex items-center gap-1.5 text-[9px] font-semibold text-slate-400">

                <Clock3 size={13} className="text-blue-500" />

                14 min

              </span>

              <span className="flex items-center gap-1.5 text-[9px] font-semibold text-slate-400">

                <BookOpen size={13} className="text-blue-500" />

                3 lessons completed

              </span>

            </div>

          </section>

          {/* VIDEO / VISUAL */}

          <section className="relative mt-8 overflow-hidden rounded-[20px] bg-[#071426] shadow-xl shadow-blue-100/30">

            <div className="tech-grid-dark absolute inset-0 opacity-50" />

            <div className="relative flex min-h-[260px] flex-col items-center justify-center p-8 text-center sm:min-h-[330px]">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 text-cyan-400 ring-1 ring-blue-400/20">

                <Code2 size={27} />

              </div>

              <p className="mt-5 text-[9px] font-bold tracking-[0.2em] text-cyan-400">
                INTERACTIVE LESSON
              </p>

              <h2 className="mt-2 text-xl font-extrabold text-white">
                Understand the stack visually
              </h2>

              <p className="mt-2 max-w-md text-[10px] leading-5 text-slate-400">
                Follow the flow of data as elements are pushed onto and
                removed from the stack.
              </p>

              <button className="mt-6 flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-[10px] font-bold text-white transition hover:bg-blue-500">

                <Play size={12} fill="currentColor" />

                Start interactive demo

              </button>

            </div>

          </section>

          {/* CONCEPT */}

          <section className="mt-8 rounded-[20px] border border-blue-100 bg-white p-6 sm:p-8">

            <div className="flex items-start gap-4">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">

                <BookOpen size={17} />

              </div>

              <div>

                <p className="text-[8px] font-bold tracking-[0.18em] text-blue-600">
                  CONCEPT
                </p>

                <h2 className="mt-1 text-xl font-extrabold">
                  What is a Stack?
                </h2>

              </div>

            </div>

            <div className="mt-6 space-y-4 text-[11px] leading-6 text-slate-500">

              <p>
                A <strong className="text-slate-800">stack</strong> is a
                linear data structure that follows the{" "}
                <strong className="text-blue-600">
                  LIFO
                </strong>{" "}
                principle — Last In, First Out.
              </p>

              <p>
                This means that the element inserted most recently is the
                first element to be removed.
              </p>

              <div className="rounded-xl border border-blue-100 bg-[#f7fbff] p-5">

                <p className="text-[9px] font-bold text-blue-600">
                  REAL-WORLD ANALOGY
                </p>

                <p className="mt-2 text-[11px] leading-5 text-slate-500">
                  Think of a stack of plates. You place a new plate on top,
                  and when you need one, you take the top plate first.
                </p>

              </div>

            </div>

          </section>

          {/* OPERATIONS */}

          <section className="mt-6">

            <div className="mb-4">

              <p className="text-[8px] font-bold tracking-[0.18em] text-blue-600">
                CORE OPERATIONS
              </p>

              <h2 className="mt-1 text-xl font-extrabold">
                The three operations you need to know
              </h2>

            </div>

            <div className="grid gap-3 sm:grid-cols-3">

              <OperationCard
                title="Push"
                description="Adds a new element to the top of the stack."
                symbol="+"
              />

              <OperationCard
                title="Pop"
                description="Removes the element currently at the top."
                symbol="−"
              />

              <OperationCard
                title="Peek"
                description="Returns the top element without removing it."
                symbol="○"
              />

            </div>

          </section>

          {/* CODE */}

          <section className="mt-8">

            <div className="mb-4 flex items-end justify-between">

              <div>

                <p className="text-[8px] font-bold tracking-[0.18em] text-blue-600">
                  IMPLEMENTATION
                </p>

                <h2 className="mt-1 text-xl font-extrabold">
                  Stack using an array
                </h2>

              </div>

              <span className="hidden items-center gap-1.5 rounded-lg bg-slate-100 px-2.5 py-1.5 text-[8px] font-bold text-slate-500 sm:flex">

                <Code2 size={11} />

                C

              </span>

            </div>

            <div className="overflow-hidden rounded-[18px] bg-[#071426] shadow-xl shadow-blue-100/20">

              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">

                <div className="flex items-center gap-2">

                  <span className="h-2 w-2 rounded-full bg-red-400/70" />
                  <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
                  <span className="h-2 w-2 rounded-full bg-green-400/70" />

                  <span className="ml-2 text-[8px] font-semibold text-slate-500">
                    stack.c
                  </span>

                </div>

                <button className="text-[8px] font-bold text-cyan-400 hover:text-cyan-300">
                  Copy code
                </button>

              </div>

              <pre className="overflow-x-auto p-5 text-[10px] leading-6 text-slate-300 sm:p-6">
{`#include <stdio.h>

#define MAX 5

int stack[MAX];
int top = -1;

void push(int value) {
    if (top == MAX - 1) {
        printf("Stack Overflow");
        return;
    }

    stack[++top] = value;
}

void pop() {
    if (top == -1) {
        printf("Stack Underflow");
        return;
    }

    top--;
}

int peek() {
    if (top == -1) {
        return -1;
    }

    return stack[top];
}

int main() {
    push(10);
    push(20);
    push(30);

    printf("Top: %d", peek());

    pop();

    return 0;
}`}</pre>

            </div>

          </section>

          {/* KEY POINTS */}

          <section className="mt-8 rounded-[20px] border border-blue-100 bg-gradient-to-br from-white to-blue-50/40 p-6 sm:p-8">

            <div className="flex items-center gap-3">

              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white">
                <Sparkles size={15} />
              </div>

              <div>

                <p className="text-[8px] font-bold tracking-[0.18em] text-blue-600">
                  REMEMBER
                </p>

                <h2 className="mt-1 text-base font-extrabold">
                  Key takeaways
                </h2>

              </div>

            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">

              <KeyPoint text="Stack follows the LIFO principle." />
              <KeyPoint text="Push inserts an element at the top." />
              <KeyPoint text="Pop removes the top element." />
              <KeyPoint text="Peek reads the top without removing it." />

            </div>

          </section>

          {/* PRACTICE */}

          <section className="mt-8 rounded-[20px] border border-blue-100 bg-white p-6 sm:p-8">

            <div className="flex items-start justify-between gap-4">

              <div>

                <p className="text-[8px] font-bold tracking-[0.18em] text-blue-600">
                  QUICK CHECK
                </p>

                <h2 className="mt-1 text-xl font-extrabold">
                  Test your understanding
                </h2>

              </div>

              <Target
                size={19}
                className="text-blue-500"
              />

            </div>

            <div className="mt-5 rounded-xl bg-[#f7fbff] p-5">

              <p className="text-[11px] font-bold leading-5 text-slate-700">
                If you push 10, then 20, then 30 onto a stack, which element
                will be removed first?
              </p>

              <div className="mt-4 grid gap-2 sm:grid-cols-2">

                {["10", "20", "30", "None"].map((answer) => (

                  <button
                    key={answer}
                    className="rounded-xl border border-blue-100 bg-white px-4 py-3 text-left text-[10px] font-bold text-slate-600 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
                  >
                    {answer}
                  </button>

                ))}

              </div>

            </div>

          </section>

          {/* COMPLETE */}

          <section className="mt-8 rounded-[20px] border border-blue-100 bg-white p-5 sm:p-6">

            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

              <div className="flex items-center gap-4">

                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                    completed
                      ? "bg-emerald-50 text-emerald-600"
                      : "bg-blue-50 text-blue-600"
                  }`}
                >

                  {completed ? (
                    <CheckCircle2 size={20} />
                  ) : (
                    <Check size={19} />
                  )}

                </div>

                <div>

                  <p className="text-[10px] font-bold text-slate-700">

                    {completed
                      ? "Lesson completed!"
                      : "Finished this lesson?"}

                  </p>

                  <p className="mt-1 text-[8px] text-slate-400">
                    Mark this lesson complete to update your progress.
                  </p>

                </div>

              </div>

              <button
                onClick={() => setCompleted(!completed)}
                className={`rounded-xl px-5 py-3 text-[10px] font-bold transition ${
                  completed
                    ? "bg-emerald-50 text-emerald-600"
                    : "bg-blue-600 text-white shadow-lg shadow-blue-600/20 hover:bg-blue-500"
                }`}
              >
                {completed ? "Completed ✓" : "Mark as Complete"}
              </button>

            </div>

          </section>

          {/* NAVIGATION */}

          <div className="mt-8 flex items-center justify-between border-t border-blue-100 pt-6">

            <Link
              href="/subjects/dsa"
              className="flex items-center gap-2 rounded-xl border border-blue-100 bg-white px-4 py-3 text-[9px] font-bold text-slate-500 transition hover:border-blue-200 hover:text-blue-600"
            >

              <ArrowLeft size={13} />

              Previous

            </Link>

            <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-[9px] font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500">

              Next lesson

              <ArrowRight size={13} />

            </button>

          </div>

        </div>

      </div>

    </main>
  );
}

function ToolLink({
  icon: Icon,
  text,
}: {
  icon: React.ElementType;
  text: string;
}) {
  return (
    <button className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-[9px] font-semibold text-slate-500 transition hover:bg-blue-50 hover:text-blue-600">

      <Icon size={13} />

      {text}

    </button>
  );
}

function OperationCard({
  title,
  description,
  symbol,
}: {
  title: string;
  description: string;
  symbol: string;
}) {
  return (
    <div className="rounded-[17px] border border-blue-100 bg-white p-5 transition hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/30">

      <div className="flex items-center justify-between">

        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
          <span className="text-base font-extrabold">
            {symbol}
          </span>
        </div>

        <span className="text-[8px] font-bold tracking-widest text-slate-300">
          DSA
        </span>

      </div>

      <h3 className="mt-4 text-[12px] font-extrabold">
        {title}
      </h3>

      <p className="mt-2 text-[9px] leading-5 text-slate-400">
        {description}
      </p>

    </div>
  );
}

function KeyPoint({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-blue-100 bg-white p-3">

      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
        <Check size={11} />
      </div>

      <p className="text-[9px] font-semibold text-slate-600">
        {text}
      </p>

    </div>
  );
}