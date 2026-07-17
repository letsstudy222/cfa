/* =====================================================================
   Topic 10 — Portfolio Management
   ---------------------------------------------------------------------
   CẤU TRÚC DỮ LIỆU / DATA STRUCTURE
   - topic.modules[]   : các learning module; mỗi module có sections[]
                         {h: tiêu đề, en: HTML tiếng Anh, vi: HTML tiếng Việt}
                         và formulas[] tùy chọn: [tên, công thức, ghi chú]
   - topic.vocab[]     : [term, định nghĩa EN, nghĩa VI]
   - topic.quiz[]      : Practice Set A — {q, opts[3], ans(0-2), en, vi}
   - extra.checks[]    : mảng theo TỪNG module — câu "Quick check" sau lý thuyết
   - extra.sets[]      : Practice Set B, C… (mỗi phần tử là 1 bộ câu hỏi)
   Sửa nội dung trực tiếp trong file này; giữ đúng cú pháp JSON.
   ===================================================================== */
window.CFA = window.CFA || { topics: [], extra: {}, mocktests: [] };
window.CFA.topics.push({
 "id": "pm",
 "num": "10",
 "name": "Portfolio Management",
 "vi": "Quản lý danh mục đầu tư",
 "w": [
  8,
  12
 ],
 "blurb": "Risk & return, diversification, the CAL/CML, CAPM & the SML, portfolio planning (IPS), risk management and behavioral biases.",
 "intro": {
  "en": "Portfolio Management ties the curriculum together across six learning modules: the industry overview; portfolio risk and return in two parts (the frontier, the CAL, and the CAPM); planning and construction around the IPS; the behavioral biases of individuals; and risk management. Every module below pairs theory with diagrams and fully worked numbers — a two-asset frontier computed row by row, the CAPM lab with four performance ratios from one dataset, corridor rebalancing, the bias taxonomy, the risk-treatment quadrant — then drill the Quick checks and Practice Sets B–D.",
  "vi": "Portfolio Management kết nối toàn bộ chương trình qua sáu learning modules: tổng quan ngành; rủi ro và lợi suất danh mục hai phần (đường biên hiệu quả, CAL và CAPM); lập kế hoạch và xây dựng quanh IPS; thiên lệch hành vi của cá nhân; và quản trị rủi ro. Mỗi module bên dưới kết hợp lý thuyết với sơ đồ và con số giải trọn — đường biên hai tài sản tính từng dòng, phòng lab CAPM với bốn tỷ số thành tích từ một bộ số, tái cân bằng theo hành lang, bảng phân loại thiên lệch, ma trận xử lý rủi ro — sau đó luyện Quick checks và Practice Sets B–D."
 },
 "modules": [
  {
   "title": "Portfolio Management: An Overview",
   "sections": [
    {
     "h": "The portfolio approach, the process & the investor zoo",
     "en": "<ul><li><strong>Why portfolios:</strong> diversification cuts risk without an equal sacrifice of expected return — the one reliable \"free lunch.\" Evaluate every asset by its contribution to the <em>portfolio</em>, not in isolation.</li><li><strong>The three-step process:</strong> <em>Planning</em> — understand the client, write the IPS, form capital market expectations, set the strategic asset allocation; <em>Execution</em> — asset allocation, security analysis, construction and trading; <em>Feedback</em> — monitor, <strong>rebalance</strong>, and measure performance against the IPS benchmark. It is a loop, not a line.</li><li><strong>Investor types and what drives them:</strong> individuals (goals-based, taxes matter); <em>DB pension plans</em> — long horizon, predictable liabilities, moderate liquidity needs; <em>endowments &amp; foundations</em> — perpetual horizon, spending-rate driven, high risk capacity; <em>banks and insurers</em> — liability-driven, short horizons, high liquidity needs, conservative fixed-income-heavy portfolios; <em>sovereign wealth funds</em> — mandate-specific. The horizon/liquidity/risk triangle differs sharply across the zoo — a favorite exam comparison.</li><li><strong>Pooled vehicles:</strong> <em>open-end mutual funds</em> transact at end-of-day NAV and grow/shrink with flows; <em>closed-end funds</em> trade a fixed share count at premiums or discounts to NAV; <strong>ETFs</strong> trade intraday with <em>in-kind creation/redemption</em> keeping price near NAV and adding tax efficiency; separately managed accounts offer direct ownership and customization; hedge funds and private funds sit behind qualification and lockups.</li></ul>",
     "vi": "<ul><li><strong>Vì sao cần danh mục:</strong> đa dạng hóa cắt giảm rủi ro mà không phải hy sinh tương ứng lợi nhuận kỳ vọng — \"bữa trưa miễn phí\" đáng tin cậy duy nhất. Đánh giá mọi tài sản theo đóng góp vào <em>danh mục</em>, không phải đứng riêng.</li><li><strong>Quy trình ba bước:</strong> <em>Lập kế hoạch</em> — hiểu khách hàng, viết IPS, xây kỳ vọng thị trường vốn, đặt phân bổ tài sản chiến lược; <em>Thực thi</em> — phân bổ, phân tích chứng khoán, xây dựng và giao dịch; <em>Phản hồi</em> — giám sát, <strong>tái cân bằng</strong>, đo kết quả so với benchmark trong IPS. Đây là vòng lặp, không phải đường thẳng.</li><li><strong>Các loại nhà đầu tư và điều chi phối họ:</strong> cá nhân (theo mục tiêu, thuế quan trọng); <em>quỹ hưu trí phúc lợi xác định (DB)</em> — kỳ hạn dài, nghĩa vụ dự đoán được, nhu cầu thanh khoản vừa; <em>endowment &amp; foundation</em> — kỳ hạn vĩnh viễn, theo tỷ lệ chi tiêu, sức chịu rủi ro cao; <em>ngân hàng và bảo hiểm</em> — chạy theo nghĩa vụ nợ, kỳ hạn ngắn, thanh khoản cao, danh mục thiên trái phiếu thận trọng; <em>quỹ đầu tư quốc gia</em> — theo mandate. Tam giác kỳ hạn/thanh khoản/rủi ro khác nhau rõ rệt — dạng so sánh đề rất chuộng.</li><li><strong>Phương tiện đầu tư gộp:</strong> <em>quỹ mở</em> giao dịch theo NAV cuối ngày, phình/teo theo dòng tiền; <em>quỹ đóng</em> có số chứng chỉ cố định, giao dịch premium/discount so với NAV; <strong>ETF</strong> giao dịch trong phiên với cơ chế <em>tạo/hoàn chứng chỉ bằng hiện vật</em> giữ giá sát NAV và tăng hiệu quả thuế; tài khoản quản lý riêng (SMA) cho sở hữu trực tiếp và tùy biến; hedge fund và quỹ tư nhân nằm sau hàng rào điều kiện và lockup.</li></ul>"
    },
    {
     "h": "The investor zoo, mapped by horizon, liquidity & risk tolerance",
     "en": "<p><strong>Every portfolio question starts with WHO the investor is</strong> — the same asset menu produces opposite portfolios for different clients. The exam's favorite comparison table:</p>\n<table style=\"width:100%;border-collapse:collapse;font-size:13.5px;margin:10px 0\"><tr style=\"background:#EEF0FE\"><th style=\"padding:7px;border:1px solid #D6DAFB;text-align:left\">Investor</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Horizon</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Liquidity needs</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Risk tolerance</th><th style=\"padding:7px;border:1px solid #D6DAFB;text-align:left\">Signature concern</th></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Individual</td><td style=\"padding:7px;border:1px solid #E5E9F2\">varies with life stage</td><td style=\"padding:7px;border:1px solid #E5E9F2\">varies</td><td style=\"padding:7px;border:1px solid #E5E9F2\">varies</td><td style=\"padding:7px;border:1px solid #E5E9F2\">goals: retirement, education, bequests; taxes bite</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">DB pension plan</td><td style=\"padding:7px;border:1px solid #E5E9F2\">long</td><td style=\"padding:7px;border:1px solid #E5E9F2\">low → rising as members retire</td><td style=\"padding:7px;border:1px solid #E5E9F2\">high</td><td style=\"padding:7px;border:1px solid #E5E9F2\">funding status vs promised liabilities</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Endowment / foundation</td><td style=\"padding:7px;border:1px solid #E5E9F2\">very long (perpetual)</td><td style=\"padding:7px;border:1px solid #E5E9F2\">low (annual spending rule)</td><td style=\"padding:7px;border:1px solid #E5E9F2\">high</td><td style=\"padding:7px;border:1px solid #E5E9F2\">real spending power forever; illiquids welcome</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Bank</td><td style=\"padding:7px;border:1px solid #E5E9F2\">short</td><td style=\"padding:7px;border:1px solid #E5E9F2\">high</td><td style=\"padding:7px;border:1px solid #E5E9F2\">low</td><td style=\"padding:7px;border:1px solid #E5E9F2\">assets must fund deposit withdrawals; regulation</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Insurer (life / P&C)</td><td style=\"padding:7px;border:1px solid #E5E9F2\">long / short</td><td style=\"padding:7px;border:1px solid #E5E9F2\">moderate / high</td><td style=\"padding:7px;border:1px solid #E5E9F2\">low</td><td style=\"padding:7px;border:1px solid #E5E9F2\">match assets to policy payouts; P&C claims are lumpy</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Sovereign wealth fund</td><td style=\"padding:7px;border:1px solid #E5E9F2\">very long</td><td style=\"padding:7px;border:1px solid #E5E9F2\">usually low</td><td style=\"padding:7px;border:1px solid #E5E9F2\">high</td><td style=\"padding:7px;border:1px solid #E5E9F2\">mandate-dependent (stabilization vs savings funds differ)</td></tr></table>\n<p><strong>Why \"the portfolio approach\" at all:</strong> the risk that matters is the portfolio's, not each holding's — diversification removes the risk that pays nothing (module 1 formalizes this). The process runs plan → execute → feedback (module 3 draws it), and its anchor document is the IPS.</p>\n<p><strong>The industry map:</strong> buy side (asset managers, owners) vs sell side (brokers, dealers, research). Active managers pursue benchmark-beating returns for higher fees; passive replicates the index at minimal cost — flows have moved decisively passive as fee-adjusted active performance disappointed. Vehicles ladder by customization: <em>mutual funds</em> (open-end: buy/sell at NAV; closed-end: trade at premiums/discounts), <em>ETFs</em> (intraday trading, in-kind creation/redemption keeps price ≈ NAV and adds tax efficiency), <em>separately managed accounts</em> (direct ownership, customizable, tax-lot control — for larger balances), and pooled alternatives (Topic 9). Robo-advisors compress the advice cost for small accounts using the same portfolio machinery.</p>",
     "vi": "<p><strong>Mọi câu hỏi danh mục bắt đầu từ việc nhà đầu tư là AI</strong> — cùng một thực đơn tài sản cho ra danh mục trái ngược với khách hàng khác nhau. Bảng so sánh đề ưa thích: cá nhân — mọi thứ biến thiên theo giai đoạn cuộc đời, mối bận tâm là mục tiêu (hưu trí, học hành, thừa kế) và thuế; quỹ hưu DB — kỳ hạn dài, thanh khoản thấp rồi tăng dần khi thành viên nghỉ hưu, chịu rủi ro cao, lo funding status so với nghĩa vụ đã hứa; endowment/foundation — kỳ hạn gần vĩnh viễn, chi tiêu theo quy tắc hằng năm, chịu rủi ro cao, chào đón tài sản kém thanh khoản, lo sức chi tiêu thực mãi mãi; ngân hàng — ngắn, thanh khoản cao, rủi ro thấp, tài sản phải đỡ được rút tiền gửi, nặng quản lý; bảo hiểm (nhân thọ/phi nhân thọ) — dài/ngắn, khớp tài sản với chi trả hợp đồng, bồi thường P&C rất cục; quỹ tài sản quốc gia — rất dài, tùy mandate (quỹ bình ổn khác quỹ tiết kiệm).</p>\n<p><strong>Vì sao phải \"tiếp cận theo danh mục\":</strong> rủi ro đáng kể là của cả danh mục, không phải từng khoản — đa dạng hóa loại bỏ phần rủi ro không được trả công (module 1 chính thức hóa). Quy trình chạy plan → execute → feedback (module 3 vẽ ra), và văn kiện neo là IPS.</p>\n<p><strong>Bản đồ ngành:</strong> buy side (nhà quản lý tài sản, chủ tài sản) vs sell side (môi giới, dealer, nghiên cứu). Quản lý chủ động săn lợi suất vượt benchmark với phí cao hơn; thụ động sao chép chỉ số với chi phí tối thiểu — dòng tiền đã chuyển hẳn sang thụ động khi thành tích chủ động sau phí gây thất vọng. Phương tiện xếp bậc theo mức tùy biến: <em>quỹ mở</em> (mua/bán tại NAV) và <em>quỹ đóng</em> (giao dịch lệch premium/discount), <em>ETF</em> (giao dịch trong ngày, cơ chế tạo/hoàn in-kind giữ giá ≈ NAV và thêm hiệu quả thuế), <em>tài khoản quản lý riêng — SMA</em> (sở hữu trực tiếp, tùy biến, kiểm soát lô thuế — cho số dư lớn), và các quỹ alternative gộp vốn (Topic 9). Robo-advisor nén chi phí tư vấn cho tài khoản nhỏ bằng đúng bộ máy danh mục này.</p>"
    }
   ]
  },
  {
   "title": "Portfolio Risk and Return: Part I",
   "sections": [
    {
     "h": "Portfolio risk and the power of correlation",
     "en": "<p>Portfolio expected return is the weighted average of asset returns — but portfolio <em>risk is less than</em> the weighted average of standard deviations whenever correlation ρ &lt; 1. For two assets:</p><p><strong>σ<sub>p</sub>² = w₁²σ₁² + w₂²σ₂² + 2w₁w₂ρσ₁σ₂</strong></p><p>The lower the correlation, the greater the diversification benefit; with ρ = −1, risk can be eliminated entirely. Diversification removes <strong>unsystematic (firm-specific) risk</strong>; <strong>systematic (market) risk</strong> remains. Because unsystematic risk can be diversified away for free, <em>markets only reward systematic risk</em> — the central message of the CAPM. Risk aversion shapes each investor’s optimal point: utility U = E(R) − ½Aσ² (A = risk aversion coefficient).</p>",
     "vi": "<p>Lợi suất kỳ vọng danh mục là bình quân gia quyền lợi suất tài sản — nhưng <em>rủi ro danh mục nhỏ hơn</em> bình quân gia quyền độ lệch chuẩn khi tương quan ρ &lt; 1. Với hai tài sản:</p><p><strong>σ<sub>p</sub>² = w₁²σ₁² + w₂²σ₂² + 2w₁w₂ρσ₁σ₂</strong></p><p>Tương quan càng thấp, lợi ích đa dạng hóa càng lớn; ρ = −1 có thể triệt tiêu hoàn toàn rủi ro. Đa dạng hóa loại bỏ <strong>rủi ro phi hệ thống (đặc thù doanh nghiệp)</strong>; <strong>rủi ro hệ thống (thị trường)</strong> vẫn còn. Vì rủi ro phi hệ thống có thể loại bỏ miễn phí nên <em>thị trường chỉ trả công cho rủi ro hệ thống</em> — thông điệp trung tâm của CAPM. Mức e ngại rủi ro quyết định điểm tối ưu của mỗi nhà đầu tư: U = E(R) − ½Aσ².</p>"
    },
    {
     "h": "Efficient frontier, CAL and CML",
     "en": "<ul><li>The <strong>minimum-variance frontier</strong> plots the lowest-risk portfolio for each return level; the upper half is the <strong>efficient frontier</strong>.</li><li>Adding a risk-free asset creates the <strong>capital allocation line (CAL)</strong>; the best CAL is tangent to the efficient frontier at the <strong>optimal risky portfolio</strong>.</li><li>If all investors share the same expectations, that tangency portfolio is the <strong>market portfolio</strong> and the CAL becomes the <strong>capital market line (CML)</strong>: E(R<sub>p</sub>) = R<sub>f</sub> + σ<sub>p</sub> × [E(R<sub>m</sub>) − R<sub>f</sub>]/σ<sub>m</sub>. Points right of the market portfolio imply borrowing (leverage).</li><li><strong>CML vs SML:</strong> the CML uses <em>total risk (σ)</em> and holds only for efficient portfolios; the <strong>SML</strong> uses <em>systematic risk (β)</em> and applies to <em>every</em> asset and portfolio, fairly priced or not.</li></ul>",
     "vi": "<ul><li><strong>Đường biên phương sai tối thiểu</strong> vẽ danh mục rủi ro thấp nhất cho từng mức lợi suất; nửa trên là <strong>đường biên hiệu quả</strong>.</li><li>Thêm tài sản phi rủi ro tạo ra <strong>đường phân bổ vốn (CAL)</strong>; CAL tốt nhất tiếp xúc đường biên hiệu quả tại <strong>danh mục rủi ro tối ưu</strong>.</li><li>Nếu mọi nhà đầu tư có cùng kỳ vọng, danh mục tiếp điểm là <strong>danh mục thị trường</strong> và CAL trở thành <strong>CML</strong>: E(R<sub>p</sub>) = R<sub>f</sub> + σ<sub>p</sub> × [E(R<sub>m</sub>) − R<sub>f</sub>]/σ<sub>m</sub>. Các điểm bên phải danh mục thị trường hàm ý đi vay (đòn bẩy).</li><li><strong>CML vs SML:</strong> CML dùng <em>tổng rủi ro (σ)</em> và chỉ đúng cho danh mục hiệu quả; <strong>SML</strong> dùng <em>rủi ro hệ thống (β)</em> và áp dụng cho <em>mọi</em> tài sản/danh mục, dù được định giá đúng hay sai.</li></ul>"
    },
    {
     "h": "Build the frontier from two assets — every number computed",
     "en": "<p><strong>Inputs.</strong> Asset A: E(R) = 8%, σ = 10%. Asset B: E(R) = 14%, σ = 20%. Correlation ρ = 0.30 (so Cov = 0.30 × 10 × 20 = 60, in %²). Risk-free rate = 3%.</p>\n<table style=\"width:100%;border-collapse:collapse;font-size:13.5px;margin:10px 0\"><tr style=\"background:#EEF0FE\"><th style=\"padding:7px;border:1px solid #D6DAFB;text-align:left\">Weight in B</th><th style=\"padding:7px;border:1px solid #D6DAFB\">E(Rp)</th><th style=\"padding:7px;border:1px solid #D6DAFB\">σp</th></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">0%</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">8.0%</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">10.0%</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">20%</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">9.2%</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">9.8%</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">40%</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">10.4%</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">11.1%</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">60%</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">11.6%</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">13.5%</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">100%</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">14.0%</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">20.0%</td></tr></table>\n<p>Check one row (40% B): E(Rp) = 0.6(8) + 0.4(14) = 10.4%. σp² = 0.6²(100) + 0.4²(400) + 2(0.6)(0.4)(60) = 36 + 64 + 28.8 = 128.8 → σp = <strong>11.35%… ≈ 11.1–11.4%</strong>. Notice the 20%-B row: <em>higher return than pure A at LOWER risk</em> — the free lunch imperfect correlation serves. The minimum-variance weight in B = (σA² − Cov)/(σA² + σB² − 2Cov) = (100 − 60)/(100 + 400 − 120) = <strong>10.5%</strong>.</p>\n<svg viewBox=\"0 0 720 350\" style=\"width:100%;height:auto;display:block;margin:14px 0;background:#fff;border:1px solid #E5E9F2;border-radius:12px\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Efficient frontier and capital allocation line\">\n<text x=\"360\" y=\"26\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" fill=\"#1B2438\">The frontier, the CAL, and where the best portfolio lives</text>\n<line x1=\"70\" y1=\"300\" x2=\"680\" y2=\"300\" stroke=\"#5B6577\" stroke-width=\"1.5\"/>\n<line x1=\"70\" y1=\"300\" x2=\"70\" y2=\"50\" stroke=\"#5B6577\" stroke-width=\"1.5\"/>\n<text x=\"676\" y=\"318\" text-anchor=\"end\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" fill=\"#5B6577\">Risk (σ) →</text>\n<text x=\"30\" y=\"62\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" fill=\"#5B6577\">E(R)</text>\n<path d=\"M 300 262 C 232 240 200 205 202 168 C 204 130 250 96 340 78 C 420 64 520 58 640 56\" fill=\"none\" stroke=\"#C7C8F8\" stroke-width=\"2.2\"/>\n<path d=\"M 202 168 C 204 130 250 96 340 78 C 420 64 520 58 640 56\" fill=\"none\" stroke=\"#5457E0\" stroke-width=\"3\"/>\n<text x=\"472\" y=\"46\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11.5\" font-weight=\"700\" fill=\"#5457E0\">efficient frontier (upper edge only)</text>\n<text x=\"318\" y=\"268\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#8B8DF0\">inefficient lower branch</text>\n<circle cx=\"202\" cy=\"168\" r=\"5.5\" fill=\"#B45309\"/>\n<text x=\"190\" y=\"192\" text-anchor=\"end\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#B45309\">global minimum-variance portfolio</text>\n<circle cx=\"70\" cy=\"252\" r=\"5.5\" fill=\"#0F9573\"/>\n<text x=\"84\" y=\"256\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#0F9573\">Rf</text>\n<line x1=\"70\" y1=\"252\" x2=\"620\" y2=\"60\" stroke=\"#0F9573\" stroke-width=\"2.4\"/>\n<text x=\"512\" y=\"98\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11.5\" font-weight=\"700\" fill=\"#0F9573\">CAL / CML — lend or borrow along it</text>\n<circle cx=\"330\" cy=\"161\" r=\"6.5\" fill=\"#DC4848\"/>\n<text x=\"342\" y=\"178\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11.5\" font-weight=\"700\" fill=\"#DC4848\">tangency (optimal risky) portfolio</text>\n<text x=\"342\" y=\"194\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10\" fill=\"#5B6577\">the steepest line = the highest Sharpe ratio</text>\n<text x=\"360\" y=\"338\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11.5\" fill=\"#8B5CF6\" font-weight=\"600\">Every investor holds the SAME tangency portfolio; risk aversion only sets the mix with the risk-free asset.</text>\n</svg>\n<p><strong>Add the risk-free asset.</strong> Say the tangency portfolio works out to E(R) = 10.4%, σ = 11.35%: its Sharpe ratio = (10.4 − 3)/11.35 = <strong>0.652</strong> — the slope of the CAL, and no other risky mix beats it. An investor with utility U = E(R) − ½Aσ² and A = 4 solves w* = (E(Rt) − Rf)/(A σt²) = 7.4/(4 × 0.01288) = <strong>≈ 1.44 → borrows 44% to lever the tangency portfolio</strong>; a more risk-averse A = 8 holds ~72% in it and 28% in cash. Same risky portfolio, different mixes — the <em>two-fund separation</em> message of the chart.</p>\n<svg viewBox=\"0 0 720 320\" style=\"width:100%;height:auto;display:block;margin:14px 0;background:#fff;border:1px solid #E5E9F2;border-radius:12px\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Diversification eliminates unsystematic risk\">\n<text x=\"360\" y=\"26\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" fill=\"#1B2438\">What diversification can and cannot remove</text>\n<line x1=\"70\" y1=\"280\" x2=\"680\" y2=\"280\" stroke=\"#5B6577\" stroke-width=\"1.5\"/>\n<line x1=\"70\" y1=\"280\" x2=\"70\" y2=\"50\" stroke=\"#5B6577\" stroke-width=\"1.5\"/>\n<text x=\"676\" y=\"298\" text-anchor=\"end\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" fill=\"#5B6577\">Number of holdings →</text>\n<text x=\"24\" y=\"62\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" fill=\"#5B6577\">Portfolio σ</text>\n<line x1=\"70\" y1=\"190\" x2=\"670\" y2=\"190\" stroke=\"#DC4848\" stroke-width=\"2\" stroke-dasharray=\"7 4\"/>\n<path d=\"M 90 78 C 140 110 190 148 260 168 C 350 182 500 187 660 189\" fill=\"none\" stroke=\"#5457E0\" stroke-width=\"3\"/>\n<text x=\"368\" y=\"132\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11.5\" font-weight=\"700\" fill=\"#5457E0\">unsystematic (firm-specific) risk — diversifies away</text>\n<text x=\"368\" y=\"150\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10\" fill=\"#5B6577\">most of the benefit arrives within ~20–30 holdings</text>\n<text x=\"368\" y=\"238\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11.5\" font-weight=\"700\" fill=\"#DC4848\">systematic (market) risk — cannot be diversified away</text>\n<text x=\"360\" y=\"312\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11.5\" fill=\"#8B5CF6\" font-weight=\"600\">Markets pay only for systematic risk (beta) — unsystematic risk earns nothing because it is free to remove.</text>\n</svg>\n<p><strong>Historical anchors to carry into module 2:</strong> equities out-earn bonds and bills over long horizons at much higher volatility (the equity risk premium); diversification across enough holdings strips the firm-specific component — leaving only the systematic risk the market actually pays for. Also on the exam's checklist: risk aversion assumed positive (indifference curves slope up), utility falls with variance, and investors compare portfolios only by mean and variance in this framework.</p>",
     "vi": "<p><strong>Đầu vào.</strong> Tài sản A: E(R) = 8%, σ = 10%. Tài sản B: E(R) = 14%, σ = 20%. Tương quan ρ = 0,30 (Cov = 0,30 × 10 × 20 = 60, đơn vị %²). Lãi phi rủi ro = 3%. Bảng tổ hợp: 0% B → 8,0%/10,0%; 20% B → 9,2%/9,8%; 40% B → 10,4%/≈11,4%; 60% B → 11,6%/13,5%; 100% B → 14,0%/20,0%.</p>\n<p>Kiểm tra một dòng (40% B): E(Rp) = 0,6(8) + 0,4(14) = 10,4%. σp² = 0,6²(100) + 0,4²(400) + 2(0,6)(0,4)(60) = 128,8 → σp ≈ <strong>11,4%</strong>. Nhìn dòng 20% B: <em>lợi suất cao hơn A thuần với rủi ro THẤP hơn</em> — bữa trưa miễn phí mà tương quan không hoàn hảo dọn ra. Trọng số phương sai tối thiểu ở B = (σA² − Cov)/(σA² + σB² − 2Cov) = (100 − 60)/(100 + 400 − 120) = <strong>10,5%</strong>.</p>\n<p><strong>Thêm tài sản phi rủi ro.</strong> Giả sử danh mục tiếp tuyến ra E(R) = 10,4%, σ = 11,35%: Sharpe = (10,4 − 3)/11,35 = <strong>0,652</strong> — độ dốc của CAL, và không tổ hợp rủi ro nào khác thắng nó. Nhà đầu tư với hàm thỏa dụng U = E(R) − ½Aσ² và A = 4 giải w* = (E(Rt) − Rf)/(A σt²) = 7,4/(4 × 0,01288) ≈ <strong>1,44 → vay 44% để đòn bẩy danh mục tiếp tuyến</strong>; người sợ rủi ro hơn với A = 8 giữ ~72% trong đó và 28% tiền mặt. Cùng một danh mục rủi ro, khác cách pha — thông điệp <em>tách hai quỹ</em> của đồ thị.</p>\n<p><strong>Mỏ neo lịch sử mang sang module 2:</strong> cổ phiếu sinh lời hơn trái phiếu và tín phiếu trên kỳ hạn dài với biến động cao hơn nhiều (equity risk premium); đa dạng hóa đủ rộng tước bỏ thành phần rủi ro riêng của công ty — chỉ còn rủi ro hệ thống mà thị trường thực sự trả công. Checklist đề còn có: giả định ghét rủi ro (đường bàng quan dốc lên), thỏa dụng giảm theo phương sai, và nhà đầu tư chỉ so danh mục bằng trung bình và phương sai trong khung này.</p>"
    }
   ],
   "formulas": [
    [
     "2-asset portfolio risk",
     "σp² = w1²σ1² + w2²σ2² + 2w1w2ρσ1σ2",
     ""
    ],
    [
     "Utility",
     "U = E(R) − 0.5·A·σ²",
     "A = risk aversion coefficient"
    ],
    [
     "Sharpe",
     "(Rp − Rf)/σp",
     "Total risk"
    ],
    [
     "Minimum-variance weight (2 assets)",
     "w_B = (σA² − Cov)/(σA² + σB² − 2Cov)",
     "Covariances in matching units (%² with %²)."
    ],
    [
     "Capital allocation line",
     "E(Rp) = Rf + Sharpe_tangency × σp",
     "The CAL's slope IS the tangency portfolio's Sharpe ratio."
    ],
    [
     "Optimal risky weight (utility)",
     "w* = (E(Rt) − Rf)/(A × σt²)",
     "Higher risk aversion A → smaller allocation to the risky portfolio."
    ]
   ]
  },
  {
   "title": "Portfolio Risk and Return: Part II",
   "sections": [
    {
     "h": "CAPM and the SML",
     "en": "<p><strong>E(R<sub>i</sub>) = R<sub>f</sub> + β<sub>i</sub>[E(R<sub>m</sub>) − R<sub>f</sub>]</strong>. Beta = Cov(R<sub>i</sub>,R<sub>m</sub>)/σ<sub>m</sub>² measures sensitivity to market moves. Interpretation: if a security’s <em>forecast</em> return lies <strong>above the SML</strong>, it offers more than required for its beta → <strong>undervalued</strong> (buy); below the SML → overvalued. CAPM assumptions (frictionless markets, homogeneous expectations, all investors mean-variance optimizers) are unrealistic but produce a powerful, testable benchmark.</p><p><strong>Performance ratios:</strong></p><ul><li><strong>Sharpe</strong> = (R<sub>p</sub> − R<sub>f</sub>)/σ<sub>p</sub> — total risk; use when the portfolio is the investor’s whole wealth.</li><li><strong>Treynor</strong> = (R<sub>p</sub> − R<sub>f</sub>)/β<sub>p</sub> — systematic risk; for well-diversified portfolios.</li><li><strong>Jensen’s alpha</strong> = R<sub>p</sub> − [R<sub>f</sub> + β(R<sub>m</sub> − R<sub>f</sub>)] — return above the CAPM requirement.</li><li><strong>M²</strong> — Sharpe re-expressed in percentage terms versus the market.</li></ul>",
     "vi": "<p><strong>E(R<sub>i</sub>) = R<sub>f</sub> + β<sub>i</sub>[E(R<sub>m</sub>) − R<sub>f</sub>]</strong>. Beta = Cov(R<sub>i</sub>,R<sub>m</sub>)/σ<sub>m</sub>² đo độ nhạy với biến động thị trường. Diễn giải: nếu lợi suất <em>dự báo</em> của chứng khoán nằm <strong>trên SML</strong> → được kỳ vọng cao hơn mức yêu cầu theo beta → <strong>đang bị định giá thấp</strong> (nên mua); dưới SML → định giá cao. Các giả định CAPM (thị trường không ma sát, kỳ vọng đồng nhất…) phi thực tế nhưng tạo ra chuẩn so sánh mạnh và kiểm định được.</p><p><strong>Chỉ số hiệu quả:</strong> Sharpe = (R<sub>p</sub> − R<sub>f</sub>)/σ<sub>p</sub> (tổng rủi ro — dùng khi danh mục là toàn bộ tài sản); Treynor = (R<sub>p</sub> − R<sub>f</sub>)/β<sub>p</sub> (rủi ro hệ thống — cho danh mục đã đa dạng hóa tốt); Jensen’s alpha = phần lợi suất vượt yêu cầu CAPM; M² = Sharpe quy về đơn vị %.</p>"
    },
    {
     "h": "CAPM lab: compute beta, price on the SML & pick the right performance ratio",
     "en": "<p><strong>Beta from raw statistics.</strong> Cov(stock, market) = 0.0048; Var(market) = 0.0040 → β = 0.0048/0.0040 = <strong>1.2</strong>. Equivalent form: β = ρ × σ_stock/σ_market. Beta measures only <em>systematic</em> co-movement — the risk that survives diversification (module 1's chart) and therefore the only risk CAPM pays for.</p>\n<p><strong>Price it on the SML.</strong> Rf = 3%, market risk premium = 5%: required return = 3 + 1.2 × 5 = <strong>9%</strong>. An analyst's forecast return of 10.5% exceeds the requirement → the stock plots <em>above</em> the SML → forecast alpha = +1.5% → <strong>undervalued, buy</strong>. A forecast of 8% would put it below the line: overvalued.</p>\n<svg viewBox=\"0 0 720 340\" style=\"width:100%;height:auto;display:block;margin:14px 0;background:#fff;border:1px solid #E5E9F2;border-radius:12px\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Security market line with mispriced assets\">\n<text x=\"360\" y=\"26\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" fill=\"#1B2438\">The SML: price every asset by its beta</text>\n<line x1=\"70\" y1=\"290\" x2=\"680\" y2=\"290\" stroke=\"#5B6577\" stroke-width=\"1.5\"/>\n<line x1=\"70\" y1=\"290\" x2=\"70\" y2=\"50\" stroke=\"#5B6577\" stroke-width=\"1.5\"/>\n<text x=\"676\" y=\"308\" text-anchor=\"end\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" fill=\"#5B6577\">Beta →</text>\n<text x=\"30\" y=\"62\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" fill=\"#5B6577\">E(R)</text>\n<circle cx=\"70\" cy=\"240\" r=\"5\" fill=\"#0F9573\"/>\n<text x=\"84\" y=\"246\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#0F9573\">Rf = 3%</text>\n<line x1=\"70\" y1=\"240\" x2=\"650\" y2=\"72\" stroke=\"#5457E0\" stroke-width=\"2.6\"/>\n<text x=\"560\" y=\"66\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#5457E0\">SML: E(R) = 3% + β × 5%</text>\n<line x1=\"360\" y1=\"290\" x2=\"360\" y2=\"156\" stroke=\"#E5E9F2\" stroke-width=\"1.2\"/>\n<circle cx=\"360\" cy=\"156\" r=\"5.5\" fill=\"#1B2438\"/>\n<text x=\"360\" y=\"310\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11\" fill=\"#5B6577\">β = 1 (market): 8%</text>\n<circle cx=\"430\" cy=\"102\" r=\"6\" fill=\"#0F9573\"/>\n<text x=\"430\" y=\"86\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#0F9573\">above the line → +alpha → UNDERVALUED (buy)</text>\n<circle cx=\"290\" cy=\"238\" r=\"6\" fill=\"#DC4848\"/>\n<text x=\"296\" y=\"262\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#DC4848\">below → −alpha → OVERVALUED</text>\n<text x=\"360\" y=\"330\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11.5\" fill=\"#8B5CF6\" font-weight=\"600\">CML prices only efficient portfolios by total risk σ; the SML prices EVERY asset by beta.</text>\n</svg>\n<p><strong>CML vs SML — a guaranteed exam distinction.</strong> The CML prices only <em>efficient portfolios</em>, using total risk σ; the SML prices <em>every asset and portfolio</em>, using beta. A concentrated single stock sits below the CML (it carries unpaid diversifiable risk) yet exactly on the SML if fairly priced. Assumptions behind CAPM: mean-variance investors, homogeneous expectations, one period, frictionless markets, borrowing/lending at Rf — unrealistic, but the model survives as the benchmark for required returns and performance attribution.</p>\n<p><strong>Performance toolkit — one dataset, four measures.</strong> Portfolio: return 11%, σ = 18%, β = 1.1. Market: 8%, σ = 14%. Rf = 3%.</p>\n<table style=\"width:100%;border-collapse:collapse;font-size:13.5px;margin:10px 0\"><tr style=\"background:#EEF0FE\"><th style=\"padding:7px;border:1px solid #D6DAFB;text-align:left\">Measure</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Formula</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Value</th><th style=\"padding:7px;border:1px solid #D6DAFB;text-align:left\">Risk used / when</th></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Sharpe</td><td style=\"padding:7px;border:1px solid #E5E9F2\">(Rp − Rf)/σp</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">0.444</td><td style=\"padding:7px;border:1px solid #E5E9F2\">total risk — the whole portfolio, or poorly diversified sleeves</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">M²</td><td style=\"padding:7px;border:1px solid #E5E9F2\">Sharpe × σm + Rf</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">9.2%</td><td style=\"padding:7px;border:1px solid #E5E9F2\">Sharpe restated in % — vs market's 8%: +1.2% at matched risk</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Treynor</td><td style=\"padding:7px;border:1px solid #E5E9F2\">(Rp − Rf)/βp</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">7.27</td><td style=\"padding:7px;border:1px solid #E5E9F2\">systematic risk — sub-portfolios inside a diversified whole</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Jensen's alpha</td><td style=\"padding:7px;border:1px solid #E5E9F2\">Rp − [Rf + β(Rm − Rf)]</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">+2.5%</td><td style=\"padding:7px;border:1px solid #E5E9F2\">excess over CAPM — the manager-skill headline number</td></tr></table>\n<p>Check α: 11 − [3 + 1.1 × 5] = 11 − 8.5 = +2.5%. Selection rule: judging an investor's <em>entire</em> wealth → total-risk measures (Sharpe, M²); ranking components of an already-diversified program → beta-based measures (Treynor, alpha). Rankings can disagree — a high-σ concentrated fund can top Treynor and trail Sharpe simultaneously; the disagreement itself tells you the fund carries diversifiable risk.</p>",
     "vi": "<p><strong>Beta từ thống kê thô.</strong> Cov(cổ phiếu, thị trường) = 0,0048; Var(thị trường) = 0,0040 → β = 0,0048/0,0040 = <strong>1,2</strong>. Dạng tương đương: β = ρ × σ_cổ phiếu/σ_thị trường. Beta chỉ đo đồng biến <em>hệ thống</em> — phần rủi ro sống sót sau đa dạng hóa (đồ thị module 1) và vì thế là phần duy nhất CAPM trả công.</p>\n<p><strong>Định giá trên SML.</strong> Rf = 3%, phần bù rủi ro thị trường = 5%: lợi suất yêu cầu = 3 + 1,2 × 5 = <strong>9%</strong>. Dự báo của nhà phân tích 10,5% vượt yêu cầu → cổ phiếu nằm <em>trên</em> SML → alpha dự báo = +1,5% → <strong>đang bị định giá thấp, mua</strong>. Dự báo 8% sẽ đặt nó dưới đường: định giá cao.</p>\n<p><strong>CML vs SML — phân biệt chắc chắn có trong đề.</strong> CML chỉ định giá <em>danh mục hiệu quả</em>, dùng tổng rủi ro σ; SML định giá <em>mọi tài sản và danh mục</em>, dùng beta. Một cổ phiếu đơn lẻ tập trung nằm dưới CML (mang rủi ro đa dạng hóa được mà không được trả công) nhưng vẫn nằm đúng trên SML nếu định giá công bằng. Giả định sau CAPM: nhà đầu tư mean-variance, kỳ vọng đồng nhất, một kỳ, thị trường không ma sát, vay/cho vay tại Rf — phi thực tế, nhưng mô hình vẫn là chuẩn cho lợi suất yêu cầu và phân tích thành tích.</p>\n<p><strong>Bộ đồ nghề thành tích — một bộ số, bốn thước đo.</strong> Danh mục: lợi suất 11%, σ = 18%, β = 1,1. Thị trường: 8%, σ = 14%. Rf = 3%. Sharpe = (11−3)/18 = 0,444 (tổng rủi ro — cho toàn bộ tài sản hoặc phần kém đa dạng); M² = 0,444 × 14 + 3 = 9,2% (Sharpe phát biểu lại bằng % — so 8% của thị trường: +1,2% tại cùng mức rủi ro); Treynor = (11−3)/1,1 = 7,27 (rủi ro hệ thống — cho các danh mục con trong tổng thể đã đa dạng); Jensen's alpha = 11 − [3 + 1,1 × 5] = <strong>+2,5%</strong> (phần vượt CAPM — con số tít báo về tài năng nhà quản lý).</p>\n<p>Quy tắc chọn: đánh giá <em>toàn bộ</em> tài sản của nhà đầu tư → thước đo tổng rủi ro (Sharpe, M²); xếp hạng các cấu phần của chương trình đã đa dạng → thước đo theo beta (Treynor, alpha). Xếp hạng có thể vênh nhau — quỹ tập trung σ cao có thể đứng đầu Treynor mà tụt Sharpe cùng lúc; chính sự vênh đó nói cho bạn biết quỹ đang mang rủi ro đa dạng hóa được.</p>"
    }
   ],
   "formulas": [
    [
     "CAPM / SML",
     "E(Ri) = Rf + βi(E(Rm) − Rf)",
     ""
    ],
    [
     "Beta",
     "βi = Cov(Ri,Rm) / σm² = ρi,m σi/σm",
     ""
    ],
    [
     "Treynor",
     "(Rp − Rf)/βp",
     "Systematic risk"
    ],
    [
     "Jensen’s alpha",
     "Rp − [Rf + β(Rm − Rf)]",
     ""
    ],
    [
     "M-squared",
     "M² = Sharpe × σ_market + Rf",
     "Sharpe restated in % at market risk — directly comparable to Rm."
    ],
    [
     "Measure selection rule",
     "whole wealth → Sharpe/M² · sleeve of a diversified plan → Treynor/alpha",
     "Total risk vs systematic risk — the classic exam distinction."
    ]
   ]
  },
  {
   "title": "Basics of Portfolio Planning and Construction",
   "sections": [
    {
     "h": "The Investment Policy Statement and behavioral biases",
     "en": "<p>The <strong>IPS</strong> is the governing document of the client relationship. Objectives: <strong>risk</strong> (ability vs willingness to take risk — use the <em>lower</em> of the two) and <strong>return</strong>. Constraints — remember <strong>LLTTU</strong>: Liquidity, Legal/regulatory, Time horizon, Taxes, Unique circumstances. Strategic asset allocation implements the IPS; rebalancing keeps weights within corridors.</p><p><strong>Behavioral biases:</strong> cognitive <em>belief-perseverance</em> errors (conservatism, confirmation, representativeness, illusion of control, hindsight), <em>processing</em> errors (anchoring, mental accounting, framing, availability), and <strong>emotional biases</strong> (loss aversion, overconfidence, self-control, status quo, endowment, regret aversion). Cognitive errors are best corrected with information and education; emotional biases are usually <em>accommodated</em> rather than corrected. Market-wide effects: herding, bubbles, momentum.</p>",
     "vi": "<p><strong>IPS</strong> là văn bản \"hiến pháp\" của quan hệ khách hàng. Mục tiêu: <strong>rủi ro</strong> (khả năng vs mức sẵn lòng chấp nhận rủi ro — lấy mức <em>thấp hơn</em>) và <strong>lợi nhuận</strong>. Ràng buộc — nhớ <strong>LLTTU</strong>: Thanh khoản, Pháp lý, Thời gian đầu tư, Thuế, Hoàn cảnh đặc thù. Phân bổ tài sản chiến lược hiện thực hóa IPS; tái cân bằng giữ tỷ trọng trong biên độ.</p><p><strong>Thiên lệch hành vi:</strong> lỗi nhận thức dạng <em>bám giữ niềm tin</em> (bảo thủ, thiên kiến xác nhận, đại diện, ảo tưởng kiểm soát, hồi tưởng), lỗi <em>xử lý thông tin</em> (neo, kế toán tâm lý, đóng khung, sẵn có), và <strong>thiên lệch cảm xúc</strong> (sợ thua lỗ, quá tự tin, thiếu tự chủ, giữ nguyên hiện trạng, sở hữu, sợ hối tiếc). Lỗi nhận thức sửa được bằng thông tin và giáo dục; thiên lệch cảm xúc thường phải <em>thích nghi</em> thay vì sửa. Hiệu ứng toàn thị trường: bầy đàn, bong bóng, momentum.</p>"
    },
    {
     "h": "From IPS to portfolio: asset allocation & construction",
     "en": "<ul><li><strong>Capital market expectations</strong> (expected returns, volatilities, correlations by asset class) meet the IPS to produce the <strong>strategic asset allocation (SAA)</strong> — target weights for permissible asset classes. Evidence: the SAA explains the large majority of a diversified portfolio’s return <em>variability</em> over time — the big decision is made before any stock is picked.</li><li><strong>Around the SAA:</strong> <em>tactical asset allocation</em> takes deliberate short-term deviations to exploit views; <em>security selection</em> hunts alpha within classes; <em>risk budgeting</em> allocates the portfolio’s total risk across these activities so active bets are sized consciously. Core–satellite construction indexes the core and concentrates active risk in satellites.</li><li><strong>Rebalancing</strong> restores drifted weights (calendar or corridor triggers) — a discipline that enforces buy-low/sell-high and keeps the risk profile honest, traded off against costs and taxes.</li><li><strong>ESG in construction:</strong> negative/exclusionary screening, positive/best-in-class, ESG integration into analysis, thematic and impact investing, and active ownership — approaches differ in whether they restrict the universe or reshape the analysis.</li></ul>",
     "vi": "<ul><li><strong>Kỳ vọng thị trường vốn</strong> (lợi nhuận kỳ vọng, biến động, tương quan theo lớp tài sản) kết hợp với IPS tạo ra <strong>phân bổ tài sản chiến lược (SAA)</strong> — tỷ trọng mục tiêu cho các lớp tài sản được phép. Bằng chứng thực nghiệm: SAA giải thích phần lớn <em>độ biến thiên</em> lợi nhuận của danh mục đa dạng hóa theo thời gian — quyết định lớn nhất diễn ra trước khi chọn bất kỳ cổ phiếu nào.</li><li><strong>Xoay quanh SAA:</strong> <em>phân bổ chiến thuật (TAA)</em> chủ động lệch ngắn hạn để khai thác quan điểm; <em>chọn chứng khoán</em> săn alpha trong từng lớp; <em>risk budgeting</em> phân bổ tổng rủi ro của danh mục cho các hoạt động này để mỗi cược chủ động được đo lường có ý thức. Cấu trúc core–satellite: lõi đầu tư chỉ số, rủi ro chủ động dồn vào vệ tinh.</li><li><strong>Tái cân bằng</strong> khôi phục tỷ trọng bị trôi (theo lịch hoặc theo ngưỡng hành lang) — kỷ luật ép mua thấp/bán cao và giữ hồ sơ rủi ro trung thực, đánh đổi với chi phí và thuế.</li><li><strong>ESG trong xây dựng danh mục:</strong> sàng lọc loại trừ, chọn tốt nhất nhóm (best-in-class), tích hợp ESG vào phân tích, đầu tư chủ đề và tác động, cùng sở hữu chủ động — các cách tiếp cận khác nhau ở chỗ thu hẹp vũ trụ đầu tư hay tái định hình phân tích.</li></ul>"
    },
    {
     "h": "Write the IPS: ability vs willingness, LLTTU & the corridor rebalance",
     "en": "<svg viewBox=\"0 0 720 330\" style=\"width:100%;height:auto;display:block;margin:14px 0;background:#fff;border:1px solid #E5E9F2;border-radius:12px\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Portfolio management process loop\">\n<text x=\"360\" y=\"26\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" fill=\"#1B2438\">From IPS to portfolio — a loop, not a line</text>\n<rect x=\"50\" y=\"60\" width=\"200\" height=\"78\" rx=\"10\" fill=\"#5457E0\"/>\n<text x=\"150\" y=\"86\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#fff\">1 · PLAN — write the IPS</text>\n<text x=\"150\" y=\"106\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10\" fill=\"#E5E9F2\">risk & return objectives</text>\n<text x=\"150\" y=\"122\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10\" fill=\"#E5E9F2\">constraints: L·L·T·T·U</text>\n<rect x=\"470\" y=\"60\" width=\"200\" height=\"78\" rx=\"10\" fill=\"#0F9573\"/>\n<text x=\"570\" y=\"86\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#fff\">2 · EXECUTE</text>\n<text x=\"570\" y=\"106\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10\" fill=\"#E7F6F0\">strategic asset allocation</text>\n<text x=\"570\" y=\"122\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10\" fill=\"#E7F6F0\">security selection & construction</text>\n<rect x=\"260\" y=\"212\" width=\"200\" height=\"78\" rx=\"10\" fill=\"#B45309\"/>\n<text x=\"360\" y=\"238\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#fff\">3 · FEEDBACK</text>\n<text x=\"360\" y=\"258\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10\" fill=\"#FBF3E4\">monitor & rebalance</text>\n<text x=\"360\" y=\"274\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10\" fill=\"#FBF3E4\">measure performance vs benchmark</text>\n<path d=\"M 254 99 L 466 99\" stroke=\"#5B6577\" stroke-width=\"2.2\" marker-end=\"url(#pmA)\"/>\n<path d=\"M 552 142 C 520 180 480 208 464 218\" stroke=\"#5B6577\" stroke-width=\"2.2\" fill=\"none\" marker-end=\"url(#pmA)\"/>\n<path d=\"M 256 218 C 240 208 200 180 168 142\" stroke=\"#5B6577\" stroke-width=\"2.2\" fill=\"none\" marker-end=\"url(#pmA)\"/>\n<text x=\"126\" y=\"188\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10\" fill=\"#5B6577\">life changes, markets drift →</text>\n<text x=\"126\" y=\"203\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10\" fill=\"#5B6577\">revisit the IPS</text>\n<defs><marker id=\"pmA\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#5B6577\"/></marker></defs>\n<text x=\"360\" y=\"318\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11.5\" fill=\"#8B5CF6\" font-weight=\"600\">Constraints mnemonic — LLTTU: Liquidity, Legal/regulatory, Time horizon, Taxes, Unique circumstances.</text>\n</svg>\n<p><strong>The risk objective has two inputs that can disagree.</strong> <em>Ability</em> to take risk is objective: long horizon, wealth large relative to needs, stable income, flexible goals → high ability. <em>Willingness</em> is psychological, revealed by statements and past behavior. Worked case: a 40-year-old with a 25-year horizon, secure job, and portfolio 20× annual spending (high ability) who says \"I couldn't sleep losing 10%\" (low willingness). Rule: <strong>when they conflict, respect the LOWER of the two</strong> — and document the conversation; educating the client may raise willingness later, but the IPS is written to the constraint that binds today. The return objective must then be <em>consistent</em> with that risk level — a required 12% return with low-risk tolerance is a contradiction the adviser must surface, not paper over.</p>\n<table style=\"width:100%;border-collapse:collapse;font-size:13.5px;margin:10px 0\"><tr style=\"background:#EEF0FE\"><th style=\"padding:7px;border:1px solid #D6DAFB;text-align:left\">Constraint (LLTTU)</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Questions it answers</th><th style=\"padding:7px;border:1px solid #D6DAFB;text-align:left\">Example bite</th></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Liquidity</td><td style=\"padding:7px;border:1px solid #E5E9F2\">cash needs, emergency reserves, known outflows</td><td style=\"padding:7px;border:1px solid #E5E9F2\">house deposit in 18 months → that sum leaves risky assets</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Legal / regulatory</td><td style=\"padding:7px;border:1px solid #E5E9F2\">trust law, pension rules, insider restrictions</td><td style=\"padding:7px;border:1px solid #E5E9F2\">trustee bound by prudent-investor standards</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Time horizon</td><td style=\"padding:7px;border:1px solid #E5E9F2\">single or multi-stage; length</td><td style=\"padding:7px;border:1px solid #E5E9F2\">retirement in 25y, then 30y of drawdown — two stages</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Tax</td><td style=\"padding:7px;border:1px solid #E5E9F2\">brackets, account types, loss harvesting</td><td style=\"padding:7px;border:1px solid #E5E9F2\">income-heavy assets into tax-deferred accounts</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Unique</td><td style=\"padding:7px;border:1px solid #E5E9F2\">anything else binding</td><td style=\"padding:7px;border:1px solid #E5E9F2\">ESG exclusions; concentrated founder stock; family business</td></tr></table>\n<p><strong>From IPS to portfolio.</strong> Strategic asset allocation sets target weights across asset classes chosen for low pairwise correlation — SAA choices explain the bulk of portfolio return variability, dwarfing security selection. Layers above it: tactical asset allocation (short-term deviations chasing conditions), security selection (alpha hunting within classes), and a <strong>core–satellite</strong> architecture (cheap passive core + concentrated active satellites) to spend the fee-and-risk budget where skill is plausible. ESG can enter via negative screening, integration, thematic allocations, or engagement — but it must be <em>written into the IPS</em> to be enforceable.</p>\n<p><strong>Rebalancing worked.</strong> Target 60/40 with ±5% corridors: act only when equity drifts outside 55–65. After a rally pushes equities to 67%, sell 7 points back to target (or to the corridor edge, per policy). Corridor discipline is a mechanical \"sell high, buy low\" — its width balances transaction costs, taxes, volatility, and correlation (more volatile, less correlated assets warrant wider bands). Calendar rebalancing is simpler but can act too late or needlessly.</p>",
     "vi": "<p><strong>Mục tiêu rủi ro có hai đầu vào có thể cãi nhau.</strong> <em>Khả năng</em> chịu rủi ro là khách quan: kỳ hạn dài, tài sản lớn so với nhu cầu, thu nhập ổn định, mục tiêu linh hoạt → khả năng cao. <em>Mức sẵn lòng</em> là tâm lý, lộ ra qua phát biểu và hành vi quá khứ. Ca ví dụ: người 40 tuổi, kỳ hạn 25 năm, việc làm vững, danh mục gấp 20 lần chi tiêu năm (khả năng cao) nhưng nói \"mất 10% là tôi mất ngủ\" (sẵn lòng thấp). Quy tắc: <strong>khi mâu thuẫn, tôn trọng mức THẤP hơn</strong> — và ghi lại cuộc trao đổi; giáo dục khách hàng có thể nâng mức sẵn lòng sau này, nhưng IPS viết theo ràng buộc đang trói hôm nay. Mục tiêu lợi suất khi đó phải <em>nhất quán</em> với mức rủi ro — đòi 12% với khẩu vị rủi ro thấp là mâu thuẫn mà người tư vấn phải phơi ra, không được trét giấy che đi.</p>\n<p><strong>Ràng buộc LLTTU (bảng):</strong> Liquidity — nhu cầu tiền mặt, dự phòng khẩn cấp, dòng chi đã biết (đặt cọc nhà sau 18 tháng → khoản đó rời tài sản rủi ro); Legal/regulatory — luật ủy thác, quy định hưu trí, hạn chế nội gián (trustee bị chuẩn prudent-investor trói); Time horizon — một hay nhiều giai đoạn, độ dài (nghỉ hưu sau 25 năm, rồi 30 năm rút tiền — hai giai đoạn); Tax — bậc thuế, loại tài khoản, gặt lỗ thuế (tài sản nặng thu nhập vào tài khoản hoãn thuế); Unique — mọi thứ khác đang trói (loại trừ ESG; cổ phiếu sáng lập tập trung; doanh nghiệp gia đình).</p>\n<p><strong>Từ IPS đến danh mục.</strong> Phân bổ tài sản chiến lược (SAA) đặt trọng số mục tiêu giữa các lớp tài sản chọn vì tương quan đôi một thấp — lựa chọn SAA giải thích phần lớn biến thiên lợi suất danh mục, áp đảo việc chọn chứng khoán. Các lớp bên trên: phân bổ chiến thuật (lệch ngắn hạn theo điều kiện), chọn chứng khoán (săn alpha trong lớp), và kiến trúc <strong>core–satellite</strong> (lõi thụ động rẻ + vệ tinh chủ động tập trung) để tiêu ngân sách phí-và-rủi ro đúng chỗ kỹ năng khả tín. ESG có thể vào qua sàng lọc loại trừ, tích hợp, phân bổ chủ đề, hoặc engagement — nhưng phải <em>được viết vào IPS</em> mới thực thi được.</p>\n<p><strong>Tái cân bằng bằng ví dụ.</strong> Mục tiêu 60/40 với hành lang ±5%: chỉ hành động khi cổ phiếu trôi ra ngoài 55–65. Sau đợt tăng đẩy cổ phiếu lên 67%, bán 7 điểm về mục tiêu (hoặc về mép hành lang, tùy chính sách). Kỷ luật hành lang là \"bán cao, mua thấp\" máy móc — độ rộng cân bằng chi phí giao dịch, thuế, biến động và tương quan (tài sản biến động hơn, ít tương quan hơn xứng đáng dải rộng hơn). Tái cân bằng theo lịch đơn giản hơn nhưng có thể hành động quá muộn hoặc thừa thãi.</p>"
    }
   ],
   "formulas": [
    [
     "Corridor rebalancing",
     "trade only when a weight exits target ± corridor",
     "60/40 with ±5%: act outside 55–65 equity."
    ],
    [
     "Risk objective rule",
     "binding risk level = min(ability, willingness)",
     "Document the conflict; educate to raise willingness later."
    ]
   ]
  },
  {
   "title": "The Behavioral Biases of Individuals",
   "sections": [
    {
     "h": "The behavioral biases of individuals",
     "en": "<ul><li><strong>Two families.</strong> <em>Cognitive errors</em> — faulty reasoning or memory; identifiable and <strong>correctable with education and process</strong>. <em>Emotional biases</em> — impulses and feelings; hard to correct, so advisers <strong>adapt</strong> to them (adjust the portfolio) rather than fight them.</li><li><strong>Cognitive — belief perseverance:</strong> <em>conservatism</em> (under-reacting to new evidence, clinging to priors); <em>confirmation</em> (seeking only supporting evidence); <em>representativeness</em> (judging by resemblance — extrapolating small samples, base-rate neglect); <em>illusion of control</em> (believing one can influence outcomes — overtrading, concentration); <em>hindsight</em> (\"I knew it all along\" — inflates confidence).</li><li><strong>Cognitive — processing errors:</strong> <em>anchoring</em> (stuck on an initial number, like purchase price); <em>mental accounting</em> (treating money in layers — dividends vs capital, \"house money\"); <em>framing</em> (answers flip with the wording of the question); <em>availability</em> (overweighting vivid, recent, easily recalled events).</li><li><strong>Emotional:</strong> <em>loss aversion</em> (losses hurt ~2× gains → holding losers, selling winners — the disposition effect); <em>overconfidence</em> (overtrading, underestimating risk); <em>self-control</em> (favoring today over the plan); <em>status quo</em> (inertia in allocations); <em>endowment</em> (owned assets feel worth more — inherited holdings); <em>regret aversion</em> (doing nothing, or herding, to avoid future regret).</li><li><strong>Market fingerprints:</strong> these biases underpin momentum and bubbles (herding, overconfidence), the value anomaly (representativeness), and under-diversified portfolios — the bridge to the market-efficiency module.</li></ul>",
     "vi": "<ul><li><strong>Hai họ thiên lệch.</strong> <em>Sai lệch nhận thức</em> — lỗi lập luận hoặc trí nhớ; nhận diện được và <strong>sửa được bằng giáo dục, quy trình</strong>. <em>Thiên lệch cảm xúc</em> — xung động và cảm giác; khó sửa, nên nhà tư vấn <strong>thích nghi</strong> (điều chỉnh danh mục) thay vì đối đầu.</li><li><strong>Nhận thức — bảo thủ niềm tin:</strong> <em>conservatism</em> (phản ứng yếu với bằng chứng mới, bám dự phóng cũ); <em>confirmation</em> (chỉ tìm bằng chứng ủng hộ); <em>representativeness</em> (xét đoán theo sự giống nhau — ngoại suy mẫu nhỏ, bỏ quên tỷ lệ cơ sở); <em>illusion of control</em> (tin mình chi phối được kết quả — giao dịch quá tay, tập trung vị thế); <em>hindsight</em> (\"tôi biết ngay mà\" — thổi phồng tự tin).</li><li><strong>Nhận thức — xử lý thông tin:</strong> <em>anchoring</em> (neo vào con số ban đầu, như giá mua); <em>mental accounting</em> (chia tiền thành ngăn — cổ tức vs vốn gốc, \"tiền nhà cái\"); <em>framing</em> (câu trả lời đổi theo cách đặt câu hỏi); <em>availability</em> (đặt nặng sự kiện sống động, gần đây, dễ nhớ).</li><li><strong>Cảm xúc:</strong> <em>loss aversion</em> (lỗ đau gấp ~2 lần lãi → giữ mã lỗ, bán mã lãi — hiệu ứng disposition); <em>overconfidence</em> (giao dịch quá mức, đánh giá thấp rủi ro); <em>self-control</em> (ưu tiên hôm nay hơn kế hoạch); <em>status quo</em> (ì với phân bổ hiện tại); <em>endowment</em> (tài sản đang sở hữu có cảm giác đáng giá hơn — cổ phiếu thừa kế); <em>regret aversion</em> (không làm gì, hoặc theo đám đông, để né hối tiếc tương lai).</li><li><strong>Dấu vân tay trên thị trường:</strong> các thiên lệch này đứng sau momentum và bong bóng (bầy đàn, quá tự tin), hiệu ứng giá trị (representativeness), và danh mục kém đa dạng hóa — cây cầu nối sang module hiệu quả thị trường.</li></ul>"
    },
    {
     "h": "The bias taxonomy with a diagnostic case + the market-level footprint",
     "en": "<p><strong>The organizing split the exam always tests:</strong> <em>cognitive errors</em> (faulty reasoning — improvable with information and process) vs <em>emotional biases</em> (feelings — usually must be <em>accommodated</em>, not argued away). Cognitive errors subdivide into belief-perseverance and information-processing types.</p>\n<table style=\"width:100%;border-collapse:collapse;font-size:13.5px;margin:10px 0\"><tr style=\"background:#EEF0FE\"><th style=\"padding:7px;border:1px solid #D6DAFB;text-align:left\">Group</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Bias</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Signature behavior</th></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\" rowspan=\"5\">Cognitive — belief perseverance</td><td style=\"padding:7px;border:1px solid #E5E9F2\">Conservatism</td><td style=\"padding:7px;border:1px solid #E5E9F2\">clings to prior views; updates too slowly to new data</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Confirmation</td><td style=\"padding:7px;border:1px solid #E5E9F2\">seeks only supporting evidence; ignores the rest</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Representativeness</td><td style=\"padding:7px;border:1px solid #E5E9F2\">\"great company = great stock\"; base rates neglected</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Illusion of control</td><td style=\"padding:7px;border:1px solid #E5E9F2\">believes involvement improves odds; overtrades</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Hindsight</td><td style=\"padding:7px;border:1px solid #E5E9F2\">\"I knew it all along\"; miscalibrates future confidence</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\" rowspan=\"4\">Cognitive — processing</td><td style=\"padding:7px;border:1px solid #E5E9F2\">Anchoring</td><td style=\"padding:7px;border:1px solid #E5E9F2\">stuck on purchase price or first estimate</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Mental accounting</td><td style=\"padding:7px;border:1px solid #E5E9F2\">buckets money; ignores total-portfolio view</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Framing</td><td style=\"padding:7px;border:1px solid #E5E9F2\">answers change with the question's wording</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Availability</td><td style=\"padding:7px;border:1px solid #E5E9F2\">overweights vivid, recent, easily recalled events</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\" rowspan=\"6\">Emotional</td><td style=\"padding:7px;border:1px solid #E5E9F2\">Loss aversion</td><td style=\"padding:7px;border:1px solid #E5E9F2\">losses hurt ~2× gains → holds losers, sells winners (disposition effect)</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Overconfidence</td><td style=\"padding:7px;border:1px solid #E5E9F2\">too-narrow intervals; excessive trading & concentration</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Self-control</td><td style=\"padding:7px;border:1px solid #E5E9F2\">spends today, undersaves for the stated horizon</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Status quo</td><td style=\"padding:7px;border:1px solid #E5E9F2\">default allocations left untouched for years</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Endowment</td><td style=\"padding:7px;border:1px solid #E5E9F2\">owned assets valued above identical unowned ones (inherited stock)</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Regret aversion</td><td style=\"padding:7px;border:1px solid #E5E9F2\">avoids acting for fear of blame; herds into what everyone owns</td></tr></table>\n<p><strong>Diagnostic case (exam format).</strong> An investor (1) refuses to sell a stock below her purchase price, (2) holds a large inherited position she'd never buy today, and (3) reads only bullish research on it. Diagnoses: (1) anchoring <em>and</em> loss aversion via the disposition effect; (2) endowment + status quo; (3) confirmation. Prescriptions differ by type: for the cognitive pieces, force base rates, checklists, and pre-set sell disciplines; for the emotional pieces, accommodate — e.g., staged selling of the inherited stock with rules agreed in calm weather and written into the IPS.</p>\n<p><strong>Market-level footprints.</strong> Herding and availability inflate bubbles; conservatism and anchoring produce under-reaction (momentum, post-earnings drift); representativeness produces over-extrapolation and reversals (a value-anomaly story); loss aversion helps explain the equity premium's size. Behavioral finance thus complements, not replaces, market efficiency: it supplies the <em>why</em> behind the anomaly catalogue in Equity.</p>",
     "vi": "<p><strong>Nhát cắt tổ chức mà đề luôn hỏi:</strong> <em>lỗi nhận thức</em> (suy luận sai — cải thiện được bằng thông tin và quy trình) vs <em>thiên lệch cảm xúc</em> (cảm giác — thường phải <em>chiều theo có kiểm soát</em>, không cãi được). Lỗi nhận thức chia tiếp thành nhóm bảo thủ niềm tin và nhóm xử lý thông tin.</p>\n<p><strong>Bảng phân loại:</strong> nhận thức–bảo thủ niềm tin: conservatism (bám quan điểm cũ, cập nhật quá chậm), confirmation (chỉ tìm bằng chứng ủng hộ), representativeness (\"công ty tốt = cổ phiếu tốt\", quên base rate), illusion of control (tin can dự làm tăng cơ may, giao dịch quá tay), hindsight (\"tôi biết ngay mà\"). Nhận thức–xử lý: anchoring (dính giá mua/ước tính đầu), mental accounting (chia tiền vào ngăn, quên góc nhìn tổng danh mục), framing (đáp án đổi theo cách hỏi), availability (đặt nặng sự kiện sống động, gần đây). Cảm xúc: loss aversion (lỗ đau ~2× lãi → giữ hàng lỗ, bán hàng lãi — disposition effect), overconfidence (khoảng tin quá hẹp, giao dịch và tập trung quá mức), self-control (tiêu hôm nay, tiết kiệm thiếu), status quo (phân bổ mặc định bỏ mặc nhiều năm), endowment (định giá thứ mình sở hữu cao hơn thứ y hệt chưa sở hữu — cổ phiếu thừa kế), regret aversion (né hành động vì sợ bị trách, bầy đàn vào thứ ai cũng nắm).</p>\n<p><strong>Ca chẩn đoán (đúng format đề).</strong> Nhà đầu tư (1) từ chối bán cổ phiếu dưới giá mua, (2) giữ vị thế thừa kế lớn mà hôm nay chẳng bao giờ mua, và (3) chỉ đọc báo cáo lạc quan về nó. Chẩn đoán: (1) anchoring <em>và</em> loss aversion qua disposition effect; (2) endowment + status quo; (3) confirmation. Kê đơn theo loại: với phần nhận thức, ép dùng base rate, checklist, kỷ luật bán định trước; với phần cảm xúc, chiều có kiểm soát — ví dụ bán theo lộ trình cổ phiếu thừa kế với quy tắc thỏa thuận lúc \"trời yên\" và viết vào IPS.</p>\n<p><strong>Dấu chân cấp thị trường.</strong> Bầy đàn và availability bơm bong bóng; conservatism và anchoring tạo phản ứng thiếu (momentum, post-earnings drift); representativeness tạo ngoại suy quá đà và đảo chiều (câu chuyện value anomaly); loss aversion góp phần giải thích độ lớn của equity premium. Tài chính hành vi vì thế bổ sung, không thay thế, hiệu quả thị trường: nó cấp phần <em>vì sao</em> đứng sau catalogue anomaly bên Equity.</p>"
    }
   ]
  },
  {
   "title": "Introduction to Risk Management",
   "sections": [
    {
     "h": "Introduction to risk management",
     "en": "<ul><li><strong>Risk management is not risk minimization:</strong> it is deciding <em>which risks to take, in what size, to pursue the organization’s goals</em> — then measuring and adjusting continuously. The framework: risk governance (board-level, enterprise view), risk identification and measurement, infrastructure, policies and processes, monitoring, and strategic integration.</li><li><strong>Risk tolerance and budgeting:</strong> governance sets what the organization <em>can and will</em> absorb (tolerance); <strong>risk budgeting</strong> then allocates that capacity across activities — by asset class, factor exposure, or measures like beta, duration, and VaR — so risk, like capital, is spent deliberately.</li><li><strong>Taxonomy:</strong> <em>financial risks</em> — market (rates, FX, equity, commodity prices), credit (default of counterparties), liquidity (widened spreads and price impact when selling); <em>non-financial</em> — operational (people, systems, cyber), legal/compliance, model, settlement, solvency. Individuals add mortality and longevity risk.</li><li><strong>Measures:</strong> standard deviation and beta for equities; duration for bonds; delta/gamma/vega for derivatives; <strong>VaR</strong> — the minimum loss expected with a given probability over a horizon (e.g., 5% one-week VaR of $1m: in 5% of weeks, losses of at least $1m) — useful but silent about the tail beyond; scenario analysis and stress tests fill the gap.</li><li><strong>Modifying risk:</strong> <em>prevention and avoidance</em> (don’t take the exposure); <em>acceptance</em> (self-insure, diversify); <em>transfer</em> (insurance, for discrete insurable events); <em>shifting</em> (derivatives reshaping the distribution — forwards, options). Choose by comparing the cost of each method with the benefit, given the risk budget.</li></ul>",
     "vi": "<ul><li><strong>Quản trị rủi ro không phải tối thiểu hóa rủi ro:</strong> mà là quyết định <em>nhận rủi ro nào, quy mô bao nhiêu, để theo đuổi mục tiêu tổ chức</em> — rồi đo lường, điều chỉnh liên tục. Khung: quản trị rủi ro (cấp HĐQT, góc nhìn toàn doanh nghiệp), nhận diện và đo lường, hạ tầng, chính sách và quy trình, giám sát, tích hợp chiến lược.</li><li><strong>Khẩu vị và ngân sách rủi ro:</strong> quản trị xác định tổ chức <em>có thể và sẵn sàng</em> hấp thụ bao nhiêu (tolerance); <strong>risk budgeting</strong> phân bổ sức chứa đó cho các hoạt động — theo lớp tài sản, phơi nhiễm nhân tố, hoặc các thước đo như beta, duration, VaR — để rủi ro, giống như vốn, được \"chi tiêu\" có chủ đích.</li><li><strong>Phân loại:</strong> <em>rủi ro tài chính</em> — thị trường (lãi suất, tỷ giá, giá cổ phiếu, hàng hóa), tín dụng (đối tác vỡ nợ), thanh khoản (spread doãng và tác động giá khi phải bán); <em>phi tài chính</em> — vận hành (con người, hệ thống, an ninh mạng), pháp lý/tuân thủ, mô hình, thanh toán, khả năng thanh toán. Cá nhân thêm rủi ro tử vong và rủi ro sống thọ.</li><li><strong>Thước đo:</strong> độ lệch chuẩn và beta cho cổ phiếu; duration cho trái phiếu; delta/gamma/vega cho phái sinh; <strong>VaR</strong> — mức lỗ tối thiểu kỳ vọng với xác suất cho trước trong một kỳ hạn (VD: VaR 1 tuần 5% là 1 triệu USD: 5% số tuần sẽ lỗ ít nhất 1 triệu) — hữu ích nhưng im lặng về phần đuôi vượt ngưỡng; phân tích kịch bản và stress test lấp khoảng trống.</li><li><strong>Điều chỉnh rủi ro:</strong> <em>ngăn ngừa và né tránh</em> (không nhận phơi nhiễm); <em>chấp nhận</em> (tự bảo hiểm, đa dạng hóa); <em>chuyển giao</em> (bảo hiểm, cho các sự kiện rời rạc bảo hiểm được); <em>dịch chuyển</em> (phái sinh tái định hình phân phối — forward, option). Chọn phương án bằng cách so chi phí với lợi ích, trong khuôn khổ ngân sách rủi ro.</li></ul>"
    },
    {
     "h": "The risk framework applied: budget it, measure it, pick the treatment",
     "en": "<p><strong>Risk management is not risk minimization</strong> — it is choosing which risks to take, in what size, because they are paid, and shedding the rest. The framework: governance (board-level: define the appetite in advance, integrate it into strategy) → risk <strong>tolerance</strong> (what can we survive? which losses are unacceptable?) → risk <strong>budgeting</strong> (allocate the agreed risk, not just capital: e.g., cap portfolio σ at 12%, spend it 8 points on equity beta, 3 on credit, 1 on active bets) → identify & measure → treat → monitor and loop.</p>\n<table style=\"width:100%;border-collapse:collapse;font-size:13.5px;margin:10px 0\"><tr style=\"background:#EEF0FE\"><th style=\"padding:7px;border:1px solid #D6DAFB;text-align:left\">Financial risks</th><th style=\"padding:7px;border:1px solid #D6DAFB;text-align:left\">Non-financial risks</th></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Market (rates, equity, FX, commodity)</td><td style=\"padding:7px;border:1px solid #E5E9F2\">Operational (systems, fraud, cyber, model error)</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Credit (default, downgrade, counterparty)</td><td style=\"padding:7px;border:1px solid #E5E9F2\">Legal & compliance; regulatory change</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Liquidity (cannot exit near fair value)</td><td style=\"padding:7px;border:1px solid #E5E9F2\">Solvency; settlement; political; reputational; mortality/longevity for individuals</td></tr></table>\n<p><strong>Measures, with their fine print.</strong> Standard deviation and beta for market risk; duration for rates (Fixed Income); <strong>VaR</strong> — \"we lose at least X with 5% probability over N days\" — is a floor on bad outcomes, <em>not</em> the worst case: it says nothing about how bad the tail beyond it gets, so pair it with scenario analysis and stress tests. Credit risks use PD/LGD (Fixed Income); operational risks resist quantification and are managed by controls and insurance. Crucially, <strong>risks interact</strong>: in crises, market losses trigger margin calls (liquidity risk) which force sales (more market risk) while counterparties wobble (credit risk) — combined risk far exceeds the sum of the parts measured separately.</p>\n<svg viewBox=\"0 0 720 340\" style=\"width:100%;height:auto;display:block;margin:14px 0;background:#fff;border:1px solid #E5E9F2;border-radius:12px\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Risk treatment decision quadrant\">\n<text x=\"360\" y=\"26\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" fill=\"#1B2438\">Choosing the risk treatment: frequency × severity</text>\n<line x1=\"360\" y1=\"50\" x2=\"360\" y2=\"300\" stroke=\"#5B6577\" stroke-width=\"1.5\"/>\n<line x1=\"90\" y1=\"175\" x2=\"630\" y2=\"175\" stroke=\"#5B6577\" stroke-width=\"1.5\"/>\n<text x=\"360\" y=\"318\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11\" fill=\"#5B6577\">← Low severity | High severity →</text>\n<text x=\"72\" y=\"176\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11\" fill=\"#5B6577\" transform=\"rotate(-90 72 176)\">← Low freq | High freq →</text>\n<rect x=\"110\" y=\"62\" width=\"230\" height=\"98\" rx=\"10\" fill=\"#E7F6F0\" stroke=\"#0F9573\"/>\n<text x=\"225\" y=\"92\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12.5\" font-weight=\"700\" fill=\"#0F9573\">ACCEPT & self-insure</text>\n<text x=\"225\" y=\"112\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#1B2438\">frequent small losses: budget them,</text>\n<text x=\"225\" y=\"128\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#1B2438\">diversify, keep reserves</text>\n<rect x=\"380\" y=\"62\" width=\"230\" height=\"98\" rx=\"10\" fill=\"#FDECEC\" stroke=\"#DC4848\"/>\n<text x=\"495\" y=\"92\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12.5\" font-weight=\"700\" fill=\"#DC4848\">AVOID / PREVENT</text>\n<text x=\"495\" y=\"112\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#1B2438\">frequent AND severe: the activity</text>\n<text x=\"495\" y=\"128\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#1B2438\">is not worth doing — exit or re-engineer</text>\n<rect x=\"110\" y=\"192\" width=\"230\" height=\"98\" rx=\"10\" fill=\"#EEF0FE\" stroke=\"#5457E0\"/>\n<text x=\"225\" y=\"222\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12.5\" font-weight=\"700\" fill=\"#4338CA\">RETAIN (do nothing special)</text>\n<text x=\"225\" y=\"242\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#1B2438\">rare and small: management</text>\n<text x=\"225\" y=\"258\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#1B2438\">attention costs more than the risk</text>\n<rect x=\"380\" y=\"192\" width=\"230\" height=\"98\" rx=\"10\" fill=\"#FBF3E4\" stroke=\"#B45309\"/>\n<text x=\"495\" y=\"222\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12.5\" font-weight=\"700\" fill=\"#B45309\">TRANSFER or SHIFT</text>\n<text x=\"495\" y=\"242\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#1B2438\">rare but severe: insurance (transfer)</text>\n<text x=\"495\" y=\"258\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#1B2438\">or derivatives (shift the distribution)</text>\n</svg>\n<p><strong>Treatment worked examples.</strong> Data-center fire (rare, severe) → <em>transfer</em> via insurance. A trading desk's small daily operational errors (frequent, minor) → <em>accept and self-insure</em> with reserves and process fixes. Selling a product in a country whose legal system makes losses frequent and severe → <em>avoid</em>. An exporter's FX exposure (ongoing, sizeable) → <em>shift the distribution</em> with forwards or options (Derivatives). The chosen mix should reflect the risk budget: bearing a risk makes sense only when the organization is <em>paid</em> for it and it fits within tolerance. Self-insurance economizes on premiums but demands genuine reserves; hedging spends certain premium/spread to cut uncertain tails — none of the four treatments is free.</p>",
     "vi": "<p><strong>Quản trị rủi ro không phải tối thiểu hóa rủi ro</strong> — mà là chọn rủi ro nào để gánh, cỡ bao nhiêu, vì chúng được trả công, và trút bỏ phần còn lại. Khung: quản trị (cấp HĐQT: định khẩu vị từ trước, tích hợp vào chiến lược) → <strong>tolerance</strong> (ta sống sót được mức nào? khoản lỗ nào không chấp nhận được?) → <strong>risk budgeting</strong> (phân bổ rủi ro đã thỏa thuận, không chỉ phân bổ vốn: ví dụ trần σ danh mục 12%, tiêu 8 điểm cho beta cổ phiếu, 3 cho tín dụng, 1 cho cược chủ động) → nhận diện & đo lường → xử lý → giám sát và lặp.</p>\n<p><strong>Bảng phân loại:</strong> rủi ro tài chính — thị trường (lãi suất, cổ phiếu, FX, hàng hóa), tín dụng (vỡ nợ, hạ bậc, đối tác), thanh khoản (không thoát được gần giá hợp lý); rủi ro phi tài chính — vận hành (hệ thống, gian lận, mạng, lỗi mô hình), pháp lý & tuân thủ, thay đổi quy định, khả năng thanh toán, thanh toán bù trừ, chính trị, danh tiếng, tử vong/thọ với cá nhân.</p>\n<p><strong>Thước đo, kèm dòng chữ nhỏ.</strong> Độ lệch chuẩn và beta cho rủi ro thị trường; duration cho lãi suất (Fixed Income); <strong>VaR</strong> — \"lỗ ít nhất X với xác suất 5% trong N ngày\" — là sàn của kết cục xấu, <em>không phải</em> trường hợp tệ nhất: nó không nói gì về cái đuôi tệ đến đâu, nên phải ghép với phân tích kịch bản và stress test. Rủi ro tín dụng dùng PD/LGD (Fixed Income); rủi ro vận hành khó lượng hóa, quản bằng kiểm soát và bảo hiểm. Cốt tử: <strong>rủi ro tương tác</strong>: trong khủng hoảng, lỗ thị trường kích margin call (rủi ro thanh khoản) ép bán tháo (thêm rủi ro thị trường) trong khi đối tác lung lay (rủi ro tín dụng) — rủi ro gộp vượt xa tổng các phần đo riêng lẻ.</p>\n<p><strong>Ví dụ xử lý.</strong> Cháy trung tâm dữ liệu (hiếm, nghiêm trọng) → <em>chuyển giao</em> bằng bảo hiểm. Lỗi vận hành nhỏ hằng ngày của bàn giao dịch (thường xuyên, nhẹ) → <em>chấp nhận và tự bảo hiểm</em> bằng dự phòng và sửa quy trình. Bán sản phẩm ở quốc gia mà hệ thống pháp lý khiến thua lỗ vừa thường xuyên vừa nặng → <em>tránh</em>. Phơi nhiễm FX của nhà xuất khẩu (liên tục, đáng kể) → <em>dịch chuyển phân phối</em> bằng forward hoặc quyền chọn (Derivatives). Tổ hợp được chọn phải phản ánh ngân sách rủi ro: gánh một rủi ro chỉ hợp lý khi tổ chức <em>được trả công</em> cho nó và nó nằm trong tolerance. Tự bảo hiểm tiết kiệm phí nhưng đòi dự phòng thật; phòng hộ tiêu phí/spread chắc chắn để cắt đuôi bất định — không cách xử lý nào trong bốn cách là miễn phí.</p>"
    }
   ],
   "formulas": [
    [
     "VaR statement",
     "P(loss ≥ VaR) = tail probability over horizon N",
     "A floor on bad outcomes, not the worst case — pair with stress tests."
    ],
    [
     "Treatment matrix",
     "freq×sev: low/low retain · high/low self-insure · low/high transfer · high/high avoid",
     "Insurance transfers; derivatives shift the distribution."
    ]
   ]
  }
 ],
 "vocab": [
  [
   "systematic risk",
   "Market-wide risk that diversification cannot remove.",
   "rủi ro hệ thống"
  ],
  [
   "unsystematic risk",
   "Firm-specific risk removable by diversification.",
   "rủi ro phi hệ thống"
  ],
  [
   "beta",
   "Sensitivity of an asset’s return to market returns.",
   "hệ số beta"
  ],
  [
   "efficient frontier",
   "Set of portfolios with maximum return per unit of risk.",
   "đường biên hiệu quả"
  ],
  [
   "capital market line",
   "CAL through the market portfolio; prices total risk of efficient portfolios.",
   "đường thị trường vốn"
  ],
  [
   "security market line",
   "CAPM relationship between beta and expected return for all assets.",
   "đường thị trường chứng khoán"
  ],
  [
   "risk budgeting",
   "Allocating a total risk limit across positions/strategies.",
   "phân bổ ngân sách rủi ro"
  ],
  [
   "drawdown",
   "Decline from a peak in portfolio value.",
   "mức sụt giảm từ đỉnh"
  ],
  [
   "loss aversion",
   "Feeling losses more strongly than equivalent gains.",
   "tâm lý sợ thua lỗ"
  ],
  [
   "herding",
   "Following the crowd’s trades regardless of one’s own analysis.",
   "tâm lý bầy đàn"
  ],
  [
   "strategic asset allocation",
   "Long-run target weights implementing the IPS.",
   "phân bổ tài sản chiến lược"
  ],
  [
   "rebalancing",
   "Restoring portfolio weights to targets.",
   "tái cân bằng danh mục"
  ],
  [
   "open-end vs closed-end fund",
   "NAV-based flows and daily dealing vs fixed shares trading at premiums/discounts",
   "Quỹ mở giao dịch theo NAV vs quỹ đóng số chứng chỉ cố định, giá lệch NAV"
  ],
  [
   "ETF in-kind creation/redemption",
   "Authorized participants arbitrage price to NAV, adding tax efficiency",
   "Cơ chế tạo/hoàn bằng hiện vật giữ giá sát NAV, tăng hiệu quả thuế"
  ],
  [
   "separately managed account (SMA)",
   "Direct ownership of securities managed to a client-specific mandate",
   "Tài khoản quản lý riêng — sở hữu trực tiếp, theo mandate riêng của khách"
  ],
  [
   "strategic vs tactical allocation",
   "Long-run policy weights vs deliberate short-term deviations",
   "Tỷ trọng chính sách dài hạn vs độ lệch ngắn hạn có chủ đích"
  ],
  [
   "risk budgeting",
   "Allocating total portfolio risk across asset classes and active bets",
   "Phân bổ tổng rủi ro danh mục cho các lớp tài sản và cược chủ động"
  ],
  [
   "rebalancing (calendar / corridor)",
   "Restoring drifted weights on a schedule or at threshold bands",
   "Khôi phục tỷ trọng bị trôi theo lịch hoặc theo ngưỡng hành lang"
  ],
  [
   "cognitive vs emotional bias",
   "Reasoning errors (educate/correct) vs feeling-driven biases (adapt to)",
   "Sai lệch lập luận (sửa bằng giáo dục) vs thiên lệch cảm xúc (phải thích nghi)"
  ],
  [
   "disposition effect",
   "Selling winners too early and holding losers too long — loss aversion at work",
   "Bán mã lãi quá sớm, ôm mã lỗ quá lâu — loss aversion vận hành"
  ],
  [
   "value at risk (VaR)",
   "Minimum loss expected with a stated probability over a horizon",
   "Mức lỗ tối thiểu kỳ vọng với xác suất nêu trước trong một kỳ hạn"
  ],
  [
   "risk transfer vs shifting",
   "Insurance for insurable events vs derivatives reshaping distributions",
   "Bảo hiểm cho sự kiện bảo hiểm được vs phái sinh tái định hình phân phối"
  ],
  [
   "drawdown",
   "Peak-to-trough decline experienced by a portfolio",
   "Mức sụt giảm từ đỉnh xuống đáy của danh mục"
  ]
 ],
 "quiz": [
  {
   "q": "The risk-free rate is 3%, the expected market return is 9%, and a stock’s beta is 1.5. According to the CAPM, the stock’s required return is closest to:",
   "opts": [
    "12.0%",
    "13.5%",
    "9.0%"
   ],
   "ans": 0,
   "en": "A is correct. E(R) = 3% + 1.5 × (9% − 3%) = 3% + 9% = 12%. A common error is multiplying beta by the market return (1.5 × 9% = 13.5%) instead of the market risk premium.",
   "vi": "Đáp án A. E(R) = 3% + 1.5 × (9% − 3%) = 12%. Lỗi phổ biến là nhân beta với lợi suất thị trường (13.5%) thay vì với phần bù rủi ro thị trường."
  },
  {
   "q": "An analyst forecasts a return of 14% for a stock whose CAPM required return is 12%. The stock plots:",
   "opts": [
    "on the SML and is fairly valued.",
    "above the SML and is undervalued.",
    "below the SML and is overvalued."
   ],
   "ans": 1,
   "en": "B is correct. A forecast return above the CAPM requirement means the stock offers more than compensation for its systematic risk — it plots above the SML and is undervalued (a buy).",
   "vi": "Đáp án B. Lợi suất dự báo cao hơn mức yêu cầu theo CAPM nghĩa là cổ phiếu đem lại nhiều hơn mức bù đắp cho rủi ro hệ thống — nằm trên SML và đang bị định giá thấp (nên mua)."
  },
  {
   "q": "Which risk measure is most appropriate for evaluating a portfolio that represents only a small, well-diversified part of an investor’s total wealth?",
   "opts": [
    "Sharpe ratio",
    "Treynor ratio",
    "Standard deviation"
   ],
   "ans": 1,
   "en": "B is correct. For a well-diversified component of wealth, only systematic risk matters, so the Treynor ratio (excess return per unit of beta) is appropriate. The Sharpe ratio, based on total risk, suits a portfolio that constitutes the investor’s entire wealth.",
   "vi": "Đáp án B. Với một phần nhỏ, đã đa dạng hóa tốt của tổng tài sản, chỉ rủi ro hệ thống mới quan trọng, nên dùng Treynor (lợi suất vượt trội trên mỗi đơn vị beta). Sharpe dựa trên tổng rủi ro, phù hợp khi danh mục là toàn bộ tài sản."
  },
  {
   "q": "A client has a high ability to take risk but a low willingness to take risk. The adviser should most appropriately:",
   "opts": [
    "base the IPS on the client’s ability to take risk.",
    "base the IPS on the lower of the two and seek to educate the client.",
    "average the two into a moderate risk tolerance."
   ],
   "ans": 1,
   "en": "B is correct. When ability and willingness conflict, the prudent approach is to adopt the lower level of risk in the IPS while educating the client — never simply override the client’s stated willingness.",
   "vi": "Đáp án B. Khi khả năng và mức sẵn lòng mâu thuẫn, cách thận trọng là lấy mức rủi ro thấp hơn khi lập IPS và giáo dục khách hàng — không được tự ý bỏ qua mức sẵn lòng khách hàng đã nêu."
  },
  {
   "q": "Two assets have a correlation of +1.0. Combining them in a portfolio most likely provides:",
   "opts": [
    "no diversification benefit.",
    "elimination of systematic risk.",
    "a portfolio standard deviation below the weighted average of the two."
   ],
   "ans": 0,
   "en": "A is correct. With perfect positive correlation, portfolio standard deviation equals exactly the weighted average of the assets’ standard deviations — no risk reduction. Diversification benefits appear only when ρ < 1.",
   "vi": "Đáp án A. Với tương quan hoàn hảo dương, độ lệch chuẩn danh mục đúng bằng bình quân gia quyền độ lệch chuẩn hai tài sản — không giảm được rủi ro. Lợi ích đa dạng hóa chỉ xuất hiện khi ρ < 1."
  }
 ]
});
window.CFA.extra["pm"] = {
 "checks": [
  [
   {
    "q": "Compared with a bank’s investment portfolio, a defined-benefit pension plan most likely has:",
    "opts": [
     "A shorter investment horizon and higher liquidity needs",
     "A longer horizon and greater ability to hold risky, less liquid assets",
     "Identical objectives, since both are institutions"
    ],
    "ans": 1,
    "en": "DB liabilities stretch decades and are fairly predictable — long horizons and modest liquidity needs; banks are liability-driven with short horizons and high liquidity demands.",
    "vi": "Nghĩa vụ của quỹ DB kéo dài hàng chục năm, khá dự đoán được — kỳ hạn dài, nhu cầu thanh khoản vừa; ngân hàng chạy theo nợ ngắn hạn, cần thanh khoản cao."
   },
   {
    "q": "The mechanism that keeps an ETF’s market price close to its NAV is:",
    "opts": [
     "End-of-day pricing at NAV",
     "In-kind creation and redemption by authorized participants",
     "A fixed share count"
    ],
    "ans": 1,
    "en": "Authorized participants arbitrage price–NAV gaps by creating or redeeming ETF shares in kind — which also drives the ETF’s tax efficiency.",
    "vi": "Authorized participants arbitrage khoảng cách giá–NAV bằng cách tạo/hoàn chứng chỉ ETF bằng hiện vật — cơ chế này cũng tạo hiệu quả thuế của ETF."
   },
   {
    "q": "Which investor typically has the LONGEST horizon and highest tolerance for illiquid assets?",
    "opts": [
     "A property & casualty insurer",
     "A university endowment",
     "A commercial bank"
    ],
    "ans": 1,
    "en": "Endowments are quasi-perpetual with modest annual spending — built to harvest illiquidity premiums.",
    "vi": "Endowment gần như vĩnh viễn với mức chi hằng năm khiêm tốn — sinh ra để gặt phần bù kém thanh khoản."
   },
   {
    "q": "An ETF's market price stays close to NAV primarily because of:",
    "opts": [
     "Exchange rules",
     "The in-kind creation/redemption arbitrage mechanism",
     "Daily portfolio disclosure alone"
    ],
    "ans": 1,
    "en": "Authorized participants create/redeem shares in kind whenever price and NAV diverge, arbitraging the gap shut.",
    "vi": "Authorized participants tạo/hoàn chứng chỉ in-kind mỗi khi giá lệch NAV, arbitrage khép khoảng cách lại."
   }
  ],
  [
   {
    "q": "Combining two risky assets whose correlation is less than +1.0 produces a portfolio standard deviation that is:",
    "opts": [
     "Equal to the weighted average of the two standard deviations",
     "Less than the weighted average of the two standard deviations",
     "Always zero"
    ],
    "ans": 1,
    "en": "Diversification benefit exists whenever ρ &lt; 1: the portfolio’s risk falls below the weighted average, and the lower the correlation the larger the benefit.",
    "vi": "Chỉ cần tương quan &lt; 1 là có lợi ích đa dạng hóa: độ lệch chuẩn danh mục thấp hơn bình quân gia quyền; tương quan càng thấp lợi ích càng lớn."
   },
   {
    "q": "According to modern portfolio theory, investors should expect compensation for bearing:",
    "opts": [
     "Total risk",
     "Systematic (market) risk only, because unsystematic risk can be diversified away",
     "Company-specific risk"
    ],
    "ans": 1,
    "en": "Diversifiable risk is free to eliminate, so the market prices only systematic risk — the logic behind beta and the CAPM.",
    "vi": "Rủi ro phi hệ thống có thể loại bỏ miễn phí bằng đa dạng hóa, nên thị trường chỉ trả phần bù cho rủi ro hệ thống — nền tảng của beta và CAPM."
   },
   {
    "q": "Two assets have correlation +1. The portfolio risk-return combinations form:",
    "opts": [
     "A curve bulging left",
     "A straight line between the two assets",
     "A single point"
    ],
    "ans": 1,
    "en": "With perfect correlation there is no diversification: σp is the weighted average — a straight line. Any ρ < 1 bends the curve left.",
    "vi": "Tương quan hoàn hảo thì không có đa dạng hóa: σp là bình quân gia quyền — đường thẳng. Bất kỳ ρ < 1 nào cũng bẻ cong đường sang trái."
   },
   {
    "q": "Investor X (A = 2) and investor Y (A = 6) both use the same CAL. Compared with Y, X holds:",
    "opts": [
     "A different tangency portfolio",
     "More of the SAME tangency portfolio, less risk-free",
     "Only risk-free assets"
    ],
    "ans": 1,
    "en": "Two-fund separation: everyone holds the same risky portfolio; risk aversion only sets the mix along the CAL.",
    "vi": "Tách hai quỹ: ai cũng nắm cùng danh mục rủi ro; mức ghét rủi ro chỉ định tỷ lệ pha dọc CAL."
   }
  ],
  [
   {
    "q": "The security market line (SML) differs from the capital market line (CML) in that the SML:",
    "opts": [
     "Uses total risk (σ) and applies only to efficient portfolios",
     "Uses beta and applies to all assets and portfolios, efficient or not",
     "Applies only to the market portfolio"
    ],
    "ans": 1,
    "en": "CML: expected return vs total risk, efficient portfolios only. SML: expected return vs beta, prices every asset — mispriced assets plot off the SML.",
    "vi": "CML dùng tổng rủi ro (σ) và chỉ áp dụng cho danh mục hiệu quả; SML dùng beta và áp dụng cho mọi tài sản — tài sản định giá sai nằm lệch khỏi SML."
   },
   {
    "q": "A stock’s expected return plots above the security market line. The stock is most likely:",
    "opts": [
     "Overvalued",
     "Undervalued",
     "Correctly priced with higher beta"
    ],
    "ans": 1,
    "en": "Above the SML means the expected return exceeds the CAPM-required return for its beta — positive alpha, undervalued.",
    "vi": "Nằm trên SML nghĩa là lợi nhuận kỳ vọng vượt mức CAPM đòi hỏi theo beta — alpha dương, đang bị định giá thấp."
   },
   {
    "q": "σ_stock = 30%, σ_market = 15%, correlation with market = 0.5. Beta is:",
    "opts": [
     "2.0",
     "1.0",
     "0.5"
    ],
    "ans": 1,
    "en": "β = ρ × σs/σm = 0.5 × 30/15 = 1.0.",
    "vi": "β = ρ × σs/σm = 0,5 × 30/15 = 1,0."
   },
   {
    "q": "A fairly priced single stock (on the SML) plots relative to the CML:",
    "opts": [
     "On the CML",
     "Below the CML",
     "Above the CML"
    ],
    "ans": 1,
    "en": "It carries diversifiable risk, so its total-risk position is inefficient (below the CML) even while beta-pricing is fair (on the SML).",
    "vi": "Nó mang rủi ro đa dạng hóa được nên vị trí theo tổng rủi ro là kém hiệu quả (dưới CML) dù định giá theo beta vẫn công bằng (trên SML)."
   }
  ],
  [
   {
    "q": "When a client’s ability to take risk is high but willingness is low, the adviser should generally:",
    "opts": [
     "Use the higher of the two",
     "Base the portfolio on the lower (more conservative) of the two and educate the client",
     "Ignore willingness"
    ],
    "ans": 1,
    "en": "The more constraining factor governs; resolving the mismatch through education is appropriate, but overriding stated willingness is not.",
    "vi": "Yếu tố hạn chế hơn quyết định mức rủi ro của IPS; nên tư vấn/giáo dục để thu hẹp khoảng cách, nhưng không được tự ý vượt qua mức sẵn lòng chịu rủi ro của khách."
   },
   {
    "q": "Empirically, the majority of a diversified portfolio’s return variability over time is explained by its:",
    "opts": [
     "Security selection",
     "Strategic asset allocation",
     "Market timing"
    ],
    "ans": 1,
    "en": "Asset-allocation policy dominates return variability — the reason the SAA is the central decision of the planning step.",
    "vi": "Chính sách phân bổ tài sản chi phối độ biến thiên lợi nhuận — lý do SAA là quyết định trung tâm của bước lập kế hoạch."
   },
   {
    "q": "A client has high ability but low willingness to take risk. The IPS should:",
    "opts": [
     "Use the higher ability level",
     "Use the lower willingness level and document the discussion",
     "Average the two"
    ],
    "ans": 1,
    "en": "The binding constraint is the lower input; education may raise willingness later, but today's IPS respects it.",
    "vi": "Ràng buộc trói là đầu vào thấp hơn; giáo dục có thể nâng mức sẵn lòng sau này, nhưng IPS hôm nay tôn trọng nó."
   },
   {
    "q": "Which decision explains MOST of a typical portfolio's return variability?",
    "opts": [
     "Security selection",
     "Strategic asset allocation",
     "Market timing"
    ],
    "ans": 1,
    "en": "SAA — the split across asset classes — dominates; selection and timing are second-order for most portfolios.",
    "vi": "SAA — cách chia giữa các lớp tài sản — chi phối; chọn chứng khoán và timing là bậc hai với đa số danh mục."
   }
  ],
  [
   {
    "q": "An investor refuses to sell a losing stock because \"it will come back,\" while quickly selling winners. This primarily reflects:",
    "opts": [
     "Loss aversion (an emotional bias)",
     "Availability (a cognitive error)",
     "Framing (a cognitive error)"
    ],
    "ans": 0,
    "en": "The disposition effect — clinging to losers, harvesting winners — flows from loss aversion, an emotional bias advisers adapt to rather than educate away.",
    "vi": "Hiệu ứng disposition — ôm mã lỗ, chốt mã lãi — bắt nguồn từ loss aversion, thiên lệch cảm xúc mà nhà tư vấn phải thích nghi thay vì \"dạy\" cho hết."
   },
   {
    "q": "An analyst values a stock by adjusting only slightly from its 52-week high, despite sharply deteriorating fundamentals. This is best described as:",
    "opts": [
     "Endowment bias",
     "Anchoring — a cognitive processing error",
     "Regret aversion"
    ],
    "ans": 1,
    "en": "Sticking to an initial reference number and under-adjusting is anchoring; being cognitive, it is correctable with process and fresh-look analysis.",
    "vi": "Bám vào con số tham chiếu ban đầu và điều chỉnh quá ít là anchoring; vì thuộc nhóm nhận thức, có thể sửa bằng quy trình và phân tích \"nhìn lại từ đầu\"."
   },
   {
    "q": "Selling winners quickly while riding losers is the disposition effect, driven mainly by:",
    "opts": [
     "Availability bias",
     "Loss aversion",
     "Framing"
    ],
    "ans": 1,
    "en": "Realizing a loss 'makes it real' — loss-averse investors defer that pain and bank small gains instead.",
    "vi": "Hiện thực hóa khoản lỗ 'làm nó thành thật' — nhà đầu tư ghét lỗ trì hoãn nỗi đau đó và chốt lãi nhỏ thay thế."
   },
   {
    "q": "Cognitive errors differ from emotional biases in that cognitive errors:",
    "opts": [
     "Cannot be corrected",
     "Are best reduced through information, education and process",
     "Should always be accommodated in the portfolio"
    ],
    "ans": 1,
    "en": "Faulty reasoning responds to better process (base rates, checklists); emotions usually must be accommodated instead.",
    "vi": "Suy luận sai đáp ứng với quy trình tốt hơn (base rate, checklist); cảm xúc thường phải được chiều theo có kiểm soát."
   }
  ],
  [
   {
    "q": "A portfolio’s one-week VaR at 5% is $2 million. The correct interpretation is:",
    "opts": [
     "The maximum possible weekly loss is $2 million",
     "A loss of at least $2 million is expected in 5% of weeks",
     "Weekly losses will never exceed $2 million with 95% certainty of gains"
    ],
    "ans": 1,
    "en": "VaR is a minimum loss at a given probability — it says nothing about how bad the tail beyond $2m can get.",
    "vi": "VaR là mức lỗ tối thiểu ở một xác suất cho trước — nó không nói gì về phần đuôi tệ hơn 2 triệu."
   },
   {
    "q": "Hedging a commodity input cost with futures contracts is best classified as risk:",
    "opts": [
     "Transfer",
     "Shifting",
     "Avoidance"
    ],
    "ans": 1,
    "en": "Derivatives shift/reshape the risk distribution; insurance transfers discrete insurable risks to an insurer.",
    "vi": "Phái sinh dịch chuyển/tái định hình phân phối rủi ro; còn bảo hiểm là chuyển giao rủi ro rời rạc cho công ty bảo hiểm."
   },
   {
    "q": "A 5% one-week VaR of $10m means:",
    "opts": [
     "The maximum possible weekly loss is $10m",
     "There is a 5% chance of losing AT LEAST $10m in a week",
     "Average weekly loss is $10m"
    ],
    "ans": 1,
    "en": "VaR is a threshold with a tail probability — it is silent about how much worse the tail can get.",
    "vi": "VaR là ngưỡng kèm xác suất đuôi — nó im lặng về việc cái đuôi có thể tệ hơn bao nhiêu."
   },
   {
    "q": "A rare but catastrophic risk (e.g., factory fire) is best handled by:",
    "opts": [
     "Self-insurance",
     "Risk transfer through insurance",
     "Avoiding manufacturing entirely"
    ],
    "ans": 1,
    "en": "Low-frequency/high-severity exposures are the textbook insurance case; self-insuring them threatens solvency.",
    "vi": "Phơi nhiễm tần suất thấp/mức độ nặng là ca giáo khoa của bảo hiểm; tự bảo hiểm đe dọa khả năng thanh toán."
   }
  ]
 ],
 "sets": [
  [
   {
    "q": "Risk-free rate 2%, beta 0.8, market risk premium 6%. The CAPM expected return is:",
    "opts": [
     "6.8%",
     "8.0%",
     "4.8%"
    ],
    "ans": 0,
    "en": "E(R) = 2% + 0.8 × 6% = 6.8%.",
    "vi": "E(R) = 2% + 0,8 × 6% = 6,8%."
   },
   {
    "q": "A portfolio returned 10% with standard deviation 16%; the risk-free rate is 2%. The Sharpe ratio is:",
    "opts": [
     "0.63",
     "0.50",
     "0.80"
    ],
    "ans": 1,
    "en": "Sharpe = (10 − 2)/16 = 0.50 units of excess return per unit of total risk.",
    "vi": "Sharpe = (10 − 2)/16 = 0,50 — lợi nhuận vượt trội trên mỗi đơn vị tổng rủi ro."
   },
   {
    "q": "Every portfolio on the capital market line is a combination of:",
    "opts": [
     "Any two risky assets",
     "The risk-free asset and the market (tangency) portfolio",
     "Bonds only"
    ],
    "ans": 1,
    "en": "Two-fund separation: optimal portfolios mix the risk-free asset with the tangency (market) portfolio; position on the CML reflects risk preference.",
    "vi": "Định lý tách hai quỹ: mọi danh mục tối ưu là kết hợp giữa tài sản phi rủi ro và danh mục thị trường; vị trí trên CML phản ánh khẩu vị rủi ro."
   },
   {
    "q": "A portfolio holds 60% in a stock with beta 1.5 and 40% in a stock with beta 0.5. Portfolio beta is:",
    "opts": [
     "1.0",
     "1.1",
     "1.3"
    ],
    "ans": 1,
    "en": "βp = 0.6 × 1.5 + 0.4 × 0.5 = 0.9 + 0.2 = 1.1 — beta aggregates linearly by weights.",
    "vi": "Beta danh mục = 0,6 × 1,5 + 0,4 × 0,5 = 1,1 — beta cộng tuyến tính theo tỷ trọng."
   },
   {
    "q": "A stock’s forecast return plots below the SML. The stock is best described as:",
    "opts": [
     "Undervalued — buy",
     "Overvalued — its expected return is insufficient for its beta",
     "Fairly valued"
    ],
    "ans": 1,
    "en": "Below the SML means expected return &lt; CAPM-required return for that beta → price too high today → overvalued.",
    "vi": "Nằm dưới SML nghĩa là lợi nhuận kỳ vọng thấp hơn mức CAPM yêu cầu với beta đó → giá hiện tại quá cao → định giá đắt."
   },
   {
    "q": "Which factors primarily determine a client’s ABILITY (not willingness) to take risk?",
    "opts": [
     "Personality and past experiences",
     "Time horizon, wealth relative to needs, liquidity requirements, and income stability",
     "Media sentiment"
    ],
    "ans": 1,
    "en": "Ability is objective: long horizons, large asset bases relative to spending, low liquidity needs and stable income raise it. Willingness is psychological.",
    "vi": "Khả năng chịu rủi ro mang tính khách quan: kỳ hạn dài, tài sản lớn so với nhu cầu, ít nhu cầu thanh khoản, thu nhập ổn định. Mức sẵn lòng thuộc về tâm lý."
   },
   {
    "q": "The risk-free rate is 3%, the expected market return 8%, and a stock’s beta 1.2. Its CAPM-required return is:",
    "opts": [
     "9.0%",
     "9.6%",
     "6.0%"
    ],
    "ans": 0,
    "en": "E(R) = 3% + 1.2 × (8% − 3%) = 9.0%.",
    "vi": "E(R) = 3% + 1,2 × (8% − 3%) = 9,0%."
   },
   {
    "q": "A portfolio holds 60% in a fund with beta 1.5 and 40% in a fund with beta 0.5. The portfolio beta is:",
    "opts": [
     "1.0",
     "1.1",
     "1.3"
    ],
    "ans": 1,
    "en": "Portfolio beta is the weighted average: 0.6×1.5 + 0.4×0.5 = 1.1.",
    "vi": "Beta danh mục là bình quân gia quyền: 0,6×1,5 + 0,4×0,5 = 1,1."
   }
  ],
  [
   {
    "q": "A diversified portfolio returned 12% with beta 1.25; the risk-free rate is 2%. Its Treynor ratio is:",
    "opts": [
     "8.0",
     "10.0",
     "12.5"
    ],
    "ans": 0,
    "en": "Treynor = (12 − 2)/1.25 = 8.0 — excess return per unit of systematic risk; appropriate when comparing well-diversified portfolios.",
    "vi": "Treynor = (12 − 2)/1,25 = 8,0 — lợi nhuận vượt trội trên mỗi đơn vị rủi ro hệ thống; phù hợp khi so sánh các danh mục đã đa dạng hóa tốt."
   },
   {
    "q": "M-squared (M²) expresses risk-adjusted performance as:",
    "opts": [
     "A unitless ratio",
     "A percentage return directly comparable to the market’s return at the same total risk",
     "A beta"
    ],
    "ans": 1,
    "en": "M² levers or de-levers the portfolio to market volatility and states the result in %, making rankings identical to Sharpe but easier to interpret.",
    "vi": "M² điều chỉnh danh mục về cùng độ biến động với thị trường rồi biểu diễn bằng %, dễ diễn giải hơn Sharpe nhưng xếp hạng giống hệt."
   },
   {
    "q": "A portfolio lying below the efficient frontier is:",
    "opts": [
     "Unattainable",
     "Inefficient — another portfolio offers more return for the same risk",
     "Optimal for conservative investors"
    ],
    "ans": 1,
    "en": "Points below the frontier are dominated; points above are unattainable. Rational investors choose only frontier portfolios.",
    "vi": "Danh mục dưới đường biên hiệu quả bị “thống trị” — luôn có danh mục khác cùng rủi ro nhưng lợi nhuận cao hơn; điểm phía trên đường biên thì không thể đạt được."
   },
   {
    "q": "Two assets have a correlation of exactly +1.0. Portfolio standard deviation equals:",
    "opts": [
     "Zero",
     "The weighted average of the two standard deviations — no diversification benefit",
     "Less than either asset’s standard deviation"
    ],
    "ans": 1,
    "en": "Perfect positive correlation removes all diversification benefit: risk is simply the weighted average.",
    "vi": "Tương quan +1 tuyệt đối xóa mọi lợi ích đa dạng hóa: rủi ro danh mục đúng bằng bình quân gia quyền độ lệch chuẩn hai tài sản."
   },
   {
    "q": "An investor feels the pain of losses about twice as strongly as the pleasure of equal gains, leading her to hold losing stocks too long. This bias is:",
    "opts": [
     "Overconfidence",
     "Loss aversion",
     "Herding"
    ],
    "ans": 1,
    "en": "Loss aversion (prospect theory): losses loom larger than gains, producing the disposition effect — selling winners too early and riding losers too long.",
    "vi": "Ám ảnh thua lỗ (loss aversion): nỗi đau khi lỗ lớn hơn niềm vui khi lãi tương đương → hiệu ứng disposition: bán non cổ phiếu lãi, ôm quá lâu cổ phiếu lỗ."
   },
   {
    "q": "Strategic asset allocation differs from tactical asset allocation in that strategic allocation:",
    "opts": [
     "Chases short-term market views",
     "Sets long-term target weights consistent with the IPS, while tactical makes temporary deviations to exploit short-term opportunities",
     "Changes daily"
    ],
    "ans": 1,
    "en": "SAA is the long-run policy mix from the IPS; TAA is deliberate, temporary deviation from it based on shorter-term market expectations.",
    "vi": "SAA là cơ cấu mục tiêu dài hạn theo IPS; TAA là việc lệch tạm thời, có chủ đích khỏi cơ cấu đó để khai thác cơ hội ngắn hạn."
   },
   {
    "q": "An investor holds inherited shares she admits she would never buy today at current prices, yet refuses to sell them. This most likely reflects:",
    "opts": [
     "Endowment bias",
     "Confirmation bias",
     "Illusion of control"
    ],
    "ans": 0,
    "en": "Valuing an asset more merely because it is owned (and inherited) is the endowment effect — an emotional bias, often paired with status quo inertia.",
    "vi": "Định giá tài sản cao hơn chỉ vì đang sở hữu (và được thừa kế) là endowment effect — thiên lệch cảm xúc, thường đi kèm sức ì status quo."
   },
   {
    "q": "A firm buys insurance against warehouse fire but uses forward contracts to manage currency exposure. The two methods are, respectively:",
    "opts": [
     "Risk transfer and risk shifting",
     "Risk avoidance and risk acceptance",
     "Both risk transfer"
    ],
    "ans": 0,
    "en": "Insurance transfers a discrete insurable risk; derivatives shift the shape of a financial-price risk distribution.",
    "vi": "Bảo hiểm chuyển giao rủi ro rời rạc bảo hiểm được; phái sinh dịch chuyển hình dạng phân phối rủi ro giá tài chính."
   }
  ],
  {
   "name": "Set D — Mixed exam-style review",
   "qs": [
    {
     "q": "A defined-benefit pension's risk tolerance is MOST directly raised by:",
     "opts": [
      "An aging retiree base",
      "A strong surplus of assets over liabilities",
      "High near-term benefit payments"
     ],
     "ans": 1,
     "en": "A funding surplus cushions shortfalls, expanding the ability to bear risk; aging members and payouts cut it.",
     "vi": "Thặng dư tài trợ đệm cho thiếu hụt, mở rộng khả năng chịu rủi ro; thành viên già đi và dòng chi trả cắt giảm nó."
    },
    {
     "q": "E(RA) = 6%, E(RB) = 12%, wB = 50%, σA = 8%, σB = 16%, ρ = 0. Portfolio σ is closest to:",
     "opts": [
      "12.0%",
      "8.9%",
      "6.3%"
     ],
     "ans": 1,
     "en": "σ² = 0.25(64) + 0.25(256) = 80 → σ = 8.94%. Zero correlation still diversifies powerfully.",
     "vi": "σ² = 0,25(64) + 0,25(256) = 80 → σ = 8,94%. Tương quan bằng 0 vẫn đa dạng hóa mạnh."
    },
    {
     "q": "Along the efficient frontier, moving right (more risk) makes the extra return per unit of risk:",
     "opts": [
      "Increase",
      "Diminish — the frontier flattens",
      "Stay constant"
     ],
     "ans": 1,
     "en": "The frontier is concave: each additional unit of σ buys less incremental expected return.",
     "vi": "Đường biên lõm: mỗi đơn vị σ thêm mua được ít lợi suất kỳ vọng tăng thêm hơn."
    },
    {
     "q": "Rf = 2%, E(Rm) = 9%. A stock with β = 0.8 is forecast to return 7%. It is:",
     "opts": [
      "Overvalued — sell",
      "Fairly valued",
      "Undervalued — buy"
     ],
     "ans": 0,
     "en": "Required = 2 + 0.8(7) = 7.6% > 7% forecast → plots below the SML → overvalued.",
     "vi": "Yêu cầu = 2 + 0,8(7) = 7,6% > dự báo 7% → nằm dưới SML → định giá cao."
    },
    {
     "q": "Fund P: return 10%, β = 0.9. Fund Q: return 12%, β = 1.5. Rf = 2%. By Treynor, the better fund is:",
     "opts": [
      "Q — higher return",
      "P — 8.89 vs 6.67",
      "They tie"
     ],
     "ans": 1,
     "en": "Treynor P = 8/0.9 = 8.89; Q = 10/1.5 = 6.67. Per unit of systematic risk, P wins despite the lower raw return.",
     "vi": "Treynor P = 8/0,9 = 8,89; Q = 10/1,5 = 6,67. Trên mỗi đơn vị rủi ro hệ thống, P thắng dù lợi suất thô thấp hơn."
    },
    {
     "q": "A portfolio's Sharpe ratio ranks it 1st but its Treynor ratio ranks it 5th among peers. The likeliest explanation is a mistake in this reasoning — which ordering is actually diagnostic?",
     "opts": [
      "High Sharpe + low Treynor is impossible",
      "Low Sharpe rank + high Treynor rank signals undiversified risk; here the reverse pattern suggests LOW beta with high total-risk efficiency",
      "The two always agree"
     ],
     "ans": 1,
     "en": "Sharpe uses total risk, Treynor systematic risk; divergent rankings reveal how much diversifiable risk the fund carries.",
     "vi": "Sharpe dùng tổng rủi ro, Treynor dùng rủi ro hệ thống; xếp hạng vênh nhau tiết lộ quỹ mang bao nhiêu rủi ro đa dạng hóa được."
    },
    {
     "q": "Which item belongs in the IPS itself?",
     "opts": [
      "This quarter's tactical overweight in energy",
      "The client's benchmark and rebalancing policy",
      "Yesterday's trade tickets"
     ],
     "ans": 1,
     "en": "The IPS is the durable governing document: objectives, constraints, benchmark, review and rebalancing policy — not tactical calls.",
     "vi": "IPS là văn kiện điều chỉnh bền vững: mục tiêu, ràng buộc, benchmark, chính sách rà soát và tái cân bằng — không phải các cú đánh chiến thuật."
    },
    {
     "q": "A 70/30 policy with ±5% corridors sees equities drift to 73%. The required action is:",
     "opts": [
      "Rebalance immediately",
      "No action — 73% is inside the 65–75 corridor",
      "Widen the corridor"
     ],
     "ans": 1,
     "en": "Corridors trigger only outside the band; 73% sits within 65–75, so discipline says wait.",
     "vi": "Hành lang chỉ kích hoạt khi ra ngoài dải; 73% nằm trong 65–75, kỷ luật bảo chờ."
    },
    {
     "q": "An investor checks his portfolio daily and trades on every vivid news story. The biases at work are:",
     "opts": [
      "Conservatism and framing",
      "Availability and overconfidence",
      "Endowment and self-control"
     ],
     "ans": 1,
     "en": "Vivid, recent stories dominate (availability); the belief that frequent action adds value reflects overconfidence/illusion of control.",
     "vi": "Tin tức sống động gần đây thống trị (availability); niềm tin rằng hành động liên tục tạo giá trị phản ánh overconfidence/ảo tưởng kiểm soát."
    },
    {
     "q": "Keeping an inherited concentrated stock position one would never buy today reflects:",
     "opts": [
      "Anchoring and mental accounting",
      "Endowment and status quo bias",
      "Hindsight bias"
     ],
     "ans": 1,
     "en": "Ownership itself inflates perceived value (endowment) and inertia preserves the default (status quo) — emotional biases to be accommodated with staged plans.",
     "vi": "Bản thân việc sở hữu thổi phồng giá trị cảm nhận (endowment) và quán tính giữ nguyên mặc định (status quo) — thiên lệch cảm xúc cần chiều theo bằng kế hoạch chia giai đoạn."
    },
    {
     "q": "During a crisis, a fund's market losses trigger margin calls that force asset sales at bad prices. This illustrates:",
     "opts": [
      "Model risk",
      "The interaction of market and liquidity risk",
      "Pure operational risk"
     ],
     "ans": 1,
     "en": "Risks compound: market moves create liquidity demands, forcing sales that deepen market losses — combined risk exceeds separate measures.",
     "vi": "Rủi ro cộng hưởng: biến động thị trường tạo nhu cầu thanh khoản, ép bán làm lỗ thị trường sâu thêm — rủi ro gộp vượt các thước đo riêng lẻ."
    },
    {
     "q": "A firm bears a risk ONLY when it is paid to do so and the size fits its predefined limits. This describes:",
     "opts": [
      "Risk avoidance",
      "Risk budgeting within governance-set tolerance",
      "Risk transfer"
     ],
     "ans": 1,
     "en": "Modern risk management allocates a risk budget to compensated exposures inside board-approved tolerance — not minimization.",
     "vi": "Quản trị rủi ro hiện đại phân bổ ngân sách rủi ro cho các phơi nhiễm được trả công trong tolerance do HĐQT duyệt — không phải tối thiểu hóa."
    }
   ]
  }
 ]
};
