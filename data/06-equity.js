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
  "en": "Equity Investments spans eight learning modules: market organization and structure, security market indexes, market efficiency, equity securities, company analysis (past/present and forecasting), industry and competitive analysis, and equity valuation. The calculations are few and formulaic (margin calls, index returns, DDM, multiples) — the bulk of the points come from precise definitions: order types, index maintenance, DR variants, five forces, life-cycle stages, and knowing which valuation family fits which firm.",
  "vi": "Equity Investments gồm tám learning modules: tổ chức và cấu trúc thị trường, chỉ số chứng khoán, hiệu quả thị trường, chứng khoán vốn, phân tích doanh nghiệp (quá khứ/hiện tại và dự phóng), phân tích ngành và cạnh tranh, và định giá cổ phiếu. Phần tính toán ít và theo công thức (margin call, lợi suất chỉ số, DDM, bội số) — điểm số chủ yếu đến từ định nghĩa chính xác: loại lệnh, bảo trì chỉ số, các biến thể DR, năm lực lượng, các pha vòng đời, và biết họ định giá nào hợp với doanh nghiệp nào."
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
    }
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
    }
   ]
  },
  {
   "title": "Industry and Competitive Analysis",
   "sections": [
    {
     "h": "Industry classification, five forces & the life cycle",
     "en": "<ul><li><strong>Why industry analysis:</strong> industry effects explain a large share of profitability differences; it feeds company analysis, relative valuation, and rotation strategies. Classification schemes (GICS and peers) group firms by principal business activity — but build your own <em>peer group</em> from actual competitors, customers, and suppliers, not just the sector code.</li><li><strong>Porter’s five forces</strong> determine industry profitability: (1) <em>threat of new entrants</em> — weakened by barriers (scale, brands, patents, regulation, capital); (2) <em>power of suppliers</em> — high when concentrated and inputs lack substitutes; (3) <em>power of buyers</em> — high when purchases are large, standardized, and switching is cheap; (4) <em>threat of substitutes</em> — products from outside the industry capping prices; (5) <em>rivalry</em> — fiercest in fragmented industries with undifferentiated products, high fixed costs, and slow growth. External themes (PESTLE: political, economic, social, technological, legal, environmental) and demographics overlay the forces.</li><li><strong>Industry life cycle:</strong> <em>embryonic</em> (slow growth, high prices, heavy investment) → <em>growth</em> (rapidly rising demand, improving profitability, falling prices) → <em>shakeout</em> (growth slows, overcapacity emerges, weaker players exit) → <em>mature</em> (consolidation, stable oligopoly, price discipline) → <em>decline</em> (negative growth, excess capacity, price wars). Position determines whether growth or cost control drives value — and stages can be scrambled by technology.</li><li><strong>Competitive positioning:</strong> Porter’s generic strategies — <em>cost leadership</em> (lowest cost, defend by scale/efficiency) or <em>differentiation</em> (unique product commanding a premium), each firm-wide or focused on a niche. Stuck-in-the-middle firms earn neither premium nor cost advantage.</li></ul>",
     "vi": "<ul><li><strong>Vì sao phân tích ngành:</strong> yếu tố ngành giải thích phần lớn khác biệt về khả năng sinh lời; nó nuôi phân tích doanh nghiệp, định giá tương đối và chiến lược xoay vòng ngành. Các hệ thống phân loại (GICS…) gom doanh nghiệp theo hoạt động chính — nhưng hãy tự xây <em>nhóm so sánh</em> từ đối thủ, khách hàng, nhà cung cấp thực tế, đừng chỉ dựa mã ngành.</li><li><strong>Năm lực lượng của Porter</strong> quyết định khả năng sinh lời của ngành: (1) <em>đe dọa gia nhập mới</em> — yếu đi nhờ rào cản (quy mô, thương hiệu, bằng sáng chế, quy định, vốn); (2) <em>sức mạnh nhà cung cấp</em> — cao khi tập trung và đầu vào không có hàng thay thế; (3) <em>sức mạnh người mua</em> — cao khi đơn hàng lớn, sản phẩm chuẩn hóa, chuyển đổi rẻ; (4) <em>đe dọa hàng thay thế</em> — sản phẩm ngoài ngành chặn trần giá; (5) <em>cạnh tranh nội bộ</em> — khốc liệt nhất ở ngành phân mảnh, sản phẩm không khác biệt, chi phí cố định cao, tăng trưởng chậm. Chủ đề vĩ mô (PESTLE) và nhân khẩu học phủ lên các lực lượng này.</li><li><strong>Vòng đời ngành:</strong> <em>phôi thai</em> (tăng chậm, giá cao, đầu tư nặng) → <em>tăng trưởng</em> (cầu tăng nhanh, sinh lời cải thiện, giá giảm) → <em>sàng lọc (shakeout)</em> (tăng trưởng chậm lại, dư thừa công suất, kẻ yếu rời cuộc) → <em>trưởng thành</em> (hợp nhất, độc quyền nhóm ổn định, kỷ luật giá) → <em>suy thoái</em> (tăng trưởng âm, dư công suất, chiến tranh giá). Vị trí trong vòng đời quyết định giá trị đến từ tăng trưởng hay kiểm soát chi phí — và công nghệ có thể xáo trộn các giai đoạn.</li><li><strong>Định vị cạnh tranh:</strong> chiến lược tổng quát của Porter — <em>dẫn đầu chi phí</em> (chi phí thấp nhất, phòng thủ bằng quy mô/hiệu suất) hoặc <em>khác biệt hóa</em> (sản phẩm độc đáo bán giá cao), áp dụng toàn ngành hoặc tập trung ngách. Doanh nghiệp kẹt giữa không có cả giá cao lẫn lợi thế chi phí.</li></ul>"
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
    }
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
  ]
 ]
};
