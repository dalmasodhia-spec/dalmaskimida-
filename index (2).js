import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Dalmas Odhiambo | Inventory Accountant</title>
        <meta
          name="description"
          content="Inventory Accountant specialising in stock accuracy, financial reporting, SKU structuring, and ERP systems. Available for freelance and full-time roles."
        />
        <meta property="og:title" content="Dalmas Odhiambo | Inventory Accountant" />
        <meta
          property="og:description"
          content="Precision in every unit counted, every ledger balanced."
        />
        <meta property="og:type" content="website" />
      </Head>

      <div className="bg-[#0A0F1E] text-white min-h-screen font-sans">

        {/* ── NAV ── */}
        <nav className="fixed top-0 left-0 right-0 z-50 px-10 py-4 flex justify-between items-center bg-[#0A0F1E]/80 backdrop-blur border-b border-white/5">
          <span className="text-cyan-400 font-semibold tracking-widest text-sm uppercase">
            Dalmas Odhiambo
          </span>
          <div className="hidden md:flex gap-8 text-sm text-gray-400">
            <a href="#competencies" className="hover:text-white transition">Skills</a>
            <a href="#services"     className="hover:text-white transition">Services</a>
            <a href="#projects"     className="hover:text-white transition">Projects</a>
            <a href="#contact"      className="hover:text-white transition">Contact</a>
          </div>
        </nav>

        {/* ── HERO ── */}
        <section className="flex flex-col md:flex-row items-center justify-between px-10 pt-36 pb-24 max-w-6xl mx-auto gap-12">

          {/* Left */}
          <motion.div
            className="max-w-xl"
            variants={stagger}
            initial="hidden"
            animate="show"
          >
            <motion.p
              variants={fadeUp}
              className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-4"
            >
              Inventory Accountant
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-6xl font-bold leading-tight"
            >
              Bringing{" "}
              <span className="text-cyan-400">Accuracy</span>{" "}
              to Numbers.
              <br />
              Control to{" "}
              <span
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent"
                style={{ WebkitBackgroundClip: "text", backgroundClip: "text" }}
              >
                Inventory
              </span>
              .
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-6 text-gray-400 text-lg leading-relaxed">
              Inventory Accounting · Stock Reconciliation · Financial Reporting
            </motion.p>

            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-7 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl font-medium hover:opacity-90 transition"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-7 py-3 border border-cyan-400 rounded-xl text-cyan-400 font-medium hover:bg-cyan-400/10 transition"
              >
                Work With Me
              </a>
            </motion.div>
          </motion.div>

          {/* Right – profile image */}
          <motion.img
            src="/profile.png"
            alt="Dalmas Odhiambo, Inventory Accountant"
            className="w-72 md:w-80 rounded-2xl shadow-2xl shadow-cyan-900/30 object-cover"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          />
        </section>

        {/* ── CORE COMPETENCIES ── */}
        <motion.section
          id="competencies"
          className="px-10 py-20 max-w-6xl mx-auto"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.h2 variants={fadeUp} className="text-3xl font-bold mb-12">
            Core Competencies
          </motion.h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {[
              { icon: "📦", label: "Stock Accuracy Management" },
              { icon: "📒", label: "Accounts Payable & Receivable" },
              { icon: "🔄", label: "Inventory Reconciliation" },
              { icon: "📊", label: "Financial Reporting" },
              { icon: "🏷️", label: "SKU Structuring" },
              { icon: "🖥️", label: "ERP Systems (Zoho Inventory)" },
            ].map(({ icon, label }, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="p-6 bg-[#111827] rounded-2xl border border-white/5 hover:border-cyan-500/40 hover:scale-[1.03] transition-all duration-200 flex items-center gap-4"
              >
                <span className="text-2xl">{icon}</span>
                <span className="font-medium text-gray-200">{label}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── SERVICES ── */}
        <motion.section
          id="services"
          className="px-10 py-20 bg-[#060B18]"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto">
            <motion.h2 variants={fadeUp} className="text-3xl font-bold mb-12">
              Services
            </motion.h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
              {[
                { icon: "📝", title: "Bookkeeping", desc: "Accurate ledger maintenance and transaction recording." },
                { icon: "🗃️", title: "Inventory Control", desc: "End-to-end stock tracking, audits, and variance analysis." },
                { icon: "✅", title: "Reconciliation", desc: "Matching physical counts to system records, every time." },
                { icon: "📈", title: "Data Analysis", desc: "Turning inventory data into actionable financial insights." },
              ].map(({ icon, title, desc }, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="p-6 bg-[#0A0F1E] border border-gray-800 rounded-xl hover:border-cyan-500/40 transition-colors"
                >
                  <div className="text-3xl mb-4">{icon}</div>
                  <h3 className="font-semibold text-white mb-2">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ── PROJECTS ── */}
        <motion.section
          id="projects"
          className="px-10 py-20 max-w-6xl mx-auto"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.h2 variants={fadeUp} className="text-3xl font-bold mb-12">
            Projects
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                tag: "Inventory",
                title: "Inventory System Setup",
                desc: "Implemented a full SKU structure and improved stock tracking accuracy by 40% using Zoho Inventory, reducing write-offs and discrepancies across 3 warehouse locations.",
              },
              {
                tag: "Accounting",
                title: "Accounts Optimisation",
                desc: "Streamlined receivables workflows and reduced outstanding balances by 30% within two quarters through systematic follow-up and payment scheduling.",
              },
            ].map(({ tag, title, desc }, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="p-7 bg-[#111827] rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-colors"
              >
                <span className="text-xs font-semibold text-cyan-400 tracking-widest uppercase">
                  {tag}
                </span>
                <h3 className="font-bold text-lg mt-2 mb-3">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── CONTACT ── */}
        <motion.section
          id="contact"
          className="px-10 py-24 bg-[#060B18] text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-gray-400 mb-10 max-w-md mx-auto">
            Looking for a detail-oriented Inventory Accountant? Reach out — I'd love to hear about your project.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:dalmasodhia@gmail.com"
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl font-medium hover:opacity-90 transition"
            >
              dalmasodhia@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/dalmasodhiambo"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-cyan-400 rounded-xl text-cyan-400 font-medium hover:bg-cyan-400/10 transition"
            >
              LinkedIn ↗
            </a>
          </div>
        </motion.section>

        {/* ── FOOTER ── */}
        <footer className="px-10 py-6 text-center text-gray-600 text-sm border-t border-white/5">
          © {new Date().getFullYear()} Dalmas Odhiambo · Inventory Accountant
        </footer>

      </div>
    </>
  );
}
