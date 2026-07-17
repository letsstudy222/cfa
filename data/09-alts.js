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
  "en": "Alternative Investments spans seven learning modules: features, methods, and structures; performance and returns; private capital (equity and debt); real estate and infrastructure; natural resources; hedge funds; and digital assets. The exam favors definitions and comparisons — fee waterfalls, VC vs buyout, REIT vs direct, contango vs backwardation, gates vs side pockets — plus a few signature calculations (incentive fees, cap rates, commodity return decomposition).",
  "vi": "Alternative Investments gồm bảy learning modules: đặc điểm, phương thức và cấu trúc; đo lường kết quả; vốn tư nhân (equity và debt); bất động sản và hạ tầng; tài nguyên thiên nhiên; hedge funds; và tài sản số. Đề thi chuộng định nghĩa và so sánh — waterfall phí, VC vs buyout, REIT vs sở hữu trực tiếp, contango vs backwardation, gate vs side pocket — cộng vài phép tính đặc trưng (phí thưởng, cap rate, phân rã lợi suất hàng hóa)."
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
    }
   ],
   "formulas": [
    [
     "Total HF fee (2&20, net)",
     "Fee = 2%×AUM + 20%×max(0, gain − mgmt fee − hurdle)",
     "Check the question wording carefully"
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
    }
   ]
  },
  {
   "title": "Real Estate and Infrastructure",
   "sections": [
    {
     "h": "Real estate & infrastructure",
     "en": "<ul><li><strong>Real estate’s four quadrants:</strong> equity vs debt × private vs public — direct ownership and private funds; mortgages and private RE debt; listed <strong>REITs</strong> (liquid, dividend-rich, tax-advantaged pass-throughs, but equity-market beta in the short run); and MBS. Property types: residential, commercial (office/retail/industrial), and specialized (hotels, data centers).</li><li><strong>Value and appraisal:</strong> income approach — value = <strong>NOI / cap rate</strong> (the workhorse); sales-comparison approach (adjusted comparables); cost approach (replacement cost, a ceiling for newer buildings). Appraised values lag markets → smoothed private RE indexes.</li><li><strong>Return drivers and risks:</strong> stable lease income + capital appreciation; inflation linkage through rents and land; risks: leverage, location and vacancy, interest-rate sensitivity, illiquidity, and regulatory/tax shifts.</li><li><strong>Infrastructure:</strong> long-lived monopolistic real assets with contracted or regulated cash flows — economic (transport, utilities, energy, digital) vs social (schools, hospitals). <em>Brownfield</em> — existing, operating assets: bond-like stable yields; <em>greenfield</em> — to be built: construction and demand risk, higher expected returns. Delivered directly, through funds, listed vehicles, or public–private partnerships (PPPs) where governments transfer construction/operation risk to private capital.</li></ul>",
     "vi": "<ul><li><strong>Bốn góc phần tư của bất động sản:</strong> vốn chủ vs nợ × tư nhân vs đại chúng — sở hữu trực tiếp và quỹ tư nhân; khoản vay thế chấp và nợ BĐS tư nhân; <strong>REIT</strong> niêm yết (thanh khoản, cổ tức cao, ưu đãi thuế pass-through, nhưng ngắn hạn mang beta thị trường cổ phiếu); và MBS. Loại tài sản: nhà ở, thương mại (văn phòng/bán lẻ/công nghiệp), chuyên dụng (khách sạn, trung tâm dữ liệu).</li><li><strong>Giá trị và thẩm định:</strong> phương pháp thu nhập — giá trị = <strong>NOI / cap rate</strong> (công cụ chủ lực); so sánh giao dịch (điều chỉnh tài sản tương đồng); chi phí thay thế (mức trần cho công trình mới). Giá thẩm định trễ thị trường → chỉ số BĐS tư nhân bị làm mượt.</li><li><strong>Nguồn lợi nhuận và rủi ro:</strong> thu nhập thuê ổn định + tăng giá vốn; gắn lạm phát qua tiền thuê và đất; rủi ro: đòn bẩy, vị trí và tỷ lệ trống, nhạy lãi suất, kém thanh khoản, thay đổi quy định/thuế.</li><li><strong>Hạ tầng:</strong> tài sản thực tuổi thọ dài, tính độc quyền, dòng tiền theo hợp đồng hoặc theo khung giá quản lý — kinh tế (giao thông, tiện ích, năng lượng, số) vs xã hội (trường học, bệnh viện). <em>Brownfield</em> — đã vận hành: lợi suất ổn định giống trái phiếu; <em>greenfield</em> — chưa xây: rủi ro xây dựng và nhu cầu, kỳ vọng cao hơn. Tiếp cận trực tiếp, qua quỹ, công cụ niêm yết, hoặc đối tác công–tư (PPP) nơi nhà nước chuyển rủi ro xây dựng/vận hành sang vốn tư nhân.</li></ul>"
    }
   ],
   "formulas": [
    [
     "Income-approach value",
     "Value = NOI / cap rate",
     "Cap rate from comparable transactions"
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
    }
   ],
   "formulas": [
    [
     "Commodity futures return",
     "Collateral yield + roll yield + spot price change",
     "Roll yield > 0 in backwardation"
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
    }
   ]
  },
  {
   "title": "Introduction to Digital Assets",
   "sections": [
    {
     "h": "Digital assets: blockchain, coins, tokens & how to hold them",
     "en": "<ul><li><strong>The plumbing:</strong> a blockchain is a distributed ledger (DLT) — transactions batched into cryptographically linked blocks, validated by network <em>consensus</em> (energy-hungry proof-of-work or stake-based proof-of-stake) rather than a central authority; records are effectively immutable. Keys, not names, control assets: lose the private key, lose the asset.</li><li><strong>The assets:</strong> cryptocurrencies (bitcoin, ether) — no cash flows, valuation rests on scarcity and adoption; <em>stablecoins</em> pegged to fiat (quality depends entirely on reserves); <em>tokens</em> — utility, governance, security tokens, NFTs; and <strong>tokenization</strong> of real-world assets, which may fractionalize and speed settlement of traditionally illiquid holdings.</li><li><strong>Getting exposure:</strong> direct ownership (exchange + wallet: custody, hacking, and key risk), exchange-traded products and trusts (convenient, tracking and fee drag), futures-based exposure (roll costs), or equities of ecosystem companies (miners, exchanges) — each with distinct risk plumbing.</li><li><strong>Investment character and risks:</strong> extreme volatility, unstable correlations (diversification claims are fragile), fraud and platform failures, evolving regulation, and operational/custody risk — position sizes should assume total-loss scenarios.</li></ul>",
     "vi": "<ul><li><strong>Hạ tầng:</strong> blockchain là sổ cái phân tán (DLT) — giao dịch gom thành các khối liên kết mật mã, được xác thực bằng <em>đồng thuận</em> mạng lưới (proof-of-work tốn năng lượng hoặc proof-of-stake theo cổ phần) thay vì một trung tâm; bản ghi gần như bất biến. Khóa, không phải danh tính, kiểm soát tài sản: mất private key là mất tài sản.</li><li><strong>Các loại tài sản:</strong> tiền mã hóa (bitcoin, ether) — không dòng tiền, định giá dựa vào khan hiếm và mức chấp nhận; <em>stablecoin</em> neo tiền pháp định (chất lượng phụ thuộc hoàn toàn vào dự trữ); <em>token</em> — tiện ích, quản trị, chứng khoán, NFT; và <strong>token hóa</strong> tài sản thực — có thể chia nhỏ và tăng tốc thanh toán cho các tài sản truyền thống kém thanh khoản.</li><li><strong>Cách tiếp cận:</strong> sở hữu trực tiếp (sàn + ví: rủi ro lưu ký, hack, mất khóa), sản phẩm niêm yết và trust (tiện, nhưng lệch tracking và phí), qua futures (chi phí roll), hoặc cổ phiếu công ty hệ sinh thái (đào coin, sàn) — mỗi đường một bộ rủi ro riêng.</li><li><strong>Tính chất đầu tư và rủi ro:</strong> biến động cực lớn, tương quan bất ổn (luận điểm đa dạng hóa mong manh), gian lận và sập nền tảng, quy định đang định hình, rủi ro vận hành/lưu ký — quy mô vị thế nên giả định kịch bản mất trắng.</li></ul>"
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
  ]
 ]
};
