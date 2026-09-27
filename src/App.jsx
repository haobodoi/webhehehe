import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  Check,
  ChevronRight,
  CircleAlert,
  Coffee,
  Globe2,
  Layers3,
  Leaf,
  Megaphone,
  Menu,
  Minus,
  MonitorSmartphone,
  PackageCheck,
  Sparkles,
  Store,
  TrendingUp,
  Users,
  X,
} from "lucide-react";
import DrinkVisual from "./components/DrinkVisual";
import SectionTitle from "./components/SectionTitle";

const sections = [
  ["s1", "Bối cảnh"],
  ["s2", "Thích nghi"],
  ["s3", "Vận hành"],
  ["s4", "Cân bằng"],
  ["s5", "Kết luận"],
];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("s1");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.2,
  });

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach(
          (entry) => entry.isIntersecting && setActive(entry.target.id),
        );
      },
      { rootMargin: "-42% 0px -48% 0px" },
    );
    sections.forEach(([id]) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  const go = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.div className="page-progress" style={{ scaleX }} />
      <header className="topbar">
        <button
          className="brand"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Về đầu trang"
        >
          <span className="brand-mark">
            <Leaf size={16} />
          </span>
          <span>SB × CHANGE</span>
        </button>
        <nav className="desktop-nav" aria-label="Điều hướng chính">
          {sections.map(([id, label]) => (
            <button
              key={id}
              className={active === id ? "active" : ""}
              onClick={() => go(id)}
            >
              {label}
            </button>
          ))}
        </nav>
        <button
          className="menu-btn"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Mở menu"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      {menuOpen && (
        <motion.div
          className="mobile-menu"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {sections.map(([id, label], i) => (
            <button key={id} onClick={() => go(id)}>
              <span>0{i + 1}</span>
              {label}
              <ChevronRight size={18} />
            </button>
          ))}
        </motion.div>
      )}

      <main>
        <section className="hero" id="top">
          <div className="hero-noise" />
          <div className="hero-glow glow-a" />
          <div className="hero-glow glow-b" />
          <div className="hero-shell">
            <motion.div
              className="hero-copy"
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.11 } } }}
            >
              <motion.div variants={reveal} className="eyebrow">
                <Sparkles size={14} /> CASE STUDY · QUẢN TRỊ SỰ THAY ĐỔI
              </motion.div>
              <motion.h1 variants={reveal}>
                STARBUCKS
                <br />
                <span>ĐỔI MỚI</span>
              </motion.h1>
              <motion.p variants={reveal} className="hero-sub">
                Một ly trà sữa nhìn như một thay đổi nhỏ. Nhưng phía sau nó là
                câu chuyện về cách một tổ chức thích nghi với thị trường mà vẫn
                giữ bản sắc.
              </motion.p>
              <motion.div variants={reveal} className="hero-actions">
                <button className="primary-btn" onClick={() => go("s1")}>
                  Khám phá câu chuyện <ArrowDown size={18} />
                </button>
                <div className="hero-meta">
                  <span>05 chương</span>
                  <span>Mobile-first</span>
                  <span>Interactive</span>
                </div>
              </motion.div>
            </motion.div>
            <DrinkVisual />
          </div>
          <div className="scroll-note">
            <span>SCROLL TO EXPLORE</span>
            <div className="scroll-line" />
          </div>
        </section>

        <section className="section cream" id="s1">
          <div className="container">
            <SectionTitle number="01 / 05" eyebrow="Bối cảnh">
              Thay đổi không bắt đầu từ sản phẩm.
            </SectionTitle>
            <motion.p
              className="lead"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={reveal}
            >
              Nó bắt đầu từ bên ngoài tổ chức: thị trường F&amp;B cạnh tranh
              cao, lựa chọn đồ uống ngày càng đa dạng và trà sữa đã trở nên quen
              thuộc với nhóm khách hàng trẻ.
            </motion.p>
            <motion.figure
              className="context-photo"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img
                src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1600&q=85"
                alt="Không gian quán cà phê ấm áp với ánh nắng và bàn gỗ"
              />
              <figcaption>
                <span>THE THIRD PLACE</span>
                <strong>Không gian cũng là một phần của trải nghiệm.</strong>
              </figcaption>
            </motion.figure>
            <div className="story-flow">
              {[
                [Globe2, "Thị trường", "Cạnh tranh cao"],
                [TrendingUp, "Xu hướng", "Nhu cầu đổi mới"],
                [Users, "Khách hàng", "Lựa chọn đa dạng"],
                [CircleAlert, "Áp lực", "Không thể đứng yên"],
                [Coffee, "Phản ứng", "Đưa trà sữa vào menu"],
              ].map(([Icon, title, desc], i) => (
                <motion.div
                  className="flow-card"
                  key={title}
                  custom={i}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={reveal}
                >
                  <div className="flow-icon">
                    <Icon />
                  </div>
                  <strong>{title}</strong>
                  <span>{desc}</span>
                  {i < 4 && <ArrowRight className="flow-arrow" />}
                </motion.div>
              ))}
            </div>
            <motion.blockquote
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              “Doanh nghiệp không thay đổi chỉ để làm mới. Thay đổi xuất phát từ
              áp lực của môi trường và nhu cầu thích nghi.”
            </motion.blockquote>
            <div className="split-note">
              <div>
                <span className="mini-label">LOCALIZATION</span>
                <h3>Không sao chép. Tái diễn giải.</h3>
              </div>
              <p>
                Starbucks phát triển dòng riêng với các nền trà như trà đen, ô
                long và hojicha — một cách tìm điểm cân bằng giữa thị trường
                Việt Nam và cách tiếp cận riêng của thương hiệu.
              </p>
            </div>
          </div>
        </section>

        <section className="section paper" id="s2">
          <div className="container">
            <SectionTitle number="02 / 05" eyebrow="Thích nghi">
              Một sản phẩm mới không phải điểm kết thúc.
            </SectionTitle>
            <p className="lead">
              Thị trường luôn vận động. Vì vậy, thích nghi cũng phải là một quá
              trình liên tục chứ không phải một quyết định diễn ra một lần.
            </p>
            <div className="timeline-grid">
              {[
                [
                  "MỞ RỘNG",
                  Store,
                  "Không gian",
                  "Phát triển hệ thống cửa hàng ngoài những thị trường lớn.",
                ],
                [
                  "ĐỔI MỚI",
                  Layers3,
                  "Mô hình",
                  "Reserve, Reserve Mixology Bar, Starbucks Truck.",
                ],
                [
                  "SỐ HÓA",
                  MonitorSmartphone,
                  "Tiếp cận",
                  "Nền tảng số và social commerce thay đổi cách kết nối khách hàng.",
                ],
                [
                  "SẢN PHẨM",
                  Coffee,
                  "Trà sữa",
                  "Một bước tiếp theo trong chuỗi thích nghi, không phải đích đến.",
                ],
              ].map(([tag, Icon, title, desc], i) => (
                <motion.article
                  className="timeline-card"
                  key={tag}
                  custom={i}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={reveal}
                >
                  <div className="timeline-top">
                    <span>0{i + 1}</span>
                    <Icon size={21} />
                  </div>
                  <div className="tag">{tag}</div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="section dark" id="s3">
          <div className="container">
            <SectionTitle number="03 / 05" eyebrow="Tổ chức" dark>
              Một ly trà sữa.
              <br />
              Một tổ chức phải chuyển động.
            </SectionTitle>
            <p className="lead light">
              Khách hàng chỉ nhìn thấy món mới. Nhưng để món mới xuất hiện ổn
              định, nhiều bộ phận phía sau phải cùng thay đổi.
            </p>
            <div className="impact-grid">
              {[
                [
                  PackageCheck,
                  "PRODUCT",
                  "Sản phẩm",
                  "Công thức, nền trà, nguyên liệu, hương vị.",
                ],
                [
                  Megaphone,
                  "BRAND",
                  "Marketing",
                  "Khách hàng mục tiêu, thông điệp và vị trí sản phẩm.",
                ],
                [
                  BarChart3,
                  "OPERATION",
                  "Vận hành",
                  "Đào tạo Barista, quy trình pha chế và chuỗi cung ứng.",
                ],
                [
                  Sparkles,
                  "EXPERIENCE",
                  "Trải nghiệm",
                  "Phù hợp thị trường nhưng vẫn giữ cá tính thương hiệu.",
                ],
              ].map(([Icon, tag, title, desc], i) => (
                <motion.article
                  className="impact-card"
                  key={tag}
                  whileHover={{ y: -8 }}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  custom={i}
                  variants={reveal}
                >
                  <div className="impact-icon">
                    <Icon />
                  </div>
                  <span>
                    {String(i + 1).padStart(2, "0")} · {tag}
                  </span>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </motion.article>
              ))}
            </div>
            <motion.div
              className="statement"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="statement-badge">
                <Coffee />
              </div>
              <h3>
                Một thay đổi ở sản phẩm <ArrowRight /> kéo theo thay đổi ở nhiều
                hoạt động khác.
              </h3>
              <p>Đó là lý do thay đổi trong tổ chức mang tính toàn diện.</p>
            </motion.div>
          </div>
        </section>

        <section className="section cream" id="s4">
          <div className="container">
            <SectionTitle number="04 / 05" eyebrow="Trade-off">
              Thay đổi mở ra cơ hội — nhưng cũng tạo ra bài toán mới.
            </SectionTitle>
            <div className="balance-grid">
              <motion.div
                className="balance-card opportunity"
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="balance-head">
                  <div>
                    <span>CƠ HỘI</span>
                    <h3>Mở rộng không gian tăng trưởng</h3>
                  </div>
                  <TrendingUp />
                </div>
                {[
                  "Mở rộng danh mục sản phẩm",
                  "Tiếp cận thêm khách hàng trẻ",
                  "Tăng mức độ bản địa hóa",
                  "Thích nghi với xu hướng đồ uống",
                ].map((x) => (
                  <div className="balance-row" key={x}>
                    <Check size={17} />
                    <span>{x}</span>
                  </div>
                ))}
              </motion.div>
              <div className="versus">
                <span>VS</span>
                <div />
              </div>
              <motion.div
                className="balance-card challenge"
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="balance-head">
                  <div>
                    <span>THÁCH THỨC</span>
                    <h3>Giữ chuẩn khi thay đổi nhanh</h3>
                  </div>
                  <CircleAlert />
                </div>
                {[
                  "Cạnh tranh với thương hiệu trà sữa",
                  "Giá và chi phí nguyên liệu",
                  "Chất lượng và vận hành",
                  "Nguy cơ ảnh hưởng bản sắc thương hiệu",
                ].map((x) => (
                  <div className="balance-row" key={x}>
                    <Minus size={17} />
                    <span>{x}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        <section className="section paper final-section" id="s5">
          <div className="container">
            <SectionTitle number="05 / 05" eyebrow="Điểm cân bằng">
              Bài toán không phải “có thay đổi hay không”.
            </SectionTitle>
            <p className="lead">
              Bài toán khó hơn là xác định mức độ thay đổi: đủ để phù hợp với
              khách hàng Việt Nam, nhưng vẫn giữ được sự khác biệt của
              Starbucks.
            </p>
            <div className="meter-wrap">
              <div className="meter-labels">
                <span>Quá ít</span>
                <span>Thích nghi có kiểm soát</span>
                <span>Quá nhiều</span>
              </div>
              <div className="meter">
                <motion.div
                  className="meter-dot"
                  initial={{ left: "3%" }}
                  whileInView={{ left: "50%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
              <div className="meter-caption">
                <span>Khó bắt kịp nhu cầu</span>
                <span>Có nguy cơ mất bản sắc</span>
              </div>
            </div>
            <motion.div
              className="question-card"
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <span className="mini-label light-label">THE CORE QUESTION</span>
              <h3>
                Thay đổi cái gì?
                <br />
                Thay đổi đến đâu?
                <br />
                <em>Thay đổi như thế nào?</em>
              </h3>
              <p>Đó mới là câu hỏi cốt lõi của quản trị sự thay đổi.</p>
            </motion.div>
          </div>
        </section>

        <section className="closing">
          <div className="closing-orb" />
          <div className="container closing-inner">
            <span className="mini-label">KEY TAKEAWAY</span>
            <h2>
              THÍCH NGHI
              <br />
              <span>NHƯNG KHÔNG</span>
              <br />
              ĐÁNH MẤT BẢN SẮC.
            </h2>
            <div className="closing-line" />
            <p>
              Starbucks không chỉ thay đổi một món đồ uống. Câu chuyện trà sữa
              cho thấy cách một tổ chức phản ứng trước môi trường, điều chỉnh
              nhiều hoạt động cùng lúc và liên tục tìm điểm cân bằng giữa thích
              nghi với thị trường và duy trì bản sắc.
            </p>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-inner">
          <span>STARBUCKS × CHANGE MANAGEMENT</span>
          <span>MINI WEB PRESENTATION · 2026</span>
        </div>
      </footer>
    </>
  );
}

export default App;
