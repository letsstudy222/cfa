/* =====================================================================
   Topic 09 — Alternative Investments
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
 "id": "alts",
 "num": "09",
 "name": "Alternative Investments",
 "vi": "Đầu tư thay thế",
 "w": [
  7,
  10
 ],
 "blurb": "Private capital, real estate, infrastructure, natural resources, hedge funds and digital assets — structures, fees, performance and risk.",
 "intro": {
  "en": "Alternative Investments covers seven learning modules: structures and methods; performance measurement; private capital; real estate and infrastructure; natural resources; hedge funds; and digital assets. The exam rewards knowing WHY each structural quirk exists — almost always illiquidity and information asymmetry. Every module below pairs theory with diagrams and fully worked numbers — the LP waterfall, 2&20 with a high-water mark, a mini-LBO, cap-rate valuation, the roll-yield decomposition — then drill the Quick checks and Practice Sets B–D.",
  "vi": "Alternative Investments gồm bảy learning modules: cấu trúc và phương thức; đo lường hiệu quả; vốn tư nhân; bất động sản và hạ tầng; tài nguyên thiên nhiên; hedge funds; và tài sản số. Đề thi thưởng cho việc hiểu VÌ SAO mỗi nét cấu trúc kỳ lạ tồn tại — gần như luôn là tính kém thanh khoản và bất cân xứng thông tin. Mỗi module bên dưới kết hợp lý thuyết với sơ đồ và con số giải trọn — waterfall của LP, 2&20 với high-water mark, mini-LBO, định giá cap rate, phân rã roll yield — sau đó luyện Quick checks và Practice Sets B–D."
 },
 "modules": [
  {
   "title": "Features, Methods, and Structures",
   "sections": [
    {
     "h": "The landscape",
     "en": "<ul><li><strong>Private capital:</strong> private equity (leveraged buyouts, venture capital, growth equity) and private debt (direct lending, mezzanine, distressed). VC stages: seed → early → later → exit via IPO or trade sale. PE funds are closed-end limited partnerships: the <strong>GP</strong> manages, <strong>LPs</strong> commit capital drawn down over time; the <strong>J-curve</strong> describes early negative returns before exits generate gains.</li><li><strong>Real estate:</strong> direct ownership, private funds, and <strong>REITs</strong> (liquid, exchange-traded, income distributing). Returns from income + appreciation; appraisal-based indices smooth volatility and understate risk.</li><li><strong>Infrastructure:</strong> long-lived assets (toll roads, airports, utilities) — greenfield (build) vs brownfield (existing); stable, often inflation-linked cash flows.</li><li><strong>Natural resources:</strong> commodities (via futures — return = collateral yield + roll yield + spot change; contango hurts long roll returns, backwardation helps), plus farmland and timberland.</li><li><strong>Hedge funds:</strong> lightly regulated pooled vehicles using leverage, shorting, derivatives. Strategy families: equity (long/short, market neutral), event-driven (merger arbitrage, distressed), relative value, macro/CTA. Often have lock-ups, gates, and redemption notice periods.</li><li><strong>Digital assets:</strong> cryptocurrencies and tokens on distributed ledgers; high volatility, evolving regulation and custody risk.</li></ul>",
     "vi": "<ul><li><strong>Vốn tư nhân:</strong> private equity (LBO, đầu tư mạo hiểm, growth equity) và private debt (cho vay trực tiếp, mezzanine, nợ khó khăn). Các vòng VC: seed → early → later → thoái vốn qua IPO hoặc bán cho đối tác. Quỹ PE là hợp danh hữu hạn đóng: <strong>GP</strong> quản lý, <strong>LP</strong> cam kết vốn được rút dần; <strong>đường cong chữ J</strong> mô tả lợi suất âm giai đoạn đầu trước khi các thương vụ thoái vốn tạo lãi.</li><li><strong>Bất động sản:</strong> sở hữu trực tiếp, quỹ tư nhân, và <strong>REITs</strong> (thanh khoản, niêm yết, chia thu nhập). Lợi nhuận = thu nhập + tăng giá; chỉ số theo định giá thẩm định làm mượt biến động, che giấu rủi ro.</li><li><strong>Hạ tầng:</strong> tài sản tuổi thọ dài (đường thu phí, sân bay, tiện ích) — greenfield (xây mới) vs brownfield (đang vận hành); dòng tiền ổn định, thường gắn lạm phát.</li><li><strong>Tài nguyên:</strong> hàng hóa (qua futures — lợi suất = lãi tài sản thế chấp + roll yield + thay đổi giá spot; contango bất lợi cho vị thế long khi đảo hợp đồng, backwardation có lợi), đất nông nghiệp, rừng.</li><li><strong>Hedge fund:</strong> quỹ ít bị quản lý, dùng đòn bẩy, bán khống, phái sinh. Nhóm chiến lược: cổ phiếu (long/short, trung lập thị trường), theo sự kiện (arbitrage sáp nhập, nợ khó khăn), giá trị tương đối, vĩ mô/CTA. Thường có lock-up, gate, thời hạn báo trước khi rút vốn.</li><li><strong>Tài sản số:</strong> tiền mã hóa và token trên sổ cái phân tán; biến động cao, quy định đang định hình, rủi ro lưu ký.</li></ul>"
    },
    {
     "h": "Investment methods & the limited partnership machine",
     "en": "<ul><li><strong>Three ways in:</strong> <em>fund investing</em> — commit capital to a GP-managed fund (diversification and expertise, but full fees and no deal control); <em>co-investing</em> — invest alongside the fund into specific deals (lower blended fees, more concentration, requires speed and skill); <em>direct investing</em> — buy the asset yourself (maximum control, maximum resource demands). Investors typically graduate along this ladder as programs mature.</li><li><strong>The LP structure:</strong> the <em>general partner</em> manages the fund with theoretical unlimited liability; <em>limited partners</em> commit capital, drawn down over time via <strong>capital calls</strong> — so <em>committed</em> ≠ <em>invested</em> capital. The <strong>distribution waterfall</strong> orders payouts: return of capital → preferred return (hurdle) → GP catch-up → <em>carried interest</em> split (typically 20%). <em>Deal-by-deal (American)</em> waterfalls pay carry per exit — friendlier to GPs; <em>whole-of-fund (European)</em> waterfalls pay carry only after LPs recover all capital — friendlier to LPs; <strong>clawback</strong> clauses recover overpaid carry.</li><li><strong>Why alternatives at all:</strong> return enhancement (illiquidity and complexity premia, active value creation) and diversification (lower correlation with public markets) — priced in fees, lockups, valuation opacity, and leverage.</li></ul>",
     "vi": "<ul><li><strong>Ba con đường tham gia:</strong> <em>đầu tư qua quỹ</em> — cam kết vốn cho quỹ do GP quản lý (đa dạng hóa và chuyên môn, nhưng chịu đủ phí và không kiểm soát deal); <em>đồng đầu tư (co-invest)</em> — rót vốn cùng quỹ vào từng deal cụ thể (phí bình quân thấp hơn, tập trung hơn, đòi hỏi tốc độ và năng lực); <em>đầu tư trực tiếp</em> — tự mua tài sản (kiểm soát tối đa, nguồn lực tối đa). Nhà đầu tư thường \"leo thang\" theo trình tự này khi chương trình trưởng thành.</li><li><strong>Cỗ máy hợp danh hữu hạn:</strong> <em>GP</em> điều hành quỹ với trách nhiệm vô hạn trên lý thuyết; <em>LP</em> cam kết vốn, được rút dần qua <strong>capital calls</strong> — nên vốn <em>cam kết</em> ≠ vốn <em>đã giải ngân</em>. <strong>Thác phân phối (waterfall)</strong> xếp thứ tự chi trả: hoàn vốn → lợi suất ưu tiên (hurdle) → GP catch-up → chia <em>carried interest</em> (thường 20%). Waterfall <em>theo từng deal (kiểu Mỹ)</em> trả carry ngay mỗi thương vụ thoái — có lợi cho GP; <em>toàn quỹ (kiểu Âu)</em> chỉ trả carry sau khi LP thu hồi toàn bộ vốn — có lợi cho LP; điều khoản <strong>clawback</strong> đòi lại carry trả thừa.</li><li><strong>Vì sao cần alternatives:</strong> tăng lợi nhuận (phần bù kém thanh khoản và phức tạp, tạo giá trị chủ động) và đa dạng hóa (tương quan thấp với thị trường đại chúng) — đổi bằng phí, lockup, định giá mờ và đòn bẩy.</li></ul>"
    },
    {
     "h": "The LP machine drawn out + how investors choose their route in",
     "en": "<svg viewBox=\"0 0 720 340\" style=\"width:100%;height:auto;display:block;margin:14px 0;background:#fff;border:1px solid #E5E9F2;border-radius:12px\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Limited partnership structure and cash flows\">\n<text x=\"360\" y=\"26\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" fill=\"#1B2438\">The limited partnership machine</text>\n<rect x=\"60\" y=\"70\" width=\"190\" height=\"76\" rx=\"10\" fill=\"#5457E0\"/>\n<text x=\"155\" y=\"100\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12.5\" font-weight=\"700\" fill=\"#fff\">Limited partners (LPs)</text>\n<text x=\"155\" y=\"119\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#E5E9F2\">pensions, endowments, SWFs, HNW</text>\n<text x=\"155\" y=\"135\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#E5E9F2\">commit capital · limited liability</text>\n<rect x=\"470\" y=\"70\" width=\"190\" height=\"76\" rx=\"10\" fill=\"#0F9573\"/>\n<text x=\"565\" y=\"100\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12.5\" font-weight=\"700\" fill=\"#fff\">General partner (GP)</text>\n<text x=\"565\" y=\"119\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#E7F6F0\">manages the fund · unlimited liability</text>\n<text x=\"565\" y=\"135\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#E7F6F0\">earns fees + carried interest</text>\n<rect x=\"255\" y=\"200\" width=\"210\" height=\"70\" rx=\"10\" fill=\"#FBF3E4\" stroke=\"#B45309\" stroke-width=\"1.5\"/>\n<text x=\"360\" y=\"228\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12.5\" font-weight=\"700\" fill=\"#B45309\">The Fund (LP vehicle)</text>\n<text x=\"360\" y=\"248\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#5B6577\">~10-year life · capital drawn as deals appear</text>\n<path d=\"M 155 148 C 165 180 220 205 250 215\" stroke=\"#5457E0\" stroke-width=\"2.2\" fill=\"none\" marker-end=\"url(#lpA)\"/>\n<text x=\"152\" y=\"188\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10\" fill=\"#5457E0\" font-weight=\"600\">capital calls (drawdowns)</text>\n<path d=\"M 250 245 C 200 262 170 260 140 250\" stroke=\"#B45309\" stroke-width=\"2.2\" fill=\"none\" marker-end=\"url(#lpB)\"/>\n<text x=\"166\" y=\"282\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10\" fill=\"#B45309\" font-weight=\"600\">distributions (waterfall order)</text>\n<path d=\"M 565 148 C 555 180 500 205 470 215\" stroke=\"#0F9573\" stroke-width=\"2.2\" fill=\"none\" marker-end=\"url(#lpC)\"/>\n<text x=\"580\" y=\"188\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10\" fill=\"#0F9573\" font-weight=\"600\">manages, invests</text>\n<path d=\"M 470 245 C 520 262 550 260 580 250\" stroke=\"#DC4848\" stroke-width=\"2.2\" fill=\"none\" marker-end=\"url(#lpD)\"/>\n<text x=\"566\" y=\"282\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10\" fill=\"#DC4848\" font-weight=\"600\">mgmt fee + 20% carry (after hurdle)</text>\n<defs>\n<marker id=\"lpA\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#5457E0\"/></marker>\n<marker id=\"lpB\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#B45309\"/></marker>\n<marker id=\"lpC\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#0F9573\"/></marker>\n<marker id=\"lpD\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#DC4848\"/></marker>\n</defs>\n<text x=\"360\" y=\"316\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11.5\" fill=\"#8B5CF6\" font-weight=\"600\">Typical waterfall: return LP capital → hurdle (~8%) → GP catch-up → 80/20 split. Clawback protects LPs across deals.</text>\n</svg>\n<p><strong>Follow the money through a fund's life.</strong> LPs sign a <em>commitment</em> (say $10m) but wire nothing on day one. During the investment period (years 1–5 or so) the GP issues <em>capital calls</em> as deals close; unfunded commitments are a real liability — LPs must hold liquidity to meet calls on short notice. Exits in the later years trigger <em>distributions</em> through the waterfall: return of capital → preferred return (hurdle, ~8%) → GP catch-up → 80/20 split of the rest. In a <strong>deal-by-deal (American) waterfall</strong> the GP collects carry on each exit — with a <strong>clawback</strong> clause forcing repayment if later deals lose; a <strong>whole-of-fund (European) waterfall</strong> pays carry only after LPs' entire capital plus hurdle is back — strictly friendlier to LPs.</p>\n<table style=\"width:100%;border-collapse:collapse;font-size:13.5px;margin:10px 0\"><tr style=\"background:#EEF0FE\"><th style=\"padding:7px;border:1px solid #D6DAFB;text-align:left\">Route</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Cost</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Control & diligence burden</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Best for</th></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Fund investing</td><td style=\"padding:7px;border:1px solid #E5E9F2\">full fees (mgmt + carry)</td><td style=\"padding:7px;border:1px solid #E5E9F2\">lowest — delegate to the GP</td><td style=\"padding:7px;border:1px solid #E5E9F2\">most investors; first exposure</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Co-investing</td><td style=\"padding:7px;border:1px solid #E5E9F2\">reduced/no fees on the co-invest slice</td><td style=\"padding:7px;border:1px solid #E5E9F2\">medium — GP still sources the deal</td><td style=\"padding:7px;border:1px solid #E5E9F2\">LPs deepening favorite GP relationships</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Direct investing</td><td style=\"padding:7px;border:1px solid #E5E9F2\">no fund fees</td><td style=\"padding:7px;border:1px solid #E5E9F2\">highest — you are the GP now</td><td style=\"padding:7px;border:1px solid #E5E9F2\">large, staffed institutions (SWFs, mega-pensions)</td></tr></table>\n<p><strong>Why the structure exists at all.</strong> Alternatives are illiquid, hard to value, lightly regulated, and information-poor relative to public markets — features that demand long lock-ups, sophisticated investors (accreditation rules), and incentive alignment via the GP's own commitment and carry. In exchange, investors seek diversification (lower correlation with stocks/bonds), access to illiquidity and complexity premiums, and inflation-sensitive real assets. The recurring exam frame: every structural quirk of alternatives (fees, lock-ups, valuation lags) traces back to <em>illiquidity and information asymmetry</em>.</p>",
     "vi": "<p><strong>Lần theo dòng tiền qua đời quỹ.</strong> LP ký <em>cam kết</em> (giả sử $10tr) nhưng không chuyển đồng nào ngày đầu. Trong giai đoạn đầu tư (khoảng năm 1–5), GP phát <em>capital calls</em> khi thương vụ chốt; phần cam kết chưa giải ngân là nghĩa vụ thật — LP phải giữ thanh khoản để đáp ứng lệnh gọi vốn trong thời gian ngắn. Các thương vụ thoái ở những năm sau kích hoạt <em>phân phối</em> qua waterfall: hoàn vốn → lợi suất ưu tiên (hurdle, ~8%) → GP catch-up → chia 80/20 phần còn lại. Trong <strong>waterfall theo từng thương vụ (kiểu Mỹ)</strong>, GP nhận carry ở mỗi lần thoái — kèm điều khoản <strong>clawback</strong> buộc hoàn lại nếu các thương vụ sau thua lỗ; <strong>waterfall toàn quỹ (kiểu Âu)</strong> chỉ trả carry sau khi LP nhận đủ toàn bộ vốn cộng hurdle — thân thiện với LP hơn hẳn.</p>\n<p><strong>Ba con đường vào (bảng):</strong> đầu tư qua quỹ — chịu đủ phí (quản lý + carry), gánh nặng thẩm định thấp nhất, hợp đa số nhà đầu tư lần đầu; co-investing — giảm/miễn phí trên phần co-invest, GP vẫn tìm thương vụ, hợp LP muốn làm sâu quan hệ với GP ưa thích; đầu tư trực tiếp — không phí quỹ nhưng gánh nặng cao nhất (bạn chính là GP), hợp định chế lớn có đội ngũ (SWF, quỹ hưu khổng lồ).</p>\n<p><strong>Vì sao cấu trúc này tồn tại.</strong> Tài sản thay thế kém thanh khoản, khó định giá, ít bị quản lý, và nghèo thông tin so với thị trường đại chúng — các đặc tính đòi hỏi lock-up dài, nhà đầu tư đủ chuẩn (quy tắc accreditation), và đồng hướng lợi ích qua phần vốn góp của chính GP cùng carry. Đổi lại, nhà đầu tư tìm kiếm đa dạng hóa (tương quan thấp với cổ phiếu/trái phiếu), tiếp cận phần bù kém thanh khoản và phức tạp, cùng tài sản thực nhạy lạm phát. Khung đề lặp đi lặp lại: mọi nét cấu trúc kỳ lạ của alternatives (phí, lock-up, độ trễ định giá) đều truy về <em>tính kém thanh khoản và bất cân xứng thông tin</em>.</p>"
    }
   ]
  },
  {
   "title": "Performance and Returns",
   "sections": [
    {
     "h": "Hedge fund fee mechanics",
     "en": "<p>Typical structure: a <strong>management fee</strong> (e.g., 2% of AUM) plus an <strong>incentive fee</strong> (e.g., 20% of profits). Variations that matter for calculations:</p><ul><li>Incentive fee on gross gains vs on gains <em>net of the management fee</em>.</li><li><strong>Hurdle rate:</strong> incentive fee applies only to returns above a threshold — <em>hard</em> hurdle (fee on excess over hurdle only) vs <em>soft</em> hurdle (fee on the whole gain once the hurdle is beaten).</li><li><strong>High-water mark:</strong> no incentive fee until the fund recovers past its previous peak NAV — prevents paying twice for the same gains.</li></ul><p>Performance measurement caveats: self-reported databases suffer <strong>survivorship and backfill bias</strong>; illiquid assets show <strong>smoothed returns</strong> → understated volatility and correlation → overstated Sharpe ratios. Alternatives are added to portfolios mainly for diversification and potentially higher returns from illiquidity premiums.</p>",
     "vi": "<p>Cấu trúc điển hình: <strong>phí quản lý</strong> (VD 2% AUM) + <strong>phí thưởng</strong> (VD 20% lợi nhuận). Các biến thể quan trọng khi tính toán:</p><ul><li>Phí thưởng tính trên lãi gộp hay lãi <em>sau khi trừ phí quản lý</em>.</li><li><strong>Hurdle rate:</strong> phí thưởng chỉ áp cho phần vượt ngưỡng — <em>hard</em> hurdle (chỉ tính trên phần vượt) vs <em>soft</em> hurdle (vượt ngưỡng thì tính trên toàn bộ lãi).</li><li><strong>High-water mark:</strong> không thu phí thưởng cho tới khi NAV vượt đỉnh cũ — tránh trả phí hai lần cho cùng một khoản lãi.</li></ul><p>Lưu ý đo lường: cơ sở dữ liệu tự khai báo bị <strong>survivorship bias và backfill bias</strong>; tài sản kém thanh khoản có <strong>lợi suất bị làm mượt</strong> → biến động và tương quan bị đánh giá thấp → Sharpe ratio bị thổi phồng. Alternatives được đưa vào danh mục chủ yếu để đa dạng hóa và hưởng phần bù kém thanh khoản.</p>"
    },
    {
     "h": "Measuring performance: IRR, the J-curve & the biases",
     "en": "<ul><li><strong>Timing is the GP’s:</strong> because capital is called and returned on the fund’s schedule, private funds are judged on <strong>money-weighted returns (IRR)</strong> and multiples — <em>MOIC</em> (total value / invested), DPI (distributed), RVPI (residual) — while liquid portfolios use time-weighted returns. Comparing an IRR to a TWR benchmark is apples-to-oranges.</li><li><strong>The J-curve:</strong> early years show <em>negative</em> returns — fees on committed capital, immature investments carried at cost — before value creation and exits pull performance up. Interim IRRs of young funds are nearly meaningless; vintage-year comparison is the honest lens.</li><li><strong>Reported-return biases:</strong> <em>survivorship bias</em> (dead funds vanish from databases) and <em>backfill bias</em> (successful funds join and import their good history) inflate index returns; <strong>appraisal smoothing</strong> of stale marks understates volatility and correlation — making Sharpe ratios and diversification claims look better than reality. Downside-focused measures (Sortino, maximum drawdown) and de-smoothing partially correct the picture.</li><li><strong>Fee nuance:</strong> incentive fees apply above the <em>hurdle</em> (hard hurdle: only the excess; soft: full gain once cleared), subject to the <em>high-water mark</em>; custom terms — founders’ shares, fee discounts for size or lockup, \"1-or-30\" — shift economics between LPs and GPs. Always compute investor returns <strong>net of all fees</strong>.</li></ul>",
     "vi": "<ul><li><strong>Thời điểm dòng tiền thuộc về GP:</strong> vì vốn được gọi và trả theo lịch của quỹ, quỹ tư nhân được chấm bằng <strong>lợi suất theo trọng số tiền (IRR)</strong> và các bội số — <em>MOIC</em> (tổng giá trị / vốn đầu tư), DPI (đã phân phối), RVPI (còn lại) — trong khi danh mục thanh khoản dùng lợi suất theo trọng số thời gian. So IRR với benchmark TWR là so táo với cam.</li><li><strong>Đường cong chữ J:</strong> các năm đầu lợi suất <em>âm</em> — phí tính trên vốn cam kết, khoản đầu tư non trẻ ghi theo giá vốn — trước khi tạo giá trị và thoái vốn kéo kết quả lên. IRR giữa kỳ của quỹ trẻ gần như vô nghĩa; so sánh theo vintage year mới trung thực.</li><li><strong>Thiên lệch của lợi suất công bố:</strong> <em>survivorship bias</em> (quỹ chết biến mất khỏi cơ sở dữ liệu) và <em>backfill bias</em> (quỹ thành công gia nhập, mang theo lịch sử đẹp) thổi phồng chỉ số; <strong>làm mượt theo định giá thẩm định</strong> khiến biến động và tương quan bị đánh giá thấp — làm Sharpe và câu chuyện đa dạng hóa đẹp hơn thực tế. Các thước đo thiên về rủi ro giảm giá (Sortino, drawdown tối đa) và kỹ thuật khử mượt sửa được một phần.</li><li><strong>Chi tiết phí:</strong> phí thưởng áp trên phần vượt <em>hurdle</em> (hard hurdle: chỉ phần vượt; soft: toàn bộ khi đã vượt), chịu ràng buộc <em>high-water mark</em>; điều khoản riêng — founders’ shares, giảm phí theo quy mô hay lockup, \"1-or-30\" — dịch chuyển lợi ích giữa LP và GP. Luôn tính lợi suất nhà đầu tư <strong>sau toàn bộ phí</strong>.</li></ul>"
    },
    {
     "h": "Fee math in three scenarios + the J-curve and the bias catalogue",
     "en": "<p><strong>Scenario 1 — a good year with 2&20.</strong> Fund AUM $100m at start, gross return 25% (ends 125 before fees). Management fee 2% on beginning AUM = 2. Incentive fee 20% of profits above an 8% <em>hard</em> hurdle, net of the management fee: profits above hurdle = 125 − 2 − 108 = 15 → incentive = 3. Investor ends with 125 − 2 − 3 = <strong>120 → net 20%</strong> versus 25% gross: fees consumed a fifth of the gross return.</p>\n<p><strong>Scenario 2 — the high-water mark at work.</strong> Year 2: the fund falls from 120 to 96 (mgmt fee still charged; no incentive). Year 3: it recovers to 118. Incentive is due only on gains <em>above the HWM of 120</em> — here, none — so investors are not charged twice for the same performance. Year 4: 132 → incentive applies to 132 − 120 = 12 only.</p>\n<p><strong>Scenario 3 — fee terms move returns as much as alpha.</strong> The same gross stream with a <em>soft</em> hurdle (fee on all profits once the hurdle is beaten), no hurdle, or \"1.5&15\" produces materially different nets — always read the terms. Private funds charge management fees on <em>committed</em> capital during the investment period (fees accrue on money not yet invested — one cause of the J-curve).</p>\n<svg viewBox=\"0 0 720 320\" style=\"width:100%;height:auto;display:block;margin:14px 0;background:#fff;border:1px solid #E5E9F2;border-radius:12px\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Private equity J curve\">\n<text x=\"360\" y=\"26\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" fill=\"#1B2438\">The J-curve: early pain, later gain</text>\n<line x1=\"70\" y1=\"180\" x2=\"680\" y2=\"180\" stroke=\"#5B6577\" stroke-width=\"1.5\"/>\n<line x1=\"70\" y1=\"290\" x2=\"70\" y2=\"50\" stroke=\"#5B6577\" stroke-width=\"1.5\"/>\n<text x=\"676\" y=\"198\" text-anchor=\"end\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" fill=\"#5B6577\">Fund year →</text>\n<text x=\"30\" y=\"62\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11\" fill=\"#5B6577\">Cumulative</text>\n<text x=\"30\" y=\"76\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11\" fill=\"#5B6577\">net return</text>\n<text x=\"56\" y=\"184\" text-anchor=\"end\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11\" fill=\"#5B6577\">0</text>\n<path d=\"M 80 182 C 150 230 200 252 260 250 C 340 246 420 180 500 120 C 560 80 620 65 665 60\" fill=\"none\" stroke=\"#5457E0\" stroke-width=\"3\"/>\n<text x=\"205\" y=\"282\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#DC4848\" font-weight=\"600\">years 1–4: fees on committed capital,</text>\n<text x=\"205\" y=\"297\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#DC4848\" font-weight=\"600\">costs hit before value is built</text>\n<text x=\"530\" y=\"105\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#0F9573\" font-weight=\"600\">exits & write-ups arrive —</text>\n<text x=\"530\" y=\"120\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#0F9573\" font-weight=\"600\">returns climb through positive territory</text>\n<text x=\"360\" y=\"314\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11\" fill=\"#8B5CF6\" font-weight=\"600\">Early IRRs of young funds are uninformative — judge PE funds late, and on realized cash (DPI), not marks alone.</text>\n</svg>\n<p><strong>Measuring performance when cash flows are irregular.</strong> Multiple of invested capital MOIC = total value (realized + residual)/invested — intuitive but <em>ignores time</em>. Since-inception IRR is the standard, but it is money-weighted: heavily shaped by the GP's timing of calls and exits. Distributed-to-paid-in (DPI) tracks realized cash — the \"cash-on-cash truth serum\" for a mature fund. Compare funds only against the same <em>vintage year</em>: macro conditions at launch dominate outcomes.</p>\n<table style=\"width:100%;border-collapse:collapse;font-size:13.5px;margin:10px 0\"><tr style=\"background:#EEF0FE\"><th style=\"padding:7px;border:1px solid #D6DAFB;text-align:left\">Bias</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Mechanism</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Direction</th></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Survivorship</td><td style=\"padding:7px;border:1px solid #E5E9F2\">dead funds drop out of databases</td><td style=\"padding:7px;border:1px solid #E5E9F2\">overstates index returns</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Backfill / self-selection</td><td style=\"padding:7px;border:1px solid #E5E9F2\">funds join databases after good runs, importing history</td><td style=\"padding:7px;border:1px solid #E5E9F2\">overstates returns</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Appraisal smoothing</td><td style=\"padding:7px;border:1px solid #E5E9F2\">stale, appraisal-based marks move slowly</td><td style=\"padding:7px;border:1px solid #E5E9F2\">understates volatility & correlation — alternatives look artificially \"diversifying\"</td></tr></table>",
     "vi": "<p><strong>Kịch bản 1 — một năm đẹp với 2&20.</strong> AUM đầu kỳ $100tr, lợi suất gộp 25% (lên 125 trước phí). Phí quản lý 2% trên AUM đầu kỳ = 2. Phí thành tích 20% phần lợi nhuận vượt hurdle <em>cứng</em> 8%, sau phí quản lý: phần vượt = 125 − 2 − 108 = 15 → phí thành tích = 3. Nhà đầu tư còn 125 − 2 − 3 = <strong>120 → net 20%</strong> so với 25% gộp: phí ăn một phần năm lợi suất gộp.</p>\n<p><strong>Kịch bản 2 — high-water mark vận hành.</strong> Năm 2: quỹ rơi từ 120 xuống 96 (vẫn thu phí quản lý; không phí thành tích). Năm 3: hồi lên 118. Phí thành tích chỉ tính trên phần lãi <em>vượt HWM 120</em> — ở đây không có — nên nhà đầu tư không bị tính hai lần cho cùng một thành quả. Năm 4: 132 → phí thành tích chỉ áp lên 132 − 120 = 12.</p>\n<p><strong>Kịch bản 3 — điều khoản phí dịch chuyển lợi suất ngang ngửa alpha.</strong> Cùng dòng lợi suất gộp nhưng hurdle <em>mềm</em> (thu phí trên toàn bộ lợi nhuận một khi vượt hurdle), không hurdle, hay \"1.5&15\" cho các mức net khác nhau rõ rệt — luôn đọc kỹ điều khoản. Quỹ private thu phí quản lý trên vốn <em>cam kết</em> trong giai đoạn đầu tư (phí chạy trên cả tiền chưa giải ngân — một nguyên nhân của J-curve).</p>\n<p><strong>Đo hiệu quả khi dòng tiền bất thường.</strong> MOIC = tổng giá trị (đã hiện thực + còn lại)/vốn đã bỏ — trực quan nhưng <em>bỏ qua thời gian</em>. IRR từ khởi đầu là chuẩn, nhưng nó money-weighted: bị thời điểm gọi vốn và thoái của GP nhào nặn mạnh. DPI (distributed-to-paid-in) theo dõi tiền thực trả — \"huyết thanh sự thật cash-on-cash\" của quỹ trưởng thành. Chỉ so quỹ cùng <em>vintage year</em>: điều kiện vĩ mô lúc khởi động chi phối kết quả.</p>\n<p><strong>Ba thiên lệch (bảng):</strong> survivorship — quỹ chết rơi khỏi cơ sở dữ liệu → thổi phồng lợi suất chỉ số; backfill/self-selection — quỹ gia nhập cơ sở dữ liệu sau chuỗi thành tích tốt, mang theo lịch sử → thổi phồng; appraisal smoothing — định giá thẩm định cũ kỹ dịch chuyển chậm → hạ thấp biến động & tương quan, khiến alternatives trông \"đa dạng hóa\" một cách giả tạo.</p>"
    }
   ],
   "formulas": [
    [
     "Total HF fee (2&20, net)",
     "Fee = 2%×AUM + 20%×max(0, gain − mgmt fee − hurdle)",
     "Check the question wording carefully"
    ],
    [
     "MOIC (multiple of invested capital)",
     "MOIC = (realized + residual value) / invested capital",
     "Ignores time — pair it with IRR and vintage-year context."
    ],
    [
     "DPI",
     "DPI = cumulative distributions / paid-in capital",
     "Cash actually returned — the truth serum for mature funds."
    ],
    [
     "High-water mark rule",
     "incentive fee only on gains above the highest prior NAV",
     "Prevents charging twice for the same performance."
    ]
   ]
  },
  {
   "title": "Private Capital: Equity and Debt",
   "sections": [
    {
     "h": "Private capital: equity and debt",
     "en": "<ul><li><strong>Private equity — two engines:</strong> <em>venture capital</em> funds young companies through stages (pre-seed/seed → early → later/growth), taking minority stakes in cash-burning businesses where most bets fail and a few return the fund. <em>Buyouts (LBOs)</em> acquire control of <strong>mature, stable-cash-flow companies</strong> using substantial debt; returns come from leverage, operational improvement, and multiple expansion. Management buys in (MBO) or new teams replace them (MBI).</li><li><strong>Exits</strong> decide realized returns: trade sale to a strategic buyer (often fastest, premium for synergies), IPO (highest potential price, costly and market-dependent), secondary sale to another sponsor, SPAC merger, recapitalization (dividend recap — a partial exit), or liquidation.</li><li><strong>Private debt</strong> spans the risk ladder: <em>direct lending</em> (senior secured loans to mid-market firms, often floating-rate, sometimes via <strong>unitranche</strong> blending senior and subordinated in one facility); <em>mezzanine</em> — subordinated debt with equity kickers (warrants, conversion) bridging debt and equity; <em>venture debt</em> for pre-profit companies; <em>distressed debt</em> — buying troubled credits to restructure or control.</li><li><strong>Risk/return profile:</strong> higher expected returns than public markets (illiquidity, leverage, control premia), long lockups, valuation uncertainty, and dispersion across managers that dwarfs public-fund dispersion — manager selection IS the asset class.</li></ul>",
     "vi": "<ul><li><strong>Private equity — hai động cơ:</strong> <em>venture capital</em> tài trợ công ty trẻ theo giai đoạn (pre-seed/seed → early → later/growth), nắm cổ phần thiểu số ở doanh nghiệp đang đốt tiền, nơi đa số thất bại và vài thương vụ gánh cả quỹ. <em>Buyout (LBO)</em> mua quyền kiểm soát <strong>doanh nghiệp trưởng thành, dòng tiền ổn định</strong> bằng nợ vay lớn; lợi nhuận đến từ đòn bẩy, cải thiện vận hành và nới bội số. Ban điều hành tự mua (MBO) hoặc đội mới thay thế (MBI).</li><li><strong>Thoái vốn</strong> quyết định lợi nhuận thực nhận: bán cho người mua chiến lược (thường nhanh nhất, có premium cộng hưởng), IPO (giá tiềm năng cao nhất, tốn kém và phụ thuộc thị trường), bán thứ cấp cho sponsor khác, sáp nhập SPAC, tái cấu trúc vốn (dividend recap — thoái một phần), hoặc thanh lý.</li><li><strong>Nợ tư nhân</strong> trải thang rủi ro: <em>direct lending</em> (vay senior có bảo đảm cho doanh nghiệp tầm trung, thường thả nổi, đôi khi qua <strong>unitranche</strong> gộp senior và thứ cấp vào một khoản); <em>mezzanine</em> — nợ thứ cấp kèm \"kicker\" cổ phần (warrant, chuyển đổi) bắc cầu giữa nợ và vốn; <em>venture debt</em> cho công ty chưa có lãi; <em>distressed debt</em> — mua nợ xấu để tái cấu trúc hoặc giành quyền kiểm soát.</li><li><strong>Hồ sơ rủi ro/lợi nhuận:</strong> kỳ vọng cao hơn thị trường đại chúng (phần bù kém thanh khoản, đòn bẩy, kiểm soát), lockup dài, định giá bất định, và độ phân tán giữa các manager lớn hơn hẳn quỹ đại chúng — chọn manager CHÍNH LÀ lớp tài sản này.</li></ul>"
    },
    {
     "h": "Across the company lifecycle: VC stages, a mini-LBO worked & the debt menu",
     "en": "<p><strong>Private equity maps to the company's age.</strong> Venture capital funds pre-profit companies: pre-seed/angel (idea), seed (product-market fit), Series A/B early stage (scaling revenue), later-stage/pre-IPO (mezzanine venture). <strong>Growth equity</strong> takes minority stakes in profitable, fast-growing firms. <strong>Buyouts</strong> acquire control of mature, cash-generative companies — usually with leverage. Return profiles differ accordingly: VC = high failure rate carried by a few huge winners (power-law); buyouts = moderate multiples on most deals, driven by leverage, operational improvement, and multiple expansion.</p>\n<p><strong>Mini-LBO worked.</strong> Buy a company for 100: fund 60 with debt, 40 with equity. Over 5 years, EBITDA grows and 20 of debt is repaid from cash flows. Exit at 130 with 40 debt remaining: equity proceeds = 130 − 40 = <strong>90 → MOIC 2.25×</strong> on the 40 invested (≈ 17.6% IRR). Decompose the 50 of equity gain: 30 from enterprise-value growth + 20 from deleveraging — leverage converts modest asset growth (100 → 130, i.e. 30%) into a 125% equity gain. The same math run in reverse explains why over-levered deals die in downturns.</p>\n<table style=\"width:100%;border-collapse:collapse;font-size:13.5px;margin:10px 0\"><tr style=\"background:#EEF0FE\"><th style=\"padding:7px;border:1px solid #D6DAFB;text-align:left\">Private debt</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Where it sits</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Return driver</th></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Direct lending</td><td style=\"padding:7px;border:1px solid #E5E9F2\">senior loans to mid-market firms banks skip</td><td style=\"padding:7px;border:1px solid #E5E9F2\">floating-rate spread; unitranche blends senior + junior into one facility</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Mezzanine</td><td style=\"padding:7px;border:1px solid #E5E9F2\">junior to bank debt, senior to equity</td><td style=\"padding:7px;border:1px solid #E5E9F2\">high coupon + equity kickers (warrants, conversion)</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Venture debt</td><td style=\"padding:7px;border:1px solid #E5E9F2\">loans to VC-backed startups</td><td style=\"padding:7px;border:1px solid #E5E9F2\">interest + warrants; extends runway without dilution</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Distressed debt</td><td style=\"padding:7px;border:1px solid #E5E9F2\">claims on troubled firms</td><td style=\"padding:7px;border:1px solid #E5E9F2\">buy debt cheap, drive restructuring, often loan-to-own</td></tr></table>\n<p><strong>Exits decide the IRR clock:</strong> trade sale to a strategic buyer (fastest, control premium), IPO (highest optics, lock-ups and market risk), secondary sale to another sponsor (now the most common), recapitalization (partial exit via releveraging), and write-off. The exit environment is a vintage-year lottery — one more reason fund comparisons must be vintage-matched.</p>",
     "vi": "<p><strong>Private equity ánh xạ theo tuổi công ty.</strong> Venture capital rót vào công ty chưa có lãi: pre-seed/angel (ý tưởng), seed (khớp sản phẩm-thị trường), Series A/B giai đoạn sớm (nhân rộng doanh thu), giai đoạn muộn/pre-IPO. <strong>Growth equity</strong> mua cổ phần thiểu số ở công ty có lãi tăng trưởng nhanh. <strong>Buyout</strong> mua quyền kiểm soát công ty trưởng thành sinh tiền — thường dùng đòn bẩy. Hồ sơ lợi suất khác nhau tương ứng: VC = tỷ lệ thất bại cao được vài người thắng khổng lồ gánh (phân phối lũy thừa); buyout = bội số vừa phải trên đa số thương vụ, dẫn dắt bởi đòn bẩy, cải thiện vận hành, và nở bội số.</p>\n<p><strong>Mini-LBO bằng ví dụ.</strong> Mua công ty giá 100: tài trợ 60 nợ, 40 vốn chủ. Qua 5 năm, EBITDA tăng và 20 nợ được trả từ dòng tiền. Thoái tại 130 với 40 nợ còn lại: tiền về vốn chủ = 130 − 40 = <strong>90 → MOIC 2,25×</strong> trên 40 đã bỏ (≈ 17,6% IRR). Phân rã 50 lãi vốn chủ: 30 từ tăng giá trị doanh nghiệp + 20 từ giảm nợ — đòn bẩy biến mức tăng tài sản khiêm tốn (100 → 130, tức 30%) thành lãi vốn chủ 125%. Cùng phép toán chạy ngược giải thích vì sao thương vụ nợ quá tay chết trong suy thoái.</p>\n<p><strong>Thực đơn nợ tư nhân (bảng):</strong> direct lending — khoản vay senior cho công ty tầm trung bị ngân hàng bỏ qua, spread thả nổi, unitranche trộn senior + junior vào một gói; mezzanine — dưới nợ ngân hàng, trên vốn chủ, coupon cao + \"equity kicker\" (warrant, quyền chuyển đổi); venture debt — cho startup được VC hậu thuẫn vay, lãi + warrant, kéo dài runway không pha loãng; distressed debt — mua quyền đòi công ty gặp nạn giá rẻ, thúc tái cấu trúc, thường loan-to-own.</p>\n<p><strong>Cửa thoái quyết định đồng hồ IRR:</strong> bán cho người mua chiến lược (nhanh nhất, có premium kiểm soát), IPO (đẹp mắt nhất, kèm lock-up và rủi ro thị trường), bán thứ cấp cho sponsor khác (nay phổ biến nhất), recapitalization (thoái một phần bằng tái đòn bẩy), và xóa sổ. Môi trường thoái là xổ số vintage-year — thêm một lý do so sánh quỹ phải khớp vintage.</p>"
    }
   ],
   "formulas": [
    [
     "LBO equity multiple",
     "MOIC = (exit value − remaining debt) / equity invested",
     "100 bought with 40 equity, exit 130 with 40 debt left → 90/40 = 2.25×."
    ]
   ]
  },
  {
   "title": "Real Estate and Infrastructure",
   "sections": [
    {
     "h": "Real estate & infrastructure",
     "en": "<ul><li><strong>Real estate’s four quadrants:</strong> equity vs debt × private vs public — direct ownership and private funds; mortgages and private RE debt; listed <strong>REITs</strong> (liquid, dividend-rich, tax-advantaged pass-throughs, but equity-market beta in the short run); and MBS. Property types: residential, commercial (office/retail/industrial), and specialized (hotels, data centers).</li><li><strong>Value and appraisal:</strong> income approach — value = <strong>NOI / cap rate</strong> (the workhorse); sales-comparison approach (adjusted comparables); cost approach (replacement cost, a ceiling for newer buildings). Appraised values lag markets → smoothed private RE indexes.</li><li><strong>Return drivers and risks:</strong> stable lease income + capital appreciation; inflation linkage through rents and land; risks: leverage, location and vacancy, interest-rate sensitivity, illiquidity, and regulatory/tax shifts.</li><li><strong>Infrastructure:</strong> long-lived monopolistic real assets with contracted or regulated cash flows — economic (transport, utilities, energy, digital) vs social (schools, hospitals). <em>Brownfield</em> — existing, operating assets: bond-like stable yields; <em>greenfield</em> — to be built: construction and demand risk, higher expected returns. Delivered directly, through funds, listed vehicles, or public–private partnerships (PPPs) where governments transfer construction/operation risk to private capital.</li></ul>",
     "vi": "<ul><li><strong>Bốn góc phần tư của bất động sản:</strong> vốn chủ vs nợ × tư nhân vs đại chúng — sở hữu trực tiếp và quỹ tư nhân; khoản vay thế chấp và nợ BĐS tư nhân; <strong>REIT</strong> niêm yết (thanh khoản, cổ tức cao, ưu đãi thuế pass-through, nhưng ngắn hạn mang beta thị trường cổ phiếu); và MBS. Loại tài sản: nhà ở, thương mại (văn phòng/bán lẻ/công nghiệp), chuyên dụng (khách sạn, trung tâm dữ liệu).</li><li><strong>Giá trị và thẩm định:</strong> phương pháp thu nhập — giá trị = <strong>NOI / cap rate</strong> (công cụ chủ lực); so sánh giao dịch (điều chỉnh tài sản tương đồng); chi phí thay thế (mức trần cho công trình mới). Giá thẩm định trễ thị trường → chỉ số BĐS tư nhân bị làm mượt.</li><li><strong>Nguồn lợi nhuận và rủi ro:</strong> thu nhập thuê ổn định + tăng giá vốn; gắn lạm phát qua tiền thuê và đất; rủi ro: đòn bẩy, vị trí và tỷ lệ trống, nhạy lãi suất, kém thanh khoản, thay đổi quy định/thuế.</li><li><strong>Hạ tầng:</strong> tài sản thực tuổi thọ dài, tính độc quyền, dòng tiền theo hợp đồng hoặc theo khung giá quản lý — kinh tế (giao thông, tiện ích, năng lượng, số) vs xã hội (trường học, bệnh viện). <em>Brownfield</em> — đã vận hành: lợi suất ổn định giống trái phiếu; <em>greenfield</em> — chưa xây: rủi ro xây dựng và nhu cầu, kỳ vọng cao hơn. Tiếp cận trực tiếp, qua quỹ, công cụ niêm yết, hoặc đối tác công–tư (PPP) nơi nhà nước chuyển rủi ro xây dựng/vận hành sang vốn tư nhân.</li></ul>"
    },
    {
     "h": "Cap-rate valuation worked, the capital stack & infrastructure's contract logic",
     "en": "<p><strong>Value the building.</strong> Gross rental income 120; vacancy & collection losses 6; operating expenses 34 → net operating income NOI = 120 − 6 − 34 = <strong>80</strong>. At a market cap rate of 6.5%: value = NOI/cap rate = 80/0.065 = <strong>1,231</strong>. Cap rate mechanics: it is the property's unlevered current yield — rates up or risk up → cap rates up → values down; NOI growth pushes values up. A cap-rate move from 6.5% to 7.5% alone cuts the value 13.3% with nothing changing in the building.</p>\n<svg viewBox=\"0 0 720 320\" style=\"width:100%;height:auto;display:block;margin:14px 0;background:#fff;border:1px solid #E5E9F2;border-radius:12px\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Real estate capital stack\">\n<text x=\"360\" y=\"26\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" fill=\"#1B2438\">The capital stack of a $1,231 property (from the cap-rate example)</text>\n<rect x=\"230\" y=\"50\" width=\"260\" height=\"120\" rx=\"8\" fill=\"#5457E0\"/>\n<text x=\"360\" y=\"100\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#fff\">Senior mortgage debt — 738</text>\n<text x=\"360\" y=\"122\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11\" fill=\"#E5E9F2\">LTV 60% · paid first · lowest cost</text>\n<rect x=\"230\" y=\"174\" width=\"260\" height=\"46\" rx=\"8\" fill=\"#B45309\"/>\n<text x=\"360\" y=\"194\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#fff\">Mezzanine debt — 123 (10%)</text>\n<text x=\"360\" y=\"211\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10\" fill=\"#FBF3E4\">higher rate, junior claim</text>\n<rect x=\"230\" y=\"224\" width=\"260\" height=\"66\" rx=\"8\" fill=\"#DC4848\"/>\n<text x=\"360\" y=\"252\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12.5\" font-weight=\"700\" fill=\"#fff\">Equity — 370 (30%)</text>\n<text x=\"360\" y=\"272\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10\" fill=\"#FDECEC\">residual claim · levered upside & first loss</text>\n<text x=\"150\" y=\"115\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#5B6577\">value falls 30% →</text>\n<text x=\"150\" y=\"130\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#DC4848\" font-weight=\"600\">equity wiped out,</text>\n<text x=\"150\" y=\"145\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#DC4848\" font-weight=\"600\">debt still whole</text>\n<text x=\"580\" y=\"115\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#5B6577\">value rises 10% →</text>\n<text x=\"580\" y=\"130\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#0F9573\" font-weight=\"600\">equity gains ~33%</text>\n<text x=\"580\" y=\"145\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#5B6577\">(leverage at work)</text>\n<text x=\"360\" y=\"312\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11.5\" fill=\"#8B5CF6\" font-weight=\"600\">Same seniority logic as corporate credit and securitization — the stack just wears a property address.</text>\n</svg>\n<p><strong>Leverage math on the stack.</strong> With 60% LTV senior debt (738) and 10% mezzanine (123), equity is 370. If value rises 10% (+123), equity gains ≈ 33%; a 30% value fall wipes equity while the senior loan stays covered — the same seniority logic as corporate credit. Other valuation routes: <em>sales comparison</em> (price per square meter of comparable transactions — best where markets are active) and <em>cost approach</em> (replacement cost less depreciation — a ceiling for newer buildings).</p>\n<p><strong>Access routes trade liquidity against control:</strong> direct ownership (control, management burden, lumpy), private funds/LP structures (core / core-plus / value-add / opportunistic risk ladder), private mortgages and mortgage funds (debt side), and <strong>REITs</strong> — listed, liquid, dividend-heavy, but their prices co-move with equities in the short run even as underlying NAVs crawl (appraisal smoothing again: private indexes look calm, REIT indexes look like stocks; the truth sits between).</p>\n<p><strong>Infrastructure = contract cash flows wearing concrete.</strong> Economic infrastructure (transport, energy, utilities, telecom) vs social (schools, hospitals, prisons). <em>Brownfield</em> (existing assets: regulated returns, immediate cash yield, lower risk) vs <em>greenfield</em> (build first: construction and demand risk, higher return targets). Cash flows are typically long-dated, contracted or regulated, and often inflation-linked (toll and tariff escalators) — bond-like duration with equity-style residual risks: regulatory resets, political interference, leverage, and (for greenfield) usage forecasts that miss. Public-private partnerships (PPP) allocate these risks by contract — the analysis is covenant reading as much as forecasting.</p>",
     "vi": "<p><strong>Định giá tòa nhà.</strong> Doanh thu thuê gộp 120; trống & thất thu 6; chi phí vận hành 34 → NOI = 120 − 6 − 34 = <strong>80</strong>. Tại cap rate thị trường 6,5%: giá trị = NOI/cap rate = 80/0,065 = <strong>1.231</strong>. Cơ học cap rate: đó là lợi suất hiện hành không đòn bẩy của bất động sản — lãi suất tăng hay rủi ro tăng → cap rate tăng → giá trị giảm; NOI tăng đẩy giá trị lên. Riêng cap rate dịch từ 6,5% lên 7,5% đã cắt 13,3% giá trị dù tòa nhà không đổi gì.</p>\n<p><strong>Toán đòn bẩy trên capital stack.</strong> Với nợ senior LTV 60% (738) và mezzanine 10% (123), vốn chủ là 370. Giá trị tăng 10% (+123) → vốn chủ lãi ≈ 33%; giá trị giảm 30% xóa sổ vốn chủ trong khi khoản vay senior vẫn được phủ — đúng logic thứ tự ưu tiên của tín dụng doanh nghiệp. Các đường định giá khác: <em>so sánh giao dịch</em> (giá mỗi m² của giao dịch tương đồng — tốt nhất nơi thị trường sôi động) và <em>chi phí thay thế</em> (chi phí xây lại trừ hao mòn — mức trần cho tòa nhà mới).</p>\n<p><strong>Các đường tiếp cận đánh đổi thanh khoản lấy kiểm soát:</strong> sở hữu trực tiếp (kiểm soát, gánh nặng quản lý, vốn cục), quỹ tư nhân/cấu trúc LP (thang rủi ro core / core-plus / value-add / opportunistic), cho vay thế chấp và quỹ nợ (phía debt), và <strong>REITs</strong> — niêm yết, thanh khoản, nặng cổ tức, nhưng giá đồng pha với cổ phiếu trong ngắn hạn dù NAV bên dưới bò chậm (lại appraisal smoothing: chỉ số private trông êm, chỉ số REIT trông như cổ phiếu; sự thật nằm giữa).</p>\n<p><strong>Hạ tầng = dòng tiền hợp đồng khoác áo bê tông.</strong> Hạ tầng kinh tế (giao thông, năng lượng, tiện ích, viễn thông) vs xã hội (trường, bệnh viện, nhà tù). <em>Brownfield</em> (tài sản hiện hữu: lợi suất theo quy định, tiền về ngay, rủi ro thấp hơn) vs <em>greenfield</em> (xây mới: rủi ro xây dựng và nhu cầu, mục tiêu lợi suất cao hơn). Dòng tiền thường rất dài hạn, theo hợp đồng hoặc quy định, và hay gắn lạm phát (điều khoản leo thang phí cầu đường, biểu giá) — duration kiểu trái phiếu với rủi ro phần dư kiểu cổ phiếu: reset quy định, can thiệp chính trị, đòn bẩy, và (với greenfield) dự báo lưu lượng trật đích. PPP phân bổ các rủi ro này bằng hợp đồng — phân tích là đọc điều khoản không kém gì dự phóng.</p>"
    }
   ],
   "formulas": [
    [
     "Income-approach value",
     "Value = NOI / cap rate",
     "Cap rate from comparable transactions"
    ],
    [
     "NOI",
     "NOI = rental income − vacancy/collection losses − operating expenses",
     "Excludes financing costs and income taxes."
    ],
    [
     "Income-approach value",
     "value = NOI / cap rate",
     "Cap rate up → value down; the unlevered current yield."
    ],
    [
     "LTV",
     "LTV = mortgage debt / property value",
     "Higher LTV = more levered equity — amplified gains and losses."
    ]
   ]
  },
  {
   "title": "Natural Resources",
   "sections": [
    {
     "h": "Natural resources: commodities, farmland & timberland",
     "en": "<ul><li><strong>Commodity exposure is futures exposure</strong> (physical storage is impractical), so total return has three parts: <strong>price (spot) return + roll return + collateral return</strong>. The curve decides the roll: in <em>backwardation</em> (futures below spot) rolling contracts adds positive roll yield; in <em>contango</em> (futures above spot) rolling bleeds return. Commodities pay no cash flows — valuation is supply/demand, inventories, and the cost-of-carry link between spot and futures.</li><li><strong>Why hold them:</strong> historically strong <em>inflation hedging</em> (commodities often cause the inflation others hedge against) and low correlation with stocks and bonds — at the price of high volatility and long stretches of negative carry.</li><li><strong>Farmland</strong> earns harvest income + land appreciation: inflation-linked, low correlation, but weather/yield risk and severe illiquidity. <strong>Timberland</strong> adds a unique option: trees keep growing, so harvest can be <em>delayed</em> when prices are low — biological growth is return \"stored on the stump.\" Both increasingly carry ESG and water-rights considerations.</li></ul>",
     "vi": "<ul><li><strong>Tiếp cận hàng hóa là tiếp cận futures</strong> (lưu kho vật chất bất khả thi), nên tổng lợi suất gồm ba phần: <strong>lợi suất giá (spot) + lợi suất roll + lợi suất tài sản thế chấp</strong>. Hình dáng đường cong quyết định roll: <em>backwardation</em> (futures dưới spot) → cuộn hợp đồng cộng roll yield dương; <em>contango</em> (futures trên spot) → cuộn hợp đồng rỉ máu lợi suất. Hàng hóa không trả dòng tiền — định giá bằng cung/cầu, tồn kho và liên kết cost-of-carry giữa spot và futures.</li><li><strong>Vì sao nắm giữ:</strong> lịch sử <em>phòng hộ lạm phát</em> mạnh (hàng hóa thường chính là nguyên nhân của lạm phát mà tài sản khác phải phòng) và tương quan thấp với cổ phiếu, trái phiếu — đổi bằng biến động cao và những giai đoạn dài carry âm.</li><li><strong>Đất nông nghiệp</strong> sinh lợi từ mùa vụ + tăng giá đất: gắn lạm phát, tương quan thấp, nhưng rủi ro thời tiết/năng suất và kém thanh khoản nặng. <strong>Đất rừng</strong> có quyền chọn độc đáo: cây vẫn lớn, nên có thể <em>hoãn</em> khai thác khi giá thấp — tăng trưởng sinh học là lợi nhuận \"cất trên gốc cây\". Cả hai ngày càng gắn với cân nhắc ESG và quyền nước.</li></ul>"
    },
    {
     "h": "Commodities: decompose the futures return & the farmland/timber option",
     "en": "<svg viewBox=\"0 0 720 330\" style=\"width:100%;height:auto;display:block;margin:14px 0;background:#fff;border:1px solid #E5E9F2;border-radius:12px\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Contango and backwardation with roll yield\">\n<text x=\"360\" y=\"26\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" fill=\"#1B2438\">Roll yield: the shape of the curve decides the sign</text>\n<g>\n<line x1=\"60\" y1=\"240\" x2=\"330\" y2=\"240\" stroke=\"#5B6577\" stroke-width=\"1.2\"/>\n<line x1=\"80\" y1=\"240\" x2=\"80\" y2=\"80\" stroke=\"#5B6577\" stroke-width=\"1.2\"/>\n<text x=\"195\" y=\"262\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11\" fill=\"#5B6577\">maturity →</text>\n<circle cx=\"95\" cy=\"188\" r=\"4.5\" fill=\"#1B2438\"/>\n<text x=\"95\" y=\"176\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2438\">spot</text>\n<path d=\"M 95 188 C 170 160 250 130 315 112\" fill=\"none\" stroke=\"#DC4848\" stroke-width=\"2.6\"/>\n<text x=\"195\" y=\"98\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12.5\" font-weight=\"700\" fill=\"#DC4848\">Contango (F &gt; S)</text>\n<text x=\"195\" y=\"286\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#DC4848\" font-weight=\"600\">buy high, converge down to spot →</text>\n<text x=\"195\" y=\"301\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#DC4848\" font-weight=\"600\">roll yield NEGATIVE</text>\n</g>\n<g>\n<line x1=\"390\" y1=\"240\" x2=\"660\" y2=\"240\" stroke=\"#5B6577\" stroke-width=\"1.2\"/>\n<line x1=\"410\" y1=\"240\" x2=\"410\" y2=\"80\" stroke=\"#5B6577\" stroke-width=\"1.2\"/>\n<text x=\"525\" y=\"262\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11\" fill=\"#5B6577\">maturity →</text>\n<circle cx=\"425\" cy=\"120\" r=\"4.5\" fill=\"#1B2438\"/>\n<text x=\"425\" y=\"108\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" font-weight=\"700\" fill=\"#1B2438\">spot</text>\n<path d=\"M 425 120 C 500 148 580 178 645 196\" fill=\"none\" stroke=\"#0F9573\" stroke-width=\"2.6\"/>\n<text x=\"530\" y=\"98\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12.5\" font-weight=\"700\" fill=\"#0F9573\">Backwardation (F &lt; S)</text>\n<text x=\"525\" y=\"286\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#0F9573\" font-weight=\"600\">buy low, converge up to spot →</text>\n<text x=\"525\" y=\"301\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#0F9573\" font-weight=\"600\">roll yield POSITIVE</text>\n</g>\n<text x=\"360\" y=\"52\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11\" fill=\"#5B6577\">Futures total return = spot price return + roll yield + collateral yield</text>\n</svg>\n<p><strong>Decompose a collateralized futures return.</strong> An investor holds fully collateralized long futures for a year: spot price return +4%, collateral (T-bill) yield +3%, and the curve was in contango so rolling contracts cost −2% → total return = 4 + 3 − 2 = <strong>+5%</strong>. Had the curve been backwardated with +2% roll: total = <strong>+9%</strong>. The lesson exam questions circle endlessly: two investors with identical spot-price views earn very different returns depending on curve shape — <em>the roll, not the spot forecast, decides commodity index performance over long horizons</em>.</p>\n<p><strong>Why no DCF works here.</strong> Commodities pay no cash flows, so value comes from expected supply/demand and the cost-of-carry relationship from Derivatives: F ≈ S + financing + storage − convenience yield. Tight inventories raise the convenience yield → backwardation (positive roll); ample storage-heavy markets (historically oil in glut, grains post-harvest) sit in contango. Fundamentals to track: production cycles and disruptions (weather, geopolitics), inventories (\"stocks-to-use\"), demand growth, and the dollar (commodities price in USD).</p>\n<p><strong>Portfolio role, honestly stated:</strong> commodity returns correlate with <em>unexpected</em> inflation better than stocks or bonds do (energy and food drive CPI surprises) — the classic inflation-hedge argument — at the price of high volatility and long flat stretches. Gold behaves separately: a monetary/safe-haven asset more than an industrial one.</p>\n<table style=\"width:100%;border-collapse:collapse;font-size:13.5px;margin:10px 0\"><tr style=\"background:#EEF0FE\"><th style=\"padding:7px;border:1px solid #D6DAFB;text-align:left\"></th><th style=\"padding:7px;border:1px solid #D6DAFB\">Farmland</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Timberland</th></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Cash flow</td><td style=\"padding:7px;border:1px solid #E5E9F2\">annual harvests + land appreciation; row crops (annual, flexible) vs permanent crops (vines/orchards — years to establish, then locked in)</td><td style=\"padding:7px;border:1px solid #E5E9F2\">timber sales + land; biological growth continues regardless of markets</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">The embedded option</td><td style=\"padding:7px;border:1px solid #E5E9F2\">switch row crops season by season</td><td style=\"padding:7px;border:1px solid #E5E9F2\"><strong>harvest timing</strong>: cut when prices are high, let trees grow (and gain value) when prices are low</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Key risks</td><td style=\"padding:7px;border:1px solid #E5E9F2\">weather, water rights, crop prices, low liquidity</td><td style=\"padding:7px;border:1px solid #E5E9F2\">fire/pests, lumber demand cycles, very long horizons</td></tr></table>",
     "vi": "<p><strong>Phân rã lợi suất futures có tài sản đảm bảo đầy đủ.</strong> Nhà đầu tư giữ long futures được thế chấp đủ trong một năm: lợi suất giá spot +4%, lợi suất tài sản đảm bảo (T-bill) +3%, và đường cong đang contango nên đảo hợp đồng tốn −2% → tổng lợi suất = 4 + 3 − 2 = <strong>+5%</strong>. Nếu đường cong backwardation với roll +2%: tổng = <strong>+9%</strong>. Bài học mà câu hỏi thi xoay quanh mãi: hai nhà đầu tư cùng quan điểm giá spot nhận lợi suất rất khác nhau tùy hình dạng đường cong — <em>roll, chứ không phải dự báo spot, quyết định hiệu quả chỉ số hàng hóa trên kỳ hạn dài</em>.</p>\n<p><strong>Vì sao DCF vô dụng ở đây.</strong> Hàng hóa không trả dòng tiền, nên giá trị đến từ cung/cầu kỳ vọng và quan hệ cost-of-carry bên Derivatives: F ≈ S + tài trợ + lưu kho − convenience yield. Tồn kho căng đẩy convenience yield lên → backwardation (roll dương); thị trường dư thừa nặng lưu kho (dầu thời thừa cung, ngũ cốc sau vụ) nằm trong contango. Yếu tố cơ bản cần theo: chu kỳ sản xuất và gián đoạn (thời tiết, địa chính trị), tồn kho (\"stocks-to-use\"), tăng trưởng cầu, và đồng USD (hàng hóa định giá bằng USD).</p>\n<p><strong>Vai trò trong danh mục, nói thẳng:</strong> lợi suất hàng hóa tương quan với lạm phát <em>bất ngờ</em> tốt hơn cổ phiếu hay trái phiếu (năng lượng và lương thực dẫn dắt bất ngờ CPI) — lập luận phòng hộ lạm phát kinh điển — đổi bằng biến động cao và những quãng đi ngang dài. Vàng cư xử riêng: tài sản tiền tệ/trú ẩn hơn là công nghiệp.</p>\n<p><strong>Farmland vs timberland (bảng):</strong> dòng tiền — thu hoạch hằng năm + tăng giá đất, cây ngắn ngày (linh hoạt mỗi vụ) vs cây lâu năm (vườn nho/cây ăn quả — mất nhiều năm gây dựng rồi bị khóa) | bán gỗ + đất, cây tự lớn bất kể thị trường; quyền chọn nhúng — đổi cây trồng theo mùa | <strong>chọn thời điểm khai thác</strong>: đốn khi giá cao, để cây lớn tiếp (và tăng giá trị) khi giá thấp; rủi ro chính — thời tiết, quyền nước, giá nông sản, kém thanh khoản | cháy/sâu bệnh, chu kỳ cầu gỗ xẻ, kỳ hạn rất dài.</p>"
    }
   ],
   "formulas": [
    [
     "Commodity futures return",
     "Collateral yield + roll yield + spot price change",
     "Roll yield > 0 in backwardation"
    ],
    [
     "Futures total return",
     "total = spot price return + roll yield + collateral yield",
     "The decomposition every commodity question uses."
    ],
    [
     "Roll yield sign",
     "contango → negative roll · backwardation → positive roll",
     "The curve's shape, not the spot forecast, drives long-run index returns."
    ]
   ]
  },
  {
   "title": "Hedge Funds",
   "sections": [
    {
     "h": "Hedge funds: strategies and structure",
     "en": "<ul><li><strong>Four strategy families:</strong> <em>equity</em> — long/short (net exposure managed), market-neutral (zero beta, pure alpha bets), dedicated short; <em>event-driven</em> — merger arbitrage (long target/short acquirer, earning the deal spread against deal-break risk), distressed, activist; <em>relative value</em> — convertible or fixed-income arbitrage harvesting pricing gaps with leverage; <em>opportunistic/macro</em> — global macro (top-down bets on rates, FX, commodities) and managed futures/CTAs (systematic trend following, historically strong in crises).</li><li><strong>Structure and liquidity management:</strong> private vehicles for qualified investors; <em>lockups</em> (no redemption initially), <em>notice periods</em>, redemption <strong>gates</strong> (limit outflows per period), and <em>side pockets</em> isolating illiquid positions — tools that let managers hold illiquid trades without fire sales, and that investors must price in.</li><li><strong>Return character:</strong> absolute-return mandates, wide use of leverage, shorting and derivatives; historically equity-like returns with lower volatility, but tail events cluster (crowded trades unwind together) and reported indexes overstate results (survivorship/backfill).</li></ul>",
     "vi": "<ul><li><strong>Bốn họ chiến lược:</strong> <em>cổ phiếu</em> — long/short (quản trị độ phơi nhiễm ròng), market-neutral (beta bằng 0, đặt cược alpha thuần), chuyên bán khống; <em>theo sự kiện</em> — merger arbitrage (mua target/bán acquirer, ăn chênh lệch thương vụ đổi lấy rủi ro deal đổ vỡ), distressed, activist; <em>giá trị tương đối</em> — arbitrage trái phiếu chuyển đổi hoặc fixed income, gặt khe hở định giá bằng đòn bẩy; <em>cơ hội/vĩ mô</em> — global macro (đặt cược top-down vào lãi suất, FX, hàng hóa) và managed futures/CTA (bám xu hướng hệ thống, lịch sử tốt trong khủng hoảng).</li><li><strong>Cấu trúc và quản trị thanh khoản:</strong> quỹ tư nhân cho nhà đầu tư đủ chuẩn; <em>lockup</em> (cấm rút ban đầu), <em>thời hạn báo trước</em>, <strong>gate</strong> (giới hạn rút mỗi kỳ), và <em>side pocket</em> cô lập vị thế kém thanh khoản — công cụ giúp manager giữ vị thế khó bán mà không phải bán tháo, và nhà đầu tư phải định giá các ràng buộc này.</li><li><strong>Tính chất lợi suất:</strong> mục tiêu lợi nhuận tuyệt đối, dùng nhiều đòn bẩy, bán khống, phái sinh; lịch sử lợi suất gần cổ phiếu với biến động thấp hơn, nhưng sự kiện đuôi dồn cụm (các vị thế đông đúc tháo cùng lúc) và chỉ số công bố phóng đại kết quả (survivorship/backfill).</li></ul>"
    },
    {
     "h": "The strategy map with worked mini-trades + the liquidity architecture",
     "en": "<table style=\"width:100%;border-collapse:collapse;font-size:13.5px;margin:10px 0\"><tr style=\"background:#EEF0FE\"><th style=\"padding:7px;border:1px solid #D6DAFB;text-align:left\">Family</th><th style=\"padding:7px;border:1px solid #D6DAFB\">The trade</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Return driver / key risk</th></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Equity long/short</td><td style=\"padding:7px;border:1px solid #E5E9F2\">long 130 / short 70 → net +60, gross 200</td><td style=\"padding:7px;border:1px solid #E5E9F2\">stock selection both ways; residual market beta</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Equity market neutral</td><td style=\"padding:7px;border:1px solid #E5E9F2\">long 100 / short 100 → net ≈ 0</td><td style=\"padding:7px;border:1px solid #E5E9F2\">pure relative picks, low vol — usually levered; crowding risk</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Event-driven (merger arb)</td><td style=\"padding:7px;border:1px solid #E5E9F2\">target trades at 48 vs a 50 cash bid → buy, earn the 2 spread if the deal closes</td><td style=\"padding:7px;border:1px solid #E5E9F2\">insurance-like: many small wins, occasional −20% deal break — negative skew</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Distressed / activist</td><td style=\"padding:7px;border:1px solid #E5E9F2\">buy claims or stakes, drive restructuring/change</td><td style=\"padding:7px;border:1px solid #E5E9F2\">process outcomes; illiquidity</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Relative value (FI arb, convertible arb)</td><td style=\"padding:7px;border:1px solid #E5E9F2\">long cheap security vs short rich near-twin</td><td style=\"padding:7px;border:1px solid #E5E9F2\">spread convergence; blows up when spreads widen and leverage forces exits</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Global macro / managed futures (CTA)</td><td style=\"padding:7px;border:1px solid #E5E9F2\">directional rates/FX/commodities; systematic trend-following</td><td style=\"padding:7px;border:1px solid #E5E9F2\">macro turns; trends — historically shine in crises (\"crisis alpha\")</td></tr></table>\n<p><strong>Read the exposures like an analyst.</strong> Net exposure (long − short) measures market directionality; gross exposure (long + short) measures leverage in use. The market-neutral fund above with 3× leverage has net 0 but gross 600 — its risk is <em>not</em> zero; it is concentrated in the relative bets and in financing. Merger-arb's payoff shape (small steady gains, rare large losses) is why hedge fund return <em>distributions</em> — skew and kurtosis, from Quant — matter more than average returns.</p>\n<p><strong>The liquidity architecture exists because strategies hold illiquid positions:</strong> initial <strong>lock-ups</strong> (no redemptions for 1–2 years), <strong>redemption notice periods</strong> (30–90 days), <strong>gates</strong> (caps on redemptions per period to prevent fire sales), and <strong>side pockets</strong> (illiquid positions segregated so redeeming investors don't strip the liquid book and leave others holding the dregs). Add the plumbing: prime brokers provide leverage, stock loan, and custody — and their margin terms transmit stress (2008: prime-broker deleveraging forced simultaneous unwinds across funds). Funds of funds offer diversification and access for smaller investors at the cost of a second fee layer and slower liquidity. For the exam: every structural feature answers a specific mismatch between strategy liquidity and investor liquidity.</p>",
     "vi": "<p><strong>Bản đồ chiến lược với giao dịch mini (bảng):</strong> equity long/short — long 130 / short 70 → net +60, gross 200; chọn cổ phiếu hai chiều, còn sót beta thị trường. Market neutral — long 100 / short 100 → net ≈ 0; thuần chọn tương đối, biến động thấp — thường dùng đòn bẩy; rủi ro chen chúc. Event-driven (merger arb) — cổ phiếu mục tiêu 48 với giá chào mua tiền mặt 50 → mua, ăn spread 2 nếu thương vụ đóng; giống bán bảo hiểm: nhiều khoản thắng nhỏ, thỉnh thoảng −20% khi thương vụ vỡ — lệch âm. Distressed/activist — mua quyền đòi hoặc cổ phần, thúc tái cấu trúc/thay đổi; kết quả phụ thuộc quy trình pháp lý; kém thanh khoản. Relative value (FI arb, convertible arb) — long chứng khoán rẻ vs short \"anh em sinh đôi\" đắt; hội tụ spread; nổ khi spread toác rộng và đòn bẩy ép thoát hàng. Global macro / managed futures (CTA) — định hướng lãi suất/FX/hàng hóa; đi theo xu hướng hệ thống; lịch sử tỏa sáng trong khủng hoảng (\"crisis alpha\").</p>\n<p><strong>Đọc phơi nhiễm như nhà phân tích.</strong> Net exposure (long − short) đo tính định hướng thị trường; gross exposure (long + short) đo mức đòn bẩy đang dùng. Quỹ market-neutral trên với đòn bẩy 3× có net 0 nhưng gross 600 — rủi ro của nó <em>không</em> bằng 0; nó dồn vào các cược tương đối và vào tài trợ. Hình dạng payoff của merger-arb (lãi nhỏ đều đặn, lỗ lớn hiếm hoi) là lý do <em>phân phối</em> lợi suất hedge fund — skew và kurtosis, từ Quant — quan trọng hơn lợi suất trung bình.</p>\n<p><strong>Kiến trúc thanh khoản tồn tại vì chiến lược nắm vị thế kém thanh khoản:</strong> <strong>lock-up</strong> ban đầu (không rút 1–2 năm), <strong>thời gian báo trước rút vốn</strong> (30–90 ngày), <strong>gates</strong> (trần rút mỗi kỳ để tránh bán tháo), và <strong>side pockets</strong> (tách vị thế kém thanh khoản để người rút không vét sổ thanh khoản, bỏ lại người ở lại ôm cặn). Thêm hệ ống nước: prime broker cấp đòn bẩy, cho mượn cổ phiếu, lưu ký — và điều khoản ký quỹ của họ truyền dẫn căng thẳng (2008: prime broker giảm đòn bẩy ép các quỹ đồng loạt tháo vị thế). Funds of funds cho đa dạng hóa và cửa vào cho nhà đầu tư nhỏ, đổi bằng lớp phí thứ hai và thanh khoản chậm hơn. Cho đề thi: mỗi đặc tính cấu trúc trả lời một lệch pha cụ thể giữa thanh khoản chiến lược và thanh khoản nhà đầu tư.</p>"
    }
   ],
   "formulas": [
    [
     "Net & gross exposure",
     "net = long − short · gross = long + short",
     "Net measures direction; gross measures leverage in use."
    ]
   ]
  },
  {
   "title": "Introduction to Digital Assets",
   "sections": [
    {
     "h": "Digital assets: blockchain, coins, tokens & how to hold them",
     "en": "<ul><li><strong>The plumbing:</strong> a blockchain is a distributed ledger (DLT) — transactions batched into cryptographically linked blocks, validated by network <em>consensus</em> (energy-hungry proof-of-work or stake-based proof-of-stake) rather than a central authority; records are effectively immutable. Keys, not names, control assets: lose the private key, lose the asset.</li><li><strong>The assets:</strong> cryptocurrencies (bitcoin, ether) — no cash flows, valuation rests on scarcity and adoption; <em>stablecoins</em> pegged to fiat (quality depends entirely on reserves); <em>tokens</em> — utility, governance, security tokens, NFTs; and <strong>tokenization</strong> of real-world assets, which may fractionalize and speed settlement of traditionally illiquid holdings.</li><li><strong>Getting exposure:</strong> direct ownership (exchange + wallet: custody, hacking, and key risk), exchange-traded products and trusts (convenient, tracking and fee drag), futures-based exposure (roll costs), or equities of ecosystem companies (miners, exchanges) — each with distinct risk plumbing.</li><li><strong>Investment character and risks:</strong> extreme volatility, unstable correlations (diversification claims are fragile), fraud and platform failures, evolving regulation, and operational/custody risk — position sizes should assume total-loss scenarios.</li></ul>",
     "vi": "<ul><li><strong>Hạ tầng:</strong> blockchain là sổ cái phân tán (DLT) — giao dịch gom thành các khối liên kết mật mã, được xác thực bằng <em>đồng thuận</em> mạng lưới (proof-of-work tốn năng lượng hoặc proof-of-stake theo cổ phần) thay vì một trung tâm; bản ghi gần như bất biến. Khóa, không phải danh tính, kiểm soát tài sản: mất private key là mất tài sản.</li><li><strong>Các loại tài sản:</strong> tiền mã hóa (bitcoin, ether) — không dòng tiền, định giá dựa vào khan hiếm và mức chấp nhận; <em>stablecoin</em> neo tiền pháp định (chất lượng phụ thuộc hoàn toàn vào dự trữ); <em>token</em> — tiện ích, quản trị, chứng khoán, NFT; và <strong>token hóa</strong> tài sản thực — có thể chia nhỏ và tăng tốc thanh toán cho các tài sản truyền thống kém thanh khoản.</li><li><strong>Cách tiếp cận:</strong> sở hữu trực tiếp (sàn + ví: rủi ro lưu ký, hack, mất khóa), sản phẩm niêm yết và trust (tiện, nhưng lệch tracking và phí), qua futures (chi phí roll), hoặc cổ phiếu công ty hệ sinh thái (đào coin, sàn) — mỗi đường một bộ rủi ro riêng.</li><li><strong>Tính chất đầu tư và rủi ro:</strong> biến động cực lớn, tương quan bất ổn (luận điểm đa dạng hóa mong manh), gian lận và sập nền tảng, quy định đang định hình, rủi ro vận hành/lưu ký — quy mô vị thế nên giả định kịch bản mất trắng.</li></ul>"
    },
    {
     "h": "Digital assets: the trust machine, the valuation vacuum & the access menu",
     "en": "<svg viewBox=\"0 0 720 300\" style=\"width:100%;height:auto;display:block;margin:14px 0;background:#fff;border:1px solid #E5E9F2;border-radius:12px\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"How a blockchain links blocks\">\n<text x=\"360\" y=\"26\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" fill=\"#1B2438\">Why a blockchain is hard to rewrite</text>\n<g>\n<rect x=\"60\" y=\"70\" width=\"170\" height=\"130\" rx=\"10\" fill=\"#EEF0FE\" stroke=\"#5457E0\" stroke-width=\"1.5\"/>\n<text x=\"145\" y=\"96\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#4338CA\">Block 41</text>\n<text x=\"145\" y=\"120\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10\" fill=\"#1B2438\">transactions batch</text>\n<text x=\"145\" y=\"140\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10\" fill=\"#5B6577\">prev hash: …9f2</text>\n<text x=\"145\" y=\"164\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" font-weight=\"700\" fill=\"#5457E0\">hash: a7c4…</text>\n</g>\n<g>\n<rect x=\"275\" y=\"70\" width=\"170\" height=\"130\" rx=\"10\" fill=\"#EEF0FE\" stroke=\"#5457E0\" stroke-width=\"1.5\"/>\n<text x=\"360\" y=\"96\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#4338CA\">Block 42</text>\n<text x=\"360\" y=\"120\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10\" fill=\"#1B2438\">transactions batch</text>\n<text x=\"360\" y=\"140\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#B45309\">prev hash: a7c4…</text>\n<text x=\"360\" y=\"164\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" font-weight=\"700\" fill=\"#5457E0\">hash: 5e91…</text>\n</g>\n<g>\n<rect x=\"490\" y=\"70\" width=\"170\" height=\"130\" rx=\"10\" fill=\"#EEF0FE\" stroke=\"#5457E0\" stroke-width=\"1.5\"/>\n<text x=\"575\" y=\"96\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#4338CA\">Block 43</text>\n<text x=\"575\" y=\"120\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10\" fill=\"#1B2438\">transactions batch</text>\n<text x=\"575\" y=\"140\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10\" font-weight=\"700\" fill=\"#B45309\">prev hash: 5e91…</text>\n<text x=\"575\" y=\"164\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" font-weight=\"700\" fill=\"#5457E0\">hash: c2d8…</text>\n</g>\n<line x1=\"232\" y1=\"135\" x2=\"272\" y2=\"135\" stroke=\"#5B6577\" stroke-width=\"2.2\" marker-end=\"url(#bcA)\"/>\n<line x1=\"447\" y1=\"135\" x2=\"487\" y2=\"135\" stroke=\"#5B6577\" stroke-width=\"2.2\" marker-end=\"url(#bcA)\"/>\n<defs><marker id=\"bcA\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L8,4 L0,8 z\" fill=\"#5B6577\"/></marker></defs>\n<text x=\"360\" y=\"234\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11.5\" fill=\"#1B2438\">Each block stores the previous block's hash. Alter one old transaction → its hash changes → every later block breaks.</text>\n<text x=\"360\" y=\"262\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11.5\" fill=\"#8B5CF6\" font-weight=\"600\">Consensus (PoW mining or PoS staking) decides who appends the next block — no central authority required.</text>\n</svg>\n<p><strong>The mechanism in three sentences.</strong> A blockchain is a distributed ledger where transactions are batched into blocks, each block carries the previous block's hash, and copies live on thousands of nodes. Rewriting history means redoing every later block on most of the network simultaneously — economically prohibitive by design. <strong>Consensus</strong> selects who appends the next block: proof-of-work (miners burn electricity solving puzzles; extremely energy-hungry) or proof-of-stake (validators post capital that can be slashed; the efficient successor).</p>\n<p><strong>The vocabulary the exam tests.</strong> <em>Coins</em> are native to their own chain (Bitcoin, Ether); <em>tokens</em> are built on existing chains: utility tokens (access to a service), governance tokens (voting), security tokens (digitized claims — regulated like securities), non-fungible tokens (unique items), and <strong>stablecoins</strong> — pegged to fiat via reserves or algorithms; reserve quality is everything, and algorithmic pegs have failed spectacularly (depegging risk). <strong>Tokenization</strong> of real assets (property, funds, bonds) promises fractional ownership and instant settlement; <strong>CBDCs</strong> are central-bank-issued digital money — the anti-crypto in governance terms. Smart contracts automate the plumbing (and DeFi builds lending/exchange from them — with code-exploit risk replacing counterparty risk).</p>\n<p><strong>The valuation vacuum.</strong> No cash flows → no DCF; valuation rests on scarcity (fixed supply schedules), network adoption, production cost anchors, and store-of-value narratives — all contested. Empirically: extreme volatility, drawdowns beyond 70%, correlations with equities that <em>rise in stress</em> (weakening the diversification pitch exactly when it matters), and episodes of fraud, exchange failure, and regulatory shocks.</p>\n<table style=\"width:100%;border-collapse:collapse;font-size:13.5px;margin:10px 0\"><tr style=\"background:#EEF0FE\"><th style=\"padding:7px;border:1px solid #D6DAFB;text-align:left\">Access route</th><th style=\"padding:7px;border:1px solid #D6DAFB\">What you hold</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Key issue</th></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Direct (self-custody)</td><td style=\"padding:7px;border:1px solid #E5E9F2\">the asset via your keys</td><td style=\"padding:7px;border:1px solid #E5E9F2\">lose the keys, lose everything; no recourse</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Exchange custody</td><td style=\"padding:7px;border:1px solid #E5E9F2\">a claim on the exchange</td><td style=\"padding:7px;border:1px solid #E5E9F2\">counterparty/failure risk (history is unkind)</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Spot ETPs / trusts</td><td style=\"padding:7px;border:1px solid #E5E9F2\">listed wrapper</td><td style=\"padding:7px;border:1px solid #E5E9F2\">fees; trusts can trade at premiums/discounts to NAV</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Futures-based products</td><td style=\"padding:7px;border:1px solid #E5E9F2\">rolled futures exposure</td><td style=\"padding:7px;border:1px solid #E5E9F2\">contango roll costs drag returns (module 4's lesson again)</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Equity proxies</td><td style=\"padding:7px;border:1px solid #E5E9F2\">miners, exchanges, holders</td><td style=\"padding:7px;border:1px solid #E5E9F2\">levered, imperfect tracking + business risk</td></tr></table>",
     "vi": "<p><strong>Cơ chế trong ba câu.</strong> Blockchain là sổ cái phân tán nơi giao dịch được gom vào block, mỗi block mang hash của block trước, và bản sao sống trên hàng nghìn node. Viết lại lịch sử nghĩa là làm lại mọi block sau đó trên đa số mạng lưới cùng lúc — bị thiết kế để bất khả thi về kinh tế. <strong>Đồng thuận</strong> chọn ai gắn block kế: proof-of-work (thợ đào đốt điện giải đố; cực ngốn năng lượng) hoặc proof-of-stake (validator đặt cọc vốn có thể bị cắt; người kế nhiệm hiệu quả).</p>\n<p><strong>Bộ từ vựng đề thi hỏi.</strong> <em>Coins</em> là bản địa của chain riêng (Bitcoin, Ether); <em>tokens</em> xây trên chain có sẵn: utility token (quyền dùng dịch vụ), governance token (biểu quyết), security token (quyền tài chính số hóa — quản lý như chứng khoán), NFT (vật phẩm duy nhất), và <strong>stablecoin</strong> — neo vào fiat bằng dự trữ hoặc thuật toán; chất lượng dự trữ là tất cả, và neo thuật toán từng sụp đổ ngoạn mục (rủi ro depeg). <strong>Tokenization</strong> tài sản thực (bất động sản, quỹ, trái phiếu) hứa hẹn sở hữu phân mảnh và thanh toán tức thì; <strong>CBDC</strong> là tiền số do NHTW phát hành — \"phản-crypto\" về mặt quản trị. Smart contract tự động hóa hệ ống nước (và DeFi dựng cho vay/sàn giao dịch từ đó — rủi ro lỗi code thay cho rủi ro đối tác).</p>\n<p><strong>Chân không định giá.</strong> Không dòng tiền → không DCF; định giá dựa vào khan hiếm (lịch phát hành cố định), mức chấp nhận của mạng lưới, mỏ neo chi phí sản xuất, và câu chuyện lưu trữ giá trị — tất cả đều gây tranh cãi. Thực nghiệm: biến động cực đoan, drawdown quá 70%, tương quan với cổ phiếu <em>tăng trong khủng hoảng</em> (làm yếu luận điểm đa dạng hóa đúng lúc cần nhất), cùng các vụ gian lận, sàn sập, và cú sốc pháp lý.</p>\n<p><strong>Thực đơn tiếp cận (bảng):</strong> trực tiếp (tự lưu ký) — nắm tài sản qua khóa riêng; mất khóa mất tất, không ai cứu; lưu ký tại sàn — nắm quyền đòi với sàn; rủi ro đối tác/sập sàn (lịch sử không tử tế); ETP/trust giao ngay — vỏ bọc niêm yết; phí, trust có thể lệch premium/discount so với NAV; sản phẩm dựa futures — phơi nhiễm futures đảo liên tục; chi phí roll khi contango bào lợi suất (bài học module 4 lặp lại); cổ phiếu proxy — công ty đào, sàn, công ty nắm giữ; đòn bẩy, bám giá không hoàn hảo + rủi ro kinh doanh riêng.</p>"
    }
   ]
  }
 ],
 "vocab": [
  [
   "general partner (GP)",
   "Manager of a private fund with unlimited liability.",
   "thành viên hợp danh điều hành quỹ"
  ],
  [
   "limited partner (LP)",
   "Investor in a private fund with liability limited to committed capital.",
   "thành viên góp vốn hữu hạn"
  ],
  [
   "committed capital",
   "Total amount LPs agree to provide over the fund’s life.",
   "vốn cam kết"
  ],
  [
   "carried interest",
   "GP’s share of fund profits (the incentive fee in private capital).",
   "phần lợi nhuận chia cho GP"
  ],
  [
   "lock-up period",
   "Time during which investors cannot redeem.",
   "thời gian khóa vốn"
  ],
  [
   "high-water mark",
   "Highest previous NAV that must be exceeded before new incentive fees.",
   "mốc giá trị đỉnh cũ"
  ],
  [
   "hurdle rate",
   "Minimum return before incentive fees apply.",
   "ngưỡng lợi suất tối thiểu"
  ],
  [
   "J-curve",
   "Pattern of early losses then later gains in PE funds.",
   "đường cong chữ J"
  ],
  [
   "REIT",
   "Real estate investment trust — listed, income-distributing property vehicle.",
   "quỹ tín thác bất động sản"
  ],
  [
   "roll yield",
   "Gain/loss from replacing expiring futures with longer-dated ones.",
   "lợi suất đảo hợp đồng kỳ hạn"
  ],
  [
   "fund / co-invest / direct",
   "The three access methods, trading fees against control and resource demands",
   "Ba con đường tiếp cận, đánh đổi phí với quyền kiểm soát và nguồn lực"
  ],
  [
   "committed capital & capital call",
   "Pledged amount drawn down over time as the GP finds deals",
   "Vốn cam kết được gọi dần khi GP tìm được thương vụ"
  ],
  [
   "distribution waterfall & clawback",
   "Payout ordering (capital → hurdle → catch-up → carry); clawback recovers excess carry",
   "Thứ tự chi trả (vốn → hurdle → catch-up → carry); clawback đòi lại carry trả thừa"
  ],
  [
   "carried interest",
   "GP’s share of profits, typically 20% above the hurdle",
   "Phần lợi nhuận của GP, thường 20% trên mức hurdle"
  ],
  [
   "J-curve",
   "Early negative private-fund returns before value creation and exits",
   "Lợi suất âm các năm đầu của quỹ tư nhân trước khi tạo giá trị và thoái vốn"
  ],
  [
   "MOIC / DPI / RVPI",
   "Multiples of invested capital: total, distributed, and residual value",
   "Các bội số trên vốn đầu tư: tổng, đã phân phối, còn lại"
  ],
  [
   "mezzanine & unitranche",
   "Subordinated debt with equity kickers; blended senior-plus-sub facility",
   "Nợ thứ cấp kèm kicker cổ phần; khoản vay gộp senior và thứ cấp"
  ],
  [
   "cap rate",
   "NOI ÷ property value — the income-approach yardstick",
   "NOI ÷ giá trị tài sản — thước đo của phương pháp thu nhập"
  ],
  [
   "greenfield vs brownfield",
   "Infrastructure to be built vs already operating",
   "Hạ tầng chưa xây vs đã vận hành"
  ],
  [
   "contango & backwardation",
   "Futures above spot (negative roll) vs below spot (positive roll)",
   "Futures trên spot (roll âm) vs dưới spot (roll dương)"
  ],
  [
   "lockup, gate & side pocket",
   "Hedge fund liquidity controls on redemptions and illiquid positions",
   "Bộ công cụ quản trị thanh khoản của hedge fund"
  ],
  [
   "tokenization",
   "Representing real-world assets as blockchain tokens, enabling fractional ownership",
   "Đưa tài sản thực lên blockchain thành token, cho phép sở hữu phân mảnh"
  ]
 ],
 "quiz": [
  {
   "q": "A hedge fund with $100 million in assets charges \"2 and 20\" with the incentive fee calculated net of the management fee and no hurdle. Gross return for the year is 15%. Total fees are closest to:",
   "opts": [
    "$4.6 million",
    "$5.0 million",
    "$5.6 million"
   ],
   "ans": 0,
   "en": "A is correct. Management fee = 2% × 100 = $2.0m. Gross gain = $15m; gain net of management fee = 15 − 2 = $13m. Incentive = 20% × 13 = $2.6m. Total = 2.0 + 2.6 = $4.6m.",
   "vi": "Đáp án A. Phí quản lý = 2% × 100 = 2 triệu. Lãi gộp = 15 triệu; lãi sau phí quản lý = 13 triệu. Phí thưởng = 20% × 13 = 2.6 triệu. Tổng = 4.6 triệu USD."
  },
  {
   "q": "The primary purpose of a high-water mark provision is to:",
   "opts": [
    "guarantee investors a minimum return.",
    "prevent the manager from earning incentive fees twice on the same gains.",
    "reduce the management fee in loss years."
   ],
   "ans": 1,
   "en": "B is correct. After a drawdown, incentive fees resume only once NAV exceeds its previous peak, so investors do not pay again for merely recovering earlier losses.",
   "vi": "Đáp án B. Sau khi quỹ sụt giảm, phí thưởng chỉ được thu lại khi NAV vượt đỉnh cũ, nên nhà đầu tư không phải trả phí lần nữa chỉ vì quỹ phục hồi khoản lỗ trước đó."
  },
  {
   "q": "A long-only investor rolling commodity futures in a market in contango will most likely experience:",
   "opts": [
    "positive roll yield.",
    "negative roll yield.",
    "no roll yield."
   ],
   "ans": 1,
   "en": "B is correct. In contango, longer-dated futures cost more than expiring ones; selling the cheap expiring contract and buying the expensive deferred contract produces a negative roll yield.",
   "vi": "Đáp án B. Trong contango, hợp đồng kỳ hạn xa đắt hơn hợp đồng sắp đáo hạn; bán hợp đồng rẻ để mua hợp đồng đắt tạo ra roll yield âm."
  },
  {
   "q": "Appraisal-based valuation of private real estate most likely causes reported returns to exhibit:",
   "opts": [
    "overstated volatility.",
    "understated volatility and correlations with other assets.",
    "no systematic bias."
   ],
   "ans": 1,
   "en": "B is correct. Appraisals adjust slowly and smooth reported values, so measured volatility and correlations are biased downward — making the asset class look like a better diversifier (and its Sharpe ratio look better) than it truly is.",
   "vi": "Đáp án B. Định giá thẩm định điều chỉnh chậm và làm mượt giá trị, nên biến động và tương quan đo được bị thấp hơn thực tế — khiến lớp tài sản trông có vẻ đa dạng hóa tốt hơn (và Sharpe cao hơn) so với thực chất."
  }
 ]
});
window.CFA.extra["alts"] = {
 "checks": [
  [
   {
    "q": "Compared with mutual funds, hedge funds most likely feature:",
    "opts": [
     "Daily liquidity and full transparency",
     "Lockup periods, redemption notice requirements, and lighter regulation",
     "Guaranteed returns"
    ],
    "ans": 1,
    "en": "Hedge funds restrict withdrawals (lockups, gates, notice periods) so managers can hold illiquid or leveraged positions — with far less disclosure than mutual funds.",
    "vi": "Hedge fund giới hạn rút vốn (lockup, gate, thời gian báo trước) để manager giữ vị thế kém thanh khoản/đòn bẩy — và công bố thông tin ít hơn nhiều so với quỹ mở."
   },
   {
    "q": "In a limited partnership fund structure, the general partner (GP):",
    "opts": [
     "Provides most of the capital and bears limited liability",
     "Manages the fund and bears unlimited liability, while LPs are passive with liability limited to their investment",
     "Is always a bank"
    ],
    "ans": 1,
    "en": "The GP manages investments (earning management and incentive fees); limited partners commit capital passively, risking only what they invested.",
    "vi": "GP điều hành quỹ (nhận phí quản lý + phí thưởng) và chịu trách nhiệm vô hạn; LP góp vốn thụ động, chỉ chịu rủi ro trong phạm vi vốn góp."
   },
   {
    "q": "Under a whole-of-fund (European) waterfall, the GP receives carried interest:",
    "opts": [
     "On each profitable exit as it occurs",
     "Only after LPs receive all contributed capital plus the hurdle",
     "Before the management fee"
    ],
    "ans": 1,
    "en": "European waterfalls pay carry only after full return of LP capital + preferred return — friendlier to LPs than deal-by-deal.",
    "vi": "Waterfall kiểu Âu chỉ trả carry sau khi LP nhận đủ vốn góp + lợi suất ưu tiên — thân thiện với LP hơn kiểu theo từng thương vụ."
   },
   {
    "q": "Compared with fund investing, co-investing typically offers:",
    "opts": [
     "Higher fees but more control",
     "Lower fees on the co-invested amount",
     "Guaranteed allocations"
    ],
    "ans": 1,
    "en": "Co-invest slices usually carry reduced or zero fees — the main attraction, in exchange for concentration and diligence work.",
    "vi": "Phần co-invest thường được giảm hoặc miễn phí — sức hút chính, đổi lại độ tập trung cao và phải tự thẩm định."
   }
  ],
  [
   {
    "q": "A high-water mark provision means the manager earns incentive fees only on:",
    "opts": [
     "Gains above the fund’s previous peak value",
     "All gains each year",
     "Returns above the risk-free rate"
    ],
    "ans": 0,
    "en": "After a loss, the fund must first recover past its prior peak before incentive fees resume — protecting investors from paying twice for the same gains.",
    "vi": "Sau khi thua lỗ, quỹ phải vượt lại đỉnh giá trị cũ thì manager mới được tính phí thưởng — tránh nhà đầu tư trả phí hai lần cho cùng một khoản lợi nhuận."
   },
   {
    "q": "A “2 and 20” fee structure refers to:",
    "opts": [
     "2% incentive fee and 20% management fee",
     "2% management fee on assets and 20% incentive fee on profits",
     "2% hurdle and 20% lockup"
    ],
    "ans": 1,
    "en": "Classic hedge fund/PE pricing: 2% of AUM annually plus 20% of profits (often above a hurdle and subject to a high-water mark).",
    "vi": "Cấu trúc phí kinh điển: 2% giá trị tài sản quản lý mỗi năm + 20% lợi nhuận (thường tính trên phần vượt hurdle và tuân theo high-water mark)."
   },
   {
    "q": "A fund starts at 100, earns 30% gross. Fees: 2% mgmt (on beginning AUM) + 20% incentive on ALL profits net of mgmt fee (no hurdle). The investor's net return is:",
    "opts": [
     "22.4%",
     "24.0%",
     "30.0%"
    ],
    "ans": 0,
    "en": "Mgmt = 2; profits = 130 − 2 − 100 = 28; incentive = 5.6; net = 130 − 2 − 5.6 = 122.4 → 22.4%.",
    "vi": "Phí quản lý = 2; lợi nhuận = 130 − 2 − 100 = 28; phí thành tích = 5,6; net = 122,4 → 22,4%."
   },
   {
    "q": "A hedge fund database adds a new fund together with its strong 5-year history. The resulting index bias is:",
    "opts": [
     "Survivorship bias",
     "Backfill bias",
     "Smoothing bias"
    ],
    "ans": 1,
    "en": "Importing pre-inclusion history of funds that chose to report after good runs inflates the index — backfill/self-selection.",
    "vi": "Nhập lịch sử trước khi gia nhập của các quỹ chọn báo cáo sau chuỗi thành tích tốt thổi phồng chỉ số — backfill/self-selection."
   }
  ],
  [
   {
    "q": "Compared with venture capital, buyout investing most likely targets:",
    "opts": [
     "Pre-revenue startups with minority stakes",
     "Mature companies with stable cash flows, acquired with substantial debt",
     "Publicly listed large caps without leverage"
    ],
    "ans": 1,
    "en": "LBOs need dependable cash flow to service acquisition debt; VC takes minority stakes in young, cash-burning firms.",
    "vi": "LBO cần dòng tiền ổn định để trả nợ mua lại; VC nắm cổ phần thiểu số ở công ty trẻ đang đốt tiền."
   },
   {
    "q": "Subordinated private debt issued with warrants or conversion rights attached is best described as:",
    "opts": [
     "Unitranche debt",
     "Mezzanine debt",
     "Direct senior lending"
    ],
    "ans": 1,
    "en": "Mezzanine sits between senior debt and equity, compensating its risk with equity kickers.",
    "vi": "Mezzanine nằm giữa nợ senior và vốn chủ, bù rủi ro bằng các \"kicker\" cổ phần (warrant, quyền chuyển đổi)."
   },
   {
    "q": "A buyout: 200 purchase price, 120 debt / 80 equity. Exit at 260 with 70 debt remaining. The equity MOIC is:",
    "opts": [
     "1.30×",
     "2.38×",
     "3.25×"
    ],
    "ans": 1,
    "en": "Equity proceeds = 260 − 70 = 190 → 190/80 = 2.375×.",
    "vi": "Tiền về vốn chủ = 260 − 70 = 190 → 190/80 = 2,375×."
   },
   {
    "q": "Mezzanine private debt typically earns its return through:",
    "opts": [
     "Floating-rate senior spreads",
     "A high coupon plus equity kickers such as warrants",
     "Trade claims bought at deep discounts"
    ],
    "ans": 1,
    "en": "Mezzanine sits between senior debt and equity: junior coupon income enhanced by conversion rights or warrants.",
    "vi": "Mezzanine nằm giữa nợ senior và vốn chủ: coupon cao kèm quyền chuyển đổi hoặc warrant tăng lợi suất."
   }
  ],
  [
   {
    "q": "Compared with direct property ownership, listed REITs most notably offer:",
    "opts": [
     "Immunity from equity-market movements",
     "Liquidity and dividend-rich, tax-advantaged distributions",
     "Guaranteed appraisal-based valuations"
    ],
    "ans": 1,
    "en": "REITs trade intraday and pass through most income untaxed at the entity level — but in the short run they move with the stock market.",
    "vi": "REIT giao dịch trong phiên và chuyển phần lớn thu nhập không chịu thuế cấp doanh nghiệp — nhưng ngắn hạn vẫn chạy theo thị trường cổ phiếu."
   },
   {
    "q": "An investor seeking bond-like, stable yields from infrastructure should prefer:",
    "opts": [
     "Greenfield projects",
     "Brownfield operating assets",
     "Construction-stage PPP equity"
    ],
    "ans": 1,
    "en": "Brownfield assets already operate under contracts or regulation — stable cash yields; greenfield carries construction and demand risk for higher expected returns.",
    "vi": "Tài sản brownfield đã vận hành theo hợp đồng/khung giá — lợi suất tiền mặt ổn định; greenfield mang rủi ro xây dựng và nhu cầu đổi lấy kỳ vọng cao hơn."
   },
   {
    "q": "Rental income 200, vacancy losses 10, operating expenses 70, cap rate 8%. The property value is:",
    "opts": [
     "1,625",
     "1,500",
     "2,375"
    ],
    "ans": 1,
    "en": "NOI = 200 − 10 − 70 = 120; value = 120/0.08 = 1,500.",
    "vi": "NOI = 200 − 10 − 70 = 120; giá trị = 120/0,08 = 1.500."
   },
   {
    "q": "A brownfield infrastructure asset differs from greenfield mainly by offering:",
    "opts": [
     "Higher construction risk and no current cash flow",
     "Existing operations with immediate, lower-risk cash yield",
     "Exposure only to social infrastructure"
    ],
    "ans": 1,
    "en": "Brownfield = built and operating: contracted/regulated cash flows now; greenfield adds construction and demand risk for higher target returns.",
    "vi": "Brownfield = đã xây và vận hành: dòng tiền theo hợp đồng/quy định ngay; greenfield thêm rủi ro xây dựng và nhu cầu đổi lấy mục tiêu lợi suất cao hơn."
   }
  ],
  [
   {
    "q": "A commodity futures curve is in backwardation. Rolling long positions forward most likely produces:",
    "opts": [
     "Positive roll return",
     "Negative roll return",
     "No roll return"
    ],
    "ans": 0,
    "en": "In backwardation, later contracts trade below spot: rolling buys cheaper contracts that converge upward — positive roll yield. Contango does the reverse.",
    "vi": "Trong backwardation, hợp đồng xa rẻ hơn spot: cuộn vị thế là mua rẻ rồi giá hội tụ lên — roll yield dương. Contango thì ngược lại."
   },
   {
    "q": "Relative to farmland, timberland offers the distinctive advantage of:",
    "opts": [
     "No exposure to weather",
     "The option to delay harvest while trees keep growing",
     "Government-guaranteed prices"
    ],
    "ans": 1,
    "en": "Biological growth stores value on the stump: harvest can wait for better prices — flexibility farmland crops mostly lack.",
    "vi": "Tăng trưởng sinh học \"cất\" giá trị trên cây: có thể chờ giá tốt mới khai thác — sự linh hoạt mà cây nông nghiệp hầu như không có."
   },
   {
    "q": "Spot return +6%, collateral yield +2%, roll yield −3%. The collateralized futures total return is:",
    "opts": [
     "+5%",
     "+11%",
     "+3%"
    ],
    "ans": 0,
    "en": "6 + 2 − 3 = +5%. Contango made the roll negative.",
    "vi": "6 + 2 − 3 = +5%. Contango khiến roll âm."
   },
   {
    "q": "Timberland's distinctive embedded option is:",
    "opts": [
     "Switching crops each season",
     "Choosing WHEN to harvest — delay while trees keep growing",
     "Currency hedging"
    ],
    "ans": 1,
    "en": "If prices are low, leave the trees: biological growth adds volume and value — flexibility farmland's permanent crops lack.",
    "vi": "Giá thấp thì để cây đó: tăng trưởng sinh học cộng thêm khối lượng và giá trị — sự linh hoạt mà cây lâu năm của farmland không có."
   }
  ],
  [
   {
    "q": "A hedge fund provision that limits the fraction of capital investors may redeem in a given period is a:",
    "opts": [
     "Side pocket",
     "Gate",
     "High-water mark"
    ],
    "ans": 1,
    "en": "Gates throttle redemptions to protect remaining investors from fire sales; side pockets isolate illiquid positions instead.",
    "vi": "Gate hãm lượng rút để bảo vệ nhà đầu tư còn lại khỏi bán tháo; side pocket thì cô lập vị thế kém thanh khoản."
   },
   {
    "q": "A fund taking top-down positions in interest rates, currencies, and commodities based on macroeconomic views is best classified as:",
    "opts": [
     "Equity market-neutral",
     "Global macro",
     "Merger arbitrage"
    ],
    "ans": 1,
    "en": "Global macro is the classic top-down, multi-asset directional strategy; market-neutral and merger arb are bottom-up, security-specific.",
    "vi": "Global macro là chiến lược định hướng đa tài sản từ trên xuống kinh điển; market-neutral và merger arb là bottom-up theo từng chứng khoán."
   },
   {
    "q": "A fund is long 140 and short 90 (per 100 of capital). Its net and gross exposures are:",
    "opts": [
     "Net 50, gross 230",
     "Net 230, gross 50",
     "Net 50, gross 140"
    ],
    "ans": 0,
    "en": "Net = 140 − 90 = 50; gross = 140 + 90 = 230 — substantial leverage with moderate direction.",
    "vi": "Net = 140 − 90 = 50; gross = 140 + 90 = 230 — đòn bẩy đáng kể với định hướng vừa phải."
   },
   {
    "q": "Segregating a fund's illiquid positions so redeeming investors can't drain the liquid book describes:",
    "opts": [
     "A gate",
     "A side pocket",
     "A lock-up"
    ],
    "ans": 1,
    "en": "Side pockets hold illiquid assets separately; redemptions run only on the liquid sleeve. Gates cap redemption volumes; lock-ups bar early exits.",
    "vi": "Side pocket tách tài sản kém thanh khoản riêng; việc rút vốn chỉ chạy trên phần thanh khoản. Gate chặn khối lượng rút; lock-up cấm rút sớm."
   }
  ],
  [
   {
    "q": "Blockchain records are considered effectively immutable primarily because:",
    "opts": [
     "A regulator certifies every entry",
     "Altering a block requires redoing the cryptographically linked chain against network consensus",
     "All users know each other’s identity"
    ],
    "ans": 1,
    "en": "Each block hashes the prior one; rewriting history means out-computing or out-staking the network — validation by consensus, not authority.",
    "vi": "Mỗi khối băm khối trước; muốn viết lại lịch sử phải thắng cả mạng lưới về tính toán hoặc cổ phần — xác thực bằng đồng thuận, không bằng một trung tâm."
   },
   {
    "q": "Compared with buying a crypto ETP, holding cryptocurrency directly in a self-custodied wallet mainly adds:",
    "opts": [
     "Management-fee drag",
     "Key management and custody risk",
     "Tracking error to the spot price"
    ],
    "ans": 1,
    "en": "Direct holding removes fund fees and tracking error but concentrates operational risk: lost keys or hacked wallets mean unrecoverable loss.",
    "vi": "Nắm trực tiếp bỏ được phí quỹ và tracking error nhưng dồn rủi ro vận hành: mất khóa hay ví bị hack là mất không thể thu hồi."
   },
   {
    "q": "In proof-of-stake, the deterrent against validator misbehavior is:",
    "opts": [
     "Wasted electricity",
     "Slashing of staked capital",
     "Government licensing"
    ],
    "ans": 1,
    "en": "Validators post stake that the protocol can confiscate ('slash') — the economic security replacing PoW's energy burn.",
    "vi": "Validator đặt cọc mà giao thức có thể tịch thu ('slash') — an ninh kinh tế thay cho việc đốt năng lượng của PoW."
   },
   {
    "q": "A futures-based crypto product in a persistently contangoed market will most likely:",
    "opts": [
     "Track spot closely",
     "Lag spot due to negative roll yield",
     "Beat spot due to collateral yield"
    ],
    "ans": 1,
    "en": "Rolling contracts bought above spot bleeds return — the commodity roll lesson applied to digital assets.",
    "vi": "Đảo hợp đồng mua trên giá spot bào mòn lợi suất — bài học roll của hàng hóa áp vào tài sản số."
   }
  ]
 ],
 "sets": [
  [
   {
    "q": "A fund starts the year at $100m and ends at $120m before fees. Fees: 2% management on beginning assets, 20% incentive on gains above an 8% hurdle. Total fees are closest to:",
    "opts": [
     "$4.4m",
     "$6.0m",
     "$2.4m"
    ],
    "ans": 0,
    "en": "Management = 2% × 100 = $2m. Hurdle gain = 8; excess = 20 − 8 = 12; incentive = 20% × 12 = $2.4m. Total = $4.4m.",
    "vi": "Phí quản lý = 2% × 100 = 2 triệu. Lợi nhuận vượt hurdle = 20 − 8 = 12 → phí thưởng = 20% × 12 = 2,4 triệu. Tổng 4,4 triệu USD."
   },
   {
    "q": "A property generates NOI of $600,000 and sells for $8 million. Its cap rate is:",
    "opts": [
     "13.3%",
     "7.5%",
     "6.0%"
    ],
    "ans": 1,
    "en": "Cap rate = NOI / price = 0.6/8 = 7.5% — the income approach’s core metric.",
    "vi": "Cap rate = NOI / giá = 7,5% — thước đo cốt lõi của phương pháp thu nhập trong định giá bất động sản."
   },
   {
    "q": "A commodity futures market in contango has:",
    "opts": [
     "Futures prices below spot",
     "Futures prices above spot, typically producing negative roll yield for long positions",
     "No futures curve"
    ],
    "ans": 1,
    "en": "Contango: futures &gt; spot (storage/financing costs dominate). Rolling long positions buys high and converges lower — negative roll yield.",
    "vi": "Contango: giá futures cao hơn spot (chi phí lưu kho/vốn chiếm ưu thế). Vị thế mua khi roll hợp đồng chịu roll yield âm."
   },
   {
    "q": "Compared with direct property ownership, public REITs primarily offer investors:",
    "opts": [
     "Higher leverage limits",
     "Liquidity and diversification with small capital, at the cost of equity-market volatility",
     "Guaranteed income"
    ],
    "ans": 1,
    "en": "Exchange-traded REIT shares trade daily and pool many properties — but short-run prices correlate with equities more than private real estate does.",
    "vi": "REIT niêm yết mua bán hằng ngày, đa dạng hóa với vốn nhỏ — đổi lại giá ngắn hạn biến động theo thị trường cổ phiếu nhiều hơn bất động sản tư nhân."
   },
   {
    "q": "Hedge fund index returns are most likely overstated because of:",
    "opts": [
     "Survivorship and backfill bias",
     "Excess regulation",
     "Daily mark-to-market"
    ],
    "ans": 0,
    "en": "Failed funds drop out (survivorship) and successful funds add past results when joining (backfill) — both inflate reported index performance.",
    "vi": "Quỹ thất bại bị loại khỏi chỉ số (survivorship) còn quỹ thành công nộp bổ sung thành tích quá khứ (backfill) — cả hai thổi phồng lợi nhuận chỉ số."
   },
   {
    "q": "Core infrastructure investments (e.g., regulated utilities, toll roads) are valued mainly for their:",
    "opts": [
     "High turnover and trading gains",
     "Stable, long-term, often inflation-linked cash flows",
     "Zero risk"
    ],
    "ans": 1,
    "en": "Infrastructure assets provide essential services under long contracts or regulation — steady cash yields with some inflation linkage, though with leverage, political and regulatory risk.",
    "vi": "Hạ tầng thiết yếu có hợp đồng dài hạn/khung giá điều tiết → dòng tiền ổn định, thường gắn với lạm phát; rủi ro chính là đòn bẩy, chính trị và pháp lý."
   },
   {
    "q": "A commodity index position earns a 3% spot-price return and a 2% collateral return, but rolling contracts in a contango market costs 1%. The total return is closest to:",
    "opts": [
     "4%",
     "6%",
     "0%"
    ],
    "ans": 0,
    "en": "Total = price + roll + collateral = 3% − 1% + 2% = 4% — the standard three-part decomposition.",
    "vi": "Tổng = giá + roll + tài sản thế chấp = 3% − 1% + 2% = 4% — phép phân rã ba phần tiêu chuẩn."
   },
   {
    "q": "A hedge fund returns 15% gross with a 5% hard hurdle and a 20% incentive fee (no management fee, no prior losses). The incentive fee equals:",
    "opts": [
     "3.0% of assets",
     "2.0% of assets",
     "1.0% of assets"
    ],
    "ans": 1,
    "en": "Hard hurdle: incentive applies only to the excess: 20% × (15% − 5%) = 2%.",
    "vi": "Hard hurdle: phí thưởng chỉ tính trên phần vượt: 20% × (15% − 5%) = 2%."
   }
  ],
  [
   {
    "q": "A commodity futures curve in backwardation offers long futures investors:",
    "opts": [
     "Negative roll yield",
     "Positive roll yield as contracts converge upward to spot",
     "No convergence"
    ],
    "ans": 1,
    "en": "Backwardation: futures &lt; spot; rolling longs buy cheap contracts that appreciate toward spot — positive roll yield.",
    "vi": "Backwardation: futures thấp hơn spot → khi roll, vị thế mua hưởng roll yield dương do giá hợp đồng hội tụ lên giá spot."
   },
   {
    "q": "Common exit routes for a private equity buyout investment include:",
    "opts": [
     "IPO, trade sale to a strategic buyer, or secondary sale to another sponsor",
     "Coupon payments",
     "Daily redemption"
    ],
    "ans": 0,
    "en": "PE realizes value at exit: public listing, sale to a strategic acquirer, secondary sale, or (less happily) recapitalization/write-off.",
    "vi": "PE hiện thực hóa lợi nhuận khi thoái vốn: IPO, bán cho người mua chiến lược, bán lại cho quỹ khác (secondary), hoặc tái cấu trúc vốn."
   },
   {
    "q": "Venture capital differs from buyout private equity mainly in that VC:",
    "opts": [
     "Targets mature cash-flow-rich firms using heavy debt",
     "Takes minority stakes in early-stage companies with high failure rates and little or no debt",
     "Invests only in real assets"
    ],
    "ans": 1,
    "en": "VC backs young companies with equity, expecting many failures offset by a few huge wins; buyouts lever mature, stable-cash-flow businesses.",
    "vi": "VC rót vốn cổ phần vào công ty giai đoạn sớm, chấp nhận nhiều thất bại đổi lấy vài thương vụ thắng lớn; buyout dùng nợ cao mua công ty trưởng thành có dòng tiền ổn định."
   },
   {
    "q": "A fund of hedge funds offers diversification and access but suffers from:",
    "opts": [
     "A double layer of fees",
     "Zero due diligence",
     "Guaranteed underperformance"
    ],
    "ans": 0,
    "en": "Investors pay the underlying funds’ fees plus the fund-of-funds’ own management/incentive fees — a significant drag on net returns.",
    "vi": "Nhà đầu tư trả hai tầng phí: phí của các quỹ thành phần cộng phí của chính fund of funds — bào mòn đáng kể lợi nhuận ròng."
   },
   {
    "q": "The primary portfolio rationale for adding alternative investments is their:",
    "opts": [
     "Higher liquidity than stocks",
     "Historically low correlation with traditional assets, improving portfolio risk-adjusted returns",
     "Simpler valuation"
    ],
    "ans": 1,
    "en": "Less-than-perfect correlation with stocks and bonds can raise the portfolio’s Sharpe ratio — the diversification argument (with liquidity and fee caveats).",
    "vi": "Tương quan thấp với cổ phiếu/trái phiếu giúp cải thiện lợi nhuận điều chỉnh rủi ro của danh mục — đổi lại là thanh khoản kém và phí cao."
   },
   {
    "q": "Appraisal-based valuations of private real estate most likely cause reported volatility to be:",
    "opts": [
     "Overstated",
     "Understated due to smoothing",
     "Unaffected"
    ],
    "ans": 1,
    "en": "Infrequent appraisals smooth returns, understating true volatility and correlation with markets — a measurement artifact, not genuine safety.",
    "vi": "Định giá theo thẩm định giá không thường xuyên làm “mượt” chuỗi lợi nhuận → độ biến động và tương quan thực bị đánh giá thấp — chỉ là ảo giác đo lường, không phải an toàn thật."
   },
   {
    "q": "A property generates $100,000 of annual net operating income and comparable transactions imply an 8% cap rate. Its appraised value under the income approach is:",
    "opts": [
     "$1,250,000",
     "$800,000",
     "$1,080,000"
    ],
    "ans": 0,
    "en": "Value = NOI / cap rate = 100,000 / 0.08 = $1,250,000.",
    "vi": "Giá trị = NOI / cap rate = 100.000 / 0,08 = 1.250.000 USD."
   },
   {
    "q": "A hedge fund database adds newly reporting funds along with their strong past track records, while failed funds drop out. Reported index returns are most likely:",
    "opts": [
     "Understated",
     "Overstated due to backfill and survivorship bias",
     "Unbiased"
    ],
    "ans": 1,
    "en": "Backfill imports winners’ histories and survivorship deletes losers — both push the index above investors’ true experience.",
    "vi": "Backfill nạp lịch sử của quỹ thắng, survivorship xóa quỹ thua — cả hai đẩy chỉ số cao hơn trải nghiệm thật của nhà đầu tư."
   }
  ],
  {
   "name": "Set D — Mixed exam-style review",
   "qs": [
    {
     "q": "During a private fund's investment period, management fees are typically charged on:",
     "opts": [
      "Invested capital only",
      "Committed capital",
      "Net asset value"
     ],
     "ans": 1,
     "en": "Fees on committed (not yet invested) capital are standard early on — a mechanical cause of the J-curve.",
     "vi": "Phí trên vốn cam kết (chưa giải ngân) là chuẩn giai đoạn đầu — nguyên nhân cơ học của J-curve."
    },
    {
     "q": "A clawback provision requires:",
     "opts": [
      "LPs to return distributions if the fund needs cash",
      "The GP to repay excess carry if later deals underperform",
      "Portfolio companies to repay dividends"
     ],
     "ans": 1,
     "en": "In deal-by-deal waterfalls the GP may collect early carry that later losses prove excessive; clawback returns it to LPs.",
     "vi": "Trong waterfall theo thương vụ, GP có thể nhận carry sớm mà các khoản lỗ sau chứng minh là quá tay; clawback trả lại cho LP."
    },
    {
     "q": "A fund's NAV path: 100 → 130 (fees paid, HWM 130) → 105 → 128. The incentive fee in the final period is:",
     "opts": [
      "20% of 23",
      "Zero — still below the high-water mark",
      "20% of 28"
     ],
     "ans": 1,
     "en": "128 < HWM of 130: no incentive until the fund surpasses its prior peak.",
     "vi": "128 < HWM 130: không có phí thành tích cho đến khi quỹ vượt đỉnh cũ."
    },
    {
     "q": "Two funds show identical since-inception IRRs, but Fund A has DPI 1.6 and Fund B has DPI 0.4. The safer performance claim belongs to:",
     "opts": [
      "Fund B — more upside remains",
      "Fund A — most of its return is realized cash",
      "Neither — IRR settles it"
     ],
     "ans": 1,
     "en": "A's return is mostly distributed cash; B's rests on unrealized marks that may never convert.",
     "vi": "Lợi suất của A phần lớn là tiền đã chia; của B dựa trên định giá chưa hiện thực có thể không bao giờ thành tiền."
    },
    {
     "q": "Appraisal-based private real estate indexes, compared with REIT indexes, show:",
     "opts": [
      "Higher volatility and higher correlation with equities",
      "Lower volatility and lower correlation — partly an artifact of smoothing",
      "Identical risk once fees are removed"
     ],
     "ans": 1,
     "en": "Stale appraisals smooth the series; measured risk and correlation are understated relative to transaction reality.",
     "vi": "Định giá thẩm định cũ làm mượt chuỗi số; rủi ro và tương quan đo được bị hạ thấp so với thực tế giao dịch."
    },
    {
     "q": "Venture capital return distributions are best described as:",
     "opts": [
      "Symmetric around a high mean",
      "Power-law: most investments fail, a few huge winners carry the fund",
      "Uniform across deals"
     ],
     "ans": 1,
     "en": "The VC model tolerates many zeros because one outlier can return the entire fund — diversification across many bets is essential.",
     "vi": "Mô hình VC chấp nhận nhiều khoản về 0 vì một ngoại lệ có thể hoàn trả cả quỹ — đa dạng hóa nhiều cược là thiết yếu."
    },
    {
     "q": "An LBO thesis lists three return sources. Which is NOT one of them?",
     "opts": [
      "Debt paydown from cash flows",
      "Operational improvement and multiple expansion",
      "Collecting the target's management fees"
     ],
     "ans": 2,
     "en": "The classic trio: deleveraging, EBITDA growth/operations, and exit-multiple expansion.",
     "vi": "Bộ ba kinh điển: giảm nợ, tăng EBITDA/vận hành, và nở bội số khi thoái."
    },
    {
     "q": "Cap rates rise from 5.0% to 6.0% while a property's NOI is unchanged. Its value changes by approximately:",
     "opts": [
      "−20%",
      "−16.7%",
      "+20%"
     ],
     "ans": 1,
     "en": "Value ∝ 1/cap rate: (1/6 − 1/5)/(1/5) = −16.7%.",
     "vi": "Giá trị ∝ 1/cap rate: (1/6 − 1/5)/(1/5) = −16,7%."
    },
    {
     "q": "Which asset's return stream is MOST directly linked to unexpected inflation?",
     "opts": [
      "Long-term nominal bonds",
      "A commodity futures index",
      "Growth equities"
     ],
     "ans": 1,
     "en": "Energy and food drive CPI surprises; commodity returns co-move with them — the inflation-hedge argument.",
     "vi": "Năng lượng và lương thực dẫn dắt bất ngờ CPI; lợi suất hàng hóa đồng pha với chúng — luận điểm phòng hộ lạm phát."
    },
    {
     "q": "A merger-arb portfolio's return profile most resembles:",
     "opts": [
      "A lottery ticket — rare huge wins",
      "Selling insurance — steady small gains, occasional large losses",
      "A risk-free spread"
     ],
     "ans": 1,
     "en": "Deal spreads are earned deal after deal until a break inflicts a large loss — negative skew.",
     "vi": "Spread thương vụ được thu đều đặn cho đến khi một vụ đổ bể gây lỗ lớn — lệch âm."
    },
    {
     "q": "An investor wants crypto exposure with no key-management burden and accepts tracking costs. The route that AVOIDS roll costs is:",
     "opts": [
      "A futures-based ETF",
      "A spot ETP / trust structure",
      "Neither exists"
     ],
     "ans": 1,
     "en": "Spot products hold the asset itself; futures products bleed roll yield in contango.",
     "vi": "Sản phẩm spot nắm chính tài sản; sản phẩm futures rỉ máu roll yield khi contango."
    },
    {
     "q": "A stablecoin's peg is most fundamentally protected by:",
     "opts": [
      "Its trading volume",
      "The quality and transparency of its reserve assets",
      "Its blockchain's hash rate"
     ],
     "ans": 1,
     "en": "Redeemability against verifiable, liquid reserves anchors the peg; opaque or risky reserves (and algorithmic designs) invite depegging.",
     "vi": "Khả năng quy đổi dựa trên dự trữ thanh khoản, kiểm chứng được là mỏ neo của peg; dự trữ mờ đục hoặc rủi ro (và thiết kế thuật toán) mời gọi depeg."
    }
   ]
  }
 ]
};
