"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Bell,
  BookOpen,
  Brain,
  CalendarDays,
  ChevronRight,
  Clock3,
  FileText,
  Home,
  Menu,
  MessageSquare,
  MoreHorizontal,
  Plus,
  Search,
  Settings,
  Sparkles,
  Target,
  Users,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";

const LOGO = "/study-sphere-logo-cropped.png";

const subjects = [
  {
    name: "Data Structures",
    code: "DSA",
    progress: 72,
    color: "from-blue-600 to-cyan-400",
    icon: Brain,
    href: "/subjects/dsa",
  },
  {
    name: "Engineering Mathematics",
    code: "MAT",
    progress: 64,
    color: "from-indigo-600 to-blue-400",
    icon: BookOpen,
    href: "/subjects",
  },
  {
    name: "Digital Electronics",
    code: "DE",
    progress: 48,
    color: "from-cyan-500 to-blue-500",
    icon: Zap,
    href: "/subjects",
  },
];

const upcoming = [
  {
    title: "DSA Mid-Sem Revision",
    subject: "Data Structures",
    date: "Tomorrow",
    time: "10:30 AM",
  },
  {
    title: "Mathematics Assignment",
    subject: "Engineering Mathematics",
    date: "24 Sep",
    time: "11:59 PM",
  },
  {
    title: "Digital Electronics Quiz",
    subject: "Digital Electronics",
    date: "26 Sep",
    time: "2:00 PM",
  },
];

const activities = [
  {
    icon: FileText,
    title: "Uploaded DSA Notes",
    description: "Linked Lists — Chapter 4",
    time: "18 min ago",
  },
  {
    icon: Users,
    title: "Joined a study group",
    description: "Digital Electronics",
    time: "1 hour ago",
  },
  {
    icon: Brain,
    title: "Completed AI practice",
    description: "Stack & Queue — 15 questions",
    time: "3 hours ago",
  },
];

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#f5f8fd] text-[#071426]">

      {sidebarOpen && (
        <button
          aria-label="Close sidebar"
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-[#061529]/40 backdrop-blur-sm lg:hidden"
        />
      )}

      {/* SIDEBAR */}

      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-[250px] flex-col border-r border-blue-100 bg-white transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >

        <div className="flex h-[76px] items-center justify-between border-b border-blue-100 px-5">

          <Link href="/">
            <Image
              src={LOGO}
              alt="Study Sphere"
              width={190}
              height={60}
              priority
              className="h-11 w-auto object-contain"
            />
          </Link>

          <button
            onClick={() => setSidebarOpen(false)}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-50 lg:hidden"
          >
            <X size={18} />
          </button>

        </div>

        <div className="flex-1 overflow-y-auto px-4 py-6">

          <p className="mb-3 px-3 text-[9px] font-bold tracking-[0.18em] text-slate-400">
            MAIN
          </p>

          <nav className="space-y-1">

            <SidebarItem
              href="/dashboard"
              icon={Home}
              label="Dashboard"
              active
            />

            <SidebarItem
              href="/subjects"
              icon={BookOpen}
              label="My Subjects"
            />

            <SidebarItem
              href="#groups"
              icon={Users}
              label="Study Groups"
            />

            <SidebarItem
              href="#notes"
              icon={FileText}
              label="Notes & Resources"
            />

          </nav>

          <p className="mb-3 mt-8 px-3 text-[9px] font-bold tracking-[0.18em] text-slate-400">
            LEARNING
          </p>

          <nav className="space-y-1">

            <SidebarItem
              href="#ai"
              icon={Brain}
              label="AI Tutor"
              badge="AI"
            />

            <SidebarItem
              href="#planner"
              icon={CalendarDays}
              label="Tasks & Schedule"
            />

            <SidebarItem
              href="#progress"
              icon={Target}
              label="Progress"
            />

          </nav>

          <p className="mb-3 mt-8 px-3 text-[9px] font-bold tracking-[0.18em] text-slate-400">
            ACCOUNT
          </p>

          <nav className="space-y-1">

            <SidebarItem
              href="#messages"
              icon={MessageSquare}
              label="Messages"
            />

            <SidebarItem
              href="#settings"
              icon={Settings}
              label="Settings"
            />

          </nav>

        </div>

        <div className="border-t border-blue-100 p-4">

          <div className="flex items-center gap-3 rounded-xl p-2.5 transition hover:bg-blue-50">

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-400 text-xs font-bold text-white">
              S
            </div>

            <div className="min-w-0 flex-1">

              <p className="truncate text-[11px] font-bold text-slate-800">
                Student
              </p>

              <p className="truncate text-[9px] text-slate-400">
                Learner account
              </p>

            </div>

            <MoreHorizontal size={15} className="text-slate-400" />

          </div>

        </div>

      </aside>

      {/* MAIN */}

      <div className="lg:pl-[250px]">

        <header className="sticky top-0 z-30 flex h-[76px] items-center justify-between border-b border-blue-100 bg-white/90 px-5 backdrop-blur-xl sm:px-7">

          <div className="flex items-center gap-3">

            <button
              onClick={() => setSidebarOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-100 bg-white text-slate-600 lg:hidden"
            >
              <Menu size={19} />
            </button>

            <div className="hidden sm:block">

              <p className="text-[9px] font-bold tracking-[0.18em] text-blue-600">
                STUDY SPHERE
              </p>

              <p className="mt-0.5 text-[12px] font-semibold text-slate-400">
                Your digital classroom
              </p>

            </div>

          </div>

          <div className="flex items-center gap-3">

            <div className="hidden items-center gap-2 rounded-xl border border-blue-100 bg-[#f8fbff] px-3 py-2 sm:flex">

              <Search size={14} className="text-slate-400" />

              <input
                placeholder="Search..."
                className="w-36 bg-transparent text-[11px] font-medium outline-none placeholder:text-slate-400"
              />

              <span className="rounded-md border border-slate-200 bg-white px-1.5 py-0.5 text-[8px] text-slate-400">
                /
              </span>

            </div>

            <button className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-blue-100 bg-white text-slate-500 transition hover:border-blue-200 hover:text-blue-600">

              <Bell size={17} />

              <span className="absolute right-2.5 top-2 h-1.5 w-1.5 rounded-full bg-blue-500" />

            </button>

            <button className="flex h-10 items-center gap-2 rounded-xl border border-blue-100 bg-white px-2.5">

              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-400 text-[9px] font-bold text-white">
                S
              </div>

              <span className="hidden text-[10px] font-bold text-slate-600 sm:block">
                Student
              </span>

            </button>

          </div>

        </header>

        <div className="mx-auto max-w-[1500px] p-5 sm:p-7 lg:p-9">

          {/* WELCOME */}

          <section className="relative overflow-hidden rounded-[22px] border border-blue-200/70 bg-gradient-to-br from-[#eaf3ff] via-white to-[#effaff] p-6 sm:p-8">

            <div className="pointer-events-none absolute right-[-100px] top-[-120px] h-[300px] w-[300px] rounded-full bg-blue-200/40 blur-[90px]" />

            <div className="pointer-events-none absolute bottom-[-100px] left-[35%] h-[250px] w-[250px] rounded-full bg-cyan-100/50 blur-[80px]" />

            <div className="tech-grid absolute inset-0 opacity-40" />

            <div className="relative flex flex-col justify-between gap-7 md:flex-row md:items-center">

              <div>

                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-3 py-1.5 text-[9px] font-bold text-blue-600">

                  <Sparkles size={11} />

                  YOUR LEARNING SPACE

                </div>

                <h1 className="text-2xl font-extrabold tracking-[-0.04em] sm:text-3xl lg:text-4xl">
                  Welcome back, Student 👋
                </h1>

                <p className="mt-2 max-w-xl text-[12px] leading-6 text-slate-500 sm:text-[13px]">

                  Keep your momentum going. You have{" "}

                  <span className="font-bold text-blue-600">
                    3 upcoming tasks
                  </span>

                  {" "}and{" "}

                  <span className="font-bold text-blue-600">
                    2 study sessions
                  </span>

                  {" "}scheduled.

                </p>

              </div>

              <Link
                href="/subjects/dsa"
                className="group flex w-fit items-center gap-2 rounded-xl bg-[#0757d9] px-5 py-3 text-[11px] font-bold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-[#0649b8]"
              >

                Continue Learning

                <ChevronRight
                  size={14}
                  className="transition group-hover:translate-x-0.5"
                />

              </Link>

            </div>

          </section>

          {/* STATS */}

          <section
            id="progress"
            className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4"
          >

            <StatCard
              icon={Clock3}
              label="Study Time"
              value="12h 40m"
              detail="+18% this week"
            />

            <StatCard
              icon={Target}
              label="Average Accuracy"
              value="84%"
              detail="+6% this month"
            />

            <StatCard
              icon={BookOpen}
              label="Subjects"
              value="06"
              detail="3 active today"
            />

            <StatCard
              icon={Zap}
              label="Study Streak"
              value="12 days"
              detail="Personal best"
            />

          </section>

          {/* MAIN GRID */}

          <div className="mt-5 grid gap-5 xl:grid-cols-[1.7fr_1fr]">

            <section
              id="subjects"
              className="rounded-[20px] border border-blue-100 bg-white p-5 sm:p-6"
            >

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-[9px] font-bold tracking-[0.18em] text-blue-600">
                    YOUR LEARNING
                  </p>

                  <h2 className="mt-1 text-base font-extrabold">
                    Continue studying
                  </h2>

                </div>

                <Link
                  href="/subjects"
                  className="text-[10px] font-bold text-blue-600 hover:text-blue-800"
                >
                  View all
                </Link>

              </div>

              <div className="mt-5 space-y-3">

                {subjects.map((subject) => {

                  const Icon = subject.icon;

                  return (
                    <Link
                      href={subject.href}
                      key={subject.code}
                      className="group block rounded-xl border border-slate-100 bg-[#fbfdff] p-4 transition hover:border-blue-100 hover:bg-blue-50/30"
                    >

                      <div className="flex items-center gap-4">

                        <div
                          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${subject.color} text-white shadow-sm`}
                        >
                          <Icon size={18} />
                        </div>

                        <div className="min-w-0 flex-1">

                          <div className="flex items-center justify-between gap-3">

                            <div>

                              <h3 className="text-[12px] font-bold text-slate-800">
                                {subject.name}
                              </h3>

                              <p className="mt-0.5 text-[9px] text-slate-400">
                                {subject.code} • Active course
                              </p>

                            </div>

                            <span className="text-[10px] font-extrabold text-blue-600">
                              {subject.progress}%
                            </span>

                          </div>

                          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-100">

                            <div
                              className={`h-full rounded-full bg-gradient-to-r ${subject.color}`}
                              style={{
                                width: `${subject.progress}%`,
                              }}
                            />

                          </div>

                        </div>

                        <div className="hidden h-8 w-8 items-center justify-center rounded-lg border border-blue-100 bg-white text-blue-600 opacity-0 transition group-hover:opacity-100 sm:flex">
                          <ChevronRight size={14} />
                        </div>

                      </div>

                    </Link>
                  );
                })}

              </div>

              <Link
                href="/subjects"
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-blue-200 py-3 text-[10px] font-bold text-blue-600 transition hover:bg-blue-50"
              >

                <Plus size={13} />

                Add a subject

              </Link>

            </section>

            {/* AI */}

            <section
              id="ai"
              className="relative overflow-hidden rounded-[20px] bg-[#071426] p-6 text-white"
            >

              <div className="tech-grid-dark absolute inset-0 opacity-60" />

              <div className="absolute right-[-70px] top-[-70px] h-[190px] w-[190px] rounded-full bg-blue-500/20 blur-[60px]" />

              <div className="relative">

                <div className="flex items-center justify-between">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/15 text-cyan-400">
                    <Brain size={19} />
                  </div>

                  <span className="flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-[8px] font-bold text-emerald-300">

                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

                    ONLINE

                  </span>

                </div>

                <p className="mt-6 text-[9px] font-bold tracking-[0.18em] text-cyan-400">
                  AI STUDY TUTOR
                </p>

                <h2 className="mt-1 text-xl font-extrabold">
                  Learn anything.
                  <br />
                  Ask anything.
                </h2>

                <p className="mt-3 text-[11px] leading-5 text-slate-400">
                  Get conceptual explanations, practice questions and guided
                  revision whenever you need it.
                </p>

                <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.045] p-3">

                  <div className="flex items-center gap-2">

                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                      <MessageSquare size={13} />
                    </div>

                    <span className="text-[9px] font-semibold text-slate-300">
                      Ask your first question
                    </span>

                  </div>

                </div>

                <button className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 text-[10px] font-bold text-white transition hover:bg-blue-500">

                  Open AI Tutor

                  <ChevronRight size={13} />

                </button>

              </div>

            </section>

          </div>

          {/* BOTTOM */}

          <div className="mt-5 grid gap-5 xl:grid-cols-2">

            <section
              id="planner"
              className="rounded-[20px] border border-blue-100 bg-white p-5 sm:p-6"
            >

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-[9px] font-bold tracking-[0.18em] text-blue-600">
                    PLANNER
                  </p>

                  <h2 className="mt-1 text-base font-extrabold">
                    Upcoming
                  </h2>

                </div>

                <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-blue-100 text-slate-400 hover:text-blue-600">
                  <CalendarDays size={14} />
                </button>

              </div>

              <div className="mt-5 space-y-2">

                {upcoming.map((item, index) => (

                  <div
                    key={item.title}
                    className="flex items-center gap-3 rounded-xl border border-slate-100 p-3 transition hover:border-blue-100 hover:bg-blue-50/30"
                  >

                    <div className="flex h-9 w-9 shrink-0 flex-col items-center justify-center rounded-lg bg-blue-50">

                      <span className="text-[7px] font-bold uppercase text-blue-500">
                        SEP
                      </span>

                      <span className="text-[11px] font-extrabold text-blue-700">
                        {index === 0 ? "22" : index === 1 ? "24" : "26"}
                      </span>

                    </div>

                    <div className="min-w-0 flex-1">

                      <p className="truncate text-[11px] font-bold text-slate-800">
                        {item.title}
                      </p>

                      <p className="mt-0.5 truncate text-[9px] text-slate-400">
                        {item.subject}
                      </p>

                    </div>

                    <div className="hidden text-right sm:block">

                      <p className="text-[9px] font-bold text-slate-600">
                        {item.date}
                      </p>

                      <p className="mt-0.5 text-[8px] text-slate-400">
                        {item.time}
                      </p>

                    </div>

                  </div>

                ))}

              </div>

            </section>

            <section
              id="notes"
              className="rounded-[20px] border border-blue-100 bg-white p-5 sm:p-6"
            >

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-[9px] font-bold tracking-[0.18em] text-blue-600">
                    RECENT ACTIVITY
                  </p>

                  <h2 className="mt-1 text-base font-extrabold">
                    Your activity
                  </h2>

                </div>

                <button className="text-[10px] font-bold text-blue-600">
                  See all
                </button>

              </div>

              <div className="mt-5 space-y-1">

                {activities.map((activity) => {

                  const Icon = activity.icon;

                  return (
                    <div
                      key={activity.title}
                      className="flex items-center gap-3 rounded-xl p-3 transition hover:bg-blue-50/50"
                    >

                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                        <Icon size={15} />
                      </div>

                      <div className="min-w-0 flex-1">

                        <p className="truncate text-[10px] font-bold text-slate-700">
                          {activity.title}
                        </p>

                        <p className="mt-0.5 truncate text-[9px] text-slate-400">
                          {activity.description}
                        </p>

                      </div>

                      <span className="whitespace-nowrap text-[8px] text-slate-400">
                        {activity.time}
                      </span>

                    </div>
                  );
                })}

              </div>

            </section>

          </div>

          {/* GROUP */}

          <section
            id="groups"
            className="relative mt-5 overflow-hidden rounded-[20px] border border-blue-100 bg-gradient-to-r from-white via-[#f7fbff] to-[#edf8ff] p-5 sm:p-6"
          >

            <div className="tech-grid absolute inset-0 opacity-30" />

            <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-500/20">
                  <Users size={20} />
                </div>

                <div>

                  <p className="text-[9px] font-bold tracking-[0.18em] text-blue-600">
                    COLLABORATE
                  </p>

                  <h2 className="mt-1 text-sm font-extrabold sm:text-base">
                    Find your study community
                  </h2>

                  <p className="mt-1 text-[10px] text-slate-400">
                    Join classmates, share resources and learn together.
                  </p>

                </div>

              </div>

              <button className="flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-2.5 text-[10px] font-bold text-blue-600 shadow-sm ring-1 ring-blue-100 transition hover:bg-blue-50">

                Explore Study Groups

                <ChevronRight size={13} />

              </button>

            </div>

          </section>

        </div>

      </div>

    </main>
  );
}

function SidebarItem({
  href,
  icon: Icon,
  label,
  active = false,
  badge,
}: {
  href: string;
  icon: React.ElementType;
  label: string;
  active?: boolean;
  badge?: string;
}) {
  return (
    <Link
      href={href}
      className={`group flex items-center gap-3 rounded-xl px-3 py-2.5 text-[11px] font-semibold transition ${
        active
          ? "bg-blue-50 text-blue-600"
          : "text-slate-500 hover:bg-blue-50/60 hover:text-blue-600"
      }`}
    >

      <Icon
        size={15}
        className={
          active
            ? "text-blue-600"
            : "text-slate-400 group-hover:text-blue-500"
        }
      />

      <span className="flex-1">{label}</span>

      {badge && (
        <span className="rounded-md bg-blue-100 px-1.5 py-0.5 text-[7px] font-extrabold text-blue-600">
          {badge}
        </span>
      )}

    </Link>
  );
}

function StatCard({
  icon: Icon,
  label,
  value,
  detail,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  detail: string;
}) {
  return (
    <div className="group rounded-[17px] border border-blue-100 bg-white p-4 transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/40">

      <div className="flex items-start justify-between">

        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
          <Icon size={15} />
        </div>

        <span className="text-[8px] font-semibold text-emerald-500">
          {detail}
        </span>

      </div>

      <p className="mt-4 text-[9px] font-semibold text-slate-400">
        {label}
      </p>

      <p className="mt-1 text-lg font-extrabold tracking-tight text-slate-800">
        {value}
      </p>

    </div>
  );
}