/* =====================================================================
   Topic 06 — Equity Investments
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
 "id": "equity",
 "num": "06",
 "name": "Equity Investments",
 "vi": "Đầu tư cổ phiếu",
 "w": [
  11,
  14
 ],
 "blurb": "Market organization, indices, market efficiency, industry & company analysis, and equity valuation: DDM, FCFE, and price multiples.",
 "intro": {
  "en": "Equity Investments spans eight learning modules: market organization, indexes, and efficiency; equity securities; company analysis past and present; industry and competitive analysis; forecasting; and valuation tools. Alongside FSA it carries the heaviest exam weight. Every module below pairs theory with diagrams and fully worked numbers — margin calls, index construction, voting arithmetic, two-stage DDM, justified multiples, enterprise value — then drill the Quick checks and Practice Sets B–D.",
  "vi": "Equity Investments gồm tám learning modules: tổ chức thị trường, chỉ số và hiệu quả thị trường; chứng khoán vốn; phân tích công ty quá khứ và hiện tại; phân tích ngành và cạnh tranh; dự phóng; và công cụ định giá. Cùng với FSA, đây là topic trọng số nặng nhất. Mỗi module bên dưới kết hợp lý thuyết với sơ đồ và con số giải trọn — margin call, dựng chỉ số, toán bầu cử, DDM hai giai đoạn, justified multiples, enterprise value — sau đó luyện Quick checks và Practice Sets B–D."
 },
 "modules": [
  {
   "title": "Market Organization and Structure",
   "sections": [
    {
     "h": "The financial system: assets, intermediaries & market types",
     "en": "<ul><li><strong>What markets are for:</strong> transferring resources across time (saving, borrowing), raising capital, exchanging risk (hedging), and <em>price discovery</em> — a well-functioning system delivers all four at low transaction cost, with prices that reflect information (informational efficiency).</li><li><strong>Asset classes traded:</strong> securities (equities, fixed income, pooled vehicles), currencies, contracts (forwards, futures, options, swaps), commodities, and real assets. Markets are <em>primary</em> (issuers sell new securities — IPOs, seasoned offerings, private placements) or <em>secondary</em> (investors trade among themselves — where liquidity and price discovery live).</li><li><strong>Intermediaries:</strong> <em>brokers</em> act as agents matching buyers and sellers for a commission; <em>dealers</em> trade from their own inventory, providing immediacy and earning the bid–ask spread; exchanges and alternative trading systems organize trading; <em>clearinghouses</em> guarantee performance (novation, margins) and slash counterparty risk; depositories hold securities; securitizers and banks transform assets.</li><li><strong>Trading structures:</strong> <em>order-driven</em> markets match public orders by precedence rules (price, then time); <em>quote-driven</em> (dealer) markets trade against dealer quotes — dominant for bonds and FX; <em>brokered</em> markets suit unique, illiquid assets (blocks, real estate). Call markets batch orders at set times; continuous markets trade all session.</li><li><strong>Regulation exists to</strong> control fraud and agency problems, promote fairness and disclosure, and set minimum standards of competence — failures of trust shrink markets for everyone.</li></ul>",
     "vi": "<ul><li><strong>Thị trường để làm gì:</strong> dịch chuyển nguồn lực theo thời gian (tiết kiệm, vay), huy động vốn, trao đổi rủi ro (phòng hộ), và <em>khám phá giá</em> — hệ thống vận hành tốt cung cấp cả bốn với chi phí giao dịch thấp, giá phản ánh thông tin (hiệu quả thông tin).</li><li><strong>Các lớp tài sản:</strong> chứng khoán (cổ phiếu, trái phiếu, quỹ), tiền tệ, hợp đồng (forward, futures, options, swaps), hàng hóa, tài sản thực. Thị trường <em>sơ cấp</em> (tổ chức phát hành bán chứng khoán mới — IPO, phát hành bổ sung, riêng lẻ) và <em>thứ cấp</em> (nhà đầu tư giao dịch với nhau — nơi thanh khoản và khám phá giá diễn ra).</li><li><strong>Trung gian:</strong> <em>broker</em> làm đại lý khớp người mua–bán lấy hoa hồng; <em>dealer</em> giao dịch bằng hàng tồn của chính mình, cung cấp tính tức thời và ăn chênh lệch mua–bán; sở giao dịch và hệ thống giao dịch thay thế tổ chức thị trường; <em>trung tâm thanh toán bù trừ</em> bảo đảm thực hiện (novation, ký quỹ), cắt giảm rủi ro đối tác; lưu ký giữ chứng khoán; tổ chức chứng khoán hóa và ngân hàng chuyển hóa tài sản.</li><li><strong>Cấu trúc giao dịch:</strong> thị trường <em>khớp lệnh</em> ghép các lệnh công khai theo quy tắc ưu tiên (giá, rồi thời gian); thị trường <em>báo giá</em> (dealer) giao dịch với giá chào của dealer — chủ đạo ở trái phiếu và FX; thị trường <em>môi giới</em> hợp với tài sản đặc thù, kém thanh khoản (lô lớn, bất động sản). Call market gom lệnh khớp theo phiên; continuous market giao dịch suốt phiên.</li><li><strong>Quy định tồn tại để</strong> kiểm soát gian lận và vấn đề đại diện, thúc đẩy công bằng và công bố thông tin, đặt chuẩn năng lực tối thiểu — mất niềm tin làm thị trường co lại với tất cả mọi người.</li></ul>"
    },
    {
     "h": "Positions, margin, and orders",
     "en": "<ul><li><strong>Long</strong> profits when price rises; <strong>short</strong> sells borrowed shares hoping to repurchase cheaper — risk is theoretically unlimited.</li><li><strong>Margin buying:</strong> leverage ratio = 1/margin requirement (50% initial margin → 2× leverage; returns and losses are doubled before costs). A <strong>margin call</strong> occurs when equity falls below the maintenance margin: trigger price P = P<sub>0</sub> × (1 − initial margin)/(1 − maintenance margin).</li><li><strong>Orders:</strong> market orders demand immediacy (execution certainty, price uncertainty); limit orders control price but may never fill; stop orders become market orders once a trigger trades — stop-loss orders reinforce momentum.</li><li>Market structures: quote-driven (dealers), order-driven (auction/matching), brokered. Call vs continuous markets.</li></ul>",
     "vi": "<ul><li><strong>Long</strong> lãi khi giá tăng; <strong>short</strong> bán chứng khoán đi vay, kỳ vọng mua lại rẻ hơn — rủi ro về lý thuyết là vô hạn.</li><li><strong>Mua ký quỹ:</strong> hệ số đòn bẩy = 1/tỷ lệ ký quỹ (ký quỹ ban đầu 50% → đòn bẩy 2×; lãi và lỗ đều nhân đôi trước chi phí). <strong>Margin call</strong> khi vốn chủ giảm dưới ký quỹ duy trì: giá kích hoạt P = P<sub>0</sub> × (1 − ký quỹ ban đầu)/(1 − ký quỹ duy trì).</li><li><strong>Lệnh:</strong> lệnh thị trường ưu tiên tốc độ (chắc chắn khớp, không chắc giá); lệnh giới hạn kiểm soát giá nhưng có thể không khớp; lệnh dừng trở thành lệnh thị trường khi chạm giá kích hoạt — stop-loss khuếch đại đà giá.</li><li>Cấu trúc thị trường: dựa trên báo giá (dealer), dựa trên lệnh (đấu giá/khớp lệnh), qua môi giới. Thị trường phiên (call) vs liên tục.</li></ul>"
    },
    {
     "h": "Margin math end-to-end + the order-type playbook",
     "en": "<p><strong>The classic margin problem, fully worked.</strong> Buy 1,000 shares at $40 with 50% initial margin and 25% maintenance margin. You put up $20,000; the broker lends $20,000 (the loan per share, $20, never changes).</p>\n<svg viewBox=\"0 0 720 300\" style=\"width:100%;height:auto;display:block;margin:14px 0;background:#fff;border:1px solid #E5E9F2;border-radius:12px\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Margin position price levels\">\n<text x=\"360\" y=\"26\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" fill=\"#1B2438\">A leveraged long: the price levels that matter</text>\n<line x1=\"70\" y1=\"150\" x2=\"680\" y2=\"150\" stroke=\"#5B6577\" stroke-width=\"2\"/>\n<text x=\"676\" y=\"132\" text-anchor=\"end\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11\" fill=\"#5B6577\">Price →</text>\n<line x1=\"510\" y1=\"135\" x2=\"510\" y2=\"165\" stroke=\"#5457E0\" stroke-width=\"2.5\"/>\n<text x=\"510\" y=\"122\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#5457E0\">Buy @ $40</text>\n<text x=\"510\" y=\"188\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#5B6577\">50% initial margin:</text>\n<text x=\"510\" y=\"203\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#5B6577\">$20 equity + $20 loan / share</text>\n<line x1=\"250\" y1=\"135\" x2=\"250\" y2=\"165\" stroke=\"#DC4848\" stroke-width=\"2.5\"/>\n<text x=\"250\" y=\"122\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#DC4848\">Margin call @ $26.67</text>\n<text x=\"250\" y=\"188\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#5B6577\">P = 40 × (1 − 0.50)/(1 − 0.25)</text>\n<text x=\"250\" y=\"203\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#5B6577\">equity/value falls to 25% here</text>\n<path d=\"M 250 150 L 510 150\" stroke=\"#F3E3C4\" stroke-width=\"6\"/>\n<text x=\"380\" y=\"141\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10\" fill=\"#B45309\">safe zone (equity ≥ 25%)</text>\n<path d=\"M 90 150 L 250 150\" stroke=\"#FDECEC\" stroke-width=\"6\"/>\n<text x=\"163\" y=\"141\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10\" fill=\"#DC4848\">deposit more or be sold out</text>\n<text x=\"360\" y=\"248\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" fill=\"#8B5CF6\" font-weight=\"600\">Loan per share stays $20 no matter what the price does — only YOUR equity absorbs the moves.</text>\n<text x=\"360\" y=\"270\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11\" fill=\"#5B6577\">That is the whole leverage effect: gains and losses land on a smaller equity base.</text>\n</svg>\n<p><strong>Margin call price:</strong> P = P₀ × (1 − initial margin)/(1 − maintenance margin) = 40 × 0.50/0.75 = <strong>$26.67</strong>. Check it: at $26.67 the position is worth $26,667; equity = 26,667 − 20,000 = $6,667 = exactly 25% of value. Below that, you deposit more or the broker liquidates.</p>\n<p><strong>Leveraged return worked.</strong> Suppose the price rises to $46 in one year; call interest on the loan 6% and ignore commissions. Equity at year-end = 46,000 − 20,000 − 0.06 × 20,000 = $24,800. Return on <em>your</em> equity = 24,800/20,000 − 1 = <strong>+24%</strong> versus +15% unlevered. If instead the price fell to $34 (−15%): equity = 34,000 − 21,200 = $12,800 → <strong>−36%</strong>. Leverage multiplies both directions and the interest cost drags returns asymmetrically. Initial leverage ratio = 1/margin = 2.0×; the return multiplier is roughly the leverage ratio before interest.</p>\n<table style=\"width:100%;border-collapse:collapse;font-size:13.5px;margin:10px 0\"><tr style=\"background:#EEF0FE\"><th style=\"padding:7px;border:1px solid #D6DAFB;text-align:left\">Order</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Instruction</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Guarantee</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Risk</th></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Market</td><td style=\"padding:7px;border:1px solid #E5E9F2\">execute now at best available</td><td style=\"padding:7px;border:1px solid #E5E9F2\">execution</td><td style=\"padding:7px;border:1px solid #E5E9F2\">price uncertainty (slippage in thin markets)</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Limit buy @ 38</td><td style=\"padding:7px;border:1px solid #E5E9F2\">buy only at ≤ 38</td><td style=\"padding:7px;border:1px solid #E5E9F2\">price</td><td style=\"padding:7px;border:1px solid #E5E9F2\">may never execute</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Stop-loss sell @ 35</td><td style=\"padding:7px;border:1px solid #E5E9F2\">becomes a market sell once price hits 35</td><td style=\"padding:7px;border:1px solid #E5E9F2\">neither</td><td style=\"padding:7px;border:1px solid #E5E9F2\">executes into falling prices; gaps below 35</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Stop-buy @ 45</td><td style=\"padding:7px;border:1px solid #E5E9F2\">market buy once price hits 45</td><td style=\"padding:7px;border:1px solid #E5E9F2\">neither</td><td style=\"padding:7px;border:1px solid #E5E9F2\">used to cap short-sale losses or ride momentum</td></tr></table>\n<p><strong>Short selling mechanics:</strong> borrow shares, sell, later repurchase to return. The short is liable for dividends to the lender, must post margin, and faces theoretically unlimited losses — which is exactly why stop-buy orders exist. Validity instructions (day, GTC, fill-or-kill, hidden/iceberg) and clearing instructions round out the playbook.</p>",
     "vi": "<p><strong>Bài margin kinh điển, giải trọn.</strong> Mua 1.000 cổ phiếu giá $40 với initial margin 50% và maintenance margin 25%. Bạn bỏ $20.000; broker cho vay $20.000 (khoản vay mỗi cổ phiếu, $20, không bao giờ đổi).</p>\n<p><strong>Giá margin call:</strong> P = P₀ × (1 − initial)/(1 − maintenance) = 40 × 0,50/0,75 = <strong>$26,67</strong>. Kiểm tra: tại $26,67 vị thế đáng $26.667; vốn = 26.667 − 20.000 = $6.667 = đúng 25% giá trị. Dưới mức đó, nộp thêm tiền hoặc broker bán giải chấp.</p>\n<p><strong>Suất sinh lời có đòn bẩy.</strong> Giả sử giá lên $46 sau một năm; lãi vay 6%, bỏ qua hoa hồng. Vốn cuối năm = 46.000 − 20.000 − 0,06 × 20.000 = $24.800. Suất sinh lời trên <em>vốn của bạn</em> = 24.800/20.000 − 1 = <strong>+24%</strong> so với +15% không đòn bẩy. Nếu giá xuống $34 (−15%): vốn = 34.000 − 21.200 = $12.800 → <strong>−36%</strong>. Đòn bẩy nhân cả hai chiều và chi phí lãi kéo lệch bất đối xứng. Tỷ lệ đòn bẩy ban đầu = 1/margin = 2,0×; hệ số nhân suất sinh lời xấp xỉ tỷ lệ đòn bẩy trước lãi vay.</p>\n<p><strong>Sổ tay loại lệnh (bảng):</strong> lệnh thị trường — khớp ngay giá tốt nhất, bảo đảm khớp nhưng rủi ro giá (trượt giá ở thị trường mỏng); limit buy @ 38 — chỉ mua ≤ 38, bảo đảm giá nhưng có thể không bao giờ khớp; stop-loss sell @ 35 — thành lệnh bán thị trường khi giá chạm 35, không bảo đảm gì, khớp vào đà rơi và có thể gap dưới 35; stop-buy @ 45 — mua thị trường khi giá chạm 45, dùng chặn lỗ bán khống hoặc đu đà tăng.</p>\n<p><strong>Cơ chế bán khống:</strong> mượn cổ phiếu, bán, sau mua lại để hoàn trả. Người bán khống phải trả cổ tức cho người cho mượn, phải ký quỹ, và chịu lỗ về lý thuyết vô hạn — chính vì thế lệnh stop-buy tồn tại. Chỉ thị hiệu lực (day, GTC, fill-or-kill, lệnh ẩn/iceberg) và chỉ thị thanh toán bù trừ hoàn thiện sổ tay.</p>"
    }
   ],
   "formulas": [
    [
     "Margin call price",
     "P = P0 (1 − IM) / (1 − MM)",
     "IM initial, MM maintenance margin"
    ],
    [
     "Leveraged return",
     "Position return × leverage ratio − financing costs",
     "Leverage ratio = position value / equity"
    ],
    [
     "Short margin call price",
     "P = P0 × (1 + initial margin)/(1 + maintenance margin)",
     "Shorts get called by RISING prices — the mirror image of the long formula."
    ],
    [
     "Initial leverage ratio",
     "position value / equity = 1 / initial margin",
     "50% margin → 2× leverage; return multiplier before interest and fees."
    ]
   ]
  },
  {
   "title": "Security Market Indexes",
   "sections": [
    {
     "h": "Index weighting schemes",
     "en": "<table class=\"simple\"><tr><th>Weighting</th><th>Idea</th><th>Key property</th></tr><tr><td>Price-weighted</td><td>Sum of prices / divisor (e.g., Dow)</td><td>Biased toward high-priced stocks; splits change weights</td></tr><tr><td>Market-cap-weighted</td><td>Weight = float-adjusted market cap (e.g., S&amp;P 500)</td><td>Self-rebalancing; momentum tilt toward overvalued large caps</td></tr><tr><td>Equal-weighted</td><td>Same weight each stock</td><td>Small-cap tilt; requires frequent rebalancing</td></tr><tr><td>Fundamental-weighted</td><td>Weights by sales, earnings, book value…</td><td>Value tilt; contrarian rebalancing</td></tr></table>",
     "vi": "<p>Bốn cách tính chỉ số: <strong>theo giá</strong> (tổng giá / số chia, VD Dow — thiên vị cổ phiếu giá cao, chia tách làm đổi trọng số); <strong>theo vốn hóa</strong> (điều chỉnh free-float, VD S&amp;P 500 — tự cân bằng, nghiêng về cổ phiếu lớn có thể đang được định giá cao); <strong>tỷ trọng bằng nhau</strong> (nghiêng về vốn hóa nhỏ, phải tái cân bằng thường xuyên); <strong>theo yếu tố cơ bản</strong> (doanh thu, lợi nhuận, giá trị sổ sách — nghiêng về giá trị, tái cân bằng kiểu ngược dòng).</p>"
    },
    {
     "h": "Index uses, rebalancing & reconstitution",
     "en": "<ul><li><strong>What indexes are for:</strong> gauges of market sentiment, proxies for measuring/modeling returns (beta, benchmarks), measuring risk premiums, asset-allocation building blocks, and the basis of index funds and ETFs.</li><li><strong>Maintenance:</strong> <em>rebalancing</em> restores target <strong>weights</strong> on schedule (mostly relevant for equal-weighted indexes, which drift as prices move); <em>reconstitution</em> changes the <strong>membership list</strong> — adding and removing securities per the index rules. Both create predictable trading by index funds.</li><li><strong>Index families:</strong> broad equity (total market), multi-market (regional/global, sometimes GDP-weighted), sector, and <em>style</em> indexes (growth vs value, size); fixed-income indexes (huge universes, illiquid constituents, high turnover — harder to replicate); commodity indexes (futures-based, so returns differ from spot); real estate (appraisal vs REIT) and hedge fund indexes — the latter rely on voluntary reporting, so <strong>survivorship bias</strong> inflates them.</li></ul>",
     "vi": "<ul><li><strong>Chỉ số dùng để làm gì:</strong> thước đo tâm lý thị trường, đại diện để đo/mô hình hóa lợi suất (beta, benchmark), đo phần bù rủi ro, khối xây dựng phân bổ tài sản, và nền tảng cho quỹ chỉ số, ETF.</li><li><strong>Bảo trì chỉ số:</strong> <em>rebalancing</em> khôi phục <strong>tỷ trọng</strong> mục tiêu theo lịch (chủ yếu với chỉ số equal-weighted vì tỷ trọng trôi theo giá); <em>reconstitution</em> thay đổi <strong>danh sách thành viên</strong> — thêm/loại chứng khoán theo quy tắc chỉ số. Cả hai tạo giao dịch dự đoán được từ các quỹ chỉ số.</li><li><strong>Các họ chỉ số:</strong> cổ phiếu diện rộng (toàn thị trường), đa thị trường (khu vực/toàn cầu, đôi khi trọng số GDP), ngành, và chỉ số <em>phong cách</em> (growth vs value, quy mô); chỉ số trái phiếu (vũ trụ khổng lồ, thành phần kém thanh khoản, vòng quay cao — khó sao chép); chỉ số hàng hóa (dựa trên futures nên lợi suất khác giá spot); bất động sản (định giá thẩm định vs REIT) và chỉ số hedge fund — loại sau dựa trên báo cáo tự nguyện nên <strong>thiên lệch sống sót</strong> thổi phồng kết quả.</li></ul>"
    },
    {
     "h": "Build the same index three ways — and watch a split break one of them",
     "en": "<p><strong>Three stocks, day 0 → day 1:</strong> A: $80 → $88 (+10%), 100m shares. B: $40 → $42 (+5%), 600m shares. C: $10 → $9 (−10%), 800m shares.</p>\n<svg viewBox=\"0 0 720 330\" style=\"width:100%;height:auto;display:block;margin:14px 0;background:#fff;border:1px solid #E5E9F2;border-radius:12px\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Index weighting schemes compared\">\n<text x=\"360\" y=\"26\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" fill=\"#1B2438\">Same three stocks, three different indexes</text>\n<text x=\"360\" y=\"48\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11.5\" fill=\"#5B6577\">A: price $80, cap $8bn · B: price $40, cap $24bn · C: price $10, cap $8bn</text>\n<g>\n<text x=\"150\" y=\"76\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#5457E0\">Price-weighted</text>\n<rect x=\"90\" y=\"90\" width=\"120\" height=\"86\" rx=\"4\" fill=\"#5457E0\"/>\n<rect x=\"90\" y=\"176\" width=\"120\" height=\"43\" rx=\"0\" fill=\"#8B8DF0\"/>\n<rect x=\"90\" y=\"219\" width=\"120\" height=\"11\" rx=\"4\" fill=\"#C7C8F8\"/>\n<text x=\"150\" y=\"128\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#fff\">A 61.5%</text>\n<text x=\"150\" y=\"201\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#fff\">B 30.8%</text>\n<text x=\"150\" y=\"245\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#5B6577\">C 7.7%</text>\n<text x=\"150\" y=\"268\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10\" fill=\"#5B6577\">high price = big weight</text>\n</g>\n<g>\n<text x=\"360\" y=\"76\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#0F9573\">Market-cap-weighted</text>\n<rect x=\"300\" y=\"90\" width=\"120\" height=\"28\" rx=\"4\" fill=\"#9BDCC6\"/>\n<rect x=\"300\" y=\"118\" width=\"120\" height=\"84\" rx=\"0\" fill=\"#0F9573\"/>\n<rect x=\"300\" y=\"202\" width=\"120\" height=\"28\" rx=\"4\" fill=\"#9BDCC6\"/>\n<text x=\"360\" y=\"109\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#1B2438\">A 20%</text>\n<text x=\"360\" y=\"165\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#fff\">B 60%</text>\n<text x=\"360\" y=\"221\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#1B2438\">C 20%</text>\n<text x=\"360\" y=\"268\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10\" fill=\"#5B6577\">big company = big weight</text>\n</g>\n<g>\n<text x=\"570\" y=\"76\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#B45309\">Equal-weighted</text>\n<rect x=\"510\" y=\"90\" width=\"120\" height=\"46.7\" rx=\"4\" fill=\"#B45309\"/>\n<rect x=\"510\" y=\"136.7\" width=\"120\" height=\"46.7\" rx=\"0\" fill=\"#D9955C\"/>\n<rect x=\"510\" y=\"183.4\" width=\"120\" height=\"46.6\" rx=\"4\" fill=\"#F3E3C4\"/>\n<text x=\"570\" y=\"118\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#fff\">A 33.3%</text>\n<text x=\"570\" y=\"165\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#fff\">B 33.3%</text>\n<text x=\"570\" y=\"212\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#1B2438\">C 33.3%</text>\n<text x=\"570\" y=\"268\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10\" fill=\"#5B6577\">needs constant rebalancing</text>\n</g>\n<text x=\"360\" y=\"302\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11.5\" fill=\"#8B5CF6\" font-weight=\"600\">Price weighting is distorted by splits; cap weighting tilts to winners (momentum); equal weighting tilts to small caps.</text>\n</svg>\n<table style=\"width:100%;border-collapse:collapse;font-size:13.5px;margin:10px 0\"><tr style=\"background:#EEF0FE\"><th style=\"padding:7px;border:1px solid #D6DAFB;text-align:left\">Scheme</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Computation</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Index return</th></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Price-weighted</td><td style=\"padding:7px;border:1px solid #E5E9F2\">(88+42+9)/(80+40+10) − 1 = 139/130 − 1</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\"><strong>+6.92%</strong></td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Market-cap-weighted</td><td style=\"padding:7px;border:1px solid #E5E9F2\">0.20(+10%) + 0.60(+5%) + 0.20(−10%)</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\"><strong>+3.0%</strong></td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Equal-weighted</td><td style=\"padding:7px;border:1px solid #E5E9F2\">(+10% + 5% − 10%)/3</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\"><strong>+1.67%</strong></td></tr></table>\n<p>Same market, three different \"answers\" — weighting <em>is</em> the index. The price-weighted result is dragged around by A merely because its <em>price</em> is high; cap weighting reflects aggregate wealth change; equal weighting gives C's collapse the same voice as B's grind.</p>\n<p><strong>The split problem.</strong> Suppose A splits 2-for-1 at day 0 (price 40, nothing economic changes). A price-weighted index must cut its divisor so the level is unchanged: new divisor = (40+40+10)/old level. Side effect: A's weight drops from 61.5% to 45% <em>overnight with no economic event</em> — and since high-growth stocks split most, price-weighted indexes systematically bleed weight from winners. Cap-weighted indexes need no adjustment for splits (cap is unchanged) but must adjust for buybacks/issuance; most real indexes are <strong>float-adjusted</strong> — weights use only shares available to the public, excluding strategic/government stakes.</p>\n<p><strong>Rebalancing vs reconstitution.</strong> Rebalancing resets <em>weights</em> back to target on schedule (matters most for equal weighting, which drifts continuously — its hidden cost is constant selling of winners and buying of losers, i.e., turnover). Reconstitution changes <em>membership</em>: additions typically pop and deletions sag around announcement — index-tracking money must trade them. Uses of indexes: market sentiment gauges, benchmarks for active managers, proxies for asset-class risk/return, foundations for index funds and ETFs.</p>",
     "vi": "<p><strong>Ba cổ phiếu, ngày 0 → ngày 1:</strong> A: $80 → $88 (+10%), 100tr cổ phiếu. B: $40 → $42 (+5%), 600tr. C: $10 → $9 (−10%), 800tr. Kết quả ba cách tính: price-weighted = 139/130 − 1 = <strong>+6,92%</strong>; cap-weighted = 0,20(+10%) + 0,60(+5%) + 0,20(−10%) = <strong>+3,0%</strong>; equal-weighted = trung bình ba mức = <strong>+1,67%</strong>.</p>\n<p>Cùng một thị trường, ba \"đáp án\" khác nhau — cách gán trọng số <em>chính là</em> chỉ số. Kết quả price-weighted bị A lôi kéo chỉ vì <em>giá</em> nó cao; cap weighting phản ánh thay đổi tổng tài sản; equal weighting cho cú sập của C tiếng nói ngang với bước đi của B.</p>\n<p><strong>Vấn đề chia tách.</strong> Giả sử A chia 2:1 tại ngày 0 (giá thành 40, không có gì kinh tế thay đổi). Chỉ số price-weighted phải hạ divisor để mức chỉ số không đổi: divisor mới = (40+40+10)/mức cũ. Tác dụng phụ: trọng số của A rơi từ 61,5% xuống 45% <em>qua một đêm không có sự kiện kinh tế nào</em> — và vì cổ phiếu tăng trưởng cao chia tách nhiều nhất, chỉ số price-weighted rỉ máu trọng số khỏi người thắng một cách hệ thống. Chỉ số cap-weighted không cần điều chỉnh khi chia tách (vốn hóa không đổi) nhưng phải điều chỉnh khi mua lại/phát hành; hầu hết chỉ số thực là <strong>float-adjusted</strong> — trọng số chỉ tính cổ phần công chúng mua được, loại phần nắm giữ chiến lược/nhà nước.</p>\n<p><strong>Rebalancing vs reconstitution.</strong> Rebalancing đặt lại <em>trọng số</em> về mục tiêu theo lịch (quan trọng nhất với equal weighting vì nó trôi liên tục — chi phí ẩn là liên tục bán người thắng mua người thua, tức turnover). Reconstitution đổi <em>thành viên</em>: cổ phiếu được thêm thường bật giá, bị loại thường xẹp quanh thời điểm công bố — tiền bám chỉ số buộc phải giao dịch chúng. Công dụng của chỉ số: thước đo tâm lý thị trường, benchmark cho quản lý chủ động, proxy rủi ro/lợi suất lớp tài sản, nền cho quỹ chỉ số và ETF.</p>"
    }
   ],
   "formulas": [
    [
     "Price-weighted index",
     "Σ prices / divisor",
     "Divisor is adjusted for splits so the level is unchanged."
    ],
    [
     "Cap-weighted index return",
     "Σ (weight_i × return_i), weights by market cap",
     "Float-adjusted versions use only publicly available shares."
    ]
   ]
  },
  {
   "title": "Market Efficiency",
   "sections": [
    {
     "h": "The three forms of the EMH",
     "en": "<ul><li><strong>Weak form:</strong> prices reflect all <em>past market data</em> (prices, volume). If it holds, <em>technical analysis</em> cannot consistently outperform.</li><li><strong>Semi-strong form:</strong> prices reflect all <em>public</em> information. If it holds, <em>fundamental analysis</em> of public data cannot consistently outperform. Tested via event studies.</li><li><strong>Strong form:</strong> prices reflect all information, <em>including private/insider</em> information. Even insiders could not beat the market — empirically rejected (insider trading is profitable, which is why it is illegal).</li></ul><p>Documented anomalies (January effect, momentum, value effects) often shrink after discovery or fail after costs. Behavioral finance (loss aversion, herding, overconfidence) offers explanations for persistent mispricing. Practical implication: in highly efficient markets, <strong>passive investing</strong> is hard to beat after fees.</p>",
     "vi": "<ul><li><strong>Dạng yếu:</strong> giá phản ánh mọi <em>dữ liệu thị trường quá khứ</em>. Nếu đúng, <em>phân tích kỹ thuật</em> không thể thắng thị trường bền vững.</li><li><strong>Dạng bán mạnh:</strong> giá phản ánh mọi thông tin <em>công khai</em>. Nếu đúng, <em>phân tích cơ bản</em> trên dữ liệu công khai không thắng được thị trường. Kiểm định bằng event study.</li><li><strong>Dạng mạnh:</strong> giá phản ánh mọi thông tin, <em>kể cả thông tin nội bộ</em>. Ngay cả insider cũng không thắng được — thực nghiệm bác bỏ (giao dịch nội gián sinh lời, đó là lý do nó bị cấm).</li></ul><p>Các anomaly (hiệu ứng tháng Giêng, momentum, hiệu ứng giá trị) thường yếu đi sau khi được công bố hoặc biến mất sau chi phí. Tài chính hành vi (sợ thua lỗ, tâm lý bầy đàn, quá tự tin) giải thích các sai lệch định giá dai dẳng. Hàm ý thực tiễn: ở thị trường hiệu quả cao, <strong>đầu tư thụ động</strong> rất khó bị đánh bại sau phí.</p>"
    },
    {
     "h": "What drives efficiency — and the anomaly catalogue",
     "en": "<ul><li><strong>Efficiency is a matter of degree</strong>, shaped by: number of active market participants, information availability (large-cap vs frontier markets), limits to trading (short-selling constraints, illiquidity), and transaction/information costs — prices are efficient <em>within the bounds of arbitrage costs</em>.</li><li><strong>Intrinsic vs market value:</strong> active management is the bet that market price ≠ intrinsic value and the gap will close. In highly efficient markets, passive indexing outperforms after costs.</li><li><strong>Anomaly catalogue</strong> (evidence weakens once documented): time-series — calendar effects (January), momentum and overreaction; cross-sectional — size and value effects; other — closed-end fund discounts, post-earnings-announcement drift, IPO underperformance. Most shrink after adjusting for risk, data snooping, and costs — the practical bar is <em>exploitability net of costs</em>.</li><li><strong>Behavioral finance</strong> explains persistence: loss aversion (losses hurt ~2× gains), overconfidence, herding, information cascades, representativeness, and conservatism. Behavioral biases can create anomalies — but bias alone does not guarantee a profitable strategy.</li></ul>",
     "vi": "<ul><li><strong>Hiệu quả có tính mức độ</strong>, phụ thuộc: số lượng người tham gia tích cực, mức sẵn có của thông tin (large-cap vs thị trường cận biên), rào cản giao dịch (hạn chế bán khống, kém thanh khoản), chi phí giao dịch/thông tin — giá hiệu quả <em>trong biên độ chi phí arbitrage</em>.</li><li><strong>Giá trị nội tại vs giá thị trường:</strong> quản lý chủ động là đặt cược rằng giá thị trường ≠ giá trị nội tại và khoảng cách sẽ khép lại. Ở thị trường hiệu quả cao, đầu tư chỉ số thụ động thắng sau chi phí.</li><li><strong>Danh mục anomaly</strong> (bằng chứng yếu dần sau khi được công bố): chuỗi thời gian — hiệu ứng lịch (tháng Giêng), momentum và phản ứng thái quá; cắt ngang — hiệu ứng quy mô và giá trị; khác — chiết khấu quỹ đóng, trôi dạt sau công bố lợi nhuận, IPO kém hiệu quả. Đa số co lại sau khi hiệu chỉnh rủi ro, data snooping và chi phí — tiêu chuẩn thực tế là <em>khai thác được sau chi phí</em>.</li><li><strong>Tài chính hành vi</strong> giải thích sự dai dẳng: sợ thua lỗ (lỗ đau gấp ~2 lần lãi), quá tự tin, tâm lý bầy đàn, thác thông tin, đại diện hóa, bảo thủ. Thiên lệch hành vi có thể tạo anomaly — nhưng tự nó không bảo đảm một chiến lược sinh lời.</li></ul>"
    },
    {
     "h": "What each form rules out, the anomaly catalogue & the behavioral bridge",
     "en": "<svg viewBox=\"0 0 720 330\" style=\"width:100%;height:auto;display:block;margin:14px 0;background:#fff;border:1px solid #E5E9F2;border-radius:12px\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Three forms of market efficiency\">\n<text x=\"360\" y=\"26\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" fill=\"#1B2438\">Efficiency forms: each one swallows the last</text>\n<circle cx=\"360\" cy=\"185\" r=\"128\" fill=\"#EEF0FE\" stroke=\"#5457E0\" stroke-width=\"1.5\"/>\n<circle cx=\"360\" cy=\"205\" r=\"86\" fill=\"#E7F6F0\" stroke=\"#0F9573\" stroke-width=\"1.5\"/>\n<circle cx=\"360\" cy=\"235\" r=\"46\" fill=\"#FBF3E4\" stroke=\"#B45309\" stroke-width=\"1.5\"/>\n<text x=\"360\" y=\"82\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12.5\" font-weight=\"700\" fill=\"#4338CA\">STRONG form</text>\n<text x=\"360\" y=\"98\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#4338CA\">prices reflect ALL info — even private</text>\n<text x=\"360\" y=\"146\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#0F9573\">SEMI-STRONG form</text>\n<text x=\"360\" y=\"161\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#0F9573\">+ all public info (filings, news)</text>\n<text x=\"360\" y=\"230\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11.5\" font-weight=\"700\" fill=\"#B45309\">WEAK form</text>\n<text x=\"360\" y=\"245\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10\" fill=\"#92400E\">past prices</text>\n<text x=\"360\" y=\"259\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10\" fill=\"#92400E\">& volume</text>\n<text x=\"118\" y=\"140\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#5B6577\">If weak holds:</text>\n<text x=\"118\" y=\"155\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" font-weight=\"600\" fill=\"#DC4848\">technical analysis fails</text>\n<text x=\"600\" y=\"140\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#5B6577\">If semi-strong holds:</text>\n<text x=\"600\" y=\"155\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" font-weight=\"600\" fill=\"#DC4848\">fundamental analysis fails too</text>\n<text x=\"600\" y=\"228\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#5B6577\">If strong held:</text>\n<text x=\"600\" y=\"243\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" font-weight=\"600\" fill=\"#DC4848\">even insiders couldn't win</text>\n<text x=\"118\" y=\"228\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#5B6577\">Evidence: weak & semi-strong</text>\n<text x=\"118\" y=\"243\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#5B6577\">largely hold in developed markets</text>\n<text x=\"360\" y=\"322\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11\" fill=\"#8B5CF6\" font-weight=\"600\">Strong form fails in practice — insider trading is profitable, which is why it is illegal.</text>\n</svg>\n<p><strong>Read the diagram as a chain of implications.</strong> If prices already impound past price data (weak form), <strong>technical analysis</strong> cannot earn abnormal returns. If they impound all public information (semi-strong), <strong>fundamental analysis of public filings</strong> can't either — prices adjust within minutes of releases. Strong form would kill even insider profits; it demonstrably fails (hence insider-trading laws). Empirically, developed markets are close to semi-strong efficient: most active managers underperform after fees, which is itself the cleanest evidence.</p>\n<p><strong>Abnormal return is the yardstick:</strong> actual return minus the return expected for the risk taken. Any efficiency \"test\" is a joint test of the market <em>and</em> the risk model used — an apparent anomaly may just be a mismeasured risk premium.</p>\n<table style=\"width:100%;border-collapse:collapse;font-size:13.5px;margin:10px 0\"><tr style=\"background:#EEF0FE\"><th style=\"padding:7px;border:1px solid #D6DAFB;text-align:left\">Anomaly</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Pattern</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Standard critique</th></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Calendar (January/turn-of-month)</td><td style=\"padding:7px;border:1px solid #E5E9F2\">excess returns at specific dates</td><td style=\"padding:7px;border:1px solid #E5E9F2\">faded after publication; tax-loss selling story</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Momentum & overreaction</td><td style=\"padding:7px;border:1px solid #E5E9F2\">winners keep winning short-term; long-term reversals</td><td style=\"padding:7px;border:1px solid #E5E9F2\">fragile after costs; crash-prone</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Size & value</td><td style=\"padding:7px;border:1px solid #E5E9F2\">small caps / low P/B outperform</td><td style=\"padding:7px;border:1px solid #E5E9F2\">compensation for risk, not inefficiency?</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Post-earnings announcement drift</td><td style=\"padding:7px;border:1px solid #E5E9F2\">prices keep drifting after surprises</td><td style=\"padding:7px;border:1px solid #E5E9F2\">strongest in small, illiquid names — costly to trade</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Closed-end fund discounts, IPO underperformance</td><td style=\"padding:7px;border:1px solid #E5E9F2\">persistent pricing quirks</td><td style=\"padding:7px;border:1px solid #E5E9F2\">limits to arbitrage; liquidity</td></tr></table>\n<p>Most documented anomalies shrink or vanish out-of-sample — <em>data mining</em> plus transaction costs is the default explanation the exam expects.</p>\n<p><strong>The behavioral bridge.</strong> Loss aversion (losses hurt ~2× more than gains please), overconfidence (mispricing via excessive trading), herding and information cascades (following the crowd's trades rather than one's own signal), mental accounting, conservatism (slow updating → drift). Behavioral finance explains <em>why</em> mispricings arise; limits to arbitrage (costs, risk, capital constraints) explain why they can persist. What makes markets more efficient: many active analysts, liquidity, low trading costs, short-selling availability, and quality disclosure. Efficiency's practical punchline: even in an efficient market, portfolio management still earns its fee — through diversification, risk targeting, tax and cost management — just not through stock picking.</p>",
     "vi": "<p><strong>Đọc sơ đồ như chuỗi hàm ý.</strong> Nếu giá đã hấp thụ dữ liệu giá quá khứ (weak form), <strong>phân tích kỹ thuật</strong> không thể kiếm lợi suất bất thường. Nếu giá hấp thụ mọi thông tin công khai (semi-strong), <strong>phân tích cơ bản trên hồ sơ công bố</strong> cũng vô ích — giá điều chỉnh trong vài phút sau công bố. Strong form sẽ giết cả lợi nhuận nội gián; nó thất bại rõ ràng trong thực tế (vì thế mới có luật cấm giao dịch nội gián). Thực nghiệm: thị trường phát triển gần semi-strong — đa số quỹ chủ động thua sau phí, và chính điều đó là bằng chứng sạch nhất.</p>\n<p><strong>Lợi suất bất thường là thước đo:</strong> lợi suất thực trừ lợi suất kỳ vọng cho mức rủi ro gánh chịu. Mọi \"kiểm định\" hiệu quả là kiểm định kép của thị trường <em>và</em> mô hình rủi ro — một \"anomaly\" có thể chỉ là phần bù rủi ro đo sai.</p>\n<p><strong>Danh mục anomaly (bảng):</strong> hiệu ứng lịch (tháng Giêng/đầu tháng) — phai sau khi công bố, gắn câu chuyện bán chốt lỗ thuế; momentum & overreaction — thắng tiếp tục thắng ngắn hạn, đảo chiều dài hạn, mong manh sau chi phí; size & value — small cap/P/B thấp vượt trội, có thể là bù rủi ro chứ không phải kém hiệu quả; post-earnings drift — giá trôi tiếp sau bất ngờ lợi nhuận, mạnh nhất ở cổ phiếu nhỏ kém thanh khoản (đắt để giao dịch); chiết khấu quỹ đóng, IPO kém hiệu quả — giới hạn arbitrage, thanh khoản. Đa số anomaly co lại hoặc biến mất ngoài mẫu — <em>data mining</em> cộng chi phí giao dịch là lời giải mặc định đề thi mong đợi.</p>\n<p><strong>Cây cầu hành vi.</strong> Loss aversion (lỗ đau gấp ~2 lần lãi vui), overconfidence (định giá sai qua giao dịch quá mức), herding và information cascades (đi theo lệnh đám đông thay vì tín hiệu của mình), mental accounting, conservatism (cập nhật chậm → drift). Tài chính hành vi giải thích <em>vì sao</em> định giá sai xuất hiện; limits to arbitrage (chi phí, rủi ro, ràng buộc vốn) giải thích vì sao nó tồn tại dai dẳng. Điều làm thị trường hiệu quả hơn: nhiều nhà phân tích chủ động, thanh khoản, chi phí giao dịch thấp, được phép bán khống, công bố chất lượng. Chốt hạ thực tiễn: kể cả trong thị trường hiệu quả, quản lý danh mục vẫn xứng đáng với phí — qua đa dạng hóa, nhắm mục tiêu rủi ro, quản trị thuế và chi phí — chỉ là không qua chọn cổ phiếu.</p>"
    }
   ]
  },
  {
   "title": "Overview of Equity Securities",
   "sections": [
    {
     "h": "Common shares, preference shares & depository receipts",
     "en": "<ul><li><strong>Common shares:</strong> residual claim and voting rights. <em>Statutory voting</em> = one vote per share per board seat; <em>cumulative voting</em> lets shareholders concentrate all votes on one candidate — protecting minority holders. Callable common (issuer may buy back at a set price) favors the issuer; putable common (holder may sell back) favors the investor.</li><li><strong>Preference shares</strong> rank between debt and common equity: fixed dividends (not contractual obligations), usually no votes. <em>Cumulative</em> preference accrues unpaid dividends as arrears that must be cleared before any common dividend; <em>participating</em> preference adds an extra dividend when profits exceed a threshold (common in private/venture deals); <em>convertible</em> preference adds equity upside to a bond-like base.</li><li><strong>Private equity securities</strong> (venture capital, LBO equity, PIPEs) trade rarely, are illiquid, escape most public disclosure, and negotiate price directly — the trade-off for potentially stronger governance alignment and long horizons.</li><li><strong>Investing abroad:</strong> direct foreign listings vs <strong>depository receipts</strong> — shares held by a bank, receipts trading locally. <em>Sponsored</em> DRs involve the issuer and carry voting rights and full disclosure; <em>unsponsored</em> DRs are created by a depository bank without the issuer — the bank keeps the votes. ADRs (US dollar, US markets) vs GDRs (typically USD, outside the issuer’s home and the US). Baskets of listed shares and ETFs offer indirect exposure.</li><li><strong>Risk and return:</strong> equity returns = price appreciation + dividends (+ FX for foreign holdings); preference shares are less risky than common (dividend priority, liquidation preference) but still junior to all debt. Equity’s role for the issuer: capital, and — via <strong>book value</strong> growth from retained earnings — the base on which <strong>ROE = NI / average book value of equity</strong> compounds. Market value reflects expected <em>future</em> earnings power; accounting return and investor return are cousins, not twins.</li></ul>",
     "vi": "<ul><li><strong>Cổ phiếu phổ thông:</strong> quyền lợi còn lại và quyền biểu quyết. <em>Biểu quyết theo luật định</em> = mỗi cổ phần một phiếu cho từng ghế HĐQT; <em>biểu quyết dồn phiếu</em> cho phép dồn toàn bộ phiếu vào một ứng viên — bảo vệ cổ đông thiểu số. Cổ phiếu callable (công ty được mua lại theo giá định trước) có lợi cho công ty; putable (cổ đông được bán lại) có lợi cho nhà đầu tư.</li><li><strong>Cổ phiếu ưu đãi</strong> đứng giữa nợ và cổ phần phổ thông: cổ tức cố định (không phải nghĩa vụ hợp đồng), thường không có quyền biểu quyết. Loại <em>tích lũy (cumulative)</em>: cổ tức chưa trả dồn lại thành nợ cổ tức phải thanh toán trước khi trả cổ tức phổ thông; <em>tham gia (participating)</em>: thêm cổ tức phụ khi lợi nhuận vượt ngưỡng (phổ biến trong deal tư nhân/venture); <em>chuyển đổi</em>: thêm tiềm năng tăng giá cổ phiếu trên nền giống trái phiếu.</li><li><strong>Chứng khoán vốn tư nhân</strong> (venture capital, LBO equity, PIPE) hiếm giao dịch, kém thanh khoản, ít nghĩa vụ công bố, giá đàm phán trực tiếp — đổi lại là sự đồng hướng quản trị chặt hơn và tầm nhìn dài.</li><li><strong>Đầu tư ra nước ngoài:</strong> niêm yết trực tiếp vs <strong>chứng chỉ lưu ký</strong> — cổ phiếu do ngân hàng giữ, chứng chỉ giao dịch nội địa. DR <em>có bảo trợ</em>: tổ chức phát hành tham gia, có quyền biểu quyết, công bố đầy đủ; <em>không bảo trợ</em>: ngân hàng lưu ký tự tạo, giữ luôn quyền biểu quyết. ADR (USD, thị trường Mỹ) vs GDR (thường USD, ngoài nước sở tại và ngoài Mỹ). Rổ cổ phiếu và ETF cho tiếp cận gián tiếp.</li><li><strong>Rủi ro và lợi nhuận:</strong> lợi suất cổ phiếu = tăng giá + cổ tức (+ tỷ giá với cổ phiếu ngoại); cổ phiếu ưu đãi ít rủi ro hơn phổ thông (ưu tiên cổ tức, ưu tiên thanh lý) nhưng vẫn sau mọi khoản nợ. Vai trò của vốn cổ phần với công ty: nguồn vốn, và — qua tăng trưởng <strong>giá trị sổ sách</strong> từ lợi nhuận giữ lại — nền để <strong>ROE = LN ròng / vốn chủ bình quân</strong> tích lũy. Giá thị trường phản ánh sức sinh lời <em>tương lai</em> kỳ vọng; lợi suất kế toán và lợi suất nhà đầu tư là họ hàng, không phải sinh đôi.</li></ul>"
    },
    {
     "h": "Voting arithmetic, the preferred menu priced, and depository receipts",
     "en": "<p><strong>Cumulative voting worked — why minorities care.</strong> You own 300 of 1,000 shares; 3 board seats are up. Statutory voting: 300 votes per seat, majority (the 700-holder) wins every seat 700–300. Cumulative voting: you get 300 × 3 = <strong>900 votes to concentrate on one candidate</strong>. The majority's 2,100 votes spread over 3 candidates average 700 each — your 900 beats at least one of them. Shares needed to guarantee n seats = n × total shares/(seats + 1) + 1 = 1×1,000/4 + 1 = <strong>251 shares for one seat</strong>. Cumulative voting is the classic minority-protection mechanism (link back to Corporate Issuers governance).</p>\n<p><strong>The preference-share menu, priced.</strong> A non-callable, non-convertible preferred paying a fixed $5 forever is a perpetuity: at r = 8%, V = 5/0.08 = <strong>$62.50</strong>. Features shift value in predictable directions:</p>\n<table style=\"width:100%;border-collapse:collapse;font-size:13.5px;margin:10px 0\"><tr style=\"background:#EEF0FE\"><th style=\"padding:7px;border:1px solid #D6DAFB;text-align:left\">Feature</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Who benefits</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Effect vs plain preferred</th></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Cumulative</td><td style=\"padding:7px;border:1px solid #E5E9F2\">investor</td><td style=\"padding:7px;border:1px solid #E5E9F2\">missed dividends accrue and must be paid before common → worth more</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Participating</td><td style=\"padding:7px;border:1px solid #E5E9F2\">investor</td><td style=\"padding:7px;border:1px solid #E5E9F2\">extra dividend/liquidation share if profits exceed a level → worth more</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Convertible</td><td style=\"padding:7px;border:1px solid #E5E9F2\">investor</td><td style=\"padding:7px;border:1px solid #E5E9F2\">adds equity upside option → worth more, common in venture financing</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Callable</td><td style=\"padding:7px;border:1px solid #E5E9F2\">issuer</td><td style=\"padding:7px;border:1px solid #E5E9F2\">issuer repurchases when rates fall → worth less to the investor</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Putable</td><td style=\"padding:7px;border:1px solid #E5E9F2\">investor</td><td style=\"padding:7px;border:1px solid #E5E9F2\">investor can sell back at a set price → worth more</td></tr></table>\n<p>Preferred generally has no voting rights and no maturity; its priority sits between debt and common. Callable <em>common</em> shares (rare) and putable common follow the same who-holds-the-option logic.</p>\n<p><strong>Foreign access routes.</strong> Direct investing faces currency, disclosure, and settlement frictions, so intermediated forms dominate: <strong>ADRs</strong> (USD-denominated receipts on foreign shares; sponsored = issuer-backed with voting rights passed through, unsponsored = depository bank's initiative; Level I OTC → Level II listed → Level III listed + capital raising), <strong>GDRs</strong> (typically USD, outside the issuer's home and often London/Luxembourg), <strong>global registered shares</strong> (one share, many exchanges), and <strong>baskets of listed DRs</strong>. Exam trap: the DR holder bears the underlying's currency risk economically even though the DR trades in dollars — a falling home currency shows up as a falling DR price.</p>\n<p><strong>Return and risk framing:</strong> equity returns = dividends + capital gains (+ currency for foreign holdings); preferred is less risky than common (priority, fixed dividend) but riskier than debt (no contractual obligation, deferred payment possible); within common, putable &lt; plain &lt; callable in risk to the holder. The book value of equity records history; the market value prices expectations — ROE uses book, investors pay market: a high-ROE firm can still be a bad buy at the wrong price (bridge to module 7).</p>",
     "vi": "<p><strong>Toán bầu dồn phiếu — vì sao thiểu số quan tâm.</strong> Bạn nắm 300/1.000 cổ phần; bầu 3 ghế HĐQT. Bầu thường (statutory): 300 phiếu mỗi ghế, phe đa số (700 cổ phần) thắng mọi ghế 700–300. Bầu dồn phiếu (cumulative): bạn có 300 × 3 = <strong>900 phiếu dồn cho một ứng viên</strong>. 2.100 phiếu của phe đa số rải cho 3 ứng viên trung bình 700 mỗi người — 900 của bạn thắng ít nhất một ghế. Số cổ phần bảo đảm n ghế = n × tổng cổ phần/(số ghế + 1) + 1 = 1×1.000/4 + 1 = <strong>251 cổ phần cho một ghế</strong>. Bầu dồn phiếu là cơ chế bảo vệ thiểu số kinh điển (nối về quản trị ở Corporate Issuers).</p>\n<p><strong>Thực đơn cổ phần ưu đãi, có định giá.</strong> Ưu đãi không thu hồi, không chuyển đổi trả cố định $5 vĩnh viễn là một perpetuity: tại r = 8%, V = 5/0,08 = <strong>$62,50</strong>. Các đặc tính dịch giá trị theo hướng dự đoán được: cumulative — cổ tức bỏ lỡ cộng dồn phải trả trước cổ phần thường → đáng giá hơn; participating — được chia thêm khi lợi nhuận vượt ngưỡng → đáng giá hơn; convertible — thêm quyền chọn hưởng upside cổ phiếu → đáng giá hơn, phổ biến trong venture; callable — công ty mua lại khi lãi suất giảm → kém giá trị hơn với nhà đầu tư; putable — nhà đầu tư bán lại giá định trước → đáng giá hơn.</p>\n<p>Ưu đãi thường không có quyền biểu quyết, không đáo hạn; thứ tự ưu tiên nằm giữa nợ và cổ phần thường. Cổ phần thường callable (hiếm) và putable theo cùng logic ai-nắm-quyền-chọn.</p>\n<p><strong>Đường vào cổ phiếu nước ngoài.</strong> Đầu tư trực tiếp vướng tiền tệ, công bố, thanh toán, nên hình thức trung gian thống trị: <strong>ADRs</strong> (chứng chỉ USD trên cổ phiếu ngoại; sponsored = công ty bảo trợ, chuyển quyền biểu quyết, unsponsored = ngân hàng lưu ký tự làm; Level I OTC → Level II niêm yết → Level III niêm yết + huy động vốn), <strong>GDRs</strong> (thường USD, ngoài nước của công ty, hay ở London/Luxembourg), <strong>global registered shares</strong> (một cổ phần, nhiều sàn), và <strong>rổ DR niêm yết</strong>. Bẫy đề: người nắm DR vẫn gánh rủi ro tiền tệ của tài sản gốc dù DR giao dịch bằng USD — nội tệ của công ty mất giá hiện ra thành giá DR giảm.</p>\n<p><strong>Khung lợi suất và rủi ro:</strong> lợi suất cổ phiếu = cổ tức + lãi vốn (+ tiền tệ với cổ phiếu ngoại); ưu đãi ít rủi ro hơn thường (ưu tiên, cổ tức cố định) nhưng rủi ro hơn nợ (không phải nghĩa vụ hợp đồng, có thể hoãn trả); trong cổ phần thường, putable &lt; thường &lt; callable về rủi ro với người nắm. Book value ghi lịch sử; market value định giá kỳ vọng — ROE dùng book, nhà đầu tư trả market: công ty ROE cao vẫn có thể là món mua tồi ở giá sai (bắc cầu sang module 7).</p>"
    }
   ],
   "formulas": [
    [
     "Preferred stock value",
     "V = D / r",
     "Perpetuity"
    ],
    [
     "ROE",
     "Net income / average book value of equity",
     "Accounting return on the equity base"
    ],
    [
     "Cumulative voting threshold",
     "shares to elect n directors = n × total shares/(seats + 1) + 1",
     "1 seat of 3, 1,000 shares → 251 shares suffice."
    ]
   ]
  },
  {
   "title": "Company Analysis: Past and Present",
   "sections": [
    {
     "h": "Company analysis: revenue drivers, profitability & the operating story",
     "en": "<ul><li><strong>The research deliverable:</strong> a company report covers the business description and model, industry context, management and governance, financial analysis of the drivers below, valuation, and risks. The discipline: connect every forecast to an identified <em>driver</em>.</li><li><strong>Revenue analysis:</strong> decompose growth into <em>volume × price/mix</em>, and organic vs acquired; classify the firm as price <em>taker</em> or price <em>setter</em> (pricing power comes from differentiation, switching costs, market structure). Geographic and segment splits reveal where growth actually comes from.</li><li><strong>Cost structure and operating leverage:</strong> split costs into fixed and variable; <em>gross margin</em> tracks input costs and pricing power, <em>operating margin</em> adds the overhead layer. High fixed costs → high operating leverage → margins expand rapidly with revenue growth and collapse in downturns. Compare margins across peers and time; ask which line items scale with revenue and which do not.</li><li><strong>Balance-sheet drivers:</strong> working capital intensity (via DSO/DOH/DPO), capital intensity (capex-to-revenue, asset turnover), and how the firm finances itself. <em>Uses of capital</em> follow a hierarchy: reinvestment in operations, then debt service, then distributions (dividends, buybacks).</li></ul>",
     "vi": "<ul><li><strong>Sản phẩm nghiên cứu:</strong> báo cáo phân tích doanh nghiệp gồm mô tả hoạt động và business model, bối cảnh ngành, ban lãnh đạo và quản trị, phân tích tài chính theo các driver bên dưới, định giá và rủi ro. Kỷ luật cốt lõi: mọi con số dự phóng phải gắn với một <em>driver</em> xác định.</li><li><strong>Phân tích doanh thu:</strong> tách tăng trưởng thành <em>sản lượng × giá/cơ cấu</em>, hữu cơ vs từ M&amp;A; phân loại doanh nghiệp là bên <em>chấp nhận giá</em> hay <em>đặt giá</em> (sức mạnh định giá đến từ khác biệt hóa, chi phí chuyển đổi, cấu trúc thị trường). Cơ cấu theo địa lý và mảng cho biết tăng trưởng thật sự đến từ đâu.</li><li><strong>Cơ cấu chi phí và đòn bẩy hoạt động:</strong> tách chi phí cố định và biến đổi; <em>biên gộp</em> phản ánh chi phí đầu vào và sức mạnh định giá, <em>biên hoạt động</em> cộng thêm lớp chi phí chung. Chi phí cố định cao → đòn bẩy hoạt động cao → biên nở nhanh khi doanh thu tăng và sụp nhanh khi suy giảm. So sánh biên giữa các doanh nghiệp cùng ngành và theo thời gian; hỏi khoản mục nào tăng theo doanh thu, khoản nào không.</li><li><strong>Driver trên bảng cân đối:</strong> cường độ vốn lưu động (qua DSO/DOH/DPO), cường độ vốn đầu tư (capex/doanh thu, vòng quay tài sản), và cách công ty tài trợ. <em>Thứ tự sử dụng vốn:</em> tái đầu tư vào hoạt động, rồi trả nợ, rồi phân phối (cổ tức, mua lại cổ phiếu).</li></ul>"
    },
    {
     "h": "Decompose the operating story: price × volume, margin bridge & ROIC",
     "en": "<p><strong>Start every company analysis by splitting revenue into price and volume.</strong> Revenue rose 8%: was it +3% price and +5% volume (healthy, if volume held despite the hike) or +9% price and −1% volume (pricing power straining — or channel stuffing)? Sources for the split: company disclosures (units, ARPU, same-store sales, load factors), industry data, and management commentary. Then classify the drivers: <em>organic vs acquired</em> growth, <em>new customers vs higher spend per customer</em>, and geography/segment mix.</p>\n<p><strong>Margin bridge worked.</strong> Operating margin fell from 16% to 14%. Bridge it: gross margin −1.0pp (input cost inflation not fully passed through), SG&A +0.7pp as % of sales (new sales hires ahead of revenue), D&A +0.3pp (capacity added). Now you know the 2-point drop is two-thirds cost-pass-through failure and one-third deliberate investment — very different forecasting implications. A margin change explained is worth ten margins observed.</p>\n<p><strong>Estimate operating leverage from two years of data.</strong> Revenue +10%, operating income +25% → observed DOL ≈ 2.5, implying roughly 60% of costs are fixed at this scale. Cross-check against the business model (module and topic 5): a software firm at DOL 2.5 is plausible; a distributor should be near 1.2 — a mismatch means one of your numbers hides a one-off.</p>\n<p><strong>Finish at the value question: ROIC vs WACC.</strong> ROIC = after-tax operating profit ÷ invested capital (debt + equity funding operations). Worked: NOPAT = 150 × (1 − 0.25)... take EBIT 200, tax 25% → NOPAT 150; invested capital 1,000 → ROIC = <strong>15%</strong>. Against an 9% WACC, the firm earns a 6-point spread — it <em>creates</em> value as it grows. ROIC &lt; WACC growth destroys value regardless of how fast revenue compounds. Persistent high ROIC is the financial fingerprint of a moat; check whether the sources you identified (brand, switching costs, scale, network effects) plausibly defend it.</p>",
     "vi": "<p><strong>Mở đầu mọi phân tích công ty bằng cách tách doanh thu thành giá × sản lượng.</strong> Doanh thu tăng 8%: là +3% giá và +5% sản lượng (lành mạnh, nếu sản lượng đứng vững dù tăng giá) hay +9% giá và −1% sản lượng (sức mạnh định giá đang căng — hoặc nhồi kênh)? Nguồn để tách: công bố của công ty (số đơn vị, ARPU, doanh số cửa hàng hiện hữu, hệ số tải), dữ liệu ngành, bình luận của ban điều hành. Rồi phân loại động lực: tăng trưởng <em>hữu cơ vs thâu tóm</em>, <em>khách mới vs chi tiêu mỗi khách tăng</em>, và cơ cấu địa lý/phân khúc.</p>\n<p><strong>Cầu biên lợi nhuận bằng ví dụ.</strong> Biên hoạt động rơi từ 16% xuống 14%. Bắc cầu: biên gộp −1,0 điểm (lạm phát đầu vào không chuyển hết sang giá), SG&A +0,7 điểm trên doanh thu (tuyển đội bán hàng trước khi doanh thu về), D&A +0,3 điểm (thêm công suất). Giờ bạn biết 2 điểm sụt gồm hai phần ba là thất bại chuyển chi phí và một phần ba là đầu tư có chủ đích — hàm ý dự phóng rất khác nhau. Một biên lợi nhuận được giải thích đáng giá bằng mười biên lợi nhuận được quan sát.</p>\n<p><strong>Ước lượng đòn bẩy hoạt động từ hai năm dữ liệu.</strong> Doanh thu +10%, lợi nhuận hoạt động +25% → DOL quan sát ≈ 2,5, hàm ý khoảng 60% chi phí là cố định tại quy mô này. Đối chiếu với business model (topic 5): công ty phần mềm DOL 2,5 hợp lý; nhà phân phối phải gần 1,2 — lệch pha nghĩa là một con số của bạn đang giấu khoản one-off.</p>\n<p><strong>Kết thúc ở câu hỏi giá trị: ROIC vs WACC.</strong> ROIC = lợi nhuận hoạt động sau thuế ÷ vốn đầu tư (nợ + vốn chủ tài trợ hoạt động). Ví dụ: EBIT 200, thuế 25% → NOPAT 150; vốn đầu tư 1.000 → ROIC = <strong>15%</strong>. So với WACC 9%, công ty kiếm chênh 6 điểm — nó <em>tạo</em> giá trị khi tăng trưởng. Tăng trưởng với ROIC &lt; WACC phá giá trị bất kể doanh thu lũy tiến nhanh cỡ nào. ROIC cao bền là dấu vân tay tài chính của con hào; kiểm tra xem các nguồn bạn nhận diện (thương hiệu, chi phí chuyển đổi, quy mô, hiệu ứng mạng) có thực sự bảo vệ được nó không.</p>"
    }
   ],
   "formulas": [
    [
     "ROIC",
     "NOPAT / invested capital = EBIT(1 − t)/(debt + equity)",
     "Value is created only while ROIC > WACC."
    ]
   ]
  },
  {
   "title": "Industry and Competitive Analysis",
   "sections": [
    {
     "h": "Industry classification, five forces & the life cycle",
     "en": "<ul><li><strong>Why industry analysis:</strong> industry effects explain a large share of profitability differences; it feeds company analysis, relative valuation, and rotation strategies. Classification schemes (GICS and peers) group firms by principal business activity — but build your own <em>peer group</em> from actual competitors, customers, and suppliers, not just the sector code.</li><li><strong>Porter’s five forces</strong> determine industry profitability: (1) <em>threat of new entrants</em> — weakened by barriers (scale, brands, patents, regulation, capital); (2) <em>power of suppliers</em> — high when concentrated and inputs lack substitutes; (3) <em>power of buyers</em> — high when purchases are large, standardized, and switching is cheap; (4) <em>threat of substitutes</em> — products from outside the industry capping prices; (5) <em>rivalry</em> — fiercest in fragmented industries with undifferentiated products, high fixed costs, and slow growth. External themes (PESTLE: political, economic, social, technological, legal, environmental) and demographics overlay the forces.</li><li><strong>Industry life cycle:</strong> <em>embryonic</em> (slow growth, high prices, heavy investment) → <em>growth</em> (rapidly rising demand, improving profitability, falling prices) → <em>shakeout</em> (growth slows, overcapacity emerges, weaker players exit) → <em>mature</em> (consolidation, stable oligopoly, price discipline) → <em>decline</em> (negative growth, excess capacity, price wars). Position determines whether growth or cost control drives value — and stages can be scrambled by technology.</li><li><strong>Competitive positioning:</strong> Porter’s generic strategies — <em>cost leadership</em> (lowest cost, defend by scale/efficiency) or <em>differentiation</em> (unique product commanding a premium), each firm-wide or focused on a niche. Stuck-in-the-middle firms earn neither premium nor cost advantage.</li></ul>",
     "vi": "<ul><li><strong>Vì sao phân tích ngành:</strong> yếu tố ngành giải thích phần lớn khác biệt về khả năng sinh lời; nó nuôi phân tích doanh nghiệp, định giá tương đối và chiến lược xoay vòng ngành. Các hệ thống phân loại (GICS…) gom doanh nghiệp theo hoạt động chính — nhưng hãy tự xây <em>nhóm so sánh</em> từ đối thủ, khách hàng, nhà cung cấp thực tế, đừng chỉ dựa mã ngành.</li><li><strong>Năm lực lượng của Porter</strong> quyết định khả năng sinh lời của ngành: (1) <em>đe dọa gia nhập mới</em> — yếu đi nhờ rào cản (quy mô, thương hiệu, bằng sáng chế, quy định, vốn); (2) <em>sức mạnh nhà cung cấp</em> — cao khi tập trung và đầu vào không có hàng thay thế; (3) <em>sức mạnh người mua</em> — cao khi đơn hàng lớn, sản phẩm chuẩn hóa, chuyển đổi rẻ; (4) <em>đe dọa hàng thay thế</em> — sản phẩm ngoài ngành chặn trần giá; (5) <em>cạnh tranh nội bộ</em> — khốc liệt nhất ở ngành phân mảnh, sản phẩm không khác biệt, chi phí cố định cao, tăng trưởng chậm. Chủ đề vĩ mô (PESTLE) và nhân khẩu học phủ lên các lực lượng này.</li><li><strong>Vòng đời ngành:</strong> <em>phôi thai</em> (tăng chậm, giá cao, đầu tư nặng) → <em>tăng trưởng</em> (cầu tăng nhanh, sinh lời cải thiện, giá giảm) → <em>sàng lọc (shakeout)</em> (tăng trưởng chậm lại, dư thừa công suất, kẻ yếu rời cuộc) → <em>trưởng thành</em> (hợp nhất, độc quyền nhóm ổn định, kỷ luật giá) → <em>suy thoái</em> (tăng trưởng âm, dư công suất, chiến tranh giá). Vị trí trong vòng đời quyết định giá trị đến từ tăng trưởng hay kiểm soát chi phí — và công nghệ có thể xáo trộn các giai đoạn.</li><li><strong>Định vị cạnh tranh:</strong> chiến lược tổng quát của Porter — <em>dẫn đầu chi phí</em> (chi phí thấp nhất, phòng thủ bằng quy mô/hiệu suất) hoặc <em>khác biệt hóa</em> (sản phẩm độc đáo bán giá cao), áp dụng toàn ngành hoặc tập trung ngách. Doanh nghiệp kẹt giữa không có cả giá cao lẫn lợi thế chi phí.</li></ul>"
    },
    {
     "h": "Five forces + life cycle applied: airlines vs software, side by side",
     "en": "<svg viewBox=\"0 0 720 340\" style=\"width:100%;height:auto;display:block;margin:14px 0;background:#fff;border:1px solid #E5E9F2;border-radius:12px\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Porter five forces\">\n<text x=\"360\" y=\"24\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" fill=\"#1B2438\">Five forces: what squeezes industry profitability</text>\n<rect x=\"270\" y=\"140\" width=\"180\" height=\"60\" rx=\"10\" fill=\"#5457E0\"/>\n<text x=\"360\" y=\"165\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12.5\" font-weight=\"700\" fill=\"#fff\">Rivalry among</text>\n<text x=\"360\" y=\"182\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12.5\" font-weight=\"700\" fill=\"#fff\">existing competitors</text>\n<rect x=\"270\" y=\"42\" width=\"180\" height=\"52\" rx=\"10\" fill=\"#EEF0FE\" stroke=\"#5457E0\"/>\n<text x=\"360\" y=\"63\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11.5\" font-weight=\"700\" fill=\"#4338CA\">Threat of new entrants</text>\n<text x=\"360\" y=\"80\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10\" fill=\"#5B6577\">barriers: scale, brands, regulation</text>\n<line x1=\"360\" y1=\"94\" x2=\"360\" y2=\"138\" stroke=\"#5B6577\" stroke-width=\"1.8\"/>\n<rect x=\"270\" y=\"248\" width=\"180\" height=\"52\" rx=\"10\" fill=\"#EEF0FE\" stroke=\"#5457E0\"/>\n<text x=\"360\" y=\"269\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11.5\" font-weight=\"700\" fill=\"#4338CA\">Threat of substitutes</text>\n<text x=\"360\" y=\"286\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10\" fill=\"#5B6577\">other ways to meet the need</text>\n<line x1=\"360\" y1=\"246\" x2=\"360\" y2=\"202\" stroke=\"#5B6577\" stroke-width=\"1.8\"/>\n<rect x=\"34\" y=\"144\" width=\"190\" height=\"52\" rx=\"10\" fill=\"#E7F6F0\" stroke=\"#0F9573\"/>\n<text x=\"129\" y=\"165\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11.5\" font-weight=\"700\" fill=\"#0F9573\">Supplier power</text>\n<text x=\"129\" y=\"182\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10\" fill=\"#5B6577\">few suppliers, unique inputs</text>\n<line x1=\"224\" y1=\"170\" x2=\"268\" y2=\"170\" stroke=\"#5B6577\" stroke-width=\"1.8\"/>\n<rect x=\"496\" y=\"144\" width=\"190\" height=\"52\" rx=\"10\" fill=\"#E7F6F0\" stroke=\"#0F9573\"/>\n<text x=\"591\" y=\"165\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11.5\" font-weight=\"700\" fill=\"#0F9573\">Buyer power</text>\n<text x=\"591\" y=\"182\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10\" fill=\"#5B6577\">concentrated, price-sensitive buyers</text>\n<line x1=\"494\" y1=\"170\" x2=\"452\" y2=\"170\" stroke=\"#5B6577\" stroke-width=\"1.8\"/>\n<text x=\"360\" y=\"326\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11.5\" fill=\"#8B5CF6\" font-weight=\"600\">Stronger forces → lower sustainable industry returns. Rate each force, don't just list them.</text>\n</svg>\n<p><strong>Rate the forces, don't recite them.</strong> Run two industries through the framework:</p>\n<table style=\"width:100%;border-collapse:collapse;font-size:13.5px;margin:10px 0\"><tr style=\"background:#EEF0FE\"><th style=\"padding:7px;border:1px solid #D6DAFB;text-align:left\">Force</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Airlines</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Enterprise software</th></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Rivalry</td><td style=\"padding:7px;border:1px solid #E5E9F2\"><strong>High</strong> — commodity seats, high fixed costs force price wars</td><td style=\"padding:7px;border:1px solid #E5E9F2\">Moderate — differentiated products</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">New entrants</td><td style=\"padding:7px;border:1px solid #E5E9F2\">Moderate — capital heavy but leasing lowers the bar</td><td style=\"padding:7px;border:1px solid #E5E9F2\">Low threat at scale — switching costs & ecosystems protect incumbents</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Substitutes</td><td style=\"padding:7px;border:1px solid #E5E9F2\">Rail, video conferencing on short/business routes</td><td style=\"padding:7px;border:1px solid #E5E9F2\">Few once workflows embed</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Supplier power</td><td style=\"padding:7px;border:1px solid #E5E9F2\"><strong>High</strong> — two airframers, unionized labor, fuel</td><td style=\"padding:7px;border:1px solid #E5E9F2\">Low — talent is the main input</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Buyer power</td><td style=\"padding:7px;border:1px solid #E5E9F2\">High — price-transparent, zero switching cost</td><td style=\"padding:7px;border:1px solid #E5E9F2\">Low-moderate — lock-in, multi-year contracts</td></tr></table>\n<p>Conclusion before any financials: airline economics are structurally squeezed from all five directions; software keeps most of the value it creates. That is why the same 10% revenue growth deserves very different multiples.</p>\n<svg viewBox=\"0 0 720 330\" style=\"width:100%;height:auto;display:block;margin:14px 0;background:#fff;border:1px solid #E5E9F2;border-radius:12px\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Industry life cycle\">\n<text x=\"360\" y=\"26\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" fill=\"#1B2438\">The industry life cycle</text>\n<line x1=\"60\" y1=\"270\" x2=\"690 \" y2=\"270\" stroke=\"#5B6577\" stroke-width=\"1.5\"/>\n<text x=\"686\" y=\"288\" text-anchor=\"end\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11.5\" fill=\"#5B6577\">Time</text>\n<text x=\"30\" y=\"66\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11.5\" fill=\"#5B6577\">Sales</text>\n<path d=\"M 65 262 C 130 258 160 240 200 205 C 250 162 290 118 350 100 C 380 92 420 94 470 108 C 520 122 560 128 600 132 C 640 136 665 148 685 168\" fill=\"none\" stroke=\"#5457E0\" stroke-width=\"3\"/>\n<line x1=\"150\" y1=\"270\" x2=\"150\" y2=\"70\" stroke=\"#E5E9F2\" stroke-width=\"1\"/>\n<line x1=\"300\" y1=\"270\" x2=\"300\" y2=\"70\" stroke=\"#E5E9F2\" stroke-width=\"1\"/>\n<line x1=\"440\" y1=\"270\" x2=\"440\" y2=\"70\" stroke=\"#E5E9F2\" stroke-width=\"1\"/>\n<line x1=\"590\" y1=\"270\" x2=\"590\" y2=\"70\" stroke=\"#E5E9F2\" stroke-width=\"1\"/>\n<text x=\"105\" y=\"88\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#B45309\">Embryonic</text>\n<text x=\"105\" y=\"103\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"9.5\" fill=\"#5B6577\">slow growth, high</text>\n<text x=\"105\" y=\"115\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"9.5\" fill=\"#5B6577\">prices, losses</text>\n<text x=\"225\" y=\"88\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#0F9573\">Growth</text>\n<text x=\"225\" y=\"103\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"9.5\" fill=\"#5B6577\">demand surges, falling</text>\n<text x=\"225\" y=\"115\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"9.5\" fill=\"#5B6577\">prices, low rivalry</text>\n<text x=\"370\" y=\"88\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#DC4848\">Shakeout</text>\n<text x=\"370\" y=\"103\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"9.5\" fill=\"#5B6577\">growth slows, overcapacity,</text>\n<text x=\"370\" y=\"115\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"9.5\" fill=\"#5B6577\">price wars, failures</text>\n<text x=\"515\" y=\"88\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#5457E0\">Mature</text>\n<text x=\"515\" y=\"103\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"9.5\" fill=\"#5B6577\">consolidation, stable</text>\n<text x=\"515\" y=\"115\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"9.5\" fill=\"#5B6577\">share, cash cows</text>\n<text x=\"645\" y=\"88\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#5B6577\">Decline</text>\n<text x=\"645\" y=\"103\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"9.5\" fill=\"#5B6577\">negative growth,</text>\n<text x=\"645\" y=\"115\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"9.5\" fill=\"#5B6577\">exit or consolidate</text>\n<text x=\"360\" y=\"312\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11.5\" fill=\"#8B5CF6\" font-weight=\"600\">Stages can reverse (technology change), and firms within a stage still differ — use it as a frame, not a law.</text>\n</svg>\n<p><strong>Place the industry on the curve, then invest accordingly.</strong> Embryonic: pay for optionality, expect losses. Growth: revenue quality beats margin; rivalry is low <em>because</em> demand outgrows capacity. Shakeout is the widow-maker stage — growth decelerates just as capacity built for the boom arrives; expect price wars and failures. Mature: cash generation, consolidation, discipline; returns hinge on oligopolistic restraint. Decline: manage for cash, consolidate, or exit. Two cautions the exam raises: technology can <em>restart</em> a life cycle (stages aren't destiny), and firm position ≠ industry stage — a niche player can grow in a mature industry.</p>\n<p><strong>Complete the toolkit:</strong> classification schemes (GICS-style sector → industry group → industry → sub-industry; cyclical vs defensive vs growth buckets; the caution that statistical clustering and government schemes group firms differently), PESTLE for external forces (political, economic, social, technological, legal, environmental), and the three generic competitive strategies — cost leadership, differentiation, focus — with the classic failure mode \"stuck in the middle.\" An industry analysis is complete when you can say: attractiveness (forces), stage (cycle), external risks (PESTLE), and how <em>this</em> firm positions within it.</p>",
     "vi": "<p><strong>Chấm điểm các lực, đừng đọc thuộc lòng.</strong> Chạy hai ngành qua khung (bảng): Hàng không — rivalry <strong>cao</strong> (ghế là hàng hóa, chi phí cố định cao ép chiến tranh giá), gia nhập vừa (nặng vốn nhưng thuê máy bay hạ rào), thay thế có (đường sắt, họp video tuyến ngắn), quyền lực nhà cung cấp <strong>cao</strong> (hai hãng chế tạo, lao động công đoàn, nhiên liệu), quyền lực người mua cao (giá minh bạch, chi phí chuyển đổi bằng 0). Phần mềm doanh nghiệp — rivalry vừa (sản phẩm khác biệt), gia nhập khó ở quy mô (chi phí chuyển đổi & hệ sinh thái), ít hàng thay thế khi quy trình đã bám rễ, nhà cung cấp yếu (đầu vào chính là nhân tài), người mua yếu-vừa (lock-in, hợp đồng nhiều năm).</p>\n<p>Kết luận trước khi xem bất kỳ báo cáo nào: kinh tế học hàng không bị siết cấu trúc từ cả năm hướng; phần mềm giữ được phần lớn giá trị nó tạo ra. Vì thế cùng mức tăng trưởng doanh thu 10% xứng đáng những mức định giá rất khác nhau.</p>\n<p><strong>Đặt ngành lên đường cong, rồi đầu tư tương ứng.</strong> Embryonic: trả tiền cho quyền chọn tương lai, chấp nhận lỗ. Growth: chất lượng doanh thu quan trọng hơn biên; rivalry thấp <em>vì</em> cầu vượt công suất. Shakeout là pha \"góa phụ\" — tăng trưởng giảm tốc đúng lúc công suất xây cho thời bùng nổ về đến nơi; chờ đón chiến tranh giá và phá sản. Mature: sinh tiền, hợp nhất, kỷ luật; lợi suất phụ thuộc sự kiềm chế kiểu oligopoly. Decline: vắt tiền, hợp nhất, hoặc rút. Hai cảnh báo đề nêu: công nghệ có thể <em>khởi động lại</em> vòng đời (pha không phải định mệnh), và vị thế công ty ≠ pha của ngành — người chơi ngách vẫn tăng trưởng trong ngành trưởng thành.</p>\n<p><strong>Hoàn thiện bộ đồ nghề:</strong> hệ phân loại (kiểu GICS: sector → industry group → industry → sub-industry; nhóm cyclical vs defensive vs growth; lưu ý phân cụm thống kê và hệ của chính phủ nhóm khác nhau), PESTLE cho lực bên ngoài (chính trị, kinh tế, xã hội, công nghệ, pháp lý, môi trường), và ba chiến lược cạnh tranh gốc — cost leadership, differentiation, focus — với kiểu thất bại kinh điển \"kẹt ở giữa\". Một phân tích ngành hoàn chỉnh khi bạn nói được: độ hấp dẫn (forces), pha (cycle), rủi ro ngoài (PESTLE), và công ty <em>này</em> định vị thế nào trong đó.</p>"
    }
   ]
  },
  {
   "title": "Company Analysis: Forecasting",
   "sections": [
    {
     "h": "Forecasting the company: objects, approaches & horizon",
     "en": "<ul><li><strong>Forecast objects:</strong> income statement first — revenue, operating costs, operating profit; then the balance-sheet items that follow from it (working capital via efficiency ratios, PP&amp;E via capex and depreciation) and the resulting cash flows. Non-operating items (interest, taxes) close the loop.</li><li><strong>Approaches — the same trio as FSA, applied per line:</strong> <em>top-down</em> (market size × share, or growth relative to GDP), <em>bottom-up</em> (price × volume, stores × sales per store, capacity), <em>hybrid</em> (bottom-up build reconciled to a top-down sanity check — most common in practice). Costs follow either revenue-linked ratios (COGS via gross margin) or driver-specific paths (wage inflation, input prices).</li><li><strong>Judgment layers:</strong> distinguish cyclical from structural growth; model <em>operating leverage</em> explicitly — with heavily fixed costs, small revenue changes swing margins violently; anchor long-horizon growth to sustainable rates (a firm cannot outgrow its market forever); use scenarios rather than a single path when uncertainty is high; and beware the behavioral biases (overconfidence, anchoring on the prior forecast, confirmation) covered in the FSA modeling module.</li></ul>",
     "vi": "<ul><li><strong>Đối tượng dự phóng:</strong> báo cáo KQKD trước — doanh thu, chi phí hoạt động, lợi nhuận hoạt động; rồi các khoản mục bảng cân đối kéo theo (vốn lưu động qua tỷ số hiệu quả, PP&amp;E qua capex và khấu hao) và dòng tiền tương ứng. Khoản mục ngoài hoạt động (lãi vay, thuế) khép vòng.</li><li><strong>Cách tiếp cận — bộ ba như bên FSA, áp cho từng dòng:</strong> <em>top-down</em> (quy mô thị trường × thị phần, hoặc tăng trưởng so với GDP), <em>bottom-up</em> (giá × sản lượng, số cửa hàng × doanh thu mỗi cửa hàng, công suất), <em>lai</em> (xây bottom-up rồi đối chiếu top-down — phổ biến nhất trong thực tế). Chi phí theo tỷ lệ gắn doanh thu (COGS qua biên gộp) hoặc theo driver riêng (lạm phát lương, giá đầu vào).</li><li><strong>Lớp phán đoán:</strong> phân biệt tăng trưởng chu kỳ và cơ cấu; mô hình hóa <em>đòn bẩy hoạt động</em> tường minh — chi phí cố định nặng khiến doanh thu đổi nhỏ mà biên đổi lớn; neo tăng trưởng dài hạn vào mức bền vững (không doanh nghiệp nào vượt thị trường mãi mãi); dùng kịch bản thay vì một đường duy nhất khi bất định cao; và cảnh giác các thiên lệch hành vi (quá tự tin, neo vào dự phóng cũ, thiên lệch xác nhận) đã học ở module modeling bên FSA.</li></ul>"
    },
    {
     "h": "Forecasting drills: objects, approaches & a top-down vs bottom-up build",
     "en": "<p><strong>What exactly gets forecast (the \"objects\"):</strong> income-statement drivers (revenue growth, margins) → balance-sheet needs (working capital via DSO/DOH/DPO, capex vs depreciation) → resulting capital structure and returns. The FSA modeling module built the machine; this module chooses the inputs.</p>\n<table style=\"width:100%;border-collapse:collapse;font-size:13.5px;margin:10px 0\"><tr style=\"background:#EEF0FE\"><th style=\"padding:7px;border:1px solid #D6DAFB;text-align:left\">Approach</th><th style=\"padding:7px;border:1px solid #D6DAFB\">How</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Best when</th></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Historical results</td><td style=\"padding:7px;border:1px solid #E5E9F2\">project past growth/margins forward</td><td style=\"padding:7px;border:1px solid #E5E9F2\">stable, mature businesses</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Historical base rates + convergence</td><td style=\"padding:7px;border:1px solid #E5E9F2\">start from peer/base-rate outcomes, converge firm toward them</td><td style=\"padding:7px;border:1px solid #E5E9F2\">disciplines optimistic forecasts (most 20%-growers slow down)</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Management guidance</td><td style=\"padding:7px;border:1px solid #E5E9F2\">anchor on company outlook</td><td style=\"padding:7px;border:1px solid #E5E9F2\">credible teams with track records — verify against incentives</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Analyst discretion</td><td style=\"padding:7px;border:1px solid #E5E9F2\">bespoke judgment (new products, turnarounds)</td><td style=\"padding:7px;border:1px solid #E5E9F2\">structural change makes history useless</td></tr></table>\n<p><strong>Top-down vs bottom-up worked on one revenue line.</strong> Top-down: market size $10bn growing 6% → next year $10.6bn; firm's share 4% rising to 4.3% on a new launch → revenue ≈ <strong>$456m</strong>. Bottom-up: 1,150 salespeople × $380k productivity = $437m; reconcile the $19m gap — either share gains are overestimated or sales capacity must grow. A <em>hybrid</em> approach that forces the two builds to agree is the practical standard and the exam's preferred answer: each build audits the other's assumptions.</p>\n<p><strong>Horizon and cyclicality.</strong> Choose a horizon long enough to end on a <em>normalized</em>, mid-cycle year — valuing a cyclical off peak earnings bakes the cycle's top into perpetuity (the classic value trap). For cyclicals, forecast through the cycle or use normalized margins; for non-cyclicals, steady-state assumptions arrive faster. Growth decays: model high growth explicitly for a finite stage, then converge to a sustainable rate ≤ nominal GDP growth — which is precisely the architecture the two-stage valuation models in module 7 assume.</p>",
     "vi": "<p><strong>Chính xác thì dự phóng cái gì (\"objects\"):</strong> động lực income statement (tăng trưởng doanh thu, biên) → nhu cầu balance sheet (vốn lưu động qua DSO/DOH/DPO, capex vs khấu hao) → cấu trúc vốn và suất sinh lời hệ quả. Module modeling ở FSA đã dựng cỗ máy; module này chọn đầu vào.</p>\n<p><strong>Bốn cách tiếp cận (bảng):</strong> kết quả lịch sử — chiếu tăng trưởng/biên quá khứ về phía trước, hợp doanh nghiệp ổn định trưởng thành; base rates lịch sử + hội tụ — xuất phát từ kết quả của nhóm tương đồng, cho công ty hội tụ dần về đó, kỷ luật hóa dự báo lạc quan (đa số công ty tăng 20% sẽ chậm lại); guidance của ban điều hành — neo theo triển vọng công ty, khi đội ngũ đáng tin có thành tích — đối chiếu với động cơ của họ; phán đoán của nhà phân tích — tùy biến (sản phẩm mới, turnaround) khi thay đổi cấu trúc làm lịch sử vô dụng.</p>\n<p><strong>Top-down vs bottom-up trên cùng một dòng doanh thu.</strong> Top-down: quy mô thị trường $10 tỷ tăng 6% → năm tới $10,6 tỷ; thị phần công ty 4% lên 4,3% nhờ sản phẩm mới → doanh thu ≈ <strong>$456tr</strong>. Bottom-up: 1.150 nhân viên bán hàng × năng suất $380k = $437tr; đối chiếu khoảng hở $19tr — hoặc thị phần ước cao, hoặc phải tăng năng lực bán hàng. Cách <em>hybrid</em> buộc hai phép dựng khớp nhau là chuẩn thực hành và là đáp án đề ưa thích: mỗi phép dựng kiểm toán giả định của phép kia.</p>\n<p><strong>Kỳ hạn và tính chu kỳ.</strong> Chọn kỳ dự phóng đủ dài để kết thúc ở năm <em>bình thường hóa</em> giữa chu kỳ — định giá công ty chu kỳ trên lợi nhuận đỉnh là nướng cái đỉnh vào vĩnh viễn (bẫy giá trị kinh điển). Với công ty chu kỳ, dự phóng xuyên chu kỳ hoặc dùng biên bình thường hóa; với công ty phi chu kỳ, trạng thái dừng đến nhanh hơn. Tăng trưởng phân rã: mô hình hóa tăng trưởng cao tường minh trong một giai đoạn hữu hạn, rồi hội tụ về mức bền vững ≤ tăng trưởng GDP danh nghĩa — đúng kiến trúc mà các mô hình định giá hai giai đoạn của module 7 giả định.</p>"
    }
   ],
   "formulas": [
    [
     "Top-down revenue",
     "market size × market share (× price)",
     "Reconcile against a bottom-up build (capacity × productivity)."
    ]
   ]
  },
  {
   "title": "Equity Valuation: Concepts and Basic Tools",
   "sections": [
    {
     "h": "Three families of valuation models",
     "en": "<p>Every equity valuation tool belongs to one of three families — the exam loves asking which is appropriate when:</p><ul><li><strong>Present-value (discounted cash flow) models:</strong> dividend discount models for stable dividend payers, and free-cash-flow-to-equity (FCFE) models when dividends don’t reflect capacity to pay — value = PV of expected cash flows. Most defensible theoretically; most sensitive to assumptions.</li><li><strong>Multiplier models:</strong> price multiples (P/E, P/B, P/S, P/CF) compared with peers or history — fast, market-anchored, but relative: a cheap stock in an expensive sector may still be dear. Enterprise-value multiples (EV/EBITDA) neutralize capital-structure differences.</li><li><strong>Asset-based models:</strong> value = fair value of assets − liabilities — best for firms whose assets are separable and marketable (natural resources, financials, liquidations); weakest where intangibles and going-concern value dominate.</li></ul><p>Method choice follows the firm: dividend payers with stable policies → DDM; non-payers or volatile payout → FCFE or multiples; asset-heavy or distressed → asset-based; and in practice analysts triangulate with more than one.</p>",
     "vi": "<p>Mọi công cụ định giá cổ phiếu thuộc một trong ba họ — đề thi rất hay hỏi trường hợp nào dùng họ nào:</p><ul><li><strong>Mô hình hiện giá (chiết khấu dòng tiền):</strong> mô hình chiết khấu cổ tức cho doanh nghiệp trả cổ tức ổn định, và mô hình FCFE khi cổ tức không phản ánh khả năng chi trả — giá trị = PV dòng tiền kỳ vọng. Vững nhất về lý thuyết; nhạy nhất với giả định.</li><li><strong>Mô hình bội số:</strong> bội số giá (P/E, P/B, P/S, P/CF) so với doanh nghiệp cùng ngành hoặc lịch sử — nhanh, neo vào thị trường, nhưng có tính tương đối: cổ phiếu rẻ trong ngành đắt vẫn có thể đắt. Bội số theo giá trị doanh nghiệp (EV/EBITDA) trung hòa khác biệt cấu trúc vốn.</li><li><strong>Mô hình dựa trên tài sản:</strong> giá trị = giá trị hợp lý tài sản − nợ — hợp nhất với doanh nghiệp có tài sản tách bạch, dễ bán (tài nguyên, tài chính, thanh lý); yếu nhất khi tài sản vô hình và giá trị hoạt động liên tục chiếm ưu thế.</li></ul><p>Chọn phương pháp theo doanh nghiệp: trả cổ tức ổn định → DDM; không trả hoặc chi trả thất thường → FCFE hoặc bội số; nặng tài sản hoặc kiệt quệ → asset-based; thực tế analyst thường dùng nhiều hơn một phương pháp để đối chiếu.</p>"
    },
    {
     "h": "Dividend discount models",
     "en": "<p>Value = present value of expected future cash flows to the shareholder. For a dividend-paying firm with stable growth, the <strong>Gordon growth model</strong>:</p><p><strong>V₀ = D₁ / (r − g)</strong>, where D₁ = D₀(1 + g) is <em>next year’s</em> dividend, r = required return, g = sustainable growth. Requires r &gt; g and stable growth. Value is extremely sensitive to (r − g).</p><ul><li><strong>Sustainable growth:</strong> g = retention ratio × ROE = (1 − payout) × ROE.</li><li><strong>Multistage models</strong> handle high-growth phases before maturity: discount the short-term dividends plus the terminal value from Gordon growth at the point growth stabilizes.</li><li>For non-dividend payers, use <strong>FCFE</strong> models (value = PV of free cash flow to equity at r) or multiples.</li><li>Preferred stock = a perpetuity: V = D / r.</li></ul>",
     "vi": "<p>Giá trị = hiện giá dòng tiền kỳ vọng cho cổ đông. Với công ty trả cổ tức tăng trưởng ổn định, <strong>mô hình Gordon</strong>:</p><p><strong>V₀ = D₁ / (r − g)</strong>, trong đó D₁ = D₀(1 + g) là cổ tức <em>năm tới</em>, r = tỷ suất yêu cầu, g = tăng trưởng bền vững. Điều kiện r &gt; g và tăng trưởng ổn định. Giá trị cực kỳ nhạy với (r − g).</p><ul><li><strong>Tăng trưởng bền vững:</strong> g = tỷ lệ giữ lại × ROE = (1 − tỷ lệ chi trả) × ROE.</li><li><strong>Mô hình nhiều giai đoạn</strong> xử lý pha tăng trưởng cao trước khi bão hòa: chiết khấu cổ tức ngắn hạn + giá trị cuối kỳ tính bằng Gordon tại thời điểm tăng trưởng ổn định.</li><li>Công ty không trả cổ tức: dùng mô hình <strong>FCFE</strong> hoặc hệ số so sánh.</li><li>Cổ phiếu ưu đãi = perpetuity: V = D / r.</li></ul>"
    },
    {
     "h": "Price multiples and enterprise value",
     "en": "<ul><li><strong>P/E:</strong> justified forward P/E from Gordon growth = payout ratio / (r − g). Drawbacks: negative or manipulated earnings.</li><li><strong>P/B:</strong> useful for financial firms; distorted by intangibles and buybacks.</li><li><strong>P/S:</strong> works for unprofitable firms; ignores cost structure.</li><li><strong>P/CF:</strong> less manipulable than earnings.</li><li><strong>EV/EBITDA:</strong> Enterprise value = market cap + debt + preferred − cash. Capital-structure neutral; useful for comparing firms with different leverage.</li><li>Method of comparables: a stock trading at a lower multiple than peers is <em>relatively</em> undervalued — but the whole peer group may be mispriced (relative ≠ intrinsic).</li></ul>",
     "vi": "<ul><li><strong>P/E:</strong> P/E hợp lý từ Gordon = tỷ lệ chi trả / (r − g). Nhược: lợi nhuận âm hoặc bị \"xào nấu\".</li><li><strong>P/B:</strong> hữu ích với công ty tài chính; méo mó bởi tài sản vô hình và mua lại cổ phiếu.</li><li><strong>P/S:</strong> dùng được cho công ty chưa có lãi; bỏ qua cơ cấu chi phí.</li><li><strong>P/CF:</strong> khó thao túng hơn lợi nhuận.</li><li><strong>EV/EBITDA:</strong> EV = vốn hóa + nợ + CP ưu đãi − tiền mặt. Trung lập với cấu trúc vốn; tốt khi so sánh công ty có đòn bẩy khác nhau.</li><li>Phương pháp so sánh: cổ phiếu có hệ số thấp hơn nhóm tương đồng chỉ là rẻ <em>tương đối</em> — cả nhóm có thể đang bị định giá sai (tương đối ≠ nội tại).</li></ul>"
    },
    {
     "h": "Valuation lab: two-stage DDM, justified multiples & EV — one company, every tool",
     "en": "<p><strong>The company:</strong> D₀ = $1.00, r = 10%. Dividends grow 20% for two years, then 4% forever. ROE = 12.5%, payout 40% → sustainable g check: b × ROE = 0.6 × 12.5% = 7.5% (used later).</p>\n<svg viewBox=\"0 0 720 300\" style=\"width:100%;height:auto;display:block;margin:14px 0;background:#fff;border:1px solid #E5E9F2;border-radius:12px\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Two-stage dividend discount model timeline\">\n<text x=\"360\" y=\"26\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" fill=\"#1B2438\">Two-stage DDM: discount the near years, then one terminal value</text>\n<line x1=\"70\" y1=\"140\" x2=\"670\" y2=\"140\" stroke=\"#1B2438\" stroke-width=\"2\"/>\n<g stroke=\"#1B2438\" stroke-width=\"2\"><line x1=\"70\" y1=\"132\" x2=\"70\" y2=\"148\"/><line x1=\"230\" y1=\"132\" x2=\"230\" y2=\"148\"/><line x1=\"390\" y1=\"132\" x2=\"390\" y2=\"148\"/><line x1=\"550\" y1=\"132\" x2=\"550\" y2=\"148\"/></g>\n<text x=\"70\" y=\"164\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11\" fill=\"#5B6577\">t=0</text>\n<text x=\"230\" y=\"164\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11\" fill=\"#5B6577\">t=1</text>\n<text x=\"390\" y=\"164\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11\" fill=\"#5B6577\">t=2</text>\n<text x=\"550\" y=\"164\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11\" fill=\"#5B6577\">t=3 …</text>\n<text x=\"230\" y=\"112\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#5457E0\">D₁ = 1.20</text>\n<text x=\"390\" y=\"112\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#5457E0\">D₂ = 1.44</text>\n<text x=\"230\" y=\"94\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10\" fill=\"#5B6577\">g = 20%</text>\n<text x=\"390\" y=\"94\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10\" fill=\"#5B6577\">g = 20%</text>\n<text x=\"558\" y=\"94\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10\" fill=\"#0F9573\">g = 4% forever</text>\n<rect x=\"470\" y=\"102\" width=\"176\" height=\"24\" rx=\"6\" fill=\"#E7F6F0\" stroke=\"#0F9573\"/>\n<text x=\"558\" y=\"118\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#0F9573\">TV₂ = D₃/(r − g) = 24.96</text>\n<path d=\"M 230 176 C 210 200 160 212 108 214\" stroke=\"#5457E0\" stroke-width=\"1.5\" fill=\"none\"/>\n<path d=\"M 390 176 C 340 214 200 224 110 224\" stroke=\"#5457E0\" stroke-width=\"1.5\" fill=\"none\"/>\n<path d=\"M 552 130 C 545 210 260 236 112 234\" stroke=\"#0F9573\" stroke-width=\"1.5\" fill=\"none\"/>\n<rect x=\"40\" y=\"196\" width=\"70 \" height=\"52\" rx=\"8\" fill=\"#5457E0\"/>\n<text x=\"75\" y=\"218\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#fff\">V₀ =</text>\n<text x=\"75\" y=\"235\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11\" font-weight=\"700\" fill=\"#fff\">22.29</text>\n<text x=\"400\" y=\"272\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11.5\" fill=\"#8B5CF6\" font-weight=\"600\">V₀ = 1.20/1.10 + 1.44/1.10² + 24.96/1.10² — the terminal value sits at t=2, so discount it two periods.</text>\n</svg>\n<p><strong>Two-stage DDM worked.</strong> D₁ = 1.20, D₂ = 1.44, D₃ = 1.44 × 1.04 = 1.4976. Terminal value at t=2: TV₂ = 1.4976/(0.10 − 0.04) = <strong>24.96</strong>. V₀ = 1.20/1.10 + (1.44 + 24.96)/1.10² = 1.091 + 21.82 = <strong>$22.91</strong> — note ~91% of value sits in the terminal piece, which is why g and r assumptions dominate every DCF debate. Gordon shortcut check with g = 4% from today: V₀ = 1.04/0.06 = 17.33 — the two high-growth years add ~$5.6. Sensitivity: raise g to 5% and TV jumps to 29.95 (+20%); the model explodes as g → r, so keep g ≤ nominal GDP growth.</p>\n<p><strong>Preferred and no-growth checks:</strong> a fixed-dividend preferred is Gordon with g = 0 (module 3's $62.50). For non-dividend payers, switch to FCFE (what <em>could</em> be paid): V₀ = expected FCFE discounted at r.</p>\n<p><strong>Justified multiples from the same fundamentals.</strong> Justified forward P/E = payout/(r − g) = 0.40/0.06 = <strong>6.7×</strong> at steady state; with the 7.5% sustainable g (payout 40%, ROE 12.5%): 0.40/0.025 = <strong>16×</strong> — see how the entire multiple is a compressed statement about r, g, and payout. Comparables logic: price the firm at peers' multiples, but only after asking <em>why</em> multiples differ — higher ROIC, growth, or lower risk justify premiums; \"cheap vs peers\" alone is the value-trap setup. Trailing vs forward P/E, P/B (best for financials, asset-heavy firms; justified P/B = (ROE − g)/(r − g)), P/S (for loss-makers; ignores costs), P/CF (harder to manipulate).</p>\n<p><strong>Enterprise value worked.</strong> Market cap 800, debt 300, preferred 50, cash 150 → EV = <strong>1,000</strong>. EBITDA 125 → EV/EBITDA = <strong>8×</strong>. Use EV multiples to compare firms with different leverage (EV is capital-structure-neutral) and EBITDA when depreciation policies differ; weaknesses — EBITDA ignores capex and working capital entirely. <strong>Asset-based valuation</strong> (adjusted net asset value) suits firms whose assets have determinable market values — natural resources, investment holdings, liquidations — and floors the valuation elsewhere. Model choice summary: DDM for stable payers; FCFE for non-payers or control perspectives; multiples for relative checks; asset-based for tangible-asset firms. Use at least two families and reconcile.</p>",
     "vi": "<p><strong>Công ty:</strong> D₀ = $1,00, r = 10%. Cổ tức tăng 20% trong hai năm, rồi 4% vĩnh viễn. ROE = 12,5%, payout 40% → kiểm tra g bền vững: b × ROE = 0,6 × 12,5% = 7,5% (dùng ở dưới).</p>\n<p><strong>DDM hai giai đoạn giải trọn.</strong> D₁ = 1,20, D₂ = 1,44, D₃ = 1,44 × 1,04 = 1,4976. Giá trị cuối tại t=2: TV₂ = 1,4976/(0,10 − 0,04) = <strong>24,96</strong>. V₀ = 1,20/1,10 + (1,44 + 24,96)/1,10² = 1,091 + 21,82 = <strong>$22,91</strong> — chú ý ~91% giá trị nằm ở phần terminal, vì thế giả định g và r thống trị mọi tranh luận DCF. Kiểm tra nhanh Gordon với g = 4% từ hôm nay: V₀ = 1,04/0,06 = 17,33 — hai năm tăng trưởng cao cộng thêm ~$5,6. Độ nhạy: nâng g lên 5% thì TV vọt lên 29,95 (+20%); mô hình nổ tung khi g → r, nên giữ g ≤ tăng trưởng GDP danh nghĩa.</p>\n<p><strong>Kiểm tra ưu đãi và không tăng trưởng:</strong> ưu đãi cổ tức cố định là Gordon với g = 0 ($62,50 ở module 3). Với công ty không trả cổ tức, chuyển sang FCFE (phần <em>có thể</em> trả): V₀ = FCFE kỳ vọng chiết khấu tại r.</p>\n<p><strong>Justified multiples từ cùng bộ nền tảng.</strong> Justified forward P/E = payout/(r − g) = 0,40/0,06 = <strong>6,7×</strong> ở trạng thái dừng; với g bền vững 7,5% (payout 40%, ROE 12,5%): 0,40/0,025 = <strong>16×</strong> — thấy rõ cả bội số chỉ là phát biểu nén của r, g, payout. Logic so sánh: định giá theo bội số của nhóm tương đồng, nhưng chỉ sau khi hỏi <em>vì sao</em> bội số khác nhau — ROIC cao hơn, tăng trưởng, hay rủi ro thấp hơn biện minh cho premium; \"rẻ hơn peers\" đơn thuần là công thức bẫy giá trị. Trailing vs forward P/E, P/B (hợp tài chính, công ty nặng tài sản; justified P/B = (ROE − g)/(r − g)), P/S (cho công ty lỗ; bỏ qua chi phí), P/CF (khó thao túng hơn).</p>\n<p><strong>Enterprise value bằng ví dụ.</strong> Vốn hóa 800, nợ 300, ưu đãi 50, tiền 150 → EV = <strong>1.000</strong>. EBITDA 125 → EV/EBITDA = <strong>8×</strong>. Dùng bội số EV để so công ty khác đòn bẩy (EV trung tính với cấu trúc vốn) và EBITDA khi chính sách khấu hao khác nhau; điểm yếu — EBITDA bỏ qua hoàn toàn capex và vốn lưu động. <strong>Định giá theo tài sản</strong> (giá trị tài sản thuần điều chỉnh) hợp công ty có tài sản định giá được trên thị trường — tài nguyên, holding đầu tư, thanh lý — và làm sàn cho các cách khác. Tóm tắt chọn mô hình: DDM cho công ty trả cổ tức ổn định; FCFE cho công ty không trả hoặc góc nhìn kiểm soát; multiples để kiểm tra tương đối; asset-based cho công ty tài sản hữu hình. Dùng ít nhất hai họ và đối chiếu kết quả.</p>"
    }
   ],
   "formulas": [
    [
     "Gordon growth",
     "V0 = D1 / (r − g)",
     "D1 = D0(1+g); requires r > g"
    ],
    [
     "Sustainable growth",
     "g = b × ROE",
     "b = retention ratio = 1 − payout"
    ],
    [
     "Justified forward P/E",
     "P0/E1 = payout / (r − g)",
     ""
    ],
    [
     "Enterprise value",
     "EV = Market cap + Debt + Preferred − Cash",
     ""
    ],
    [
     "Two-stage DDM",
     "V0 = Σ Dt/(1+r)^t + [D_{n+1}/(r − g)]/(1+r)^n",
     "Terminal value sits at time n — discount it n periods."
    ],
    [
     "Justified P/B",
     "P/B = (ROE − g)/(r − g)",
     "ROE above r justifies a premium to book."
    ],
    [
     "FCFE valuation",
     "V0 = Σ expected FCFE_t /(1+r)^t",
     "For non-dividend payers: value what COULD be paid."
    ]
   ]
  }
 ],
 "vocab": [
  [
   "free float",
   "Shares actually available for public trading.",
   "lượng cổ phiếu tự do chuyển nhượng"
  ],
  [
   "short covering",
   "Buying back shares to close a short position.",
   "mua bù vị thế bán khống"
  ],
  [
   "bid–ask spread",
   "Difference between best buy and sell quotes; a liquidity cost.",
   "chênh lệch giá mua–bán"
  ],
  [
   "IPO / secondary offering",
   "First-time vs subsequent public share sale.",
   "phát hành lần đầu / phát hành bổ sung"
  ],
  [
   "intrinsic value",
   "Value based on fundamentals, independent of market price.",
   "giá trị nội tại"
  ],
  [
   "required rate of return",
   "Minimum return an investor demands given risk.",
   "tỷ suất sinh lời yêu cầu"
  ],
  [
   "terminal value",
   "Value of all cash flows beyond the explicit forecast horizon.",
   "giá trị cuối kỳ dự phóng"
  ],
  [
   "payout ratio",
   "Dividends as a share of earnings.",
   "tỷ lệ chi trả cổ tức"
  ],
  [
   "cyclical / defensive",
   "Earnings highly / weakly sensitive to the business cycle.",
   "ngành chu kỳ / phòng thủ"
  ],
  [
   "GDR / ADR",
   "Depository receipts allowing foreign shares to trade locally.",
   "chứng chỉ lưu ký"
  ],
  [
   "broker vs dealer",
   "Agent matching orders for commission vs principal trading own inventory for the spread",
   "Đại lý khớp lệnh ăn hoa hồng vs tự doanh ăn chênh lệch giá"
  ],
  [
   "clearinghouse",
   "Guarantees trade performance via novation and margin, cutting counterparty risk",
   "Trung tâm bù trừ — bảo đảm thực hiện giao dịch, giảm rủi ro đối tác"
  ],
  [
   "rebalancing vs reconstitution",
   "Restoring index weights vs changing index membership",
   "Khôi phục tỷ trọng chỉ số vs thay đổi danh sách thành viên"
  ],
  [
   "cumulative preference shares",
   "Unpaid preferred dividends accrue and must be cleared before common dividends",
   "Cổ phiếu ưu đãi tích lũy — cổ tức chưa trả dồn lại, phải trả trước cổ tức phổ thông"
  ],
  [
   "statutory vs cumulative voting",
   "One vote per share per seat vs concentrating all votes on one candidate",
   "Biểu quyết luật định vs dồn phiếu (bảo vệ cổ đông thiểu số)"
  ],
  [
   "depository receipt (ADR/GDR)",
   "Locally traded receipt on foreign shares held by a bank; sponsored DRs carry votes",
   "Chứng chỉ lưu ký trên cổ phiếu ngoại; loại có bảo trợ kèm quyền biểu quyết"
  ],
  [
   "Porter’s five forces",
   "Entrants, suppliers, buyers, substitutes, rivalry — determinants of industry profitability",
   "Năm lực lượng quyết định khả năng sinh lời của ngành"
  ],
  [
   "industry life cycle",
   "Embryonic → growth → shakeout → mature → decline",
   "Vòng đời ngành: phôi thai → tăng trưởng → sàng lọc → trưởng thành → suy thoái"
  ],
  [
   "cost leadership vs differentiation",
   "Porter’s generic strategies: lowest cost, or a unique product commanding a premium",
   "Hai chiến lược tổng quát: dẫn đầu chi phí hoặc khác biệt hóa"
  ],
  [
   "pricing power",
   "Ability to raise prices without losing volume; from differentiation and switching costs",
   "Sức mạnh định giá — tăng giá mà không mất sản lượng"
  ]
 ],
 "quiz": [
  {
   "q": "A stock will pay a dividend of $2.00 next year (D1). Dividends grow at 4% forever and the required return is 9%. The stock’s intrinsic value is closest to:",
   "opts": [
    "$40.00",
    "$41.60",
    "$50.00"
   ],
   "ans": 0,
   "en": "A is correct. V0 = D1/(r − g) = 2.00/(0.09 − 0.04) = 2.00/0.05 = $40.00. Careful: the $2.00 is already D1; multiplying by (1+g) again — giving $41.60 — is the classic trap.",
   "vi": "Đáp án A. V0 = D1/(r − g) = 2.00/0.05 = 40 USD. Cẩn thận: 2.00 đã là D1; nhân thêm (1+g) để ra 41.60 chính là bẫy kinh điển."
  },
  {
   "q": "If markets are semi-strong form efficient, which activity can still be expected to produce consistent abnormal returns?",
   "opts": [
    "Technical analysis of price patterns",
    "Fundamental analysis of published financial statements",
    "Trading on material nonpublic information"
   ],
   "ans": 2,
   "en": "C is correct (as a matter of theory — it is illegal and unethical). Semi-strong efficiency means all public information (past prices AND fundamentals) is already in prices; only private information confers an edge. Strong-form efficiency would eliminate even that edge.",
   "vi": "Đáp án C (về mặt lý thuyết — hành vi này phi pháp và phi đạo đức). Thị trường hiệu quả bán mạnh nghĩa là mọi thông tin công khai (gồm cả giá quá khứ VÀ dữ liệu cơ bản) đã nằm trong giá; chỉ thông tin riêng tư mới tạo lợi thế. Dạng mạnh sẽ triệt tiêu cả lợi thế đó."
  },
  {
   "q": "An investor buys shares at $50 on 50% initial margin with a 25% maintenance margin. Ignoring costs, the margin call price is closest to:",
   "opts": [
    "$25.00",
    "$33.33",
    "$37.50"
   ],
   "ans": 1,
   "en": "B is correct. Margin call price = P0 × (1 − IM)/(1 − MM) = 50 × (1 − 0.50)/(1 − 0.25) = 50 × 0.50/0.75 = $33.33.",
   "vi": "Đáp án B. Giá margin call = 50 × (1 − 0.50)/(1 − 0.25) = 50 × 0.6667 = 33.33 USD."
  },
  {
   "q": "Compared with a market-cap-weighted index of the same stocks, an equal-weighted index most likely has:",
   "opts": [
    "a tilt toward small-cap stocks and higher rebalancing needs.",
    "a tilt toward the largest stocks.",
    "identical performance if no stocks are added or removed."
   ],
   "ans": 0,
   "en": "A is correct. Equal weighting gives small companies the same weight as giants — a small-cap tilt — and prices drift away from equal weights daily, so the index requires regular rebalancing (with associated transaction costs).",
   "vi": "Đáp án A. Tỷ trọng bằng nhau cho công ty nhỏ trọng số ngang công ty khổng lồ — nghiêng về vốn hóa nhỏ — và giá biến động khiến trọng số lệch khỏi mức bằng nhau mỗi ngày, nên phải tái cân bằng thường xuyên (kèm chi phí giao dịch)."
  },
  {
   "q": "A firm retains 60% of earnings and earns an ROE of 15%. Its sustainable growth rate is closest to:",
   "opts": [
    "6.0%",
    "9.0%",
    "15.0%"
   ],
   "ans": 1,
   "en": "B is correct. g = retention ratio × ROE = 0.60 × 15% = 9.0%. This g feeds directly into the Gordon growth model.",
   "vi": "Đáp án B. g = tỷ lệ giữ lại × ROE = 0.60 × 15% = 9%. Giá trị g này được dùng trực tiếp trong mô hình Gordon."
  }
 ]
});
window.CFA.extra["equity"] = {
 "checks": [
  [
   {
    "q": "An investor buys stock at $40 on 50% initial margin with a 25% maintenance margin. The margin-call price is closest to:",
    "opts": [
     "$26.67",
     "$30.00",
     "$20.00"
    ],
    "ans": 0,
    "en": "Call price = P₀(1 − IM)/(1 − MM) = 40 × 0.5 / 0.75 ≈ $26.67.",
    "vi": "Giá margin call = 40 × (1 − 0,5)/(1 − 0,25) ≈ 26,67 USD. Dưới mức này phải nộp thêm ký quỹ."
   },
   {
    "q": "A market participant who stands ready to buy and sell from his own inventory, profiting from the bid–ask spread, is a:",
    "opts": [
     "Broker",
     "Dealer",
     "Clearinghouse"
    ],
    "ans": 1,
    "en": "Dealers supply immediacy by trading their own account; brokers merely match buyers and sellers as agents; clearinghouses guarantee settlement.",
    "vi": "Dealer cung cấp tính tức thời bằng cách giao dịch trên tài khoản của chính mình; broker chỉ khớp người mua–bán như đại lý; clearinghouse bảo đảm thanh toán."
   },
   {
    "q": "Buy at $60 with 40% initial and 25% maintenance margin. The margin call price is closest to:",
    "opts": [
     "$36",
     "$48",
     "$45"
    ],
    "ans": 1,
    "en": "P = 60 × (1 − 0.40)/(1 − 0.25) = 60 × 0.6/0.75 = $48.",
    "vi": "P = 60 × (1 − 0,40)/(1 − 0,25) = 60 × 0,6/0,75 = $48."
   },
   {
    "q": "A trader wants to guarantee execution price but is willing to risk not trading at all. The order is a:",
    "opts": [
     "Market order",
     "Limit order",
     "Stop order"
    ],
    "ans": 1,
    "en": "Limit orders guarantee price (or better) but not execution; market orders guarantee execution but not price.",
    "vi": "Lệnh limit bảo đảm giá (hoặc tốt hơn) nhưng không bảo đảm khớp; lệnh thị trường thì ngược lại."
   }
  ],
  [
   {
    "q": "In a price-weighted index, the largest influence comes from the stock with the:",
    "opts": [
     "Largest market capitalization",
     "Highest price per share",
     "Largest free float"
    ],
    "ans": 1,
    "en": "Price weighting (e.g., DJIA) gives more weight to high-priced shares regardless of company size — and requires divisor adjustments for splits.",
    "vi": "Chỉ số theo giá (như DJIA) cho cổ phiếu thị giá cao ảnh hưởng lớn nhất, bất kể quy mô công ty; phải điều chỉnh divisor khi chia tách cổ phiếu."
   },
   {
    "q": "An index provider deletes three securities that no longer meet inclusion rules and adds three others. This process is called:",
    "opts": [
     "Rebalancing",
     "Reconstitution",
     "Rebasing"
    ],
    "ans": 1,
    "en": "Reconstitution changes the membership list; rebalancing merely restores constituent weights to target.",
    "vi": "Reconstitution thay đổi danh sách thành viên; rebalancing chỉ khôi phục tỷ trọng về mục tiêu."
   },
   {
    "q": "A high-priced stock splits 2-for-1. In a price-weighted index, the immediate effect is:",
    "opts": [
     "The index level falls",
     "The divisor is reduced and the stock's weight falls",
     "The stock's weight is unchanged"
    ],
    "ans": 1,
    "en": "The divisor is adjusted to keep the level unchanged, but the stock's weight drops with its price — no economic event occurred.",
    "vi": "Divisor được điều chỉnh giữ nguyên mức chỉ số, nhưng trọng số cổ phiếu rơi theo giá — dù không có sự kiện kinh tế nào."
   },
   {
    "q": "Which weighting scheme requires the most frequent rebalancing trades?",
    "opts": [
     "Market-cap-weighted",
     "Equal-weighted",
     "Float-adjusted cap-weighted"
    ],
    "ans": 1,
    "en": "Equal weights drift with every price move; restoring them means constantly trimming winners and adding losers. Cap weights rebalance themselves.",
    "vi": "Trọng số bằng nhau trôi theo mọi biến động giá; khôi phục nghĩa là liên tục cắt người thắng, thêm người thua. Trọng số vốn hóa tự cân bằng."
   }
  ],
  [
   {
    "q": "If markets are semi-strong-form efficient, which activity should NOT consistently produce abnormal returns?",
    "opts": [
     "Trading on insider information",
     "Fundamental analysis of public financial statements",
     "Both technical and fundamental analysis on private information"
    ],
    "ans": 1,
    "en": "Semi-strong efficiency: prices already reflect all public information, so analysis of public data (fundamental or technical) cannot consistently beat the market; insider trading still could.",
    "vi": "Hiệu quả dạng vừa: giá đã phản ánh mọi thông tin công khai → phân tích cơ bản trên dữ liệu công khai không thể thắng thị trường bền vững; chỉ thông tin nội gián mới có thể."
   },
   {
    "q": "Persistent momentum and calendar anomalies, if genuinely exploitable, are evidence against which form of market efficiency?",
    "opts": [
     "Weak form",
     "Strong form only",
     "Neither — anomalies support efficiency"
    ],
    "ans": 0,
    "en": "Momentum and calendar effects rely on past price patterns — exploitable patterns in past prices contradict weak-form efficiency (and everything stronger).",
    "vi": "Hiệu ứng momentum/lịch dựa trên chuỗi giá quá khứ — nếu khai thác được thì mâu thuẫn với hiệu quả dạng yếu (và các dạng mạnh hơn)."
   },
   {
    "q": "Prices fully reflect all public information but insiders earn abnormal returns. The market is:",
    "opts": [
     "Weak-form efficient only",
     "Semi-strong-form efficient",
     "Strong-form efficient"
    ],
    "ans": 1,
    "en": "Semi-strong includes public info (and weak); strong form — private info too — fails when insiders profit.",
    "vi": "Semi-strong bao gồm thông tin công khai (và weak); strong form — cả thông tin riêng — thất bại khi nội gián có lãi."
   },
   {
    "q": "An 'anomaly' disappears when tested on new data after publication. The most likely explanation is:",
    "opts": [
     "Markets became less efficient",
     "Data mining in the original study",
     "The risk model was too conservative"
    ],
    "ans": 1,
    "en": "Patterns found by scouring past data often aren't real; out-of-sample failure is the signature of data mining (plus arbitrage erasing real ones).",
    "vi": "Các mẫu hình đào từ dữ liệu quá khứ thường không thật; thất bại ngoài mẫu là dấu hiệu data mining (cộng arbitrage xóa mẫu hình thật)."
   }
  ],
  [
   {
    "q": "A company skips two years of dividends on its cumulative preference shares, then wants to resume common dividends. It must first:",
    "opts": [
     "Obtain preference shareholders’ approval by vote",
     "Pay all preference dividends in arrears",
     "Convert the preference shares to common"
    ],
    "ans": 1,
    "en": "Cumulative preference dividends accrue as arrears that must be paid in full before any common dividend — the defining protection of the cumulative feature.",
    "vi": "Cổ tức ưu đãi tích lũy dồn thành nợ cổ tức, phải trả đủ trước khi trả bất kỳ cổ tức phổ thông nào — đặc quyền cốt lõi của tính tích lũy."
   },
   {
    "q": "A depository bank creates receipts on a foreign company’s shares without the company’s involvement. In this arrangement, voting rights typically belong to:",
    "opts": [
     "The receipt holders",
     "The depository bank",
     "The foreign company’s regulator"
    ],
    "ans": 1,
    "en": "That is an unsponsored DR: created without the issuer, with the depository bank retaining the votes. Sponsored DRs pass voting rights to holders.",
    "vi": "Đây là DR không bảo trợ: lập không có tổ chức phát hành tham gia, ngân hàng lưu ký giữ quyền biểu quyết. DR có bảo trợ trao quyền biểu quyết cho người nắm giữ."
   },
   {
    "q": "Which preferred feature makes the share LESS valuable to the investor?",
    "opts": [
     "Cumulative dividends",
     "Callable by the issuer",
     "Putable by the holder"
    ],
    "ans": 1,
    "en": "The call option belongs to the ISSUER, who exercises when it hurts the holder (rates fall) — so callable preferreds price lower.",
    "vi": "Quyền call thuộc CÔNG TY, được thực hiện đúng lúc bất lợi cho người nắm (lãi suất giảm) — nên ưu đãi callable giá thấp hơn."
   },
   {
    "q": "An investor holds a sponsored Level III ADR. Which is TRUE?",
    "opts": [
     "It cannot trade on a US exchange",
     "The issuer can raise capital and holders typically have voting rights",
     "It eliminates the underlying currency risk"
    ],
    "ans": 1,
    "en": "Level III ADRs are exchange-listed with capital raising; sponsorship passes voting through. Currency risk of the underlying always remains.",
    "vi": "ADR Level III niêm yết sàn và được huy động vốn; sponsored chuyển quyền biểu quyết. Rủi ro tiền tệ của tài sản gốc luôn còn."
   }
  ],
  [
   {
    "q": "A firm raised revenue 10%: prices rose 8% while units sold rose 2%, in line with competitors raising prices similarly. The revenue growth is best described as driven by:",
    "opts": [
     "Volume, suggesting share gains",
     "Price, without evidence of standalone pricing power",
     "Acquisitions"
    ],
    "ans": 1,
    "en": "Decomposition shows price/mix did the work; matching industry-wide increases suggests passing through inflation rather than firm-specific pricing power.",
    "vi": "Phân rã cho thấy giá/cơ cấu đóng vai chính; tăng cùng nhịp toàn ngành gợi ý chỉ là chuyển tiếp lạm phát, không phải sức mạnh định giá riêng."
   },
   {
    "q": "Two firms have identical revenue growth of +5%. Firm X’s costs are mostly fixed; Firm Y’s are mostly variable. Operating margin will most likely expand more at:",
    "opts": [
     "Firm X, due to higher operating leverage",
     "Firm Y, due to flexibility",
     "Both equally"
    ],
    "ans": 0,
    "en": "With fixed costs, incremental revenue falls largely to operating profit — high operating leverage amplifies margin moves in both directions.",
    "vi": "Chi phí cố định khiến phần doanh thu tăng thêm rơi phần lớn xuống lợi nhuận hoạt động — đòn bẩy hoạt động cao khuếch đại biên theo cả hai chiều."
   },
   {
    "q": "Revenue +6%: price +7%, volume −1%. The healthiest reading is:",
    "opts": [
     "Strong demand growth",
     "Pricing carrying growth while volumes slip — watch elasticity and share",
     "Operating leverage at work"
    ],
    "ans": 1,
    "en": "Growth is coming entirely from price with volume shrinking — sustainable only with real pricing power; check share losses.",
    "vi": "Tăng trưởng đến hoàn toàn từ giá trong khi sản lượng co — chỉ bền nếu có sức mạnh định giá thật; kiểm tra mất thị phần."
   },
   {
    "q": "ROIC 8%, WACC 10%. Faster revenue growth will most likely:",
    "opts": [
     "Create value",
     "Destroy value",
     "Leave value unchanged"
    ],
    "ans": 1,
    "en": "Growing while earning below the cost of capital compounds the value destruction — the spread, not growth, decides.",
    "vi": "Tăng trưởng khi kiếm dưới chi phí vốn chỉ nhân thêm phá hủy giá trị — chênh lệch, không phải tăng trưởng, quyết định."
   }
  ],
  [
   {
    "q": "An industry has many small competitors, an undifferentiated commodity product, high fixed costs, and stagnant demand. Porter’s framework predicts:",
    "opts": [
     "Weak rivalry and high profitability",
     "Intense rivalry and structurally low profitability",
     "High profitability due to entry barriers"
    ],
    "ans": 1,
    "en": "Fragmentation + commodity products + high fixed costs + slow growth are the textbook amplifiers of rivalry — the strongest of the five forces here.",
    "vi": "Phân mảnh + sản phẩm không khác biệt + chi phí cố định cao + cầu trì trệ là các chất khuếch đại cạnh tranh kinh điển — lực mạnh nhất trong năm lực ở đây."
   },
   {
    "q": "Industry growth has slowed abruptly; overcapacity has appeared and weaker firms are exiting or being acquired. This industry is most likely in the:",
    "opts": [
     "Growth stage",
     "Shakeout stage",
     "Embryonic stage"
    ],
    "ans": 1,
    "en": "Shakeout: demand growth decelerates, capacity built for faster growth becomes excess, margins compress, and consolidation begins.",
    "vi": "Shakeout: tăng trưởng cầu chậm lại, công suất xây cho kịch bản tăng nhanh thành dư thừa, biên co lại, hợp nhất bắt đầu."
   },
   {
    "q": "An industry where growth suddenly slows while capacity keeps arriving, triggering price wars, is in which stage?",
    "opts": [
     "Growth",
     "Shakeout",
     "Decline"
    ],
    "ans": 1,
    "en": "Shakeout: demand deceleration meets boom-built capacity — margins collapse and weak firms exit.",
    "vi": "Shakeout: cầu giảm tốc gặp công suất xây thời bùng nổ — biên sập và công ty yếu rời cuộc."
   },
   {
    "q": "Two dominant aircraft makers selling to many airlines primarily raises which force on airlines?",
    "opts": [
     "Buyer power",
     "Supplier power",
     "Threat of substitutes"
    ],
    "ans": 1,
    "en": "Concentrated suppliers of a critical input (airframes) hold power over the fragmented buyers — the airlines.",
    "vi": "Nhà cung cấp tập trung của đầu vào then chốt (khung máy bay) nắm quyền lực trước người mua phân mảnh — các hãng bay."
   }
  ],
  [
   {
    "q": "An analyst forecasts a retailer’s revenue as industry sales growth × the firm’s expected market share. This approach is:",
    "opts": [
     "Bottom-up",
     "Top-down",
     "Time-series extrapolation"
    ],
    "ans": 1,
    "en": "Starting from the market and working down to the firm is top-down; building from stores or price × volume would be bottom-up.",
    "vi": "Xuất phát từ thị trường rồi đi xuống doanh nghiệp là top-down; xây từ số cửa hàng hay giá × sản lượng mới là bottom-up."
   },
   {
    "q": "A firm’s costs are largely fixed. If the analyst raises the revenue growth forecast slightly, the operating margin forecast should:",
    "opts": [
     "Stay unchanged",
     "Rise, because operating leverage lets incremental revenue fall to profit",
     "Fall, because costs rise proportionally"
    ],
    "ans": 1,
    "en": "High operating leverage means costs do not scale with revenue — incremental sales carry high contribution margins, expanding the operating margin.",
    "vi": "Đòn bẩy hoạt động cao nghĩa là chi phí không tăng theo doanh thu — doanh thu tăng thêm mang biên đóng góp cao, làm biên hoạt động nở ra."
   },
   {
    "q": "For most currently fast-growing firms, base-rate evidence says analysts should assume growth will:",
    "opts": [
     "Persist for decades",
     "Converge downward toward peers over time",
     "Accelerate"
    ],
    "ans": 1,
    "en": "Historical base rates show high growth mean-reverts; convergence assumptions discipline optimism.",
    "vi": "Base rate lịch sử cho thấy tăng trưởng cao hồi quy về trung bình; giả định hội tụ kỷ luật hóa sự lạc quan."
   },
   {
    "q": "Valuing a cyclical company using peak-year earnings as the perpetual base most likely:",
    "opts": [
     "Understates value",
     "Overstates value",
     "Has no bias"
    ],
    "ans": 1,
    "en": "Peak margins embed the cycle top into perpetuity — the classic overvaluation (value-trap) error; normalize mid-cycle instead.",
    "vi": "Biên đỉnh chu kỳ bị nướng vào vĩnh viễn — lỗi định giá cao kinh điển (bẫy giá trị); thay vào đó hãy bình thường hóa giữa chu kỳ."
   }
  ],
  [
   {
    "q": "Using the Gordon growth model with D₁ = $3, r = 11%, g = 5%, intrinsic value is:",
    "opts": [
     "$50",
     "$60",
     "$27"
    ],
    "ans": 0,
    "en": "V₀ = D₁/(r − g) = 3/0.06 = $50.",
    "vi": "V₀ = D₁/(r − g) = 3/0,06 = 50 USD. Chỉ dùng khi g &lt; r và tăng trưởng ổn định."
   },
   {
    "q": "The justified leading P/E from the Gordon model equals:",
    "opts": [
     "(1 − b)/(r − g), the payout ratio over (r − g)",
     "b/(r + g)",
     "ROE/(r − g)"
    ],
    "ans": 0,
    "en": "P₀/E₁ = payout/(r − g). Higher payout raises P/E directly but may cut g = b × ROE — the offsetting effect examiners love.",
    "vi": "P/E hợp lý (leading) = tỷ lệ chi trả/(r − g). Trả cổ tức nhiều làm P/E tăng trực tiếp nhưng lại giảm g = b × ROE — hiệu ứng bù trừ hay được hỏi."
   },
   {
    "q": "D1 = $3, r = 9%, g = 4%. Gordon growth value is:",
    "opts": [
     "$33.3",
     "$60.0",
     "$75.0"
    ],
    "ans": 1,
    "en": "V0 = 3/(0.09 − 0.04) = $60.",
    "vi": "V0 = 3/(0,09 − 0,04) = $60."
   },
   {
    "q": "Market cap 500, debt 200, cash 100, EBITDA 100. EV/EBITDA is:",
    "opts": [
     "7×",
     "6×",
     "5×"
    ],
    "ans": 1,
    "en": "EV = 500 + 200 − 100 = 600 → 600/100 = 6×.",
    "vi": "EV = 500 + 200 − 100 = 600 → 600/100 = 6×."
   }
  ]
 ],
 "sets": [
  [
   {
    "q": "A stock will pay a $2.00 dividend next year, growing 4% forever. If the required return is 10%, intrinsic value is closest to:",
    "opts": [
     "$33.33",
     "$50.00",
     "$20.00"
    ],
    "ans": 0,
    "en": "V₀ = 2/(0.10 − 0.04) = $33.33.",
    "vi": "V₀ = 2/(0,10 − 0,04) = 33,33 USD theo mô hình Gordon."
   },
   {
    "q": "ROE is 15% and the dividend payout ratio is 40%. The sustainable growth rate is:",
    "opts": [
     "6.0%",
     "9.0%",
     "15.0%"
    ],
    "ans": 1,
    "en": "g = retention × ROE = 0.6 × 15% = 9%.",
    "vi": "g = tỷ lệ giữ lại × ROE = 0,6 × 15% = 9%."
   },
   {
    "q": "An investor wants to buy a stock but only if the price falls to $45 or below. She should place a:",
    "opts": [
     "Market buy order",
     "Limit buy order at $45",
     "Stop buy order at $45"
    ],
    "ans": 1,
    "en": "A limit buy executes only at the limit price or better (lower). A stop buy would trigger a purchase when the price rises to $45.",
    "vi": "Lệnh limit mua chỉ khớp ở mức giá 45 hoặc thấp hơn. Lệnh stop mua thì ngược lại — kích hoạt khi giá tăng chạm 45."
   },
   {
    "q": "Index providers use free-float adjustment primarily to:",
    "opts": [
     "Increase index volatility",
     "Weight companies by shares actually available to public investors",
     "Exclude foreign shareholders"
    ],
    "ans": 1,
    "en": "Float adjustment removes strategic/insider holdings so weights reflect investable supply — improving index replicability.",
    "vi": "Điều chỉnh free-float loại bỏ cổ phần nắm giữ chiến lược/nội bộ để trọng số phản ánh lượng cổ phiếu công chúng thực sự mua được."
   },
   {
    "q": "Market cap $500m, total debt $200m, cash $50m. Enterprise value is:",
    "opts": [
     "$650m",
     "$750m",
     "$550m"
    ],
    "ans": 0,
    "en": "EV = equity + debt − cash = 500 + 200 − 50 = $650m — the takeover cost of the whole operating business.",
    "vi": "EV = vốn hóa + nợ − tiền mặt = 650 triệu USD — chi phí “mua đứt” toàn bộ hoạt động kinh doanh."
   },
   {
    "q": "A preferred stock pays a fixed $4 annual dividend forever. At a 8% required return its value is:",
    "opts": [
     "$50",
     "$32",
     "$40"
    ],
    "ans": 0,
    "en": "Perpetuity: V = 4/0.08 = $50.",
    "vi": "Cổ phiếu ưu đãi như perpetuity: V = 4/0,08 = 50 USD."
   },
   {
    "q": "A non-callable perpetual preference share pays a fixed $5 annual dividend; the required return is 8%. Its value is closest to:",
    "opts": [
     "$40.00",
     "$62.50",
     "$50.00"
    ],
    "ans": 1,
    "en": "Perpetual preferred value = D/r = 5/0.08 = $62.50.",
    "vi": "Giá trị cổ phiếu ưu đãi vĩnh viễn = D/r = 5/0,08 = 62,50 USD."
   },
   {
    "q": "High customer switching costs in an industry most directly:",
    "opts": [
     "Increase the threat of new entrants",
     "Reduce both buyer power and the threat of new entrants",
     "Increase supplier power"
    ],
    "ans": 1,
    "en": "Locked-in customers cannot easily defect: buyers lose bargaining leverage and newcomers struggle to win accounts — two forces weakened at once.",
    "vi": "Khách hàng bị \"khóa\" khó rời đi: người mua mất thế mặc cả và người mới khó giành khách — hai lực lượng cùng yếu đi."
   }
  ],
  [
   {
    "q": "A short seller most likely profits when the stock price falls, but while the position is open she must:",
    "opts": [
     "Receive the stock’s dividends",
     "Pay any dividends to the share lender",
     "Vote the borrowed shares"
    ],
    "ans": 1,
    "en": "Short sellers owe borrowed-share dividends to the lender and post margin; profit = sell high now, repurchase lower later.",
    "vi": "Người bán khống phải hoàn trả cổ tức phát sinh cho người cho vay cổ phiếu và ký quỹ; lợi nhuận đến từ mua lại giá thấp hơn."
   },
   {
    "q": "If a market is weak-form efficient, which approach cannot consistently generate abnormal returns?",
    "opts": [
     "Technical analysis based on past prices and volume",
     "Fundamental analysis",
     "Insider trading"
    ],
    "ans": 0,
    "en": "Weak form: past market data is fully priced in — chart patterns cannot reliably beat the market. Fundamental analysis may still work under weak form.",
    "vi": "Hiệu quả dạng yếu: dữ liệu giá/khối lượng quá khứ đã nằm trong giá → phân tích kỹ thuật vô hiệu; phân tích cơ bản vẫn có thể hữu ích."
   },
   {
    "q": "A present-value model using free cash flow to equity (FCFE) is most appropriate when the company:",
    "opts": [
     "Pays a stable, predictable dividend",
     "Pays no or erratic dividends and the analyst takes a control (or total-return) perspective",
     "Has negative cash flow forever"
    ],
    "ans": 1,
    "en": "FCFE measures capacity to pay rather than actual dividends — suited to non-dividend payers and control perspectives.",
    "vi": "FCFE đo khả năng chi trả thay vì cổ tức thực trả — phù hợp với công ty không/ít trả cổ tức hoặc góc nhìn cổ đông kiểm soát."
   },
   {
    "q": "The P/B multiple is most useful relative to P/E when valuing:",
    "opts": [
     "Asset-heavy financial firms or firms with negative earnings",
     "High-growth software firms",
     "Firms with volatile book values"
    ],
    "ans": 0,
    "en": "Book value stays meaningful when earnings are negative or volatile, and marks banks’ assets reasonably well — hence P/B’s popularity for financials.",
    "vi": "P/B hữu ích khi lợi nhuận âm/biến động và với ngành tài chính (tài sản gần giá thị trường) — những chỗ P/E mất tác dụng."
   },
   {
    "q": "In a two-stage DDM, the terminal value at the end of the high-growth stage is computed by:",
    "opts": [
     "Multiplying final earnings by the current market P/E",
     "Applying the Gordon growth model to the first stable-growth dividend",
     "Summing undiscounted future dividends"
    ],
    "ans": 1,
    "en": "Terminal value = D(first stable year)/(r − g_stable), then discount it back with the stage-one dividends.",
    "vi": "Giá trị cuối kỳ = cổ tức năm ổn định đầu tiên/(r − g ổn định), sau đó chiết khấu về hiện tại cùng cổ tức giai đoạn 1."
   },
   {
    "q": "An investor buys on 50% margin. Ignoring costs, if the stock price rises 5%, the return on her equity is approximately:",
    "opts": [
     "+5%",
     "+10%",
     "+2.5%"
    ],
    "ans": 1,
    "en": "Leverage factor = 1/margin = 2×, so equity return ≈ 2 × 5% = 10% before interest and fees — losses amplify the same way.",
    "vi": "Hệ số đòn bẩy = 1/tỷ lệ ký quỹ = 2 lần → lợi nhuận trên vốn tự có ≈ 10% (chưa trừ lãi vay, phí). Lỗ cũng khuếch đại tương tự."
   },
   {
    "q": "Market capitalization is $500m, total debt $200m, and cash and equivalents $50m. Enterprise value is:",
    "opts": [
     "$650m",
     "$750m",
     "$550m"
    ],
    "ans": 0,
    "en": "EV = market cap + debt − cash = 500 + 200 − 50 = $650m — the takeover cost of the whole business.",
    "vi": "EV = vốn hóa + nợ − tiền = 500 + 200 − 50 = 650 triệu — chi phí \"mua đứt\" cả doanh nghiệp."
   },
   {
    "q": "An industry in decline with chronic excess capacity most likely experiences:",
    "opts": [
     "Rising prices as weak firms exit quickly",
     "Recurrent price wars as firms fight for shrinking demand",
     "Renewed entry by startups"
    ],
    "ans": 1,
    "en": "Shrinking demand against sticky capacity pushes firms to defend volume with price cuts — declining industries reward capacity discipline and consolidation.",
    "vi": "Cầu co lại trong khi công suất khó rút khiến các hãng bảo vệ sản lượng bằng giảm giá — ngành suy thoái tưởng thưởng cho kỷ luật công suất và hợp nhất."
   }
  ],
  {
   "name": "Set D — Mixed exam-style review",
   "qs": [
    {
     "q": "Buy 500 shares at $50, 50% initial margin, loan rate 5%, price ends at $58, no dividends. One-year return on equity invested is closest to:",
     "opts": [
      "+16%",
      "+27%",
      "+32%"
     ],
     "ans": 1,
     "en": "Equity start 12,500. End: 29,000 − 12,500 loan − 625 interest = 15,875 → 15,875/12,500 − 1 = +27%.",
     "vi": "Vốn đầu 12.500. Cuối: 29.000 − 12.500 nợ − 625 lãi = 15.875 → +27%."
    },
    {
     "q": "A short seller at $30 faces 50% initial and 30% maintenance margin. The margin call price is closest to:",
     "opts": [
      "$34.6",
      "$25.7",
      "$39.0"
     ],
     "ans": 0,
     "en": "Short call price = 30 × (1 + 0.5)/(1 + 0.3) = 45/1.3 = $34.6 — shorts are called by rising prices.",
     "vi": "Giá call bán khống = 30 × 1,5/1,3 = $34,6 — vị thế short bị call khi giá TĂNG."
    },
    {
     "q": "An index provider adds a stock to a widely tracked index. Around the announcement, the stock most likely:",
     "opts": [
      "Falls on dilution",
      "Rises as index funds must buy it",
      "Is unaffected in a semi-strong market"
     ],
     "ans": 1,
     "en": "Reconstitution effects: tracking money must buy additions (and sell deletions) — a documented price pressure.",
     "vi": "Hiệu ứng reconstitution: tiền bám chỉ số buộc phải mua cổ phiếu được thêm (bán cổ phiếu bị loại) — áp lực giá đã được ghi nhận."
    },
    {
     "q": "If markets are semi-strong efficient, the BEST use of analyst resources is:",
     "opts": [
      "Technical chart patterns",
      "Trading on earnings releases",
      "Portfolio construction, risk and cost management"
     ],
     "ans": 2,
     "en": "Public-information strategies can't beat the market; value comes from diversification, risk targeting, taxes and costs.",
     "vi": "Chiến lược dựa thông tin công khai không thắng thị trường; giá trị đến từ đa dạng hóa, nhắm rủi ro, thuế và chi phí."
    },
    {
     "q": "Which shareholder benefits MOST from a switch to cumulative voting?",
     "opts": [
      "The 65% controlling holder",
      "A 30% minority holder",
      "Bondholders"
     ],
     "ans": 1,
     "en": "Cumulative voting lets a large minority concentrate votes to win board representation it would never get under statutory voting.",
     "vi": "Bầu dồn phiếu cho phép thiểu số lớn dồn phiếu giành ghế HĐQT mà bầu thường không bao giờ cho họ."
    },
    {
     "q": "A US investor's ADR falls 8% while the foreign company's local-currency stock price was flat. The most likely cause:",
     "opts": [
      "ADR fees",
      "The foreign currency depreciated ~8% against the dollar",
      "Index reconstitution"
     ],
     "ans": 1,
     "en": "DR holders bear the underlying currency risk: a weaker home currency translates directly into a lower dollar DR price.",
     "vi": "Người nắm DR gánh rủi ro tiền tệ gốc: nội tệ yếu đi chuyển thẳng thành giá DR bằng USD thấp hơn."
    },
    {
     "q": "An industry rates: weak rivalry, high entry barriers, weak buyers and suppliers, few substitutes. Expected long-run profitability is:",
     "opts": [
      "Below average",
      "Average",
      "Above average"
     ],
     "ans": 2,
     "en": "All five forces are favorable — structure permits sustained above-normal returns.",
     "vi": "Cả năm lực đều thuận lợi — cấu trúc cho phép lợi suất trên bình thường kéo dài."
    },
    {
     "q": "A firm competes on the lowest cost base and prices at or below rivals across a broad market. Its generic strategy is:",
     "opts": [
      "Differentiation",
      "Cost leadership",
      "Focus"
     ],
     "ans": 1,
     "en": "Broad scope + lowest delivered cost = cost leadership; differentiation charges premiums for perceived uniqueness.",
     "vi": "Phạm vi rộng + chi phí thấp nhất = cost leadership; differentiation thu giá premium cho sự khác biệt được cảm nhận."
    },
    {
     "q": "D0 = $2, growth 15% for 1 year then 5% forever, r = 11%. Value today is closest to:",
     "opts": [
      "$38.3",
      "$42.6",
      "$34.5"
     ],
     "ans": 0,
     "en": "D1 = 2.30; TV1 = D2/(r − g) = 2.30 × 1.05/0.06 = 40.25. V0 = (2.30 + 40.25)/1.11 = $38.3 — the terminal value sits at t=1, so discount one period.",
     "vi": "D1 = 2,30; TV1 = D2/(r − g) = 2,415/0,06 = 40,25. V0 = (2,30 + 40,25)/1,11 = $38,3 — terminal value nằm tại t=1 nên chiết khấu một kỳ."
    },
    {
     "q": "A firm with ROE 15%, required return 10%, growth 5% has a justified P/B of:",
     "opts": [
      "1.0×",
      "2.0×",
      "3.0×"
     ],
     "ans": 1,
     "en": "P/B = (ROE − g)/(r − g) = (0.15 − 0.05)/(0.10 − 0.05) = 2.0× — excess returns over r justify the premium to book.",
     "vi": "P/B = (0,15 − 0,05)/(0,10 − 0,05) = 2,0× — lợi suất vượt r biện minh cho premium so với book."
    },
    {
     "q": "P/S is most defensible relative to P/E when the subject company:",
     "opts": [
      "Has volatile capex",
      "Reports losses",
      "Carries high leverage"
     ],
     "ans": 1,
     "en": "Sales stay positive and are harder to manipulate than earnings; P/E is meaningless with negative E. But P/S ignores profitability entirely.",
     "vi": "Doanh thu luôn dương và khó thao túng hơn lợi nhuận; P/E vô nghĩa khi E âm. Nhưng P/S bỏ qua hoàn toàn khả năng sinh lời."
    },
    {
     "q": "Asset-based valuation is MOST appropriate for:",
     "opts": [
      "A software firm with mostly intangibles",
      "An investment holding company with marketable assets",
      "A high-growth platform"
     ],
     "ans": 1,
     "en": "It works when asset market values are determinable (holdings, resources, liquidation); intangibles-heavy firms defeat it.",
     "vi": "Cách này hợp khi giá thị trường tài sản xác định được (holding, tài nguyên, thanh lý); công ty nặng vô hình làm nó thất bại."
    }
   ]
  }
 ]
};
