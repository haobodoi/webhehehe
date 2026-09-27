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

/*
  ẢNH STANDARD + RESERVE BAR
*/
import standardStore from "./images/1790512256366_204560887683120085_204560887683120085_231aee3bfc3aef20e05ec647d9c89046.jpg";

import reserveBar from "./images/1790512256386_204560887683120085_204560887683120085_08e6362a90f3251a9a0637c2e601da13.jpg";

/*
  ẢNH PHẦN 03 / 05
*/
import productShot from "./images/khachhang.jpg";
import marketingShot from "./images/marketing.jpg";
import operationShot from "./images/vanhanh.jpg";
import experienceShot from "./images/trainghiem.jpg";

/* =========================================================
   MENU
========================================================= */

const sections = [
  ["s1", "Bối cảnh"],
  ["s2", "Thích nghi"],
  ["s3", "Tổ chức"],
  ["s4", "Cân bằng"],
  ["s5", "Điểm cân bằng"],
];

/* =========================================================
   ANIMATION
========================================================= */

const reveal = {
  hidden: {
    opacity: 0,
    y: 24,
  },

  show: (i = 0) => ({
    opacity: 1,
    y: 0,

    transition: {
      delay: i * 0.08,
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

/* =========================================================
   APP
========================================================= */

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [active, setActive] = useState("s1");

  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.2,
  });

  /* =======================================================
     ACTIVE SECTION
  ======================================================= */

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },

      {
        rootMargin: "-42% 0px -48% 0px",
      },
    );

    sections.forEach(([id]) => {
      const element = document.getElementById(id);

      if (element) {
        io.observe(element);
      }
    });

    return () => io.disconnect();
  }, []);

  /* =======================================================
     SCROLL TO SECTION
  ======================================================= */

  const go = (id) => {
    setMenuOpen(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* ===================================================
          PROGRESS BAR
      =================================================== */}

      <motion.div
        className="page-progress"
        style={{
          scaleX,
        }}
      />

      {/* ===================================================
          NAVBAR
      =================================================== */}

      <header className="topbar">
        <button
          className="brand"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
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
          onClick={() => setMenuOpen((value) => !value)}
          aria-label="Mở menu"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      {/* ===================================================
          MOBILE MENU
      =================================================== */}

      {menuOpen && (
        <motion.div
          className="mobile-menu"
          initial={{
            opacity: 0,
            y: -12,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
        >
          {sections.map(([id, label], index) => (
            <button key={id} onClick={() => go(id)}>
              <span>0{index + 1}</span>

              {label}

              <ChevronRight size={18} />
            </button>
          ))}
        </motion.div>
      )}

      <main>
        {/* =================================================
            HERO
        ================================================= */}

        <section className="hero" id="top">
          <div className="hero-noise" />

          <div className="hero-glow glow-a" />

          <div className="hero-glow glow-b" />

          <div className="hero-shell">
            <motion.div
              className="hero-copy"
              initial="hidden"
              animate="show"
              variants={{
                show: {
                  transition: {
                    staggerChildren: 0.11,
                  },
                },
              }}
            >
              <motion.div variants={reveal} className="eyebrow">
                <Sparkles size={14} />
                CASE STUDY · QUẢN TRỊ SỰ THAY ĐỔI
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
                  Khám phá câu chuyện
                  <ArrowDown size={18} />
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

        {/* =================================================
            01 / 05
        ================================================= */}

        <section className="section cream" id="s1">
          <div className="container">
            <SectionTitle number="01 / 05" eyebrow="Bối cảnh">
              Thay đổi không bắt đầu từ sản phẩm.
            </SectionTitle>

            <motion.p
              className="lead"
              initial="hidden"
              whileInView="show"
              viewport={{
                once: true,
              }}
              variants={reveal}
            >
              Nó bắt đầu từ bên ngoài tổ chức: thị trường F&amp;B cạnh tranh
              cao, lựa chọn đồ uống ngày càng đa dạng và trà sữa đã trở nên quen
              thuộc với nhóm khách hàng trẻ.
            </motion.p>

            {/* STORY FLOW */}

            <div className="story-flow">
              {[
                [Globe2, "Thị trường", "Cạnh tranh cao"],

                [TrendingUp, "Xu hướng", "Nhu cầu đổi mới"],

                [Users, "Khách hàng", "Lựa chọn đa dạng"],

                [CircleAlert, "Áp lực", "Không thể đứng yên"],

                [Coffee, "Phản ứng", "Đưa trà sữa vào menu"],
              ].map(([Icon, title, description], index) => (
                <motion.div
                  className="flow-card"
                  key={title}
                  custom={index}
                  initial="hidden"
                  whileInView="show"
                  viewport={{
                    once: true,
                  }}
                  variants={reveal}
                >
                  <div className="flow-icon">
                    <Icon />
                  </div>

                  <strong>{title}</strong>

                  <span>{description}</span>

                  {index < 4 && <ArrowRight className="flow-arrow" />}
                </motion.div>
              ))}
            </div>

            {/* QUOTE */}

            <motion.blockquote
              initial={{
                opacity: 0,
                scale: 0.98,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
              }}
            >
              “Doanh nghiệp không thay đổi chỉ để làm mới. Thay đổi xuất phát từ
              áp lực của môi trường và nhu cầu thích nghi.”
            </motion.blockquote>

            {/* LOCALIZATION */}

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

        {/* =================================================
            02 / 05
        ================================================= */}

        <section className="section paper" id="s2">
          <div className="container">
            <SectionTitle number="02 / 05" eyebrow="Thích nghi">
              Một sản phẩm mới không phải điểm kết thúc.
            </SectionTitle>

            <p className="lead">
              Thị trường luôn vận động. Vì vậy, thích nghi cũng phải là một quá
              trình liên tục chứ không phải một quyết định diễn ra một lần.
            </p>

            {/* =================================================
                TIMELINE
            ================================================= */}

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
                  "Từ cửa hàng tiêu chuẩn đến Reserve Bar và những mô hình cao cấp hơn.",
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
              ].map(([tag, Icon, title, description], index) => (
                <motion.article
                  className="timeline-card"
                  key={tag}
                  custom={index}
                  initial="hidden"
                  whileInView="show"
                  viewport={{
                    once: true,
                  }}
                  variants={reveal}
                >
                  <div className="timeline-top">
                    <span>0{index + 1}</span>

                    <Icon size={21} />
                  </div>

                  <div className="tag">{tag}</div>

                  <h3>{title}</h3>

                  <p>{description}</p>
                </motion.article>
              ))}
            </div>

            {/* =================================================
                MODEL EVOLUTION
            ================================================= */}

            <motion.div
              className="model-evolution"
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: "-10%",
              }}
              transition={{
                duration: 0.7,
              }}
            >
              <div className="model-evolution-head">
                <div>
                  <span className="mini-label">MODEL EVOLUTION</span>

                  <h3>
                    Không chỉ mở thêm cửa hàng.
                    <br />
                    Starbucks thay đổi cả mô hình.
                  </h3>
                </div>

                <p>
                  Từ mô hình cửa hàng Starbucks tiêu chuẩn, thương hiệu phát
                  triển Starbucks Reserve và Reserve Bar để tiếp cận phân khúc
                  cao cấp hơn, đồng thời nâng cấp cả không gian lẫn trải nghiệm.
                </p>
              </div>

              {/* ===============================================
                  STANDARD → RESERVE
              =============================================== */}

              <div className="model-comparison">
                {/* STANDARD */}

                <motion.figure
                  className="model-card"
                  initial={{
                    opacity: 0,
                    x: -28,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.65,
                  }}
                >
                  <img
                    src={standardStore}
                    alt="Cửa hàng Starbucks tiêu chuẩn"
                  />

                  <div className="model-overlay" />

                  <figcaption>
                    <div className="model-number">01</div>

                    <span>STANDARD STORE</span>

                    <h4>Mô hình tiêu chuẩn</h4>

                    <p>
                      Không gian quen thuộc, tập trung vào cà phê, tính tiện lợi
                      và trải nghiệm Starbucks truyền thống.
                    </p>
                  </figcaption>
                </motion.figure>

                {/* ARROW */}

                <div className="model-arrow">
                  <div />

                  <span>
                    <ArrowRight size={22} />
                  </span>

                  <div />
                </div>

                {/* RESERVE */}

                <motion.figure
                  className="model-card reserve-card"
                  initial={{
                    opacity: 0,
                    x: 28,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.65,
                    delay: 0.12,
                  }}
                >
                  <img src={reserveBar} alt="Starbucks Reserve Bar" />

                  <div className="model-overlay" />

                  <figcaption>
                    <div className="model-number">02</div>

                    <span>STARBUCKS RESERVE</span>

                    <h4>Reserve Bar</h4>

                    <p>
                      Mô hình cao cấp hơn, nhấn mạnh chất lượng cà phê, thiết kế
                      không gian và trải nghiệm khám phá.
                    </p>
                  </figcaption>
                </motion.figure>
              </div>

              {/* ===============================================
                  KẾT QUẢ CHUYỂN ĐỔI
              =============================================== */}

              <div className="model-result">
                <div className="model-result-intro">
                  <span className="mini-label">
                    TỪ STANDARD ĐẾN RESERVE BAR
                  </span>

                  <h3>
                    Không gian thay đổi.
                    <br />
                    Trải nghiệm cũng thay đổi.
                  </h3>
                </div>

                <div className="model-result-grid">
                  {/* 01 */}

                  <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{
                      once: true,
                    }}
                    custom={0}
                    variants={reveal}
                  >
                    <span>01</span>

                    <TrendingUp />

                    <h4>Phân khúc cao cấp hơn</h4>

                    <p>
                      Hướng đến nhóm khách hàng sẵn sàng chi trả nhiều hơn cho
                      cà phê và trải nghiệm.
                    </p>
                  </motion.div>

                  {/* 02 */}

                  <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{
                      once: true,
                    }}
                    custom={1}
                    variants={reveal}
                  >
                    <span>02</span>

                    <Store />

                    <h4>Nâng cấp không gian</h4>

                    <p>
                      Thiết kế, vật liệu và bố cục cửa hàng trở thành một phần
                      quan trọng của giá trị thương hiệu.
                    </p>
                  </motion.div>

                  {/* 03 */}

                  <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{
                      once: true,
                    }}
                    custom={2}
                    variants={reveal}
                  >
                    <span>03</span>

                    <Sparkles />

                    <h4>Trải nghiệm mới</h4>

                    <p>
                      Khách hàng không chỉ mua đồ uống mà còn khám phá cách pha
                      chế, không gian và văn hóa cà phê.
                    </p>
                  </motion.div>
                </div>
              </div>

              {/* PATH */}

              <div className="model-path">
                <span>STANDARD</span>

                <ArrowRight />

                <span>RESERVE BAR</span>

                <ArrowRight />

                <strong>PREMIUM EXPERIENCE</strong>
              </div>
            </motion.div>
          </div>
        </section>

        {/* =================================================
            03 / 05
            SẢN PHẨM → MARKETING → VẬN HÀNH → TRẢI NGHIỆM
        ================================================= */}

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

            {/* =================================================
                01 PRODUCT
            ================================================= */}

            <div className="change-sequence">
              <motion.article
                className="change-card"
                initial="hidden"
                whileInView="show"
                viewport={{
                  once: true,
                }}
                custom={0}
                variants={reveal}
              >
                <div className="change-image">
                  <img src={productShot} alt="Sản phẩm trà sữa Starbucks" />

                  <span>01</span>
                </div>

                <div className="change-body">
                  <div className="change-icon">
                    <PackageCheck />
                  </div>

                  <span className="change-tag">PRODUCT</span>

                  <h3>Sản phẩm</h3>

                  <p>
                    Công thức, nền trà, nguyên liệu và hương vị được điều chỉnh
                    để tạo ra dòng sản phẩm phù hợp hơn với thị trường.
                  </p>
                </div>
              </motion.article>

              <div className="change-arrow">
                <ArrowRight />
              </div>

              {/* ===============================================
                  02 MARKETING
              =============================================== */}

              <motion.article
                className="change-card"
                initial="hidden"
                whileInView="show"
                viewport={{
                  once: true,
                }}
                custom={1}
                variants={reveal}
              >
                <div className="change-image">
                  <img
                    src={marketingShot}
                    alt="Chiến dịch marketing Starbucks Milk Tea"
                  />

                  <span>02</span>
                </div>

                <div className="change-body">
                  <div className="change-icon">
                    <Megaphone />
                  </div>

                  <span className="change-tag">MARKETING</span>

                  <h3>Marketing</h3>

                  <p>
                    Khách hàng mục tiêu, thông điệp truyền thông và vị trí của
                    sản phẩm trong hình ảnh thương hiệu cũng phải thay đổi.
                  </p>
                </div>
              </motion.article>

              <div className="change-arrow">
                <ArrowRight />
              </div>

              {/* ===============================================
                  03 OPERATION
              =============================================== */}

              <motion.article
                className="change-card"
                initial="hidden"
                whileInView="show"
                viewport={{
                  once: true,
                }}
                custom={2}
                variants={reveal}
              >
                <div className="change-image landscape">
                  <img
                    src={operationShot}
                    alt="Barista Starbucks phục vụ khách hàng"
                  />

                  <span>03</span>
                </div>

                <div className="change-body">
                  <div className="change-icon">
                    <BarChart3 />
                  </div>

                  <span className="change-tag">OPERATION</span>

                  <h3>Vận hành</h3>

                  <p>
                    Barista phải được đào tạo, nguyên liệu được chuẩn hóa và quy
                    trình pha chế cần đảm bảo chất lượng đồng nhất.
                  </p>
                </div>
              </motion.article>

              <div className="change-arrow">
                <ArrowRight />
              </div>

              {/* ===============================================
                  04 EXPERIENCE
              =============================================== */}

              <motion.article
                className="change-card"
                initial="hidden"
                whileInView="show"
                viewport={{
                  once: true,
                }}
                custom={3}
                variants={reveal}
              >
                <div className="change-image landscape">
                  <img src={experienceShot} alt="Trải nghiệm tại Starbucks" />

                  <span>04</span>
                </div>

                <div className="change-body">
                  <div className="change-icon">
                    <Sparkles />
                  </div>

                  <span className="change-tag">EXPERIENCE</span>

                  <h3>Trải nghiệm</h3>

                  <p>
                    Phù hợp hơn với thị trường nhưng vẫn phải duy trì được phong
                    cách và bản sắc riêng của Starbucks.
                  </p>
                </div>
              </motion.article>
            </div>

            {/* =================================================
                SUMMARY
            ================================================= */}

            <motion.div
              className="change-summary"
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
            >
              <span>SẢN PHẨM</span>

              <ArrowRight />

              <span>MARKETING</span>

              <ArrowRight />

              <span>VẬN HÀNH</span>

              <ArrowRight />

              <strong>TRẢI NGHIỆM</strong>
            </motion.div>

            {/* =================================================
                STATEMENT
            ================================================= */}

            <motion.div
              className="statement"
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
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

        {/* =================================================
            04 / 05
        ================================================= */}

        <section className="section cream" id="s4">
          <div className="container">
            <SectionTitle number="04 / 05" eyebrow="Trade-off">
              Thay đổi mở ra cơ hội — nhưng cũng tạo ra bài toán mới.
            </SectionTitle>

            <div className="balance-grid">
              {/* OPPORTUNITY */}

              <motion.div
                className="balance-card opportunity"
                initial={{
                  opacity: 0,
                  x: -24,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
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
                ].map((item) => (
                  <div className="balance-row" key={item}>
                    <Check size={17} />

                    <span>{item}</span>
                  </div>
                ))}
              </motion.div>

              {/* VS */}

              <div className="versus">
                <span>VS</span>

                <div />
              </div>

              {/* CHALLENGE */}

              <motion.div
                className="balance-card challenge"
                initial={{
                  opacity: 0,
                  x: 24,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
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
                ].map((item) => (
                  <div className="balance-row" key={item}>
                    <Minus size={17} />

                    <span>{item}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* =================================================
            05 / 05
            TRẢ VỀ ĐÚNG THIẾT KẾ BAN ĐẦU
        ================================================= */}

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

            {/* =================================================
                BALANCE METER
            ================================================= */}

            <div className="meter-wrap">
              <div className="meter-labels">
                <span>Quá ít</span>

                <span>Thích nghi có kiểm soát</span>

                <span>Quá nhiều</span>
              </div>

              <div className="meter">
                <motion.div
                  className="meter-dot"
                  initial={{
                    left: "3%",
                  }}
                  whileInView={{
                    left: "50%",
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 1.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
              </div>

              <div className="meter-caption">
                <span>Khó bắt kịp nhu cầu</span>

                <span>Có nguy cơ mất bản sắc</span>
              </div>
            </div>

            {/* =================================================
                CORE QUESTION
            ================================================= */}

            <motion.div
              className="question-card"
              initial={{
                opacity: 0,
                scale: 0.97,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
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

        {/* =================================================
            CLOSING
        ================================================= */}

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

      {/* ===================================================
          FOOTER
      =================================================== */}

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
