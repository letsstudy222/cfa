/* =====================================================================
   Topic 03 — Economics
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
 "id": "econ",
 "num": "03",
 "name": "Economics",
 "vi": "Kinh tế học",
 "w": [
  6,
  9
 ],
 "blurb": "Micro (demand, elasticity, market structures), macro (business cycles, money, fiscal & monetary policy) and currency exchange rates.",
 "intro": {
  "en": "Economics at Level 1 spans eight learning modules: market structures and firm economics; business cycles; fiscal and monetary policy; geopolitics; international trade; capital flows and the FX market; and exchange rate calculations. It rewards structured thinking more than heavy math. Every module below pairs the theory with diagrams and fully worked numeric examples — elasticities, multipliers, debt dynamics, comparative advantage, cross rates and forwards — then drill the Quick checks and Practice Sets B–F.",
  "vi": "Economics ở Level 1 gồm tám learning modules: cấu trúc thị trường và kinh tế học doanh nghiệp; chu kỳ kinh doanh; chính sách tài khóa và tiền tệ; địa chính trị; thương mại quốc tế; dòng vốn và thị trường FX; và tính toán tỷ giá. Topic này thưởng cho tư duy có cấu trúc hơn là toán nặng. Mỗi module bên dưới kết hợp lý thuyết với đồ thị và ví dụ số giải trọn vẹn — độ co giãn, số nhân, động học nợ công, lợi thế so sánh, cross rates và forwards — sau đó luyện Quick checks và Practice Sets B–F."
 },
 "modules": [
  {
   "title": "The Firm and Market Structures",
   "sections": [
    {
     "h": "Breakeven and shutdown points",
     "en": "<p>In the <strong>short run</strong>, a firm should continue operating as long as price covers <strong>average variable cost (AVC)</strong> — fixed costs are sunk. It shuts down when P &lt; AVC. In the <strong>long run</strong>, price must cover <strong>average total cost (ATC)</strong>; otherwise the firm exits. Breakeven: P = ATC (zero economic profit — note that zero <em>economic</em> profit still includes a normal return on capital).</p>",
     "vi": "<p>Trong <strong>ngắn hạn</strong>, doanh nghiệp nên tiếp tục hoạt động khi giá còn bù được <strong>chi phí biến đổi bình quân (AVC)</strong> — chi phí cố định là chi phí chìm. Đóng cửa khi P &lt; AVC. Trong <strong>dài hạn</strong>, giá phải bù được <strong>tổng chi phí bình quân (ATC)</strong>; nếu không doanh nghiệp rời ngành. Hòa vốn: P = ATC (lợi nhuận kinh tế bằng 0 — lưu ý lợi nhuận kinh tế bằng 0 vẫn bao gồm mức sinh lời bình thường trên vốn).</p>"
    },
    {
     "h": "Profit maximization, economies of scale & supply",
     "en": "<ul><li><strong>The universal rule:</strong> every firm — from perfect competitor to monopolist — maximizes profit at the output where <strong>marginal revenue = marginal cost</strong>. Under perfect competition MR = price (the demand curve facing the firm is flat); with any pricing power, MR &lt; price because selling more requires cutting price on all units.</li><li><strong>Economic vs accounting profit:</strong> economic profit subtracts <em>all</em> opportunity costs, including a normal return on the owners’ capital. Zero economic profit (\"normal profit\") is the long-run resting point of competitive markets.</li><li><strong>Economies of scale:</strong> the long-run average cost (LRAC) curve falls as output grows when scale spreads fixed costs, enables specialization, and improves purchasing power; it eventually rises with <em>diseconomies</em> (bureaucracy, coordination costs). The output where LRAC first reaches its minimum is the <strong>minimum efficient scale</strong> — industries with a large MES relative to demand support only a few firms (a natural barrier to entry, and in the extreme a natural monopoly).</li><li><strong>Breakeven and shutdown recap in market context:</strong> in the long run, entry and exit push price toward minimum ATC in competitive markets — which is why economic profits are competed away.</li></ul><p><strong>Elasticity — the sensitivity toolkit:</strong> own-price elasticity = %ΔQ / %ΔP. |E| &gt; 1 is <em>elastic</em> (raising price <strong>cuts</strong> total revenue), |E| &lt; 1 is <em>inelastic</em> (raising price <strong>raises</strong> revenue), |E| = 1 leaves revenue unchanged — the pricing logic behind every structure. Demand is more elastic when close substitutes exist, the item takes a large budget share, and the horizon is long. <em>Cross-price elasticity</em>: positive → substitutes; negative → complements. <em>Income elasticity</em>: positive → normal goods (&gt; 1 = luxuries); negative → inferior goods.</p><p><strong>Identifying the structure in the wild:</strong> concentration measures help — the N-firm concentration ratio (sum of top-N shares) and the <strong>HHI</strong> (sum of squared shares, more sensitive to dominance) — but both ignore <em>contestability</em>: a concentrated market with easy entry can still price competitively, and elasticity of demand facing the firm is the ultimate test of pricing power.</p>",
     "vi": "<ul><li><strong>Quy tắc phổ quát:</strong> mọi doanh nghiệp — từ cạnh tranh hoàn hảo đến độc quyền — tối đa hóa lợi nhuận tại sản lượng có <strong>doanh thu biên = chi phí biên</strong>. Trong cạnh tranh hoàn hảo MR = giá (đường cầu của doanh nghiệp nằm ngang); có sức mạnh định giá thì MR &lt; giá vì bán thêm buộc phải giảm giá trên mọi đơn vị.</li><li><strong>Lợi nhuận kinh tế vs kế toán:</strong> lợi nhuận kinh tế trừ <em>tất cả</em> chi phí cơ hội, gồm cả mức sinh lời bình thường trên vốn chủ. Lợi nhuận kinh tế bằng 0 (\"lợi nhuận bình thường\") là điểm cân bằng dài hạn của thị trường cạnh tranh.</li><li><strong>Lợi thế kinh tế theo quy mô:</strong> đường chi phí bình quân dài hạn (LRAC) giảm khi sản lượng tăng nhờ dàn trải chi phí cố định, chuyên môn hóa, sức mua đầu vào; cuối cùng tăng trở lại do <em>bất lợi quy mô</em> (bộ máy cồng kềnh, chi phí phối hợp). Sản lượng đầu tiên đạt LRAC tối thiểu là <strong>quy mô hiệu quả tối thiểu (MES)</strong> — ngành có MES lớn so với cầu chỉ chứa được ít doanh nghiệp (rào cản tự nhiên; cực đoan là độc quyền tự nhiên).</li><li><strong>Ôn lại hòa vốn/đóng cửa trong bối cảnh thị trường:</strong> dài hạn, việc gia nhập/rời ngành đẩy giá về ATC tối thiểu trong thị trường cạnh tranh — vì thế lợi nhuận kinh tế bị cạnh tranh bào mòn về 0.</li></ul><p><strong>Elasticity — bộ công cụ đo độ nhạy:</strong> co giãn theo giá riêng = %ΔQ / %ΔP. |E| &gt; 1 là <em>co giãn</em> (tăng giá làm <strong>giảm</strong> tổng doanh thu), |E| &lt; 1 là <em>kém co giãn</em> (tăng giá làm <strong>tăng</strong> doanh thu), |E| = 1 giữ doanh thu không đổi — logic định giá đứng sau mọi cấu trúc thị trường. Cầu co giãn hơn khi có hàng thay thế gần, món hàng chiếm tỷ trọng ngân sách lớn, và khung thời gian dài. <em>Co giãn chéo</em>: dương → hàng thay thế; âm → hàng bổ sung. <em>Co giãn theo thu nhập</em>: dương → hàng thông thường (&gt; 1 = xa xỉ); âm → hàng thứ cấp.</p><p><strong>Nhận diện cấu trúc trong thực tế:</strong> các thước đo tập trung hỗ trợ — tỷ lệ tập trung N công ty (tổng thị phần top N) và <strong>HHI</strong> (tổng bình phương thị phần, nhạy hơn với sự thống trị) — nhưng cả hai bỏ qua <em>tính khả nhập (contestability)</em>: thị trường tập trung mà rào cản gia nhập thấp vẫn có thể định giá cạnh tranh, và độ co giãn của cầu mà công ty đối mặt mới là phép thử cuối cùng của sức mạnh định giá.</p>"
    },
    {
     "h": "The four market structures",
     "en": "<table class=\"simple\"><tr><th>Structure</th><th>Sellers</th><th>Product</th><th>Barriers</th><th>Pricing power</th></tr><tr><td><strong>Perfect competition</strong></td><td>Many</td><td>Homogeneous</td><td>Very low</td><td>None (price taker); demand is perfectly elastic; P = MR = MC in equilibrium</td></tr><tr><td><strong>Monopolistic competition</strong></td><td>Many</td><td>Differentiated</td><td>Low</td><td>Some; heavy advertising; zero economic profit in long run</td></tr><tr><td><strong>Oligopoly</strong></td><td>Few</td><td>Similar or differentiated</td><td>High</td><td>Significant; interdependent pricing (kinked demand, Cournot, game theory/collusion)</td></tr><tr><td><strong>Monopoly</strong></td><td>One</td><td>Unique</td><td>Very high</td><td>Full; produces where MR = MC, prices above MC; may face regulation</td></tr></table><p>Concentration measures: the N-firm concentration ratio and the <strong>Herfindahl–Hirschman Index (HHI)</strong> = Σ(market share²). Neither directly captures barriers to entry or contestability.</p>",
     "vi": "<p>Bốn cấu trúc: <strong>cạnh tranh hoàn hảo</strong> (nhiều người bán, sản phẩm đồng nhất, không có sức mạnh định giá, P = MR = MC); <strong>cạnh tranh độc quyền</strong> (nhiều người bán, sản phẩm khác biệt, quảng cáo mạnh, lợi nhuận kinh tế dài hạn bằng 0); <strong>độc quyền nhóm</strong> (ít người bán, định giá phụ thuộc lẫn nhau — đường cầu gãy, Cournot, lý thuyết trò chơi/thông đồng); <strong>độc quyền</strong> (một người bán, rào cản rất cao, sản xuất tại MR = MC và định giá trên MC, có thể bị quản lý giá).</p><p>Đo mức độ tập trung: tỷ lệ tập trung N công ty và chỉ số <strong>HHI</strong> = Σ(thị phần²). Cả hai đều không phản ánh trực tiếp rào cản gia nhập.</p>"
    },
    {
     "h": "Worked: elasticities, profit max, breakeven & HHI — with real numbers",
     "en": "<p><strong>Elasticity is a ratio of percentage changes — always interpret the sign and the size.</strong> Suppose a firm raises price from $10 to $11 (+10%) and quantity demanded falls from 100 to 88 (−12%). Own-price elasticity = −12% / +10% = <strong>−1.2</strong>. |Ed| &gt; 1 → demand is <em>elastic</em>: the % drop in quantity outweighs the % rise in price, so <strong>total revenue falls</strong> (check: TR goes from $1,000 to $968). That is the total revenue test — for a price increase, TR falls if demand is elastic, rises if inelastic, and is unchanged at unit elasticity.</p>\n<table style=\"width:100%;border-collapse:collapse;font-size:13.5px;margin:10px 0\"><tr style=\"background:#EEF0FE\"><th style=\"padding:7px;border:1px solid #D6DAFB;text-align:left\">Elasticity</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Value found</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Meaning</th></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Own-price</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">−1.2</td><td style=\"padding:7px;border:1px solid #E5E9F2\">Elastic — price hikes cut revenue</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Cross-price (vs good B)</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">+0.8</td><td style=\"padding:7px;border:1px solid #E5E9F2\">Positive → A and B are <strong>substitutes</strong></td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Cross-price (vs good C)</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">−0.5</td><td style=\"padding:7px;border:1px solid #E5E9F2\">Negative → A and C are <strong>complements</strong></td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Income</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">+1.5</td><td style=\"padding:7px;border:1px solid #E5E9F2\">Positive → normal good (&gt;1 suggests income-sensitive/luxury)</td></tr></table>\n<p><strong>Profit maximization: produce every unit where MR ≥ MC, stop when MR = MC.</strong> This holds in <em>every</em> market structure — what differs is only the shape of MR (horizontal at the market price under perfect competition; below the demand curve for anyone facing a downward-sloping demand).</p>\n<svg viewBox=\"0 0 720 340\" style=\"width:100%;height:auto;display:block;margin:14px 0;background:#fff;border:1px solid #E5E9F2;border-radius:12px\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Cost curves with breakeven and shutdown points\">\n<text x=\"360\" y=\"26\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" fill=\"#1B2438\">Cost curves: where breakeven and shutdown live</text>\n<line x1=\"70\" y1=\"290\" x2=\"680\" y2=\"290\" stroke=\"#5B6577\" stroke-width=\"1.5\"/>\n<line x1=\"70\" y1=\"290\" x2=\"70\" y2=\"50\" stroke=\"#5B6577\" stroke-width=\"1.5\"/>\n<text x=\"675\" y=\"308\" text-anchor=\"end\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" fill=\"#5B6577\">Quantity</text>\n<text x=\"30\" y=\"60\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" fill=\"#5B6577\">$/unit</text>\n<path d=\"M 120 270 C 200 230 260 215 330 218 C 430 222 540 200 640 130\" fill=\"none\" stroke=\"#0F9573\" stroke-width=\"2.5\"/>\n<text x=\"646\" y=\"126\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12.5\" font-weight=\"700\" fill=\"#0F9573\">AVC</text>\n<path d=\"M 120 200 C 210 155 300 148 380 152 C 480 158 570 130 645 80\" fill=\"none\" stroke=\"#5457E0\" stroke-width=\"2.5\"/>\n<text x=\"650\" y=\"76\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12.5\" font-weight=\"700\" fill=\"#5457E0\">ATC</text>\n<path d=\"M 200 275 C 270 240 300 215 330 180 C 370 130 400 95 430 55\" fill=\"none\" stroke=\"#DC4848\" stroke-width=\"2.5\"/>\n<text x=\"436\" y=\"52\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12.5\" font-weight=\"700\" fill=\"#DC4848\">MC</text>\n<circle cx=\"308\" cy=\"216\" r=\"5\" fill=\"#0F9573\"/>\n<line x1=\"308\" y1=\"216\" x2=\"308\" y2=\"290\" stroke=\"#0F9573\" stroke-width=\"1\" stroke-dasharray=\"3 3\"/>\n<text x=\"308\" y=\"248\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11.5\" font-weight=\"700\" fill=\"#0F9573\">Shutdown: P = min AVC</text>\n<text x=\"308\" y=\"262\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#5B6577\">below this, stop producing now</text>\n<circle cx=\"368\" cy=\"151\" r=\"5\" fill=\"#5457E0\"/>\n<line x1=\"368\" y1=\"151\" x2=\"368\" y2=\"290\" stroke=\"#5457E0\" stroke-width=\"1\" stroke-dasharray=\"3 3\"/>\n<text x=\"392\" y=\"118\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11.5\" font-weight=\"700\" fill=\"#5457E0\">Breakeven: P = min ATC</text>\n<text x=\"392\" y=\"132\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#5B6577\">economic profit = 0</text>\n<text x=\"360\" y=\"326\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" fill=\"#8B5CF6\" font-weight=\"600\">MC always cuts AVC and ATC at their minimum points — memorize both crossings.</text>\n</svg>\n<p><strong>Breakeven vs shutdown with numbers.</strong> Say at the best output level ATC = $12 and AVC = $8, and the market price is $9. Price is below ATC → the firm makes an economic <em>loss</em>. But price is above AVC → each unit sold still contributes $1 toward fixed costs, so in the <strong>short run it keeps operating</strong> (losing less than if it shut down and still paid fixed costs). If P fell below $8 (min AVC), it should shut down immediately. In the long run, any price persistently below min ATC ($12) drives exit. Memorize the ladder: <strong>P &lt; min AVC → shut down now · min AVC ≤ P &lt; min ATC → operate short run, exit long run · P ≥ min ATC → stay</strong>.</p>\n<svg viewBox=\"0 0 720 340\" style=\"width:100%;height:auto;display:block;margin:14px 0;background:#fff;border:1px solid #E5E9F2;border-radius:12px\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Perfect competition vs monopoly pricing\">\n<text x=\"360\" y=\"26\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" fill=\"#1B2438\">Perfect competition vs monopoly — same demand, different outcome</text>\n<g>\n<line x1=\"60\" y1=\"280\" x2=\"330\" y2=\"280\" stroke=\"#5B6577\" stroke-width=\"1.5\"/>\n<line x1=\"60\" y1=\"280\" x2=\"60\" y2=\"60\" stroke=\"#5B6577\" stroke-width=\"1.5\"/>\n<text x=\"195\" y=\"300\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#1B2438\">Perfect competition</text>\n<line x1=\"70\" y1=\"240\" x2=\"320\" y2=\"90\" stroke=\"#5457E0\" stroke-width=\"2.2\"/>\n<text x=\"322\" y=\"88\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11.5\" fill=\"#5457E0\" font-weight=\"700\">S = MC</text>\n<line x1=\"70\" y1=\"90\" x2=\"320\" y2=\"240\" stroke=\"#1B2438\" stroke-width=\"2.2\"/>\n<text x=\"322\" y=\"244\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11.5\" fill=\"#1B2438\" font-weight=\"700\">D</text>\n<circle cx=\"195\" cy=\"165\" r=\"5\" fill=\"#0F9573\"/>\n<line x1=\"60\" y1=\"165\" x2=\"195\" y2=\"165\" stroke=\"#0F9573\" stroke-width=\"1\" stroke-dasharray=\"3 3\"/>\n<line x1=\"195\" y1=\"165\" x2=\"195\" y2=\"280\" stroke=\"#0F9573\" stroke-width=\"1\" stroke-dasharray=\"3 3\"/>\n<text x=\"44\" y=\"169\" text-anchor=\"end\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11.5\" fill=\"#0F9573\" font-weight=\"700\">Pc</text>\n<text x=\"195\" y=\"273\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11.5\" fill=\"#0F9573\" font-weight=\"700\">Qc</text>\n<text x=\"195\" y=\"322\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#5B6577\">P = MC, output maximizes total surplus</text>\n</g>\n<g>\n<line x1=\"400\" y1=\"280\" x2=\"680\" y2=\"280\" stroke=\"#5B6577\" stroke-width=\"1.5\"/>\n<line x1=\"400\" y1=\"280\" x2=\"400\" y2=\"60\" stroke=\"#5B6577\" stroke-width=\"1.5\"/>\n<text x=\"540\" y=\"300\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#1B2438\">Monopoly</text>\n<polygon points=\"497,166 545,195 545,137\" fill=\"#FDECEC\" stroke=\"#DC4848\" stroke-width=\"1\"/>\n<line x1=\"410\" y1=\"90\" x2=\"670\" y2=\"246\" stroke=\"#1B2438\" stroke-width=\"2.2\"/>\n<text x=\"672\" y=\"250\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11.5\" fill=\"#1B2438\" font-weight=\"700\">D</text>\n<line x1=\"410\" y1=\"90\" x2=\"590\" y2=\"306\" stroke=\"#8B5CF6\" stroke-width=\"1.8\" stroke-dasharray=\"5 3\"/>\n<text x=\"560\" y=\"300\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11.5\" fill=\"#8B5CF6\" font-weight=\"700\">MR</text>\n<line x1=\"410\" y1=\"235 \" x2=\"670\" y2=\"105\" stroke=\"#5457E0\" stroke-width=\"2.2\"/>\n<text x=\"640\" y=\"102\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11.5\" fill=\"#5457E0\" font-weight=\"700\">MC</text>\n<circle cx=\"497\" cy=\"192\" r=\"4.5\" fill=\"#8B5CF6\"/>\n<line x1=\"497\" y1=\"192\" x2=\"497\" y2=\"280\" stroke=\"#8B5CF6\" stroke-width=\"1\" stroke-dasharray=\"3 3\"/>\n<text x=\"497\" y=\"273\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11.5\" fill=\"#8B5CF6\" font-weight=\"700\">Qm</text>\n<circle cx=\"497\" cy=\"143\" r=\"4.5\" fill=\"#DC4848\"/>\n<line x1=\"400\" y1=\"143\" x2=\"497\" y2=\"143\" stroke=\"#DC4848\" stroke-width=\"1\" stroke-dasharray=\"3 3\"/>\n<text x=\"386\" y=\"147\" text-anchor=\"end\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11.5\" fill=\"#DC4848\" font-weight=\"700\">Pm</text>\n<text x=\"576\" y=\"170\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#DC4848\" font-weight=\"600\">DWL</text>\n<text x=\"540\" y=\"322\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#5B6577\">Q where MR = MC, price read off D — output lower, price higher</text>\n</g>\n</svg>\n<p><strong>Concentration with numbers.</strong> Four firms hold market shares 40%, 30%, 20%, 10%. HHI = 0.40² + 0.30² + 0.20² + 0.10² = 0.16 + 0.09 + 0.04 + 0.01 = <strong>0.30</strong> (or 3,000 on the ×10,000 scale) — a concentrated market. The 4-firm concentration ratio = 40+30+20+10 = 100%. HHI beats the simple concentration ratio because squaring weights large firms more — but <em>neither</em> captures contestability: a market with two firms but free entry can still behave competitively, which is why elasticity of demand facing the firm is the better test of pricing power.</p>",
     "vi": "<p><strong>Độ co giãn là tỷ số của các phần trăm thay đổi — luôn đọc cả dấu lẫn độ lớn.</strong> Giả sử doanh nghiệp tăng giá từ $10 lên $11 (+10%) và lượng cầu giảm từ 100 xuống 88 (−12%). Own-price elasticity = −12% / +10% = <strong>−1,2</strong>. |Ed| &gt; 1 → cầu <em>co giãn</em>: % giảm của lượng lớn hơn % tăng của giá, nên <strong>tổng doanh thu giảm</strong> (kiểm tra: TR từ $1.000 xuống $968). Đó chính là total revenue test — khi tăng giá, TR giảm nếu cầu co giãn, tăng nếu kém co giãn, không đổi nếu co giãn đơn vị.</p>\n<p>Bảng trên: cross-price +0,8 với hàng B → dấu dương nghĩa là <strong>hàng thay thế</strong>; −0,5 với hàng C → <strong>hàng bổ sung</strong>; income elasticity +1,5 → hàng thông thường (lớn hơn 1 gợi ý hàng xa xỉ, nhạy với thu nhập).</p>\n<p><strong>Tối đa hóa lợi nhuận: sản xuất mọi đơn vị có MR ≥ MC, dừng khi MR = MC.</strong> Nguyên tắc này đúng trong <em>mọi</em> cấu trúc thị trường — khác nhau chỉ ở hình dạng của MR (nằm ngang tại giá thị trường trong cạnh tranh hoàn hảo; nằm dưới đường cầu với bất kỳ ai đối mặt đường cầu dốc xuống).</p>\n<p><strong>Breakeven vs shutdown bằng con số.</strong> Tại mức sản lượng tốt nhất, ATC = $12, AVC = $8, giá thị trường $9. Giá dưới ATC → doanh nghiệp <em>lỗ kinh tế</em>. Nhưng giá trên AVC → mỗi đơn vị bán ra vẫn đóng góp $1 bù chi phí cố định, nên <strong>ngắn hạn vẫn tiếp tục sản xuất</strong> (lỗ ít hơn so với đóng cửa mà vẫn phải trả chi phí cố định). Nếu P xuống dưới $8 (min AVC) → đóng cửa ngay. Dài hạn, giá kéo dài dưới min ATC ($12) buộc rời ngành. Thuộc lòng bậc thang: <strong>P &lt; min AVC → đóng cửa ngay · min AVC ≤ P &lt; min ATC → chạy ngắn hạn, rời ngành dài hạn · P ≥ min ATC → ở lại</strong>.</p>\n<p><strong>Độ tập trung bằng con số.</strong> Bốn hãng nắm thị phần 40%, 30%, 20%, 10%. HHI = 0,16 + 0,09 + 0,04 + 0,01 = <strong>0,30</strong> (tức 3.000 theo thang ×10.000) — thị trường tập trung cao. Concentration ratio 4 hãng = 100%. HHI tốt hơn concentration ratio vì bình phương làm hãng lớn có trọng số cao hơn — nhưng <em>cả hai</em> đều không đo được tính khả nhập (contestability): thị trường 2 hãng nhưng gia nhập tự do vẫn có thể hành xử cạnh tranh, vì thế độ co giãn của cầu mà hãng đối mặt mới là thước đo sức mạnh định giá tốt nhất.</p>"
    }
   ],
   "formulas": [
    [
     "HHI",
     "HHI = Σ (market share_i)²",
     ""
    ],
    [
     "Own-price elasticity",
     "%ΔQd / %ΔP",
     "|E| > 1 elastic; revenue falls when price rises"
    ],
    [
     "Profit maximization",
     "Produce where MR = MC",
     "Perfect competition: P = MR"
    ],
    [
     "Breakeven / shutdown",
     "Long run: P = min ATC · Short run shutdown: P < min AVC",
     ""
    ],
    [
     "Cross & income elasticity",
     "%ΔQ_A/%ΔP_B ; %ΔQ/%ΔIncome",
     "+ substitutes / normal goods; − complements / inferior goods"
    ],
    [
     "MR and elasticity",
     "MR = P × (1 + 1/Ed)",
     "With Ed = −2: MR = P(1 − 0.5) = 0.5P. MR = 0 at unit elasticity — a monopolist never operates on the inelastic part of demand."
    ],
    [
     "Total revenue test",
     "Price ↑: TR ↓ if elastic, TR ↑ if inelastic",
     "TR unchanged at |Ed| = 1. Works in reverse for price cuts."
    ]
   ]
  },
  {
   "title": "Understanding Business Cycles",
   "sections": [
    {
     "h": "The business cycle and indicators",
     "en": "<p>Phases: <strong>trough → expansion → peak → contraction</strong>. Typical patterns: early expansion — sales up, inventories deliberately rebuilt, hiring resumes; late cycle — inflation accelerates, central banks tighten. <strong>Unemployment</strong> is a lagging indicator (firms fire last and hire back last); the stock market and inventory-to-sales ratios are leading indicators. Credit cycles (lending standards, spreads) often amplify business cycles.</p><p><strong>Unemployment types:</strong> frictional (between jobs), structural (skills mismatch), cyclical (demand shortfall). The participation rate can distort the headline rate — discouraged workers leaving the labor force lowers unemployment without any hiring.</p><p><strong>Life inside each phase:</strong> <em>early expansion (recovery)</em> — output turns up, but firms rebuild hours and temporary staff before hiring permanently, so unemployment keeps rising briefly (employment is a <strong>lagging</strong> signal); inventories are drawn down and the inventory–sales ratio falls. <em>Late expansion</em> — capacity tightens, wage and price inflation accelerates, central banks lean against it. <em>Contraction</em> — sales fall before production adjusts, so the inventory–sales ratio <em>rises</em> first; firms cut overtime, then jobs; housing and durable goods, the most interest-rate-sensitive sectors, turn earliest in both directions.</p><p><strong>Unemployment taxonomy:</strong> <em>frictional</em> — normal search time between jobs (always present); <em>structural</em> — a mismatch between skills offered and skills demanded (long-lasting, needs retraining); <em>cyclical</em> — from deficient demand in downturns (the policy target). Watch also the <em>participation rate</em> and <em>discouraged workers</em>: unemployment can fall for the wrong reason when job-seekers give up, and <em>underemployment</em> hides slack.</p><p><strong>The credit cycle</strong> overlays the business cycle: lending standards loosen and asset prices climb in expansions, then credit tightens abruptly in stress — credit cycles are longer and deeper than business cycles, and recessions accompanied by credit crunches and housing busts run longer and deeper too.</p>",
     "vi": "<p>Các pha: <strong>đáy → mở rộng → đỉnh → thu hẹp</strong>. Đặc trưng: đầu chu kỳ — doanh số tăng, chủ động tích lại tồn kho, tuyển dụng trở lại; cuối chu kỳ — lạm phát tăng tốc, NHTW thắt chặt. <strong>Thất nghiệp</strong> là chỉ báo trễ (doanh nghiệp sa thải sau cùng và tuyển lại sau cùng); thị trường chứng khoán và tỷ lệ tồn kho/doanh số là chỉ báo dẫn dắt. Chu kỳ tín dụng thường khuếch đại chu kỳ kinh tế.</p><p><strong>Các loại thất nghiệp:</strong> ma sát (đang chuyển việc), cơ cấu (lệch kỹ năng), chu kỳ (thiếu cầu). Tỷ lệ tham gia lao động có thể bóp méo con số thất nghiệp — người lao động nản lòng rời lực lượng lao động làm tỷ lệ thất nghiệp giảm dù không ai được tuyển.</p><p><strong>Diễn biến bên trong từng pha:</strong> <em>đầu mở rộng (hồi phục)</em> — sản lượng quay đầu tăng, nhưng doanh nghiệp tăng giờ làm và nhân sự thời vụ trước khi tuyển chính thức, nên thất nghiệp còn nhích lên một thời gian ngắn (việc làm là chỉ báo <strong>trễ</strong>); tồn kho được rút xuống, tỷ số tồn kho/doanh số giảm. <em>Cuối mở rộng</em> — công suất căng, lạm phát lương và giá tăng tốc, NHTW bắt đầu ghìm lại. <em>Suy giảm</em> — doanh số rơi trước khi sản xuất kịp điều chỉnh, nên tỷ số tồn kho/doanh số <em>tăng</em> trước; doanh nghiệp cắt giờ làm thêm rồi mới cắt việc; nhà ở và hàng lâu bền — các ngành nhạy lãi suất nhất — đảo chiều sớm nhất ở cả hai hướng.</p><p><strong>Phân loại thất nghiệp:</strong> <em>tạm thời (frictional)</em> — thời gian tìm việc bình thường giữa các công việc (luôn tồn tại); <em>cơ cấu (structural)</em> — lệch pha giữa kỹ năng có và kỹ năng cần (kéo dài, phải đào tạo lại); <em>chu kỳ (cyclical)</em> — do cầu thiếu hụt trong suy thoái (mục tiêu của chính sách). Cần xem thêm <em>tỷ lệ tham gia lực lượng lao động</em> và <em>người lao động nản chí</em>: thất nghiệp có thể giảm vì lý do xấu khi người tìm việc bỏ cuộc, và <em>bán thất nghiệp</em> che giấu độ chùng của thị trường.</p><p><strong>Chu kỳ tín dụng</strong> phủ lên chu kỳ kinh doanh: chuẩn cho vay lỏng dần và giá tài sản leo thang trong pha mở rộng, rồi tín dụng siết đột ngột khi căng thẳng — chu kỳ tín dụng dài và sâu hơn chu kỳ kinh doanh, và các cuộc suy thoái đi kèm khủng hoảng tín dụng, đổ vỡ nhà đất thường kéo dài và nặng nề hơn.</p>"
    },
    {
     "h": "Measuring inflation — and reading the indicators",
     "en": "<ul><li><strong>Price indexes:</strong> the CPI tracks a consumption basket; the PPI (producer prices) often leads the CPI as input costs pass through; the GDP deflator covers everything produced. Most CPIs are <strong>Laspeyres indexes</strong> (fixed base-period basket), which <em>overstate</em> true cost-of-living inflation because of three biases: <strong>substitution</strong> (consumers shift toward relatively cheaper goods), <strong>quality improvement</strong> (price rises that buy better goods), and <strong>new goods</strong> (arrive late in the basket). Chained indexes mitigate substitution bias.</li><li><strong>Headline vs core:</strong> core inflation strips out volatile food and energy — central banks watch it to avoid reacting to noise.</li><li><strong>Inflation vocabulary:</strong> disinflation = inflation still positive but falling; deflation = prices actually falling (dangerous: raises real debt burdens and postpones spending); hyperinflation = extreme, self-reinforcing inflation. Cost-push (wages, energy) vs demand-pull (aggregate demand outrunning capacity); inflation <em>expectations</em> can make either self-sustaining.</li><li><strong>Indicator taxonomy:</strong> leading (stock prices, building permits, yield spreads, new orders, consumer expectations), coincident (industrial production, personal income, employees on payrolls), lagging (unemployment rate, CPI for services, average prime rate, inventories-to-sales). Diffusion indexes track how many components are rising.</li></ul>",
     "vi": "<ul><li><strong>Chỉ số giá:</strong> CPI theo rổ tiêu dùng; PPI (giá sản xuất) thường dẫn trước CPI khi chi phí đầu vào truyền dần vào giá bán lẻ; GDP deflator bao trùm mọi thứ được sản xuất. Đa số CPI là <strong>chỉ số Laspeyres</strong> (rổ cố định kỳ gốc) nên <em>thổi phồng</em> lạm phát chi phí sinh hoạt thật vì 3 thiên lệch: <strong>thay thế</strong> (người tiêu dùng chuyển sang hàng rẻ tương đối), <strong>cải thiện chất lượng</strong> (giá tăng nhưng hàng tốt hơn), <strong>hàng hóa mới</strong> (vào rổ muộn). Chỉ số xích (chained) giảm thiên lệch thay thế.</li><li><strong>Headline vs core:</strong> lạm phát lõi loại bỏ thực phẩm và năng lượng biến động mạnh — NHTW theo dõi core để tránh phản ứng với nhiễu.</li><li><strong>Từ vựng lạm phát:</strong> disinflation = lạm phát vẫn dương nhưng giảm dần; deflation = giá thực sự giảm (nguy hiểm: tăng gánh nợ thực, trì hoãn chi tiêu); hyperinflation = lạm phát cực đoan tự khuếch đại. Chi phí đẩy (lương, năng lượng) vs cầu kéo (tổng cầu vượt năng lực); <em>kỳ vọng</em> lạm phát có thể khiến cả hai tự duy trì.</li><li><strong>Phân loại chỉ báo:</strong> dẫn dắt (giá cổ phiếu, giấy phép xây dựng, chênh lệch lợi suất, đơn hàng mới, kỳ vọng người tiêu dùng), trùng (sản xuất công nghiệp, thu nhập cá nhân, số lao động có việc), trễ (tỷ lệ thất nghiệp, CPI dịch vụ, lãi suất cho vay cơ bản, tồn kho/doanh số). Chỉ số khuếch tán đo tỷ lệ cấu phần đang tăng.</li></ul>"
    },
    {
     "h": "The cycle in motion: phase behavior, indicator classes & inflation measures",
     "en": "<svg viewBox=\"0 0 720 330\" style=\"width:100%;height:auto;display:block;margin:14px 0;background:#fff;border:1px solid #E5E9F2;border-radius:12px\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Business cycle phases\">\n<text x=\"360\" y=\"26\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" fill=\"#1B2438\">The business cycle: four phases around a rising trend</text>\n<line x1=\"50\" y1=\"270\" x2=\"690\" y2=\"270\" stroke=\"#5B6577\" stroke-width=\"1.5\"/>\n<text x=\"686\" y=\"288\" text-anchor=\"end\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" fill=\"#5B6577\">Time</text>\n<text x=\"30\" y=\"70\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" fill=\"#5B6577\">GDP</text>\n<line x1=\"60\" y1=\"220\" x2=\"680\" y2=\"105\" stroke=\"#5B6577\" stroke-width=\"1.5\" stroke-dasharray=\"6 4\"/>\n<text x=\"640\" y=\"94\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11\" fill=\"#5B6577\">trend growth</text>\n<path d=\"M 60 225 C 130 180 170 120 220 115 C 260 112 300 160 350 195 C 385 218 410 225 440 210 C 500 180 560 110 620 95 C 645 89 665 95 680 102\" fill=\"none\" stroke=\"#5457E0\" stroke-width=\"3\"/>\n<circle cx=\"222\" cy=\"115\" r=\"5\" fill=\"#0F9573\"/>\n<text x=\"222\" y=\"98\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#0F9573\">Peak</text>\n<circle cx=\"432\" cy=\"212\" r=\"5\" fill=\"#DC4848\"/>\n<text x=\"436\" y=\"240\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#DC4848\">Trough</text>\n<text x=\"135\" y=\"150\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11.5\" font-weight=\"600\" fill=\"#5457E0\">Expansion</text>\n<text x=\"325\" y=\"150\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11.5\" font-weight=\"600\" fill=\"#B45309\">Contraction</text>\n<text x=\"325\" y=\"164\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10\" fill=\"#B45309\">(recession)</text>\n<text x=\"545\" y=\"160\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11.5\" font-weight=\"600\" fill=\"#0F9573\">Recovery → expansion</text>\n<text x=\"360\" y=\"306\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11.5\" fill=\"#8B5CF6\" font-weight=\"600\">Late expansion: inflation rises, inventories build. Into recession: inventory/sales ratio jumps, then firms cut production.</text>\n</svg>\n<p><strong>The exam tests what each variable does in each phase.</strong> The table below is the highest-yield summary in this module — read it column by column:</p>\n<table style=\"width:100%;border-collapse:collapse;font-size:13.5px;margin:10px 0\"><tr style=\"background:#EEF0FE\"><th style=\"padding:7px;border:1px solid #D6DAFB;text-align:left\">Variable</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Early expansion</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Late expansion</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Contraction</th></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">GDP & production</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">accelerating</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">decelerating</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">falling</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Hiring</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">overtime first, then hiring</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">slows; wage pressure builds</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">layoffs (with a lag)</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Inventories / sales</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">low — restocking boosts output</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">rising as sales slow</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">spikes, then firms slash production</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Inflation</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">low, stable</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">rising</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">decelerates (lags the cycle)</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Credit & housing</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">expanding</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">overheated</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">contracting</td></tr></table>\n<p>Firms use <strong>overtime and temporary workers</strong> at turning points before hiring or firing permanent staff — labor decisions lag because hiring and firing are costly. Likewise the <strong>inventory/sales ratio</strong> is a classic early-recession tell: sales fall before production is cut, so the ratio jumps <em>first</em>, and output is then cut even though final demand has stopped falling — which deepens the trough.</p>\n<p><strong>Indicator classes — memorize by economic logic, not by rote.</strong> Things that reflect <em>decisions about the future</em> lead: stock prices, building permits, new orders for capital goods, consumer expectations, the yield spread (10y − short rate). Things measuring <em>current activity</em> coincide: nonfarm payrolls, industrial production, personal income, manufacturing & trade sales. Things that <em>respond slowly or confirm</em> lag: average duration of unemployment, the inventory/sales ratio, unit labor costs, average prime rate, outstanding consumer credit. A diffusion index tracks the % of component indicators moving up — breadth matters more than any single series.</p>\n<p><strong>Inflation measurement worked.</strong> A fixed basket costs $100 in the base year, $105 today → CPI = 105 and inflation over the period = 5%. A fixed-basket (Laspeyres) index <em>overstates</em> the true cost of living for three reasons: substitution bias (consumers shift toward relatively cheaper goods), quality bias (part of a price rise pays for better quality), and new-goods bias (new, cheaper products enter late). Chained indexes and hedonic adjustment mitigate these. Distinguish: <strong>CPI</strong> (household basket), <strong>PPI/WPI</strong> (producer prices — often leads CPI as costs pass through), <strong>GDP deflator</strong> (all domestically produced output). <strong>Headline vs core:</strong> core excludes food and energy — central banks watch core because food/energy are volatile and often mean-revert. Rising inflation with rising output = demand-pull; rising inflation with <em>falling</em> output = cost-push (stagflation risk, the central bank's nightmare).</p>",
     "vi": "<p><strong>Đề thi hỏi từng biến số làm gì trong từng pha.</strong> Bảng trong bản tiếng Anh là tóm tắt \"ăn điểm\" nhất của module này: GDP tăng tốc ở đầu expansion, giảm tốc cuối expansion, rơi trong contraction; tuyển dụng đi sau chu kỳ (tăng ca và lao động thời vụ trước, tuyển/sa thải chính thức sau, vì chi phí tuyển-sa thải cao); tỷ lệ inventories/sales thấp ở đầu chu kỳ, tăng dần khi doanh số chậm lại và <em>vọt lên</em> khi vào suy thoái; lạm phát đi trễ chu kỳ — tăng ở cuối expansion, giảm tốc trong suy thoái; tín dụng và nhà ở mở rộng rồi quá nóng rồi co lại.</p>\n<p><strong>Tỷ lệ inventory/sales là tín hiệu suy thoái sớm kinh điển:</strong> doanh số giảm trước khi sản xuất bị cắt nên tỷ lệ này nhảy vọt <em>trước</em>; sau đó doanh nghiệp cắt mạnh sản lượng dù cầu cuối đã ngừng giảm — làm đáy suy thoái sâu thêm.</p>\n<p><strong>Phân loại chỉ báo — nhớ bằng logic kinh tế, đừng học vẹt.</strong> Những gì phản ánh <em>quyết định về tương lai</em> thì dẫn dắt (leading): giá cổ phiếu, giấy phép xây dựng, đơn hàng mới của tư liệu sản xuất, kỳ vọng người tiêu dùng, chênh lệch lợi suất (10 năm − lãi suất ngắn hạn). Những gì đo <em>hoạt động hiện tại</em> thì trùng pha (coincident): việc làm phi nông nghiệp, sản xuất công nghiệp, thu nhập cá nhân, doanh số sản xuất & thương mại. Những gì <em>phản ứng chậm hoặc chỉ xác nhận</em> thì đi trễ (lagging): thời gian thất nghiệp bình quân, tỷ lệ inventory/sales, chi phí lao động đơn vị, lãi suất prime bình quân, dư nợ tín dụng tiêu dùng. Diffusion index đo % số chỉ báo thành phần đang đi lên — độ rộng quan trọng hơn bất kỳ chuỗi đơn lẻ nào.</p>\n<p><strong>Đo lạm phát bằng ví dụ.</strong> Giỏ hàng cố định giá $100 năm gốc, nay $105 → CPI = 105, lạm phát kỳ = 5%. Chỉ số giỏ cố định (Laspeyres) <em>phóng đại</em> chi phí sinh hoạt thực vì ba lý do: thiên lệch thay thế (người tiêu dùng chuyển sang hàng rẻ tương đối), thiên lệch chất lượng (một phần mức tăng giá trả cho chất lượng tốt hơn), thiên lệch hàng mới (sản phẩm mới rẻ hơn vào rổ muộn). Chỉ số chained và điều chỉnh hedonic giảm các thiên lệch này. Phân biệt: <strong>CPI</strong> (giỏ hộ gia đình), <strong>PPI/WPI</strong> (giá nhà sản xuất — thường dẫn trước CPI khi chi phí truyền dẫn), <strong>GDP deflator</strong> (toàn bộ sản lượng sản xuất trong nước). <strong>Headline vs core:</strong> core loại lương thực và năng lượng — NHTW theo dõi core vì hai nhóm này biến động mạnh và thường tự hồi quy về trung bình. Lạm phát tăng kèm sản lượng tăng = demand-pull; lạm phát tăng kèm sản lượng <em>giảm</em> = cost-push (nguy cơ stagflation — ác mộng của NHTW).</p>"
    }
   ],
   "formulas": [
    [
     "Unemployment rate",
     "Unemployed / labor force",
     "Discouraged workers leave the labor force"
    ],
    [
     "Inflation rate",
     "(CPI_t − CPI_t−1) / CPI_t−1",
     "Laspeyres basket overstates true inflation"
    ],
    [
     "CPI (fixed basket)",
     "CPI = (cost of basket today / cost in base year) × 100",
     "Laspeyres index — overstates inflation via substitution, quality, and new-goods biases."
    ],
    [
     "GDP deflator",
     "Deflator = (nominal GDP / real GDP) × 100",
     "Covers all domestic output, not just a consumer basket."
    ],
    [
     "Real ≈ nominal − inflation",
     "real growth ≈ nominal growth − inflation",
     "Quick approximation; exact: (1+nom)/(1+π) − 1."
    ]
   ]
  },
  {
   "title": "Fiscal Policy",
   "sections": [
    {
     "h": "Fiscal tools, the multiplier & automatic stabilizers",
     "en": "<ul><li><strong>What fiscal policy is:</strong> the government’s use of spending and taxation to influence aggregate demand, redistribute income, and allocate resources. Expansionary = a larger deficit (or smaller surplus); contractionary = the reverse. Judge the <em>stance</em> by the change in the structural (cyclically adjusted) budget balance, not the raw deficit.</li><li><strong>Spending tools:</strong> transfer payments (redistribution — not part of GDP), current spending on goods/services, and capital expenditure (infrastructure — also boosts long-run capacity). <strong>Revenue tools:</strong> direct taxes (income, wealth) and indirect taxes (VAT, excise — quick to change, can target behavior). Desirable tax attributes: simplicity, efficiency (minimal distortion), fairness, sufficiency.</li><li><strong>The multiplier:</strong> one dollar of government spending becomes someone’s income, part of which is spent again. With marginal propensity to consume c and tax rate t, the <strong>fiscal multiplier = 1 / [1 − c(1 − t)]</strong>. Spending has a larger impact than tax cuts of equal size (part of a tax cut is saved); the <strong>balanced-budget multiplier</strong> is positive but small.</li><li><strong>Automatic stabilizers vs discretionary policy:</strong> progressive taxes and unemployment benefits expand deficits in downturns <em>automatically</em>, with no legislative delay — one reason economies are more stable than a century ago. Discretionary packages must clear the political process, which creates the lags discussed next.</li></ul>",
     "vi": "<ul><li><strong>Chính sách tài khóa là gì:</strong> việc chính phủ dùng chi tiêu và thuế để tác động tổng cầu, tái phân phối thu nhập, phân bổ nguồn lực. Mở rộng = thâm hụt lớn hơn; thắt chặt = ngược lại. Đánh giá <em>lập trường</em> chính sách qua thay đổi của cân đối ngân sách cơ cấu (đã điều chỉnh chu kỳ), không phải con số thâm hụt thô.</li><li><strong>Công cụ chi:</strong> chuyển giao (tái phân phối — không tính vào GDP), chi thường xuyên cho hàng hóa/dịch vụ, chi đầu tư (hạ tầng — còn nâng năng lực dài hạn). <strong>Công cụ thu:</strong> thuế trực thu (thu nhập, tài sản) và gián thu (VAT, tiêu thụ đặc biệt — thay đổi nhanh, định hướng được hành vi). Thuế tốt cần: đơn giản, hiệu quả (ít méo mó), công bằng, đủ nguồn thu.</li><li><strong>Số nhân tài khóa:</strong> một đồng chi tiêu công trở thành thu nhập của ai đó, một phần lại được chi tiếp. Với xu hướng tiêu dùng biên c và thuế suất t: <strong>số nhân = 1 / [1 − c(1 − t)]</strong>. Chi tiêu có tác động lớn hơn giảm thuế cùng quy mô (một phần tiền giảm thuế bị tiết kiệm); <strong>số nhân ngân sách cân bằng</strong> dương nhưng nhỏ.</li><li><strong>Cơ chế ổn định tự động vs chính sách tùy nghi:</strong> thuế lũy tiến và trợ cấp thất nghiệp tự động nới thâm hụt khi suy thoái, không cần chờ quốc hội — một lý do kinh tế ngày nay ổn định hơn thế kỷ trước. Gói tùy nghi phải qua quy trình chính trị, sinh ra các độ trễ bàn ở phần sau.</li></ul>"
    },
    {
     "h": "Deficits, debt & the limits of fiscal policy",
     "en": "<ul><li><strong>Should we worry about government debt?</strong> Arguments for concern: higher future taxes distort incentives; markets may lose confidence and demand higher yields; borrowing can <strong>crowd out</strong> private investment by raising rates. Arguments against: much debt is domestically owned (\"we owe it to ourselves\"); debt financing may fund productivity-raising capital; if <strong>Ricardian equivalence</strong> holds, households save in anticipation of future taxes and deficits change little — the evidence for full equivalence is weak. The key sustainability metric is the <em>debt-to-GDP trajectory</em>: real interest rate vs real growth.</li><li><strong>The three lags</strong> (heavily tested): <strong>recognition</strong> lag — time to realize the economy has turned; <strong>action</strong> lag — time for legislatures to pass measures; <strong>impact</strong> lag — time for spending/taxes to affect demand. Poorly timed stimulus can arrive pro-cyclically.</li><li><strong>Other limitations:</strong> forecasting error, supply-side (structural) problems that demand policy cannot fix, political incentives to overuse stimulus, and rising rates if debt is already high.</li></ul>",
     "vi": "<ul><li><strong>Có nên lo về nợ công?</strong> Lý do lo: thuế tương lai cao gây méo mó động lực; thị trường có thể mất niềm tin và đòi lợi suất cao hơn; vay nợ <strong>chèn lấn</strong> đầu tư tư nhân qua lãi suất. Lý do không quá lo: phần lớn nợ do người trong nước nắm (\"tự nợ chính mình\"); nợ có thể tài trợ vốn nâng năng suất; nếu <strong>Ricardian equivalence</strong> đúng, hộ gia đình tăng tiết kiệm để đón thuế tương lai nên tác động của thâm hụt nhỏ — bằng chứng cho equivalence đầy đủ khá yếu. Thước đo bền vững then chốt là <em>quỹ đạo nợ/GDP</em>: lãi suất thực so với tăng trưởng thực.</li><li><strong>Ba độ trễ</strong> (thi rất nhiều): <strong>nhận biết</strong> — thời gian nhận ra kinh tế đã đổi chiều; <strong>hành động</strong> — thời gian quốc hội thông qua; <strong>tác động</strong> — thời gian chính sách thấm vào tổng cầu. Kích thích sai thời điểm có thể thành thuận chu kỳ.</li><li><strong>Hạn chế khác:</strong> sai số dự báo, vấn đề cơ cấu (phía cung) mà chính sách tổng cầu không chữa được, động cơ chính trị lạm dụng kích thích, và lãi suất tăng khi nợ đã cao.</li></ul>"
    },
    {
     "h": "Multiplier math and the debt arithmetic — fully worked",
     "en": "<p><strong>The multiplier, step by step.</strong> Let MPC = 0.75 and the tax rate t = 20%. Of each extra $1 of income, households keep $0.80 after tax and spend 75% of that: 0.75 × 0.80 = <strong>$0.60 re-spent per round</strong>.</p>\n<svg viewBox=\"0 0 720 320\" style=\"width:100%;height:auto;display:block;margin:14px 0;background:#fff;border:1px solid #E5E9F2;border-radius:12px\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Fiscal multiplier spending rounds\">\n<text x=\"360\" y=\"26\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" fill=\"#1B2438\">The multiplier: one $100 of spending re-spent round after round</text>\n<line x1=\"60\" y1=\"260\" x2=\"690\" y2=\"260\" stroke=\"#5B6577\" stroke-width=\"1.5\"/>\n<rect x=\"90\" y=\"60\" width=\"70\" height=\"200\" rx=\"4\" fill=\"#5457E0\"/>\n<text x=\"125\" y=\"278\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11.5\" fill=\"#5B6577\">Round 1</text>\n<text x=\"125\" y=\"52\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#5457E0\">$100</text>\n<rect x=\"190\" y=\"140\" width=\"70\" height=\"120\" rx=\"4\" fill=\"#7B7EF0\"/>\n<text x=\"225\" y=\"278\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11.5\" fill=\"#5B6577\">Round 2</text>\n<text x=\"225\" y=\"132\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#5457E0\">$60</text>\n<rect x=\"290\" y=\"188\" width=\"70\" height=\"72\" rx=\"4\" fill=\"#9C9EF5\"/>\n<text x=\"325\" y=\"278\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11.5\" fill=\"#5B6577\">Round 3</text>\n<text x=\"325\" y=\"180\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#5457E0\">$36</text>\n<rect x=\"390\" y=\"217\" width=\"70\" height=\"43\" rx=\"4\" fill=\"#BDBEF8\"/>\n<text x=\"425\" y=\"278\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11.5\" fill=\"#5B6577\">Round 4</text>\n<text x=\"425\" y=\"209\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#5457E0\">$21.6</text>\n<rect x=\"490\" y=\"235\" width=\"70\" height=\"25\" rx=\"4\" fill=\"#D9DAFB\"/>\n<text x=\"525\" y=\"278\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11.5\" fill=\"#5B6577\">Round 5…</text>\n<text x=\"525\" y=\"227\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#5457E0\">$13</text>\n<text x=\"625\" y=\"150\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#0F9573\">Total ≈ $250</text>\n<text x=\"625\" y=\"170\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11\" fill=\"#5B6577\">= 100 × 2.5</text>\n<text x=\"360\" y=\"304\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" fill=\"#8B5CF6\" font-weight=\"600\">Each round = previous × MPC(1−t). Here 0.75 × (1−0.2) = 0.6 → multiplier = 1/(1−0.6) = 2.5</text>\n</svg>\n<p>Government spending rises by $100bn → total GDP impact = 100 + 60 + 36 + 21.6 + … = 100 × 1/(1 − 0.6) = <strong>$250bn</strong>. Three exam-favorite refinements:</p>\n<ul><li><strong>Tax-cut multiplier is smaller.</strong> A $100bn tax cut injects only MPC × (1−t) × 100 = $60bn of first-round spending (households save part of it), so its total effect is 0.6 × 250 = $150bn — always less than the same-size spending rise.</li>\n<li><strong>Balanced-budget multiplier is positive.</strong> Raise G and taxes together by $100bn: +250 (spending) − 150 (tax) = <strong>+$100bn</strong> — output rises by roughly the size of the balanced package.</li>\n<li><strong>Crowding out shrinks all of it.</strong> Deficit-financed spending raises borrowing and interest rates, which cuts private investment — the real-world multiplier is smaller than the arithmetic one, possibly below 1.</li></ul>\n<p><strong>Automatic stabilizers vs discretionary policy.</strong> Progressive taxes and unemployment benefits expand deficits in recessions and shrink them in booms <em>with no vote needed</em> — no lag. Discretionary policy suffers three lags: <strong>recognition</strong> (seeing the downturn in noisy data), <strong>action/implementation</strong> (passing and rolling out the law), <strong>impact</strong> (spending working through the multiplier). By the time all three pass, the stimulus can land in a recovery and overheat it — the core argument for stabilizers and monetary policy as first responders.</p>\n<p><strong>Debt sustainability arithmetic.</strong> The debt-to-GDP ratio rises roughly by (r − g) × Debt/GDP minus the primary surplus (surplus excluding interest). Worked: Debt/GDP = 100%, real interest rate r = 4%, real growth g = 2% → the ratio drifts up 2 points a year unless the government runs a <strong>primary surplus of 2% of GDP</strong>. If g &gt; r, a country can even stabilize debt while running modest primary deficits — why the r vs g comparison dominates sovereign-debt debates. Counterarguments to worrying about debt: much is owed internally, real burdens can be inflated or grown away, and Ricardian equivalence (households save in anticipation of future taxes, muting both the stimulus and the burden). Arguments to worry: rising rates crowd out investment, rollover risk, and the temptation to monetize.</p>",
     "vi": "<p><strong>Số nhân, từng bước.</strong> Cho MPC = 0,75 và thuế suất t = 20%. Mỗi $1 thu nhập tăng thêm, hộ gia đình giữ lại $0,80 sau thuế và chi tiêu 75% số đó: 0,75 × 0,80 = <strong>$0,60 được tái chi tiêu mỗi vòng</strong>.</p>\n<p>Chi tiêu chính phủ tăng $100 tỷ → tổng tác động GDP = 100 + 60 + 36 + 21,6 + … = 100 × 1/(1 − 0,6) = <strong>$250 tỷ</strong>. Ba biến thể đề thi hay hỏi:</p>\n<ul><li><strong>Số nhân giảm thuế nhỏ hơn.</strong> Giảm thuế $100 tỷ chỉ bơm vòng đầu MPC × (1−t) × 100 = $60 tỷ chi tiêu (hộ gia đình tiết kiệm một phần), nên tổng tác động là 0,6 × 250 = $150 tỷ — luôn nhỏ hơn tăng chi tiêu cùng quy mô.</li>\n<li><strong>Số nhân ngân sách cân bằng dương.</strong> Tăng G và thuế cùng $100 tỷ: +250 (chi tiêu) − 150 (thuế) = <strong>+$100 tỷ</strong> — sản lượng tăng xấp xỉ quy mô gói cân bằng.</li>\n<li><strong>Crowding out làm co tất cả.</strong> Chi tiêu tài trợ bằng thâm hụt đẩy vay nợ và lãi suất lên, làm giảm đầu tư tư nhân — số nhân thực tế nhỏ hơn số nhân số học, có thể dưới 1.</li></ul>\n<p><strong>Ổn định tự động vs chính sách chủ động.</strong> Thuế lũy tiến và trợ cấp thất nghiệp tự nới thâm hụt khi suy thoái, tự thu hẹp khi bùng nổ <em>mà không cần bỏ phiếu</em> — không có độ trễ. Chính sách chủ động chịu ba độ trễ: <strong>nhận biết</strong> (thấy suy thoái trong dữ liệu nhiễu), <strong>hành động/triển khai</strong> (thông qua và thực thi luật), <strong>tác động</strong> (chi tiêu lan qua số nhân). Khi cả ba trôi qua, gói kích thích có thể rơi đúng lúc kinh tế đã hồi phục và làm quá nóng — lập luận cốt lõi ủng hộ ổn định tự động và chính sách tiền tệ làm \"người phản ứng đầu tiên\".</p>\n<p><strong>Số học bền vững nợ.</strong> Tỷ lệ nợ/GDP tăng xấp xỉ (r − g) × Nợ/GDP trừ đi thặng dư sơ cấp (thặng dư chưa tính lãi). Ví dụ: Nợ/GDP = 100%, lãi suất thực r = 4%, tăng trưởng thực g = 2% → tỷ lệ trôi lên 2 điểm mỗi năm trừ khi chính phủ đạt <strong>thặng dư sơ cấp 2% GDP</strong>. Nếu g &gt; r, quốc gia thậm chí có thể ổn định nợ dù thâm hụt sơ cấp nhẹ — vì thế so sánh r với g chi phối mọi tranh luận nợ công. Lý do không quá lo về nợ: phần lớn nợ trong nước, gánh nặng thực có thể được lạm phát hoặc tăng trưởng bào mòn, và Ricardian equivalence (hộ gia đình tiết kiệm đón trước thuế tương lai, làm giảm cả kích thích lẫn gánh nặng). Lý do phải lo: lãi suất tăng chèn ép đầu tư, rủi ro đảo nợ, và cám dỗ in tiền trả nợ.</p>"
    }
   ],
   "formulas": [
    [
     "Fiscal multiplier",
     "1 / [1 − c(1 − t)]",
     "c = MPC, t = tax rate"
    ],
    [
     "Spending multiplier",
     "1 / [1 − MPC(1 − t)]",
     "MPC 0.75, t 0.2 → 1/(1−0.6) = 2.5."
    ],
    [
     "Tax multiplier",
     "−MPC(1−t) / [1 − MPC(1−t)]",
     "Smaller than the spending multiplier — first round is partly saved."
    ],
    [
     "Debt ratio dynamics",
     "Δ(Debt/GDP) ≈ (r − g) × Debt/GDP − primary balance",
     "If r > g the ratio grows without a primary surplus; g > r allows modest deficits."
    ]
   ]
  },
  {
   "title": "Monetary Policy",
   "sections": [
    {
     "h": "Money, central banks & the policy toolkit",
     "en": "<ul><li><strong>Money’s functions:</strong> medium of exchange, unit of account, store of value. Banks <em>create</em> money by lending out deposits: with a reserve requirement R, the maximum <strong>money multiplier = 1/R</strong> (new reserves of 100 with R = 10% can support up to 1,000 of deposits).</li><li><strong>The quantity theory:</strong> MV = PY. With stable velocity V and output Y set by real factors, sustained money growth ultimately drives prices — <em>money neutrality</em> in the long run, and the reason \"inflation is always and everywhere a monetary phenomenon\" in the long run.</li><li><strong>Central bank roles:</strong> sole issuer of currency, banker to government and banks, lender of last resort, supervisor of payments, holder of FX reserves, and conductor of monetary policy. Effectiveness rests on three qualities: <strong>independence</strong> (operational at minimum), <strong>credibility</strong> (expectations anchor to the target), <strong>transparency</strong> (published forecasts and reasoning).</li><li><strong>The toolkit:</strong> the <strong>policy rate</strong> (repo/refinancing/funds rate — the workhorse), <strong>reserve requirements</strong> (blunt, rarely moved in developed markets), and <strong>open market operations</strong> (buying securities injects reserves and eases; selling drains and tightens). Most developed central banks practice <strong>inflation targeting</strong>, commonly around 2%, adjusting the policy rate relative to the <strong>neutral rate</strong> ≈ trend real growth + inflation target: above neutral = contractionary, below = expansionary.</li></ul>",
     "vi": "<ul><li><strong>Chức năng của tiền:</strong> phương tiện trao đổi, đơn vị hạch toán, phương tiện cất trữ giá trị. Ngân hàng <em>tạo tiền</em> qua cho vay: với tỷ lệ dự trữ bắt buộc R, <strong>số nhân tiền tối đa = 1/R</strong> (100 dự trữ mới với R = 10% có thể tạo tới 1.000 tiền gửi).</li><li><strong>Thuyết số lượng tiền:</strong> MV = PY. Với vòng quay V ổn định và sản lượng Y do yếu tố thực quyết định, tăng trưởng tiền kéo dài rốt cuộc đẩy giá — <em>tính trung lập của tiền</em> trong dài hạn.</li><li><strong>Vai trò NHTW:</strong> độc quyền phát hành tiền, ngân hàng của chính phủ và các ngân hàng, người cho vay cuối cùng, giám sát thanh toán, quản lý dự trữ ngoại hối, điều hành chính sách tiền tệ. Hiệu quả dựa trên 3 phẩm chất: <strong>độc lập</strong> (tối thiểu là độc lập vận hành), <strong>đáng tin cậy</strong> (kỳ vọng neo vào mục tiêu), <strong>minh bạch</strong> (công bố dự báo và lập luận).</li><li><strong>Bộ công cụ:</strong> <strong>lãi suất điều hành</strong> (repo/tái cấp vốn — công cụ chủ lực), <strong>dự trữ bắt buộc</strong> (thô, ít dùng ở nước phát triển), <strong>nghiệp vụ thị trường mở</strong> (mua chứng khoán bơm dự trữ = nới lỏng; bán = hút về, thắt chặt). Hầu hết NHTW phát triển theo <strong>inflation targeting</strong>, thường quanh 2%, điều chỉnh lãi suất quanh <strong>lãi suất trung tính</strong> ≈ tăng trưởng thực xu hướng + mục tiêu lạm phát: trên trung tính = thắt chặt, dưới = nới lỏng.</li></ul>"
    },
    {
     "h": "Transmission, limitations & the fiscal–monetary mix",
     "en": "<ul><li><strong>Transmission channels</strong> — how a policy-rate change reaches inflation: (1) <em>bank lending rates</em> → consumption and investment; (2) <em>asset prices</em> (bonds, equities, housing) → wealth and collateral; (3) <em>expectations</em> about future policy and inflation; (4) the <em>exchange rate</em> → net exports and import prices. The full chain operates with long, variable lags (often 1–2 years).</li><li><strong>Limitations:</strong> at very low rates the economy can hit a <strong>liquidity trap</strong> — money demand becomes so elastic that extra liquidity is hoarded; the <strong>zero lower bound</strong> caps conventional easing, prompting <strong>quantitative easing</strong> (large-scale asset purchases). Central banks also cannot force banks to lend or fix supply-side problems. Deflation is especially hard to fight — real rates stay high even at zero nominal rates.</li><li><strong>Reading the mix</strong> (exam favorite): easy money + easy fiscal → strong nominal growth, expanding public and private sectors; tight money + tight fiscal → contraction; <strong>easy fiscal + tight money</strong> → high real interest rates and a larger government share; <strong>tight fiscal + easy money</strong> → low rates, investment-led private growth.</li></ul>",
     "vi": "<ul><li><strong>Kênh truyền dẫn</strong> — cách thay đổi lãi suất điều hành đi tới lạm phát: (1) <em>lãi suất cho vay của ngân hàng</em> → tiêu dùng và đầu tư; (2) <em>giá tài sản</em> (trái phiếu, cổ phiếu, nhà đất) → hiệu ứng của cải và tài sản thế chấp; (3) <em>kỳ vọng</em> về chính sách và lạm phát tương lai; (4) <em>tỷ giá</em> → xuất khẩu ròng và giá nhập khẩu. Cả chuỗi vận hành với độ trễ dài và biến động (thường 1–2 năm).</li><li><strong>Hạn chế:</strong> lãi suất rất thấp có thể rơi vào <strong>bẫy thanh khoản</strong> — cầu tiền co giãn đến mức thanh khoản bơm thêm bị găm giữ; <strong>cận dưới bằng 0</strong> chặn nới lỏng truyền thống, dẫn đến <strong>QE</strong> (mua tài sản quy mô lớn). NHTW cũng không thể ép ngân hàng cho vay hay sửa vấn đề phía cung. Giảm phát đặc biệt khó chống — lãi suất thực vẫn cao dù lãi suất danh nghĩa bằng 0.</li><li><strong>Đọc tổ hợp chính sách</strong> (rất hay thi): tiền tệ lỏng + tài khóa lỏng → tăng trưởng danh nghĩa mạnh, cả khu vực công lẫn tư mở rộng; cả hai chặt → thu hẹp; <strong>tài khóa lỏng + tiền tệ chặt</strong> → lãi suất thực cao, khu vực công phình to; <strong>tài khóa chặt + tiền tệ lỏng</strong> → lãi suất thấp, tăng trưởng tư nhân dẫn dắt bởi đầu tư.</li></ul>"
    },
    {
     "h": "From policy rate to inflation: money, transmission & policy stance worked",
     "en": "<p><strong>Money creation worked.</strong> With a 10% reserve requirement, a $1,000 new deposit lets the bank lend $900; that becomes someone's deposit, of which $810 is re-lent, and so on. Maximum money created = 1,000 × 1/0.10 = <strong>$10,000</strong> — the money multiplier is 1/reserve ratio. In practice banks hold excess reserves and borrowers hold cash, so the real multiplier is smaller and unstable — one reason central banks target <em>interest rates</em>, not money quantities.</p>\n<p><strong>Quantity theory worked.</strong> MV = PY. If velocity V is stable and money growth is 6% while real output grows 2%, inflation ≈ 6% − 2% = <strong>4%</strong>. This is the long-run anchor behind \"inflation is always and everywhere a monetary phenomenon\" — and behind money neutrality: in the long run money growth changes prices, not real output.</p>\n<p><strong>Fisher relation worked.</strong> Nominal rate ≈ real rate + expected inflation. A 5% nominal bond yield with 3% expected inflation offers a ~2% expected real return. Investors also demand a premium for <em>uncertainty</em> about inflation, so nominal yields = real rate + expected π + risk premium.</p>\n<svg viewBox=\"0 0 720 330\" style=\"width:100%;height:auto;display:block;margin:14px 0;background:#fff;border:1px solid #E5E9F2;border-radius:12px\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Monetary policy transmission mechanism\">\n<text x=\"360\" y=\"26\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" fill=\"#1B2438\">Monetary transmission: four channels from one policy rate</text>\n<rect x=\"285\" y=\"44\" width=\"150\" height=\"40\" rx=\"9\" fill=\"#5457E0\"/>\n<text x=\"360\" y=\"69\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#fff\">Policy rate ↓</text>\n<line x1=\"360\" y1=\"84\" x2=\"115\" y2=\"130\" stroke=\"#5B6577\" stroke-width=\"1.5\"/>\n<line x1=\"360\" y1=\"84\" x2=\"278\" y2=\"130\" stroke=\"#5B6577\" stroke-width=\"1.5\"/>\n<line x1=\"360\" y1=\"84\" x2=\"442\" y2=\"130\" stroke=\"#5B6577\" stroke-width=\"1.5\"/>\n<line x1=\"360\" y1=\"84\" x2=\"605 \" y2=\"130\" stroke=\"#5B6577\" stroke-width=\"1.5\"/>\n<rect x=\"40\" y=\"132\" width=\"150\" height=\"52\" rx=\"9\" fill=\"#EEF0FE\" stroke=\"#5457E0\"/>\n<text x=\"115\" y=\"153\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11.5\" font-weight=\"700\" fill=\"#4338CA\">Bank lending rates ↓</text>\n<text x=\"115\" y=\"170\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#5B6577\">cheaper credit</text>\n<rect x=\"203\" y=\"132\" width=\"150\" height=\"52\" rx=\"9\" fill=\"#EEF0FE\" stroke=\"#5457E0\"/>\n<text x=\"278\" y=\"153\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11.5\" font-weight=\"700\" fill=\"#4338CA\">Asset prices ↑</text>\n<text x=\"278\" y=\"170\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#5B6577\">wealth effect</text>\n<rect x=\"367\" y=\"132\" width=\"150\" height=\"52\" rx=\"9\" fill=\"#EEF0FE\" stroke=\"#5457E0\"/>\n<text x=\"442\" y=\"153\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11.5\" font-weight=\"700\" fill=\"#4338CA\">Expectations</text>\n<text x=\"442\" y=\"170\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#5B6577\">confidence, future rates</text>\n<rect x=\"530\" y=\"132\" width=\"150\" height=\"52\" rx=\"9\" fill=\"#EEF0FE\" stroke=\"#5457E0\"/>\n<text x=\"605\" y=\"153\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11.5\" font-weight=\"700\" fill=\"#4338CA\">Currency ↓</text>\n<text x=\"605\" y=\"170\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#5B6577\">exports cheaper</text>\n<line x1=\"115\" y1=\"184\" x2=\"330\" y2=\"228\" stroke=\"#5B6577\" stroke-width=\"1.5\"/>\n<line x1=\"278\" y1=\"184\" x2=\"348\" y2=\"228\" stroke=\"#5B6577\" stroke-width=\"1.5\"/>\n<line x1=\"442\" y1=\"184\" x2=\"372\" y2=\"228\" stroke=\"#5B6577\" stroke-width=\"1.5\"/>\n<line x1=\"605\" y1=\"184\" x2=\"390\" y2=\"228\" stroke=\"#5B6577\" stroke-width=\"1.5\"/>\n<rect x=\"255\" y=\"230\" width=\"210\" height=\"40\" rx=\"9\" fill=\"#0F9573\"/>\n<text x=\"360\" y=\"255\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#fff\">Aggregate demand ↑</text>\n<line x1=\"360\" y1=\"270\" x2=\"360\" y2=\"284\" stroke=\"#5B6577\" stroke-width=\"1.5\"/>\n<text x=\"360\" y=\"304\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12.5\" font-weight=\"700\" fill=\"#B45309\">→ Output ↑ and, with a lag, inflation ↑</text>\n</svg>\n<p><strong>Judging the policy stance.</strong> The neutral rate = trend real growth + inflation target. Worked: trend growth 2%, target 2% → neutral ≈ <strong>4%</strong>. Policy rate at 5% → <strong>contractionary</strong>; at 3% → expansionary. The exam loves this two-line calculation. Transmission works through the four channels above — bank rates, asset prices, expectations, and the exchange rate — hitting aggregate demand with <em>long and variable lags</em>.</p>\n<p><strong>Toolkit and limits.</strong> Tools: the policy rate (anchor of the corridor), reserve requirements, open market operations (buying securities injects reserves), plus forward guidance and QE when rates hit zero. Effective central banks share three qualities: <strong>independence</strong> (operational freedom from the treasury), <strong>credibility</strong> (announced targets shape expectations — a credible 2% target makes wage-setters build in 2%), and <strong>transparency</strong> (published forecasts and reasoning). Limits: the <strong>zero/effective lower bound</strong> and liquidity traps (cutting to zero doesn't help if banks won't lend or borrowers won't borrow — \"pushing on a string\"); bond-market vigilantes can push long rates up despite policy cuts if inflation credibility is lost. When fiscal and monetary policy pull together the effect on demand is strongest; a loose-fiscal/tight-money mix raises rates and crowds the private sector; the reverse mix lowers rates and favors it.</p>",
     "vi": "<p><strong>Tạo tiền bằng ví dụ.</strong> Với tỷ lệ dự trữ bắt buộc 10%, khoản tiền gửi mới $1.000 cho phép ngân hàng cho vay $900; số đó thành tiền gửi của người khác, $810 lại được cho vay tiếp… Lượng tiền tối đa tạo ra = 1.000 × 1/0,10 = <strong>$10.000</strong> — money multiplier = 1/tỷ lệ dự trữ. Thực tế ngân hàng giữ dự trữ dư và người vay giữ tiền mặt nên số nhân thực nhỏ hơn và bất ổn — một lý do NHTW nhắm mục tiêu <em>lãi suất</em> chứ không phải lượng tiền.</p>\n<p><strong>Thuyết số lượng tiền bằng ví dụ.</strong> MV = PY. Nếu vòng quay V ổn định, tiền tăng 6% trong khi sản lượng thực tăng 2%, lạm phát ≈ 6% − 2% = <strong>4%</strong>. Đây là mỏ neo dài hạn của câu \"lạm phát luôn luôn và ở mọi nơi là hiện tượng tiền tệ\" — và của tính trung lập của tiền: dài hạn, tăng tiền làm thay đổi giá, không thay đổi sản lượng thực.</p>\n<p><strong>Quan hệ Fisher bằng ví dụ.</strong> Lãi suất danh nghĩa ≈ lãi suất thực + lạm phát kỳ vọng. Trái phiếu lợi suất danh nghĩa 5% với lạm phát kỳ vọng 3% cho lợi suất thực kỳ vọng ~2%. Nhà đầu tư còn đòi phần bù cho <em>sự bất định</em> của lạm phát, nên lợi suất danh nghĩa = lãi thực + π kỳ vọng + phần bù rủi ro.</p>\n<p><strong>Đánh giá lập trường chính sách.</strong> Lãi suất trung tính = tăng trưởng thực xu hướng + mục tiêu lạm phát. Ví dụ: tăng trưởng 2%, mục tiêu 2% → trung tính ≈ <strong>4%</strong>. Policy rate 5% → <strong>thắt chặt</strong>; 3% → nới lỏng. Đề thi rất thích phép tính hai dòng này. Truyền dẫn qua bốn kênh trong sơ đồ — lãi suất ngân hàng, giá tài sản, kỳ vọng, tỷ giá — tác động vào tổng cầu với <em>độ trễ dài và không ổn định</em>.</p>\n<p><strong>Bộ công cụ và giới hạn.</strong> Công cụ: policy rate (neo của hành lang lãi suất), dự trữ bắt buộc, nghiệp vụ thị trường mở (mua chứng khoán bơm dự trữ), cộng thêm forward guidance và QE khi lãi suất chạm 0. NHTW hiệu quả có ba phẩm chất: <strong>độc lập</strong> (tự chủ vận hành khỏi bộ tài chính), <strong>đáng tin</strong> (mục tiêu công bố định hình kỳ vọng — mục tiêu 2% đáng tin khiến người đàm phán lương neo vào 2%), <strong>minh bạch</strong> (công bố dự báo và lập luận). Giới hạn: <strong>cận dưới bằng 0</strong> và bẫy thanh khoản (hạ về 0 vô ích nếu ngân hàng không cho vay hoặc người vay không vay — \"đẩy sợi dây\"); \"bond vigilantes\" có thể đẩy lãi suất dài hạn lên bất chấp NHTW cắt giảm nếu uy tín lạm phát đã mất. Khi tài khóa và tiền tệ cùng chiều, tác động lên tổng cầu mạnh nhất; tài khóa lỏng + tiền tệ chặt đẩy lãi suất lên và chèn ép khu vực tư; tổ hợp ngược lại hạ lãi suất và ưu ái khu vực tư.</p>"
    }
   ],
   "formulas": [
    [
     "Money multiplier",
     "1 / reserve requirement",
     ""
    ],
    [
     "Quantity theory",
     "M × V = P × Y",
     "Growth form: %ΔM + %ΔV = %ΔP + %ΔY"
    ],
    [
     "Fisher relation",
     "(1 + nominal) = (1 + real)(1 + expected inflation)",
     "Approx: nominal ≈ real + inflation"
    ],
    [
     "Neutral rate",
     "Trend real growth + inflation target",
     "Policy above neutral = contractionary"
    ],
    [
     "Velocity",
     "V = P × Y / M",
     "Rearranged quantity theory; stable V makes money growth map to nominal GDP growth."
    ],
    [
     "Policy stance",
     "policy rate vs neutral = trend real growth + π target",
     "Above neutral → contractionary; below → expansionary."
    ]
   ]
  },
  {
   "title": "Introduction to Geopolitics",
   "sections": [
    {
     "h": "Geopolitics: actors, cooperation & the tools of power",
     "en": "<ul><li><strong>What geopolitics studies:</strong> how geography, politics, and economics shape interactions among <em>state actors</em> (governments) and <em>non-state actors</em> (multinationals, NGOs, cartels). Countries balance two goals that pull in opposite directions: <strong>national security/sovereignty</strong> and the <strong>economic gains from cooperation</strong>.</li><li><strong>Classifying regimes on two axes:</strong> cooperation (does the country harmonize rules, trade, share information?) and globalization (how integrated are its markets and capital flows?). Combinations range from <em>autarky</em> (non-cooperative, closed — self-sufficiency, state control), through <em>hegemony</em> (globalized but on the dominant power’s terms), <em>bilateralism/regionalism</em>, to full <em>multilateralism</em> (open and cooperative). International organizations — IMF (currency/balance-of-payments stability and lending), World Bank (development finance), WTO (trade rules and dispute resolution) — are the infrastructure of cooperation.</li><li><strong>The tools of geopolitics:</strong> <em>national security tools</em> (armed conflict, espionage, alliances such as NATO); <em>economic tools</em> (free-trade agreements, common markets, nationalization, sanctions on goods); and <em>financial tools</em> (currency reserve status, access to capital markets and payment networks — e.g., excluding banks from international payment systems, freezing reserves). Tools can be used actively or as threats.</li></ul>",
     "vi": "<ul><li><strong>Địa chính trị nghiên cứu gì:</strong> cách địa lý, chính trị và kinh tế định hình tương tác giữa <em>chủ thể nhà nước</em> (chính phủ) và <em>phi nhà nước</em> (tập đoàn đa quốc gia, NGO, cartel). Các quốc gia phải cân bằng hai mục tiêu kéo ngược nhau: <strong>an ninh/chủ quyền quốc gia</strong> và <strong>lợi ích kinh tế từ hợp tác</strong>.</li><li><strong>Phân loại theo hai trục:</strong> mức độ hợp tác (hài hòa luật lệ, thương mại, chia sẻ thông tin?) và mức độ toàn cầu hóa (thị trường và dòng vốn hội nhập tới đâu?). Các tổ hợp trải từ <em>tự cung tự cấp (autarky)</em> — đóng cửa, nhà nước kiểm soát — qua <em>bá quyền (hegemony)</em> — toàn cầu hóa nhưng theo luật của cường quốc chi phối — <em>song phương/khu vực</em>, đến <em>đa phương</em> đầy đủ (mở và hợp tác). Các tổ chức quốc tế — IMF (ổn định tiền tệ/cán cân thanh toán và cho vay), World Bank (tài trợ phát triển), WTO (luật thương mại và giải quyết tranh chấp) — là hạ tầng của hợp tác.</li><li><strong>Công cụ địa chính trị:</strong> <em>công cụ an ninh</em> (xung đột vũ trang, tình báo, liên minh như NATO); <em>công cụ kinh tế</em> (hiệp định thương mại tự do, thị trường chung, quốc hữu hóa, trừng phạt hàng hóa); <em>công cụ tài chính</em> (vị thế đồng tiền dự trữ, quyền tiếp cận thị trường vốn và mạng thanh toán — ví dụ loại ngân hàng khỏi hệ thống thanh toán quốc tế, đóng băng dự trữ). Công cụ có thể dùng thật hoặc chỉ để đe dọa.</li></ul>"
    },
    {
     "h": "Geopolitical risk for investors",
     "en": "<ul><li><strong>Three risk types by horizon and predictability:</strong> <em>event risk</em> — tied to known calendars (elections, referendums, leadership transitions); <em>exogenous risk</em> — sudden shocks with little warning (invasions, coups, natural disasters triggering political crises); <em>thematic risk</em> — slow-burning forces that play out over years (climate change, cyber threats, migration, great-power rivalry).</li><li><strong>Assessing impact — three lenses:</strong> <em>likelihood</em>, <em>velocity</em> (how fast it hits portfolios: high-velocity shocks hit liquid risk assets first), and <em>size/scope</em> of impact (discrete sectors vs the global economy). High-likelihood/low-impact risks may deserve monitoring only; low-likelihood/high-impact risks call for hedges and scenario analysis.</li><li><strong>Portfolio responses:</strong> track early-warning signals, run scenario analysis and stress tests, diversify across regions and supply chains, and demand a higher risk premium for exposed assets. Geopolitics affects investments through volatility spikes, capital-flow reversals, sanctions cutting off markets, resource nationalism, and currency pressure — but overreacting to every headline is itself a documented investor error.</li></ul>",
     "vi": "<ul><li><strong>Ba loại rủi ro theo kỳ hạn và khả năng dự đoán:</strong> <em>rủi ro sự kiện</em> — gắn với lịch đã biết (bầu cử, trưng cầu dân ý, chuyển giao quyền lực); <em>rủi ro ngoại sinh</em> — cú sốc bất ngờ (xâm lược, đảo chính, thiên tai kích hoạt khủng hoảng chính trị); <em>rủi ro chủ đề</em> — các lực chậm rãi kéo dài nhiều năm (biến đổi khí hậu, an ninh mạng, di cư, cạnh tranh nước lớn).</li><li><strong>Đánh giá tác động — ba lăng kính:</strong> <em>xác suất</em>, <em>tốc độ</em> (đánh vào danh mục nhanh cỡ nào: cú sốc tốc độ cao đập vào tài sản rủi ro thanh khoản trước), và <em>quy mô/phạm vi</em> (vài ngành riêng lẻ hay cả kinh tế toàn cầu). Rủi ro xác suất cao/tác động thấp có thể chỉ cần theo dõi; xác suất thấp/tác động lớn đòi hỏi phòng hộ và phân tích kịch bản.</li><li><strong>Ứng xử của danh mục:</strong> theo dõi tín hiệu cảnh báo sớm, chạy phân tích kịch bản và stress test, đa dạng hóa theo khu vực và chuỗi cung ứng, đòi phần bù rủi ro cao hơn cho tài sản chịu rủi ro. Địa chính trị tác động qua biến động tăng vọt, dòng vốn đảo chiều, trừng phạt cắt đứt thị trường, chủ nghĩa dân tộc tài nguyên, áp lực tỷ giá — nhưng phản ứng thái quá với mọi tin tức cũng là lỗi đầu tư đã được ghi nhận.</li></ul>"
    },
    {
     "h": "Archetypes, tools of power & the investor's risk process",
     "en": "<svg viewBox=\"0 0 720 340\" style=\"width:100%;height:auto;display:block;margin:14px 0;background:#fff;border:1px solid #E5E9F2;border-radius:12px\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Geopolitics archetypes quadrant\">\n<text x=\"360\" y=\"26\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" fill=\"#1B2438\">Four archetypes of country behavior</text>\n<line x1=\"360\" y1=\"50\" x2=\"360\" y2=\"300\" stroke=\"#5B6577\" stroke-width=\"1.5\"/>\n<line x1=\"90\" y1=\"175\" x2=\"630\" y2=\"175\" stroke=\"#5B6577\" stroke-width=\"1.5\"/>\n<text x=\"360\" y=\"318\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11\" fill=\"#5B6577\">← Non-cooperation | Cooperation →</text>\n<text x=\"72\" y=\"176\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11\" fill=\"#5B6577\" transform=\"rotate(-90 72 176)\">← Nationalism | Globalization →</text>\n<rect x=\"120\" y=\"62\" width=\"220\" height=\"96\" rx=\"10\" fill=\"#FDECEC\" stroke=\"#DC4848\"/>\n<text x=\"230\" y=\"92\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#DC4848\">Hegemony</text>\n<text x=\"230\" y=\"112\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#1B2438\">open + globalized, but rules set</text>\n<text x=\"230\" y=\"127\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#1B2438\">unilaterally by the dominant power</text>\n<rect x=\"380\" y=\"62\" width=\"220\" height=\"96\" rx=\"10\" fill=\"#E7F6F0\" stroke=\"#0F9573\"/>\n<text x=\"490\" y=\"92\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#0F9573\">Multilateralism</text>\n<text x=\"490\" y=\"112\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#1B2438\">globalized + cooperative:</text>\n<text x=\"490\" y=\"127\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#1B2438\">shared rules, institutions (WTO, EU)</text>\n<rect x=\"120\" y=\"192\" width=\"220\" height=\"96\" rx=\"10\" fill=\"#F3E3C4\" stroke=\"#B45309\"/>\n<text x=\"230\" y=\"222\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#B45309\">Autarky</text>\n<text x=\"230\" y=\"242\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#1B2438\">self-sufficiency, national control,</text>\n<text x=\"230\" y=\"257\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#1B2438\">minimal external engagement</text>\n<rect x=\"380\" y=\"192\" width=\"220\" height=\"96\" rx=\"10\" fill=\"#EEF0FE\" stroke=\"#5457E0\"/>\n<text x=\"490\" y=\"222\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"13\" font-weight=\"700\" fill=\"#4338CA\">Bilateralism</text>\n<text x=\"490\" y=\"242\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#1B2438\">cooperates, but deal-by-deal with</text>\n<text x=\"490\" y=\"257\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#1B2438\">chosen partners (regional blocs)</text>\n</svg>\n<p><strong>Read the quadrant by its two axes.</strong> Horizontal: does the country act alone or with others (cooperation)? Vertical: does it engage with the world economy (globalization) or turn inward (nationalism)? <strong>Autarky</strong> = inward + alone (self-sufficiency, state-controlled key industries). <strong>Hegemony</strong> = globalized but rules imposed by the dominant power rather than negotiated. <strong>Bilateralism</strong> = cooperative but deal-by-deal with chosen partners. <strong>Multilateralism</strong> = globalized + rules-based institutions (WTO, EU). Real countries mix archetypes and drift between them over time — the exam asks you to classify described behavior, not name countries.</p>\n<p><strong>Tools of geopolitics</strong> come in three families: <strong>national security tools</strong> (armed conflict, alliances like NATO, espionage — actual or threatened), <strong>economic tools</strong> (free trade areas, common markets, nationalization, tariffs and quotas as levers), and <strong>financial tools</strong> (currency access and reserves, sanctions freezing assets, restricting access to payment networks like SWIFT, limiting foreign investment). Cooperation is also driven by non-state actors — multinational firms, NGOs, and cross-border supply chains raise the cost of conflict.</p>\n<p><strong>Types of geopolitical risk:</strong> <em>event risk</em> (timing known — elections, referendums), <em>exogenous risk</em> (sudden and unanticipated — invasions, coups, natural disasters), and <em>thematic risk</em> (known forces playing out over years — climate migration, cyber threats, great-power rivalry).</p>\n<table style=\"width:100%;border-collapse:collapse;font-size:13.5px;margin:10px 0\"><tr style=\"background:#EEF0FE\"><th style=\"padding:7px;border:1px solid #D6DAFB;text-align:left\">Assess</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Question</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Portfolio implication</th></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Likelihood</td><td style=\"padding:7px;border:1px solid #E5E9F2\">How probable is the event?</td><td style=\"padding:7px;border:1px solid #E5E9F2\">Weight scenarios; watch signposts</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Velocity</td><td style=\"padding:7px;border:1px solid #E5E9F2\">How fast does impact hit?</td><td style=\"padding:7px;border:1px solid #E5E9F2\">High-velocity (black-swan) risks → hedges, liquidity; slow-burn → strategic allocation shifts</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Size & nature</td><td style=\"padding:7px;border:1px solid #E5E9F2\">How large, on which assets?</td><td style=\"padding:7px;border:1px solid #E5E9F2\">Discrete/company-level vs broad/market-level responses</td></tr></table>\n<p><strong>Process over prediction.</strong> No one forecasts coups reliably; the tested skill is building <em>scenarios</em>, defining <em>signposts</em> (observable triggers that a scenario is unfolding), and matching the response to velocity and size — from doing nothing (low likelihood, low impact) to hedging tail risk with options, gold, or safe-haven currencies (high impact, fast velocity).</p>",
     "vi": "<p><strong>Đọc ma trận theo hai trục.</strong> Trục ngang: quốc gia hành động một mình hay cùng nước khác (hợp tác)? Trục dọc: hội nhập kinh tế thế giới (toàn cầu hóa) hay hướng nội (chủ nghĩa dân tộc)? <strong>Autarky</strong> = hướng nội + đơn độc (tự cung tự cấp, nhà nước kiểm soát ngành then chốt). <strong>Hegemony</strong> = toàn cầu hóa nhưng luật chơi do cường quốc thống trị áp đặt thay vì đàm phán. <strong>Bilateralism</strong> = hợp tác nhưng theo từng thỏa thuận với đối tác chọn lọc. <strong>Multilateralism</strong> = toàn cầu hóa + thể chế dựa trên luật lệ (WTO, EU). Quốc gia thực tế pha trộn và dịch chuyển giữa các archetype theo thời gian — đề thi yêu cầu phân loại hành vi được mô tả, không phải gọi tên quốc gia.</p>\n<p><strong>Công cụ địa chính trị</strong> gồm ba nhóm: <strong>công cụ an ninh quốc gia</strong> (xung đột vũ trang, liên minh như NATO, tình báo — thực tế hoặc đe dọa), <strong>công cụ kinh tế</strong> (khu vực thương mại tự do, thị trường chung, quốc hữu hóa, thuế quan và hạn ngạch làm đòn bẩy), và <strong>công cụ tài chính</strong> (tiếp cận tiền tệ và dự trữ, trừng phạt đóng băng tài sản, chặn tiếp cận mạng thanh toán như SWIFT, hạn chế đầu tư nước ngoài). Hợp tác còn được thúc đẩy bởi chủ thể phi nhà nước — công ty đa quốc gia, NGO, chuỗi cung ứng xuyên biên giới làm tăng cái giá của xung đột.</p>\n<p><strong>Ba loại rủi ro địa chính trị:</strong> <em>event risk</em> (thời điểm biết trước — bầu cử, trưng cầu dân ý), <em>exogenous risk</em> (đột ngột, không lường trước — xâm lược, đảo chính, thiên tai), và <em>thematic risk</em> (lực đã biết diễn ra qua nhiều năm — di cư khí hậu, an ninh mạng, cạnh tranh nước lớn).</p>\n<p>Bảng đánh giá: <strong>Likelihood</strong> (xác suất xảy ra → gán trọng số kịch bản, theo dõi signposts), <strong>Velocity</strong> (tốc độ tác động — rủi ro tốc độ cao kiểu \"thiên nga đen\" → phòng hộ, thanh khoản; rủi ro cháy chậm → điều chỉnh phân bổ chiến lược), <strong>Size & nature</strong> (quy mô và loại tài sản chịu ảnh hưởng → phản ứng cấp công ty hay cấp toàn thị trường).</p>\n<p><strong>Quy trình quan trọng hơn dự đoán.</strong> Không ai dự báo đảo chính một cách đáng tin; kỹ năng được kiểm tra là xây <em>kịch bản</em>, xác định <em>signposts</em> (tín hiệu quan sát được cho thấy kịch bản đang diễn ra), và khớp phản ứng với velocity và quy mô — từ không làm gì (xác suất thấp, tác động thấp) đến phòng hộ rủi ro đuôi bằng quyền chọn, vàng, hay đồng tiền trú ẩn (tác động lớn, tốc độ nhanh).</p>"
    }
   ]
  },
  {
   "title": "International Trade",
   "sections": [
    {
     "h": "Why nations trade: absolute vs comparative advantage",
     "en": "<p><strong>Absolute advantage</strong> = producing a good with fewer resources. <strong>Comparative advantage</strong> = producing it at a lower <em>opportunity cost</em> — and this, not absolute advantage, is what makes trade mutually beneficial. Even a country that is worse at producing <em>everything</em> gains by specializing where its opportunity-cost disadvantage is smallest.</p><p><em>Worked example:</em> Country A can make 10 cars <em>or</em> 20 computers; Country B can make 4 cars <em>or</em> 16 computers. A’s opportunity cost of a car = 2 computers; B’s = 4 computers. A has comparative advantage in cars, B in computers (¼ car vs ½ car per computer). Both gain by A exporting cars and B exporting computers at any exchange ratio between 2 and 4 computers per car.</p><p><strong>Gains and losses:</strong> trade raises total output and lowers consumer prices, but the gains are unevenly distributed — import-competing industries and their workers lose, which is why trade policy is politically contested. Benefits of trade: specialization, economies of scale, more variety, technology transfer, competitive discipline on domestic monopolies. Costs cited: adjustment/unemployment in displaced sectors and greater interdependence.</p>",
     "vi": "<p><strong>Lợi thế tuyệt đối</strong> = sản xuất một mặt hàng với ít nguồn lực hơn. <strong>Lợi thế so sánh</strong> = sản xuất với <em>chi phí cơ hội</em> thấp hơn — và chính điều này (không phải lợi thế tuyệt đối) khiến thương mại có lợi cho cả hai bên. Ngay cả nước kém hơn ở <em>mọi</em> mặt hàng vẫn hưởng lợi khi chuyên môn hóa vào nơi bất lợi chi phí cơ hội nhỏ nhất.</p><p><em>Ví dụ:</em> Nước A làm được 10 ô tô <em>hoặc</em> 20 máy tính; nước B làm 4 ô tô <em>hoặc</em> 16 máy tính. Chi phí cơ hội 1 ô tô của A = 2 máy tính; của B = 4 máy tính. A có lợi thế so sánh về ô tô, B về máy tính. Cả hai cùng lợi khi A xuất ô tô, B xuất máy tính với tỷ lệ trao đổi bất kỳ giữa 2 và 4 máy tính/ô tô.</p><p><strong>Được và mất:</strong> thương mại nâng tổng sản lượng và hạ giá tiêu dùng, nhưng lợi ích phân bổ không đều — ngành cạnh tranh với hàng nhập và người lao động trong đó chịu thiệt, nên chính sách thương mại luôn gây tranh cãi chính trị. Lợi ích: chuyên môn hóa, lợi thế quy mô, đa dạng hàng hóa, chuyển giao công nghệ, kỷ luật cạnh tranh với độc quyền nội địa. Chi phí: thất nghiệp/điều chỉnh ở ngành bị thay thế và sự phụ thuộc lẫn nhau tăng.</p>"
    },
    {
     "h": "Trade restrictions & trading blocs",
     "en": "<ul><li><strong>Tariff</strong> (tax on imports): domestic price rises → domestic producers gain (produce more), consumers lose (pay more, buy less), the <em>government collects revenue</em>, and a deadweight loss remains. <strong>Quota</strong> (quantity limit): similar price and welfare effects, but instead of tariff revenue, <em>quota rents</em> accrue to whoever holds the import licenses — often foreign exporters, making quotas worse for the importing country. <strong>Export subsidy</strong>: benefits domestic exporters at taxpayers’ expense and distorts trade. <strong>VER</strong> (voluntary export restraint): a quota administered by the exporting country. In the small-country case, all these reduce national welfare; only a <em>large</em> country can theoretically gain from a tariff via better terms of trade (before retaliation).</li><li><strong>Capital restrictions</strong> limit cross-border investment flows — sometimes defensible against hot-money surges, but they raise capital costs long-run.</li><li><strong>Trading blocs by depth of integration:</strong> <em>Free trade area</em> (no internal tariffs; members keep own external policy — needs rules of origin) → <em>customs union</em> (adds a common external tariff) → <em>common market</em> (adds free movement of labor and capital) → <em>economic union</em> (adds common institutions and policy) → <em>monetary union</em> (adds a single currency, e.g., the euro area). Deeper integration brings larger gains — and larger loss of policy autonomy.</li></ul>",
     "vi": "<ul><li><strong>Thuế quan</strong> (thuế hàng nhập): giá nội địa tăng → nhà sản xuất trong nước lợi (sản xuất nhiều hơn), người tiêu dùng thiệt (mua đắt, mua ít), <em>chính phủ thu được thuế</em>, và vẫn còn tổn thất vô ích. <strong>Hạn ngạch (quota)</strong>: tác động giá và phúc lợi tương tự, nhưng thay vì thuế thu về ngân sách, <em>đặc lợi quota</em> rơi vào tay người giữ giấy phép nhập khẩu — thường là nhà xuất khẩu nước ngoài, khiến quota tệ hơn cho nước nhập khẩu. <strong>Trợ cấp xuất khẩu</strong>: lợi cho nhà xuất khẩu nội địa bằng tiền thuế dân và bóp méo thương mại. <strong>VER</strong>: hạn ngạch do chính nước xuất khẩu quản lý. Với nước nhỏ, tất cả đều làm giảm phúc lợi quốc gia; chỉ nước <em>lớn</em> mới có thể lợi từ thuế quan nhờ cải thiện tỷ lệ trao đổi (trước khi bị trả đũa).</li><li><strong>Hạn chế dòng vốn</strong> giới hạn đầu tư xuyên biên giới — đôi khi hợp lý để chặn dòng tiền nóng, nhưng dài hạn làm tăng chi phí vốn.</li><li><strong>Khối thương mại theo độ sâu hội nhập:</strong> <em>khu vực mậu dịch tự do</em> (bỏ thuế nội khối; giữ chính sách đối ngoại riêng — cần quy tắc xuất xứ) → <em>liên minh thuế quan</em> (thêm thuế đối ngoại chung) → <em>thị trường chung</em> (thêm tự do di chuyển lao động, vốn) → <em>liên minh kinh tế</em> (thêm thể chế và chính sách chung) → <em>liên minh tiền tệ</em> (thêm đồng tiền chung, như khu vực euro). Hội nhập càng sâu, lợi ích càng lớn — và mất tự chủ chính sách càng nhiều.</li></ul>"
    },
    {
     "h": "Comparative advantage end-to-end — and who really pays for a tariff",
     "en": "<p><strong>Set up the numbers first.</strong> Output per worker per day:</p>\n<table style=\"width:100%;border-collapse:collapse;font-size:13.5px;margin:10px 0\"><tr style=\"background:#EEF0FE\"><th style=\"padding:7px;border:1px solid #D6DAFB;text-align:left\">Country</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Cars</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Wheat (tons)</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Opp. cost of 1 car</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Opp. cost of 1 ton wheat</th></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">A</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">6</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">12</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">2 wheat</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">0.5 car</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">B</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">2</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">8</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">4 wheat</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">0.25 car</td></tr></table>\n<p>Country A has <strong>absolute advantage in both goods</strong> (6 &gt; 2 and 12 &gt; 8) — and yet trade still pays. Compare opportunity costs: a car costs A only 2 wheat but costs B 4 wheat → <strong>A has comparative advantage in cars</strong>. A ton of wheat costs B 0.25 car vs A's 0.5 car → <strong>B has comparative advantage in wheat</strong>. Each exports the good it makes at lower opportunity cost. Mutually beneficial terms of trade must sit <em>between</em> the two opportunity costs: between 2 and 4 tons of wheat per car. At, say, 3 wheat per car, A \"buys\" wheat at 1/3 car per ton (cheaper than making it at 1/2) and B \"buys\" cars at 3 wheat (cheaper than its own 4). Both consume beyond their own production frontier — that is the gain from trade. Sources of comparative advantage: technology differences (Ricardo) or factor endowments (Heckscher–Ohlin: capital-abundant countries export capital-intensive goods; trade then shifts income toward each country's abundant factor).</p>\n<p><strong>Tariff accounting — know each group's sign.</strong> A tariff on imports raises the domestic price. Domestic producers gain (higher price, more output), the government collects revenue, and consumers lose <em>more than the other two gain</em> — the difference is deadweight loss from inefficient extra domestic production and lost consumption. For a small country (no influence on world price), a tariff is always a net national loss.</p>\n<table style=\"width:100%;border-collapse:collapse;font-size:13.5px;margin:10px 0\"><tr style=\"background:#EEF0FE\"><th style=\"padding:7px;border:1px solid #D6DAFB;text-align:left\">Instrument</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Domestic producers</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Consumers</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Government</th><th style=\"padding:7px;border:1px solid #D6DAFB\">Notes</th></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Tariff</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">gain</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">lose</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">revenue</td><td style=\"padding:7px;border:1px solid #E5E9F2\">net DWL (small country)</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Quota</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">gain</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">lose</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">none*</td><td style=\"padding:7px;border:1px solid #E5E9F2\">*quota rents go to license holders — often foreign exporters</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">Export subsidy</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">gain</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">lose (price up)</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">pays out</td><td style=\"padding:7px;border:1px solid #E5E9F2\">distorts toward export good</td></tr>\n<tr><td style=\"padding:7px;border:1px solid #E5E9F2\">VER</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">gain</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">lose</td><td style=\"padding:7px;border:1px solid #E5E9F2;text-align:right\">none</td><td style=\"padding:7px;border:1px solid #E5E9F2\">like a quota, rents to the foreign exporter</td></tr></table>\n<p><strong>Trading blocs ladder</strong> (each level adds one commitment): <strong>Free trade area</strong> (no internal tariffs; members keep own external tariffs) → <strong>Customs union</strong> (+ common external tariff) → <strong>Common market</strong> (+ free movement of labor and capital) → <strong>Economic union</strong> (+ common institutions & policy coordination) → <strong>Monetary union</strong> (+ single currency, e.g. the euro area). Blocs create <strong>trade creation</strong> (shifting purchases to a lower-cost member) but also <strong>trade diversion</strong> (shifting from a cheaper non-member to a pricier member because of the tariff wall) — a bloc is only clearly beneficial when creation outweighs diversion.</p>",
     "vi": "<p><strong>Dựng bảng số trước.</strong> Sản lượng mỗi lao động mỗi ngày: nước A làm được 6 ô tô hoặc 12 tấn lúa mì; nước B làm được 2 ô tô hoặc 8 tấn lúa mì. Chi phí cơ hội: 1 ô tô của A = 2 lúa mì, của B = 4 lúa mì; 1 tấn lúa mì của A = 0,5 ô tô, của B = 0,25 ô tô.</p>\n<p>Nước A có <strong>lợi thế tuyệt đối ở cả hai mặt hàng</strong> (6 &gt; 2 và 12 &gt; 8) — vậy mà thương mại vẫn có lợi. So chi phí cơ hội: ô tô của A rẻ hơn (2 &lt; 4 lúa mì) → <strong>A có lợi thế so sánh về ô tô</strong>; lúa mì của B rẻ hơn (0,25 &lt; 0,5 ô tô) → <strong>B có lợi thế so sánh về lúa mì</strong>. Mỗi nước xuất khẩu mặt hàng có chi phí cơ hội thấp hơn. Tỷ lệ trao đổi cùng có lợi phải nằm <em>giữa</em> hai chi phí cơ hội: từ 2 đến 4 tấn lúa mì đổi 1 ô tô. Ví dụ ở mức 3: A \"mua\" lúa mì với giá 1/3 ô tô/tấn (rẻ hơn tự làm 1/2), B \"mua\" ô tô với giá 3 lúa mì (rẻ hơn tự làm 4). Cả hai tiêu dùng vượt đường giới hạn sản xuất của mình — đó chính là lợi ích thương mại. Nguồn gốc lợi thế so sánh: khác biệt công nghệ (Ricardo) hoặc mức độ dồi dào yếu tố sản xuất (Heckscher–Ohlin: nước giàu vốn xuất khẩu hàng thâm dụng vốn; thương mại dịch chuyển thu nhập về phía yếu tố dồi dào của mỗi nước).</p>\n<p><strong>Hạch toán thuế quan — nhớ dấu của từng nhóm.</strong> Thuế nhập khẩu đẩy giá nội địa lên. Nhà sản xuất trong nước được lợi (giá cao hơn, sản lượng nhiều hơn), chính phủ thu ngân sách, còn người tiêu dùng mất <em>nhiều hơn tổng hai khoản kia</em> — phần chênh là deadweight loss do sản xuất nội địa kém hiệu quả tăng thêm và tiêu dùng bị mất. Với nước nhỏ (không ảnh hưởng giá thế giới), thuế quan luôn là khoản lỗ ròng quốc gia. Quota tương tự nhưng chính phủ không thu được gì — quota rents rơi vào tay người giữ giấy phép, thường là nhà xuất khẩu nước ngoài; VER giống quota; trợ cấp xuất khẩu làm người tiêu dùng nội địa chịu giá cao hơn còn ngân sách phải chi ra.</p>\n<p><strong>Thang khối thương mại</strong> (mỗi bậc thêm một cam kết): <strong>Free trade area</strong> (bỏ thuế nội khối; giữ thuế ngoại khối riêng) → <strong>Customs union</strong> (+ thuế ngoại khối chung) → <strong>Common market</strong> (+ tự do di chuyển lao động và vốn) → <strong>Economic union</strong> (+ thể chế chung & phối hợp chính sách) → <strong>Monetary union</strong> (+ đồng tiền chung, ví dụ khu vực euro). Khối tạo ra <strong>trade creation</strong> (chuyển mua sang thành viên chi phí thấp hơn) nhưng cũng gây <strong>trade diversion</strong> (chuyển từ nước ngoài khối rẻ hơn sang thành viên đắt hơn vì bức tường thuế) — khối chỉ thực sự có lợi khi creation lớn hơn diversion.</p>"
    }
   ],
   "formulas": [
    [
     "Opportunity cost (per unit)",
     "opp. cost of good X = output of Y given up / output of X",
     "Compare across countries: lower opp. cost = comparative advantage."
    ],
    [
     "Terms of trade range",
     "between the two countries' opportunity costs",
     "Trade at any ratio strictly inside the range benefits both."
    ]
   ]
  },
  {
   "title": "Capital Flows and the FX Market",
   "sections": [
    {
     "h": "The balance of payments & what drives capital flows",
     "en": "<ul><li><strong>Accounting that must balance:</strong> the <strong>current account</strong> (goods and services trade, primary income, transfers) plus the <strong>capital account</strong> and the <strong>financial account</strong> (cross-border purchases of real and financial assets, reserve changes) sum to zero. A current account <em>deficit</em> is necessarily financed by net capital <em>inflows</em> — foreigners accumulating claims on the country.</li><li><strong>The saving–investment lens:</strong> from national accounts, CA = private saving + government saving − domestic investment. A country that invests more than it saves (or runs large fiscal deficits without private saving to match — the \"twin deficits\" link) runs a current account deficit. This is why current accounts are ultimately macro phenomena, not just trade-policy outcomes.</li><li><strong>Why flows matter for markets:</strong> sustained inflows compress yields and support the currency; sudden stops and outflow reversals do the opposite — the classic emerging-market crisis dynamic. FX market participants: the sell side (dealing banks) and the buy side — corporations hedging, real-money and leveraged investors, governments and sovereign wealth funds, central banks, and retail. Central banks intervene in FX markets to manage regimes or smooth volatility.</li></ul>",
     "vi": "<ul><li><strong>Hạch toán bắt buộc cân bằng:</strong> <strong>cán cân vãng lai</strong> (thương mại hàng hóa – dịch vụ, thu nhập sơ cấp, chuyển giao) cộng <strong>tài khoản vốn</strong> và <strong>tài khoản tài chính</strong> (mua bán tài sản thực/tài chính xuyên biên giới, thay đổi dự trữ) bằng 0. <em>Thâm hụt</em> vãng lai tất yếu được tài trợ bởi dòng vốn <em>vào ròng</em> — người nước ngoài tích lũy quyền đòi nợ đối với quốc gia đó.</li><li><strong>Lăng kính tiết kiệm–đầu tư:</strong> từ hạch toán quốc gia, CA = tiết kiệm tư nhân + tiết kiệm chính phủ − đầu tư trong nước. Nước đầu tư nhiều hơn tiết kiệm (hoặc thâm hụt ngân sách lớn mà tiết kiệm tư nhân không bù nổi — liên hệ \"thâm hụt kép\") sẽ thâm hụt vãng lai. Vì vậy cán cân vãng lai về bản chất là hiện tượng vĩ mô, không chỉ là kết quả chính sách thương mại.</li><li><strong>Vì sao dòng vốn quan trọng với thị trường:</strong> dòng vào bền vững nén lợi suất và đỡ giá nội tệ; dừng đột ngột và đảo chiều dòng vốn gây tác động ngược — kịch bản khủng hoảng thị trường mới nổi kinh điển. Thành phần thị trường FX: bên bán (ngân hàng tạo lập) và bên mua — doanh nghiệp phòng hộ, quỹ đầu tư truyền thống và đòn bẩy, chính phủ và quỹ đầu tư quốc gia, NHTW, nhà đầu tư cá nhân. NHTW can thiệp để quản lý chế độ tỷ giá hoặc làm mượt biến động.</li></ul>"
    },
    {
     "h": "The FX market: participants, currency regimes & capital controls",
     "en": "<ul><li><strong>Who trades FX</strong> — the largest market in the world, over-the-counter and around the clock. <em>Sell side</em>: the large dealing banks quoting two-way prices. <em>Buy side</em>: corporations (hedging trade receipts and payments), real-money asset managers (hedging portfolio currency exposure), leveraged accounts — hedge funds and CTAs — trading for profit, retail, and <em>governments and central banks</em> (reserves management, intervention). A useful split: <em>hedgers</em> transact to reduce existing exposure; <em>speculators</em> take on exposure for expected return.</li><li><strong>The regime spectrum</strong>, from hardest to freest: <em>formal dollarization</em> (no own currency — no monetary policy at all); <strong>currency board</strong> (domestic currency fully backed by and convertible into the anchor at a fixed rate — money supply moves with reserves); <em>conventional fixed peg</em> (rate held in a narrow band against an anchor, defended with reserves and rates); <em>stabilized/crawling arrangements</em> (peg adjusted gradually, e.g., for inflation differentials); <em>managed float</em> (no announced target; intervention smooths volatility); <strong>free float</strong> (market-determined — full monetary independence). The harder the fix, the more monetary policy is surrendered to the anchor country — the policy trilemma: a country cannot simultaneously have a fixed exchange rate, open capital flows, and independent monetary policy.</li><li><strong>Capital restrictions</strong> — taxes, quotas, or outright bans on cross-border flows — aim to manage exchange rates, keep hot money from destabilizing small markets, preserve monetary autonomy, and direct domestic savings; the cost is a higher cost of capital and reduced access to global funding. Objectives and effectiveness both fade as markets find ways around them.</li></ul>",
     "vi": "<ul><li><strong>Ai giao dịch FX</strong> — thị trường lớn nhất thế giới, OTC và liên tục 24 giờ. <em>Bên bán</em>: các ngân hàng dealer lớn yết giá hai chiều. <em>Bên mua</em>: doanh nghiệp (phòng hộ dòng tiền xuất nhập khẩu), quỹ real-money (phòng hộ rủi ro tiền tệ của danh mục), tài khoản đòn bẩy — hedge fund và CTA — giao dịch kiếm lời, nhà đầu tư cá nhân, và <em>chính phủ, ngân hàng trung ương</em> (quản lý dự trữ, can thiệp). Cách chia hữu ích: <em>hedger</em> giao dịch để giảm phơi nhiễm sẵn có; <em>speculator</em> nhận phơi nhiễm để đổi lấy lợi nhuận kỳ vọng.</li><li><strong>Phổ chế độ tỷ giá</strong>, từ cứng nhất đến tự do nhất: <em>đô-la hóa chính thức</em> (không có đồng tiền riêng — mất hoàn toàn chính sách tiền tệ); <strong>currency board</strong> (nội tệ được bảo chứng đầy đủ và chuyển đổi theo tỷ giá cố định với đồng neo — cung tiền chạy theo dự trữ); <em>neo cố định thông thường</em> (giữ tỷ giá trong biên hẹp, bảo vệ bằng dự trữ và lãi suất); <em>neo trườn/ổn định hóa</em> (điều chỉnh dần, ví dụ theo chênh lệch lạm phát); <em>thả nổi có quản lý</em> (không công bố mục tiêu; can thiệp làm mượt biến động); <strong>thả nổi tự do</strong> (thị trường quyết định — độc lập tiền tệ đầy đủ). Neo càng cứng, chính sách tiền tệ càng bị \"nộp\" cho nước neo — bộ ba bất khả thi: không thể cùng lúc có tỷ giá cố định, dòng vốn tự do và chính sách tiền tệ độc lập.</li><li><strong>Kiểm soát vốn</strong> — thuế, hạn ngạch hoặc cấm hẳn dòng vốn xuyên biên giới — nhằm quản lý tỷ giá, ngăn \"tiền nóng\" gây bất ổn cho thị trường nhỏ, bảo toàn tự chủ tiền tệ và điều hướng tiết kiệm trong nước; cái giá là chi phí vốn cao hơn và giảm khả năng tiếp cận vốn toàn cầu. Cả mục tiêu lẫn hiệu lực đều phai dần khi thị trường tìm được đường vòng.</li></ul>"
    },
    {
     "h": "BOP arithmetic, the impossible trinity & the regime spectrum",
     "en": "<p><strong>The balance of payments always balances.</strong> Current account (goods, services, income, transfers) + capital account + financial account = 0. A country running a current account deficit of $500bn must attract a matching <strong>$500bn net financial inflow</strong> — foreigners buying its bonds, stocks, firms, or property. A CA deficit is therefore the same statement as \"the country invests more than it saves.\"</p>\n<p><strong>S − I worked.</strong> National saving is 17% of GDP, domestic investment 20% → CA = S − I = <strong>−3% of GDP</strong>. Split saving into private and government: (Sp − I) + (T − G) = CA. If the fiscal deficit (G − T) widens while private saving and investment are unchanged, the CA deficit widens one-for-one — the <strong>twin deficits</strong> link. Interpretation matters: a deficit financed by FDI funding productive investment is far healthier than one financed by short-term \"hot money\" funding consumption — the latter reverses fast in crises (sudden stops).</p>\n<svg viewBox=\"0 0 720 340\" style=\"width:100%;height:auto;display:block;margin:14px 0;background:#fff;border:1px solid #E5E9F2;border-radius:12px\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Impossible trinity of exchange rate policy\">\n<text x=\"360\" y=\"26\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" fill=\"#1B2438\">The impossible trinity — pick any two, never all three</text>\n<polygon points=\"360,60 150,270 570,270\" fill=\"#F7F8FD\" stroke=\"#5457E0\" stroke-width=\"2\"/>\n<rect x=\"272\" y=\"40\" width=\"176\" height=\"34\" rx=\"8\" fill=\"#5457E0\"/>\n<text x=\"360\" y=\"62\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#fff\">Fixed exchange rate</text>\n<rect x=\"62\" y=\"262\" width=\"180\" height=\"34\" rx=\"8\" fill=\"#0F9573\"/>\n<text x=\"152\" y=\"284\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" font-weight=\"700\" fill=\"#fff\">Free capital flows</text>\n<rect x=\"478\" y=\"262\" width=\"196\" height=\"34\" rx=\"8\" fill=\"#B45309\"/>\n<text x=\"576\" y=\"284\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"11.5\" font-weight=\"700\" fill=\"#fff\">Independent monetary policy</text>\n<text x=\"228\" y=\"158\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#1B2438\">Hard peg / currency board</text>\n<text x=\"228\" y=\"172\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10\" fill=\"#5B6577\">(Hong Kong — gives up own policy)</text>\n<text x=\"497\" y=\"158\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#1B2438\">Capital controls + peg</text>\n<text x=\"497\" y=\"172\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10\" fill=\"#5B6577\">(China, historically — restricts flows)</text>\n<text x=\"360\" y=\"248\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10.5\" fill=\"#1B2438\">Free float</text>\n<text x=\"360\" y=\"262\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"10\" fill=\"#5B6577\">(US, Japan — FX rate is not fixed)</text>\n<text x=\"360\" y=\"322\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" fill=\"#8B5CF6\" font-weight=\"600\">Each side of the triangle = a feasible pair; the opposite corner is what you give up.</text>\n</svg>\n<p><strong>The impossible trinity organizes every FX regime question.</strong> A country can have at most two of: a fixed exchange rate, free capital mobility, and independent monetary policy. Hong Kong's currency board keeps the peg and open capital markets — so its interest rates must follow the US. China (historically) kept the peg and monetary independence — by restricting capital flows. The US and Japan float — keeping policy independence and open markets while giving up a fixed rate.</p>\n<p><strong>The regime spectrum</strong>, from hardest to loosest commitment: formal <strong>dollarization</strong> (no domestic currency, zero monetary autonomy) → <strong>monetary union</strong> (euro) → <strong>currency board</strong> (domestic currency fully backed by reserves) → <strong>conventional fixed peg</strong> (± narrow band, defended by intervention) → <strong>crawling peg / crawl-like</strong> (peg adjusted gradually, e.g. for inflation differentials) → <strong>managed float</strong> (intervention without a preannounced path) → <strong>independent float</strong>. Moving right gains monetary autonomy and shock absorption but loses the anchor against inflation and FX volatility. <strong>Capital restrictions</strong> (taxes or quantity limits on flows) can defend a peg, preserve policy autonomy, and slow hot-money surges — at the cost of higher capital costs, distorted allocation, and evasion over time.</p>",
     "vi": "<p><strong>Cán cân thanh toán luôn cân bằng.</strong> Tài khoản vãng lai (hàng hóa, dịch vụ, thu nhập, chuyển giao) + tài khoản vốn + tài khoản tài chính = 0. Quốc gia thâm hụt vãng lai $500 tỷ phải hút được <strong>dòng tài chính ròng $500 tỷ</strong> tương ứng — người nước ngoài mua trái phiếu, cổ phiếu, doanh nghiệp hoặc bất động sản của họ. Thâm hụt CA vì thế đồng nghĩa với câu \"quốc gia đầu tư nhiều hơn tiết kiệm\".</p>\n<p><strong>S − I bằng ví dụ.</strong> Tiết kiệm quốc gia 17% GDP, đầu tư nội địa 20% → CA = S − I = <strong>−3% GDP</strong>. Tách tiết kiệm thành tư nhân và chính phủ: (Sp − I) + (T − G) = CA. Nếu thâm hụt ngân sách (G − T) nới rộng trong khi tiết kiệm tư nhân và đầu tư không đổi, thâm hụt CA nới rộng tương ứng một-một — mối liên hệ <strong>thâm hụt kép</strong>. Cách tài trợ quyết định mức độ lành mạnh: thâm hụt được tài trợ bằng FDI cho đầu tư sản xuất lành mạnh hơn nhiều so với \"tiền nóng\" ngắn hạn tài trợ tiêu dùng — loại sau đảo chiều rất nhanh khi khủng hoảng (sudden stop).</p>\n<p><strong>Bộ ba bất khả thi sắp xếp mọi câu hỏi về chế độ tỷ giá.</strong> Một quốc gia chỉ có thể chọn tối đa hai trong ba: tỷ giá cố định, tự do lưu chuyển vốn, và chính sách tiền tệ độc lập. Hong Kong với currency board giữ peg và thị trường vốn mở — nên lãi suất phải đi theo Mỹ. Trung Quốc (trong lịch sử) giữ peg và độc lập tiền tệ — bằng cách hạn chế dòng vốn. Mỹ và Nhật thả nổi — giữ độc lập chính sách và thị trường mở, đổi lại từ bỏ tỷ giá cố định.</p>\n<p><strong>Phổ chế độ tỷ giá</strong>, từ cam kết cứng nhất đến lỏng nhất: <strong>dollarization</strong> chính thức (không có nội tệ, không còn tự chủ tiền tệ) → <strong>liên minh tiền tệ</strong> (euro) → <strong>currency board</strong> (nội tệ được bảo chứng đầy đủ bằng dự trữ) → <strong>peg cố định thông thường</strong> (± biên độ hẹp, bảo vệ bằng can thiệp) → <strong>crawling peg</strong> (peg điều chỉnh dần, ví dụ theo chênh lệch lạm phát) → <strong>managed float</strong> (can thiệp không theo lộ trình công bố) → <strong>thả nổi độc lập</strong>. Dịch sang phải: được thêm tự chủ tiền tệ và khả năng hấp thụ cú sốc, nhưng mất neo chống lạm phát và chịu biến động tỷ giá. <strong>Hạn chế vốn</strong> (thuế hoặc trần định lượng lên dòng vốn) có thể bảo vệ peg, giữ tự chủ chính sách, hãm dòng tiền nóng — đổi lại chi phí vốn cao hơn, phân bổ méo mó và bị lách luật theo thời gian.</p>"
    }
   ],
   "formulas": [
    [
     "BOP identity",
     "Current account + capital & financial accounts = 0",
     "CA deficit ⇔ net capital inflows"
    ],
    [
     "Saving–investment",
     "CA = S_private + S_government − I",
     "Invest > save ⇒ CA deficit"
    ],
    [
     "BOP identity (full)",
     "CA + capital account + financial account = 0",
     "A CA deficit is financed by net financial inflows."
    ],
    [
     "Twin deficits",
     "CA = (Sp − I) + (T − G)",
     "Wider fiscal deficit → wider CA deficit, other things equal."
    ]
   ]
  },
  {
   "title": "Exchange Rate Calculations",
   "sections": [
    {
     "h": "Quotes, real rates, and forward rates",
     "en": "<p>An exchange rate is stated as <strong>price currency / base currency</strong>: USD/EUR = 1.10 means 1 euro costs 1.10 dollars. If USD/EUR rises, the euro (base) <em>appreciates</em>. The <strong>real exchange rate</strong> adjusts the nominal rate for relative price levels and measures relative purchasing power. Cross rates chain two quotes together.</p><p><strong>Forward rates</strong> are set by covered interest rate parity — arbitrage, not forecasts: F/S = (1 + i<sub>price</sub>) / (1 + i<sub>base</sub>). The currency with the <em>higher</em> interest rate trades at a <strong>forward discount</strong>. Points: forward premium/discount quoted as (F − S), often in pips.</p><p>Regimes range from free float and managed float to pegs, currency boards, and dollarization. Capital restrictions and fixed regimes trade policy autonomy for stability (the \"impossible trinity\": free capital flow, fixed exchange rate, independent monetary policy — pick two).</p>",
     "vi": "<p>Tỷ giá được yết theo <strong>đồng tiền định giá / đồng tiền cơ sở</strong>: USD/EUR = 1.10 nghĩa là 1 euro giá 1.10 USD. USD/EUR tăng → euro (đồng cơ sở) <em>lên giá</em>. <strong>Tỷ giá thực</strong> điều chỉnh tỷ giá danh nghĩa theo mặt bằng giá tương đối, đo sức mua tương đối. Tỷ giá chéo ghép hai cặp tỷ giá.</p><p><strong>Tỷ giá kỳ hạn</strong> được xác định bởi ngang giá lãi suất có phòng hộ (covered interest rate parity) — là kết quả của arbitrage, không phải dự báo: F/S = (1 + i<sub>định giá</sub>) / (1 + i<sub>cơ sở</sub>). Đồng tiền có lãi suất <em>cao hơn</em> giao dịch với <strong>forward discount</strong>.</p><p>Cơ chế tỷ giá: thả nổi tự do, thả nổi có quản lý, neo tỷ giá, currency board, đô la hóa. \"Bộ ba bất khả thi\": tự do dòng vốn, tỷ giá cố định, chính sách tiền tệ độc lập — chỉ chọn được hai.</p>"
    },
    {
     "h": "Cross rates & forward points — worked calculations",
     "en": "<p><strong>Cross rates</strong> chain two quotes through a common currency. Given USD/EUR = 1.1000 and JPY/USD = 150.00: JPY/EUR = JPY/USD × USD/EUR = 150.00 × 1.1000 = 165.00. When the common currency appears on the same side of both quotes, <em>divide</em> instead — track the algebra of the labels, treating them literally as fractions.</p><p><strong>Forward points (pips):</strong> forwards are quoted as points to add to spot, scaled by 10,000 for most pairs (100 for JPY pairs). Spot USD/EUR = 1.2000 with forward points +238 → forward = 1.2000 + 238/10,000 = 1.2238. The <strong>forward premium/discount</strong> as a rate: (F − S)/S = 0.0238/1.2000 ≈ +1.98% — the base currency (EUR) trades at a forward premium, consistent with covered interest parity when the EUR interest rate is below the USD rate by about that margin.</p><p><strong>Parity recap and the arbitrage check:</strong> F = S × (1 + i<sub>price</sub>·T)/(1 + i<sub>base</sub>·T). If the quoted forward is above the parity value, borrow the price currency, buy the base spot, invest at the base rate, and sell forward — a riskless profit that forces prices back into line. Remember the direction rule: the <em>higher-interest-rate</em> currency always trades at a forward <em>discount</em>.</p>",
     "vi": "<p><strong>Tỷ giá chéo</strong> ghép hai cặp tỷ giá qua một đồng tiền chung. Cho USD/EUR = 1,1000 và JPY/USD = 150,00: JPY/EUR = JPY/USD × USD/EUR = 150,00 × 1,1000 = 165,00. Nếu đồng tiền chung nằm cùng phía ở cả hai cặp thì <em>chia</em> thay vì nhân — cứ xử lý nhãn tỷ giá như phân số đại số.</p><p><strong>Điểm kỳ hạn (pips):</strong> tỷ giá kỳ hạn được yết bằng số điểm cộng vào giá giao ngay, chia cho 10.000 với đa số cặp (10 0 với cặp JPY). Spot USD/EUR = 1,2000 với điểm kỳ hạn +238 → forward = 1,2000 + 238/10.000 = 1,2238. <strong>Forward premium/discount</strong> dạng tỷ lệ: (F − S)/S = 0,0238/1,2000 ≈ +1,98% — đồng cơ sở (EUR) có premium kỳ hạn, nhất quán với ngang giá lãi suất có phòng hộ khi lãi suất EUR thấp hơn USD khoảng chừng đó.</p><p><strong>Ôn parity và phép kiểm arbitrage:</strong> F = S × (1 + i<sub>định giá</sub>·T)/(1 + i<sub>cơ sở</sub>·T). Nếu forward niêm yết cao hơn giá trị parity: vay đồng định giá, mua đồng cơ sở giao ngay, gửi ở lãi suất đồng cơ sở, bán kỳ hạn — lợi nhuận phi rủi ro sẽ ép giá quay về cân bằng. Quy tắc chiều: đồng tiền <em>lãi suất cao hơn</em> luôn có forward <em>discount</em>.</p>"
    },
    {
     "h": "The full FX drill: cross rates with bid–ask, forwards & the real exchange rate",
     "en": "<p><strong>Read the quote before touching the calculator.</strong> USD/EUR = 1.0850 means 1.0850 US dollars (price currency) per 1 euro (base currency). The base currency is what you are buying or selling; \"EUR appreciates\" means USD/EUR rises.</p>\n<svg viewBox=\"0 0 720 320\" style=\"width:100%;height:auto;display:block;margin:14px 0;background:#fff;border:1px solid #E5E9F2;border-radius:12px\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Cross rate triangle\">\n<text x=\"360\" y=\"26\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"16\" font-weight=\"700\" fill=\"#1B2438\">Cross rates: route through the common currency</text>\n<circle cx=\"360\" cy=\"90\" r=\"34\" fill=\"#5457E0\"/>\n<text x=\"360\" y=\"96\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"#fff\">USD</text>\n<circle cx=\"190\" cy=\"250\" r=\"34\" fill=\"#0F9573\"/>\n<text x=\"190\" y=\"256\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"#fff\">EUR</text>\n<circle cx=\"530\" cy=\"250\" r=\"34\" fill=\"#B45309\"/>\n<text x=\"530\" y=\"256\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"14\" font-weight=\"700\" fill=\"#fff\">GBP</text>\n<line x1=\"333\" y1=\"112\" x2=\"217\" y2=\"228\" stroke=\"#5B6577\" stroke-width=\"2\"/>\n<line x1=\"387\" y1=\"112\" x2=\"503\" y2=\"228\" stroke=\"#5B6577\" stroke-width=\"2\"/>\n<line x1=\"224\" y1=\"250\" x2=\"496\" y2=\"250\" stroke=\"#8B5CF6\" stroke-width=\"2.5\" stroke-dasharray=\"6 4\"/>\n<text x=\"228\" y=\"160\" text-anchor=\"end\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12.5\" font-weight=\"700\" fill=\"#1B2438\">USD/EUR = 1.0850</text>\n<text x=\"492\" y=\"160\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12.5\" font-weight=\"700\" fill=\"#1B2438\" text-anchor=\"start\">USD/GBP = 1.2500</text>\n<text x=\"360\" y=\"240\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12.5\" font-weight=\"700\" fill=\"#8B5CF6\">EUR/GBP = 1.2500 / 1.0850 = 1.1521</text>\n<text x=\"360\" y=\"298\" text-anchor=\"middle\" font-family=\"Inter,Segoe UI,Arial,sans-serif\" font-size=\"12\" fill=\"#5B6577\">Same USD terms in both quotes → divide so USD cancels: (USD/GBP) ÷ (USD/EUR) = EUR/GBP.</text>\n</svg>\n<p><strong>Cross rate with bid–ask.</strong> Given USD/EUR 1.0850–1.0855 and USD/GBP 1.2500–1.2510, find EUR/GBP. Since USD is the price currency in both, divide so USD cancels: EUR/GBP = (USD/GBP) ÷ (USD/EUR). The dealer rule — <em>you always trade at the worse rate</em> — fixes which side to use: <strong>cross bid = 1.2500 / 1.0855 = 1.1516</strong> (divide bid by ask), <strong>cross ask = 1.2510 / 1.0850 = 1.1530</strong> (divide ask by bid). The cross spread is always wider than either input spread.</p>\n<p><strong>Forward points worked.</strong> Spot USD/EUR = 1.0850; the 3-month forward is quoted at <strong>+25 points</strong>. Points are in units of the fourth decimal: 25/10,000 = 0.0025 → forward = 1.0850 + 0.0025 = <strong>1.0875</strong>. The base currency (EUR) trades at a <strong>forward premium</strong>. Annualized premium ≈ (1.0875/1.0850 − 1) × (360/90) = 0.23% × 4 ≈ <strong>0.92%</strong>.</p>\n<p><strong>Covered interest rate parity ties it together.</strong> F/S = (1 + i_price × t)/(1 + i_base × t). With 90-day USD rate 4.0% and EUR rate 3.06%: F = 1.0850 × (1 + 0.04 × 90/360)/(1 + 0.0306 × 90/360) = 1.0850 × 1.0100/1.00765 ≈ <strong>1.0875</strong> — matching the quoted forward. The currency with the <em>lower</em> interest rate trades at a forward premium; if the quoted forward deviated, arbitrage (borrow one currency, convert at spot, invest, sell forward) would close the gap. Forward rates are parity arithmetic, <em>not</em> forecasts.</p>\n<p><strong>Real exchange rate worked.</strong> Real = Spot × (CPI_base / CPI_price). If USD/EUR spot rose 10% over five years while eurozone prices rose 8% and US prices rose 4%, the real USD/EUR changed by ≈ 1.10 × 1.08/1.04 − 1 ≈ <strong>+14.2%</strong> — the euro's <em>purchasing power</em> over US goods rose more than the nominal move suggests. Real appreciation makes a country's exports less competitive regardless of what the nominal rate did.</p>",
     "vi": "<p><strong>Đọc kiểu yết giá trước khi bấm máy.</strong> USD/EUR = 1,0850 nghĩa là 1,0850 đô la Mỹ (đồng tiền định giá) đổi 1 euro (đồng tiền cơ sở). Đồng cơ sở là thứ bạn mua hoặc bán; \"EUR lên giá\" nghĩa là USD/EUR tăng.</p>\n<p><strong>Cross rate với bid–ask.</strong> Cho USD/EUR 1,0850–1,0855 và USD/GBP 1,2500–1,2510, tìm EUR/GBP. Vì USD là đồng định giá ở cả hai cặp, chia để USD triệt tiêu: EUR/GBP = (USD/GBP) ÷ (USD/EUR). Quy tắc dealer — <em>bạn luôn giao dịch ở mức giá bất lợi hơn</em> — quyết định dùng bên nào: <strong>cross bid = 1,2500 / 1,0855 = 1,1516</strong> (bid chia ask), <strong>cross ask = 1,2510 / 1,0850 = 1,1530</strong> (ask chia bid). Spread của cross luôn rộng hơn spread của từng cặp đầu vào.</p>\n<p><strong>Forward points bằng ví dụ.</strong> Spot USD/EUR = 1,0850; forward 3 tháng yết <strong>+25 điểm</strong>. Điểm tính theo chữ số thập phân thứ tư: 25/10.000 = 0,0025 → forward = 1,0850 + 0,0025 = <strong>1,0875</strong>. Đồng cơ sở (EUR) giao dịch với <strong>forward premium</strong>. Premium năm hóa ≈ (1,0875/1,0850 − 1) × (360/90) = 0,23% × 4 ≈ <strong>0,92%</strong>.</p>\n<p><strong>Covered interest rate parity gói tất cả lại.</strong> F/S = (1 + i_giá × t)/(1 + i_cơ sở × t). Với lãi suất USD 90 ngày 4,0% và EUR 3,06%: F = 1,0850 × (1 + 0,04 × 90/360)/(1 + 0,0306 × 90/360) ≈ <strong>1,0875</strong> — khớp với forward yết. Đồng tiền có lãi suất <em>thấp hơn</em> giao dịch với forward premium; nếu forward yết lệch, arbitrage (vay một đồng, đổi spot, đầu tư, bán forward) sẽ khép khoảng cách. Forward là số học parity, <em>không phải</em> dự báo.</p>\n<p><strong>Tỷ giá thực bằng ví dụ.</strong> Real = Spot × (CPI_cơ sở / CPI_định giá). Nếu spot USD/EUR tăng 10% trong 5 năm trong khi giá eurozone tăng 8% và giá Mỹ tăng 4%, tỷ giá thực USD/EUR thay đổi ≈ 1,10 × 1,08/1,04 − 1 ≈ <strong>+14,2%</strong> — <em>sức mua</em> của euro với hàng Mỹ tăng nhiều hơn mức danh nghĩa gợi ý. Lên giá thực làm xuất khẩu của quốc gia kém cạnh tranh bất kể tỷ giá danh nghĩa diễn biến ra sao.</p>"
    }
   ],
   "formulas": [
    [
     "Cross rate",
     "JPY/EUR = JPY/USD × USD/EUR",
     "Cancel the common currency like a fraction"
    ],
    [
     "Forward from points",
     "F = S + points/10,000",
     "JPY pairs: ÷100"
    ],
    [
     "Forward premium %",
     "(F − S) / S",
     "Higher-rate currency → forward discount"
    ],
    [
     "Covered interest parity",
     "F = S × (1 + i_price) / (1 + i_base)",
     "F, S quoted as price/base"
    ],
    [
     "Cross rate with bid–ask",
     "bid: divide bid by ask · ask: divide ask by bid",
     "For A/C from B/A and B/C quotes — customer always gets the worse side."
    ],
    [
     "Annualized forward premium",
     "(F/S − 1) × (360 / days)",
     "Positive → base currency at a premium (lower interest rate currency)."
    ],
    [
     "Real exchange rate",
     "Real = Spot × CPI_base / CPI_price",
     "Real appreciation of the base erodes its export competitiveness."
    ]
   ]
  }
 ],
 "vocab": [
  [
   "elasticity",
   "Sensitivity of quantity demanded to a change in price, income, or other prices.",
   "độ co giãn"
  ],
  [
   "substitute / complement",
   "Positive / negative cross-price elasticity goods.",
   "hàng thay thế / bổ sung"
  ],
  [
   "economies of scale",
   "Falling long-run average cost as output rises.",
   "lợi thế kinh tế theo quy mô"
  ],
  [
   "stagflation",
   "High inflation combined with stagnant growth and high unemployment.",
   "lạm phát đình trệ"
  ],
  [
   "hyperinflation",
   "Extremely rapid, out-of-control inflation.",
   "siêu lạm phát"
  ],
  [
   "neutral rate",
   "Policy rate consistent with trend growth and stable inflation.",
   "lãi suất trung tính"
  ],
  [
   "crowding out",
   "Government borrowing raising rates and displacing private investment.",
   "hiệu ứng chèn lấn"
  ],
  [
   "base currency",
   "The currency being priced in an exchange-rate quote (the denominator).",
   "đồng tiền cơ sở (mẫu số)"
  ],
  [
   "forward premium/discount",
   "Forward rate above/below the spot rate.",
   "điểm kỳ hạn cộng/trừ"
  ],
  [
   "currency peg",
   "Fixing a currency’s value to another currency.",
   "neo tỷ giá"
  ],
  [
   "fiscal multiplier",
   "1/[1 − c(1 − t)]: total demand created per dollar of government spending",
   "Số nhân tài khóa — tổng cầu tạo ra trên mỗi đồng chi tiêu công"
  ],
  [
   "Ricardian equivalence",
   "Households save tax cuts in anticipation of future taxes, muting fiscal stimulus",
   "Hộ gia đình tiết kiệm khoản giảm thuế vì đoán trước thuế tương lai, làm giảm tác dụng kích thích tài khóa"
  ],
  [
   "structural (cyclically adjusted) deficit",
   "The deficit that would occur at full employment — the true measure of fiscal stance",
   "Thâm hụt cơ cấu — thâm hụt tại mức toàn dụng, thước đo thật của lập trường tài khóa"
  ],
  [
   "money multiplier",
   "1/reserve requirement: maximum deposits supported per unit of new reserves",
   "Số nhân tiền = 1/tỷ lệ dự trữ bắt buộc"
  ],
  [
   "quantity theory of money",
   "MV = PY: sustained money growth drives prices in the long run",
   "Thuyết số lượng tiền: MV = PY"
  ],
  [
   "inflation targeting",
   "Policy framework anchoring expectations to a published inflation goal (~2%)",
   "Khung chính sách neo kỳ vọng vào mục tiêu lạm phát công bố (~2%)"
  ],
  [
   "core inflation",
   "Inflation excluding volatile food and energy prices",
   "Lạm phát lõi — loại trừ giá thực phẩm và năng lượng"
  ],
  [
   "substitution bias",
   "Fixed-basket (Laspeyres) indexes overstate inflation as consumers shift to cheaper goods",
   "Thiên lệch thay thế — chỉ số rổ cố định thổi phồng lạm phát"
  ],
  [
   "transmission mechanism",
   "Channels (lending rates, asset prices, expectations, exchange rate) linking policy rates to inflation",
   "Cơ chế truyền dẫn chính sách tiền tệ: lãi vay, giá tài sản, kỳ vọng, tỷ giá"
  ],
  [
   "zero lower bound",
   "The floor near 0% on nominal policy rates that motivates quantitative easing",
   "Cận dưới bằng 0 của lãi suất danh nghĩa — lý do ra đời QE"
  ],
  [
   "comparative advantage",
   "Producing at a lower opportunity cost — the true basis for gains from trade",
   "Lợi thế so sánh — chi phí cơ hội thấp hơn, nền tảng thật của lợi ích thương mại"
  ],
  [
   "quota rent",
   "Profit captured by holders of import licenses under a quota",
   "Đặc lợi quota — lợi nhuận rơi vào người giữ giấy phép nhập khẩu"
  ],
  [
   "trading bloc",
   "FTA → customs union → common market → economic union → monetary union",
   "Khối thương mại theo độ sâu hội nhập tăng dần"
  ],
  [
   "current account",
   "Trade in goods/services plus primary income and transfers",
   "Cán cân vãng lai"
  ],
  [
   "financial account",
   "Cross-border purchases of financial and real assets; mirrors the current account",
   "Tài khoản tài chính — dòng mua bán tài sản xuyên biên giới, đối ứng với vãng lai"
  ],
  [
   "twin deficits",
   "Fiscal deficits contributing to current account deficits via S − I",
   "Thâm hụt kép — thâm hụt ngân sách góp phần gây thâm hụt vãng lai qua S − I"
  ],
  [
   "event / exogenous / thematic risk",
   "Geopolitical risks classified by predictability and horizon",
   "Rủi ro địa chính trị: sự kiện / ngoại sinh / chủ đề"
  ],
  [
   "sanctions",
   "Economic or financial restrictions imposed on a state or entity",
   "Trừng phạt kinh tế/tài chính"
  ],
  [
   "impossible trinity",
   "Free capital flow, fixed exchange rate, independent monetary policy — pick two",
   "Bộ ba bất khả thi"
  ],
  [
   "forward points (pips)",
   "Quoted increments added to spot to obtain the forward rate (÷10,000 for most pairs)",
   "Điểm kỳ hạn cộng vào giá giao ngay (chia 10.000 với đa số cặp)"
  ],
  [
   "elastic vs inelastic demand",
   "|E|>1: price hikes cut revenue; |E|<1: price hikes raise revenue",
   "|E|>1: tăng giá giảm doanh thu; |E|<1: tăng giá tăng doanh thu"
  ],
  [
   "cross-price / income elasticity",
   "Sign identifies substitutes vs complements; normal vs inferior goods",
   "Dấu cho biết hàng thay thế/bổ sung; hàng thông thường/thứ cấp"
  ],
  [
   "frictional / structural / cyclical unemployment",
   "Search time; skills mismatch; deficient demand",
   "Tìm việc bình thường; lệch kỹ năng; cầu thiếu hụt"
  ],
  [
   "discouraged worker",
   "Left the labor force after giving up the search; lowers measured unemployment",
   "Người bỏ tìm việc, rời lực lượng lao động; kéo tỷ lệ thất nghiệp đo được xuống"
  ],
  [
   "credit cycle",
   "Lending standards and asset prices swinging longer and deeper than GDP",
   "Chu kỳ tín dụng — dài và sâu hơn chu kỳ GDP"
  ],
  [
   "crowding out",
   "Deficit-driven higher rates displacing private investment",
   "Thâm hụt đẩy lãi suất lên, chèn lấn đầu tư tư nhân"
  ],
  [
   "policy trilemma",
   "Fixed FX, open capital, independent money — pick only two",
   "Bộ ba bất khả thi: tỷ giá cố định, vốn tự do, tiền tệ độc lập — chỉ chọn hai"
  ],
  [
   "currency board",
   "Domestic money fully backed by the anchor currency at a fixed rate",
   "Nội tệ được bảo chứng đầy đủ bằng đồng neo theo tỷ giá cố định"
  ],
  [
   "forward points",
   "Quoted (F − S) scaled — usually divided by 10,000 for 4-decimal quotes",
   "Chênh lệch (F − S) yết theo điểm — thường chia 10.000 với tỷ giá 4 số lẻ"
  ],
  [
   "real exchange rate",
   "Nominal rate adjusted by relative price levels — cross-border purchasing power",
   "Tỷ giá danh nghĩa hiệu chỉnh theo mặt bằng giá — sức mua xuyên biên giới"
  ],
  [
   "twin deficits",
   "Budget deficit feeding a current account deficit via CA = S − I + (T − G)",
   "Thâm hụt kép: ngân sách kéo theo vãng lai qua CA = S − I + (T − G)"
  ],
  [
   "quota rent",
   "The profit captured by quota-license holders instead of the government",
   "Phần lợi ích rơi vào tay người giữ giấy phép hạn ngạch thay vì chính phủ"
  ]
 ],
 "quiz": [
  {
   "q": "In the short run, a perfectly competitive firm should shut down production when the market price falls below its:",
   "opts": [
    "average total cost.",
    "average variable cost.",
    "marginal cost."
   ],
   "ans": 1,
   "en": "B is correct. In the short run, fixed costs are sunk, so the firm operates as long as price covers average variable cost. Below AVC, every unit produced deepens the loss. P < ATC only forces exit in the long run.",
   "vi": "Đáp án B. Trong ngắn hạn chi phí cố định là chi phí chìm, nên doanh nghiệp còn hoạt động khi giá bù được AVC. Dưới AVC, càng sản xuất càng lỗ thêm. P < ATC chỉ buộc rời ngành trong dài hạn."
  },
  {
   "q": "Which unemployment indicator behaves as a lagging indicator of the business cycle?",
   "opts": [
    "The unemployment rate",
    "Stock market indices",
    "Average weekly hours worked in manufacturing"
   ],
   "ans": 0,
   "en": "A is correct. Firms are slow to fire in downturns and slow to rehire in recoveries, so the unemployment rate lags the cycle. Equity indices and average weekly hours are leading indicators.",
   "vi": "Đáp án A. Doanh nghiệp chậm sa thải khi suy thoái và chậm tuyển lại khi phục hồi, nên tỷ lệ thất nghiệp là chỉ báo trễ. Chỉ số chứng khoán và số giờ làm việc bình quân tuần là chỉ báo dẫn dắt."
  },
  {
   "q": "The spot rate is 1.2000 USD/EUR. One-year interest rates are 3% in the US and 1% in the eurozone. The one-year forward USD/EUR rate is closest to:",
   "opts": [
    "1.1767",
    "1.2000",
    "1.2238"
   ],
   "ans": 2,
   "en": "C is correct. F = S × (1 + i_USD)/(1 + i_EUR) = 1.2000 × 1.03/1.01 = 1.2238. The euro (lower-rate, base currency) trades at a forward premium; the higher-rate currency (USD) trades at a forward discount.",
   "vi": "Đáp án C. F = 1.2000 × 1.03/1.01 = 1.2238. Đồng euro (lãi suất thấp, đồng cơ sở) có forward premium; đồng lãi suất cao (USD) có forward discount."
  },
  {
   "q": "A central bank facing an economy in a liquidity trap will find that expansionary monetary policy is:",
   "opts": [
    "highly effective, because rates can fall further.",
    "largely ineffective, because demand for money is extremely elastic.",
    "effective only if combined with currency appreciation."
   ],
   "ans": 1,
   "en": "B is correct. In a liquidity trap, people hoard additional money at near-zero rates instead of spending or investing, so further monetary easing has little effect on demand — a key argument for fiscal stimulus in deep recessions.",
   "vi": "Đáp án B. Trong bẫy thanh khoản, người dân giữ tiền thay vì chi tiêu/đầu tư khi lãi suất gần 0, nên nới lỏng tiền tệ thêm gần như không kích thích được tổng cầu — lý do chính để dùng kích thích tài khóa trong suy thoái sâu."
  }
 ]
});
window.CFA.extra["econ"] = {
 "checks": [
  [
   {
    "q": "In the short run, a perfectly competitive firm should shut down when price falls below its minimum:",
    "opts": [
     "Average total cost",
     "Average variable cost",
     "Marginal cost"
    ],
    "ans": 1,
    "en": "Below minimum AVC, revenue does not even cover variable costs, so producing loses more than shutting down. Between AVC and ATC the firm operates at a loss but covers part of fixed costs.",
    "vi": "Khi giá &lt; AVC tối thiểu, doanh thu không đủ bù chi phí biến đổi → đóng cửa tạm thời sẽ lỗ ít hơn. Nếu giá nằm giữa AVC và ATC, vẫn nên sản xuất để bù một phần chi phí cố định."
   },
   {
    "q": "Many sellers, differentiated products, low barriers to entry, and some pricing power describe:",
    "opts": [
     "Perfect competition",
     "Monopolistic competition",
     "Oligopoly"
    ],
    "ans": 1,
    "en": "Monopolistic competition: differentiation gives each firm a downward-sloping demand curve, but easy entry drives long-run economic profit to zero.",
    "vi": "Cạnh tranh độc quyền: sản phẩm khác biệt tạo chút quyền định giá, nhưng rào cản gia nhập thấp khiến lợi nhuận kinh tế dài hạn về 0."
   },
   {
    "q": "A firm cuts price 5% and quantity demanded rises 4%. Total revenue will most likely:",
    "opts": [
     "Rise",
     "Fall",
     "Stay unchanged"
    ],
    "ans": 1,
    "en": "Ed = 4/−5 = −0.8 → inelastic. For a price cut with inelastic demand, the % quantity gain is smaller than the % price loss, so TR falls.",
    "vi": "Ed = −0,8 → cầu kém co giãn. Giảm giá khi cầu kém co giãn: % lượng tăng nhỏ hơn % giá giảm, nên TR giảm."
   },
   {
    "q": "Price is $9, minimum AVC is $8, minimum ATC is $12. In the short run the firm should:",
    "opts": [
     "Shut down immediately",
     "Continue operating",
     "Exit the industry and re-enter later"
    ],
    "ans": 1,
    "en": "P ≥ min AVC, so each unit covers variable cost and contributes toward fixed cost. Operate in the short run; exit only if P stays below min ATC in the long run.",
    "vi": "P ≥ min AVC nên mỗi đơn vị bù được chi phí biến đổi và đóng góp vào chi phí cố định. Ngắn hạn tiếp tục sản xuất; chỉ rời ngành nếu P dưới min ATC kéo dài."
   }
  ],
  [
   {
    "q": "Discouraged workers who stop looking for jobs cause the official unemployment rate to:",
    "opts": [
     "Overstate labor market weakness",
     "Understate labor market weakness",
     "Be unaffected"
    ],
    "ans": 1,
    "en": "Discouraged workers leave the labor force, so they are not counted as unemployed — the rate falls even though slack remains, understating weakness.",
    "vi": "Người lao động nản chí rời khỏi lực lượng lao động nên không bị tính là thất nghiệp → tỷ lệ thất nghiệp giảm giả tạo, che bớt mức độ yếu của thị trường lao động."
   },
   {
    "q": "Because the CPI is computed from a fixed base-period basket (a Laspeyres index), measured inflation most likely:",
    "opts": [
     "Understates the true rise in the cost of living",
     "Overstates it, due to substitution, quality, and new-goods biases",
     "Equals it exactly"
    ],
    "ans": 1,
    "en": "A fixed basket ignores consumers substituting toward cheaper goods, quality improvements, and new products — all three push measured inflation above true cost-of-living inflation.",
    "vi": "Rổ cố định bỏ qua việc người tiêu dùng chuyển sang hàng rẻ hơn, chất lượng cải thiện và sản phẩm mới — cả ba khiến lạm phát đo được cao hơn lạm phát chi phí sinh hoạt thật."
   },
   {
    "q": "Which is a LEADING indicator?",
    "opts": [
     "Average duration of unemployment",
     "Building permits for new houses",
     "Industrial production"
    ],
    "ans": 1,
    "en": "Permits reflect decisions about future construction → leading. Duration of unemployment lags; industrial production is coincident.",
    "vi": "Giấy phép xây dựng phản ánh quyết định xây dựng tương lai → leading. Thời gian thất nghiệp là lagging; sản xuất công nghiệp là coincident."
   },
   {
    "q": "Inflation rising while output falls is best described as:",
    "opts": [
     "Demand-pull inflation",
     "Cost-push inflation",
     "Disinflation"
    ],
    "ans": 1,
    "en": "A negative supply shock raises costs and prices while cutting output — cost-push (stagflation risk). Demand-pull raises both prices and output.",
    "vi": "Cú sốc cung tiêu cực đẩy chi phí và giá lên trong khi sản lượng giảm — cost-push (nguy cơ stagflation). Demand-pull đẩy cả giá lẫn sản lượng lên."
   }
  ],
  [
   {
    "q": "The marginal propensity to consume is 0.8 and the tax rate is 25%. The fiscal multiplier is closest to:",
    "opts": [
     "1.25",
     "2.50",
     "5.00"
    ],
    "ans": 1,
    "en": "Multiplier = 1/[1 − c(1 − t)] = 1/[1 − 0.8 × 0.75] = 1/0.4 = 2.5: each dollar of new government spending ultimately raises demand by $2.50.",
    "vi": "Số nhân = 1/[1 − 0,8 × 0,75] = 1/0,4 = 2,5: mỗi đồng chi tiêu công mới cuối cùng làm tổng cầu tăng 2,5 đồng."
   },
   {
    "q": "Six months after a recession clearly began, the legislature is still debating a stimulus bill. This delay is best described as the:",
    "opts": [
     "Recognition lag",
     "Action lag",
     "Impact lag"
    ],
    "ans": 1,
    "en": "The downturn is already recognized; the delay in passing legislation is the action lag. The impact lag comes later, as the measures take time to affect demand.",
    "vi": "Suy thoái đã được nhận biết; sự chậm trễ trong thông qua luật là action lag (độ trễ hành động). Impact lag đến sau — khi chính sách cần thời gian để thấm vào tổng cầu."
   },
   {
    "q": "MPC = 0.8, tax rate = 25%. The spending multiplier is closest to:",
    "opts": [
     "2.5",
     "4.0",
     "5.0"
    ],
    "ans": 0,
    "en": "Re-spend rate = 0.8 × 0.75 = 0.6 → multiplier = 1/(1−0.6) = 2.5.",
    "vi": "Tỷ lệ tái chi tiêu = 0,8 × 0,75 = 0,6 → số nhân = 1/(1−0,6) = 2,5."
   },
   {
    "q": "Debt/GDP = 80%, r = 5%, g = 3%. To keep the ratio stable, the primary balance must be closest to:",
    "opts": [
     "A deficit of 1.6% of GDP",
     "Zero",
     "A surplus of 1.6% of GDP"
    ],
    "ans": 2,
    "en": "Required primary surplus ≈ (r − g) × Debt/GDP = 0.02 × 0.80 = 1.6% of GDP.",
    "vi": "Thặng dư sơ cấp cần thiết ≈ (r − g) × Nợ/GDP = 0,02 × 0,80 = 1,6% GDP."
   }
  ],
  [
   {
    "q": "A central bank fighting above-target inflation would most likely:",
    "opts": [
     "Raise its policy rate and sell securities in open-market operations",
     "Lower its policy rate and buy securities",
     "Cut reserve requirements"
    ],
    "ans": 0,
    "en": "Contractionary monetary policy: raise the policy rate and drain reserves (sell securities), lifting market rates and cooling demand.",
    "vi": "Chính sách tiền tệ thắt chặt: tăng lãi suất điều hành và bán chứng khoán (hút tiền về), đẩy mặt bằng lãi suất lên để hạ nhiệt tổng cầu."
   },
   {
    "q": "Banks receive $100 million of new reserves. With a 10% reserve requirement, the maximum amount of new money the banking system can create is:",
    "opts": [
     "$100 million",
     "$1,000 million",
     "$10 million"
    ],
    "ans": 1,
    "en": "Maximum money multiplier = 1/reserve requirement = 1/0.10 = 10, so up to 10 × 100 = $1,000 million of deposits can be supported.",
    "vi": "Số nhân tiền tối đa = 1/tỷ lệ dự trữ = 1/0,10 = 10 → hệ thống ngân hàng có thể tạo tối đa 1.000 triệu USD tiền gửi."
   },
   {
    "q": "Trend real growth is 2.5% and the inflation target is 2%. A policy rate of 3.5% is:",
    "opts": [
     "Expansionary",
     "Neutral",
     "Contractionary"
    ],
    "ans": 0,
    "en": "Neutral rate ≈ 2.5 + 2 = 4.5%. Policy at 3.5% is below neutral → expansionary.",
    "vi": "Lãi suất trung tính ≈ 2,5 + 2 = 4,5%. Policy rate 3,5% dưới trung tính → nới lỏng."
   },
   {
    "q": "Money supply grows 7%, velocity is stable, real output grows 3%. Long-run inflation is closest to:",
    "opts": [
     "3%",
     "4%",
     "10%"
    ],
    "ans": 1,
    "en": "Quantity theory: π ≈ money growth − real growth = 7 − 3 = 4%.",
    "vi": "Thuyết số lượng tiền: π ≈ tăng trưởng tiền − tăng trưởng thực = 7 − 3 = 4%."
   }
  ],
  [
   {
    "q": "Excluding a country’s banks from an international payment network is best classified as which tool of geopolitics?",
    "opts": [
     "A national security tool",
     "An economic tool",
     "A financial tool"
    ],
    "ans": 2,
    "en": "Financial tools operate through capital-market and payment-system access (and currency reserve status). Economic tools work through trade (tariffs, agreements); national security tools are military/intelligence.",
    "vi": "Công cụ tài chính vận hành qua quyền tiếp cận thị trường vốn và hệ thống thanh toán (cùng vị thế đồng tiền dự trữ). Công cụ kinh tế đi qua thương mại; công cụ an ninh là quân sự/tình báo."
   },
   {
    "q": "Risk associated with a national election scheduled 10 months from now is best classified as:",
    "opts": [
     "Exogenous risk",
     "Event risk",
     "Thematic risk"
    ],
    "ans": 1,
    "en": "Event risk follows a known calendar (elections, transitions). Exogenous risk arrives without warning; thematic risk unfolds over years (climate, cyber).",
    "vi": "Rủi ro sự kiện gắn với lịch đã biết (bầu cử, chuyển giao). Rủi ro ngoại sinh đến không báo trước; rủi ro chủ đề diễn ra qua nhiều năm (khí hậu, an ninh mạng)."
   },
   {
    "q": "A country engages heavily in world trade but sets the rules unilaterally as the dominant power. This archetype is:",
    "opts": [
     "Autarky",
     "Hegemony",
     "Multilateralism"
    ],
    "ans": 1,
    "en": "Globalized but non-cooperative rule-setting = hegemony. Multilateralism requires shared, negotiated rules; autarky is inward-looking.",
    "vi": "Toàn cầu hóa nhưng áp đặt luật chơi đơn phương = hegemony. Multilateralism cần luật lệ đàm phán chung; autarky hướng nội."
   },
   {
    "q": "Freezing a rival country's central-bank assets is an example of which tool of geopolitics?",
    "opts": [
     "National security tool",
     "Economic tool",
     "Financial tool"
    ],
    "ans": 2,
    "en": "Sanctions on assets, currency reserves, and payment-network access are financial tools. Tariffs and trade agreements are economic tools; military action is a national security tool.",
    "vi": "Trừng phạt tài sản, dự trữ ngoại hối và quyền tiếp cận mạng thanh toán là công cụ tài chính. Thuế quan/hiệp định thương mại là công cụ kinh tế; hành động quân sự là công cụ an ninh."
   }
  ],
  [
   {
    "q": "Country A can produce 10 cars or 20 computers; Country B can produce 4 cars or 16 computers. Country A should export:",
    "opts": [
     "Computers, because it has an absolute advantage in both goods",
     "Cars, because its opportunity cost per car (2 computers) is lower than B’s (4 computers)",
     "Nothing — A gains nothing from trading with a less productive country"
    ],
    "ans": 1,
    "en": "Comparative advantage is about opportunity cost, not absolute productivity. A gives up only 2 computers per car versus B’s 4, so A exports cars, B exports computers — and both gain.",
    "vi": "Lợi thế so sánh dựa trên chi phí cơ hội, không phải năng suất tuyệt đối. A chỉ mất 2 máy tính cho mỗi ô tô so với 4 của B → A xuất ô tô, B xuất máy tính — cả hai cùng lợi."
   },
   {
    "q": "Compared with an equivalent tariff, an import quota most likely differs in that:",
    "opts": [
     "Consumers do not lose under a quota",
     "The government collects no tariff revenue — quota rents may go to foreign license holders",
     "Domestic producers do not benefit"
    ],
    "ans": 1,
    "en": "Price and welfare effects are similar, but a tariff generates government revenue while quota rents accrue to import-license holders — often foreign exporters — making quotas typically worse for the importing country.",
    "vi": "Tác động giá và phúc lợi tương tự, nhưng thuế quan tạo nguồn thu ngân sách còn đặc lợi quota rơi vào người giữ giấy phép — thường là nhà xuất khẩu nước ngoài — nên quota thường tệ hơn cho nước nhập khẩu."
   },
   {
    "q": "Country X gives up 3 tons of wheat per car; Country Y gives up 1.5 tons per car. Which statement is correct?",
    "opts": [
     "Y has comparative advantage in cars",
     "X has comparative advantage in cars",
     "Y has comparative advantage in wheat"
    ],
    "ans": 0,
    "en": "Y's opportunity cost of a car (1.5 wheat) is lower than X's (3 wheat) → Y specializes in cars; X, by implication, in wheat.",
    "vi": "Chi phí cơ hội của ô tô ở Y (1,5 lúa mì) thấp hơn X (3 lúa mì) → Y chuyên môn hóa ô tô; X do đó chuyên về lúa mì."
   },
   {
    "q": "Under an import quota, the quota rents most likely accrue to:",
    "opts": [
     "The domestic government",
     "Holders of the import licenses",
     "Domestic consumers"
    ],
    "ans": 1,
    "en": "Unlike a tariff (government revenue), quota rents go to whoever holds the right to import — often foreign exporters. Consumers lose in both cases.",
    "vi": "Khác thuế quan (chính phủ thu tiền), quota rents thuộc về người giữ quyền nhập khẩu — thường là nhà xuất khẩu nước ngoài. Người tiêu dùng đều thiệt trong cả hai trường hợp."
   }
  ],
  [
   {
    "q": "Holding all else constant, a real appreciation of a country’s currency most likely makes its:",
    "opts": [
     "Exports cheaper abroad",
     "Exports more expensive abroad and imports cheaper at home",
     "Trade balance improve immediately"
    ],
    "ans": 1,
    "en": "Appreciation raises the foreign price of exports and lowers the domestic price of imports — typically pressuring the trade balance toward deficit.",
    "vi": "Nội tệ lên giá làm hàng xuất khẩu đắt hơn với người nước ngoài và hàng nhập khẩu rẻ hơn trong nước → thường gây áp lực xấu lên cán cân thương mại."
   },
   {
    "q": "A country runs a persistent current account deficit. Its balance of payments must show:",
    "opts": [
     "A matching deficit in the financial account",
     "Net capital inflows — foreigners accumulating claims on the country",
     "Falling imports"
    ],
    "ans": 1,
    "en": "The BOP sums to zero: a current account deficit is financed by net inflows recorded in the capital/financial account. This is an accounting identity, not a policy choice.",
    "vi": "Cán cân thanh toán phải bằng 0: thâm hụt vãng lai được tài trợ bởi dòng vốn vào ròng ghi ở tài khoản vốn/tài chính. Đây là đồng nhất thức kế toán, không phải lựa chọn chính sách."
   },
   {
    "q": "A country wants a fixed exchange rate and an independent monetary policy. The trilemma says it must:",
    "opts": [
     "Restrict capital flows",
     "Run a current account surplus",
     "Adopt a currency board"
    ],
    "ans": 0,
    "en": "Fixed rate + policy independence is feasible only by giving up free capital mobility — i.e., capital controls (China's historical mix).",
    "vi": "Tỷ giá cố định + độc lập chính sách chỉ khả thi khi từ bỏ tự do lưu chuyển vốn — tức kiểm soát vốn (mô hình lịch sử của Trung Quốc)."
   },
   {
    "q": "National saving is 15% of GDP and investment is 18%. The current account is closest to:",
    "opts": [
     "A surplus of 3% of GDP",
     "A deficit of 3% of GDP",
     "Balanced"
    ],
    "ans": 1,
    "en": "CA = S − I = 15 − 18 = −3% of GDP — the country imports foreign capital to fund the gap.",
    "vi": "CA = S − I = 15 − 18 = −3% GDP — quốc gia nhập khẩu vốn nước ngoài để bù khoảng trống."
   }
  ],
  [
   {
    "q": "A quote of USD/EUR = 1.10 (price/base) means:",
    "opts": [
     "1 US dollar buys 1.10 euros",
     "1 euro costs 1.10 US dollars",
     "The euro depreciated by 10%"
    ],
    "ans": 1,
    "en": "In price/base notation the base currency (EUR) is the one being priced: 1 EUR = 1.10 USD.",
    "vi": "Theo quy ước price/base, đồng cơ sở (EUR) là đồng được định giá: 1 EUR = 1,10 USD."
   },
   {
    "q": "USD/EUR = 1.1000 and JPY/USD = 150.00. The JPY/EUR cross rate is:",
    "opts": [
     "136.36",
     "165.00",
     "151.10"
    ],
    "ans": 1,
    "en": "JPY/EUR = JPY/USD × USD/EUR = 150 × 1.10 = 165.00 — the USD cancels like a fraction.",
    "vi": "JPY/EUR = JPY/USD × USD/EUR = 150 × 1,10 = 165,00 — đồng USD triệt tiêu như phân số."
   },
   {
    "q": "USD/EUR = 1.1000 and USD/GBP = 1.3200. EUR/GBP is closest to:",
    "opts": [
     "1.4520",
     "1.2000",
     "0.8333"
    ],
    "ans": 1,
    "en": "EUR/GBP = (USD/GBP)/(USD/EUR) = 1.3200/1.1000 = 1.2000 — USD cancels when you divide.",
    "vi": "EUR/GBP = (USD/GBP)/(USD/EUR) = 1,3200/1,1000 = 1,2000 — USD triệt tiêu khi chia."
   },
   {
    "q": "Spot CAD/USD = 1.3500; the 6-month forward is quoted at −60 points. The forward rate is:",
    "opts": [
     "1.3440",
     "1.3494",
     "1.3560"
    ],
    "ans": 0,
    "en": "Points are ten-thousandths: −60/10,000 = −0.0060 → F = 1.3500 − 0.0060 = 1.3440. USD (base) trades at a forward discount.",
    "vi": "Điểm là phần vạn: −60/10.000 = −0,0060 → F = 1,3500 − 0,0060 = 1,3440. USD (đồng cơ sở) giao dịch với forward discount."
   }
  ]
 ],
 "sets": [
  [
   {
    "q": "Four firms each hold 25% market share. The Herfindahl–Hirschman Index (HHI) is:",
    "opts": [
     "1,000",
     "2,500",
     "625"
    ],
    "ans": 1,
    "en": "HHI = 4 × 25² = 4 × 625 = 2,500 — a highly concentrated market by common regulatory thresholds.",
    "vi": "HHI = 4 × 25² = 2.500 → thị trường tập trung cao theo ngưỡng thông dụng của cơ quan quản lý."
   },
   {
    "q": "The defining feature of oligopoly pricing behavior is:",
    "opts": [
     "Firms are price takers",
     "Pricing decisions are interdependent — each firm must anticipate rivals’ reactions",
     "Prices always equal marginal cost"
    ],
    "ans": 1,
    "en": "With few large firms, each firm’s optimal price/output depends on competitors’ responses — the source of kinked-demand and game-theoretic models.",
    "vi": "Độc quyền nhóm: ít doanh nghiệp lớn nên quyết định giá phụ thuộc lẫn nhau — mỗi hãng phải dự đoán phản ứng của đối thủ (mô hình đường cầu gãy, lý thuyết trò chơi)."
   },
   {
    "q": "Accelerating inflation, rising short-term interest rates, and slowing (but still positive) growth are most typical of which business-cycle phase?",
    "opts": [
     "Early expansion (recovery)",
     "Late expansion (peak approaching)",
     "Trough"
    ],
    "ans": 1,
    "en": "Late-cycle: capacity tightens, inflation accelerates, and central banks tighten — growth decelerates toward the peak.",
    "vi": "Cuối chu kỳ mở rộng: công suất căng, lạm phát tăng tốc, NHTW thắt chặt, tăng trưởng chậm dần trước khi đạt đỉnh."
   },
   {
    "q": "Which is the best example of an automatic fiscal stabilizer?",
    "opts": [
     "An emergency stimulus bill passed during a recession",
     "Unemployment benefits that rise as job losses increase",
     "A central bank rate cut"
    ],
    "ans": 1,
    "en": "Automatic stabilizers (progressive taxes, unemployment insurance) respond without new legislation. Discretionary policy requires action; rate cuts are monetary, not fiscal.",
    "vi": "Cơ chế ổn định tự động (thuế lũy tiến, trợ cấp thất nghiệp) tự vận hành không cần luật mới. Gói kích thích là chính sách tùy nghi; cắt lãi suất là chính sách tiền tệ."
   },
   {
    "q": "Inflation caused primarily by rising wages and input costs is best described as:",
    "opts": [
     "Demand-pull inflation",
     "Cost-push inflation",
     "Hyperinflation"
    ],
    "ans": 1,
    "en": "Cost-push: supply-side cost increases push prices up, often with weakening output. Demand-pull comes from aggregate demand outrunning capacity.",
    "vi": "Lạm phát chi phí đẩy: chi phí đầu vào/tiền lương tăng đẩy giá lên, thường kèm sản lượng yếu. Lạm phát cầu kéo do tổng cầu vượt năng lực sản xuất."
   },
   {
    "q": "A market analyst wants a leading indicator of the business cycle. The best choice among these is:",
    "opts": [
     "The unemployment rate",
     "Broad stock market index levels",
     "Current industrial production"
    ],
    "ans": 1,
    "en": "Equity prices are a classic leading indicator (markets anticipate). Unemployment is lagging; industrial production is coincident.",
    "vi": "Giá cổ phiếu là chỉ báo dẫn dắt kinh điển (thị trường phản ánh kỳ vọng). Tỷ lệ thất nghiệp là chỉ báo trễ; sản xuất công nghiệp là chỉ báo trùng."
   },
   {
    "q": "Money velocity is stable and real GDP grows 2% per year. If the money supply grows 5% per year, the quantity theory of money predicts long-run inflation of approximately:",
    "opts": [
     "3%",
     "7%",
     "2%"
    ],
    "ans": 0,
    "en": "From MV = PY in growth rates: %ΔM + %ΔV = %ΔP + %ΔY → 5 + 0 = %ΔP + 2 → inflation ≈ 3%.",
    "vi": "Từ MV = PY theo tốc độ tăng: %ΔM + %ΔV = %ΔP + %ΔY → 5 + 0 = %ΔP + 2 → lạm phát ≈ 3%."
   },
   {
    "q": "A government cuts taxes, but households — expecting higher taxes in the future — save the entire tax cut. This behavior is predicted by:",
    "opts": [
     "The balanced-budget multiplier",
     "Ricardian equivalence",
     "Crowding out"
    ],
    "ans": 1,
    "en": "Ricardian equivalence: forward-looking households treat deficits as deferred taxes and raise saving, neutralizing fiscal stimulus. Empirical support for the full effect is weak, but the concept is tested.",
    "vi": "Ricardian equivalence: hộ gia đình nhìn xa coi thâm hụt là thuế hoãn lại nên tăng tiết kiệm, vô hiệu hóa kích thích tài khóa. Bằng chứng thực nghiệm cho hiệu ứng đầy đủ khá yếu, nhưng khái niệm này vẫn được hỏi thi."
   },
   {
    "q": "Spot USD/EUR is 1.2000 and the one-year forward is quoted at +240 points. The forward rate and the euro’s forward premium are closest to:",
    "opts": [
     "1.2240 and +2.0%",
     "1.4400 and +20%",
     "1.1760 and −2.0%"
    ],
    "ans": 0,
    "en": "Forward = 1.2000 + 240/10,000 = 1.2240; premium = (1.2240 − 1.2000)/1.2000 = 2.0%. The base currency (EUR) trades at a forward premium — its interest rate is the lower one.",
    "vi": "Forward = 1,2000 + 240/10.000 = 1,2240; premium = 0,0240/1,2000 = 2,0%. Đồng cơ sở (EUR) có premium kỳ hạn — tức lãi suất EUR thấp hơn."
   },
   {
    "q": "A small country imposes a new tariff on imported steel. Which group most likely benefits?",
    "opts": [
     "Domestic steel consumers",
     "Domestic steel producers (and the government via revenue)",
     "Foreign steel producers"
    ],
    "ans": 1,
    "en": "A tariff raises the domestic price: producers gain surplus and the government collects revenue, while consumers lose more than the sum of those gains — the difference is deadweight loss.",
    "vi": "Thuế quan đẩy giá nội địa lên: nhà sản xuất trong nước hưởng thặng dư và chính phủ thu thuế, còn người tiêu dùng mất nhiều hơn tổng hai khoản lợi đó — phần chênh là tổn thất vô ích."
   }
  ],
  [
   {
    "q": "In long-run equilibrium, a firm in perfect competition earns:",
    "opts": [
     "Positive economic profit",
     "Zero economic profit (normal profit only)",
     "Negative accounting profit"
    ],
    "ans": 1,
    "en": "Free entry erodes economic profit to zero in the long run; firms still earn a normal accounting return.",
    "vi": "Gia nhập tự do khiến lợi nhuận kinh tế dài hạn về 0 — doanh nghiệp vẫn có lợi nhuận kế toán “bình thường” đủ bù chi phí cơ hội."
   },
   {
    "q": "For a single-price monopolist maximizing profit, at the chosen output level:",
    "opts": [
     "Price equals marginal revenue",
     "Marginal revenue equals marginal cost, and price exceeds both",
     "Price equals marginal cost"
    ],
    "ans": 1,
    "en": "Profit max at MR = MC; because demand slopes down, P &gt; MR = MC — the source of deadweight loss.",
    "vi": "Tối đa hóa lợi nhuận tại MR = MC; do đường cầu dốc xuống nên P &gt; MR = MC → tạo tổn thất vô ích (deadweight loss)."
   },
   {
    "q": "“Money neutrality” implies that in the long run an increase in the money supply affects:",
    "opts": [
     "Real output permanently",
     "Only the price level, not real variables",
     "Real interest rates permanently"
    ],
    "ans": 1,
    "en": "Long-run neutrality: money growth ultimately changes nominal prices, leaving real output and employment determined by real factors.",
    "vi": "Tính trung lập của tiền: về dài hạn, tăng cung tiền chỉ làm tăng mặt bằng giá; sản lượng thực do các yếu tố thực quyết định."
   },
   {
    "q": "Under covered interest rate parity, the currency of the country with the lower interest rate should trade at a:",
    "opts": [
     "Forward discount",
     "Forward premium",
     "Spot premium"
    ],
    "ans": 1,
    "en": "The low-rate currency trades at a forward premium so that hedged returns are equal across currencies — otherwise arbitrage exists.",
    "vi": "Đồng tiền có lãi suất thấp hơn phải có forward premium để lợi suất đã phòng hộ ngang nhau giữa hai đồng tiền — nếu không sẽ có arbitrage."
   },
   {
    "q": "Large government deficits financed by borrowing may raise interest rates and reduce private investment. This is called:",
    "opts": [
     "Ricardian equivalence",
     "Crowding out",
     "Quantitative easing"
    ],
    "ans": 1,
    "en": "Crowding out: public borrowing competes for savings, pushing rates up and displacing private investment.",
    "vi": "Hiệu ứng lấn át (crowding out): chính phủ vay nhiều đẩy lãi suất lên, chèn ép đầu tư tư nhân."
   },
   {
    "q": "A country’s central bank buys its own currency in the FX market to support its fixed exchange rate. A likely side effect is:",
    "opts": [
     "An increase in domestic money supply",
     "A decrease in domestic money supply",
     "No monetary impact"
    ],
    "ans": 1,
    "en": "Buying domestic currency with FX reserves withdraws domestic currency from circulation — contracting the money supply unless sterilized.",
    "vi": "Mua nội tệ bằng dự trữ ngoại hối tức là hút nội tệ khỏi lưu thông → cung tiền giảm, trừ khi được trung hòa (sterilized)."
   },
   {
    "q": "A central bank unexpectedly raises its policy rate. Through the exchange-rate channel of monetary transmission, the FIRST-order effect is most likely:",
    "opts": [
     "Currency depreciation boosting exports",
     "Currency appreciation, curbing net exports and import prices",
     "No effect on the currency"
    ],
    "ans": 1,
    "en": "Higher rates attract capital inflows, appreciating the currency; exports become dearer and imports cheaper, dampening demand and imported inflation — one of the four transmission channels.",
    "vi": "Lãi suất cao hút dòng vốn vào làm nội tệ lên giá; xuất khẩu đắt hơn, nhập khẩu rẻ hơn, hạ nhiệt tổng cầu và lạm phát nhập khẩu — một trong bốn kênh truyền dẫn."
   },
   {
    "q": "Headline CPI jumps because of an oil-price spike while core CPI is stable. An inflation-targeting central bank most likely:",
    "opts": [
     "Tightens aggressively to reverse the oil shock",
     "Looks through the temporary shock, guided by core inflation and anchored expectations",
     "Abandons its inflation target"
    ],
    "ans": 1,
    "en": "Central banks focus on core measures and expectations to avoid reacting to volatile, self-reversing components — provided expectations stay anchored to the target.",
    "vi": "NHTW tập trung vào lạm phát lõi và kỳ vọng để không phản ứng với cấu phần biến động, tự đảo chiều — miễn là kỳ vọng vẫn neo vào mục tiêu."
   },
   {
    "q": "A country invests 26% of GDP while total national saving is 22% of GDP. Its current account balance is closest to:",
    "opts": [
     "A surplus of 4% of GDP",
     "A deficit of 4% of GDP",
     "Balanced"
    ],
    "ans": 1,
    "en": "CA = S − I = 22% − 26% = −4% of GDP. Investing beyond national saving requires importing foreign capital — the mirror image of a current account deficit.",
    "vi": "CA = S − I = 22% − 26% = −4% GDP. Đầu tư vượt tiết kiệm quốc gia buộc phải nhập khẩu vốn nước ngoài — hình ảnh phản chiếu của thâm hụt vãng lai."
   },
   {
    "q": "An investor holds assets exposed to a low-likelihood but high-impact geopolitical risk with high velocity. The most appropriate response is to:",
    "opts": [
     "Ignore it, since the probability is low",
     "Use scenario analysis and hedges, since impact and speed are large despite low probability",
     "Sell all foreign assets immediately"
    ],
    "ans": 1,
    "en": "Risk response weighs likelihood against velocity and impact: low-probability/high-impact/high-velocity risks justify hedging and stress testing, not neglect — and not panic liquidation either.",
    "vi": "Ứng xử rủi ro cân giữa xác suất với tốc độ và quy mô tác động: rủi ro xác suất thấp/tác động lớn/tốc độ cao cần phòng hộ và stress test — không phớt lờ, cũng không bán tháo hoảng loạn."
   }
  ],
  {
   "name": "Set D — Market structures, cycles & policy drills",
   "qs": [
    {
     "q": "In the short run, a perfectly competitive firm should shut down immediately when the market price falls below its minimum:",
     "opts": [
      "Average total cost",
      "Average variable cost",
      "Marginal cost"
     ],
     "ans": 1,
     "en": "Below min AVC, every unit sold fails even to cover variable costs — operating adds to losses. Between AVC and ATC, operate short-run: revenue covers variable costs and part of fixed costs.",
     "vi": "Dưới min AVC, mỗi đơn vị bán ra không bù nổi cả chi phí biến đổi — càng chạy càng lỗ thêm. Giữa AVC và ATC thì vẫn nên chạy ngắn hạn: doanh thu bù chi phí biến đổi và một phần chi phí cố định."
    },
    {
     "q": "Four firms hold market shares of 40%, 30%, 20%, and 10%. The HHI is:",
     "opts": [
      "3,000 — a highly concentrated market",
      "2,500",
      "1,000 — an unconcentrated market"
     ],
     "ans": 0,
     "en": "HHI = 40² + 30² + 20² + 10² = 1600 + 900 + 400 + 100 = 3,000; above 2,500 signals high concentration — but remember contestability can still discipline pricing.",
     "vi": "HHI = 40² + 30² + 20² + 10² = 3.000; trên 2.500 là tập trung cao — nhưng nhớ rằng tính khả nhập vẫn có thể kỷ luật hóa giá."
    },
    {
     "q": "A firm raises price 5% and quantity demanded falls 10%. Demand is — and total revenue will:",
     "opts": [
      "Elastic (E = −2); revenue falls",
      "Inelastic (E = −0.5); revenue rises",
      "Unit elastic; revenue is unchanged"
     ],
     "ans": 0,
     "en": "E = −10/5 = −2: elastic. With elastic demand the quantity loss outweighs the price gain, so total revenue declines.",
     "vi": "E = −10/5 = −2: co giãn. Cầu co giãn thì lượng mất nhiều hơn giá được, tổng doanh thu giảm."
    },
    {
     "q": "An industry has many sellers, differentiated products, heavy advertising, and low entry barriers. In the long run, firms most likely earn:",
     "opts": [
      "Positive economic profit protected by differentiation",
      "Zero economic profit as entry competes profits away",
      "Negative economic profit"
     ],
     "ans": 1,
     "en": "That is monopolistic competition: differentiation gives short-run pricing power, but easy entry erodes economic profit to zero in the long run.",
     "vi": "Đây là cạnh tranh độc quyền: khác biệt hóa cho sức mạnh định giá ngắn hạn, nhưng gia nhập dễ bào mòn lợi nhuận kinh tế về 0 trong dài hạn."
    },
    {
     "q": "The defining feature of oligopoly pricing is that each firm:",
     "opts": [
      "Takes the market price as given",
      "Must anticipate rivals’ reactions when setting price and output",
      "Faces a perfectly elastic demand curve"
     ],
     "ans": 1,
     "en": "Few, large, interdependent sellers: every pricing move invites a response — the logic behind kinked demand, collusion incentives, and price wars.",
     "vi": "Ít người bán, quy mô lớn, phụ thuộc lẫn nhau: mỗi động thái giá đều kéo theo phản ứng — logic đứng sau đường cầu gãy khúc, động cơ cấu kết và chiến tranh giá."
    },
    {
     "q": "For a firm in perfect competition, profit is maximized where:",
     "opts": [
      "Price = MR = MC",
      "Price > MR = MC",
      "MR > MC at maximum output"
     ],
     "ans": 0,
     "en": "A price taker faces a horizontal demand curve, so P = MR; producing until MR = MC gives P = MR = MC.",
     "vi": "Người chấp nhận giá đối mặt đường cầu nằm ngang nên P = MR; sản xuất tới khi MR = MC cho P = MR = MC."
    },
    {
     "q": "An economy is in late expansion. The most likely combination is:",
     "opts": [
      "Rising unemployment and falling inflation",
      "Tight capacity and accelerating wage and price inflation",
      "Falling inventories-to-sales and policy easing"
     ],
     "ans": 1,
     "en": "Late cycle: output presses against capacity, labor markets tighten, inflation accelerates — and central banks lean against it.",
     "vi": "Cuối chu kỳ: sản lượng ép sát công suất, thị trường lao động căng, lạm phát tăng tốc — và NHTW bắt đầu ghìm lại."
    },
    {
     "q": "A coal miner loses his job as the industry permanently shifts to renewables and lacks the skills local tech employers need. His unemployment is best classified as:",
     "opts": [
      "Frictional",
      "Cyclical",
      "Structural"
     ],
     "ans": 2,
     "en": "A durable mismatch between skills offered and skills demanded is structural unemployment — it outlasts the cycle and calls for retraining.",
     "vi": "Lệch pha bền vững giữa kỹ năng có và kỹ năng cần là thất nghiệp cơ cấu — kéo dài hơn chu kỳ và đòi hỏi đào tạo lại."
    },
    {
     "q": "Which is most useful for anticipating a turn in the business cycle?",
     "opts": [
      "The average duration of unemployment",
      "Building permits for new houses",
      "The consumer price index"
     ],
     "ans": 1,
     "en": "Permits are a classic leading indicator (commitments made ahead of activity); unemployment duration and CPI-type measures lag the cycle.",
     "vi": "Giấy phép xây dựng là chỉ báo dẫn dắt kinh điển (cam kết trước khi hoạt động diễn ra); thời gian thất nghiệp và các thước đo kiểu CPI trễ theo chu kỳ."
    },
    {
     "q": "Core inflation excludes food and energy prices primarily because those components:",
     "opts": [
      "Are unimportant to households",
      "Are volatile and can mask the underlying trend",
      "Are set by the government"
     ],
     "ans": 1,
     "en": "Food and energy swing with weather and geopolitics; stripping them reveals the persistent trend central banks target.",
     "vi": "Giá lương thực và năng lượng dao động theo thời tiết, địa chính trị; loại chúng ra để lộ xu hướng bền mà NHTW nhắm tới."
    },
    {
     "q": "The marginal propensity to consume is 0.8 and the tax rate is 25%. The fiscal multiplier is:",
     "opts": [
      "2.5",
      "5.0",
      "1.6"
     ],
     "ans": 0,
     "en": "Multiplier = 1/[1 − MPC(1 − t)] = 1/[1 − 0.8×0.75] = 1/0.4 = 2.5.",
     "vi": "Số nhân = 1/[1 − MPC(1 − t)] = 1/[1 − 0,8×0,75] = 1/0,4 = 2,5."
    },
    {
     "q": "Which is an automatic stabilizer rather than discretionary fiscal policy?",
     "opts": [
      "An emergency infrastructure spending bill",
      "Unemployment benefits rising as layoffs increase",
      "A one-off tax rebate voted by parliament"
     ],
     "ans": 1,
     "en": "Automatic stabilizers move with the cycle without new legislation — progressive taxes and unemployment insurance are the standard examples.",
     "vi": "Cơ chế ổn định tự động vận hành theo chu kỳ mà không cần luật mới — thuế lũy tiến và trợ cấp thất nghiệp là ví dụ chuẩn."
    },
    {
     "q": "Large deficit-financed government spending pushes interest rates up, reducing private investment. This effect is called:",
     "opts": [
      "Ricardian equivalence",
      "Crowding out",
      "The liquidity trap"
     ],
     "ans": 1,
     "en": "Government borrowing competes for savings and raises rates, displacing (crowding out) private capital spending — a key limit of fiscal expansion.",
     "vi": "Vay nợ chính phủ cạnh tranh nguồn tiết kiệm, đẩy lãi suất lên và chèn lấn đầu tư tư nhân — giới hạn then chốt của nới lỏng tài khóa."
    },
    {
     "q": "Money supply grows 5% per year, velocity is constant, and real output grows 2%. The quantity theory of money predicts inflation of approximately:",
     "opts": [
      "3%",
      "7%",
      "5%"
     ],
     "ans": 0,
     "en": "MV = PY → %ΔP ≈ %ΔM + %ΔV − %ΔY = 5 + 0 − 2 = 3%.",
     "vi": "MV = PY → %ΔP ≈ %ΔM + %ΔV − %ΔY = 5 + 0 − 2 = 3%."
    },
    {
     "q": "A central bank buys government securities in the open market. The most direct effects are:",
     "opts": [
      "Bank reserves rise and short-term rates fall — expansionary",
      "Bank reserves fall and rates rise — contractionary",
      "Reserves and rates are unchanged"
     ],
     "ans": 0,
     "en": "Open-market purchases inject reserves into the banking system, pushing the policy rate toward its target from above — the classic easing tool.",
     "vi": "Mua vào trên thị trường mở bơm dự trữ vào hệ thống ngân hàng, đè lãi suất ngắn hạn xuống — công cụ nới lỏng kinh điển."
    },
    {
     "q": "Trend real growth is 2% and the inflation target is 2%. If the policy rate is set at 6%, the monetary stance is:",
     "opts": [
      "Expansionary",
      "Neutral",
      "Contractionary"
     ],
     "ans": 2,
     "en": "Neutral rate ≈ trend growth + inflation target = 4%. A policy rate above neutral restrains demand — contractionary.",
     "vi": "Lãi suất trung tính ≈ tăng trưởng xu hướng + mục tiêu lạm phát = 4%. Lãi suất chính sách trên mức trung tính là thắt chặt."
    }
   ]
  },
  {
   "name": "Set E — Trade, BOP & FX calculation drills",
   "qs": [
    {
     "q": "In country A one worker makes 6 cars or 12 shirts; in country B one worker makes 2 cars or 8 shirts. According to comparative advantage:",
     "opts": [
      "A exports cars; B exports shirts",
      "A exports shirts; B exports cars",
      "A exports both goods"
     ],
     "ans": 0,
     "en": "Opportunity cost of a car: A = 2 shirts, B = 4 shirts → A is the low-cost car producer; B’s shirt cost (0.25 car) beats A’s (0.5 car). Each exports where its opportunity cost is lower.",
     "vi": "Chi phí cơ hội một chiếc xe: A = 2 áo, B = 4 áo → A rẻ hơn ở xe; chi phí áo của B (0,25 xe) thấp hơn A (0,5 xe). Mỗi nước xuất mặt hàng có chi phí cơ hội thấp hơn."
    },
    {
     "q": "Compared with an equivalent tariff, an import quota most notably:",
     "opts": [
      "Generates the same government revenue",
      "Transfers the revenue-equivalent to quota-license holders as quota rents",
      "Reduces the domestic price"
     ],
     "ans": 1,
     "en": "Both raise the domestic price and create deadweight loss, but tariffs collect revenue for the government while quotas hand the surplus to whoever holds the import licenses.",
     "vi": "Cả hai đều đẩy giá nội địa lên và tạo tổn thất vô ích, nhưng thuế quan mang nguồn thu cho chính phủ còn hạn ngạch trao phần lợi đó cho người giữ giấy phép nhập khẩu."
    },
    {
     "q": "An export subsidy in the granting country most likely:",
     "opts": [
      "Lowers the domestic price of the good",
      "Encourages production beyond efficient levels at taxpayers’ expense",
      "Raises world prices to the benefit of foreign consumers"
     ],
     "ans": 1,
     "en": "Subsidies pull resources into the favored sector past the efficient point; domestic taxpayers fund it and domestic prices tend to rise toward the subsidized export return.",
     "vi": "Trợ cấp kéo nguồn lực vào ngành được ưu ái vượt điểm hiệu quả; người nộp thuế trong nước gánh chi phí và giá nội địa có xu hướng tăng theo mức lợi xuất khẩu được trợ cấp."
    },
    {
     "q": "The feature that distinguishes a common market from a customs union is:",
     "opts": [
      "A common external tariff",
      "Free movement of labor and capital among members",
      "The removal of internal tariffs"
     ],
     "ans": 1,
     "en": "Free trade area → + common external policy = customs union → + free factor mobility = common market → + common economic policy = economic union.",
     "vi": "Khu vực mậu dịch tự do → + chính sách thuế quan chung = liên minh thuế quan → + tự do di chuyển lao động, vốn = thị trường chung → + chính sách kinh tế chung = liên minh kinh tế."
    },
    {
     "q": "A country runs a persistent current account deficit. By the balance of payments identity, it must also run:",
     "opts": [
      "A capital/financial account surplus — net foreign borrowing or asset sales",
      "A capital account deficit",
      "A trade surplus"
     ],
     "ans": 0,
     "en": "The BOP sums to zero: importing more than you export is financed by foreign capital inflows — borrowing abroad or selling assets to foreigners.",
     "vi": "Cán cân thanh toán tổng bằng 0: nhập siêu phải được tài trợ bằng dòng vốn nước ngoài chảy vào — vay nước ngoài hoặc bán tài sản cho nước ngoài."
    },
    {
     "q": "Private saving is 20, investment is 22, and the government runs a budget deficit of 3 (% of GDP). The current account balance is:",
     "opts": [
      "−5% of GDP",
      "+1% of GDP",
      "−1% of GDP"
     ],
     "ans": 0,
     "en": "CA = S − I + (T − G) = 20 − 22 − 3 = −5% — the twin-deficits arithmetic.",
     "vi": "CA = S − I + (T − G) = 20 − 22 − 3 = −5% — phép tính thâm hụt kép."
    },
    {
     "q": "The USD/EUR quote moves from 1.10 to 1.05 (USD per EUR). The euro has:",
     "opts": [
      "Appreciated against the dollar",
      "Depreciated against the dollar",
      "Been revalued by the ECB"
     ],
     "ans": 1,
     "en": "Fewer dollars per euro means the base currency (EUR) buys less USD — the euro depreciated, the dollar appreciated.",
     "vi": "Mỗi euro đổi được ít USD hơn nghĩa là đồng cơ sở (EUR) mất giá, USD lên giá."
    },
    {
     "q": "USD/EUR = 1.10 and JPY/USD = 150. The JPY/EUR cross rate is:",
     "opts": [
      "165",
      "136",
      "75"
     ],
     "ans": 0,
     "en": "JPY/EUR = JPY/USD × USD/EUR = 150 × 1.10 = 165 — chain the quotes so the USD cancels.",
     "vi": "JPY/EUR = JPY/USD × USD/EUR = 150 × 1,10 = 165 — nhân chuỗi để USD triệt tiêu."
    },
    {
     "q": "Spot USD/EUR is 1.2000 and the one-year forward is quoted at +25 points. The forward rate is:",
     "opts": [
      "1.2025",
      "1.2250",
      "1.1975"
     ],
     "ans": 0,
     "en": "Points are scaled by 10,000 for four-decimal quotes: 1.2000 + 25/10,000 = 1.2025. Positive points = base currency at a forward premium.",
     "vi": "Điểm chia cho 10.000 với tỷ giá 4 số lẻ: 1,2000 + 25/10.000 = 1,2025. Điểm dương = đồng cơ sở có forward premium."
    },
    {
     "q": "Spot USD/EUR = 1.1000; the one-year USD rate is 5% and the EUR rate is 3%. The no-arbitrage one-year forward is closest to:",
     "opts": [
      "1.1214 — the euro trades at a forward premium",
      "1.0790 — the euro trades at a forward discount",
      "1.1000 — parity requires equality"
     ],
     "ans": 0,
     "en": "Covered interest parity: F = S × (1 + i_price)/(1 + i_base) = 1.10 × 1.05/1.03 ≈ 1.1214. The lower-rate currency (EUR) trades at a forward premium.",
     "vi": "Ngang giá lãi suất có phòng hộ: F = S × (1 + i_giá)/(1 + i_cơ sở) = 1,10 × 1,05/1,03 ≈ 1,1214. Đồng có lãi suất thấp hơn (EUR) có forward premium."
    },
    {
     "q": "A country’s nominal exchange rate is unchanged while its inflation runs well above its trading partners’. Its real exchange rate has:",
     "opts": [
      "Depreciated, boosting competitiveness",
      "Appreciated, eroding export competitiveness",
      "Not changed"
     ],
     "ans": 1,
     "en": "Real rate adjusts nominal for relative prices: higher domestic inflation with a flat nominal rate makes domestic goods dearer abroad — a real appreciation.",
     "vi": "Tỷ giá thực hiệu chỉnh danh nghĩa theo mặt bằng giá: lạm phát trong nước cao hơn mà tỷ giá danh nghĩa đứng yên khiến hàng nội đắt lên ở nước ngoài — lên giá thực."
    },
    {
     "q": "A regime in which the domestic currency is fully backed by foreign reserves and exchanged on demand at a fixed rate is a:",
     "opts": [
      "Managed float",
      "Currency board",
      "Crawling peg"
     ],
     "ans": 1,
     "en": "A currency board hard-wires the fix: money supply expands and contracts with reserves, surrendering independent monetary policy.",
     "vi": "Currency board \"đóng đinh\" tỷ giá: cung tiền phình/teo theo dự trữ, từ bỏ chính sách tiền tệ độc lập."
    },
    {
     "q": "Under the policy trilemma, a country with a fixed exchange rate and free capital mobility must give up:",
     "opts": [
      "Fiscal policy",
      "Independent monetary policy",
      "Trade policy"
     ],
     "ans": 1,
     "en": "Pick two of three: with a fixed rate and open capital flows, domestic rates must follow the anchor country — monetary independence is the sacrifice.",
     "vi": "Chỉ chọn được hai trong ba: tỷ giá cố định + vốn tự do buộc lãi suất trong nước chạy theo nước neo — hy sinh độc lập tiền tệ."
    },
    {
     "q": "A small emerging economy imposes taxes on short-term foreign portfolio inflows. The most likely objective is to:",
     "opts": [
      "Raise the domestic cost of capital",
      "Reduce destabilizing hot-money swings and preserve monetary autonomy",
      "Increase exchange rate volatility"
     ],
     "ans": 1,
     "en": "Capital controls on short-term flows aim to damp hot-money cycles and retain policy room; the accepted cost is a somewhat higher cost of capital.",
     "vi": "Kiểm soát dòng vốn ngắn hạn nhằm hãm chu kỳ \"tiền nóng\" và giữ dư địa chính sách; cái giá chấp nhận là chi phí vốn nhỉnh hơn."
    }
   ]
  },
  {
   "name": "Set F — Mixed exam-style review",
   "qs": [
    {
     "q": "A monopolist faces demand with |Ed| = 0.8 at its current output. To raise profit it should most likely:",
     "opts": [
      "Raise price",
      "Cut price",
      "Leave price unchanged"
     ],
     "ans": 0,
     "en": "On the inelastic portion, MR is negative — raising price cuts quantity, raises revenue, AND lowers cost. A profit-maximizing monopolist never stays where |Ed| < 1.",
     "vi": "Ở đoạn cầu kém co giãn, MR âm — tăng giá giảm lượng bán, tăng doanh thu VÀ giảm chi phí. Nhà độc quyền tối đa lợi nhuận không bao giờ ở vùng |Ed| < 1."
    },
    {
     "q": "Market shares are 50%, 30%, 20%. The HHI is closest to:",
     "opts": [
      "0.30",
      "0.38",
      "0.62"
     ],
     "ans": 1,
     "en": "0.25 + 0.09 + 0.04 = 0.38 (3,800 ×10,000) — highly concentrated.",
     "vi": "0,25 + 0,09 + 0,04 = 0,38 (3.800 theo thang ×10.000) — tập trung rất cao."
    },
    {
     "q": "Oligopoly differs from monopolistic competition primarily because oligopoly features:",
     "opts": [
      "Differentiated products",
      "Interdependent pricing decisions among few firms",
      "Zero long-run economic profit"
     ],
     "ans": 1,
     "en": "The defining trait of oligopoly is few firms whose decisions affect each other (strategic interdependence). Both structures can have differentiation; monopolistic competition drives long-run profit to zero.",
     "vi": "Đặc trưng của oligopoly là ít hãng và quyết định của mỗi hãng ảnh hưởng lẫn nhau (phụ thuộc chiến lược). Cả hai cấu trúc đều có thể khác biệt hóa; monopolistic competition mới đưa lợi nhuận dài hạn về 0."
    },
    {
     "q": "The inventory/sales ratio typically peaks:",
     "opts": [
      "At the start of an expansion",
      "Just before and into a recession",
      "At the trough"
     ],
     "ans": 1,
     "en": "Sales fall before firms cut production, so inventories pile up entering the downturn — the ratio spikes early in the contraction.",
     "vi": "Doanh số giảm trước khi doanh nghiệp cắt sản lượng, hàng tồn kho chất đống khi vào suy thoái — tỷ lệ vọt lên đầu pha co lại."
    },
    {
     "q": "Which combination is a coincident indicator set?",
     "opts": [
      "Stock prices and building permits",
      "Nonfarm payrolls and industrial production",
      "Unit labor costs and average prime rate"
     ],
     "ans": 1,
     "en": "Payrolls and industrial production measure current activity. Stock prices/permits lead; unit labor costs/prime rate lag.",
     "vi": "Việc làm phi nông nghiệp và sản xuất công nghiệp đo hoạt động hiện tại. Giá cổ phiếu/giấy phép xây dựng dẫn trước; chi phí lao động đơn vị/lãi suất prime đi trễ."
    },
    {
     "q": "A $200bn increase in government spending with MPC = 0.9 and t = 1/3 raises GDP by approximately:",
     "opts": [
      "$300bn",
      "$500bn",
      "$667bn"
     ],
     "ans": 1,
     "en": "Re-spend rate = 0.9 × (2/3) = 0.6 → multiplier 2.5 → 200 × 2.5 = $500bn.",
     "vi": "Tỷ lệ tái chi tiêu = 0,9 × (2/3) = 0,6 → số nhân 2,5 → 200 × 2,5 = $500 tỷ."
    },
    {
     "q": "Ricardian equivalence implies that a debt-financed tax cut:",
     "opts": [
      "Boosts consumption strongly",
      "Is largely saved in anticipation of future taxes",
      "Permanently raises the price level"
     ],
     "ans": 1,
     "en": "If households internalize the government's budget constraint, they save the tax cut to pay expected future taxes — muting the fiscal stimulus.",
     "vi": "Nếu hộ gia đình hiểu ràng buộc ngân sách của chính phủ, họ tiết kiệm khoản giảm thuế để trả thuế tương lai dự kiến — làm giảm tác dụng kích thích tài khóa."
    },
    {
     "q": "A central bank cuts rates but banks hold the extra reserves and lending doesn't rise. This describes:",
     "opts": [
      "Crowding out",
      "A liquidity trap / pushing on a string",
      "Money neutrality"
     ],
     "ans": 1,
     "en": "At very low rates, added liquidity may simply sit idle — monetary policy loses traction (liquidity trap). Crowding out is a fiscal-policy effect.",
     "vi": "Ở lãi suất rất thấp, thanh khoản bơm thêm có thể nằm im — chính sách tiền tệ mất lực kéo (bẫy thanh khoản). Crowding out là hiệu ứng của chính sách tài khóa."
    },
    {
     "q": "A credible inflation-targeting central bank matters chiefly because credibility:",
     "opts": [
      "Eliminates the business cycle",
      "Anchors expectations so targets become self-fulfilling",
      "Guarantees a fixed exchange rate"
     ],
     "ans": 1,
     "en": "If wage- and price-setters believe the 2% target, they build 2% into contracts — expectations anchor actual inflation near target.",
     "vi": "Nếu người đàm phán lương và định giá tin vào mục tiêu 2%, họ đưa 2% vào hợp đồng — kỳ vọng neo lạm phát thực tế quanh mục tiêu."
    },
    {
     "q": "Joining a customs union, a country shifts imports from a cheap non-member (now behind the tariff wall) to a pricier member. This is:",
     "opts": [
      "Trade creation",
      "Trade diversion",
      "Comparative advantage"
     ],
     "ans": 1,
     "en": "Diversion: the tariff structure redirects trade away from the lowest-cost producer — a welfare loss that offsets the bloc's trade-creation gains.",
     "vi": "Diversion: cấu trúc thuế quan chuyển hướng thương mại khỏi nhà sản xuất chi phí thấp nhất — khoản mất phúc lợi bù trừ lợi ích trade creation của khối."
    },
    {
     "q": "A country abandons its currency board for an independent float. According to the trilemma it gains:",
     "opts": [
      "A fixed exchange rate",
      "Independent monetary policy",
      "Freedom from FX volatility"
     ],
     "ans": 1,
     "en": "Floating with open capital markets restores monetary autonomy — at the price of exchange-rate volatility.",
     "vi": "Thả nổi với thị trường vốn mở khôi phục tự chủ tiền tệ — đổi lại phải chịu biến động tỷ giá."
    },
    {
     "q": "Spot USD/EUR = 1.0800. 1-year rates: USD 5%, EUR 3%. The 1-year forward is closest to:",
     "opts": [
      "1.0592",
      "1.0800",
      "1.1010"
     ],
     "ans": 2,
     "en": "F = 1.0800 × 1.05/1.03 ≈ 1.1010. The lower-rate currency (EUR, the base) trades at a forward premium under covered interest parity.",
     "vi": "F = 1,0800 × 1,05/1,03 ≈ 1,1010. Đồng lãi suất thấp hơn (EUR, đồng cơ sở) giao dịch với forward premium theo covered interest parity."
    }
   ]
  }
 ]
};
