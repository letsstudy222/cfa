/* =====================================================================
   MOCK TESTS · ĐỀ THI THỬ
   ---------------------------------------------------------------------
   Mỗi đề trong window.CFA.mocktests: { name: 'Tên đề', qs: [ ...câu hỏi ] }
   Mỗi câu hỏi: {
     q:    'Nội dung câu hỏi (English, như đề thật)',
     opts: ['Đáp án A', 'Đáp án B', 'Đáp án C'],   // đúng 3 đáp án
     ans:  0,                                        // chỉ số đáp án đúng: 0, 1 hoặc 2
     en:   'Giải thích tiếng Anh',
     vi:   'Giải thích tiếng Việt'
   }
   Để thêm đề mới: copy khối window.CFA.mocktests.push({...}) và thay nội dung.
   ===================================================================== */
window.CFA = window.CFA || { topics: [], extra: {}, mocktests: [] };
window.CFA.mocktests.push({
 name: "Mock Exam 1 — Session 1 (Ethics · Quant · Econ · FSA · Corporate Issuers)",
 qs: [
 {
  "q": "Jolene Campbell, CFA, is working on a report about XLK Autos, which is developing a fuel-efficient car about which no public information is available. Campbell uses financial data and information from automobile experts not connected to XLK about the project's commercial viability, then issues a \"buy\" recommendation exclusively to her firm's clients, expecting the report to impact the stock price. Has she violated the Standard on material nonpublic information?",
  "opts": [
   "No",
   "Yes, because she uses information that is not yet public",
   "Yes, because she fails to make her recommendation public"
  ],
  "ans": 0,
  "en": "This is the mosaic theory: combining public information with nonmaterial nonpublic insights from sources unconnected to the issuer is permitted, even when the conclusion would move the price. There is no duty to publish research publicly.",
  "vi": "Đây là mosaic theory: kết hợp thông tin công khai với các mẩu thông tin không trọng yếu từ nguồn không liên quan đến công ty là được phép, kể cả khi kết luận có thể làm giá biến động. Không có nghĩa vụ công bố nghiên cứu ra công chúng."
 },
 {
  "q": "Rex Leopold, CFA, plans to leave his employer to start a competing business. During non-business hours, and before giving notice, he prepares by procuring regulatory approvals, leasing office space, and hiring an office manager. Has Leopold violated the Standards?",
  "opts": [
   "No",
   "Yes, the Standard relating to loyalty",
   "Yes, the Standard relating to misconduct"
  ],
  "ans": 0,
  "en": "Mere PREPARATION to compete — approvals, premises, staff hired on his own time — is allowed under Loyalty IV(A), provided he does not actually compete with or harm his employer before resigning (no clients solicited, no confidential material taken).",
  "vi": "Việc CHUẨN BỊ để cạnh tranh — xin phép, thuê văn phòng, tuyển người ngoài giờ làm — được phép theo Standard Loyalty IV(A), miễn là chưa thực sự cạnh tranh hay gây hại cho chủ cũ trước khi nghỉ (chưa lôi kéo khách, không lấy tài liệu mật)."
 },
 {
  "q": "A member holds a supervisory position. Which Standard recommends that the member regularly engage in informal continuing education so professional responsibilities are fulfilled?",
  "opts": [
   "Suitability",
   "Competence",
   "Responsibilities of supervisors"
  ],
  "ans": 1,
  "en": "The Competence standard (Professionalism) calls for maintaining and improving professional abilities through continuing education — formal and informal — so responsibilities can be fulfilled.",
  "vi": "Standard Competence (nhóm Professionalism) yêu cầu duy trì và nâng cao năng lực nghề nghiệp qua học tập liên tục — chính thức lẫn không chính thức — để hoàn thành trách nhiệm."
 },
 {
  "q": "The Standard relating to conduct as participants in CFA Institute programs prohibits candidates from:",
  "opts": [
   "Discussing curriculum material with others",
   "Expressing disagreement with CFA Institute on its policies",
   "Disclosing broad topical areas and formulas not tested on the CFA Level I exam"
  ],
  "ans": 2,
  "en": "Standard VII(A) forbids revealing confidential exam content — including which topics or formulas were or were NOT tested. Discussing the public curriculum and criticizing CFA Institute policies are both allowed.",
  "vi": "Standard VII(A) cấm tiết lộ nội dung bảo mật của kỳ thi — kể cả chủ đề hay công thức nào có hoặc KHÔNG có trong đề. Thảo luận giáo trình công khai và phê bình chính sách của CFA Institute đều được phép."
 },
 {
  "q": "A 12-year-old investment firm adopts the GIPS standards. To claim compliance, the firm is initially required to present GIPS-compliant performance history:",
  "opts": [
   "For at least five years",
   "For at least ten years",
   "Since the firm's inception date"
  ],
  "ans": 0,
  "en": "Initial compliance requires a minimum five-year compliant record (or since inception if younger), then building to ten years by adding each subsequent year.",
  "vi": "Lần tuân thủ đầu tiên yêu cầu tối thiểu 5 năm lịch sử đạt chuẩn (hoặc từ khi thành lập nếu công ty trẻ hơn), sau đó bổ sung từng năm cho đến đủ 10 năm."
 },
 {
  "q": "Toshi Hoda, CFA, an analyst at a brokerage firm, holds shares in a company he begins to cover. Under the Standard on conflicts of interest, Hoda must disclose his holdings to:",
  "opts": [
   "His employer only",
   "His employer and his firm's clients only",
   "His employer, his firm's clients, and prospective clients"
  ],
  "ans": 2,
  "en": "Standard VI(A) requires full, fair, and prominent disclosure of conflicts to the employer, clients, AND prospective clients — ownership of a covered stock could impair objectivity.",
  "vi": "Standard VI(A) đòi hỏi công bố xung đột đầy đủ, rõ ràng cho chủ lao động, khách hàng VÀ khách hàng tiềm năng — nắm cổ phiếu mình phân tích có thể làm mất tính khách quan."
 },
 {
  "q": "A firm claiming compliance with the GIPS standards:",
  "opts": [
   "Can claim compliance on specific composites",
   "Is responsible for maintaining that compliance",
   "Must be verified by an independent third party"
  ],
  "ans": 1,
  "en": "Compliance is firm-wide and self-regulated: the FIRM bears responsibility for its claim. Verification is recommended but voluntary, and compliance can never be claimed for selected composites only.",
  "vi": "Tuân thủ GIPS áp dụng toàn công ty và tự giám sát: CÔNG TY chịu trách nhiệm về tuyên bố của mình. Verification được khuyến nghị nhưng tự nguyện, và không bao giờ được tuyên bố tuân thủ cho riêng vài composite."
 },
 {
  "q": "In the absence of regulatory guidance, CFA Institute recommends that members maintain investment research records for at least:",
  "opts": [
   "3 years",
   "5 years",
   "7 years"
  ],
  "ans": 2,
  "en": "Standard V(C): absent regulation to the contrary, retain records for at least seven years.",
  "vi": "Standard V(C): nếu luật không quy định khác, lưu hồ sơ tối thiểu bảy năm."
 },
 {
  "q": "Vijay Gupta, CFA, is hired to manage a church retirement plan whose staff members opt in voluntarily. The trustees prohibit stocks of alcohol, tobacco, gambling, or firearms companies. Gupta says he cannot execute his usual strategy with these restrictions and that his other accounts hold such stocks for their alpha. By agreeing to manage the account per the trustees' wishes, does Gupta violate the Standards?",
  "opts": [
   "No",
   "Yes, because he was hired based on his previous investment strategy",
   "Yes, because the restrictions are not in the best interest of the members"
  ],
  "ans": 0,
  "en": "The client is the plan, represented by its trustees; managing within the client's stated constraints — after candidly explaining the strategy impact — is exactly what the Standards require. Members join voluntarily, knowing the restrictions.",
  "vi": "Khách hàng là quỹ hưu, đại diện bởi các trustees; quản lý trong khuôn khổ ràng buộc mà khách đặt ra — sau khi đã nói thẳng tác động lên chiến lược — chính là điều Standards yêu cầu. Thành viên tham gia tự nguyện và biết rõ các hạn chế."
 },
 {
  "q": "Under the recommended procedures for the Standard on additional compensation arrangements, a member receiving additional compensation must disclose to his employer in writing:",
  "opts": [
   "The nature of the compensation only",
   "The approximate amount only",
   "Both the nature and the approximate amount of the compensation"
  ],
  "ans": 2,
  "en": "Standard IV(B): written consent from all parties requires disclosing the nature, approximate amount, and duration of the arrangement — the employer must see the full picture.",
  "vi": "Standard IV(B): sự đồng ý bằng văn bản của các bên đòi hỏi công bố bản chất, số tiền xấp xỉ và thời hạn của thỏa thuận — chủ lao động phải thấy bức tranh đầy đủ."
 },
 {
  "q": "Which of the following is a key concept of the GIPS standards? The GIPS standards:",
  "opts": [
   "Address every aspect of performance measurement",
   "Require firms to adhere to certain calculation methodologies to allow for comparability across firms",
   "Require the inclusion of all discretionary and non-discretionary segregated accounts in at least one composite"
  ],
  "ans": 1,
  "en": "Standardized calculation methodologies are the core of GIPS comparability. GIPS does NOT cover every aspect of measurement, and only actual, fee-paying, DISCRETIONARY portfolios must join a composite.",
  "vi": "Phương pháp tính toán chuẩn hóa là cốt lõi của tính so sánh được trong GIPS. GIPS KHÔNG bao phủ mọi khía cạnh đo lường, và chỉ danh mục thực, trả phí, TOÀN QUYỀN (discretionary) mới buộc phải vào composite."
 },
 {
  "q": "Joy Nash, CFA, resides in Country 1, where applicable law is less strict than the Standards. She does business in Country 2, where law is less strict than in Country 1. When doing business in Country 2, Nash must follow:",
  "opts": [
   "The Code and Standards",
   "Applicable law of Country 1",
   "Applicable law of Country 2"
  ],
  "ans": 0,
  "en": "The rule: follow the STRICTEST of applicable law and the Code and Standards. Both countries' laws are less strict → the Code and Standards govern.",
  "vi": "Quy tắc: tuân theo chuẩn NGHIÊM NHẤT giữa luật áp dụng và Code & Standards. Luật cả hai nước đều lỏng hơn → Code & Standards chi phối."
 },
 {
  "q": "Agnes Trimbach, CFA, recommends German government bonds to a client, telling him: \"The government guarantees that you will receive the promised principal and interest. In addition, interest rate fluctuations could add to your gains or cause losses.\" Has Trimbach violated the Standards?",
  "opts": [
   "No",
   "Yes, the Standard relating to misrepresentation",
   "Yes, the Standard relating to communication with clients"
  ],
  "ans": 0,
  "en": "Both statements are accurate: a sovereign issuer does promise (guarantee) its own principal and interest payments, and she explicitly disclosed the market (interest-rate) risk. Accurate, balanced communication — no violation.",
  "vi": "Cả hai câu đều chính xác: chính phủ phát hành thực sự cam kết (bảo đảm) trả gốc và lãi của trái phiếu mình, và cô đã công bố rõ rủi ro thị trường (lãi suất). Truyền đạt chính xác, cân bằng — không vi phạm."
 },
 {
  "q": "Sandra Chen, CFA, works at research firm Vega. Her group identifies a low-volatility product as a viable risk-reduction strategy and prepares a report she believes is thorough, with risks disclosed. Chen disagrees with the findings — she believes the product will be more volatile than the report suggests — but agrees to have her name on the report. Has she violated the Standards?",
  "opts": [
   "No",
   "Yes, because she failed to dissociate herself from the report",
   "Yes, because she failed to include her dissenting opinion in the report"
  ],
  "ans": 0,
  "en": "When a group conclusion has a reasonable and adequate basis, a member who personally disagrees need NOT dissociate — her name can remain. Documenting her difference of opinion is prudent but not required in the report itself.",
  "vi": "Khi kết luận của nhóm có cơ sở hợp lý và đầy đủ, thành viên bất đồng quan điểm cá nhân KHÔNG buộc phải rút tên — tên cô có thể giữ nguyên. Ghi lại ý kiến khác biệt là thận trọng nhưng không bắt buộc đưa vào báo cáo."
 },
 {
  "q": "Tomas Bo, CFA, receives an unsolicited stock order from a client. He discusses the order with his firm's analysts to determine its impact on the client's portfolio; they find the stock undervalued and suitable for many clients. Bo calls other clients to recommend the stock, then executes a single block trade for the original client and the others. Bo most likely violated the Standards:",
  "opts": [
   "Only by executing the single block trade",
   "Only by discussing unsolicited client orders with his analysts",
   "Both by executing the block trade and by discussing the orders with analysts"
  ],
  "ans": 0,
  "en": "The original client's order deserved prompt execution; delaying it to solicit other clients and bundle everyone into one block trade subordinates that client's interest. Discussing the order internally to assess portfolio impact serves the client and is permitted.",
  "vi": "Lệnh của khách ban đầu đáng lẽ phải được thực hiện ngay; trì hoãn để mời chào khách khác rồi gộp tất cả vào một block trade là đặt lợi ích của khách đó xuống dưới. Thảo luận nội bộ để đánh giá tác động danh mục là phục vụ khách hàng và được phép."
 },
 {
  "q": "Alan Quanta, CFA, provides credit analysis of high-yield bonds. His firm holds a large position in Veyron bonds, which have become hard to sell after rating downgrades. His supervisor asks him to convince the firm's institutional clients that Veyron bonds are still attractive, especially at lower prices. Quanta does not consider the bonds a buy at this level. The most appropriate action for Quanta is to:",
  "opts": [
   "Obey his supervisor's request",
   "Ignore his supervisor's request",
   "Promote the bonds with appropriate disclosures"
  ],
  "ans": 1,
  "en": "Recommending what he believes is not a buy — to offload the firm's own position — would violate independence and objectivity, loyalty to clients, and diligence. He must refuse; disclosures cannot cure a recommendation he does not believe.",
  "vi": "Khuyến nghị thứ mình không tin là đáng mua — để xả vị thế của chính công ty — vi phạm tính độc lập khách quan, lòng trung thành với khách hàng và sự cẩn trọng. Anh phải từ chối; công bố thông tin không cứu được một khuyến nghị mà chính mình không tin."
 },
 {
  "q": "To increase market interest and trading volume in a stock, an advisor buys the stock and immediately sells it without causing large price movements. The advisor then shares consensus analyst earnings estimates on social media. Has the advisor violated the Standard on market manipulation?",
  "opts": [
   "No",
   "Yes, by sharing analyst earnings estimates on social media",
   "Yes, by buying and selling the stock to increase market participants' interest and trading volume"
  ],
  "ans": 2,
  "en": "Transaction-based manipulation: trades executed to create an artificial appearance of activity distort the market even without price movement. Sharing publicly available consensus estimates is legitimate information-sharing.",
  "vi": "Thao túng bằng giao dịch: các lệnh mua bán nhằm tạo vẻ ngoài sôi động giả tạo làm méo mó thị trường dù giá không đổi. Chia sẻ ước tính đồng thuận công khai là truyền tin hợp pháp."
 },
 {
  "q": "Werner Merz, CFA, manages a short-term corporate bond fund at a subsidiary of Cygnet Bank. The bank president asks Merz to buy the bank's long-term government bonds at 100 — above market price — so the bank avoids realizing a loss, assuring him the fund can hold to maturity. Merz buys the bonds at 100. He has most likely violated the Standard(s) relating:",
  "opts": [
   "Only to suitability",
   "Only to loyalty, prudence, and care",
   "Both to suitability and to loyalty, prudence, and care"
  ],
  "ans": 2,
  "en": "Long-term government bonds don't fit a short-term corporate bond mandate (suitability), and overpaying to spare the parent bank a loss puts the bank's interest above fund investors' (loyalty, prudence, and care).",
  "vi": "Trái phiếu chính phủ dài hạn không hợp mandate quỹ trái phiếu doanh nghiệp ngắn hạn (suitability), và trả giá cao để ngân hàng mẹ né khoản lỗ là đặt lợi ích ngân hàng trên nhà đầu tư của quỹ (loyalty, prudence, care)."
 },
 {
  "q": "A member presents investment performance to potential clients. Under the Standard on performance presentation, the member is permitted to omit:",
  "opts": [
   "Only simulated results as a source of performance data",
   "Only supporting details of recommendations if the details are made available upon request",
   "Both simulated results and supporting details if made available upon request"
  ],
  "ans": 1,
  "en": "Detailed supporting information may be omitted from a presentation when it is maintained and offered on request. If simulated results ARE used, their simulated nature must be disclosed — that fact cannot be omitted.",
  "vi": "Chi tiết hỗ trợ có thể được lược khỏi bài trình bày nếu được lưu giữ và cung cấp khi yêu cầu. Nếu CÓ dùng kết quả mô phỏng thì phải công bố bản chất mô phỏng — điều đó không được lược bỏ."
 },
 {
  "q": "Maria Bendez, CFA, a well-known analyst, sends her recommendations to all firm clients but not to the public, though she believes they could affect prices. A client thanks her, saying the recommendations provide an advantage over other market participants. Has Bendez violated the Standards?",
  "opts": [
   "No",
   "Yes, the Standard relating to material nonpublic information",
   "Yes, the Standards relating to material nonpublic information and fair dealing"
  ],
  "ans": 0,
  "en": "Her own opinions and analysis are not \"inside information\" — an analyst's recommendation belongs to the firm and its clients. Distributing it to ALL clients simultaneously satisfies fair dealing; there is no duty to inform the public.",
  "vi": "Quan điểm và phân tích của chính cô không phải \"thông tin nội bộ\" — khuyến nghị của analyst thuộc về công ty và khách hàng của công ty. Gửi đồng thời cho MỌI khách hàng thỏa mãn fair dealing; không có nghĩa vụ thông báo cho công chúng."
 },
 {
  "q": "Hina Khan, CFA, works at ABC Bank and refers clients to other business units of the bank when they need such services. She does not disclose the referral fee arrangement she has with those units, as it is an arrangement within the bank. Has Khan violated the Standards?",
  "opts": [
   "No",
   "Yes, the Standard relating to fair dealing",
   "Yes, the Standard relating to referral fees"
  ],
  "ans": 2,
  "en": "Standard VI(C) requires disclosing any compensation for referrals — including intra-firm arrangements — so clients can assess the recommendation's objectivity and full cost.",
  "vi": "Standard VI(C) yêu cầu công bố mọi khoản thù lao cho việc giới thiệu — kể cả thỏa thuận nội bộ trong cùng ngân hàng — để khách hàng đánh giá được tính khách quan và chi phí đầy đủ."
 },
 {
  "q": "John Pedersen, CFA, writes in promotional material — Statement 1: \"I passed all three CFA Program examinations in three consecutive years.\" Statement 2: \"Being a CFA charterholder, I am among the elite of investment professionals.\" Has Pedersen violated the Standard(s)?",
  "opts": [
   "No",
   "Yes, by making Statement 1 only",
   "Yes, by making Statement 2 only"
  ],
  "ans": 2,
  "en": "Stating the fact of passing three exams in three years is permitted. Claiming charterholders are \"among the elite\" implies superior ability from the designation — an exaggerated, prohibited use of the CFA marks.",
  "vi": "Nêu sự thật đã đỗ ba kỳ thi trong ba năm liên tiếp là được phép. Tuyên bố charterholder \"thuộc giới tinh hoa\" hàm ý năng lực vượt trội nhờ danh hiệu — cách dùng chứng chỉ CFA phóng đại, bị cấm."
 },
 {
  "q": "Once a violation by an employee is discovered, a supervisor should:",
  "opts": [
   "Avoid increasing supervision of the wrongdoer until the investigation is concluded",
   "Place appropriate limitations on the wrongdoer pending the outcome of the investigation",
   "Rely on the employee's statement about the extent of the violation if given written assurance it will not reoccur"
  ],
  "ans": 1,
  "en": "Recommended procedure under IV(C): respond promptly, investigate, and RESTRICT the employee's activities while the investigation runs. Relying on promises or delaying supervision fails the duty.",
  "vi": "Quy trình khuyến nghị theo IV(C): phản ứng ngay, điều tra, và GIỚI HẠN hoạt động của nhân viên trong khi điều tra. Tin vào lời hứa hay trì hoãn giám sát là không tròn trách nhiệm."
 },
 {
  "q": "Megan Chandra, CFA, allocates an oversubscribed IPO suitable for all accounts she manages, but does not allocate it to her mother's standard fee-paying account or her husband's non-fee-paying account. Has she violated the Standards?",
  "opts": [
   "No",
   "Yes, by not allocating the IPO to her mother's account",
   "Yes, by not allocating the IPO to both her husband's and her mother's accounts"
  ],
  "ans": 1,
  "en": "Family accounts that pay standard fees are CLIENTS and must not be disadvantaged — her mother's account deserved its allocation. The husband's non-fee-paying account counts as a beneficial (personal) account, which may be excluded from a hot IPO.",
  "vi": "Tài khoản người thân trả phí như khách thường là KHÁCH HÀNG và không được thiệt thòi — tài khoản của mẹ cô xứng đáng được phân bổ. Tài khoản không thu phí của chồng được xem là tài khoản hưởng lợi (cá nhân), có thể loại khỏi IPO nóng."
 },
 {
  "q": "The Standard on communication with clients and prospective clients requires members to inform which of the following of significant risks and limitations of the investment decision-making process?",
  "opts": [
   "Clients only",
   "Prospective clients only",
   "Both clients and prospective clients"
  ],
  "ans": 2,
  "en": "Standard V(B) applies to clients AND prospects alike — the name of the standard says so, and risk disclosure is central to informed decisions for both.",
  "vi": "Standard V(B) áp dụng cho cả khách hàng LẪN khách hàng tiềm năng — ngay tên chuẩn mực đã nói vậy, và công bố rủi ro là cốt lõi để cả hai ra quyết định có hiểu biết."
 },
 {
  "q": "According to the CFA Institute Code of Ethics, members are responsible for:",
  "opts": [
   "Monitoring their firm's compliance with the Standards",
   "Ensuring the professional competence of employees in their firm",
   "Promoting the integrity of and upholding the rules governing capital markets"
  ],
  "ans": 2,
  "en": "Promoting market integrity and upholding capital-market rules is a component of the Code of Ethics itself. Firm-wide monitoring and others' competence are not personal Code obligations.",
  "vi": "Thúc đẩy tính chính trực và tôn trọng luật lệ thị trường vốn là một cấu phần của chính Code of Ethics. Giám sát toàn công ty hay năng lực của người khác không phải nghĩa vụ cá nhân trong Code."
 },
 {
  "q": "Which of the following is an objective of the GIPS standards?",
  "opts": [
   "Establish financial regulation on a global basis",
   "Promote investor interests and instill investor confidence",
   "Encourage the development of national standards for calculating investment performance"
  ],
  "ans": 1,
  "en": "GIPS aims to protect investors and build confidence through comparable, fair performance presentation. It is voluntary — not regulation — and it promotes ONE global standard, not national variants.",
  "vi": "GIPS nhằm bảo vệ nhà đầu tư và xây niềm tin qua trình bày hiệu quả công bằng, so sánh được. Nó tự nguyện — không phải luật — và thúc đẩy MỘT chuẩn toàn cầu, không phải các chuẩn quốc gia riêng."
 },
 {
  "q": "Which statement about fintech applications is most accurate? They:",
  "opts": [
   "Can perform tasks at levels surpassing human capabilities",
   "Eliminate the need for humans in providing investment advice to retail investors",
   "Use models that outperform traditional statistical models in revealing linear relationships"
  ],
  "ans": 0,
  "en": "Machine learning can exceed human capability on specific tasks (pattern detection in vast data). Humans remain in the advice chain, and ML's edge is NON-linear relationships — traditional statistics handle linear ones well.",
  "vi": "Machine learning có thể vượt năng lực con người ở các tác vụ cụ thể (nhận diện mẫu trong dữ liệu khổng lồ). Con người vẫn hiện diện trong chuỗi tư vấn, và lợi thế của ML là quan hệ PHI tuyến — thống kê truyền thống xử lý quan hệ tuyến tính đã tốt."
 },
 {
  "q": "Market 1: many sellers, no non-price competition. Market 2: few sellers, strong non-price competition. Market 3: many sellers, strong non-price competition. Which market is most likely monopolistically competitive?",
  "opts": [
   "Market 1",
   "Market 2",
   "Market 3"
  ],
  "ans": 2,
  "en": "Monopolistic competition = MANY sellers plus differentiation through advertising, branding, and features (non-price competition). Market 1 is perfect competition; Market 2 is an oligopoly.",
  "vi": "Cạnh tranh độc quyền = NHIỀU người bán cộng khác biệt hóa qua quảng cáo, thương hiệu, tính năng (cạnh tranh phi giá). Market 1 là cạnh tranh hoàn hảo; Market 2 là độc quyền nhóm."
 },
 {
  "q": "With respect to ESG analysis, which of the following is most likely categorized as a social issue?",
  "opts": [
   "Deforestation",
   "Labor standards",
   "Bribery and corruption"
  ],
  "ans": 1,
  "en": "Labor standards concern people — the S pillar. Deforestation is environmental; bribery and corruption belong to governance.",
  "vi": "Chuẩn mực lao động liên quan đến con người — trụ cột S. Phá rừng thuộc môi trường (E); hối lộ và tham nhũng thuộc quản trị (G)."
 },
 {
  "q": "Tiered pricing is best described as:",
  "opts": [
   "Charging different prices at different times",
   "Charging different prices to different buyers",
   "Combining a low price on equipment with high-margin pricing on repeat-purchase consumables"
  ],
  "ans": 1,
  "en": "Tiered pricing charges different buyers different prices, typically by volume tier. Option A describes dynamic pricing; option C is the razor-and-blades (captive product) model.",
  "vi": "Tiered pricing tính giá khác nhau cho người mua khác nhau, thường theo bậc khối lượng. Phương án A là định giá linh hoạt theo thời điểm; phương án C là mô hình dao cạo–lưỡi dao (sản phẩm ràng buộc)."
 },
 {
  "q": "Which best describes a function of the International Bank for Reconstruction and Development?",
  "opts": [
   "Provides low interest rate loans to developing countries",
   "Regulates cross-border trade relationships on a global scale",
   "Lends foreign currencies on a temporary basis to address balance of payment issues"
  ],
  "ans": 0,
  "en": "The IBRD (World Bank) finances development with low-cost loans and grants. Trade rules belong to the WTO; temporary balance-of-payments lending is the IMF.",
  "vi": "IBRD (World Bank) tài trợ phát triển bằng khoản vay lãi thấp và viện trợ. Luật thương mại thuộc WTO; cho vay tạm thời xử lý cán cân thanh toán là IMF."
 },
 {
  "q": "As a result of an inventory write-down, which financial ratio most likely decreases?",
  "opts": [
   "Quick ratio",
   "Current ratio",
   "Payables turnover ratio"
  ],
  "ans": 1,
  "en": "The write-down shrinks inventory, cutting current assets → current ratio falls. The quick ratio excludes inventory (unchanged), and payables turnover (purchases or COGS/payables) would rise, not fall, as COGS grows.",
  "vi": "Ghi giảm làm teo hàng tồn kho, kéo tài sản ngắn hạn xuống → current ratio giảm. Quick ratio loại trừ tồn kho (không đổi), còn vòng quay phải trả (COGS/phải trả) sẽ tăng chứ không giảm khi COGS tăng."
 },
 {
  "q": "Which of the following ranks geopolitical systems from the LOWEST to the HIGHEST level of globalization?",
  "opts": [
   "Autarky, bilateralism, hegemony",
   "Autarky, hegemony, bilateralism",
   "Bilateralism, hegemony, autarky"
  ],
  "ans": 0,
  "en": "Autarky = national self-reliance (least globalized); bilateralism = country-by-country engagement; hegemony = deep engagement with the world economy on the hegemon's terms (most globalized of the three).",
  "vi": "Autarky = tự cung tự cấp quốc gia (ít toàn cầu hóa nhất); bilateralism = hợp tác từng cặp nước; hegemony = tham gia sâu vào kinh tế thế giới theo luật của bá quyền (toàn cầu hóa nhất trong ba)."
 },
 {
  "q": "Cost of equity if no debt is issued 12%; cost of debt 6%; debt is 30% of the capital structure. With no taxes, the WACC under Modigliani–Miller Proposition II is closest to:",
  "opts": [
   "10.2%",
   "12.0%",
   "14.6%"
  ],
  "ans": 1,
  "en": "MM without taxes: capital structure is irrelevant — WACC stays pinned at the unlevered cost of capital, 12%. Cheaper debt is exactly offset by a higher levered cost of equity.",
  "vi": "MM không thuế: cấu trúc vốn không ảnh hưởng — WACC đứng yên tại chi phí vốn không đòn bẩy, 12%. Nợ rẻ hơn bị bù trừ chính xác bởi chi phí vốn chủ có đòn bẩy cao hơn."
 },
 {
  "q": "A positively skewed unimodal distribution of returns most likely has:",
  "opts": [
   "A long tail on the left side",
   "A mode that is less than its mean",
   "Frequent small gains and a few extreme losses"
  ],
  "ans": 1,
  "en": "Positive skew: mode < median < mean, with the long tail on the RIGHT — frequent small losses and a few extreme gains. Option C describes negative skew.",
  "vi": "Lệch dương: mode < median < mean, đuôi dài bên PHẢI — nhiều khoản lỗ nhỏ và vài khoản lãi cực lớn. Phương án C mô tả lệch âm."
 },
 {
  "q": "Statement 1: The IRR assumes reinvestment of cash flows at the required rate of return. Statement 2: IRR is strongly preferred when NPV and IRR rank two mutually exclusive projects differently. Statement 3: NPV is zero when IRR equals the hurdle rate. Which statement is most accurate?",
  "opts": [
   "Statement 1",
   "Statement 2",
   "Statement 3"
  ],
  "ans": 2,
  "en": "NPV discounts at the hurdle rate, and when that rate equals the IRR, NPV = 0 by definition. IRR assumes reinvestment at the IRR itself (S1 wrong), and NPV — not IRR — governs conflicting rankings (S2 wrong).",
  "vi": "NPV chiết khấu tại hurdle rate, và khi mức đó bằng IRR thì NPV = 0 theo định nghĩa. IRR giả định tái đầu tư tại chính IRR (S1 sai), và NPV — chứ không phải IRR — quyết định khi xếp hạng mâu thuẫn (S2 sai)."
 },
 {
  "q": "During the slowdown phase of the business cycle:",
  "opts": [
   "Inflation decelerates",
   "Business halts new orders",
   "Business slows its rate of hiring"
  ],
  "ans": 2,
  "en": "In the slowdown, growth decelerates: firms slow hiring and trim overtime. Inflation typically still ACCELERATES at this late stage; orders slow rather than halt.",
  "vi": "Trong pha slowdown, tăng trưởng chậm dần: doanh nghiệp giảm tốc tuyển dụng và cắt tăng ca. Lạm phát ở pha muộn này thường vẫn TĂNG TỐC; đơn hàng chậm lại chứ không dừng hẳn."
 },
 {
  "q": "Costs incurred during the research phase £10m; development costs incurred after reaching technical feasibility £15m. If all capitalization criteria are met (IFRS), the maximum amount eligible for capitalization is:",
  "opts": [
   "£10m",
   "£15m",
   "£25m"
  ],
  "ans": 1,
  "en": "IFRS: research costs are ALWAYS expensed; development costs may be capitalized once technical feasibility and the other criteria are demonstrated → £15m.",
  "vi": "IFRS: chi phí nghiên cứu LUÔN được ghi nhận vào chi phí; chi phí phát triển được vốn hóa khi chứng minh tính khả thi kỹ thuật và các tiêu chí khác → £15tr."
 },
 {
  "q": "Target capital structure is often expressed using book values of equity and debt because:",
  "opts": [
   "Capital structure policy is aligned to measures used by third parties",
   "Market values can fluctuate substantially and frequently impact the appropriate level of borrowing",
   "For management, the primary concern is capital invested in the company, not by the company"
  ],
  "ans": 1,
  "en": "Book values give management a stable yardstick: market values swing with sentiment, which would make the \"target\" chase the market rather than guide financing decisions.",
  "vi": "Giá trị sổ sách cho ban điều hành một thước đo ổn định: giá trị thị trường dao động theo tâm lý, khiến \"mục tiêu\" phải chạy theo thị trường thay vì dẫn dắt quyết định tài trợ."
 },
 {
  "q": "Which ratio is most appropriate when assessing a company's ability to meet its LONG-TERM debt obligations?",
  "opts": [
   "Current ratio",
   "Defensive interval ratio",
   "Financial leverage ratio"
  ],
  "ans": 2,
  "en": "Long-term debt capacity is a SOLVENCY question — leverage ratios answer it. The current and defensive interval ratios measure short-term liquidity.",
  "vi": "Khả năng trả nợ dài hạn là câu hỏi về SOLVENCY — các tỷ số đòn bẩy trả lời nó. Current ratio và defensive interval đo thanh khoản ngắn hạn."
 },
 {
  "q": "A bank account has a stated annual rate of 3.5% with quarterly compounding. If the current value is $100,000, the future value two years from now is closest to:",
  "opts": [
   "$107,123",
   "$107,207",
   "$107,218"
  ],
  "ans": 2,
  "en": "FV = 100,000 × (1 + 0.035/4)⁸ = 100,000 × 1.00875⁸ = $107,218 — eight quarterly periods at 0.875%.",
  "vi": "FV = 100.000 × (1 + 0,035/4)⁸ = 100.000 × 1,00875⁸ = $107.218 — tám kỳ quý với 0,875% mỗi kỳ."
 },
 {
  "q": "Total assets: Year 2 = 90, Year 1 = 100. Total liabilities: Year 2 = 36, Year 1 = 40. Using vertical common-size balance sheet analysis, total liabilities in Year 2 are closest to:",
  "opts": [
   "40%",
   "67%",
   "90%"
  ],
  "ans": 0,
  "en": "Vertical common-size scales every item by TOTAL ASSETS of the same year: 36/90 = 40%. (67% would be liabilities/equity — a different ratio.)",
  "vi": "Common-size dọc chia mọi khoản mục cho TỔNG TÀI SẢN cùng năm: 36/90 = 40%. (67% là nợ/vốn chủ — một tỷ số khác.)"
 },
 {
  "q": "Cash: Y1 = 20, Y2 = 20. Receivables: Y1 = 50, Y2 = 60. Highly marketable short-term securities: Y1 = 50, Y2 = 40. Inventories: Y1 = 70, Y2 = 80. Current liabilities: 100 both years. From Year 1 to Year 2, the cash ratio:",
  "opts": [
   "Decreased",
   "Remained the same",
   "Increased"
  ],
  "ans": 0,
  "en": "Cash ratio = (cash + marketable securities)/current liabilities: Y1 = (20 + 50)/100 = 0.70 → Y2 = (20 + 40)/100 = 0.60. Receivables and inventories never enter the cash ratio.",
  "vi": "Cash ratio = (tiền + chứng khoán thanh khoản)/nợ ngắn hạn: N1 = (20 + 50)/100 = 0,70 → N2 = (20 + 40)/100 = 0,60. Phải thu và tồn kho không bao giờ vào cash ratio."
 },
 {
  "q": "Under US GAAP, which of the following should be reported separately from continuing operations on the income statement?",
  "opts": [
   "Restructuring charges",
   "Gain or loss from sale of an asset",
   "Results of discontinued operations"
  ],
  "ans": 2,
  "en": "Discontinued operations are presented net of tax BELOW continuing operations. Restructuring charges and asset-sale gains/losses stay inside continuing operations (as unusual items).",
  "vi": "Hoạt động bị ngừng được trình bày sau thuế BÊN DƯỚI hoạt động liên tục. Chi phí tái cấu trúc và lãi/lỗ bán tài sản vẫn nằm trong hoạt động liên tục (khoản mục bất thường)."
 },
 {
  "q": "USD/EUR spot rate 1.1800; expected spot rate in one year 1.1650 (USD per 1 EUR). The expected change in the value of the dollar relative to the euro is closest to a(n):",
  "opts": [
   "Depreciation of 1.27%",
   "Appreciation of 1.27%",
   "Appreciation of 1.29%"
  ],
  "ans": 2,
  "en": "Fewer dollars per euro → the dollar strengthens. Measure the USD's change by inverting: EUR/USD goes from 1/1.1800 to 1/1.1650 → (1.1800/1.1650) − 1 = +1.29% appreciation.",
  "vi": "Ít đô hơn cho mỗi euro → đô mạnh lên. Đo mức thay đổi của USD bằng cách nghịch đảo: EUR/USD từ 1/1,1800 lên 1/1,1650 → (1,1800/1,1650) − 1 = +1,29% tăng giá."
 },
 {
  "q": "A central bank decides to lower interest rates. To carry out this policy, it will most likely:",
  "opts": [
   "Sell securities",
   "Buy securities",
   "Increase required reserve requirements"
  ],
  "ans": 1,
  "en": "Open-market PURCHASES inject reserves into banks, pushing short-term rates down toward the new target. Selling securities or raising reserve requirements would tighten instead.",
  "vi": "MUA chứng khoán trên thị trường mở bơm dự trữ vào ngân hàng, đẩy lãi suất ngắn hạn xuống mục tiêu mới. Bán chứng khoán hay nâng dự trữ bắt buộc là thắt chặt, ngược chiều."
 },
 {
  "q": "Cash €200m, short-term marketable investments €300m, receivables €1,000m, inventory €1,500m, current liabilities €5,000m. The quick ratio is:",
  "opts": [
   "0.10",
   "0.30",
   "0.50"
  ],
  "ans": 1,
  "en": "Quick ratio = (cash + marketable investments + receivables)/current liabilities = (200 + 300 + 1,000)/5,000 = 0.30. Inventory is excluded — that is the whole point of \"quick.\"",
  "vi": "Quick ratio = (tiền + đầu tư thanh khoản + phải thu)/nợ ngắn hạn = (200 + 300 + 1.000)/5.000 = 0,30. Tồn kho bị loại — đó chính là ý nghĩa của chữ \"quick.\""
 },
 {
  "q": "Proxy voting is best defined as a means for:",
  "opts": [
   "A would-be acquirer to gain control",
   "Activist shareholders to pressure management",
   "Shareholders voting without attending a meeting in person"
  ],
  "ans": 2,
  "en": "A proxy authorizes another party to cast your vote — participation without physical attendance. Acquirers use tender offers or proxy FIGHTS; the mechanism itself is simply remote voting.",
  "vi": "Proxy ủy quyền cho bên khác bỏ phiếu thay bạn — tham gia mà không cần có mặt. Bên thâu tóm dùng chào mua công khai hoặc proxy FIGHT; bản thân cơ chế chỉ là bỏ phiếu từ xa."
 },
 {
  "q": "The NZD/EUR spot rate is 1.5453. If the 3-month forward discount is 24 points, the 3-month forward rate is closest to:",
  "opts": [
   "1.54290",
   "1.54770",
   "1.54901"
  ],
  "ans": 0,
  "en": "Points scale by 10⁻⁴ for four-decimal quotes, and a DISCOUNT subtracts: F = 1.5453 − 0.0024 = 1.54290.",
  "vi": "Điểm kỳ hạn nhân 10⁻⁴ với báo giá bốn chữ số thập phân, và DISCOUNT thì trừ đi: F = 1,5453 − 0,0024 = 1,54290."
 },
 {
  "q": "Variance of X = 9; variance of Y = 15; covariance of Y and X = 12. The slope coefficient of the simple linear regression of Y on X is closest to:",
  "opts": [
   "0.80",
   "1.03",
   "1.33"
  ],
  "ans": 2,
  "en": "b₁ = Cov(X,Y)/Var(X) = 12/9 = 1.33. The variance of Y never enters the slope formula — it is the classic distractor.",
  "vi": "b₁ = Cov(X,Y)/Var(X) = 12/9 = 1,33. Phương sai của Y không bao giờ vào công thức hệ số góc — đó là mồi nhử kinh điển."
 },
 {
  "q": "The third quintile corresponds to the:",
  "opts": [
   "40th percentile",
   "50th percentile",
   "60th percentile"
  ],
  "ans": 2,
  "en": "Quintiles cut the data into fifths of 20% each: the third quintile boundary sits at 3 × 20 = the 60th percentile.",
  "vi": "Ngũ phân vị chia dữ liệu thành năm phần 20%: ranh giới ngũ phân vị thứ ba nằm tại 3 × 20 = phân vị 60."
 },
 {
  "q": "Goodness of fit measures derived from analysis of variance (ANOVA) data most likely include the:",
  "opts": [
   "Coefficient of variation",
   "Regression coefficients",
   "Standard error of the estimate"
  ],
  "ans": 2,
  "en": "From the ANOVA table come R² (= RSS/TSS) and the SEE (= √[SSE/(n−2)]) — both fit measures. Regression coefficients come from estimation, not ANOVA, and CV is a descriptive statistic.",
  "vi": "Từ bảng ANOVA rút ra R² (= RSS/TSS) và SEE (= √[SSE/(n−2)]) — cả hai đo độ khớp. Hệ số hồi quy đến từ bước ước lượng, không phải ANOVA, còn CV là thống kê mô tả."
 },
 {
  "q": "PP&E may be reported above its historical cost on the balance sheet under:",
  "opts": [
   "The cost model only",
   "The revaluation model only",
   "Both the cost model and the revaluation model"
  ],
  "ans": 1,
  "en": "Only the revaluation model (IFRS) can carry PP&E at fair value ABOVE historical cost. The cost model caps carrying value at cost less depreciation and impairment.",
  "vi": "Chỉ mô hình đánh giá lại (IFRS) mới cho phép ghi PP&E theo giá trị hợp lý CAO HƠN nguyên giá. Mô hình giá gốc chặn giá trị ghi sổ tại nguyên giá trừ khấu hao và suy giảm."
 },
 {
  "q": "Market value of equity $64m, cost of equity 14%; market value of debt $20m, before-tax cost of debt 5%; marginal tax rate 30%. The company's WACC is closest to:",
  "opts": [
   "11.02%",
   "11.50%",
   "11.86%"
  ],
  "ans": 1,
  "en": "Weights: E = 64/84 = 76.19%, D = 20/84 = 23.81%. WACC = 0.7619 × 14% + 0.2381 × 5% × (1 − 0.30) = 10.67% + 0.83% = 11.50%.",
  "vi": "Trọng số: E = 64/84 = 76,19%, D = 20/84 = 23,81%. WACC = 0,7619 × 14% + 0,2381 × 5% × (1 − 0,30) = 10,67% + 0,83% = 11,50%."
 },
 {
  "q": "Sales $1,200m growing 4%; cost of sales $300m growing 8%. The forecast gross profit margin change is closest to a(n):",
  "opts": [
   "Decrease of 4%",
   "Decrease of 1%",
   "Increase of 1%"
  ],
  "ans": 1,
  "en": "Current margin = (1,200 − 300)/1,200 = 75.0%. Forecast: sales 1,248, COGS 324 → (1,248 − 324)/1,248 = 74.04%. Costs outgrowing sales shave about 1 percentage point off the margin.",
  "vi": "Biên hiện tại = (1.200 − 300)/1.200 = 75,0%. Dự phóng: doanh thu 1.248, giá vốn 324 → (1.248 − 324)/1.248 = 74,04%. Chi phí tăng nhanh hơn doanh thu bào mất khoảng 1 điểm phần trăm biên."
 },
 {
  "q": "Five annual tuition payments of $25,000 begin exactly 20 years from today. At a stated annual rate of 4%, the required investment today is closest to:",
  "opts": [
   "$50,794",
   "$52,826",
   "$54,939"
  ],
  "ans": 1,
  "en": "Value the ordinary annuity one period before the first payment, at t = 19: 25,000 × [1 − 1.04⁻⁵]/0.04 = 111,296. Discount 19 years: 111,296/1.04¹⁹ = $52,826.",
  "vi": "Định giá niên kim thường lùi một kỳ trước khoản đầu tiên, tại t = 19: 25.000 × [1 − 1,04⁻⁵]/0,04 = 111.296. Chiết khấu 19 năm: 111.296/1,04¹⁹ = $52.826."
 },
 {
  "q": "Which company would most likely have the LOWEST financial reporting quality, other things equal?",
  "opts": [
   "A company reporting significant profits due to a favorable exchange rate movement",
   "A company reporting the results of two different segments as a combined entity",
   "A company providing high-quality, decision-useful GAAP information but delaying its reports"
  ],
  "ans": 1,
  "en": "Combining distinct segments hides the composition of performance — decision-useful information is obscured. FX gains are real (earnings quality, not reporting quality), and late-but-excellent reports still convey high-quality information.",
  "vi": "Gộp các mảng kinh doanh khác nhau che giấu cấu trúc kết quả — thông tin hữu ích cho quyết định bị mờ đi. Lãi tỷ giá là có thật (chất lượng lợi nhuận, không phải chất lượng báo cáo), còn báo cáo muộn nhưng xuất sắc vẫn truyền tải thông tin chất lượng cao."
 },
 {
  "q": "In which business structure do owners share ALL risk and business liability?",
  "opts": [
   "Corporations",
   "Limited partnerships",
   "General partnerships"
  ],
  "ans": 2,
  "en": "General partners bear unlimited joint liability for the business. Corporations shield shareholders; limited partnerships shield the LIMITED partners.",
  "vi": "Thành viên hợp danh chịu trách nhiệm vô hạn và liên đới cho doanh nghiệp. Công ty cổ phần che chắn cổ đông; hợp danh hữu hạn che chắn các thành viên GÓP VỐN."
 },
 {
  "q": "Cash / short-term instruments / receivables / inventory / current liabilities — Company 1: 2.5/4.0/2.0/1.0/5.0; Company 2: 2.0/1.0/2.0/1.0/2.5; Company 3: 1.5/1.0/1.0/3.0/2.0. Based on the quick ratio, which company exhibits the LOWEST liquidity risk?",
  "opts": [
   "Company 1",
   "Company 2",
   "Company 3"
  ],
  "ans": 1,
  "en": "Quick = (cash + instruments + receivables)/CL: C1 = 8.5/5.0 = 1.70; C2 = 5.0/2.5 = 2.00; C3 = 3.5/2.0 = 1.75. Highest quick ratio → Company 2 carries the least liquidity risk.",
  "vi": "Quick = (tiền + công cụ + phải thu)/nợ ngắn hạn: C1 = 8,5/5,0 = 1,70; C2 = 5,0/2,5 = 2,00; C3 = 3,5/2,0 = 1,75. Quick ratio cao nhất → Company 2 rủi ro thanh khoản thấp nhất."
 },
 {
  "q": "For a company paying preferred dividends, the components needed to compute basic EPS are net income:",
  "opts": [
   "And the weighted average number of common shares outstanding",
   "Preferred dividends, and the weighted average number of common shares outstanding",
   "Preferred dividends, additional shares if preferred is converted, and the weighted average number of common shares"
  ],
  "ans": 1,
  "en": "Basic EPS = (NI − preferred dividends)/weighted average common shares. Conversion effects belong to DILUTED EPS only.",
  "vi": "Basic EPS = (LNST − cổ tức ưu đãi)/bình quân gia quyền cổ phiếu phổ thông. Hiệu ứng chuyển đổi chỉ thuộc về DILUTED EPS."
 },
 {
  "q": "In monopolistically competitive markets, economic profits:",
  "opts": [
   "Cannot be earned",
   "Can be earned in the short run only",
   "Can be earned in the short run and in the long run"
  ],
  "ans": 1,
  "en": "Low barriers do the work: short-run profits attract entrants whose close substitutes flatten each firm's demand until economic profit reaches zero in the long run.",
  "vi": "Rào cản thấp làm hết mọi việc: lợi nhuận ngắn hạn hút người gia nhập, các sản phẩm thay thế gần của họ làm phẳng đường cầu từng công ty cho đến khi lợi nhuận kinh tế về 0 trong dài hạn."
 },
 {
  "q": "Year 2: total debt ¥2,300m, equity ¥17,000m, net income ¥375m, interest ¥200m, taxes ¥125m. Year 1 ratios: debt-to-capital 12.7%, interest coverage 2.9. Compared with Year 1, the company's solvency has:",
  "opts": [
   "Deteriorated because both ratios have weakened",
   "Remained the same",
   "Improved because both ratios have strengthened"
  ],
  "ans": 2,
  "en": "Y2 debt/capital = 2,300/(2,300 + 17,000) = 11.9% (down from 12.7% — better). Y2 coverage = EBIT/interest = (375 + 125 + 200)/200 = 3.5 (up from 2.9 — better). Both moved the right way.",
  "vi": "N2 nợ/vốn = 2.300/(2.300 + 17.000) = 11,9% (giảm từ 12,7% — tốt hơn). N2 bao phủ lãi vay = EBIT/lãi = (375 + 125 + 200)/200 = 3,5 (tăng từ 2,9 — tốt hơn). Cả hai đều chuyển đúng hướng."
 },
 {
  "q": "In hypothesis testing, the critical value is determined by the:",
  "opts": [
   "p-value",
   "Sample's mean",
   "Level of significance"
  ],
  "ans": 2,
  "en": "Choose α, and the critical value follows from the test statistic's distribution. The p-value is computed FROM the data and compared against α — it doesn't set the critical value.",
  "vi": "Chọn α, giá trị tới hạn suy ra từ phân phối của thống kê kiểm định. p-value được tính TỪ dữ liệu và đem so với α — nó không quyết định giá trị tới hạn."
 },
 {
  "q": "If the prices of tech stocks usually rise when interest rates fall, the correlation between the two variables is most likely:",
  "opts": [
   "Negative",
   "Zero",
   "Positive"
  ],
  "ans": 0,
  "en": "The variables move in opposite directions — one falls as the other rises — which is precisely a negative correlation.",
  "vi": "Hai biến chuyển động ngược chiều — cái này giảm khi cái kia tăng — chính xác là tương quan âm."
 },
 {
  "q": "Interest payable DECREASED during the fiscal year. Compared with cash interest payments made, interest expense is most likely:",
  "opts": [
   "Lower",
   "The same",
   "Higher"
  ],
  "ans": 0,
  "en": "A falling payable means the company paid down more than it accrued: cash paid = expense + decrease in payable → expense < cash paid.",
  "vi": "Khoản phải trả giảm nghĩa là công ty trả nhiều hơn phần trích trong kỳ: tiền trả = chi phí + mức giảm phải trả → chi phí < tiền trả."
 },
 {
  "q": "Year-end prices for a non-dividend stock bought at end of Year 1, sold at end of Year 3: €6, €10, €12. Which return is the largest?",
  "opts": [
   "The geometric mean annual return",
   "The arithmetic mean annual return",
   "The two-year holding period return"
  ],
  "ans": 2,
  "en": "HPR spans BOTH years uncompounded into an annual figure: 12/6 − 1 = 100%. Annualized measures are far smaller: arithmetic mean = (66.7% + 20%)/2 = 43.3%; geometric = √2 − 1 = 41.4%.",
  "vi": "HPR gộp CẢ hai năm chưa quy về năm: 12/6 − 1 = 100%. Các thước đo năm hóa nhỏ hơn nhiều: trung bình cộng = (66,7% + 20%)/2 = 43,3%; trung bình nhân = √2 − 1 = 41,4%."
 },
 {
  "q": "A company makes all sales on credit. Under converged revenue recognition standards, a CONTRACT ASSET is most likely recognized when:",
  "opts": [
   "Goods are delivered and payment is received",
   "Payment is received in advance of transferring the goods",
   "Revenue is recognized on some performance obligations but the right to bill awaits others"
  ],
  "ans": 2,
  "en": "A contract asset arises when revenue has been earned on satisfied obligations but invoicing is conditional on completing remaining obligations. Advance payment creates a contract LIABILITY; delivery-plus-payment leaves nothing on the balance sheet.",
  "vi": "Tài sản hợp đồng xuất hiện khi doanh thu đã ghi nhận trên nghĩa vụ hoàn thành nhưng quyền xuất hóa đơn còn chờ các nghĩa vụ còn lại. Nhận tiền trước tạo NỢ hợp đồng; giao hàng kèm thu tiền thì không để lại gì trên bảng cân đối."
 },
 {
  "q": "Which statement about the financial reporting of defined contribution pension plans is correct?",
  "opts": [
   "The only balance sheet impact from contributions is on an asset account",
   "Company contributions to the plan are treated as an operating cash flow",
   "DC plans require several assumptions to estimate pension obligations"
  ],
  "ans": 1,
  "en": "DC contributions are expensed and flow out as operating cash. The company's obligation ends with the contribution — no actuarial assumptions (that burden belongs to DB plans).",
  "vi": "Đóng góp DC ghi vào chi phí và chảy ra dưới dạng dòng tiền hoạt động. Nghĩa vụ của công ty kết thúc cùng khoản đóng — không cần giả định actuarial (gánh nặng đó thuộc về DB)."
 },
 {
  "q": "Line items can be expressed as a percentage of net revenue on which common-size financial statements?",
  "opts": [
   "The income statement only",
   "The statement of cash flows only",
   "Both the income statement and the statement of cash flows"
  ],
  "ans": 2,
  "en": "Revenue-scaling works for both: the income statement conventionally, and the cash flow statement in one of its common-size formats (the other scales by total inflows/outflows).",
  "vi": "Chia theo doanh thu áp dụng cho cả hai: báo cáo KQKD theo thông lệ, và báo cáo lưu chuyển tiền tệ trong một dạng common-size phổ biến (dạng còn lại chia theo tổng dòng vào/ra)."
 },
 {
  "q": "Annual returns on a stock: 5%, −2%, 3%, 8%. With an annual target return of 4%, the sample target semideviation is closest to:",
  "opts": [
   "3.0%",
   "3.5%",
   "4.2%"
  ],
  "ans": 1,
  "en": "Below-target years: −2 (shortfall 6) and 3 (shortfall 1). Sum of squares = 36 + 1 = 37; divide by n − 1 = 3 → 12.33; √12.33 = 3.5%.",
  "vi": "Các năm dưới mục tiêu: −2 (hụt 6) và 3 (hụt 1). Tổng bình phương = 36 + 1 = 37; chia n − 1 = 3 → 12,33; √12,33 = 3,5%."
 },
 {
  "q": "A manufacturing company invests in the maintenance of its IT hardware and software. This best describes a(n):",
  "opts": [
   "Expansion project",
   "Going concern project",
   "Innovation opportunity"
  ],
  "ans": 1,
  "en": "Maintenance capex sustains existing operations — the definition of a going concern project. Expansion grows capacity; innovation creates new products or processes.",
  "vi": "Capex bảo trì duy trì hoạt động hiện có — đúng định nghĩa dự án going concern. Mở rộng làm tăng công suất; đổi mới tạo sản phẩm hay quy trình mới."
 },
 {
  "q": "An IFRS retailer holds 100 chairs bought at $200 each. The supplier's price has dropped to $160. The retailer expects to sell at $180 with free shipping costing it $10 per chair. The total carrying amount of the chairs is closest to:",
  "opts": [
   "$16,000",
   "$17,000",
   "$18,000"
  ],
  "ans": 1,
  "en": "IFRS carries inventory at the lower of cost and NET REALIZABLE VALUE = selling price − costs to sell = 180 − 10 = 170 < 200 cost → 100 × 170 = $17,000. The supplier's replacement price matters under US GAAP's old market rule, not IFRS.",
  "vi": "IFRS ghi tồn kho theo mức thấp hơn giữa giá gốc và GIÁ TRỊ THUẦN CÓ THỂ THỰC HIỆN = giá bán − chi phí bán = 180 − 10 = 170 < giá gốc 200 → 100 × 170 = $17.000. Giá nhập thay thế của nhà cung cấp chỉ liên quan đến quy tắc cũ của US GAAP, không phải IFRS."
 },
 {
  "q": "Which statement is most accurate? The role of financial reporting is to:",
  "opts": [
   "Forecast future net income and cash flow",
   "Value a security for making investment decisions",
   "Provide information about a company's performance, financial position, and changes in financial position"
  ],
  "ans": 2,
  "en": "Reporting supplies the raw information; forecasting and valuation are the ANALYST'S job built on top of it.",
  "vi": "Báo cáo tài chính cung cấp thông tin thô; dự phóng và định giá là việc của NHÀ PHÂN TÍCH xây bên trên."
 },
 {
  "q": "Which inventory disclosure is required under BOTH IFRS and US GAAP?",
  "opts": [
   "Events leading to a reversal of a write-down",
   "The amount of any reversal of any write-down",
   "The amount of any write-down recognized as an expense"
  ],
  "ans": 2,
  "en": "Both frameworks disclose write-down expense. Reversals exist only under IFRS — US GAAP prohibits them, so reversal disclosures cannot be common ground.",
  "vi": "Cả hai khuôn khổ đều công bố chi phí ghi giảm. Hoàn nhập chỉ tồn tại theo IFRS — US GAAP cấm, nên các công bố về hoàn nhập không thể là điểm chung."
 },
 {
  "q": "The principal tool used to align the interests of management and shareholders is:",
  "opts": [
   "Regulation",
   "Proxy voting",
   "Compensation"
  ],
  "ans": 2,
  "en": "Remuneration design — equity awards, options, performance-linked pay — ties managers' wealth to shareholder outcomes. Regulation and voting are external checks, not the principal alignment tool.",
  "vi": "Thiết kế thù lao — thưởng cổ phiếu, quyền chọn, lương gắn hiệu quả — buộc tài sản của ban điều hành vào kết quả của cổ đông. Luật lệ và bỏ phiếu là kiểm soát bên ngoài, không phải công cụ đồng hướng chính."
 },
 {
  "q": "The redistribution of income and wealth is most directly associated with:",
  "opts": [
   "Fiscal policy only",
   "Monetary policy only",
   "Both fiscal policy and monetary policy"
  ],
  "ans": 0,
  "en": "Taxes and transfer payments — fiscal instruments — redistribute directly. Monetary policy affects distribution only indirectly through rates and asset prices.",
  "vi": "Thuế và chi chuyển giao — công cụ tài khóa — tái phân phối trực tiếp. Chính sách tiền tệ chỉ ảnh hưởng phân phối gián tiếp qua lãi suất và giá tài sản."
 },
 {
  "q": "Deductible temporary differences could arise when the:",
  "opts": [
   "Taxable income exceeds accounting profit",
   "Carrying amount of an asset exceeds its tax base",
   "Financial accounting income tax expense exceeds income taxes payable"
  ],
  "ans": 0,
  "en": "Paying tax on MORE income than the books show today creates a deferred tax ASSET — future deductions. Options B and C describe taxable differences and deferred tax liabilities.",
  "vi": "Nộp thuế trên thu nhập NHIỀU HƠN sổ sách hôm nay tạo TÀI SẢN thuế hoãn lại — khoản khấu trừ tương lai. Phương án B và C mô tả chênh lệch chịu thuế và nợ thuế hoãn lại."
 },
 {
  "q": "Sampling error is the difference between the observed value of a statistic and the:",
  "opts": [
   "Mean of the sample",
   "Quantity it is intended to estimate",
   "Observed value of the random variable"
  ],
  "ans": 1,
  "en": "Sampling error = sample statistic − population parameter it estimates (e.g., x̄ − μ). It exists because a sample is only part of the population.",
  "vi": "Sai số lấy mẫu = thống kê mẫu − tham số tổng thể mà nó ước lượng (ví dụ x̄ − μ). Nó tồn tại vì mẫu chỉ là một phần của tổng thể."
 },
 {
  "q": "Risk premiums for a long-term corporate bond: inflation 1.5%, default 2.0%, liquidity 1.0%, maturity 1.5%. If the short-term NOMINAL risk-free rate is 4.0%, the bond yield is closest to:",
  "opts": [
   "6.0%",
   "8.5%",
   "10.0%"
  ],
  "ans": 1,
  "en": "The nominal risk-free rate already CONTAINS the inflation premium. Yield = 4.0 + default 2.0 + liquidity 1.0 + maturity 1.5 = 8.5%. Adding inflation again would double-count.",
  "vi": "Lãi suất phi rủi ro danh nghĩa đã CHỨA phần bù lạm phát. Lợi suất = 4,0 + vỡ nợ 2,0 + thanh khoản 1,0 + kỳ hạn 1,5 = 8,5%. Cộng lạm phát lần nữa là tính trùng."
 },
 {
  "q": "An increase in which of the following will most likely allow governments to DIRECTLY change income distribution?",
  "opts": [
   "Transfer payments",
   "Flat income tax rates",
   "Infrastructure investments"
  ],
  "ans": 0,
  "en": "Transfers move money straight to target households. Flat taxes are distribution-neutral by design; infrastructure affects incomes only indirectly.",
  "vi": "Chi chuyển giao đưa tiền thẳng đến các hộ mục tiêu. Thuế suất phẳng trung tính về phân phối theo thiết kế; hạ tầng chỉ tác động thu nhập gián tiếp."
 },
 {
  "q": "Demand for a patented product has permanently fallen. Carrying value $36,000; undiscounted expected future cash flows $38,000; present value of cash flows $32,000; fair value if sold $34,000; costs to sell $4,000. The patent is impaired under:",
  "opts": [
   "IFRS only",
   "Both IFRS and US GAAP",
   "US GAAP only"
  ],
  "ans": 0,
  "en": "US GAAP step 1: carrying 36,000 vs UNDISCOUNTED cash flows 38,000 → recoverable, no impairment. IFRS: recoverable amount = higher of value in use (32,000) and fair value less costs to sell (34,000 − 4,000 = 30,000) = 32,000 < 36,000 → impaired under IFRS only.",
  "vi": "US GAAP bước 1: giá trị ghi sổ 36.000 so với dòng tiền KHÔNG chiết khấu 38.000 → thu hồi được, không suy giảm. IFRS: giá trị thu hồi = mức cao hơn giữa giá trị sử dụng (32.000) và giá trị hợp lý trừ chi phí bán (34.000 − 4.000 = 30.000) = 32.000 < 36.000 → chỉ suy giảm theo IFRS."
 },
 {
  "q": "A liquidity trap is most closely associated with:",
  "opts": [
   "Deflation",
   "An inelastic demand for money",
   "A positive nominal central bank policy rate"
  ],
  "ans": 0,
  "en": "Liquidity traps live at the zero lower bound in deflationary conditions: money demand becomes perfectly ELASTIC and rate cuts stop transmitting.",
  "vi": "Bẫy thanh khoản sống ở sàn lãi suất 0 trong môi trường giảm phát: cầu tiền trở nên co giãn HOÀN TOÀN và việc hạ lãi suất ngừng truyền dẫn."
 },
 {
  "q": "An exchange rate has decreased to 1.3500. If the base currency depreciated by 7% against the price currency, the initial exchange rate was closest to:",
  "opts": [
   "1.2617",
   "1.4445",
   "1.4516"
  ],
  "ans": 2,
  "en": "A 7% depreciation of the base means the quote fell to 93% of its starting level: X × 0.93 = 1.3500 → X = 1.4516.",
  "vi": "Đồng cơ sở mất giá 7% nghĩa là tỷ giá rơi về 93% mức ban đầu: X × 0,93 = 1,3500 → X = 1,4516."
 },
 {
  "q": "If interest is tax deductible, as the tax rate increases, the after-tax cost of debt:",
  "opts": [
   "Decreases",
   "Remains the same",
   "Increases"
  ],
  "ans": 0,
  "en": "After-tax cost = r_d × (1 − t): a bigger tax shield eats more of the coupon, so the effective cost falls.",
  "vi": "Chi phí sau thuế = r_d × (1 − t): lá chắn thuế lớn hơn ăn bớt nhiều coupon hơn, nên chi phí hiệu dụng giảm."
 },
 {
  "q": "Firms in monopolistic competition most likely have:",
  "opts": [
   "No pricing power",
   "Some pricing power",
   "Substantial pricing power"
  ],
  "ans": 1,
  "en": "Differentiation grants a downward-sloping demand curve — some pricing power — but close substitutes keep it modest.",
  "vi": "Khác biệt hóa mang lại đường cầu dốc xuống — có chút quyền định giá — nhưng hàng thay thế gần giữ nó ở mức khiêm tốn."
 },
 {
  "q": "Amounts recorded as deferred revenue most likely become included in income when they are:",
  "opts": [
   "Paid",
   "Earned",
   "Invoiced"
  ],
  "ans": 1,
  "en": "Cash arrived first and created a liability; it converts to revenue only when the performance obligation is SATISFIED — when earned.",
  "vi": "Tiền về trước và tạo ra khoản nợ; nó chuyển thành doanh thu chỉ khi nghĩa vụ thực hiện HOÀN THÀNH — tức khi đã earned."
 },
 {
  "q": "The role of lender of last resort in an economy is most likely fulfilled by the:",
  "opts": [
   "Government",
   "Central bank",
   "Banking system"
  ],
  "ans": 1,
  "en": "The central bank supplies emergency liquidity to solvent-but-illiquid banks — a defining central-bank function since Bagehot.",
  "vi": "Ngân hàng trung ương cấp thanh khoản khẩn cấp cho các ngân hàng còn khả năng trả nợ nhưng kẹt thanh khoản — chức năng định danh của NHTW từ thời Bagehot."
 },
 {
  "q": "Which attribute is most accurate for a typical company in its START-UP stage?",
  "opts": [
   "Cash flows are negative",
   "The company can raise equity in public markets",
   "Debt is a significant component of the capital structure"
  ],
  "ans": 0,
  "en": "Start-ups burn cash building the product before revenue scales. Public equity and meaningful debt capacity arrive at later stages — early funding is private equity/VC.",
  "vi": "Start-up đốt tiền xây sản phẩm trước khi doanh thu kịp lớn. Huy động vốn đại chúng và vay nợ đáng kể chỉ đến ở giai đoạn sau — vốn ban đầu là private equity/VC."
 },
 {
  "q": "Monte Carlo simulations:",
  "opts": [
   "Require analytical pricing formulas to value securities",
   "Can be used as a complement to analytical methods",
   "Provide better insight than analytical methods in cause-and-effect relationships"
  ],
  "ans": 1,
  "en": "Monte Carlo shines exactly where closed-form formulas fail, complementing analytical valuation. It is a statistical tool — it shows outcome distributions, not causal mechanisms.",
  "vi": "Monte Carlo tỏa sáng đúng nơi công thức đóng bó tay, bổ trợ cho định giá giải tích. Nó là công cụ thống kê — cho thấy phân phối kết quả, không phải cơ chế nhân quả."
 }
]
});
window.CFA.mocktests.push({
 name: "Mock Exam 1 — Session 2 (FI · Equity · Derivatives · Alternatives · PM)",
 qs: [
 {
  "q": "Valuation of a swap during its life will LEAST likely involve the:",
  "opts": [
   "Use of replication",
   "Investor's risk aversion",
   "Application of the principle of no arbitrage"
  ],
  "ans": 1,
  "en": "Derivatives are priced by replication and no-arbitrage — risk preferences never enter, which is why risk-neutral valuation works.",
  "vi": "Phái sinh được định giá bằng sao chép và không-arbitrage — khẩu vị rủi ro không bao giờ xuất hiện, đó là lý do định giá trung hòa rủi ro vận hành."
 },
 {
  "q": "A passive investment strategy most likely outperforms an active strategy when:",
  "opts": [
   "There are few market participants",
   "Asset prices reflect information quickly",
   "Intrinsic values are less than market values"
  ],
  "ans": 1,
  "en": "Rapid price adjustment = an efficient market: active research can't reliably find mispricing, so the low-cost passive approach wins after fees.",
  "vi": "Giá điều chỉnh nhanh = thị trường hiệu quả: nghiên cứu chủ động khó tìm được định giá sai một cách bền vững, nên cách tiếp cận thụ động chi phí thấp thắng sau phí."
 },
 {
  "q": "A bond that allows the issuer to pay interest in additional amounts of the existing bond issue rather than cash best describes a:",
  "opts": [
   "Step-up coupon bond",
   "Deferred coupon bond",
   "Payment-in-kind coupon bond"
  ],
  "ans": 2,
  "en": "PIK = coupons paid in more bonds instead of cash — typical of highly leveraged issuers preserving liquidity.",
  "vi": "PIK = trả coupon bằng thêm trái phiếu thay vì tiền mặt — điển hình của công ty đòn bẩy cao muốn giữ thanh khoản."
 },
 {
  "q": "The justified forward P/E based on the Gordon growth model is ALWAYS positively related to the:",
  "opts": [
   "Payout ratio",
   "Dividend growth rate",
   "Required rate of return"
  ],
  "ans": 1,
  "en": "P/E = payout/(r − g): higher g shrinks the denominator → unambiguously higher P/E. Payout cuts both ways (it also lowers g = ROE × retention), and higher r always lowers P/E.",
  "vi": "P/E = payout/(r − g): g cao hơn làm mẫu số co lại → P/E cao hơn một cách rõ ràng. Payout tác động hai chiều (nó cũng hạ g = ROE × tỷ lệ giữ lại), còn r cao hơn luôn hạ P/E."
 },
 {
  "q": "With respect to leveraged buyouts, the current management team will continue to manage the company in:",
  "opts": [
   "Management buy-ins only",
   "Management buyouts only",
   "Both management buy-ins and management buyouts"
  ],
  "ans": 1,
  "en": "MBO: existing management buys and stays. MBI: an OUTSIDE management team buys in and replaces them.",
  "vi": "MBO: ban điều hành hiện tại mua lại và ở lại. MBI: một đội quản lý BÊN NGOÀI mua vào và thay thế họ."
 },
 {
  "q": "Electronic trading in cryptocurrencies on centralized exchanges is most likely:",
  "opts": [
   "Hosted on public servers",
   "Direct without any intermediating broker or dealer",
   "Regulated to the same standard as exchanges for more traditional assets"
  ],
  "ans": 1,
  "en": "On crypto exchanges investors trade directly with the venue — no broker/dealer layer. The platforms run on private servers and remain far more lightly regulated than traditional exchanges.",
  "vi": "Trên sàn crypto, nhà đầu tư giao dịch trực tiếp với sàn — không có tầng môi giới/dealer. Nền tảng chạy trên máy chủ riêng và vẫn chịu quản lý lỏng hơn nhiều so với sàn truyền thống."
 },
 {
  "q": "Which IPS objective is best described as a RELATIVE risk objective? For the next year, the portfolio objective is to:",
  "opts": [
   "Have a 95% value at risk less than $100,000",
   "Outperform the local stock market index by 100 basis points",
   "Earn a return within plus or minus 2 percentage points of the local index return"
  ],
  "ans": 2,
  "en": "Bounding deviation from a benchmark (±2%) is risk measured RELATIVE to the index — a tracking-risk objective. VaR is an absolute risk objective; beating the index by 100 bps is a relative RETURN objective.",
  "vi": "Giới hạn độ lệch so với benchmark (±2%) là rủi ro đo TƯƠNG ĐỐI với chỉ số — mục tiêu tracking risk. VaR là mục tiêu rủi ro tuyệt đối; vượt chỉ số 100 bps là mục tiêu LỢI SUẤT tương đối."
 },
 {
  "q": "Which of the following is NOT a credit enhancement in asset-backed securities?",
  "opts": [
   "Credit tranching",
   "Overcollateralization",
   "Representations and warranties"
  ],
  "ans": 2,
  "en": "Tranching and overcollateralization absorb losses — true enhancements. Reps and warranties are legal promises about the assets' characteristics, not a loss-absorbing mechanism.",
  "vi": "Tranching và overcollateralization hấp thụ tổn thất — là tăng cường tín dụng thật. Cam đoan và bảo đảm chỉ là lời hứa pháp lý về đặc tính tài sản, không phải cơ chế hấp thụ lỗ."
 },
 {
  "q": "A bond has annual modified duration 5.359 and annual convexity 248.23, yielding 3.5%. If yield increases to 3.7%, the expected percentage price change is closest to:",
  "opts": [
   "−1.02%",
   "−0.97%",
   "1.12%"
  ],
  "ans": 0,
  "en": "Δy = +20 bps: %ΔP = −5.359(0.002) + ½(248.23)(0.002)² = −1.0718% + 0.0497% = −1.02%.",
  "vi": "Δy = +20 bps: %ΔP = −5,359(0,002) + ½(248,23)(0,002)² = −1,0718% + 0,0497% = −1,02%."
 },
 {
  "q": "In limited partnership agreements, which of the following benefits the GENERAL partner? A:",
  "opts": [
   "Catch-up clause",
   "Clawback provision",
   "High-water mark clause"
  ],
  "ans": 0,
  "en": "The catch-up lets the GP collect 100% of distributions after the hurdle until reaching its full carry share. Clawbacks and high-water marks both protect the LPs.",
  "vi": "Điều khoản catch-up cho GP nhận 100% phân phối sau hurdle cho đến khi đủ phần carry đầy đủ. Clawback và high-water mark đều bảo vệ LP."
 },
 {
  "q": "Which method of investing in alternative investments requires the LEAST investment expertise?",
  "opts": [
   "Co-investing",
   "Fund investing",
   "Direct investing"
  ],
  "ans": 1,
  "en": "Fund investing delegates sourcing, diligence, and management to the GP. Co-investing and direct investing progressively pull those burdens onto the investor.",
  "vi": "Đầu tư qua quỹ ủy thác việc tìm thương vụ, thẩm định và quản lý cho GP. Co-investing và đầu tư trực tiếp lần lượt kéo các gánh nặng đó về phía nhà đầu tư."
 },
 {
  "q": "The FIRST decision when constructing a security market index is:",
  "opts": [
   "Identifying the target market",
   "Identifying the investment universe",
   "Determining the constituent securities"
  ],
  "ans": 0,
  "en": "Define the target market first — it determines the universe from which constituents are then selected. The sequence runs target market → universe → constituents → weighting.",
  "vi": "Xác định thị trường mục tiêu trước — nó quyết định tập hợp mà từ đó chọn ra thành phần. Trình tự: thị trường mục tiêu → universe → thành phần → cách gán trọng số."
 },
 {
  "q": "The assets underlying an infrastructure investment are most likely:",
  "opts": [
   "Intended for private use",
   "Owned by a government entity",
   "Expected to have a short operational life"
  ],
  "ans": 1,
  "en": "Infrastructure assets are typically government-owned (or run under long concessions), intended for PUBLIC use, and extremely long-lived.",
  "vi": "Tài sản hạ tầng thường thuộc sở hữu nhà nước (hoặc vận hành theo nhượng quyền dài hạn), phục vụ CÔNG CỘNG, và có đời sống cực dài."
 },
 {
  "q": "During times of severe market turmoil, the risk reduction from portfolio diversification most likely:",
  "opts": [
   "Decreases",
   "Remains the same",
   "Increases"
  ],
  "ans": 0,
  "en": "Correlations spike toward one in crises — assets fall together, and diversification protects least exactly when it is needed most.",
  "vi": "Tương quan vọt về 1 trong khủng hoảng — các tài sản cùng rơi, và đa dạng hóa che chở ít nhất đúng lúc cần nó nhất."
 },
 {
  "q": "Free-cash-flow-to-equity is equal to cash flow from operations:",
  "opts": [
   "Less fixed capital investment less net borrowing",
   "Less fixed capital investment plus net borrowing",
   "Plus fixed capital investment less net borrowing"
  ],
  "ans": 1,
  "en": "FCFE = CFO − FCInv + net borrowing: equity holders' cash is what remains after reinvestment, boosted by new debt raised (net of repayments).",
  "vi": "FCFE = CFO − đầu tư tài sản cố định + vay ròng: tiền của cổ đông là phần còn lại sau tái đầu tư, cộng thêm nợ mới huy động (trừ phần trả nợ)."
 },
 {
  "q": "A 5% corporate bond pays annual coupons on 19 March. Priced for settlement on 25 March at a yield-to-maturity of 5%, its FLAT price is:",
  "opts": [
   "Below par",
   "Par",
   "Above par"
  ],
  "ans": 0,
  "en": "With YTM = coupon, the full price compounds up from par between coupon dates: 100(1.05)^(6/365) = 100.080, while linear accrued interest = (6/365) × 5 = 0.082. Flat = 100.080 − 0.082 = 99.998 — a hair below par, because compound growth lags the linear AI early in the period.",
  "vi": "Khi YTM = coupon, full price lũy kế từ par giữa hai kỳ: 100(1,05)^(6/365) = 100,080, trong khi lãi cộng dồn tuyến tính = (6/365) × 5 = 0,082. Flat = 100,080 − 0,082 = 99,998 — thấp hơn par một sợi tóc, vì tăng trưởng lũy kế chậm hơn AI tuyến tính ở đầu kỳ."
 },
 {
  "q": "A good risk management framework:",
  "opts": [
   "Is a top-down process and guidance directing risk management activities",
   "Seeks to prioritize avoidance of financial loss over defining policies and processes",
   "Is typically a process that addresses a common set of factors within different organizations"
  ],
  "ans": 0,
  "en": "Risk governance flows top-down from the board, directing all risk activities. Frameworks are about choosing which risks to bear (not avoiding all loss) and must be CUSTOM to each organization.",
  "vi": "Quản trị rủi ro chảy từ trên xuống, từ HĐQT, định hướng mọi hoạt động rủi ro. Khung quản trị là để chọn rủi ro nào nên gánh (không phải né mọi khoản lỗ) và phải ĐƯỢC MAY ĐO cho từng tổ chức."
 },
 {
  "q": "Indifference curves are plotted with returns on the vertical axis and risk on the horizontal axis. For a risk-averse investor, the slope of the indifference curve is most likely:",
  "opts": [
   "Negative",
   "Zero",
   "Positive"
  ],
  "ans": 2,
  "en": "Risk-averse investors demand MORE return for MORE risk to stay equally happy — the curve slopes upward (and steepens with greater risk aversion).",
  "vi": "Nhà đầu tư ghét rủi ro đòi THÊM lợi suất cho THÊM rủi ro để giữ nguyên độ thỏa mãn — đường bàng quan dốc lên (và dốc hơn khi mức ghét rủi ro lớn hơn)."
 },
 {
  "q": "In the binomial option model, when the volatility of the underlying increases, the value of a call option:",
  "opts": [
   "Decreases",
   "Remains unchanged",
   "Increases"
  ],
  "ans": 2,
  "en": "A wider u–d spread lifts the up-state payoff while the down-state stays floored at zero — the asymmetry makes volatility pure upside for option value.",
  "vi": "Khoảng u–d rộng hơn nâng payoff trạng thái tăng trong khi trạng thái giảm bị chặn sàn tại 0 — tính bất đối xứng khiến biến động là lợi ích thuần cho giá trị quyền chọn."
 },
 {
  "q": "A treasurer expecting rates to decline enters a 1-year agreement with a bank to RECEIVE quarterly fixed-rate payments and MAKE payments based on 3-month Libor. This agreement is best described as a:",
  "opts": [
   "Swap",
   "Futures contract",
   "Forward contract"
  ],
  "ans": 0,
  "en": "A series of periodic exchanges of fixed for floating over a year is an interest rate SWAP — economically a strip of forwards, but the multi-period structure defines the swap.",
  "vi": "Chuỗi trao đổi định kỳ cố định lấy thả nổi trong một năm là SWAP lãi suất — về bản chất là chuỗi forward, nhưng cấu trúc nhiều kỳ chính là định nghĩa của swap."
 },
 {
  "q": "A trader buys 500 shares on margin at $36 using an initial leverage ratio of 1.66. The maintenance margin is 30%. The margin call price is closest to:",
  "opts": [
   "$20.57",
   "$25.20",
   "$30.86"
  ],
  "ans": 0,
  "en": "Leverage 1.66 → equity = 1/1.66 = 60% → debt per share = 0.40 × 36 = $14.40. Call when equity% = 30%: (P − 14.40)/P = 0.30 → P = 14.40/0.70 = $20.57.",
  "vi": "Đòn bẩy 1,66 → vốn chủ = 1/1,66 = 60% → nợ mỗi cổ phiếu = 0,40 × 36 = $14,40. Margin call khi vốn chủ = 30%: (P − 14,40)/P = 0,30 → P = 14,40/0,70 = $20,57."
 },
 {
  "q": "The type of developed market bond that most likely has the GREATEST risk of default is a:",
  "opts": [
   "Revenue bond",
   "Sovereign bond",
   "General obligation bond"
  ],
  "ans": 0,
  "en": "Revenue bonds are backed only by the cash flows of a specific project — no taxing power behind them, unlike sovereigns and GO munis.",
  "vi": "Revenue bond chỉ được bảo đảm bằng dòng tiền của một dự án cụ thể — không có quyền đánh thuế chống lưng, khác với trái phiếu chính phủ và GO."
 },
 {
  "q": "An index provider launches an index of value stocks in a specific country. This index will most likely be a:",
  "opts": [
   "Style index",
   "Large-capitalization index",
   "Fundamentally weighted index"
  ],
  "ans": 0,
  "en": "Value vs growth is the STYLE dimension. Nothing says large-cap, and \"value stocks\" describes constituent selection, not the weighting method.",
  "vi": "Value vs growth là chiều STYLE. Không có gì nói large-cap, và \"cổ phiếu giá trị\" mô tả cách chọn thành phần, không phải phương pháp gán trọng số."
 },
 {
  "q": "If a market is semi-strong-form efficient, fundamental analysis most likely:",
  "opts": [
   "Enables investors to generate consistent abnormal returns",
   "Helps participants understand the value implications of information",
   "Attempts to profit by looking at patterns of prices and volumes"
  ],
  "ans": 1,
  "en": "In a semi-strong market public information is already priced — no consistent alpha — yet fundamental analysis is exactly what keeps prices efficient by interpreting information. Option C describes technical analysis.",
  "vi": "Trong thị trường semi-strong, thông tin công khai đã vào giá — không có alpha bền — nhưng phân tích cơ bản chính là thứ giữ giá hiệu quả nhờ diễn giải thông tin. Phương án C mô tả phân tích kỹ thuật."
 },
 {
  "q": "The yield-to-maturity of a 5-year, 8% annual-pay bond priced at 108.42 is closest to:",
  "opts": [
   "6.00%",
   "7.38%",
   "9.40%"
  ],
  "ans": 0,
  "en": "Check 6%: P = 8 × [1 − 1.06⁻⁵]/0.06 + 100/1.06⁵ = 33.70 + 74.73 = 108.42 ✓. A premium price demands a yield below the 8% coupon — only 6% qualifies among the options.",
  "vi": "Thử 6%: P = 8 × [1 − 1,06⁻⁵]/0,06 + 100/1,06⁵ = 33,70 + 74,73 = 108,42 ✓. Giá premium đòi hỏi lợi suất dưới coupon 8% — chỉ 6% thỏa trong các phương án."
 },
 {
  "q": "For an option-free bond, effective duration:",
  "opts": [
   "Will be equal to modified duration if the yield curve is absolutely flat",
   "Measures interest rate risk for both parallel and non-parallel benchmark curve shifts",
   "Is an estimate of the percentage price change given a change in the bond's yield to maturity"
  ],
  "ans": 0,
  "en": "With fixed cash flows and a flat curve, shifting the benchmark curve is identical to shifting the YTM — effective and modified duration coincide. Effective duration handles PARALLEL shifts only, and it shifts the CURVE, not the bond's own YTM.",
  "vi": "Với dòng tiền cố định và đường cong phẳng, dịch đường benchmark giống hệt dịch YTM — effective và modified duration trùng nhau. Effective duration chỉ xử lý dịch SONG SONG, và nó dịch ĐƯỜNG CONG chứ không phải YTM riêng của trái phiếu."
 },
 {
  "q": "Bonds issued in which market most likely have FEWER reporting, regulatory, and tax constraints?",
  "opts": [
   "Eurobond markets",
   "Foreign bond markets",
   "Domestic bond markets"
  ],
  "ans": 0,
  "en": "Eurobonds are issued outside any single country's jurisdiction — historically bearer instruments with light regulation. Foreign and domestic bonds answer to the local regulator.",
  "vi": "Eurobond phát hành ngoài thẩm quyền của bất kỳ quốc gia đơn lẻ nào — lịch sử là công cụ vô danh với quản lý nhẹ. Trái phiếu foreign và domestic chịu sự quản lý của nước sở tại."
 },
 {
  "q": "The correlation between the returns of a risk-free asset and a portfolio of risky assets is:",
  "opts": [
   "Negative",
   "Zero",
   "Positive"
  ],
  "ans": 1,
  "en": "The risk-free return never varies — zero variance means zero covariance with anything, hence zero correlation.",
  "vi": "Lợi suất phi rủi ro không bao giờ dao động — phương sai bằng 0 nghĩa là hiệp phương sai với mọi thứ bằng 0, nên tương quan bằng 0."
 },
 {
  "q": "A 6% 25-year bond with semiannual payments has a market price of $850.00. The yield to maturity is closest to:",
  "opts": [
   "5.72%",
   "7.32%",
   "7.91%"
  ],
  "ans": 1,
  "en": "Discount price → yield above the 6% coupon. Check 7.32% (3.66% semiannual, 50 periods): P = 30 × 22.79 + 1,000/6.03 ≈ 684 + 166 = $850 ✓.",
  "vi": "Giá chiết khấu → lợi suất trên coupon 6%. Thử 7,32% (3,66% bán niên, 50 kỳ): P = 30 × 22,79 + 1.000/6,03 ≈ 684 + 166 = $850 ✓."
 },
 {
  "q": "The motivation for investing in the MEZZANINE tranche of a CDO is most likely to:",
  "opts": [
   "Benefit from the credit protection provided by the senior tranche",
   "Earn a higher yield than that on a comparably rated corporate bond",
   "Receive a return in excess of what is paid to all other bond classes"
  ],
  "ans": 1,
  "en": "Mezzanine tranches historically offered yield pickup versus same-rated corporates — the buyer's draw. Seniors protect themselves, not the mezzanine; the residual excess belongs to equity.",
  "vi": "Tranche mezzanine trong lịch sử cho lợi suất nhỉnh hơn trái phiếu doanh nghiệp cùng hạng — sức hút với người mua. Senior tự bảo vệ mình chứ không che cho mezzanine; phần dư vượt trội thuộc về equity."
 },
 {
  "q": "A bond has yield to maturity 10% and modified duration 5.7. If the duration gap is zero, the investment horizon is closest to:",
  "opts": [
   "5.2 years",
   "5.7 years",
   "6.3 years"
  ],
  "ans": 2,
  "en": "Duration gap = MACAULAY duration − horizon. MacDur = ModDur × (1 + y) = 5.7 × 1.10 = 6.27 ≈ 6.3 years — the horizon that balances price and reinvestment risk.",
  "vi": "Duration gap = MACAULAY duration − kỳ đầu tư. MacDur = ModDur × (1 + y) = 5,7 × 1,10 = 6,27 ≈ 6,3 năm — kỳ đầu tư cân bằng rủi ro giá và rủi ro tái đầu tư."
 },
 {
  "q": "The CAPM states that two assets with the same expected return will have the same:",
  "opts": [
   "Standard deviation",
   "Correlation of returns with the market",
   "Covariance of returns with the market"
  ],
  "ans": 2,
  "en": "CAPM prices assets solely by beta = Cov(R, Rm)/Var(Rm): equal expected returns force equal betas, hence equal covariances. Standard deviations and correlations can differ as long as their product (the covariance) matches.",
  "vi": "CAPM định giá tài sản chỉ theo beta = Cov(R, Rm)/Var(Rm): lợi suất kỳ vọng bằng nhau buộc beta bằng nhau, tức hiệp phương sai bằng nhau. Độ lệch chuẩn và tương quan có thể khác miễn tích của chúng (hiệp phương sai) trùng nhau."
 },
 {
  "q": "The sensitivity of a 30-year bond to a 50 bps increase in the benchmark rate at the 25–30 year maturity SEGMENT is best measured by:",
  "opts": [
   "Key rate duration",
   "Effective duration",
   "Modified duration"
  ],
  "ans": 0,
  "en": "A shift in one segment is a NON-parallel move — key rate (partial) duration isolates sensitivity to that maturity point. Effective and modified duration assume parallel shifts.",
  "vi": "Cú dịch ở một đoạn kỳ hạn là chuyển động KHÔNG song song — key rate (partial) duration cô lập độ nhạy tại điểm kỳ hạn đó. Effective và modified duration giả định dịch song song."
 },
 {
  "q": "A put trades for $1.00 with exercise price $40.00. If the underlying is $35.00 at expiration, the profit for a put SELLER is:",
  "opts": [
   "−$5.00",
   "−$4.00",
   "$4.00"
  ],
  "ans": 1,
  "en": "The seller owes the exercise value 40 − 35 = 5 but keeps the premium: profit = −5 + 1 = −$4.00.",
  "vi": "Người bán phải trả giá trị thực hiện 40 − 35 = 5 nhưng giữ được phí: lợi nhuận = −5 + 1 = −$4,00."
 },
 {
  "q": "Investing in private debt most likely is:",
  "opts": [
   "Less risky than investing in traditional bonds",
   "Equally risky to investing in traditional bonds",
   "More risky than investing in traditional bonds"
  ],
  "ans": 2,
  "en": "Illiquidity, smaller and less transparent borrowers, and looser disclosure make private debt riskier than public bonds — the return premium exists to pay for exactly that.",
  "vi": "Tính kém thanh khoản, bên vay nhỏ và kém minh bạch hơn, cùng công bố thông tin lỏng hơn khiến nợ tư nhân rủi ro hơn trái phiếu đại chúng — phần bù lợi suất tồn tại để trả cho đúng điều đó."
 },
 {
  "q": "An investor buys a 5% coupon bond maturing in 15 years at par. Immediately after purchase, the required yield increases. The investor would most likely have to sell the bond at:",
  "opts": [
   "Par",
   "A discount",
   "A premium"
  ],
  "ans": 1,
  "en": "Price and yield move inversely: with the coupon now below the required yield, the bond must sell below par to compensate the buyer.",
  "vi": "Giá và lợi suất nghịch chiều: coupon giờ thấp hơn lợi suất yêu cầu, trái phiếu phải bán dưới par để bù đắp cho người mua."
 },
 {
  "q": "A semiannual-pay bond has a YTM of 4.3% quoted on a semiannual bond basis. The YTM based on QUARTERLY compounding is closest to:",
  "opts": [
   "4.23%",
   "4.28%",
   "4.32%"
  ],
  "ans": 1,
  "en": "Match effective returns: (1 + 0.043/2)² = (1 + r/4)⁴ → 1 + r/4 = 1.0215^0.5 = 1.010693 → r = 4.28%. More frequent compounding needs a lower stated rate.",
  "vi": "Cân bằng lợi suất hiệu dụng: (1 + 0,043/2)² = (1 + r/4)⁴ → 1 + r/4 = 1,0215^0,5 = 1,010693 → r = 4,28%. Ghép lãi dày hơn cần lãi suất danh nghĩa thấp hơn."
 },
 {
  "q": "The value of a European put is:",
  "opts": [
   "Inversely related to the exercise price",
   "Inversely related to the risk-free interest rate",
   "Directly related to the value of the underlying"
  ],
  "ans": 1,
  "en": "Higher rates shrink the present value of the strike you will receive → puts fall as rates rise. Puts rise with X (not inversely) and fall as the underlying rises (not directly).",
  "vi": "Lãi suất cao làm teo hiện giá của strike bạn sẽ nhận → giá put giảm khi lãi tăng. Put tăng theo X (không phải nghịch) và giảm khi tài sản cơ sở tăng (không phải thuận)."
 },
 {
  "q": "An asset-based valuation model would be MOST applicable:",
  "opts": [
   "For valuing a small and privately held firm",
   "When the economic environment is hyperinflationary",
   "For valuing a firm with significant property, plant, and equipment"
  ],
  "ans": 2,
  "en": "Asset-based valuation works when value resides in identifiable tangible assets — a PP&E-heavy firm. It struggles with intangibles-rich businesses and distorted hyperinflationary book values.",
  "vi": "Định giá theo tài sản hiệu quả khi giá trị nằm ở tài sản hữu hình nhận diện được — công ty nặng PP&E. Nó chật vật với doanh nghiệp giàu tài sản vô hình và giá trị sổ sách méo mó vì siêu lạm phát."
 },
 {
  "q": "A disadvantage of a fund of hedge funds compared with a large multi-strategy fund is:",
  "opts": [
   "Due diligence expertise",
   "Higher management fees",
   "Diversified exposure to various hedge fund strategies"
  ],
  "ans": 1,
  "en": "The fund of funds stacks its own fee layer on top of the underlying funds' fees — a structural cost drag. Diligence expertise and diversification are its ADVANTAGES.",
  "vi": "Fund of funds chồng lớp phí riêng lên trên phí của các quỹ bên dưới — lực cản chi phí mang tính cấu trúc. Chuyên môn thẩm định và đa dạng hóa là ƯU ĐIỂM của nó."
 },
 {
  "q": "For a put option, if the price of the underlying is GREATER than the exercise price, the put is:",
  "opts": [
   "In the money",
   "At the money",
   "Out of the money"
  ],
  "ans": 2,
  "en": "A put pays max(X − S, 0): with S > X, exercising would mean selling below market — worthless to exercise, hence out of the money.",
  "vi": "Put trả max(X − S, 0): khi S > X, thực hiện quyền nghĩa là bán dưới giá thị trường — vô giá trị khi thực hiện, nên out of the money."
 },
 {
  "q": "Compared with exchange-traded derivative markets, over-the-counter derivative markets are typically MORE:",
  "opts": [
   "Liquid",
   "Flexible",
   "Transparent"
  ],
  "ans": 1,
  "en": "OTC contracts are custom-negotiated — flexibility is their defining edge. Exchanges win on liquidity and transparency through standardization and public prices.",
  "vi": "Hợp đồng OTC được thương lượng may đo — linh hoạt là lợi thế định danh. Sàn thắng ở thanh khoản và minh bạch nhờ chuẩn hóa và giá công khai."
 },
 {
  "q": "With regard to commodities, it is most likely true that:",
  "opts": [
   "Exposure is most commonly achieved via commodity derivatives",
   "Their returns are based on an income stream such as interest or dividends",
   "They are physical products, so most investors prefer to trade the actual commodity"
  ],
  "ans": 0,
  "en": "Storage, transport, and insurance make physical holding impractical — futures and swaps are the standard access route. Commodities generate no income stream; returns come from price and roll.",
  "vi": "Lưu kho, vận chuyển, bảo hiểm khiến nắm giữ vật chất bất tiện — futures và swap là đường tiếp cận chuẩn. Hàng hóa không sinh dòng thu nhập; lợi suất đến từ giá và roll."
 },
 {
  "q": "An analyst forecasts bear, base, and bull cases for sales, EBITDA margin, and debt-to-capital next year. This forecast table is best described as a:",
  "opts": [
   "Scenario analysis",
   "Sensitivity analysis",
   "Point estimate forecast"
  ],
  "ans": 0,
  "en": "Multiple variables shifted TOGETHER into coherent alternative worlds = scenario analysis. Sensitivity moves one input at a time; a point estimate is a single number.",
  "vi": "Nhiều biến dịch chuyển CÙNG NHAU thành các thế giới thay thế nhất quán = phân tích kịch bản. Phân tích độ nhạy chỉnh từng biến một; ước tính điểm là một con số duy nhất."
 },
 {
  "q": "During its life, the value of a forward contract is most likely equal to the price of the underlying minus the price of the:",
  "opts": [
   "Forward",
   "Forward, discounted over the original term of the contract",
   "Forward, discounted over the remaining term of the contract"
  ],
  "ans": 2,
  "en": "V_long(t) = Sₜ − F₀/(1 + r)^(T−t): the locked-in forward price is discounted over the time REMAINING until delivery.",
  "vi": "V_long(t) = Sₜ − F₀/(1 + r)^(T−t): giá forward đã khóa được chiết khấu theo thời gian CÒN LẠI đến ngày giao."
 },
 {
  "q": "According to the CAPM, the difference in the expected returns of two securities is determined by the securities':",
  "opts": [
   "Total risk",
   "Systematic risk only",
   "Nonsystematic risk only"
  ],
  "ans": 1,
  "en": "CAPM compensates only systematic (beta) risk — diversifiable risk is free to remove, so the market pays nothing for it.",
  "vi": "CAPM chỉ trả công cho rủi ro hệ thống (beta) — rủi ro đa dạng hóa được có thể loại miễn phí, nên thị trường không trả gì cho nó."
 },
 {
  "q": "Which performance measure is MOST appropriate for an investor who holds a well-diversified portfolio?",
  "opts": [
   "M²",
   "Sharpe ratio",
   "Jensen's alpha"
  ],
  "ans": 2,
  "en": "With diversifiable risk eliminated, only systematic risk matters — so use a beta-based measure: Jensen's alpha (or Treynor). Sharpe and M² price total risk.",
  "vi": "Khi rủi ro đa dạng hóa được đã loại bỏ, chỉ rủi ro hệ thống còn ý nghĩa — dùng thước đo theo beta: Jensen's alpha (hoặc Treynor). Sharpe và M² tính theo tổng rủi ro."
 },
 {
  "q": "A function of the financial system is to:",
  "opts": [
   "Prevent traders from speculating on information",
   "Equate aggregate savings with aggregate borrowings",
   "Restrict companies from spending money they do not have"
  ],
  "ans": 1,
  "en": "The financial system discovers the rates of return that balance total savings with total borrowing — channeling funds from savers to users. It neither bans speculation nor polices spending.",
  "vi": "Hệ thống tài chính khám phá mức lợi suất cân bằng tổng tiết kiệm với tổng vay mượn — dẫn vốn từ người tiết kiệm sang người dùng vốn. Nó không cấm đầu cơ cũng không quản việc chi tiêu."
 },
 {
  "q": "A protective put strategy consists of a:",
  "opts": [
   "Long put option on an asset and a long position in a risk-free bond",
   "Long position in an underlying asset and a long put option on the asset",
   "Long call option on an asset and a short position in the underlying"
  ],
  "ans": 1,
  "en": "Protective put = own the asset + own the put: downside floored at X, upside kept. Option A (put + bond) is not the standard structure; option C is a synthetic put-ish combination.",
  "vi": "Protective put = nắm tài sản + nắm quyền bán: sàn lỗ tại X, giữ nguyên upside. Phương án A (put + trái phiếu) không phải cấu trúc chuẩn; phương án C là tổ hợp tổng hợp khác."
 },
 {
  "q": "A stock dividend:",
  "opts": [
   "Is relevant for valuation of a company",
   "Involves an increase in the number of shares outstanding",
   "Alters the shareholders' proportional ownership"
  ],
  "ans": 1,
  "en": "A stock dividend distributes additional shares pro rata: share count rises, each holder's percentage stake and total company value stay unchanged.",
  "vi": "Cổ tức bằng cổ phiếu phát thêm cổ phần theo tỷ lệ: số cổ phiếu tăng, tỷ lệ sở hữu của từng cổ đông và tổng giá trị công ty không đổi."
 },
 {
  "q": "Which best describes a reason for having a WRITTEN investment policy statement?",
  "opts": [
   "To communicate a plan for achieving investment success",
   "To keep track of the performance of a client's portfolio",
   "To serve as a fact-finding process for determining a client's risk tolerance"
  ],
  "ans": 0,
  "en": "The IPS is the written roadmap governing the portfolio toward the client's goals. Fact-finding happens BEFORE the IPS is written; performance tracking is a feedback-stage activity.",
  "vi": "IPS là lộ trình bằng văn bản dẫn dắt danh mục tới mục tiêu của khách hàng. Thu thập thông tin diễn ra TRƯỚC khi viết IPS; theo dõi thành tích thuộc giai đoạn phản hồi."
 },
 {
  "q": "Which bond is most likely to exhibit a REDUCTION in duration as time to maturity INCREASES? A bond priced at:",
  "opts": [
   "Par",
   "A discount",
   "A premium"
  ],
  "ans": 1,
  "en": "For long-maturity deep-DISCOUNT bonds, duration can peak and then decline as maturity extends — the exception to \"longer maturity, higher duration.\" Par and premium bonds rise monotonically toward a limit.",
  "vi": "Với trái phiếu CHIẾT KHẤU sâu kỳ hạn dài, duration có thể đạt đỉnh rồi giảm khi kỳ hạn kéo dài — ngoại lệ của quy tắc \"kỳ hạn dài hơn, duration cao hơn.\" Trái phiếu par và premium tăng đơn điệu về một giới hạn."
 },
 {
  "q": "In a pension fund's IPS, a COUNTRYWIDE limit on the proportion of high-risk assets in long-term pension portfolios is most likely a:",
  "opts": [
   "Liquidity constraint",
   "Time horizon constraint",
   "Legal and regulatory constraint"
  ],
  "ans": 2,
  "en": "A nationwide cap imposed on pension portfolios is external law binding the fund — the legal/regulatory bucket of LLTTU.",
  "vi": "Mức trần toàn quốc áp lên danh mục hưu trí là luật bên ngoài trói quỹ — thuộc ô legal/regulatory trong LLTTU."
 },
 {
  "q": "Relative to a non-recourse mortgage loan, in a RECOURSE mortgage loan the:",
  "opts": [
   "Lender can change the interest rate charged",
   "Borrower does not have a strategic default option",
   "Borrower is not liable for any shortfall between sale proceeds and the loan amount"
  ],
  "ans": 1,
  "en": "With recourse, the lender can pursue the borrower's other assets for any shortfall — walking away from an underwater property (strategic default) no longer pays.",
  "vi": "Với recourse, bên cho vay có thể truy đòi tài sản khác của người vay cho phần thiếu hụt — bỏ nhà khi giá trị âm (vỡ nợ chiến lược) không còn lợi."
 },
 {
  "q": "The multiple of invested capital (MOIC) measure takes into account:",
  "opts": [
   "The realized value of an investment only",
   "The residual asset value of an investment only",
   "Both the realized value and the residual asset value of an investment"
  ],
  "ans": 2,
  "en": "MOIC = (realized distributions + residual value)/invested capital — everything returned plus everything still held, ignoring only the timing of those flows.",
  "vi": "MOIC = (giá trị đã hiện thực + giá trị còn lại)/vốn đã bỏ — mọi thứ đã trả về cộng mọi thứ còn nắm giữ, chỉ bỏ qua yếu tố thời gian của dòng tiền."
 },
 {
  "q": "Investors in a CLOSED-END mutual fund can liquidate their positions by selling shares to:",
  "opts": [
   "The fund itself only",
   "Other investors only",
   "Both the fund itself and other investors"
  ],
  "ans": 1,
  "en": "Closed-end funds do not redeem: a fixed share count trades on the secondary market between investors — often at premiums or discounts to NAV.",
  "vi": "Quỹ đóng không mua lại chứng chỉ: số lượng cố định giao dịch trên thị trường thứ cấp giữa các nhà đầu tư — thường lệch premium/discount so với NAV."
 },
 {
  "q": "Effective duration measures a bond's sensitivity to a:",
  "opts": [
   "Flattening of the benchmark yield curve",
   "Steepening of the benchmark yield curve",
   "Parallel shift in the benchmark yield curve"
  ],
  "ans": 2,
  "en": "Effective duration shifts the WHOLE benchmark curve up and down in parallel. Flattening and steepening are shape changes measured by key rate durations.",
  "vi": "Effective duration dịch TOÀN BỘ đường benchmark lên xuống song song. Phẳng hóa và dốc hóa là thay đổi hình dạng, đo bằng key rate durations."
 },
 {
  "q": "An example of NONSYSTEMATIC risk is a(n):",
  "opts": [
   "Failure of a drug trial",
   "Increase in the overall rate of inflation",
   "Change in the central bank's interest rate policy"
  ],
  "ans": 0,
  "en": "A failed trial hits one company — diversifiable, firm-specific risk. Inflation and policy rates wash over the entire market: systematic.",
  "vi": "Một thử nghiệm thuốc thất bại chỉ đánh vào một công ty — rủi ro riêng, đa dạng hóa được. Lạm phát và lãi suất chính sách quét qua toàn thị trường: hệ thống."
 },
 {
  "q": "Which of the following is best categorized as NON-financial risk?",
  "opts": [
   "Credit risk",
   "Market risk",
   "Accounting risk"
  ],
  "ans": 2,
  "en": "Accounting risk (errors, restatements, reporting failures) sits in the non-financial family with operational, legal, and compliance risk. Credit and market risks are the core financial risks.",
  "vi": "Rủi ro kế toán (sai sót, điều chỉnh lại, hỏng báo cáo) thuộc họ phi tài chính cùng rủi ro vận hành, pháp lý, tuân thủ. Rủi ro tín dụng và thị trường là rủi ro tài chính cốt lõi."
 },
 {
  "q": "An investor buys a stock on margin, posting 60% of the initial $63.00 price as equity. If a margin call occurs at $33.60 per share, the maintenance margin on this trade is:",
  "opts": [
   "12.5%",
   "25.0%",
   "40.0%"
  ],
  "ans": 1,
  "en": "Debt per share = 0.40 × 63 = $25.20 (fixed). At $33.60, equity = 33.60 − 25.20 = 8.40 → 8.40/33.60 = 25% — the maintenance level that triggers the call.",
  "vi": "Nợ mỗi cổ phiếu = 0,40 × 63 = $25,20 (cố định). Tại $33,60, vốn chủ = 33,60 − 25,20 = 8,40 → 8,40/33,60 = 25% — mức maintenance kích hoạt margin call."
 },
 {
  "q": "Which version of the dividend discount model would most likely be appropriate for valuing a fairly YOUNG, publicly traded company?",
  "opts": [
   "A two-stage DDM",
   "A three-stage DDM",
   "The Gordon growth model"
  ],
  "ans": 1,
  "en": "A young company typically passes through growth → transition → maturity — three distinct phases → three-stage DDM. Gordon fits stable, mature dividend payers.",
  "vi": "Công ty trẻ thường đi qua tăng trưởng → chuyển tiếp → trưởng thành — ba pha rõ rệt → DDM ba giai đoạn. Gordon hợp công ty trưởng thành trả cổ tức ổn định."
 },
 {
  "q": "D₀ = $2.00; dividend payout ratio 55%; ROE 9%. If the required return is 8%, the intrinsic value per share using the Gordon growth model is closest to:",
  "opts": [
   "$50.63",
   "$52.68",
   "$68.82"
  ],
  "ans": 1,
  "en": "g = ROE × retention = 9% × 0.45 = 4.05%. D₁ = 2.00 × 1.0405 = 2.081. V = 2.081/(0.08 − 0.0405) = 2.081/0.0395 = $52.68.",
  "vi": "g = ROE × tỷ lệ giữ lại = 9% × 0,45 = 4,05%. D₁ = 2,00 × 1,0405 = 2,081. V = 2,081/(0,08 − 0,0405) = $52,68."
 },
 {
  "q": "Net income £1,500m; average total assets £11,500m; average shareholders' equity £7,500m. If the dividend payout ratio is 45%, the sustainable growth rate is closest to:",
  "opts": [
   "7%",
   "9%",
   "11%"
  ],
  "ans": 2,
  "en": "ROE = 1,500/7,500 = 20%; retention = 1 − 0.45 = 0.55. g = 20% × 0.55 = 11%. Total assets are the distractor — ROE uses equity.",
  "vi": "ROE = 1.500/7.500 = 20%; tỷ lệ giữ lại = 1 − 0,45 = 0,55. g = 20% × 0,55 = 11%. Tổng tài sản là mồi nhử — ROE dùng vốn chủ."
 },
 {
  "q": "Which most likely accounts for MOST of the long-term changes in a portfolio's value?",
  "opts": [
   "Beta",
   "Alpha",
   "Security selection"
  ],
  "ans": 0,
  "en": "Systematic market exposure — beta, set by the asset allocation — drives the bulk of long-run portfolio outcomes; alpha and selection are second-order.",
  "vi": "Phơi nhiễm thị trường hệ thống — beta, do phân bổ tài sản quyết định — dẫn dắt phần lớn kết quả dài hạn của danh mục; alpha và chọn chứng khoán là bậc hai."
 },
 {
  "q": "Hedge fund: beginning AUM $100m; end-of-year AUM before fees $120m; management fee 2% of year-end AUM; incentive fee 20% with an 8% hard hurdle, calculated net of the management fee. Total fees are closest to:",
  "opts": [
   "$4.3 million",
   "$4.8 million",
   "$5.9 million"
  ],
  "ans": 0,
  "en": "Management fee = 2% × 120 = 2.4. Gains net of mgmt fee = 120 − 100 − 2.4 = 17.6; hard hurdle = 8% × 100 = 8 → incentive base = 17.6 − 8 = 9.6 → incentive = 1.92. Total = 2.4 + 1.92 = $4.32m.",
  "vi": "Phí quản lý = 2% × 120 = 2,4. Lợi nhuận sau phí quản lý = 120 − 100 − 2,4 = 17,6; hurdle cứng = 8% × 100 = 8 → cơ sở tính thưởng = 17,6 − 8 = 9,6 → phí thành tích = 1,92. Tổng = 2,4 + 1,92 = $4,32tr."
 },
 {
  "q": "Annual modified duration 7.534; flat price 92.084; accrued interest 1.458 (per 100 par). The bond's money duration per 100 of par value is closest to:",
  "opts": [
   "683",
   "694",
   "705"
  ],
  "ans": 2,
  "en": "Money duration = ModDur × FULL price = 7.534 × (92.084 + 1.458) = 7.534 × 93.542 = 705. Using the flat price alone (694) is the trap.",
  "vi": "Money duration = ModDur × FULL price = 7,534 × (92,084 + 1,458) = 7,534 × 93,542 = 705. Dùng riêng flat price (694) là cái bẫy."
 },
 {
  "q": "Forward rates: 0y1y = 2.31%; 1y1y = 2.82%; 2y1y = 2.97%. The 2-year implied spot rate is closest to:",
  "opts": [
   "2.56%",
   "2.82%",
   "2.89%"
  ],
  "ans": 0,
  "en": "(1 + z₂)² = (1.0231)(1.0282) = 1.05195 → z₂ = 1.05195^0.5 − 1 = 2.56% — the geometric average of the first two forwards. The 2y1y rate is irrelevant to the 2-year spot.",
  "vi": "(1 + z₂)² = (1,0231)(1,0282) = 1,05195 → z₂ = 1,05195^0,5 − 1 = 2,56% — trung bình nhân của hai forward đầu. Lãi 2y1y không liên quan đến spot 2 năm."
 },
 {
  "q": "A US Treasury security originally issued with FIVE years to maturity is a Treasury:",
  "opts": [
   "Bill",
   "Note",
   "Bond"
  ],
  "ans": 1,
  "en": "Original maturities: bills ≤ 1 year; notes 2–10 years; bonds > 10 years. Five years → note.",
  "vi": "Kỳ hạn gốc: bills ≤ 1 năm; notes 2–10 năm; bonds > 10 năm. Năm năm → note."
 },
 {
  "q": "In behavioral finance, which statement best describes the bias of CONSERVATISM? Investors:",
  "opts": [
   "Assess new information based on similarity to the current state",
   "Focus on issues in isolation and respond based on how they are posed",
   "Tend to be slow to react to new information and maintain their prior views"
  ],
  "ans": 2,
  "en": "Conservatism = under-updating: clinging to prior forecasts when new evidence arrives. Option A describes representativeness; option B describes framing.",
  "vi": "Conservatism = cập nhật thiếu: bám dự báo cũ khi bằng chứng mới xuất hiện. Phương án A mô tả representativeness; phương án B là framing."
 },
 {
  "q": "Bond prices: 103.52 at YTM 3.7%; 103.84 at YTM 3.3%. The bond trades at 103.67 with YTM 3.5%. The approximate convexity is closest to:",
  "opts": [
   "0.048",
   "0.096",
   "48.230"
  ],
  "ans": 2,
  "en": "Convexity = (P₋ + P₊ − 2P₀)/(P₀ × Δy²) = (103.84 + 103.52 − 2 × 103.67)/(103.67 × 0.002²) = 0.02/0.000415 = 48.23.",
  "vi": "Convexity = (P₋ + P₊ − 2P₀)/(P₀ × Δy²) = (103,84 + 103,52 − 2 × 103,67)/(103,67 × 0,002²) = 0,02/0,000415 = 48,23."
 },
 {
  "q": "Which return measure is MOST appropriate when comparing the annual returns of an asset class over various long historical time periods?",
  "opts": [
   "The arithmetic mean of real returns",
   "The geometric mean of real returns",
   "The arithmetic mean of nominal returns"
  ],
  "ans": 1,
  "en": "Across long horizons, compounding matters (geometric) and different inflation regimes must be stripped out (real returns) — geometric real returns make eras comparable.",
  "vi": "Trên kỳ hạn dài, lũy kế quan trọng (trung bình nhân) và các chế độ lạm phát khác nhau phải được gỡ bỏ (lợi suất thực) — trung bình nhân của lợi suất thực khiến các thời kỳ so sánh được."
 },
 {
  "q": "If the forward price of a stock equals the current spot price, the price of an at-the-money PUT under put–call parity will be:",
  "opts": [
   "Lower than the price of the at-the-money call",
   "Equal to the price of the at-the-money call",
   "Higher than the price of the at-the-money call"
  ],
  "ans": 1,
  "en": "Parity: c − p = [F₀ − X]/(1 + r)^T. At the money with X = S and F₀ = S → c − p = 0: the options are worth the same.",
  "vi": "Parity: c − p = [F₀ − X]/(1 + r)^T. At the money với X = S và F₀ = S → c − p = 0: hai quyền chọn cùng giá."
 },
 {
  "q": "Regarding hedge fund fee calculations, a HIGH-WATER MARK:",
  "opts": [
   "Represents the return on gains not yet fully realized",
   "Protects the client from paying twice for the same performance",
   "Is the rate of return the GP must exceed to earn a performance fee"
  ],
  "ans": 1,
  "en": "Incentive fees are due only on gains ABOVE the highest prior NAV — losses must be recovered before fees resume, so no double-charging. Option C describes the hurdle rate.",
  "vi": "Phí thành tích chỉ tính trên phần lãi VƯỢT đỉnh NAV cũ — phải gỡ hết lỗ trước khi phí chạy lại, nên không bị tính hai lần. Phương án C mô tả hurdle rate."
 },
 {
  "q": "Equal-weighted index of three stocks, start value 100, NOT rebalanced. Prices move: Stock 1: €30 → €36; Stock 2: €50 → €45; Stock 3: €40 → €50. The end-of-year index value is closest to:",
  "opts": [
   "109.2",
   "111.7",
   "113.5"
  ],
  "ans": 1,
  "en": "Equal money in each at the start, then buy-and-hold: returns are +20%, −10%, +25% → average = 35/3 = 11.67% → index = 111.7. Shares outstanding never matter in an equal-weighted index.",
  "vi": "Vốn bằng nhau vào mỗi cổ phiếu lúc đầu, rồi giữ nguyên: lợi suất +20%, −10%, +25% → trung bình = 35/3 = 11,67% → chỉ số = 111,7. Số cổ phiếu lưu hành không bao giờ có vai trò trong chỉ số equal-weighted."
 },
 {
  "q": "The price of a futures contract will be HIGHER than the price of a forward contract when the correlation between futures prices and interest rates is:",
  "opts": [
   "Negative",
   "Zero",
   "Positive"
  ],
  "ans": 2,
  "en": "Daily settlement pays gains when rates are high (reinvest well) and losses when rates are low (borrow cheap) — a benefit worth paying for when futures prices and rates move together.",
  "vi": "Thanh toán hằng ngày trả lãi khi lãi suất cao (tái đầu tư tốt) và thu lỗ khi lãi suất thấp (vay rẻ) — lợi ích đáng trả thêm khi giá futures và lãi suất đồng pha."
 },
 {
  "q": "In the priority of claims, the class of corporate debt with the LOWEST priority in default is most likely:",
  "opts": [
   "Second lien debt",
   "Subordinated debt",
   "Junior subordinated debt"
  ],
  "ans": 2,
  "en": "The ladder descends: secured (first, second lien) → senior unsecured → subordinated → JUNIOR subordinated — the last debt claim before equity.",
  "vi": "Chiếc thang đi xuống: có đảm bảo (first, second lien) → senior unsecured → subordinated → JUNIOR subordinated — quyền đòi nợ cuối cùng trước vốn chủ."
 },
 {
  "q": "Asset 1 and Asset 2 are perfectly positively correlated with the SAME standard deviation. The covariance between their returns equals the:",
  "opts": [
   "Variance of Asset 1's returns",
   "Standard deviation of Asset 1's returns",
   "Variance of Asset 1's returns times the variance of Asset 2's returns"
  ],
  "ans": 0,
  "en": "Cov = ρ × σ₁ × σ₂ = 1 × σ × σ = σ² — precisely the variance of either asset.",
  "vi": "Cov = ρ × σ₁ × σ₂ = 1 × σ × σ = σ² — chính xác bằng phương sai của một trong hai tài sản."
 },
 {
  "q": "In contrast to life insurers, property and casualty insurers most likely:",
  "opts": [
   "Invest their general account assets in fixed-income securities",
   "Accept investments with lower returns in their general account",
   "Target a higher return in the surplus account than in the general account"
  ],
  "ans": 1,
  "en": "P&C claims are lumpy and unpredictable, forcing the general account into shorter, more liquid, lower-return assets than life insurers' — the distinguishing feature. Both invest in fixed income and both run surplus accounts for higher returns.",
  "vi": "Bồi thường P&C cục và khó đoán, ép tài khoản chung vào tài sản ngắn hơn, thanh khoản hơn, lợi suất thấp hơn so với bảo hiểm nhân thọ — nét phân biệt. Cả hai đều đầu tư thu nhập cố định và đều có surplus account nhắm lợi suất cao hơn."
 },
 {
  "q": "If the expected forward rate curve shifts DOWNWARD after the inception of a swap, the mark-to-market value for the FIXED-RATE PAYER will most likely:",
  "opts": [
   "Decrease",
   "Remain the same",
   "Increase"
  ],
  "ans": 0,
  "en": "The fixed payer expects to receive floating: lower expected forwards shrink those receipts while the fixed payments stand — the position loses value.",
  "vi": "Bên trả cố định kỳ vọng nhận thả nổi: forward kỳ vọng thấp hơn làm teo các khoản nhận trong khi khoản trả cố định đứng nguyên — vị thế mất giá trị."
 },
 {
  "q": "Short sellers most likely:",
  "opts": [
   "Pay a short rebate to security lenders",
   "Receive cash collateral from security lenders",
   "Make payments-in-lieu of dividends to security lenders"
  ],
  "ans": 2,
  "en": "The short seller owes the lender every dividend the stock pays during the loan — payments in lieu. Rebates flow FROM the lender to the borrower, and collateral flows TO the lender.",
  "vi": "Người bán khống nợ bên cho mượn mọi khoản cổ tức cổ phiếu trả trong thời gian vay — payment in lieu. Rebate chảy TỪ bên cho mượn sang người vay, còn tài sản đảm bảo chảy VỀ bên cho mượn."
 },
 {
  "q": "Hedge fund: initial investment $100m; profit Year 1 = $25m; loss Year 2 = $10m. With a 20% incentive fee and a clawback provision, the TOTAL incentive fee for Years 1 and 2 is:",
  "opts": [
   "$0",
   "$3 million",
   "$5 million"
  ],
  "ans": 1,
  "en": "Year 1 fee = 20% × 25 = 5. Year 2's loss cuts cumulative profit to 15 → fees should total 20% × 15 = 3 → the clawback returns 2. Net fees over both years = $3m.",
  "vi": "Phí năm 1 = 20% × 25 = 5. Khoản lỗ năm 2 hạ lợi nhuận lũy kế còn 15 → tổng phí đúng là 20% × 15 = 3 → clawback đòi lại 2. Phí ròng hai năm = $3tr."
 },
 {
  "q": "Statutory voting means that shareholders:",
  "opts": [
   "Vote by proxy",
   "Have one vote per share",
   "With a small number of shares are better positioned than under cumulative voting"
  ],
  "ans": 1,
  "en": "Statutory (straight) voting: one vote per share per board seat. Cumulative voting — pooling votes on one candidate — is what HELPS small shareholders.",
  "vi": "Bỏ phiếu theo luật định (thẳng): một phiếu mỗi cổ phần cho mỗi ghế HĐQT. Bỏ phiếu tích lũy — dồn phiếu cho một ứng viên — mới là thứ GIÚP cổ đông nhỏ."
 },
 {
  "q": "An investor buys a European put for $10 with strike $95. If the underlying is $80 at expiration, the VALUE of the option at expiration is:",
  "opts": [
   "$0",
   "$5",
   "$15"
  ],
  "ans": 2,
  "en": "Value at expiration = max(X − S, 0) = 95 − 80 = $15. The $10 premium affects PROFIT (+5), not the option's terminal value.",
  "vi": "Giá trị tại đáo hạn = max(X − S, 0) = 95 − 80 = $15. Phí $10 ảnh hưởng LỢI NHUẬN (+5), không phải giá trị cuối cùng của quyền chọn."
 },
 {
  "q": "Which statement about DIRECT ownership of real estate is most accurate?",
  "opts": [
   "Local real estate market expertise is important for success",
   "Investors have no control over the tenant selection process",
   "Investors cannot use non-cash depreciation to reduce taxable income"
  ],
  "ans": 0,
  "en": "Real estate is a local business — neighborhood knowledge drives returns. Direct owners DO control tenant selection and DO shelter income with depreciation; those are advantages of direct ownership.",
  "vi": "Bất động sản là ngành địa phương — am hiểu khu vực quyết định lợi suất. Chủ sở hữu trực tiếp CÓ quyền chọn khách thuê và CÓ dùng khấu hao che chắn thu nhập chịu thuế; đó là ưu điểm của sở hữu trực tiếp."
 },
 {
  "q": "For which industry are ECONOMIC influences most important?",
  "opts": [
   "Utilities",
   "Transportation",
   "Pharmaceuticals"
  ],
  "ans": 1,
  "en": "Transportation is deeply cyclical — freight and travel track economic activity. Utilities and pharmaceuticals are classic defensive, demand-stable sectors.",
  "vi": "Vận tải mang tính chu kỳ sâu sắc — hàng hóa và đi lại chạy theo hoạt động kinh tế. Tiện ích và dược phẩm là các ngành phòng thủ kinh điển, cầu ổn định."
 },
 {
  "q": "An investor wants to protect a SHORT position from adverse price movements while keeping the opportunity for future gains. The investor should most likely use a:",
  "opts": [
   "Stop order",
   "Limit order",
   "Market order"
  ],
  "ans": 0,
  "en": "A stop-buy above the market caps the short's loss if the price runs up, while leaving the position open to profit if the price falls — protection with upside intact.",
  "vi": "Lệnh stop-buy trên giá thị trường chặn khoản lỗ của vị thế short nếu giá vọt lên, đồng thời giữ nguyên cơ hội lời nếu giá giảm — bảo vệ mà vẫn còn upside."
 },
 {
  "q": "When making investment decisions, which best describes a way to correct a behavioral bias caused by a COGNITIVE error?",
  "opts": [
   "Obtain better investment information",
   "Rely on intuition when making investments",
   "Evaluate investments based on past gains and losses"
  ],
  "ans": 0,
  "en": "Cognitive errors stem from faulty reasoning — better information, education, and process correct them. Intuition and anchoring on past gains/losses are the biases themselves.",
  "vi": "Lỗi nhận thức xuất phát từ suy luận sai — thông tin tốt hơn, học tập và quy trình sẽ sửa được. Trực giác và neo vào lãi/lỗ quá khứ chính là các thiên lệch."
 },
 {
  "q": "At maturity, the buyer of an OTC financial instrument faces the counterparty credit risk of the seller in:",
  "opts": [
   "A profitable long forward position only",
   "An in-the-money long call option only",
   "Both a profitable long forward position and an in-the-money long call position"
  ],
  "ans": 2,
  "en": "Credit risk sits with whoever is OWED money at settlement: a profitable forward and an ITM call both leave the buyer awaiting the seller's payment.",
  "vi": "Rủi ro tín dụng nằm ở phía ĐƯỢC nhận tiền lúc thanh toán: forward có lãi và call đang ITM đều khiến người mua chờ khoản chi trả từ người bán."
 },
 {
  "q": "Order book bids: 2,000 @ 42.56; 4,000 @ 42.52; 7,100 @ 42.44; 5,000 @ 42.42. A trader receives an order to sell 9,000 shares with a limit of CHF 42.52. The average execution price is closest to:",
  "opts": [
   "42.50",
   "42.52",
   "42.53"
  ],
  "ans": 2,
  "en": "The limit permits hitting bids at or above 42.52: 2,000 @ 42.56 + 4,000 @ 42.52 = 6,000 shares filled (3,000 remain unexecuted). Average = (2,000 × 42.56 + 4,000 × 42.52)/6,000 = 42.533.",
  "vi": "Giới hạn cho phép khớp các bid từ 42,52 trở lên: 2.000 @ 42,56 + 4.000 @ 42,52 = 6.000 cổ phiếu khớp (3.000 chưa khớp). Giá bình quân = (2.000 × 42,56 + 4.000 × 42,52)/6.000 = 42,533."
 },
 {
  "q": "A US investor buys an ADR of a Japanese company. If the stock's total return in Japan is 3% and the yen appreciates 3% against the dollar, the investor's total return is closest to:",
  "opts": [
   "0%",
   "3%",
   "6%"
  ],
  "ans": 2,
  "en": "Returns compound across the two sources: (1.03)(1.03) − 1 = 6.09% ≈ 6% — the local return plus the currency gain.",
  "vi": "Lợi suất lũy kế qua hai nguồn: (1,03)(1,03) − 1 = 6,09% ≈ 6% — lợi suất nội địa cộng lãi tỷ giá."
 }
]
});
window.CFA.mocktests.push({
 name: "Mock Exam 2 — Session 1 (Ethics · Quant · Econ · FSA · Corporate Issuers)",
 qs: [
 {
  "q": "Which of the following is a VIOLATION of the Standard relating to preservation of confidentiality?",
  "opts": [
   "Members share details relating to former clients with third party service providers",
   "Members convey to clients that not all firm-sponsored resources may be appropriate for communicating confidential information",
   "When allowed under the law, members share confidential client information to defend themselves in a CFA Institute Professional Conduct Program investigation"
  ],
  "ans": 0,
  "en": "The duty of confidentiality extends to FORMER clients — sharing their details with outside providers breaches III(E). Advising clients on secure channels is good practice, and cooperating with a PCP investigation is explicitly permitted.",
  "vi": "Nghĩa vụ bảo mật kéo dài cả với khách hàng CŨ — chia sẻ thông tin của họ cho bên cung cấp dịch vụ ngoài là vi phạm III(E). Tư vấn khách về kênh liên lạc an toàn là thực hành tốt, còn hợp tác với điều tra PCP được cho phép rõ ràng."
 },
 {
  "q": "Which is most accurate under the Standard relating to knowledge of the law? Members are required to:",
  "opts": [
   "Dissociate from client activities they believe are unethical",
   "Have detailed knowledge of all the laws that could potentially govern their activities",
   "Report potential violations by fellow members to the CFA Institute Professional Conduct Program"
  ],
  "ans": 0,
  "en": "Standard I(A) requires dissociating from illegal or unethical activity. It demands only an UNDERSTANDING of applicable law — not encyclopedic knowledge — and reporting peers to the PCP is encouraged, not required.",
  "vi": "Standard I(A) yêu cầu tách mình khỏi hoạt động phi pháp hoặc phi đạo đức. Nó chỉ đòi HIỂU luật áp dụng — không phải thuộc lòng mọi luật — và báo cáo đồng nghiệp lên PCP là được khuyến khích, không bắt buộc."
 },
 {
  "q": "Robert Dowling, CFA, is part of a research team that recommended a \"buy\" rating, but Dowling disagrees. To comply with the Standard on diligence and reasonable basis, Dowling:",
  "opts": [
   "Must decline to be identified with the report",
   "Must ensure the report reflects his opinion",
   "May continue to be identified with the report as long as the recommendation has a reasonable basis"
  ],
  "ans": 2,
  "en": "Group research needs a reasonable and adequate basis — not unanimity. A dissenting member may stay on the report; dissociation is required only when the basis itself is lacking.",
  "vi": "Nghiên cứu nhóm cần cơ sở hợp lý, đầy đủ — không cần đồng thuận tuyệt đối. Thành viên bất đồng vẫn có thể đứng tên; chỉ buộc rút tên khi chính cơ sở phân tích có vấn đề."
 },
 {
  "q": "Daniel Morgan, a Level III candidate, signs into a CFA-candidate-only forum after the exam and posts his opinion that the CFA Program and examination policies are unfair. Has Morgan violated the Standards?",
  "opts": [
   "No",
   "Yes, by providing confidential program information",
   "Yes, by compromising the reputation of CFA Institute"
  ],
  "ans": 0,
  "en": "Expressing opinions — even critical ones — about CFA Institute's policies is expressly permitted. Only disclosing confidential EXAM CONTENT would breach VII(A).",
  "vi": "Bày tỏ quan điểm — kể cả chỉ trích — về chính sách của CFA Institute được cho phép rõ ràng. Chỉ tiết lộ NỘI DUNG ĐỀ THI bảo mật mới vi phạm VII(A)."
 },
 {
  "q": "Which is a recommended procedure under the Standard relating to performance presentation?",
  "opts": [
   "Use a single representative account for each mandate when presenting performance history",
   "Consider the knowledge and sophistication of the audience to whom the performance history is presented",
   "Exclude terminated accounts while presenting performance history, indicating when the accounts were terminated"
  ],
  "ans": 1,
  "en": "Tailoring the presentation to the audience's sophistication is a recommended III(D) procedure. Composites — not one cherry-picked account — should be used, and TERMINATED accounts must be INCLUDED through their final dates.",
  "vi": "Điều chỉnh cách trình bày theo mức am hiểu của người nghe là quy trình khuyến nghị của III(D). Phải dùng composite — không phải một tài khoản được chọn đẹp — và tài khoản ĐÃ ĐÓNG phải được GỘP VÀO đến ngày kết thúc."
 },
 {
  "q": "Under the Standard relating to loyalty, prudence, and care, members are most likely required to:",
  "opts": [
   "Vote all proxies on behalf of clients even if some offer no direct client benefit",
   "Avoid the use of soft dollars unless the services purchased have corresponding benefit for the client",
   "Consider each investment based solely on its characteristics, independently of other portfolio assets"
  ],
  "ans": 1,
  "en": "Client brokerage belongs to the client: soft dollars may only buy research that benefits the client. Proxy voting follows a cost–benefit analysis (not \"all\"), and investments are judged in the PORTFOLIO context.",
  "vi": "Hoa hồng môi giới thuộc về khách hàng: soft dollars chỉ được mua dịch vụ nghiên cứu có lợi cho khách. Bỏ phiếu proxy theo phân tích chi phí–lợi ích (không phải \"tất cả\"), và khoản đầu tư được đánh giá trong bối cảnh DANH MỤC."
 },
 {
  "q": "According to the GIPS standards, compliance may be claimed only:",
  "opts": [
   "After verification has been performed",
   "If the firm is compliant on a firm-wide basis",
   "With respect to specific composites and not to individual portfolios"
  ],
  "ans": 1,
  "en": "GIPS compliance is all-or-nothing at the FIRM level. Verification is voluntary, and compliance can never attach to selected composites alone.",
  "vi": "Tuân thủ GIPS là tất-cả-hoặc-không ở cấp CÔNG TY. Verification là tự nguyện, và không bao giờ được tuyên bố tuân thủ chỉ cho vài composite chọn lọc."
 },
 {
  "q": "Under the Standard on additional compensation arrangements, a member must obtain employer permission before accepting third-party benefits:",
  "opts": [
   "Only for services rendered to her employer",
   "Only for services that might create a conflict with her employer's interest",
   "Both for services rendered to the employer and for services that might create a conflict"
  ],
  "ans": 1,
  "en": "IV(B) targets compensation that competes with or might CONFLICT with the employer's interest — that is what requires written consent from all parties.",
  "vi": "IV(B) nhắm vào các khoản thù lao cạnh tranh hoặc có thể XUNG ĐỘT với lợi ích của chủ lao động — đó là thứ cần sự đồng ý bằng văn bản của các bên."
 },
 {
  "q": "Diana Fairbanks, CFA, learns from her auditor husband that a computer firm he audits will receive a qualified opinion. Later she notices a new client account holds substantial shares of that firm. An internet search reveals no news about the audit. To avoid violating the Standards, Fairbanks should most likely:",
  "opts": [
   "Take no investment action",
   "Complete a thorough and diligent analysis of the company and then sell the stock",
   "Sell the stock immediately as she has a reasonable basis for taking this investment action"
  ],
  "ans": 0,
  "en": "The upcoming qualified opinion is material nonpublic information. Standard II(A) bars trading or causing trades on it — selling in any form would act on MNPI, so she must not act (and should seek public dissemination through proper channels).",
  "vi": "Ý kiến kiểm toán ngoại trừ sắp công bố là thông tin trọng yếu chưa công khai. Standard II(A) cấm giao dịch hoặc khiến người khác giao dịch dựa trên nó — bán dưới bất kỳ hình thức nào đều là hành động trên MNPI, nên cô không được làm gì (và nên thúc đẩy công bố thông tin qua kênh phù hợp)."
 },
 {
  "q": "If a member self-discloses a matter questioning his professional conduct in his annual statement, an initial investigation is conducted by the:",
  "opts": [
   "Standard of Practice Council",
   "Disciplinary Review Committee",
   "Professional Conduct Program staff"
  ],
  "ans": 2,
  "en": "Professional Conduct staff (under the Designated Officer) conduct inquiries and investigations; the DRC hears appeals and serious cases afterward.",
  "vi": "Nhân sự Professional Conduct (dưới Designated Officer) thực hiện thẩm tra và điều tra ban đầu; DRC xử các vụ nghiêm trọng và phúc thẩm sau đó."
 },
 {
  "q": "A firm manages $500 million in large-cap equity: non-fee-paying portfolios are $50 million and fee-paying NON-discretionary portfolios are $75 million. Under GIPS, the firm must present its large-cap composite value as:",
  "opts": [
   "$375 million",
   "$425 million",
   "$450 million"
  ],
  "ans": 0,
  "en": "Composites contain only actual, FEE-PAYING, DISCRETIONARY portfolios: 500 − 50 (non-fee) − 75 (non-discretionary) = $375m.",
  "vi": "Composite chỉ gồm danh mục thực, TRẢ PHÍ, TOÀN QUYỀN: 500 − 50 (không phí) − 75 (không toàn quyền) = $375tr."
 },
 {
  "q": "Procedure 1: Disseminate to all employees a list of past violations together with disciplinary actions. Procedure 2: Check references of potential employees to ensure they are of good character. Which is among the recommended procedures for compliance with the Standard relating to misconduct?",
  "opts": [
   "Procedure 1 only",
   "Procedure 2 only",
   "Both Procedure 1 and Procedure 2"
  ],
  "ans": 2,
  "en": "I(D) recommended procedures include a code of ethics, publicizing the list of violations and sanctions to deter misconduct, and background/reference checks on prospective employees — both procedures qualify.",
  "vi": "Quy trình khuyến nghị của I(D) gồm bộ quy tắc đạo đức, công bố danh sách vi phạm cùng hình thức kỷ luật để răn đe, và kiểm tra lai lịch/người tham chiếu của ứng viên — cả hai quy trình đều đúng."
 },
 {
  "q": "A member develops allocation procedures for block trades and new issues. Under the recommended fair dealing procedures, the allocation procedures should involve:",
  "opts": [
   "Prohibiting consideration of advance interest when allocating trades for new issues",
   "Bundling orders on a first-in, first-out basis for efficiency as appropriate for the asset class",
   "Giving client accounts in a block trade execution prices corresponding to order arrival time"
  ],
  "ans": 1,
  "en": "Recommended trade-allocation practice: time-stamp and process orders first-in first-out, bundling where efficient for the asset class. Block-trade participants receive the SAME average price (not arrival-time prices), and new issues ARE allocated using advance indications of interest.",
  "vi": "Thực hành phân bổ khuyến nghị: đóng dấu thời gian và xử lý lệnh theo thứ tự đến trước làm trước, gộp lệnh khi hiệu quả cho loại tài sản. Các tài khoản trong block trade nhận CÙNG giá bình quân (không theo giờ lệnh đến), còn phát hành mới ĐƯỢC phân bổ dựa trên đăng ký quan tâm trước."
 },
 {
  "q": "Ming Mei Xu, CFA, shares her buy recommendation with the public two days after sending it to her clients; the price rises. Her client Trevor Thomas, CFA, buys a large position, then sells it a month later at a profit, causing a significant price decline. Has the Standard on market manipulation been violated?",
  "opts": [
   "No",
   "Yes, by Xu",
   "Yes, by Thomas"
  ],
  "ans": 0,
  "en": "Neither acted to deceive: Xu may serve clients before the public, and Thomas simply traded on a recommendation then took profits. Price impact alone — without intent to mislead — is not manipulation.",
  "vi": "Không ai có ý lừa dối thị trường: Xu được phép phục vụ khách hàng trước công chúng, còn Thomas chỉ mua theo khuyến nghị rồi chốt lời. Tác động lên giá đơn thuần — không có ý đồ đánh lừa — không phải thao túng."
 },
 {
  "q": "Michael Pak retired, stopped paying CFA Institute dues, and no longer files the annual Professional Conduct Statement. Applying to a charity's investment committee, he writes: \"I was a CFA Institute member for 20 years.\" Has Pak violated the Standards?",
  "opts": [
   "No",
   "Yes, the Standard on conduct as participants in CFA Institute programs",
   "Yes, the Standard on reference to CFA Institute, the CFA designation, and the CFA Program"
  ],
  "ans": 0,
  "en": "The statement is past-tense and factual — he WAS a member for 20 years. Claiming to be a CURRENT member or charterholder after lapsing would be the violation.",
  "vi": "Câu nói ở thì quá khứ và đúng sự thật — ông ĐÃ TỪNG là thành viên 20 năm. Chỉ khi tự nhận đang LÀ thành viên hay charterholder sau khi hết hiệu lực mới vi phạm."
 },
 {
  "q": "According to the Standard relating to loyalty, members must:",
  "opts": [
   "Subordinate any personal obligations to their work",
   "Place the interests of their employer below the interests of clients",
   "Refrain from entering into an independent business while still employed"
  ],
  "ans": 1,
  "en": "The Code's hierarchy: market integrity and clients come before the employer. Independent practice is allowed WITH employer consent, and personal obligations need not be surrendered wholesale.",
  "vi": "Thứ bậc trong Code: tính chính trực của thị trường và khách hàng đứng trên chủ lao động. Kinh doanh độc lập được phép NẾU chủ đồng ý, và nghĩa vụ cá nhân không phải hy sinh toàn bộ."
 },
 {
  "q": "Yun Hae, CFA, manages portfolios at Citadel Capital, where her brother keeps a fee-paying retirement account in which she has no beneficial ownership. For every suitable IPO, Hae allocates shares to other clients first, placing only remaining shares in her brother's account, to avoid potential conflicts. Hae's actions violate the Standard(s) relating:",
  "opts": [
   "Only to fair dealing",
   "Only to priority of transactions",
   "Both to fair dealing and to priority of transactions"
  ],
  "ans": 0,
  "en": "A fee-paying family account with NO beneficial ownership is an ordinary client — systematically shortchanging it breaches fair dealing III(B). Priority of transactions VI(B) governs accounts she beneficially owns, which this is not.",
  "vi": "Tài khoản người thân trả phí mà cô KHÔNG có quyền hưởng lợi là khách hàng bình thường — luôn xếp nó cuối là vi phạm fair dealing III(B). Priority of transactions VI(B) chỉ áp cho tài khoản cô hưởng lợi, mà đây không phải."
 },
 {
  "q": "To claim compliance with the GIPS standards, a firm that has existed for two years must:",
  "opts": [
   "Wait one year to present three years of GIPS-compliant performance",
   "Wait three years to present five years of GIPS-compliant performance",
   "Initially present GIPS-compliant performance since the firm's inception date"
  ],
  "ans": 2,
  "en": "Firms younger than five years present a compliant record since inception, then build toward the ten-year record year by year — no waiting required.",
  "vi": "Công ty dưới năm tuổi trình bày lịch sử đạt chuẩn kể từ ngày thành lập, rồi bồi đắp dần đến đủ mười năm — không phải chờ đợi."
 },
 {
  "q": "Statement 1: \"Investment professionals should provide to their clients notification of approved referral fee programs.\" Statement 2: \"Members should provide their employer at least annual updates on the amount and nature of compensation received.\" Which is consistent with the recommended procedures for the Standard on referral fees?",
  "opts": [
   "Statement 1 only",
   "Statement 2 only",
   "Both Statement 1 and Statement 2"
  ],
  "ans": 0,
  "en": "Firms with approved referral programs should have professionals notify clients of them — Statement 1 matches. The recommended update frequency to employers is at least QUARTERLY, so \"annual\" in Statement 2 falls short.",
  "vi": "Công ty có chương trình giới thiệu được phê duyệt nên yêu cầu nhân sự thông báo cho khách — Statement 1 đúng. Tần suất cập nhật cho chủ lao động được khuyến nghị tối thiểu HÀNG QUÝ, nên chữ \"hàng năm\" ở Statement 2 chưa đạt."
 },
 {
  "q": "A recommended procedure for compliance with the Standard on responsibilities of supervisors is that members should encourage their firms to:",
  "opts": [
   "Adopt a code of ethics that addresses general fiduciary concepts",
   "Provide the firm's clients with a copy of detailed compliance procedures",
   "Commingle the firm's code of ethics with its detailed compliance procedures"
  ],
  "ans": 0,
  "en": "Firms should adopt a code of ethics stating general fiduciary principles — and keep it SEPARATE from detailed compliance procedures so the ethical foundation stays visible. Clients need the code, not the procedural manual.",
  "vi": "Công ty nên ban hành bộ quy tắc đạo đức nêu các nguyên tắc tín thác tổng quát — và giữ nó TÁCH BIỆT khỏi quy trình tuân thủ chi tiết để nền tảng đạo đức luôn rõ ràng. Khách hàng cần bộ quy tắc, không phải cẩm nang quy trình."
 },
 {
  "q": "Which claim can an asset management firm most likely make regarding the GIPS standards?",
  "opts": [
   "Claim GIPS compliance using the GIPS Compliance Statement",
   "State that the firm will achieve GIPS compliance by a future date",
   "Claim partial GIPS compliance with details on areas of non-compliance"
  ],
  "ans": 0,
  "en": "Only the prescribed Compliance Statement may be used, and only when fully compliant. Future-dated promises and partial-compliance claims are both prohibited.",
  "vi": "Chỉ được dùng đúng Tuyên bố Tuân thủ theo mẫu, và chỉ khi tuân thủ trọn vẹn. Hứa hẹn ngày tương lai và tuyên bố tuân thủ một phần đều bị cấm."
 },
 {
  "q": "According to the Standard relating to suitability, a member should update a client's Investment Policy Statement at least:",
  "opts": [
   "Quarterly",
   "Semiannually",
   "Annually"
  ],
  "ans": 2,
  "en": "III(C) recommends reviewing and updating the IPS at least annually — and additionally whenever the client's circumstances materially change.",
  "vi": "III(C) khuyến nghị rà soát và cập nhật IPS tối thiểu hàng năm — và thêm nữa mỗi khi hoàn cảnh của khách thay đổi trọng yếu."
 },
 {
  "q": "Ann Collins, CFA, manages a fund for Kreet Investments (KI). KI's employee retirement plan offers ten mutual funds, including two managed by KI colleagues. Collins reallocates her personal retirement money into the two colleague-managed funds without disclosing the change to KI or her clients. Has Collins violated the Standard on conflicts of interest?",
  "opts": [
   "No",
   "Yes, by failing to disclose the allocation change to KI",
   "Yes, by failing to disclose the change to her clients"
  ],
  "ans": 0,
  "en": "Choosing among her own employer-sponsored plan options creates no conflict with clients or employer — it is a routine personal investment decision requiring no disclosure.",
  "vi": "Chọn giữa các quỹ trong chính chương trình hưu trí của công ty không tạo xung đột nào với khách hàng hay chủ lao động — đó là quyết định đầu tư cá nhân thường tình, không cần công bố."
 },
 {
  "q": "John Clark, CFA, starts a new job and re-creates a research report on a company he covered at his previous employer. He uses information gathered directly from the covered company and also his personal notes taken while at his previous employer. Has Clark violated the Standard on record retention?",
  "opts": [
   "No",
   "Yes, because he uses information gathered directly from the covered company",
   "Yes, because he uses his personal notes taken while working at his previous employer"
  ],
  "ans": 2,
  "en": "Records created on the job — including his own notes — belong to the EMPLOYER. He must rebuild research from newly gathered public and company sources, which the first action correctly does.",
  "vi": "Hồ sơ tạo ra trong công việc — kể cả ghi chú của chính anh — thuộc về CHỦ LAO ĐỘNG cũ. Anh phải dựng lại nghiên cứu từ nguồn công khai và từ công ty thu thập mới, điều mà hành động thứ nhất làm đúng."
 },
 {
  "q": "According to the Standard relating to misrepresentation, a member is most likely required to:",
  "opts": [
   "Disclose his intended use of an external manager",
   "Always provide a benchmark for investment strategies",
   "Provide attribution to a member who is no longer with the firm when issuing a report"
  ],
  "ans": 0,
  "en": "Presenting outsourced management as one's own service misrepresents capabilities — the use of external managers must be disclosed. Benchmarks aren't mandated for every strategy, and firm reports need not credit departed staff.",
  "vi": "Trình bày dịch vụ thuê ngoài như của chính mình là xuyên tạc năng lực — việc dùng nhà quản lý bên ngoài phải được công bố. Benchmark không bắt buộc cho mọi chiến lược, và báo cáo của công ty không cần ghi công nhân sự đã rời đi."
 },
 {
  "q": "With respect to issuer-paid research, members are NOT required to:",
  "opts": [
   "Strictly limit the type of compensation they accept from the covered company",
   "Fully disclose the nature of compensation received from the covered company",
   "Accept compensation related only to the investment performance of the covered company"
  ],
  "ans": 2,
  "en": "Performance-linked pay is exactly what issuer-paid research must AVOID — the standard calls for a flat fee agreed in advance, plus full disclosure. So option C is not required; it is prohibited.",
  "vi": "Thù lao gắn với diễn biến giá là thứ nghiên cứu do tổ chức phát hành trả tiền phải TRÁNH — chuẩn mực đòi hỏi phí cố định thỏa thuận trước, kèm công bố đầy đủ. Nên phương án C không phải yêu cầu; nó bị cấm."
 },
 {
  "q": "Joanne Rosewood, CFA, replaces one of the third-party advisers managing her clients' portfolios with an internal investment strategy. She does not notify clients because the investment style is unchanged. Rosewood most likely violated the Standard relating to:",
  "opts": [
   "Avoid or disclose conflicts",
   "Loyalty, prudence, and care",
   "Communication with clients and prospective clients"
  ],
  "ans": 2,
  "en": "Switching from an external adviser to internal management changes the investment PROCESS — V(B) requires promptly disclosing significant process changes even when the style label stays the same.",
  "vi": "Đổi từ cố vấn bên ngoài sang quản lý nội bộ là thay đổi QUY TRÌNH đầu tư — V(B) yêu cầu công bố kịp thời các thay đổi trọng yếu của quy trình dù nhãn phong cách không đổi."
 },
 {
  "q": "For a non-colluding oligopoly in a price war market, competitors are most likely to:",
  "opts": [
   "Match a rival's price reduction and ignore a rival's price increase",
   "Ignore a rival's price reduction and match a rival's price increase",
   "Match both a rival's price reduction and a rival's price increase"
  ],
  "ans": 0,
  "en": "The kinked demand curve logic: cuts are matched (to defend share), increases are ignored (to steal share) — which is what keeps oligopoly prices sticky.",
  "vi": "Logic đường cầu gãy khúc: giảm giá thì bị theo (để giữ thị phần), tăng giá thì bị mặc kệ (để cướp thị phần) — chính điều này khiến giá trong độc quyền nhóm cứng nhắc."
 },
 {
  "q": "Which sampling method involves selecting every kth member from a population until the desired sample size is obtained?",
  "opts": [
   "Cluster sampling",
   "Systematic sampling",
   "Convenience sampling"
  ],
  "ans": 1,
  "en": "Fixed-interval selection — every kth element — is the definition of systematic sampling.",
  "vi": "Chọn theo bước nhảy cố định — phần tử thứ k mỗi lượt — chính là định nghĩa của systematic sampling."
 },
 {
  "q": "In the year of a change in accounting policy, comparability of the presented financial statements is best with:",
  "opts": [
   "Prospective application",
   "Retrospective application",
   "Modified retrospective application"
  ],
  "ans": 1,
  "en": "Retrospective application restates all prior periods under the new policy, making every year shown directly comparable.",
  "vi": "Áp dụng hồi tố trình bày lại mọi kỳ trước theo chính sách mới, khiến mọi năm được trình bày so sánh trực tiếp được với nhau."
 },
 {
  "q": "A portfolio's target semideviation is calculated over twelve consecutive months, including seven months of below-target returns. The sum of squared deviations below the target is 42%². The target semideviation is closest to:",
  "opts": [
   "1.87%",
   "1.95%",
   "2.65%"
  ],
  "ans": 1,
  "en": "Divide by n − 1 using the FULL sample size: 42/(12 − 1) = 3.818 → √3.818 = 1.95%. Dividing by 7 − 1 (the below-target count) is the trap.",
  "vi": "Chia cho n − 1 với cỡ mẫu ĐẦY ĐỦ: 42/(12 − 1) = 3,818 → √3,818 = 1,95%. Chia cho 7 − 1 (số tháng dưới mục tiêu) là cái bẫy."
 },
 {
  "q": "Which mature company is most likely to use the greatest amount of leverage in its capital structure?",
  "opts": [
   "Mining company",
   "Software company",
   "Shipping company"
  ],
  "ans": 2,
  "en": "Shipping's long-lived, saleable vessels make superb collateral supporting heavy debt. Mining's revenue is too commodity-volatile, and software has few tangible assets to pledge.",
  "vi": "Đội tàu đời dài, dễ bán của ngành vận tải biển là tài sản thế chấp tuyệt vời cho vay nợ lớn. Doanh thu khai khoáng quá biến động theo hàng hóa, còn phần mềm có ít tài sản hữu hình để cầm cố."
 },
 {
  "q": "Which statement about company stakeholders is most accurate?",
  "opts": [
   "Debtholders tend to prefer that a company raise more equity",
   "Shareholder–debtholder conflict is greater for short-term creditors",
   "Shareholders are more likely than debtholders to impose contractual limits on leverage"
  ],
  "ans": 0,
  "en": "More equity thickens the cushion protecting creditors — debtholders love it. The conflict intensifies with LONGER maturities, and leverage covenants are imposed BY debtholders.",
  "vi": "Thêm vốn chủ làm dày tấm đệm bảo vệ chủ nợ — họ rất thích. Xung đột gay gắt hơn với kỳ hạn DÀI, còn giao ước hạn chế đòn bẩy do CHỦ NỢ áp đặt."
 },
 {
  "q": "Which market structure most likely has the greatest elasticity of demand?",
  "opts": [
   "Oligopoly",
   "Perfect competition",
   "Monopolistic competition"
  ],
  "ans": 1,
  "en": "The perfectly competitive firm faces a PERFECTLY elastic (horizontal) demand curve — identical substitutes make any price above market lose all sales.",
  "vi": "Công ty cạnh tranh hoàn hảo đối mặt đường cầu co giãn HOÀN TOÀN (nằm ngang) — hàng thay thế y hệt khiến giá cao hơn thị trường một chút là mất sạch doanh số."
 },
 {
  "q": "Which of the following is an assumption of Modigliani and Miller's propositions regarding capital structure?",
  "opts": [
   "Investors have homogeneous expectations",
   "Investors can borrow and lend at a zero interest rate",
   "Financing decisions depend on investment decisions"
  ],
  "ans": 0,
  "en": "MM assumes homogeneous expectations, perfect markets, borrowing at the RISK-FREE rate (not zero), and INDEPENDENCE of financing and investment decisions.",
  "vi": "MM giả định kỳ vọng đồng nhất, thị trường hoàn hảo, vay ở lãi suất PHI RỦI RO (không phải 0), và quyết định tài trợ ĐỘC LẬP với quyết định đầu tư."
 },
 {
  "q": "In geopolitics, cabotage is best described as a:",
  "opts": [
   "Financial tool",
   "Multi-tool approach",
   "National security tool"
  ],
  "ans": 2,
  "en": "Cabotage — restricting domestic transport routes to domestic carriers — is a national security tool in the geopolitical toolkit.",
  "vi": "Cabotage — giới hạn tuyến vận tải nội địa cho hãng trong nước — là công cụ an ninh quốc gia trong bộ công cụ địa chính trị."
 },
 {
  "q": "A policy rate that is neutral will become CONTRACTIONARY if trend growth:",
  "opts": [
   "Increases and expected inflation increases",
   "Decreases and expected inflation remains the same",
   "Decreases and expected inflation increases by the same amount"
  ],
  "ans": 1,
  "en": "Neutral rate = trend growth + expected inflation. If trend growth falls with inflation unchanged, the neutral rate drops BELOW the standing policy rate — the same rate now restrains.",
  "vi": "Lãi suất trung tính = tăng trưởng xu hướng + lạm phát kỳ vọng. Nếu tăng trưởng xu hướng giảm mà lạm phát giữ nguyên, mức trung tính rơi XUỐNG DƯỚI lãi suất chính sách hiện hành — cùng mức lãi đó giờ thành thắt chặt."
 },
 {
  "q": "A 3-year construction contract: price €108m, expected total costs €70m, Year 1 costs €28m, on-time completion bonus €6m. Costs measure progress; the company has limited experience with similar contracts and delays are possible. Assuming it is highly probable that recognized revenue will not reverse, Year 1 revenue is most likely:",
  "opts": [
   "€0",
   "€43.2",
   "€45.6"
  ],
  "ans": 1,
  "en": "Progress = 28/70 = 40%. The €6m bonus is variable consideration that fails the \"highly probable no reversal\" test (limited experience, delay risk) — exclude it: 40% × 108 = €43.2m.",
  "vi": "Tiến độ = 28/70 = 40%. Khoản thưởng €6tr là khoản thanh toán biến đổi không qua được phép thử \"rất khó đảo ngược\" (ít kinh nghiệm, rủi ro trễ hạn) — loại ra: 40% × 108 = €43,2tr."
 },
 {
  "q": "The amount of time from when a company invests in working capital until it collects cash is the:",
  "opts": [
   "Net operating cycle",
   "Defensive interval ratio",
   "Number of days of sales outstanding"
  ],
  "ans": 0,
  "en": "That span — pay for inputs, hold inventory, collect receivables, net of payables financing — is the net operating (cash conversion) cycle. DSO is only one slice of it.",
  "vi": "Khoảng đó — trả tiền đầu vào, giữ tồn kho, thu tiền phải thu, trừ phần được nhà cung cấp tài trợ — là chu kỳ hoạt động ròng (chu kỳ chuyển đổi tiền). DSO chỉ là một lát cắt."
 },
 {
  "q": "In the recovery phase of the business cycle, the economy is most likely:",
  "opts": [
   "Enjoying an upswing and a positive output gap opens",
   "Going through a trough and a positive output gap opens",
   "Going through a trough and a negative output gap starts to narrow"
  ],
  "ans": 2,
  "en": "Recovery = the economy turns at the trough while actual output still sits BELOW potential — the negative output gap begins narrowing, not yet positive.",
  "vi": "Recovery = nền kinh tế đảo chiều tại đáy trong khi sản lượng thực còn DƯỚI tiềm năng — khoảng cách sản lượng âm bắt đầu thu hẹp, chưa chuyển dương."
 },
 {
  "q": "In periods of rising prices and increasing inventory quantities, using LIFO instead of FIFO most likely increases:",
  "opts": [
   "Total assets",
   "Cost of goods sold",
   "Days of inventory on hand"
  ],
  "ans": 1,
  "en": "LIFO expenses the newest, most expensive units first → higher COGS, lower inventory (lower assets) and fewer days of inventory on hand.",
  "vi": "LIFO đưa các đơn vị mới nhất, đắt nhất vào giá vốn trước → COGS cao hơn, tồn kho thấp hơn (tài sản thấp hơn) và số ngày tồn kho ít hơn."
 },
 {
  "q": "Risks associated with supplier relationships are typically mitigated through:",
  "opts": [
   "Contracts",
   "Regulation",
   "Board representation"
  ],
  "ans": 0,
  "en": "Supplier relationships are contractual: terms, quality clauses, and penalties manage the risk. Regulation governs broader conduct, and board seats belong to shareholders.",
  "vi": "Quan hệ nhà cung cấp mang tính hợp đồng: điều khoản, cam kết chất lượng, chế tài quản trị rủi ro. Luật lệ điều chỉnh hành vi rộng hơn, còn ghế HĐQT thuộc về cổ đông."
 },
 {
  "q": "An increase in utility for a company's products as the products become more widely adopted best describes:",
  "opts": [
   "Network effects",
   "Operating leverage",
   "Product differentiation"
  ],
  "ans": 0,
  "en": "Each new user makes the product more valuable to every other user — the network effect (think payment platforms, marketplaces).",
  "vi": "Mỗi người dùng mới khiến sản phẩm giá trị hơn với mọi người dùng khác — hiệu ứng mạng lưới (nghĩ đến nền tảng thanh toán, sàn giao dịch)."
 },
 {
  "q": "If inventory written down in a previous period subsequently increases in value, the original write-down can be reversed under:",
  "opts": [
   "IFRS only",
   "US GAAP only",
   "Both IFRS and US GAAP"
  ],
  "ans": 0,
  "en": "IFRS permits reversal up to the original write-down; US GAAP treats the written-down value as the new cost basis — no reversal, ever.",
  "vi": "IFRS cho hoàn nhập tối đa bằng mức ghi giảm gốc; US GAAP coi giá trị sau ghi giảm là giá gốc mới — không bao giờ hoàn nhập."
 },
 {
  "q": "A cooperative country is most likely to have characteristics of both:",
  "opts": [
   "Technology exchange and retaliation",
   "Rules standardization and reciprocation",
   "Harmonization of tariffs and arbitrary rules"
  ],
  "ans": 1,
  "en": "Cooperation shows up as standardized rules plus reciprocal exchange (goods, information, technology). Retaliation and arbitrary rule-making are hallmarks of NON-cooperation.",
  "vi": "Hợp tác thể hiện qua chuẩn hóa luật chơi cộng trao đổi có đi có lại (hàng hóa, thông tin, công nghệ). Trả đũa và luật lệ tùy tiện là dấu hiệu của BẤT hợp tác."
 },
 {
  "q": "All else equal, if interest expense is NOT tax deductible, as a company's marginal tax rate increases, the company's WACC:",
  "opts": [
   "Decreases",
   "Remains the same",
   "Increases"
  ],
  "ans": 1,
  "en": "The (1 − t) shield exists only because interest is deductible. Remove deductibility and the tax rate drops out of the WACC formula entirely — nothing moves.",
  "vi": "Lá chắn (1 − t) tồn tại chỉ vì lãi vay được khấu trừ. Bỏ tính khấu trừ thì thuế suất biến mất khỏi công thức WACC — không gì thay đổi."
 },
 {
  "q": "Twenty items in ascending order: −41, −18, −17, −9, −8, −6, −5, 3, 3, 3, 5, 5, 7, 7, 11, 12, 20, 21, 21, 61. The median is closest to:",
  "opts": [
   "3",
   "4",
   "5"
  ],
  "ans": 1,
  "en": "Even count → average the 10th and 11th values: (3 + 5)/2 = 4.",
  "vi": "Số quan sát chẵn → trung bình giá trị thứ 10 và 11: (3 + 5)/2 = 4."
 },
 {
  "q": "A company forecasts 10% organic revenue growth with sales volume growing 6.4%. The forecast price/mix impact is closest to:",
  "opts": [
   "3.4%",
   "17.0%",
   "56.3%"
  ],
  "ans": 0,
  "en": "Growth components compound: (1.10)/(1.064) − 1 = 3.4%. Simple subtraction (3.6%) overstates it slightly.",
  "vi": "Các cấu phần tăng trưởng nhân lũy kế: (1,10)/(1,064) − 1 = 3,4%. Trừ đơn thuần (3,6%) hơi phóng đại."
 },
 {
  "q": "The term Big Data refers to:",
  "opts": [
   "Structured data only",
   "Unstructured data only",
   "Both structured and unstructured data"
  ],
  "ans": 2,
  "en": "Big Data spans traditional structured records AND unstructured text, images, and sensor feeds — volume, velocity, and variety.",
  "vi": "Big Data bao trùm dữ liệu có cấu trúc truyền thống VÀ văn bản, hình ảnh, cảm biến phi cấu trúc — khối lượng, tốc độ, và độ đa dạng."
 },
 {
  "q": "Which best describes the link between the cash flow statement and the balance sheet?",
  "opts": [
   "The cash flow statement reconciles changes in all balance sheet accounts",
   "The investing section reconciles the changes in current assets",
   "The cash flow statement reconciles the beginning and ending balances of cash on the balance sheet"
  ],
  "ans": 2,
  "en": "The statement's whole purpose: explain how the balance sheet's opening cash became its closing cash through operating, investing, and financing flows.",
  "vi": "Toàn bộ mục đích của báo cáo: giải thích tiền đầu kỳ trên bảng cân đối biến thành tiền cuối kỳ ra sao qua các dòng hoạt động, đầu tư, tài trợ."
 },
 {
  "q": "Assuming no retaliation, which condition must hold for a LARGE country to increase national welfare by imposing a tariff?",
  "opts": [
   "It must have a comparative advantage in producing the imported good",
   "The deadweight loss must be smaller than the benefit of its improving terms of trade",
   "It must auction the import licenses to offset the decline in consumer surplus"
  ],
  "ans": 1,
  "en": "A large importer can push world prices down — a terms-of-trade gain. Welfare rises only if that gain outweighs the tariff's deadweight losses.",
  "vi": "Nước nhập khẩu lớn có thể ép giá thế giới xuống — lợi ích điều kiện thương mại. Phúc lợi chỉ tăng nếu lợi ích đó lớn hơn tổn thất vô ích của thuế quan."
 },
 {
  "q": "An analyst estimates the probabilities of three economic scenarios and, within each, the probabilities of a stock having a positive or negative return. These are best represented by a:",
  "opts": [
   "Tree-map",
   "Tree diagram",
   "Probability density function"
  ],
  "ans": 1,
  "en": "Sequential conditional outcomes — scenario first, return outcome second — branch naturally into a tree diagram. A tree-MAP is a data-visualization rectangle chart, a different animal.",
  "vi": "Kết cục có điều kiện theo trình tự — kịch bản trước, kết quả lợi nhuận sau — phân nhánh tự nhiên thành tree diagram. Tree-MAP là biểu đồ ô chữ nhật trong trực quan hóa dữ liệu, một loài khác hẳn."
 },
 {
  "q": "An inflation-targeting central bank most likely has a medium-term inflation target sufficiently:",
  "opts": [
   "Below zero to avoid deflation risk but high enough to ensure price stability",
   "Above zero to avoid deflation risk but low enough to ensure price stability",
   "Above zero to avoid inflation risk and high enough to ensure price stability"
  ],
  "ans": 1,
  "en": "The target sits modestly ABOVE zero — a buffer against deflation — yet LOW enough (typically ~2%) to preserve price stability.",
  "vi": "Mục tiêu đặt hơi TRÊN mức 0 — vùng đệm chống giảm phát — nhưng đủ THẤP (thường ~2%) để giữ ổn định giá."
 },
 {
  "q": "Assuming wages and prices are stable, which policy combination most likely leads to an INCREASE in the private sector's share of GDP?",
  "opts": [
   "Easy fiscal and easy monetary policy",
   "Tight fiscal and easy monetary policy",
   "Easy fiscal and tight monetary policy"
  ],
  "ans": 1,
  "en": "Tight fiscal shrinks the government's slice; easy money fuels private borrowing and spending — the composition shifts toward the private sector.",
  "vi": "Tài khóa chặt thu nhỏ phần của chính phủ; tiền tệ lỏng tiếp sức vay mượn và chi tiêu tư nhân — cơ cấu dịch về phía khu vực tư."
 },
 {
  "q": "Account 1: 6.1% compounded daily. Account 2: 6.3% compounded annually. Account 3: 6.2% compounded quarterly. For a $1,000 deposit today, the future value in one year is greatest for:",
  "opts": [
   "Account 1",
   "Account 2",
   "Account 3"
  ],
  "ans": 2,
  "en": "Compare effective annual rates: A1 = (1 + 0.061/365)³⁶⁵ − 1 = 6.29%; A2 = 6.30%; A3 = (1 + 0.062/4)⁴ − 1 = 6.35%. Account 3 wins — frequency helps, but the stated rate matters too.",
  "vi": "So lãi suất hiệu dụng năm: A1 = (1 + 0,061/365)³⁶⁵ − 1 = 6,29%; A2 = 6,30%; A3 = (1 + 0,062/4)⁴ − 1 = 6,35%. Account 3 thắng — tần suất ghép giúp ích, nhưng lãi suất danh nghĩa cũng quan trọng."
 },
 {
  "q": "At year end, a company has non-convertible debt, ordinary shares, and employee stock options outstanding. The company's capital structure is considered to be:",
  "opts": [
   "Simple, if the options are antidilutive",
   "Complex, because the company has both debt and equity",
   "Complex, because the options are convertible into ordinary shares"
  ],
  "ans": 2,
  "en": "A complex structure is defined by POTENTIALLY dilutive securities — options that can convert into ordinary shares. Plain debt-plus-equity alone stays simple.",
  "vi": "Cấu trúc phức tạp được định nghĩa bằng chứng khoán CÓ KHẢ NĂNG pha loãng — quyền chọn có thể chuyển thành cổ phiếu phổ thông. Chỉ nợ cộng vốn chủ thông thường vẫn là cấu trúc đơn giản."
 },
 {
  "q": "Which is most likely to signal manipulation of financial reporting for a large, diversified company?",
  "opts": [
   "A history of large expense items classified as unusual",
   "Operating margins out of line with other diversified companies",
   "Changes in accounting policies to reflect new accounting standards"
  ],
  "ans": 1,
  "en": "Peer-defying margins with no economic story are a classic red flag. Repeated \"unusual\" items warrant scrutiny but standard-driven policy changes are legitimate; the peer-margin anomaly ranks first for a diversified firm.",
  "vi": "Biên lợi nhuận lệch hẳn khỏi các công ty cùng nhóm mà không có câu chuyện kinh tế là cờ đỏ kinh điển. Khoản mục \"bất thường\" lặp lại đáng soi nhưng đổi chính sách theo chuẩn mực mới là hợp lệ; bất thường biên so với peers đứng đầu với công ty đa ngành."
 },
 {
  "q": "According to capital allocation principles, managers should ignore:",
  "opts": [
   "Taxes",
   "The volatility of cash flows",
   "Expenses that were already incurred"
  ],
  "ans": 2,
  "en": "Sunk costs are unrecoverable and irrelevant to forward-looking decisions. Taxes and cash-flow risk very much belong in the analysis.",
  "vi": "Chi phí chìm không thể thu hồi và không liên quan đến quyết định hướng tương lai. Thuế và độ biến động dòng tiền thì rất cần trong phân tích."
 },
 {
  "q": "An individual invests $50,000 today and receives $56,000 in one year. If her required rate of return is 12.0%, the rate of return on the investment is:",
  "opts": [
   "Less than the required rate of return",
   "Equal to the required rate of return",
   "Greater than the required rate of return"
  ],
  "ans": 1,
  "en": "Return = 56,000/50,000 − 1 = 12.0% — exactly the required rate.",
  "vi": "Lợi suất = 56.000/50.000 − 1 = 12,0% — đúng bằng mức yêu cầu."
 },
 {
  "q": "The entire cost of an intangible asset is most likely expensed when incurred if the asset is:",
  "opts": [
   "Developed internally",
   "Acquired through business combinations",
   "Purchased in a transaction other than a business combination"
  ],
  "ans": 0,
  "en": "Internally developed intangibles are generally expensed (research always; development too under US GAAP, and under IFRS unless strict criteria are met). Purchased and acquired intangibles are capitalized at cost or fair value.",
  "vi": "Tài sản vô hình tự phát triển nhìn chung ghi vào chi phí (nghiên cứu luôn luôn; phát triển cũng vậy theo US GAAP, và theo IFRS trừ khi đạt tiêu chí nghiêm ngặt). Tài sản mua và tài sản nhận qua hợp nhất được vốn hóa theo giá gốc hoặc giá trị hợp lý."
 },
 {
  "q": "An argument FOR a country's high national debt relative to GDP being a concern is when the debt:",
  "opts": [
   "Is owed to domestic citizens",
   "Is used for capital investments",
   "Reduces private sector investing"
  ],
  "ans": 2,
  "en": "Crowding out — government borrowing displacing private investment — is the genuine worry. Internally held debt and debt funding productive capital are the counter-arguments.",
  "vi": "Chèn lấn — vay nợ chính phủ đẩy lùi đầu tư tư nhân — là mối lo thực sự. Nợ do dân trong nước nắm và nợ tài trợ đầu tư sản xuất là các lập luận phản bác."
 },
 {
  "q": "Days of inventory / days sales outstanding / days of payables — Company 1: 45/30/25; Company 2: 62/45/60; Company 3: 50/53/48. The company with the SHORTEST cash conversion cycle is:",
  "opts": [
   "Company 1",
   "Company 2",
   "Company 3"
  ],
  "ans": 1,
  "en": "CCC = DOH + DSO − DPO: C1 = 45 + 30 − 25 = 50; C2 = 62 + 45 − 60 = 47; C3 = 50 + 53 − 48 = 55. Company 2's generous payables financing wins it the shortest cycle.",
  "vi": "CCC = DOH + DSO − DPO: C1 = 45 + 30 − 25 = 50; C2 = 62 + 45 − 60 = 47; C3 = 50 + 53 − 48 = 55. Nguồn tài trợ dồi dào từ phải trả giúp Company 2 có chu kỳ ngắn nhất."
 },
 {
  "q": "Which factor is most likely to lead to economies of scale?",
  "opts": [
   "Supply constraints",
   "Duplication of product lines",
   "Specialization by workers"
  ],
  "ans": 2,
  "en": "Larger scale lets labor and management specialize, cutting cost per unit. Supply constraints and duplicated lines push costs the other way (diseconomies).",
  "vi": "Quy mô lớn hơn cho phép lao động và quản lý chuyên môn hóa, hạ chi phí mỗi đơn vị. Ràng buộc nguồn cung và trùng lặp dòng sản phẩm đẩy chi phí theo chiều ngược lại (bất lợi quy mô)."
 },
 {
  "q": "Current assets (€ thousands): cash 300, short-term marketable investments 400, receivables 100, inventory 200. If the current ratio is 1.0, the quick ratio is:",
  "opts": [
   "0.7",
   "0.8",
   "0.9"
  ],
  "ans": 1,
  "en": "Current ratio 1.0 → current liabilities = total current assets = 1,000. Quick = (300 + 400 + 100)/1,000 = 0.8 — inventory drops out.",
  "vi": "Current ratio 1,0 → nợ ngắn hạn = tổng tài sản ngắn hạn = 1.000. Quick = (300 + 400 + 100)/1.000 = 0,8 — tồn kho bị loại."
 },
 {
  "q": "The bootstrap resampling method:",
  "opts": [
   "Guarantees that all items will appear in the resamples",
   "Relies on an analytical formula to estimate the distribution of the estimators",
   "Mimics the random sampling process by treating the randomly drawn sample as if it were the population"
  ],
  "ans": 2,
  "en": "Bootstrap resamples WITH replacement from the observed sample, treating it as a stand-in population — no formula, and no guarantee every item appears.",
  "vi": "Bootstrap rút mẫu CÓ hoàn lại từ mẫu quan sát, coi nó như tổng thể thay thế — không cần công thức, và không bảo đảm mọi phần tử đều xuất hiện."
 },
 {
  "q": "Percentage increases: real USD/EUR exchange rate +5%; Eurozone price level +2%; US price level +1.5%. The predicted change in the nominal USD/EUR spot rate is closest to:",
  "opts": [
   "−0.5%",
   "4.5%",
   "5.5%"
  ],
  "ans": 1,
  "en": "Real = nominal × P_f/P_d → %Δnominal ≈ %Δreal + π_domestic − π_foreign = 5 + 1.5 − 2 = 4.5%.",
  "vi": "Real = nominal × P_f/P_d → %Δnominal ≈ %Δreal + π_trong nước − π_nước ngoài = 5 + 1,5 − 2 = 4,5%."
 },
 {
  "q": "A company is PROHIBITED from reversing an impairment loss on a long-lived asset classified as:",
  "opts": [
   "Held for use under IFRS",
   "Held for use under US GAAP",
   "Held for sale under US GAAP"
  ],
  "ans": 1,
  "en": "US GAAP bars reversals for held-for-USE assets. IFRS permits reversals generally, and even US GAAP allows recovery (up to the original loss) for held-for-SALE assets.",
  "vi": "US GAAP cấm hoàn nhập với tài sản giữ để SỬ DỤNG. IFRS cho hoàn nhập nói chung, và ngay cả US GAAP cũng cho phục hồi (tối đa bằng khoản lỗ gốc) với tài sản giữ để BÁN."
 },
 {
  "q": "Unaudited financial statements are most likely presented in a(n):",
  "opts": [
   "Annual report",
   "Quarterly report",
   "Proxy statement"
  ],
  "ans": 1,
  "en": "Interim (quarterly/semiannual) statements are typically unaudited; annual statements carry the auditor's opinion, and proxy statements are governance documents.",
  "vi": "Báo cáo giữa kỳ (quý/bán niên) thường không kiểm toán; báo cáo năm mang ý kiến kiểm toán viên, còn proxy statement là tài liệu quản trị."
 },
 {
  "q": "From a corporate issuer's perspective, a benefit of issuing debt rather than equity is that debt is most likely:",
  "opts": [
   "Cheaper",
   "Less risky",
   "More permanent"
  ],
  "ans": 0,
  "en": "Debt's contractual priority and tax-deductible interest make it the cheaper capital. For the ISSUER it is riskier (default risk) and temporary (it matures) — equity is the permanent capital.",
  "vi": "Thứ tự ưu tiên theo hợp đồng và lãi vay được khấu trừ thuế khiến nợ là nguồn vốn rẻ hơn. Với TỔ CHỨC PHÁT HÀNH nợ rủi ro hơn (rủi ro vỡ nợ) và tạm thời (có đáo hạn) — vốn chủ mới là vốn vĩnh viễn."
 },
 {
  "q": "Compared with its net income, a mature company's operating cash flow is most likely:",
  "opts": [
   "Lower",
   "The same",
   "Higher"
  ],
  "ans": 2,
  "en": "Adding back depreciation and other non-cash charges typically lifts CFO above net income for mature firms with stable working capital.",
  "vi": "Cộng ngược khấu hao và các khoản phi tiền mặt thường đưa CFO lên trên lợi nhuận ròng ở công ty trưởng thành có vốn lưu động ổn định."
 },
 {
  "q": "In hypothesis testing, which of the following is stated in terms of POPULATION parameters?",
  "opts": [
   "The null hypothesis only",
   "The alternative hypothesis only",
   "Both the null and the alternative hypothesis"
  ],
  "ans": 2,
  "en": "Both H₀ and Hₐ are claims about population parameters (μ, σ², ρ…); sample statistics only supply the evidence to choose between them.",
  "vi": "Cả H₀ và Hₐ đều là mệnh đề về tham số tổng thể (μ, σ², ρ…); thống kê mẫu chỉ cung cấp bằng chứng để lựa chọn giữa hai bên."
 },
 {
  "q": "Year-end data (£m): receivables 55 → 65; inventory 140 → 120; PP&E 1,400 → 1,400; accumulated depreciation 80 → 120; payables 40 → 25. Year 2 net income £860m, no PP&E purchases/sales, no write-downs. Cash flow from operating activities for Year 2 is:",
  "opts": [
   "£855",
   "£895",
   "£925"
  ],
  "ans": 1,
  "en": "CFO = 860 + depreciation 40 (120 − 80) − ΔAR 10 + ΔInv 20 − ΔAP 15 = £895m. Receivables up consumes cash; inventory down and depreciation give it back; payables down consumes it.",
  "vi": "CFO = 860 + khấu hao 40 (120 − 80) − ΔPhải thu 10 + ΔTồn kho 20 − ΔPhải trả 15 = £895tr. Phải thu tăng ngốn tiền; tồn kho giảm và khấu hao trả lại; phải trả giảm ngốn tiền."
 },
 {
  "q": "Costs incurred during the development phase related to internally generated, identifiable intangible assets:",
  "opts": [
   "Must be expensed",
   "Must be capitalized",
   "Can be capitalized if certain criteria are met"
  ],
  "ans": 2,
  "en": "Under IFRS, development costs are capitalized once technical feasibility, intent, ability to sell/use, and reliable measurement are demonstrated — conditional, not automatic.",
  "vi": "Theo IFRS, chi phí phát triển được vốn hóa khi chứng minh được tính khả thi kỹ thuật, ý định, khả năng bán/sử dụng và đo lường tin cậy — có điều kiện, không tự động."
 },
 {
  "q": "A simple linear regression uses 35 months of data. ANOVA: regression SS = 17.3009 (df 1); error SS = 20.2299 (df 33); mean square error = 0.6130. The standard error of the estimate is closest to:",
  "opts": [
   "0.68",
   "0.78",
   "1.05"
  ],
  "ans": 1,
  "en": "SEE = √MSE = √0.6130 = 0.78 — the square root of the error mean square, directly off the ANOVA table.",
  "vi": "SEE = √MSE = √0,6130 = 0,78 — căn bậc hai của trung bình bình phương sai số, lấy thẳng từ bảng ANOVA."
 },
 {
  "q": "If the cost of capital exceeds the return on invested capital, shareholder value will:",
  "opts": [
   "Decrease",
   "Remain the same",
   "Increase"
  ],
  "ans": 0,
  "en": "ROIC < cost of capital means every dollar invested earns less than it costs — growth under these conditions destroys value.",
  "vi": "ROIC < chi phí vốn nghĩa là mỗi đồng đầu tư sinh lời ít hơn chi phí của nó — tăng trưởng trong điều kiện này phá hủy giá trị."
 },
 {
  "q": "Electronics manufacturer (€ thousands) — cost of sales: Y1 = 800, Y2 = 1,000; ending inventory cost: Y1 = 120, Y2 = 150; NRV of inventory: Y1 = 160, Y2 = 125. Obsolescence allowances are already in cost of sales. Days of inventory on hand for Year 2 (average inventory, 365 days) is closest to:",
  "opts": [
   "45",
   "49",
   "52"
  ],
  "ans": 0,
  "en": "Carry each year at the lower of cost and NRV: Y1 = min(120, 160) = 120; Y2 = min(150, 125) = 125. Average = 122.5 → DOH = 122.5/1,000 × 365 = 44.7 ≈ 45.",
  "vi": "Ghi mỗi năm theo mức thấp hơn giữa giá gốc và NRV: N1 = min(120, 160) = 120; N2 = min(150, 125) = 125. Bình quân = 122,5 → DOH = 122,5/1.000 × 365 = 44,7 ≈ 45."
 },
 {
  "q": "The effectiveness of infrastructure spending as a NEAR-TERM fiscal stimulant would be LEAST constrained by the:",
  "opts": [
   "Action lag",
   "Impact lag",
   "Recognition lag"
  ],
  "ans": 2,
  "en": "Infrastructure's bottlenecks are the action lag (legislation, planning) and impact lag (construction takes years). The recognition lag — spotting the need for stimulus — afflicts all tools equally and binds infrastructure least.",
  "vi": "Nút thắt của đầu tư hạ tầng là độ trễ hành động (lập pháp, quy hoạch) và độ trễ tác động (xây dựng mất nhiều năm). Độ trễ nhận biết — phát hiện nhu cầu kích thích — ảnh hưởng mọi công cụ như nhau và trói hạ tầng ít nhất."
 },
 {
  "q": "Land under the revaluation model: original cost €12m; first revaluation €17m (end of Year 1); second revaluation €12m (end of Year 2). As a result of the second revaluation, the company recognizes in Year 2:",
  "opts": [
   "A €5 million loss on the income statement",
   "A €5 million loss in other comprehensive income",
   "Neither a loss on the income statement nor a loss in OCI"
  ],
  "ans": 1,
  "en": "The first revaluation parked a €5m surplus in OCI. The €5m decline exactly unwinds that surplus through OCI — the income statement is touched only if value falls BELOW original cost.",
  "vi": "Lần đánh giá lại đầu gửi €5tr thặng dư vào OCI. Cú giảm €5tr tháo đúng khoản thặng dư đó qua OCI — báo cáo lãi lỗ chỉ bị chạm khi giá trị rơi XUỐNG DƯỚI giá gốc."
 },
 {
  "q": "The goal of ordinary least squares regression is to minimize the sum of squared deviations between the observations of the dependent variable and the corresponding:",
  "opts": [
   "Estimated values of the dependent variable",
   "Observed values of the independent variable",
   "Values of the true underlying dependent variable"
  ],
  "ans": 0,
  "en": "OLS minimizes Σ(y − ŷ)² — observed Y against the FITTED (estimated) Y from the regression line.",
  "vi": "OLS cực tiểu hóa Σ(y − ŷ)² — Y quan sát so với Y ƯỚC LƯỢNG từ đường hồi quy."
 },
 {
  "q": "Which is most likely a motivation for LEASING a high-value asset long term rather than purchasing it?",
  "opts": [
   "Reduced exposure to obsolescence risk",
   "Not having to recognize an asset on the balance sheet",
   "Not having to recognize a liability on the balance sheet"
  ],
  "ans": 0,
  "en": "The lessor keeps the residual-value and obsolescence risk — a real economic motive. Under current standards, long-term leases put BOTH a right-of-use asset and a lease liability on the balance sheet, killing the old off-balance-sheet motives.",
  "vi": "Bên cho thuê gánh rủi ro giá trị còn lại và lỗi thời — một động cơ kinh tế thực. Theo chuẩn mực hiện hành, thuê dài hạn đưa CẢ tài sản quyền sử dụng lẫn nợ thuê lên bảng cân đối, xóa sổ động cơ ngoại bảng ngày xưa."
 },
 {
  "q": "The most appropriate statement about financial ratio analysis is that it has LIMITED use as an analytical tool for:",
  "opts": [
   "Evaluating management",
   "Comparing companies that use different accounting methods",
   "Providing insights into microeconomic relationships within a company that help analysts project earnings"
  ],
  "ans": 1,
  "en": "Different accounting choices (LIFO vs FIFO, revaluation vs cost…) distort cross-company ratios unless adjusted — the classic limitation. Evaluating management and projecting earnings are ratio analysis's strengths.",
  "vi": "Lựa chọn kế toán khác nhau (LIFO/FIFO, đánh giá lại/giá gốc…) làm méo tỷ số giữa các công ty nếu không điều chỉnh — hạn chế kinh điển. Đánh giá ban điều hành và dự phóng lợi nhuận là thế mạnh của phân tích tỷ số."
 },
 {
  "q": "Which could result in a PERMANENT difference between accounting profit and taxable income?",
  "opts": [
   "Used tax credits",
   "A tax loss carryforward",
   "Differences between carrying amount and tax base due to different depreciation methods"
  ],
  "ans": 0,
  "en": "Tax credits permanently change tax owed without ever reversing. Loss carryforwards create deferred tax assets, and depreciation differences are temporary — they reverse over the asset's life.",
  "vi": "Tín dụng thuế thay đổi vĩnh viễn số thuế phải nộp và không bao giờ hoàn nghịch. Lỗ chuyển sang tạo tài sản thuế hoãn lại, còn chênh lệch khấu hao là tạm thời — sẽ hoàn nghịch qua đời tài sản."
 },
 {
  "q": "EUR/USD spot 0.9876 (EUR per 1 USD); 180-day USD risk-free rate 1.00%; 180-day EUR risk-free rate 1.20%. The 180-day EUR/USD forward rate is closest to:",
  "opts": [
   "0.98662",
   "0.98858",
   "0.98956"
  ],
  "ans": 1,
  "en": "F = S × (1 + i_price × 180/360)/(1 + i_base × 180/360) = 0.9876 × 1.006/1.005 = 0.98858 — EUR is the price currency, USD the base.",
  "vi": "F = S × (1 + i_định giá × 180/360)/(1 + i_cơ sở × 180/360) = 0,9876 × 1,006/1,005 = 0,98858 — EUR là đồng định giá, USD là đồng cơ sở."
 },
 {
  "q": "The static trade-off theory of capital structure most likely considers:",
  "opts": [
   "Agency costs of equity",
   "Information asymmetry",
   "The tax shield provided by debt"
  ],
  "ans": 2,
  "en": "Static trade-off balances debt's tax shield against expected financial distress costs. Agency and information stories belong to other capital-structure theories (agency theory, pecking order).",
  "vi": "Lý thuyết đánh đổi tĩnh cân bằng lá chắn thuế của nợ với chi phí kiệt quệ tài chính kỳ vọng. Câu chuyện đại diện và bất cân xứng thông tin thuộc các lý thuyết khác (agency, pecking order)."
 },
 {
  "q": "Which can be calculated from BALANCE SHEET information only?",
  "opts": [
   "Quick ratio",
   "Debt coverage",
   "Receivables turnover ratio"
  ],
  "ans": 0,
  "en": "Quick ratio = (cash + marketable securities + receivables)/current liabilities — all balance sheet lines. Debt coverage needs CFO; receivables turnover needs revenue.",
  "vi": "Quick ratio = (tiền + chứng khoán + phải thu)/nợ ngắn hạn — toàn khoản mục bảng cân đối. Debt coverage cần CFO; vòng quay phải thu cần doanh thu."
 },
 {
  "q": "Investment 1: 20 annual payments of $50,000 starting in one year. Investment 2: 25 annual payments of $45,000 starting today. Investment 3: annual payments of $40,000 indefinitely, starting today. At a 10% discount rate, the highest present value belongs to:",
  "opts": [
   "Investment 1",
   "Investment 2",
   "Investment 3"
  ],
  "ans": 1,
  "en": "PV₁ = 50,000 × [1 − 1.1⁻²⁰]/0.1 = 425,678. PV₂ (annuity due) = 45,000 × [1 − 1.1⁻²⁵]/0.1 × 1.1 = 449,312. PV₃ (perpetuity due) = 40,000 + 40,000/0.1 = 440,000. Investment 2 wins.",
  "vi": "PV₁ = 50.000 × [1 − 1,1⁻²⁰]/0,1 = 425.678. PV₂ (niên kim đầu kỳ) = 45.000 × [1 − 1,1⁻²⁵]/0,1 × 1,1 = 449.312. PV₃ (vĩnh viễn đầu kỳ) = 40.000 + 40.000/0,1 = 440.000. Investment 2 thắng."
 },
 {
  "q": "Which most likely has the greatest access to capital?",
  "opts": [
   "Corporation",
   "Limited partnership",
   "General partnership"
  ],
  "ans": 0,
  "en": "Corporations tap public equity and debt markets with unlimited investor pools and transferable shares — partnerships rely on far narrower private funding.",
  "vi": "Công ty cổ phần huy động trên thị trường cổ phiếu và trái phiếu đại chúng với lượng nhà đầu tư không giới hạn và cổ phần chuyển nhượng được — công ty hợp danh chỉ dựa vào nguồn vốn tư nhân hẹp hơn nhiều."
 },
 {
  "q": "Target weight of debt 25%, equity 75%; before-tax cost of debt 4%; cost of equity 12%; marginal tax rate 20%, interest deductible. The WACC is:",
  "opts": [
   "9.80%",
   "10.00%",
   "10.25%"
  ],
  "ans": 0,
  "en": "WACC = 0.25 × 4% × (1 − 0.20) + 0.75 × 12% = 0.80% + 9.00% = 9.80%.",
  "vi": "WACC = 0,25 × 4% × (1 − 0,20) + 0,75 × 12% = 0,80% + 9,00% = 9,80%."
 },
 {
  "q": "Earnings distribution: $100m with p = 0.25; $300m with p = 0.70; $600m with p = 0.05. The standard deviation of earnings is closest to:",
  "opts": [
   "$115 million",
   "$134 million",
   "$375 million"
  ],
  "ans": 0,
  "en": "E = 0.25(100) + 0.70(300) + 0.05(600) = 265. Var = 0.25(−165)² + 0.70(35)² + 0.05(335)² = 6,806 + 858 + 5,611 = 13,275 → σ = $115m.",
  "vi": "E = 0,25(100) + 0,70(300) + 0,05(600) = 265. Var = 0,25(−165)² + 0,70(35)² + 0,05(335)² = 6.806 + 858 + 5.611 = 13.275 → σ = $115tr."
 },
 {
  "q": "A security bought for ¥500,000 declines 10% over the first 3 months, then rises 9% over the next 3 months. The 6-month holding period return is closest to:",
  "opts": [
   "−1.9%",
   "−1.0%",
   "−0.5%"
  ],
  "ans": 0,
  "en": "Chain the sub-periods: (0.90)(1.09) − 1 = −1.9%. The −10% loss needs more than +9% to heal — the asymmetry of percentage losses.",
  "vi": "Nối chuỗi các kỳ con: (0,90)(1,09) − 1 = −1,9%. Khoản lỗ −10% cần hơn +9% mới lành — tính bất đối xứng của phần trăm lỗ."
 }
]
});
window.CFA.mocktests.push({
 name: "Mock Exam 2 — Session 2 (FI · Equity · Derivatives · Alternatives · PM)",
 qs: [
 {
  "q": "The price of a European call option is:",
  "opts": [
   "Directly related to the price of the underlying and inversely related to volatility",
   "Directly related to volatility of the underlying and inversely related to the dividend yield",
   "Directly related to the dividend yield and inversely related to the price of the underlying"
  ],
  "ans": 1,
  "en": "Calls rise with volatility (asymmetric payoff) and fall with dividend yield (payouts drain the underlying's forward value). They also rise with the underlying price — which is why A's second half kills it.",
  "vi": "Giá call tăng theo biến động (payoff bất đối xứng) và giảm theo tỷ suất cổ tức (chi trả rút bớt giá trị kỳ hạn của tài sản). Nó cũng tăng theo giá tài sản cơ sở — nên vế sau của phương án A sai."
 },
 {
  "q": "Annual spot rates: 1-year 1.0%; 2-year 1.1%; 3-year 1.3%. The arbitrage-free price of a 3% annual-pay, three-year bond is closest to:",
  "opts": [
   "104.99",
   "105.48",
   "107.62"
  ],
  "ans": 0,
  "en": "Discount each cash flow at its own spot rate: 3/1.01 + 3/1.011² + 103/1.013³ = 2.970 + 2.935 + 99.085 = 104.99.",
  "vi": "Chiết khấu từng dòng tiền theo đúng spot rate của nó: 3/1,01 + 3/1,011² + 103/1,013³ = 2,970 + 2,935 + 99,085 = 104,99."
 },
 {
  "q": "Which best describes an ABSOLUTE risk objective for a client's portfolio?",
  "opts": [
   "An annual tracking risk of less than 2 percent",
   "A twelve-month 95% value at risk of less than €1,000,000",
   "Maintaining at least €10,000 in cash for planned monthly withdrawals"
  ],
  "ans": 1,
  "en": "VaR caps risk in standalone terms — absolute. Tracking risk is measured RELATIVE to a benchmark, and the cash floor is a liquidity constraint, not a risk objective.",
  "vi": "VaR giới hạn rủi ro theo giá trị độc lập — tuyệt đối. Tracking risk đo TƯƠNG ĐỐI so với benchmark, còn mức tiền mặt tối thiểu là ràng buộc thanh khoản, không phải mục tiêu rủi ro."
 },
 {
  "q": "A mortgage pass-through's average life fell from five years to two years over the last six months. Investors most likely experienced:",
  "opts": [
   "Balloon risk",
   "Extension risk",
   "Contraction risk"
  ],
  "ans": 2,
  "en": "A shrinking average life means prepayments accelerated (rates likely fell) — contraction risk: principal returns sooner than expected, to be reinvested at lower rates.",
  "vi": "Đời bình quân co lại nghĩa là trả trước tăng tốc (lãi suất có lẽ đã giảm) — contraction risk: gốc quay về sớm hơn dự kiến, phải tái đầu tư ở lãi suất thấp hơn."
 },
 {
  "q": "All else equal, which would LOWER a company's sustainable growth rate?",
  "opts": [
   "An increased retention rate",
   "A decreased return on total assets",
   "An increased financial leverage ratio"
  ],
  "ans": 1,
  "en": "g = retention × ROE, and ROE = ROA × leverage. Lower ROA drags ROE and g down; higher retention or higher leverage would push g UP.",
  "vi": "g = tỷ lệ giữ lại × ROE, và ROE = ROA × đòn bẩy. ROA giảm kéo ROE và g xuống; tăng giữ lại hay tăng đòn bẩy sẽ đẩy g LÊN."
 },
 {
  "q": "Which statement about real estate investments is most accurate?",
  "opts": [
   "Investors in real estate limited partnerships are exposed to unlimited liability",
   "Free and clear ownership means that the property is unencumbered by a mortgage",
   "REITs are required to retain most of their taxable income for future capital expenditures"
  ],
  "ans": 1,
  "en": "Free and clear = full title with no mortgage lien. Limited partners enjoy LIMITED liability, and REITs must DISTRIBUTE (not retain) most taxable income to keep their tax status.",
  "vi": "Free and clear = sở hữu trọn vẹn không vướng thế chấp. Thành viên góp vốn hưởng trách nhiệm HỮU HẠN, còn REIT phải PHÂN PHỐI (không giữ lại) phần lớn thu nhập chịu thuế để giữ quy chế thuế."
 },
 {
  "q": "In the binomial model, if the probability of a downward movement in the underlying increases, the value of a call option:",
  "opts": [
   "Decreases",
   "Remains unchanged",
   "Increases"
  ],
  "ans": 1,
  "en": "Option values use RISK-NEUTRAL probabilities derived from u, d, and the risk-free rate — the real-world probability of a down move never enters the formula.",
  "vi": "Giá quyền chọn dùng xác suất TRUNG HÒA RỦI RO suy từ u, d và lãi suất phi rủi ro — xác suất thực tế của cú giảm không bao giờ vào công thức."
 },
 {
  "q": "Which is best classified as FINANCIAL risk?",
  "opts": [
   "Market risk",
   "Longevity risk",
   "Accounting risk"
  ],
  "ans": 0,
  "en": "The financial-risk family: market, credit, and liquidity risk. Longevity and accounting risks are non-financial.",
  "vi": "Họ rủi ro tài chính: rủi ro thị trường, tín dụng và thanh khoản. Rủi ro tuổi thọ và kế toán thuộc phi tài chính."
 },
 {
  "q": "For portfolio managers of ACTIVE funds, market indexes are LEAST useful as:",
  "opts": [
   "Benchmarks",
   "Model portfolios",
   "Proxies to measure risk-adjusted performance"
  ],
  "ans": 1,
  "en": "Copying an index as a model portfolio is passive management's use. Active managers still need indexes as benchmarks and as market proxies for beta and alpha calculations.",
  "vi": "Sao chép chỉ số làm danh mục mẫu là cách dùng của quản lý thụ động. Nhà quản lý chủ động vẫn cần chỉ số làm benchmark và làm đại diện thị trường để tính beta, alpha."
 },
 {
  "q": "Which is most likely an element of INDUSTRY AND COMPETITIVE analysis?",
  "opts": [
   "Analyzing market share trends",
   "Determining forecast objects and approaches",
   "Analyzing uses of capital and sources of financing"
  ],
  "ans": 0,
  "en": "Market share trends reveal competitive position within the industry. Forecast design belongs to the forecasting stage; capital uses and financing belong to company financial analysis.",
  "vi": "Xu hướng thị phần hé lộ vị thế cạnh tranh trong ngành. Thiết kế dự phóng thuộc bước dự báo; sử dụng vốn và nguồn tài trợ thuộc phân tích tài chính công ty."
 },
 {
  "q": "Duration is MOST accurate as a measure of interest rate risk for a bond portfolio when the slope of the yield curve:",
  "opts": [
   "Decreases",
   "Stays the same",
   "Increases"
  ],
  "ans": 1,
  "en": "Portfolio duration assumes parallel shifts. When the slope is preserved — all yields moving together — the duration estimate holds; flattening or steepening breaks it.",
  "vi": "Duration danh mục giả định dịch chuyển song song. Khi độ dốc được giữ nguyên — mọi lợi suất cùng dịch — ước tính duration đứng vững; phẳng hóa hay dốc hóa phá vỡ nó."
 },
 {
  "q": "Which most likely exhibits NEGATIVE convexity?",
  "opts": [
   "A callable bond",
   "A putable bond",
   "An option-free bond"
  ],
  "ans": 0,
  "en": "As yields fall toward the call price, the issuer's call option caps the upside — the price curve bends the wrong way. Putable and option-free bonds keep positive convexity.",
  "vi": "Khi lợi suất giảm về gần giá call, quyền mua lại của tổ chức phát hành chặn trần đà tăng giá — đường giá cong sai chiều. Trái phiếu putable và option-free giữ độ lồi dương."
 },
 {
  "q": "A security plotted to the RIGHT of the market portfolio on the security market line has a:",
  "opts": [
   "Lower expected return and lower systematic risk than the market",
   "Higher expected return and higher systematic risk than the market",
   "Higher expected return and higher unsystematic risk than the market"
  ],
  "ans": 1,
  "en": "The SML's x-axis is beta: right of the market means beta > 1 — more SYSTEMATIC risk and, on the line, a proportionally higher expected return.",
  "vi": "Trục hoành của SML là beta: bên phải thị trường nghĩa là beta > 1 — nhiều rủi ro HỆ THỐNG hơn và, nằm trên đường, lợi suất kỳ vọng cao hơn tương ứng."
 },
 {
  "q": "Emotional biases:",
  "opts": [
   "Stem from impulses and intuition",
   "Result in the same decisions as assumed by traditional finance theory",
   "Are more easily corrected through better information than cognitive biases"
  ],
  "ans": 0,
  "en": "Emotional biases spring from feeling and impulse, which is why information and education fix them LESS easily than cognitive errors — and both bias families pull decisions away from rational-theory outcomes.",
  "vi": "Thiên lệch cảm xúc bắt nguồn từ cảm giác và xung động, vì thế thông tin và giáo dục sửa chúng KHÓ hơn lỗi nhận thức — và cả hai họ thiên lệch đều kéo quyết định rời xa kết quả lý thuyết duy lý."
 },
 {
  "q": "Assuming no clawback provision, which waterfall is most advantageous to the GENERAL partner of a private equity fund?",
  "opts": [
   "American waterfall",
   "European waterfall",
   "Whole-of-fund waterfall"
  ],
  "ans": 0,
  "en": "The American (deal-by-deal) waterfall pays carry on each profitable exit immediately — earlier and larger GP cash flows. European/whole-of-fund waterfalls make the GP wait until LPs recover all capital.",
  "vi": "Waterfall kiểu Mỹ (theo từng thương vụ) trả carry ngay trên mỗi thương vụ thoái vốn có lãi — GP nhận tiền sớm và nhiều hơn. Kiểu châu Âu/toàn quỹ bắt GP chờ đến khi LP thu hồi đủ vốn."
 },
 {
  "q": "An investor buys a stock for $108 on margin, posting 40% of the initial price as equity. With a 20% maintenance margin, a margin call first occurs when the price falls below:",
  "opts": [
   "$64.80",
   "$81.00",
   "$86.40"
  ],
  "ans": 1,
  "en": "Debt per share = 0.60 × 108 = $64.80. Call when (P − 64.80)/P = 0.20 → 0.8P = 64.80 → P = $81.00.",
  "vi": "Nợ mỗi cổ phiếu = 0,60 × 108 = $64,80. Margin call khi (P − 64,80)/P = 0,20 → 0,8P = 64,80 → P = $81,00."
 },
 {
  "q": "Which derivative contract most likely requires an UPFRONT payment by the buyer at initiation?",
  "opts": [
   "Options only",
   "Forwards only",
   "Both options and forwards"
  ],
  "ans": 0,
  "en": "An option's asymmetric right costs a premium at inception. Forwards are priced so that value at initiation is zero — no money changes hands.",
  "vi": "Quyền bất đối xứng của option phải trả phí ngay lúc mở. Forward được định giá sao cho giá trị lúc khởi tạo bằng 0 — không ai trả tiền cho ai."
 },
 {
  "q": "Making a minority equity investment in a mature company that plans to expand operations best describes:",
  "opts": [
   "Growth capital investing",
   "Leveraged buyout investing",
   "Development capital investing"
  ],
  "ans": 0,
  "en": "Growth capital (growth equity) = minority stakes in mature companies funding expansion. LBOs take CONTROL with debt; the curriculum's label for this strategy is growth capital.",
  "vi": "Growth capital (growth equity) = cổ phần thiểu số trong công ty trưởng thành để tài trợ mở rộng. LBO nắm QUYỀN KIỂM SOÁT bằng nợ vay; giáo trình gọi chiến lược này là growth capital."
 },
 {
  "q": "Arbitrage is best described as an opportunity to earn:",
  "opts": [
   "Risk-free returns with no investment capital",
   "Risk-free returns with large amounts of investment capital",
   "Abnormal returns applying an absolute valuation methodology"
  ],
  "ans": 0,
  "en": "True arbitrage is self-financing: simultaneous buy-cheap/sell-dear positions that net zero outlay and lock in a riskless profit.",
  "vi": "Arbitrage đích thực tự tài trợ: mua rẻ/bán đắt đồng thời, tổng vốn bỏ ra bằng 0 và khóa chặt khoản lời phi rủi ro."
 },
 {
  "q": "Which transaction is most likely to affect a company's financial leverage ratio?",
  "opts": [
   "Payment of a 9% stock dividend",
   "An increase in cash dividends paid",
   "Completion of a 1-for-20 reverse stock split"
  ],
  "ans": 1,
  "en": "Cash out the door shrinks assets and equity by the same amount, raising assets/equity. Stock dividends and splits merely reshuffle share counts — totals untouched.",
  "vi": "Tiền mặt chảy ra làm giảm tài sản và vốn chủ cùng một lượng, đẩy tỷ số tài sản/vốn chủ lên. Cổ tức bằng cổ phiếu và chia tách chỉ xáo lại số cổ phần — các tổng số không đổi."
 },
 {
  "q": "All else equal, NON-CUMULATIVE preference shares most likely:",
  "opts": [
   "Offer dividends that are less than common shares",
   "Have a claim on net assets upon liquidation of the company",
   "Receive past unpaid dividends before dividends are paid to common shareholders"
  ],
  "ans": 1,
  "en": "All preference shares rank ahead of common on liquidation. Catching up on skipped dividends is the CUMULATIVE feature — precisely what non-cumulative shares lack.",
  "vi": "Mọi cổ phiếu ưu đãi đứng trước cổ phiếu thường khi thanh lý. Truy lĩnh cổ tức bị bỏ lỡ là đặc tính TÍCH LŨY — đúng thứ cổ phiếu không tích lũy thiếu."
 },
 {
  "q": "As one moves to the right along an investor's efficient frontier, a set increase in risk most likely leads to:",
  "opts": [
   "Sequentially smaller increases in expected return",
   "Consistent increases in expected return",
   "Sequentially larger increases in expected return"
  ],
  "ans": 0,
  "en": "The frontier is concave: each extra unit of risk buys less and less additional expected return — diminishing marginal reward.",
  "vi": "Đường biên hiệu quả lõm: mỗi đơn vị rủi ro thêm mua được ngày càng ít lợi suất kỳ vọng bổ sung — phần thưởng biên giảm dần."
 },
 {
  "q": "Risk-averse investors make investment decisions that maximize:",
  "opts": [
   "Both return and risk",
   "Return irrespective of risk",
   "Return for the same amount of risk"
  ],
  "ans": 2,
  "en": "Risk aversion means: among equal-risk choices, take the highest return (and among equal-return choices, the lowest risk).",
  "vi": "Ghét rủi ro nghĩa là: giữa các lựa chọn cùng mức rủi ro, chọn lợi suất cao nhất (và giữa các lựa chọn cùng lợi suất, chọn rủi ro thấp nhất)."
 },
 {
  "q": "Which factor most likely results in DIFFERENT credit ratings for debt issued by a subsidiary versus debt issued by its parent?",
  "opts": [
   "Differences in duration",
   "Structural subordination",
   "Cross-default provisions"
  ],
  "ans": 1,
  "en": "Structural subordination: the subsidiary's cash flows service ITS creditors first, leaving parent-level bondholders behind operating-company debt — hence different ratings. Cross-default provisions would pull ratings TOGETHER.",
  "vi": "Cấp dưới về cấu trúc: dòng tiền của công ty con phục vụ chủ nợ CỦA NÓ trước, đẩy trái chủ cấp công ty mẹ xuống sau nợ của công ty vận hành — nên xếp hạng khác nhau. Điều khoản vỡ nợ chéo lại kéo xếp hạng VỀ CÙNG nhau."
 },
 {
  "q": "An index starts at 1,000. Year 1: price return 4%, dividend return 2%. Year 2: price return 6%, dividend return 3%. The total return index value at the end of Year 2 is closest to:",
  "opts": [
   "1,102",
   "1,150",
   "1,155"
  ],
  "ans": 2,
  "en": "Total return compounds price plus dividends: 1,000 × 1.06 × 1.09 = 1,155.4. The price-only version gives 1,102, and 1,150 is the no-compounding trap.",
  "vi": "Chỉ số tổng lợi suất lũy kế cả giá lẫn cổ tức: 1.000 × 1,06 × 1,09 = 1.155,4. Bản chỉ tính giá cho 1.102, còn 1.150 là bẫy cộng dồn không lũy kế."
 },
 {
  "q": "Bond 1: monthly payments, amortizing. Bond 2: quarterly payments, amortizing. Bond 3: monthly payments, non-amortizing. All else equal, the bond with the GREATEST reinvestment risk is:",
  "opts": [
   "Bond 1",
   "Bond 2",
   "Bond 3"
  ],
  "ans": 0,
  "en": "Reinvestment risk grows with the amount of cash returned early: monthly frequency AND amortizing principal make Bond 1 recycle the most cash soonest.",
  "vi": "Rủi ro tái đầu tư tăng theo lượng tiền quay về sớm: tần suất tháng CỘNG gốc trả dần khiến Bond 1 xoay vòng nhiều tiền nhất, sớm nhất."
 },
 {
  "q": "In an equally weighted portfolio of many assets, an increase in the correlation between the assets' returns most likely decreases the portfolio's:",
  "opts": [
   "Overall risk",
   "Expected return",
   "Diversification benefit"
  ],
  "ans": 2,
  "en": "Higher correlation means assets move together — diversification does less work (and portfolio risk actually RISES). Expected return is a weighted average, untouched by correlation.",
  "vi": "Tương quan cao hơn khiến các tài sản chuyển động cùng nhau — đa dạng hóa mất tác dụng (và rủi ro danh mục thực ra TĂNG). Lợi suất kỳ vọng là bình quân gia quyền, không dính gì tới tương quan."
 },
 {
  "q": "Which best describes an advantage of the EV/EBITDA multiple for valuing equity? An advantage is that:",
  "opts": [
   "The multiple must be positive",
   "EBITDA is a proxy for operating cash flow",
   "It does not require the market value of debt"
  ],
  "ans": 1,
  "en": "EBITDA approximates pre-capex operating cash flow, making the multiple usable across leverage and depreciation policies. EV construction DOES need debt's market value, and no multiple \"must\" be positive.",
  "vi": "EBITDA xấp xỉ dòng tiền hoạt động trước capex, giúp bội số dùng được qua các mức đòn bẩy và chính sách khấu hao khác nhau. Tính EV THỰC SỰ cần giá trị thị trường của nợ, và không bội số nào \"buộc phải\" dương."
 },
 {
  "q": "The value of a swap contract at initiation is most likely equal to:",
  "opts": [
   "Zero",
   "The price of the swap",
   "The present value of the fixed payments"
  ],
  "ans": 0,
  "en": "The fixed rate is set precisely so PV(fixed leg) = PV(expected floating leg) — value at inception is zero for both sides. The swap PRICE is that fixed rate, a different concept.",
  "vi": "Lãi suất cố định được chọn đúng sao cho PV(chân cố định) = PV(chân thả nổi kỳ vọng) — giá trị lúc khởi tạo bằng 0 cho cả hai bên. GIÁ của swap là mức lãi cố định đó, một khái niệm khác."
 },
 {
  "q": "All else being equal, a cash dividend most likely has the same effect on shareholders' wealth as a:",
  "opts": [
   "Stock split",
   "Stock dividend",
   "Share repurchase"
  ],
  "ans": 2,
  "en": "Both distribute cash: total shareholder wealth is unchanged (price drops by the dividend, or shares shrink at fair value). Splits and stock dividends move no cash at all — also wealth-neutral, but the CASH-distribution twin is the repurchase.",
  "vi": "Cả hai đều phân phối tiền mặt: tổng tài sản cổ đông không đổi (giá giảm đúng bằng cổ tức, hoặc số cổ phiếu giảm theo giá hợp lý). Chia tách và cổ tức cổ phiếu không dịch chuyển đồng tiền nào — cũng trung tính, nhưng người anh em phân phối TIỀN của cổ tức là mua lại cổ phiếu."
 },
 {
  "q": "An arbitrage opportunity most likely exists if the price of a put option is LESS than the combined cost of:",
  "opts": [
   "Buying the underlying, buying the call, and buying a risk-free bond at PV of the exercise price",
   "Shorting the underlying, buying the call, and buying a risk-free bond at PV of the exercise price",
   "Shorting the underlying, buying the call, and shorting a risk-free bond at PV of the exercise price"
  ],
  "ans": 1,
  "en": "Put–call parity: p = c − S + PV(X). The right side is built by buying the call (+c), shorting the underlying (−S), and buying the bond (+PV(X)). A put cheaper than this synthetic put is an arbitrage.",
  "vi": "Ngang giá put–call: p = c − S + PV(X). Vế phải được dựng bằng mua call (+c), bán khống tài sản (−S), và mua trái phiếu (+PV(X)). Put rẻ hơn put tổng hợp này là cơ hội arbitrage."
 },
 {
  "q": "An analysis of competitive positioning such as Porter's five forces is typically included in:",
  "opts": [
   "An initial company research report only",
   "A subsequent company research report only",
   "Both initial and subsequent company research reports"
  ],
  "ans": 0,
  "en": "The comprehensive industry and competitive framework anchors the INITIAL report; follow-up reports update estimates and developments rather than rebuild the framework.",
  "vi": "Khung phân tích ngành và cạnh tranh toàn diện neo ở báo cáo BAN ĐẦU; các báo cáo tiếp theo cập nhật ước tính và diễn biến chứ không dựng lại khung."
 },
 {
  "q": "With respect to private equity funds, quartile rankings:",
  "opts": [
   "Are rarely used for performance evaluation",
   "Include comparisons of different investment strategies",
   "Are based on funds launched in the same vintage year"
  ],
  "ans": 2,
  "en": "PE performance is compared within a VINTAGE YEAR — funds that invested through the same market environment — and within similar strategies, precisely because cross-vintage comparisons mislead.",
  "vi": "Hiệu quả PE được so sánh trong cùng NĂM VINTAGE — các quỹ đầu tư qua cùng môi trường thị trường — và cùng nhóm chiến lược, chính vì so sánh khác vintage sẽ gây lạc hướng."
 },
 {
  "q": "In a SEMI-STRONG-form efficient market, which of the following is reflected in prices?",
  "opts": [
   "Past market data only",
   "Private information only",
   "Both past market data and private information"
  ],
  "ans": 0,
  "en": "Semi-strong prices embed all PUBLIC information — which includes past market data — but not private information. Among the options, only \"past market data\" describes something actually reflected.",
  "vi": "Giá trong thị trường semi-strong chứa mọi thông tin CÔNG KHAI — bao gồm dữ liệu thị trường quá khứ — nhưng không chứa thông tin riêng tư. Trong các phương án, chỉ \"dữ liệu thị trường quá khứ\" là thứ thực sự được phản ánh."
 },
 {
  "q": "A quarterly-pay bond has an effective annual rate of 10%. The semiannual bond equivalent yield is closest to:",
  "opts": [
   "9.76%",
   "10.13%",
   "10.25%"
  ],
  "ans": 0,
  "en": "Semiannual rate = 1.10^0.5 − 1 = 4.881%; bond equivalent yield = 2 × 4.881% = 9.76%. Stating the same effective return with semiannual compounding requires a lower quoted rate.",
  "vi": "Lãi bán niên = 1,10^0,5 − 1 = 4,881%; bond equivalent yield = 2 × 4,881% = 9,76%. Cùng một lợi suất hiệu dụng, quy về ghép bán niên cho lãi suất niêm yết thấp hơn."
 },
 {
  "q": "Which position requires the investor to satisfy an OBLIGATION upon option exercise?",
  "opts": [
   "Short put position",
   "Long put position",
   "Long call position"
  ],
  "ans": 0,
  "en": "Option WRITERS carry obligations: the short put must buy the underlying at the strike when assigned. Long holders own rights, not duties.",
  "vi": "Người BÁN quyền chọn mang nghĩa vụ: bên short put phải mua tài sản tại giá thực hiện khi bị gán. Người nắm giữ quyền chọn có quyền, không có nghĩa vụ."
 },
 {
  "q": "Which statement concerning a security market index is most accurate?",
  "opts": [
   "Estimated market prices of constituent securities are not used to calculate the index value",
   "The divisor will be adjusted to prevent changes not related to prices of constituent securities",
   "At inception, the total return version of an index will be greater than the price version"
  ],
  "ans": 1,
  "en": "Divisor adjustments neutralize splits, constituent changes, and other non-price events. Illiquid constituents MAY use estimated prices, and at inception the two versions start EQUAL.",
  "vi": "Điều chỉnh divisor trung hòa chia tách, thay đổi thành phần và các sự kiện phi giá khác. Thành phần kém thanh khoản CÓ THỂ dùng giá ước tính, và tại thời điểm khởi tạo hai phiên bản BẰNG nhau."
 },
 {
  "q": "Which best characterizes an interest rate swap?",
  "opts": [
   "A contingent claim derivative using Libor rates as reference rates",
   "A contingent claim used to convert exposure from fixed-rate to floating-rate",
   "A firm commitment derivative used by investment managers to change portfolio duration without trading bonds"
  ],
  "ans": 2,
  "en": "Swaps are FORWARD COMMITMENTS — binding on both sides — and a classic duration-management tool. \"Contingent claim\" describes options, so A and B fail on classification.",
  "vi": "Swap là CAM KẾT KỲ HẠN — ràng buộc cả hai bên — và là công cụ kinh điển để điều chỉnh duration. \"Contingent claim\" mô tả quyền chọn, nên A và B sai ngay ở khâu phân loại."
 },
 {
  "q": "Which is best classified as a NONSYSTEMATIC risk?",
  "opts": [
   "Political uncertainty",
   "Widespread natural disasters",
   "Bankruptcy of a major automobile producer"
  ],
  "ans": 2,
  "en": "One company's bankruptcy is firm-specific and diversifiable. Political shocks and widespread disasters wash over the whole market — systematic.",
  "vi": "Phá sản của một công ty là rủi ro riêng, đa dạng hóa được. Cú sốc chính trị và thiên tai diện rộng quét qua toàn thị trường — hệ thống."
 },
 {
  "q": "Preferred shares: par $100; annual dividend $6.00; market price $85.71; maturity 10 years. If the required return is 7% (marginal tax rate 30%), the shares are most likely:",
  "opts": [
   "Undervalued",
   "Fairly valued",
   "Overvalued"
  ],
  "ans": 0,
  "en": "With a 10-year maturity, value = 6 × [1 − 1.07⁻¹⁰]/0.07 + 100/1.07¹⁰ = 42.14 + 50.83 = $92.98 > $85.71 → undervalued. Pricing it as a perpetuity (6/0.07 = 85.71) is the trap; the tax rate is noise.",
  "vi": "Với kỳ hạn 10 năm, giá trị = 6 × [1 − 1,07⁻¹⁰]/0,07 + 100/1,07¹⁰ = 42,14 + 50,83 = $92,98 > $85,71 → bị định giá thấp. Tính như vĩnh viễn (6/0,07 = 85,71) là cái bẫy; thuế suất là số gây nhiễu."
 },
 {
  "q": "Which transaction poses the risk of losing the GREATEST dollar amount?",
  "opts": [
   "Selling a put with a strike price of $15 for $0.90",
   "Buying a call with a strike price of $15 for $11.25",
   "Buying a put with a strike price of $37.50 for $12.75"
  ],
  "ans": 0,
  "en": "Max losses: short put = 15 − 0.90 = $14.10 (underlying to zero); long call = premium $11.25; long put = premium $12.75. The short put risks the most.",
  "vi": "Lỗ tối đa: bán put = 15 − 0,90 = $14,10 (tài sản về 0); mua call = phí $11,25; mua put = phí $12,75. Bán put rủi ro lớn nhất."
 },
 {
  "q": "When securitizing a corporation's loans, a special purpose entity most likely:",
  "opts": [
   "Services the corporation's loans",
   "Sells the collateral underlying the loans",
   "Purchases the corporation's loans to use as collateral"
  ],
  "ans": 2,
  "en": "The SPE buys the loan pool from the originator and issues securities backed by it — the purchase is what isolates the assets from the seller's bankruptcy. Servicing usually stays with the originator or a third party.",
  "vi": "SPE mua danh mục khoản vay từ bên khởi tạo và phát hành chứng khoán được đảm bảo bằng nó — chính giao dịch mua này cách ly tài sản khỏi rủi ro phá sản của bên bán. Việc thu hồi nợ thường vẫn do bên khởi tạo hoặc bên thứ ba đảm nhận."
 },
 {
  "q": "All else equal, which security is the MOST risky for an investor?",
  "opts": [
   "Putable preference shares",
   "Callable preference shares",
   "Non-callable preference shares"
  ],
  "ans": 1,
  "en": "The call option belongs to the ISSUER and works against the investor — shares get called away exactly when conditions favor holding them. The put option protects the investor, making putable shares the safest.",
  "vi": "Quyền mua lại thuộc về TỔ CHỨC PHÁT HÀNH và chống lại nhà đầu tư — cổ phiếu bị gọi lại đúng lúc đáng giữ nhất. Quyền bán lại bảo vệ nhà đầu tư, khiến cổ phiếu putable an toàn nhất."
 },
 {
  "q": "An investor discovers that stock prices in a country are very slow to reflect new information. The investor can best profit from this using a(n):",
  "opts": [
   "Active fund",
   "Passive fund",
   "Low cost approach"
  ],
  "ans": 0,
  "en": "Slow price adjustment = an inefficient market — exactly where active research and trading can capture mispricings before they close.",
  "vi": "Giá điều chỉnh chậm = thị trường kém hiệu quả — đúng nơi nghiên cứu và giao dịch chủ động có thể chớp các định giá sai trước khi chúng khép lại."
 },
 {
  "q": "A bond has modified duration 7.1 and convexity 49.2. The percentage price change for a 50 bps INCREASE in yield is closest to:",
  "opts": [
   "−3.61%",
   "−3.49%",
   "−1.65%"
  ],
  "ans": 1,
  "en": "%ΔP = −7.1 × 0.005 + ½ × 49.2 × 0.005² = −3.55% + 0.06% = −3.49%. Convexity softens the duration-only estimate.",
  "vi": "%ΔP = −7,1 × 0,005 + ½ × 49,2 × 0,005² = −3,55% + 0,06% = −3,49%. Độ lồi làm dịu ước tính chỉ dùng duration."
 },
 {
  "q": "Security A: standard deviation 16%, weight 60%. Security B: standard deviation 27%, weight 40%. If the portfolio's standard deviation is 20.4%, the correlation between the securities is closest to:",
  "opts": [
   "−1",
   "0",
   "1"
  ],
  "ans": 2,
  "en": "The weighted average of the standard deviations is 0.6 × 16 + 0.4 × 27 = 20.4% — exactly the portfolio's σ. That happens only with ρ = +1: zero diversification benefit.",
  "vi": "Bình quân gia quyền của hai độ lệch chuẩn là 0,6 × 16 + 0,4 × 27 = 20,4% — đúng bằng σ danh mục. Điều đó chỉ xảy ra khi ρ = +1: lợi ích đa dạng hóa bằng 0."
 },
 {
  "q": "The capital asset pricing model (CAPM) is based on the assumption that investors are risk:",
  "opts": [
   "Averse",
   "Neutral",
   "Seeking"
  ],
  "ans": 0,
  "en": "CAPM assumes rational, risk-AVERSE, mean–variance investors — that aversion is what makes them demand compensation for systematic risk.",
  "vi": "CAPM giả định nhà đầu tư duy lý, GHÉT rủi ro, tối ưu theo trung bình–phương sai — chính sự e ngại đó khiến họ đòi phần bù cho rủi ro hệ thống."
 },
 {
  "q": "A buy-and-hold investor purchases a fixed-rate bond at issuance and holds it until maturity. With respect to interest rate risk, this investor is exposed to:",
  "opts": [
   "Market price risk only",
   "Coupon reinvestment risk only",
   "Both market price risk and coupon reinvestment risk"
  ],
  "ans": 1,
  "en": "Held to maturity, the bond repays par regardless of rate moves — price risk never materializes. But every coupon must be reinvested at whatever rates prevail: reinvestment risk remains.",
  "vi": "Giữ đến đáo hạn, trái phiếu trả đủ mệnh giá bất kể lãi suất biến động — rủi ro giá không bao giờ thành hiện thực. Nhưng mỗi coupon phải tái đầu tư ở mức lãi hiện hành: rủi ro tái đầu tư vẫn còn."
 },
 {
  "q": "The value effect anomaly:",
  "opts": [
   "Contradicts semi-strong market efficiency",
   "Was identified using time series of data only",
   "States that growth stocks have consistently outperformed value stocks"
  ],
  "ans": 0,
  "en": "Value stocks beating growth on public information (P/E, P/B) contradicts semi-strong efficiency. The direction runs VALUE over growth, and it was found in cross-sectional data.",
  "vi": "Cổ phiếu giá trị thắng cổ phiếu tăng trưởng dựa trên thông tin công khai (P/E, P/B) mâu thuẫn với hiệu quả semi-strong. Chiều đúng là GIÁ TRỊ thắng tăng trưởng, và được phát hiện bằng dữ liệu chéo."
 },
 {
  "q": "A bond's price sensitivity to a NON-PARALLEL shift in the benchmark yield curve is best measured by:",
  "opts": [
   "Key rate duration",
   "Effective duration",
   "Modified duration"
  ],
  "ans": 0,
  "en": "Key rate (partial) durations isolate sensitivity at each maturity point — the tool for twists and butterflies. Effective and modified duration assume parallel moves.",
  "vi": "Key rate (partial) duration cô lập độ nhạy tại từng điểm kỳ hạn — công cụ cho các cú xoắn và butterfly. Effective và modified duration giả định dịch chuyển song song."
 },
 {
  "q": "Which instrument most likely offers investors some protection against INCREASES in the market interest rate?",
  "opts": [
   "Fixed-rate bonds",
   "Floating-rate notes",
   "Inverse floating-rate notes"
  ],
  "ans": 1,
  "en": "FRN coupons reset upward with reference rates, keeping price near par when rates climb. Fixed-rate bonds fall, and inverse floaters get hit twice — coupons shrink as discounting bites.",
  "vi": "Coupon của FRN tự điều chỉnh tăng theo lãi tham chiếu, giữ giá quanh mệnh giá khi lãi suất leo thang. Trái phiếu cố định giảm giá, còn inverse floater trúng đòn kép — coupon co lại trong khi chiết khấu cắn sâu."
 },
 {
  "q": "Average portfolio return 8.50%; standard deviation 16.00%; beta 1.10; risk-free rate 1.75%. The portfolio's Sharpe ratio is closest to:",
  "opts": [
   "0.06",
   "0.42",
   "0.53"
  ],
  "ans": 1,
  "en": "Sharpe = (8.50 − 1.75)/16.00 = 6.75/16 = 0.42. Beta belongs to the Treynor ratio — the distractor 0.53 comes from misusing it.",
  "vi": "Sharpe = (8,50 − 1,75)/16,00 = 6,75/16 = 0,42. Beta thuộc về Treynor — đáp án nhiễu 0,53 đến từ việc dùng nhầm nó."
 },
 {
  "q": "Which type of investor most likely has a LONG-TERM investment horizon AND HIGH liquidity needs?",
  "opts": [
   "Endowments",
   "Life insurance companies",
   "Defined benefit pension plans"
  ],
  "ans": 1,
  "en": "Life insurers pair decades-long policy liabilities with high liquidity needs for claims. Endowments and DB plans share the long horizon but carry LOW liquidity needs.",
  "vi": "Bảo hiểm nhân thọ ghép nghĩa vụ hợp đồng kéo dài hàng chục năm với nhu cầu thanh khoản cao để chi trả quyền lợi. Endowment và quỹ hưu DB cùng kỳ hạn dài nhưng nhu cầu thanh khoản THẤP."
 },
 {
  "q": "All else equal, which bond most likely has the LOWEST price?",
  "opts": [
   "Putable bond",
   "Callable bond",
   "Option-free bond"
  ],
  "ans": 1,
  "en": "Callable = straight bond MINUS the call option the investor granted the issuer → lowest price. Putable = straight bond PLUS the investor's put → highest.",
  "vi": "Callable = trái phiếu thường TRỪ quyền mua lại mà nhà đầu tư trao cho tổ chức phát hành → giá thấp nhất. Putable = trái phiếu thường CỘNG quyền bán lại của nhà đầu tư → cao nhất."
 },
 {
  "q": "Using the rating scale from Standard & Poor's or Fitch, the LOWEST rating for an investment-grade bond is:",
  "opts": [
   "BBB−",
   "BBB",
   "BBB+"
  ],
  "ans": 0,
  "en": "Investment grade runs down to BBB−; one notch below, BB+, begins high yield.",
  "vi": "Hạng đầu tư kéo xuống đến BBB−; thấp hơn một bậc, BB+, đã sang high yield."
 },
 {
  "q": "If a risk-free asset is added to a portfolio of risky assets, the highest achievable return for a given level of risk most likely:",
  "opts": [
   "Decreases",
   "Remains unchanged",
   "Increases"
  ],
  "ans": 2,
  "en": "The capital allocation line from the risk-free rate through the tangency portfolio dominates the risky-only efficient frontier — more return at every risk level except the tangency point itself.",
  "vi": "Đường phân bổ vốn từ lãi suất phi rủi ro qua danh mục tiếp tuyến vượt trội đường biên hiệu quả chỉ-tài-sản-rủi-ro — lợi suất cao hơn ở mọi mức rủi ro trừ chính điểm tiếp tuyến."
 },
 {
  "q": "Which statement best describes the relationship between the net costs of carry and the forward price?",
  "opts": [
   "If the costs of carry exceed the benefits, the forward price would be lower",
   "If the costs of carry exceed the benefits, the forward price would be higher",
   "If the benefits exceed the costs of carry, the forward price would be higher"
  ],
  "ans": 1,
  "en": "F₀ = [S₀ + PV(costs) − PV(benefits)] × (1 + r)ᵀ: storage and insurance push the forward UP; dividends and convenience yield pull it DOWN.",
  "vi": "F₀ = [S₀ + PV(chi phí) − PV(lợi ích)] × (1 + r)ᵀ: chi phí lưu kho, bảo hiểm đẩy giá forward LÊN; cổ tức và lợi ích nắm giữ kéo nó XUỐNG."
 },
 {
  "q": "A European call option is IN THE MONEY whenever the value of the underlying is:",
  "opts": [
   "Less than the exercise price",
   "Equal to the exercise price",
   "Greater than the exercise price"
  ],
  "ans": 2,
  "en": "A call pays max(S − X, 0): it has positive exercise value only when S > X.",
  "vi": "Call trả max(S − X, 0): chỉ có giá trị thực hiện dương khi S > X."
 },
 {
  "q": "Compared to trading an underlying directly, trading a derivative on the underlying most likely involves:",
  "opts": [
   "Lower transaction costs",
   "A lower degree of leverage",
   "A larger amount of required capital"
  ],
  "ans": 0,
  "en": "Derivatives deliver the exposure with lower transaction costs, LESS capital, and MORE leverage — the last two options state the exact opposites.",
  "vi": "Phái sinh mang lại cùng mức phơi nhiễm với chi phí giao dịch thấp hơn, vốn ÍT hơn và đòn bẩy CAO hơn — hai phương án sau nói ngược hoàn toàn."
 },
 {
  "q": "Which statement about alternative investments' compensation structures is most accurate?",
  "opts": [
   "A hurdle rate protects clients from paying twice for the same performance",
   "The management fee for a private equity fund is based on committed capital until fully drawn",
   "The management fee is earned only after the fund achieves a return known as a high-water mark"
  ],
  "ans": 1,
  "en": "PE management fees run on COMMITTED capital during the investment period, shifting to invested capital later. Double-payment protection is the high-water mark's job, and management fees accrue regardless of performance.",
  "vi": "Phí quản lý PE tính trên vốn CAM KẾT trong giai đoạn đầu tư, sau đó chuyển sang vốn đã giải ngân. Chống trả phí hai lần là việc của high-water mark, còn phí quản lý chạy bất kể thành tích."
 },
 {
  "q": "According to put–call FORWARD parity, a long put is equal to:",
  "opts": [
   "A long call, a long risk-free bond and a long forward",
   "A long call, a long risk-free bond and a short forward",
   "A short call, a long risk-free bond and a short forward"
  ],
  "ans": 1,
  "en": "p = c + PV(X − F₀): buy the call, buy the bond, and take the SHORT side of the forward — the short forward replaces shorting the underlying in standard parity.",
  "vi": "p = c + PV(X − F₀): mua call, mua trái phiếu, và đứng bên BÁN của hợp đồng forward — vị thế short forward thay cho việc bán khống tài sản trong parity chuẩn."
 },
 {
  "q": "Initial stock price $80; leverage ratio 2.5. If the first margin call occurs at a stock price below $60, the maintenance margin is closest to:",
  "opts": [
   "15.0%",
   "20.0%",
   "46.7%"
  ],
  "ans": 1,
  "en": "Leverage 2.5 → equity = 40% → debt = 0.60 × 80 = $48 per share. At $60: equity = 60 − 48 = 12 → 12/60 = 20%.",
  "vi": "Đòn bẩy 2,5 → vốn chủ = 40% → nợ = 0,60 × 80 = $48 mỗi cổ phiếu. Tại $60: vốn chủ = 60 − 48 = 12 → 12/60 = 20%."
 },
 {
  "q": "An option-free bond is valued at 92.733 at a yield of 11%. The value is 94.474 for a 60 bps decrease and 91.041 for a 60 bps increase. The approximate modified duration is closest to:",
  "opts": [
   "1.85",
   "3.09",
   "6.17"
  ],
  "ans": 1,
  "en": "ApproxModDur = (P₋ − P₊)/(2 × P₀ × Δy) = (94.474 − 91.041)/(2 × 92.733 × 0.006) = 3.433/1.1128 = 3.09.",
  "vi": "ApproxModDur = (P₋ − P₊)/(2 × P₀ × Δy) = (94,474 − 91,041)/(2 × 92,733 × 0,006) = 3,433/1,1128 = 3,09."
 },
 {
  "q": "A hedge fund that implements trades based on a top-down analysis of expected movements in economic variables most likely uses a(n):",
  "opts": [
   "Macro strategy",
   "Relative value strategy",
   "Event-driven strategy"
  ],
  "ans": 0,
  "en": "Betting on macroeconomic variables — rates, currencies, growth — from the top down is the definition of a macro strategy. Relative value trades pricing gaps; event-driven trades corporate events.",
  "vi": "Đặt cược vào biến số vĩ mô — lãi suất, tiền tệ, tăng trưởng — theo hướng từ trên xuống chính là định nghĩa chiến lược macro. Relative value chơi chênh lệch định giá; event-driven chơi sự kiện doanh nghiệp."
 },
 {
  "q": "Bond 1: rating B, issuer debt outstanding $1 billion. Bond 2: rating BB, $1 billion. Bond 3: rating BB, $30 billion. The bond with the GREATEST market liquidity risk is most likely:",
  "opts": [
   "Bond 1",
   "Bond 2",
   "Bond 3"
  ],
  "ans": 0,
  "en": "Liquidity thins with smaller issue size AND lower credit quality — Bond 1 combines the small $1b float with the lowest (B) rating.",
  "vi": "Thanh khoản mỏng đi khi quy mô phát hành nhỏ VÀ chất lượng tín dụng thấp — Bond 1 gộp cả lượng lưu hành nhỏ $1 tỷ lẫn xếp hạng thấp nhất (B)."
 },
 {
  "q": "Four years ago, a 5% coupon, annual-pay bond with a 10-year maturity was issued at par. If the current market discount rate is 7%, the price per 100 of par is closest to:",
  "opts": [
   "90.34",
   "90.47",
   "93.23"
  ],
  "ans": 1,
  "en": "Six years remain: P = 5 × [1 − 1.07⁻⁶]/0.07 + 100/1.07⁶ = 23.83 + 66.63 = 90.47. Using ten years (90.34-ish territory) is the trap.",
  "vi": "Còn sáu năm: P = 5 × [1 − 1,07⁻⁶]/0,07 + 100/1,07⁶ = 23,83 + 66,63 = 90,47. Dùng nhầm mười năm là cái bẫy."
 },
 {
  "q": "In an investment policy statement, which constraint most likely outlines a client's preference for environmentally sustainable investments?",
  "opts": [
   "Time horizon",
   "Unique circumstances",
   "Legal and regulatory factors"
  ],
  "ans": 1,
  "en": "ESG preferences, exclusions, and other personal considerations live in the \"unique circumstances\" bucket of the IPS constraints.",
  "vi": "Sở thích ESG, các loại trừ và cân nhắc cá nhân khác nằm trong ô \"unique circumstances\" của phần ràng buộc IPS."
 },
 {
  "q": "For an institutional investor, the investment committee's approach to appointing and reviewing investment managers is most likely set out during the:",
  "opts": [
   "Portfolio construction process",
   "Strategic asset allocation decision",
   "Preparation of the investment policy statement"
  ],
  "ans": 2,
  "en": "Governance arrangements — who selects, monitors, and replaces managers — belong in the IPS, the document that frames everything downstream.",
  "vi": "Các dàn xếp quản trị — ai chọn, giám sát, thay thế nhà quản lý — thuộc về IPS, văn kiện đặt khung cho mọi bước phía sau."
 },
 {
  "q": "All else equal, for option-free bonds, the percentage price change for a given yield change is most likely greater for a bond:",
  "opts": [
   "With a high coupon than for a bond with a low coupon",
   "With a short time-to-maturity than for a bond with a long time-to-maturity",
   "When the market discount rate goes down than when it goes up"
  ],
  "ans": 2,
  "en": "Convexity makes price gains from falling yields exceed price losses from equal rises. Low coupons and LONG maturities — not high and short — amplify sensitivity.",
  "vi": "Độ lồi khiến mức tăng giá khi lợi suất giảm lớn hơn mức giảm giá khi lợi suất tăng cùng biên độ. Coupon thấp và kỳ hạn DÀI — không phải cao và ngắn — mới khuếch đại độ nhạy."
 },
 {
  "q": "Which statement is most accurate? Smart beta strategies:",
  "opts": [
   "Invest in high market beta stocks to generate an abnormal return",
   "Use simple rules-based strategies as a basis for investment decisions",
   "Typically have lower portfolio turnover than passive market-cap weighted strategies"
  ],
  "ans": 1,
  "en": "Smart beta = transparent, rules-based tilts toward factors (value, size, quality). It is not about high-beta stocks, and rebalancing gives it HIGHER turnover than cap-weighted indexing.",
  "vi": "Smart beta = nghiêng theo nhân tố (giá trị, quy mô, chất lượng) bằng quy tắc minh bạch. Không phải chọn cổ phiếu beta cao, và việc tái cân bằng khiến vòng quay CAO hơn chỉ số theo vốn hóa."
 },
 {
  "q": "Hedge fund: beginning AUM £200m; management fee 2% of end-of-year AUM before fees; incentive fee 10%; SOFT hurdle rate 5%; annual return before fees 20%. If the incentive fee is calculated independently of the management fee, total fees are:",
  "opts": [
   "£7,800,000",
   "£8,320,000",
   "£8,800,000"
  ],
  "ans": 2,
  "en": "End AUM = 240 → management fee = 2% × 240 = £4.8m. Gain = £40m; the 20% return clears the 5% SOFT hurdle, so the incentive applies to the ENTIRE gain: 10% × 40 = £4.0m. Total = £8.8m.",
  "vi": "AUM cuối = 240 → phí quản lý = 2% × 240 = £4,8tr. Lãi = £40tr; lợi suất 20% vượt hurdle MỀM 5%, nên phí thành tích tính trên TOÀN BỘ khoản lãi: 10% × 40 = £4,0tr. Tổng = £8,8tr."
 },
 {
  "q": "Which is most likely one of the main functions of the financial system?",
  "opts": [
   "Determining an equilibrium interest rate",
   "Ensuring that markets are informationally efficient",
   "Ensuring that all investment projects receive sufficient funding"
  ],
  "ans": 0,
  "en": "The system discovers the rate that equates aggregate savings and borrowing — the equilibrium interest rate. Efficiency is a desirable byproduct, and only WORTHY projects should be funded.",
  "vi": "Hệ thống tài chính khám phá mức lãi suất cân bằng tổng tiết kiệm và tổng vay — lãi suất cân bằng. Tính hiệu quả là sản phẩm phụ đáng mong, và chỉ dự án XỨNG ĐÁNG mới nên được cấp vốn."
 },
 {
  "q": "Which is most likely a distinction between futures and forward contracts? Futures contracts are:",
  "opts": [
   "Easily customized",
   "Traded on an exchange",
   "More attractive than forwards for long positions when futures prices are negatively correlated to interest rates"
  ],
  "ans": 1,
  "en": "Exchange trading — with standardization, clearing, and daily settlement — is THE distinction. Customization belongs to forwards, and negative price–rate correlation actually favors forwards.",
  "vi": "Giao dịch trên sàn — kèm chuẩn hóa, thanh toán bù trừ, quyết toán hằng ngày — chính LÀ điểm phân biệt. May đo theo yêu cầu thuộc về forward, còn tương quan giá–lãi suất âm thực ra nghiêng lợi thế về forward."
 },
 {
  "q": "Which is most likely a LONG-TERM benefit of adding alternative investments to a portfolio of traditional investments?",
  "opts": [
   "Enhanced liquidity of the combined portfolio",
   "High correlation with traditional asset returns",
   "Improved risk-return profile of the combined portfolio"
  ],
  "ans": 2,
  "en": "The case for alternatives is diversification from LOW correlation, improving the risk-return profile. Liquidity typically worsens, and high correlation would defeat the purpose.",
  "vi": "Lý do đầu tư alternatives là đa dạng hóa nhờ tương quan THẤP, cải thiện hồ sơ rủi ro-lợi suất. Thanh khoản thường xấu đi, còn tương quan cao thì phá hỏng mục đích."
 },
 {
  "q": "In the event of a default, which mortgage structure exposes a LENDER to the greatest risk of loss?",
  "opts": [
   "Interest-only, recourse loan",
   "Fully amortizing, recourse loan",
   "Balloon payment, non-recourse loan"
  ],
  "ans": 2,
  "en": "A balloon structure leaves the most principal outstanding at default, and non-recourse bars the lender from pursuing the borrower's other assets — maximum exposure on both dimensions.",
  "vi": "Cấu trúc balloon để lại nhiều gốc chưa trả nhất khi vỡ nợ, và non-recourse chặn bên cho vay truy đòi tài sản khác của người vay — phơi nhiễm tối đa trên cả hai chiều."
 },
 {
  "q": "Which statement about infrastructure investing is most accurate? Infrastructure:",
  "opts": [
   "Assets are typically unlevered",
   "Assets are intended for public use",
   "Cash flows typically have a negative correlation with inflation"
  ],
  "ans": 1,
  "en": "Infrastructure assets serve the public — roads, utilities, airports. They are typically financed with SIGNIFICANT leverage, and regulated tariffs often link cash flows POSITIVELY to inflation.",
  "vi": "Tài sản hạ tầng phục vụ công cộng — đường sá, tiện ích, sân bay. Chúng thường được tài trợ bằng đòn bẩy LỚN, và biểu phí điều tiết thường gắn dòng tiền THUẬN chiều với lạm phát."
 },
 {
  "q": "EPS/DPS/ROE by year — Y1: 2.25/1.25/9%; Y2: 2.76/1.35/11%; Y3: 2.08/1.62/15%; Y4: 2.44/1.74/13%; Y5: 3.60/1.85/17%; Y6: 3.20/1.92/12%. Growth = average of (1) the compounded annual dividend growth rate over Y1–Y6 and (2) the sustainable growth rate for Year 6. With required return 15%, the intrinsic value is closest to:",
  "opts": [
   "$25.31",
   "$23.71",
   "$30.14"
  ],
  "ans": 0,
  "en": "Dividend CAGR = (1.92/1.25)^(1/5) − 1 = 8.97%. Y6 sustainable growth = ROE × (1 − payout) = 12% × (1 − 1.92/3.20) = 12% × 0.40 = 4.8%. g = (8.97 + 4.8)/2 = 6.89%. V = 1.92 × 1.0689/(0.15 − 0.0689) = 2.052/0.0811 = $25.31.",
  "vi": "CAGR cổ tức = (1,92/1,25)^(1/5) − 1 = 8,97%. SGR năm 6 = ROE × (1 − payout) = 12% × (1 − 1,92/3,20) = 12% × 0,40 = 4,8%. g = (8,97 + 4,8)/2 = 6,89%. V = 1,92 × 1,0689/(0,15 − 0,0689) = 2,052/0,0811 = $25,31."
 },
 {
  "q": "Which is LEAST likely a component of yield spread?",
  "opts": [
   "Taxation",
   "Credit risk",
   "Expected inflation rate"
  ],
  "ans": 2,
  "en": "Expected inflation lives inside the BENCHMARK yield. The spread over the benchmark compensates for credit risk, liquidity, and tax treatment.",
  "vi": "Lạm phát kỳ vọng nằm trong lợi suất BENCHMARK. Phần spread trên benchmark bù đắp rủi ro tín dụng, thanh khoản và thuế."
 },
 {
  "q": "The earnings multiplier (P/E) for a stock increases with a DECREASE in the:",
  "opts": [
   "Expected dividend growth rate",
   "Expected dividend payout ratio",
   "Estimated required rate of return on equity"
  ],
  "ans": 2,
  "en": "P/E = payout/(r − g): a smaller r shrinks the denominator (r − g), lifting the multiple. Lower g or lower payout would push P/E DOWN.",
  "vi": "P/E = payout/(r − g): r nhỏ hơn làm (r − g) co lại, nâng bội số lên. Giảm g hay giảm payout sẽ kéo P/E XUỐNG."
 },
 {
  "q": "The most appropriate measure of interest rate risk for a bond to a PARALLEL shift in the benchmark yield curve is:",
  "opts": [
   "Effective duration",
   "Modified duration",
   "Macaulay duration"
  ],
  "ans": 0,
  "en": "Effective duration shifts the whole BENCHMARK CURVE in parallel — exactly the scenario described. Modified duration responds to the bond's own YTM; Macaulay is a weighted-average time.",
  "vi": "Effective duration dịch song song toàn bộ ĐƯỜNG CONG BENCHMARK — đúng kịch bản đề nêu. Modified duration phản ứng với YTM riêng của trái phiếu; Macaulay là thời gian bình quân gia quyền."
 },
 {
  "q": "A successful portfolio risk budget will most likely:",
  "opts": [
   "Be based on multiple sources of risk",
   "Produce superior performance compared to passive investing",
   "Lead to investment in assets with the highest return per unit of risk"
  ],
  "ans": 2,
  "en": "Risk budgeting allocates the total risk appetite to where it earns the most — assets and strategies with the highest return per unit of risk. It can use one or many risk measures, and beating passive is never guaranteed.",
  "vi": "Ngân sách rủi ro phân bổ tổng khẩu vị rủi ro vào nơi sinh lợi nhiều nhất — các tài sản và chiến lược có lợi suất trên mỗi đơn vị rủi ro cao nhất. Nó có thể dùng một hay nhiều thước đo rủi ro, và không hề bảo đảm thắng đầu tư thụ động."
 },
 {
  "q": "In an order-driven market, if the trade price is determined by the LIMIT PRICE of a standing order, the market most likely operates under the:",
  "opts": [
   "Uniform pricing rule",
   "Derivative pricing rule",
   "Discriminatory pricing rule"
  ],
  "ans": 2,
  "en": "Continuous order-driven markets price each trade at the standing limit order it hits — different trades, different prices: discriminatory. Uniform pricing clears call auctions at one price; derivative pricing borrows prices from another market.",
  "vi": "Thị trường khớp lệnh liên tục định giá mỗi giao dịch theo lệnh giới hạn đang chờ bị khớp — mỗi giao dịch một giá: discriminatory. Uniform pricing khớp phiên định kỳ tại một giá duy nhất; derivative pricing mượn giá từ thị trường khác."
 },
 {
  "q": "An investor SELLS a European put: put price 50, exercise price 1,640. If the underlying is 1,670 at expiration, the profit for the seller is:",
  "opts": [
   "20",
   "30",
   "50"
  ],
  "ans": 2,
  "en": "S = 1,670 > X = 1,640 → the put expires worthless and the seller keeps the entire 50 premium.",
  "vi": "S = 1.670 > X = 1.640 → put hết hạn vô giá trị và người bán giữ trọn khoản phí 50."
 },
 {
  "q": "Validity instructions indicate:",
  "opts": [
   "How to fill an order",
   "When an order may be filled",
   "How to arrange final settlement of an order"
  ],
  "ans": 1,
  "en": "Validity instructions specify WHEN the order can execute (day order, good-till-cancelled, immediate-or-cancel). \"How to fill\" is an execution instruction; settlement arrangements are clearing instructions.",
  "vi": "Chỉ thị hiệu lực quy định KHI NÀO lệnh được khớp (lệnh trong ngày, hiệu lực đến khi hủy, khớp ngay hoặc hủy). \"Khớp thế nào\" là chỉ thị thực hiện; dàn xếp quyết toán là chỉ thị bù trừ."
 },
 {
  "q": "When the forward price of a commodity EXCEEDS the spot price, the commodity market is most likely in:",
  "opts": [
   "Carry",
   "Contango",
   "Backwardation"
  ],
  "ans": 1,
  "en": "Forward above spot = contango — an upward-sloping forward curve, typical when storage costs dominate convenience yield. Backwardation is the mirror image.",
  "vi": "Forward cao hơn spot = contango — đường cong kỳ hạn dốc lên, điển hình khi chi phí lưu kho lấn át lợi ích nắm giữ. Backwardation là hình ảnh gương."
 },
 {
  "q": "Which is private debt funding used by companies in the SEED stage of their life cycle?",
  "opts": [
   "Venture debt",
   "Direct lending",
   "Mezzanine financing"
  ],
  "ans": 0,
  "en": "Venture debt serves start-ups alongside VC equity — often with warrants to compensate the extreme risk. Direct lending and mezzanine target established, cash-flowing borrowers.",
  "vi": "Venture debt phục vụ start-up song song với vốn VC — thường kèm warrant để bù rủi ro cực cao. Direct lending và mezzanine nhắm vào bên vay đã trưởng thành, có dòng tiền."
 },
 {
  "q": "For a fixed-rate bond, Macaulay duration is:",
  "opts": [
   "Unrelated to the bond's yield-to-maturity",
   "Inversely related to the bond's yield-to-maturity",
   "Positively related to the bond's yield-to-maturity"
  ],
  "ans": 1,
  "en": "Higher yields discount distant cash flows more harshly, shifting weight toward earlier payments — the weighted-average time (Macaulay duration) shortens.",
  "vi": "Lợi suất cao chiết khấu dòng tiền xa nặng tay hơn, dồn trọng số về các khoản gần — thời gian bình quân gia quyền (Macaulay duration) ngắn lại."
 },
 {
  "q": "With respect to portfolio construction, combining long-term capital market expectations with the objectives and constraints from the investment policy statement determines a portfolio's:",
  "opts": [
   "Security selection",
   "Tactical asset allocation",
   "Strategic asset allocation"
  ],
  "ans": 2,
  "en": "Long-run expectations + IPS objectives and constraints = the strategic asset allocation. Tactical shifts are short-term deviations from it; security selection fills in the details.",
  "vi": "Kỳ vọng dài hạn + mục tiêu và ràng buộc trong IPS = phân bổ tài sản chiến lược. Điều chỉnh chiến thuật là các độ lệch ngắn hạn khỏi nó; chọn chứng khoán lấp phần chi tiết."
 },
 {
  "q": "The correlation of cryptocurrencies with traditional assets has been:",
  "opts": [
   "Decreasing",
   "Steady",
   "Increasing"
  ],
  "ans": 2,
  "en": "As institutional adoption grew, cryptocurrencies increasingly traded like risk assets — their correlation with equities has risen, eroding the early diversification story.",
  "vi": "Khi tổ chức tham gia nhiều hơn, tiền mã hóa ngày càng giao dịch như tài sản rủi ro — tương quan với cổ phiếu đã tăng lên, bào mòn câu chuyện đa dạng hóa thuở đầu."
 },
 {
  "q": "Initial investment $100 million; one-year return 12%; management fee 1% of AUM (end-of-period valuation); incentive fee 10% of return net of the management fee. The investor's net return is closest to:",
  "opts": [
   "9.68%",
   "9.79%",
   "10.88%"
  ],
  "ans": 1,
  "en": "End value = 112. Management fee = 1% × 112 = 1.12. Gain net of management fee = 12 − 1.12 = 10.88 → incentive = 1.088. Investor keeps 112 − 1.12 − 1.088 = 109.79 → net return 9.79%.",
  "vi": "Giá trị cuối = 112. Phí quản lý = 1% × 112 = 1,12. Lãi sau phí quản lý = 12 − 1,12 = 10,88 → phí thành tích = 1,088. Nhà đầu tư còn 112 − 1,12 − 1,088 = 109,79 → lợi suất ròng 9,79%."
 }
]
});
window.CFA.mocktests.push({
 name: "Mock Exam 3 — Session 1 (Ethics · Quant · Econ · FSA · Corporate Issuers)",
 qs: [
 {
  "q": "To claim compliance with the GIPS standards, a firm is most likely required to:",
  "opts": [
   "have a verification of the firm's claim of compliance performed.",
   "initially present a minimum of five years of compliant investment performance.",
   "include all discretionary and non-discretionary fee-paying accounts in its composites."
  ],
  "ans": 1,
  "en": "GIPS requires a firm to initially present at least five years of compliant performance (or since inception if younger), then build up to ten. Verification is recommended but voluntary, and composites must include fee-paying DISCRETIONARY accounts — non-discretionary accounts are excluded.",
  "vi": "GIPS yêu cầu công ty ban đầu trình bày tối thiểu 5 năm kết quả tuân thủ (hoặc từ khi thành lập nếu chưa đủ 5 năm), sau đó nâng dần lên 10 năm. Verification chỉ được khuyến nghị chứ không bắt buộc, và composite phải gồm các tài khoản trả phí CÓ toàn quyền quyết định (discretionary) — tài khoản non-discretionary bị loại."
 },
 {
  "q": "Tyler Cowen, CFA, retains all records relating to recommendations to buy or sell a security, but discards all notes that do not lead to a change in recommendations. Cowen's colleague Marie Thomsen, CFA, maintains all her records in electronic form but does not retain hard copies for some of her recommendations. Who has most likely violated the Standard relating to record retention?",
  "opts": [
   "Cowen only",
   "Thomsen only",
   "Both Cowen and Thomsen"
  ],
  "ans": 0,
  "en": "Standard V(C) requires keeping records that support ALL investment analysis and actions — including notes behind a decision NOT to change a recommendation. Discarding them is a violation. Records may be kept electronically, so Thomsen is fine without hard copies.",
  "vi": "Standard V(C) yêu cầu lưu giữ hồ sơ hỗ trợ MỌI phân tích và hành động đầu tư — kể cả ghi chú cho quyết định KHÔNG thay đổi khuyến nghị. Vứt bỏ chúng là vi phạm. Hồ sơ được phép lưu dạng điện tử, nên Thomsen không cần bản cứng vẫn hợp lệ."
 },
 {
  "q": "Renee Robinson, CFA, an independent contractor, acts as chief compliance officer for multiple firms, where she is responsible for overseeing adherence to security laws, firm policies, and the CFA Institute Standards of Professional Conduct. Robinson works remotely and determines her own hours. Her signed agreement with each firm outlines her responsibilities and discloses the potential conflicts of interest due to having multiple clients in the same role and industry. Is Robinson most likely in violation of any CFA Institute Standard of Professional Conduct?",
  "opts": [
   "No",
   "Yes, with regard to having multiple clients",
   "Yes, with regard to being an independent contractor"
  ],
  "ans": 0,
  "en": "Independent contracting is permitted, and serving multiple clients is acceptable when responsibilities are defined and the potential conflicts are disclosed in writing — which she has done. No Standard is violated.",
  "vi": "Làm việc dạng independent contractor là được phép, và phục vụ nhiều khách hàng cũng chấp nhận được khi trách nhiệm được quy định rõ và xung đột lợi ích tiềm ẩn đã được công bố bằng văn bản — cô ấy đã làm đủ. Không vi phạm Standard nào."
 },
 {
  "q": "Kathy Lau, CFA, is a portfolio manager. After a comprehensive analysis, Lau buys Top Technology Company (TTC) IPO for all her clients for whom the investment is appropriate, including her brother's fee-paying account. Lau does not have beneficial ownership in her brother's account. Has Lau violated the Standards by buying shares for her brother's account?",
  "opts": [
   "No",
   "Yes, the Standard relating to disclosure of conflicts",
   "Yes, the Standard relating to priority of transactions"
  ],
  "ans": 0,
  "en": "A family account that is a regular fee-paying client account must be treated like any other client account — it should NOT be disadvantaged. With no beneficial ownership, allocating the suitable IPO to her brother alongside other clients is proper, not a violation.",
  "vi": "Tài khoản người thân nhưng là tài khoản khách hàng trả phí bình thường phải được đối xử như mọi khách hàng khác — không được phân biệt bất lợi. Vì Lau không có beneficial ownership, việc phân bổ IPO phù hợp cho tài khoản của em trai cùng các khách hàng khác là đúng chuẩn, không vi phạm."
 },
 {
  "q": "Ekta Prakash, CFA, works as an investment advisor for TXM Investments (TXM). Prakash advises a client to transfer $150,000 from a tax-deferred investment account to TXM's multi-cap fund. Prakash discloses to her client that withdrawals from the tax-deferred account will attract a penalty of $15,000 but assures the client that the cost can be recovered through better investment returns from TXM's fund. Prakash has violated the Standard(s) relating to:",
  "opts": [
   "only misrepresentation.",
   "only loyalty, prudence, and care.",
   "both misrepresentation and loyalty, prudence, and care."
  ],
  "ans": 2,
  "en": "Assuring the client that future returns will recover the penalty is an implicit performance guarantee — misrepresentation under I(C). Recommending a costly transfer into the firm's own fund without a clear client benefit also breaches III(A) loyalty, prudence, and care.",
  "vi": "Cam đoan rằng lợi nhuận tương lai sẽ bù được khoản phạt là một dạng bảo đảm hiệu suất ngầm — vi phạm misrepresentation I(C). Khuyến nghị chuyển tiền tốn kém vào quỹ của chính công ty mà không có lợi ích rõ ràng cho khách hàng còn vi phạm III(A) loyalty, prudence, and care."
 },
 {
  "q": "According to the GIPS standards, which of the following statements is most accurate? Verification:",
  "opts": [
   "ensures the accuracy of composite presentations.",
   "is required to maintain compliance with the GIPS standards.",
   "tests whether a firm has complied with composite construction requirements on a firm-wide basis."
  ],
  "ans": 2,
  "en": "Verification is voluntary and applies to the FIRM as a whole: it tests whether the firm complied with all composite construction requirements firm-wide and whether processes are designed to present performance per GIPS. It does not guarantee the accuracy of any specific presentation.",
  "vi": "Verification là tự nguyện và áp dụng cho TOÀN CÔNG TY: kiểm tra việc tuân thủ các yêu cầu xây dựng composite trên phạm vi toàn công ty và quy trình có được thiết kế để trình bày kết quả theo GIPS hay không. Nó không bảo đảm độ chính xác của bất kỳ bản trình bày cụ thể nào."
 },
 {
  "q": "John Smith, CFA, was hired by the Dunlap Investment Consulting Group to manage equity investments for the Allied Company Defined Benefit Pension Plan. Smith is required to report quarterly performance results to Allied Company's board. Smith owes a primary duty of loyalty, prudence, and care to:",
  "opts": [
   "Allied Company employees.",
   "Dunlap Investment Consulting Group.",
   "The Allied Company Pension Plan Trustees."
  ],
  "ans": 0,
  "en": "When managing a pension plan, the ultimate client is the plan's participants and beneficiaries — the Allied employees — not the sponsoring company, the trustees, or the consulting firm that hired him.",
  "vi": "Khi quản lý quỹ hưu trí, khách hàng cuối cùng là người tham gia và người thụ hưởng của quỹ — tức nhân viên Allied — chứ không phải công ty tài trợ, các trustee, hay công ty tư vấn đã thuê anh ta."
 },
 {
  "q": "Shika Agarwal is a Level I candidate in the CFA program. Immediately after taking the exam, Agarwal posts in a social media group for CFA candidates arguing that the move to computer-based testing would have an adverse impact on the quality of the CFA program. She also states how surprised she was that the exam did not have quantitative questions on portfolio management. Has Agarwal violated the Standards?",
  "opts": [
   "No.",
   "Yes, by stating that the exam did not have quantitative questions on portfolio management.",
   "Yes, by arguing that the move to computer-based testing would have an adverse impact on the quality of the CFA program."
  ],
  "ans": 1,
  "en": "Revealing what was (or was not) tested discloses confidential exam content — a violation of Standard VII(A). Expressing a personal opinion about the CFA program's policies, such as computer-based testing, is allowed.",
  "vi": "Tiết lộ nội dung nào có (hoặc không có) trong đề thi là làm lộ thông tin bảo mật của kỳ thi — vi phạm Standard VII(A). Còn bày tỏ quan điểm cá nhân về chính sách của chương trình CFA, như việc thi trên máy tính, là được phép."
 },
 {
  "q": "Regarding ethical standards in the investment industry, which of the following is most accurate? CFA Institute:",
  "opts": [
   "requires charterholders to engage in their professional communities.",
   "aims to build market integrity by calling for regulations that align the interests of firms and clients.",
   "promotes the highest standards of ethics, education, and professional excellence for the ultimate benefit of shareholders."
  ],
  "ans": 1,
  "en": "CFA Institute advocates for market integrity, including regulation that aligns firm and client interests. Community engagement is encouraged, not required, and the mission is for the ultimate benefit of SOCIETY, not just shareholders.",
  "vi": "CFA Institute vận động cho tính liêm chính của thị trường, bao gồm kêu gọi các quy định giúp hài hòa lợi ích giữa công ty và khách hàng. Tham gia cộng đồng nghề nghiệp chỉ được khuyến khích chứ không bắt buộc, và sứ mệnh là vì lợi ích tối thượng của XÃ HỘI, không riêng cổ đông."
 },
 {
  "q": "Jorge Fernandez, CFA, is an equity analyst at a brokerage company. He suspects his colleague is trading on shares prior to his research reports being distributed to clients. When Fernandez asks his colleague about it, he is told to mind his own business. To comply with the Standard relating to knowledge of law, Fernandez should most likely:",
  "opts": [
   "report his suspicions to his supervisor.",
   "continue to observe his colleague's trades.",
   "discuss his colleague's trades with other analysts at the firm."
  ],
  "ans": 0,
  "en": "Front running client trades is likely illegal and unethical. Under I(A), once aware of a possible violation, Fernandez must not ignore it — the proper step is to escalate to his supervisor or compliance so the firm can investigate and stop it.",
  "vi": "Front running (giao dịch trước lệnh khách hàng) nhiều khả năng vừa phạm pháp vừa phi đạo đức. Theo I(A), khi biết có khả năng vi phạm, Fernandez không được làm ngơ — bước đúng là báo cáo lên cấp trên hoặc bộ phận compliance để công ty điều tra và chấm dứt hành vi."
 },
 {
  "q": "Century Investment Management, Inc., (CIM), promotes Pierre Ash, CFA, to a supervisory position. Ash cannot discharge his supervisory responsibilities because CIM's compliance system is inadequate. Ash declines in writing to accept the supervisory responsibility. Has Ash violated the Standards?",
  "opts": [
   "No",
   "Yes, the Standard relating to loyalty, prudence and care",
   "Yes, the Standard relating to responsibilities of supervisors"
  ],
  "ans": 0,
  "en": "Standard IV(C) guidance: if compliance procedures are inadequate, a member should decline IN WRITING to accept supervisory responsibility until the firm adopts reasonable procedures. Ash did exactly that — no violation.",
  "vi": "Hướng dẫn của Standard IV(C): nếu hệ thống compliance chưa đầy đủ, thành viên nên từ chối BẰNG VĂN BẢN việc nhận trách nhiệm giám sát cho đến khi công ty xây dựng quy trình hợp lý. Ash làm đúng như vậy — không vi phạm."
 },
 {
  "q": "Maria Perez, CFA, is a portfolio manager for an advisory firm that utilizes external mutual funds. The firm has a committee that selects external funds, using an analytical model to determine their choices. Although Perez has no reason to question the committee's research process, she does not like the committee's choice for a bond fund because it is not appropriate for all her clients. She researches and selects a different bond fund that better meets her clients' needs, but her manager tells her that she is not permitted to make independent fund purchase decisions. She then invests in the fund chosen by the committee for all of her clients. Has Perez most likely violated the Standards?",
  "opts": [
   "No",
   "Yes, the Standard relating to suitability",
   "Yes, the Standard relating to diligence and reasonable basis"
  ],
  "ans": 1,
  "en": "She may rely on the committee's sound research (no diligence violation), but knowingly investing ALL clients in a fund that is not appropriate for all of them breaches Standard III(C) Suitability — investments must fit each client's IPS.",
  "vi": "Cô ấy được phép dựa vào nghiên cứu vững chắc của hội đồng (không vi phạm diligence), nhưng cố tình đầu tư cho TẤT CẢ khách hàng vào một quỹ không phù hợp với tất cả họ là vi phạm Standard III(C) Suitability — khoản đầu tư phải khớp với IPS của từng khách hàng."
 },
 {
  "q": "Nidhi Mehta, CFA, is a fund manager at XYZ Investments. Mehta's fund delivers excellent returns for the year. A large investor in the fund offers Mehta cash compensation along with free tickets to the opening night of a sold-out opera as a reward for the fund's performance. Firm policy requires employees to inform supervisors about monetary compensation received from clients. Mehta does not inform her supervisor as she only accepts the tickets and not the cash compensation. Has Mehta violated the Standards?",
  "opts": [
   "No",
   "Yes, the Standard relating to fair dealing",
   "Yes, the Standard relating to additional compensation arrangements"
  ],
  "ans": 2,
  "en": "The tickets are a benefit received from a client in connection with her work for the employer. Standard IV(B) requires written consent from all parties — merely following the firm's narrower cash-only policy is not enough; accepting the tickets without informing her employer violates IV(B).",
  "vi": "Vé opera là lợi ích nhận từ khách hàng gắn với công việc cô làm cho công ty. Standard IV(B) yêu cầu có sự đồng ý bằng văn bản của tất cả các bên — chỉ tuân theo chính sách hẹp của công ty (chỉ khai báo tiền mặt) là chưa đủ; nhận vé mà không báo cho công ty là vi phạm IV(B)."
 },
 {
  "q": "Which of the following is a recommended procedure for compliance with the Standard relating to diligence and reasonable basis? Members should encourage their firms to:",
  "opts": [
   "consider the suitability of each investment solely on its own merits.",
   "develop maximum levels of scenario testing of computer-based models used in evaluating financial instruments.",
   "appoint an individual employee or a group of employees to determine that research reports have a reasonable and adequate basis."
  ],
  "ans": 2,
  "en": "A recommended V(A) procedure is to designate a person or review committee responsible for confirming that research has a reasonable and adequate basis before dissemination. Suitability should be judged in portfolio context, and scenario testing needs MINIMUM standards, not maximums.",
  "vi": "Một quy trình được khuyến nghị của V(A) là chỉ định một cá nhân hoặc hội đồng chịu trách nhiệm xác nhận rằng nghiên cứu có cơ sở hợp lý và đầy đủ trước khi phát hành. Suitability phải xét trong bối cảnh danh mục, còn scenario testing cần chuẩn TỐI THIỂU, không phải tối đa."
 },
 {
  "q": "Faiza Hassan, CFA, is an equity analyst specializing in social media companies. Recently, she placed a \"buy\" rating on WeGab Corp. Following her initial report on the company, Hassan's brother has purchased a large amount of WeGab stock. Hassan has no beneficial ownership in her brother's account. Hassan has been asked to write a follow-up report on WeGab because of strong takeover rumors relating to the company. Will Hassan violate the Standards if she writes the follow-up report without disclosing her brother's shareholding in the company?",
  "opts": [
   "No",
   "Yes, the Standard relating to avoid or disclose conflicts",
   "Yes, the Standard relating to loyalty, prudence, and care"
  ],
  "ans": 0,
  "en": "Because Hassan has no beneficial ownership or financial interest in her brother's independently purchased shares, there is no conflict that could reasonably impair her objectivity — no disclosure is required under VI(A).",
  "vi": "Vì Hassan không có beneficial ownership hay lợi ích tài chính nào trong số cổ phiếu em trai tự mua, không tồn tại xung đột có thể làm suy giảm tính khách quan của cô — nên không cần công bố theo VI(A)."
 },
 {
  "q": "Asset owners most likely benefit from a firm being GIPS compliant because it:",
  "opts": [
   "eliminates the need for in-depth due diligence only.",
   "facilitates the understanding of the sources of risk and excess return only.",
   "both eliminates the need for in-depth due diligence and facilitates the understanding of the sources of risk and excess return."
  ],
  "ans": 1,
  "en": "GIPS compliance improves comparability and transparency, helping asset owners understand sources of risk and return — but it never removes the need for thorough due diligence on the manager.",
  "vi": "Tuân thủ GIPS tăng tính so sánh và minh bạch, giúp chủ sở hữu tài sản hiểu nguồn gốc rủi ro và lợi nhuận vượt trội — nhưng không bao giờ thay thế được việc thẩm định (due diligence) kỹ lưỡng đối với nhà quản lý."
 },
 {
  "q": "Which of the following policy recommendations is consistent with the Standards? Recommendation 1: Investment banking personnel should approve any changes in investment recommendations from the research side. Recommendation 2: Firewalls should separate reporting structures for personnel on the research side and personnel on the investment banking side. Recommendation 3: Compensation arrangements should link research analyst remuneration directly to investment banking assignments in which analysts may participate as team members.",
  "opts": [
   "Recommendation 1",
   "Recommendation 2",
   "Recommendation 3"
  ],
  "ans": 1,
  "en": "Independence and objectivity I(B) call for firewalls separating research from investment banking, including separate reporting lines. Letting IB approve research changes or tying analyst pay directly to IB deals would compromise research objectivity.",
  "vi": "Standard I(B) về độc lập và khách quan yêu cầu firewall tách nghiên cứu khỏi investment banking, bao gồm tách cả cấu trúc báo cáo. Để IB duyệt thay đổi khuyến nghị hay gắn thẳng lương analyst với thương vụ IB sẽ làm tổn hại tính khách quan của nghiên cứu."
 },
 {
  "q": "A member receives referral fees for recommending third-party services to clients. Before entering into an agreement with a new client, which of the following must the member disclose to the new client?",
  "opts": [
   "Flat fees only",
   "In kind benefits only",
   "Both flat fees and in kind benefits"
  ],
  "ans": 2,
  "en": "Standard VI(C) Referral Fees requires disclosing ANY compensation, consideration, or benefit — monetary or in kind — received for the recommendation, before entering into the agreement, so the client can assess the potential bias and full cost.",
  "vi": "Standard VI(C) Referral Fees yêu cầu công bố MỌI khoản thù lao hay lợi ích — bằng tiền hay hiện vật — nhận được từ việc giới thiệu, trước khi ký thỏa thuận, để khách hàng đánh giá được thiên lệch tiềm ẩn và chi phí đầy đủ."
 },
 {
  "q": "For a retail client's account to be included in a GIPS-compliant firm's composite, it will most likely be in a composite:",
  "opts": [
   "restricted to retail accounts.",
   "composed of discretionary accounts.",
   "with both fee-paying and non-fee-paying accounts."
  ],
  "ans": 1,
  "en": "Composites must include all actual, fee-paying, DISCRETIONARY portfolios grouped by similar strategy or mandate. There is no requirement to segregate retail accounts, and non-fee-paying accounts are not required inclusions.",
  "vi": "Composite phải bao gồm toàn bộ danh mục thực, trả phí và CÓ TOÀN QUYỀN QUYẾT ĐỊNH (discretionary), nhóm theo chiến lược hoặc mandate tương đồng. Không có yêu cầu tách riêng tài khoản bán lẻ, và tài khoản không trả phí không bắt buộc đưa vào."
 },
 {
  "q": "Feng Liu, CFA, is an investment manager. Liu organizes nonviolent demonstrations on weekends to fight climate change. After repeated demonstrations, Liu is arrested and convicted for obstructing public transit which is considered an act of civil disobedience in her country. Has Liu violated the Standards?",
  "opts": [
   "No",
   "Yes, Liu has violated the Standard relating to loyalty",
   "Yes, Liu has violated the Standard relating to misconduct"
  ],
  "ans": 0,
  "en": "Standard I(D) Misconduct targets dishonesty, fraud, or acts reflecting adversely on professional reputation, integrity, or competence. A conviction from peaceful civil disobedience for personal beliefs does not involve professional dishonesty — no violation.",
  "vi": "Standard I(D) Misconduct nhắm đến hành vi gian dối, lừa đảo, hoặc gây tổn hại đến uy tín, tính chính trực, năng lực NGHỀ NGHIỆP. Bị kết án vì bất tuân dân sự ôn hòa xuất phát từ niềm tin cá nhân không liên quan đến sự trung thực nghề nghiệp — không vi phạm."
 },
 {
  "q": "Meghna Shah, CFA, manages a small-cap fund. Applying mosaic theory, Shah concludes that AK Tech (AKT) is overpriced and sells the fund's significant holding in AKT for a profit. Shah is aware that her transaction could impact AKT's price because the position is large enough to require disclosure to stock exchanges. A blog tracking stock exchange news reports Shah's transaction, which leads to 8% decline in AKT's price, causing losses to other investors. Has Shah violated the Standards?",
  "opts": [
   "No",
   "Yes, the Standard relating to market manipulation",
   "Yes, the Standard relating to material nonpublic information"
  ],
  "ans": 0,
  "en": "Her conclusion came from mosaic theory (permitted), and the sale was a genuine investment decision — not a transaction intended to deceive or distort prices. Knowing a legitimate large trade may move the market is not manipulation.",
  "vi": "Kết luận của cô đến từ mosaic theory (được phép), và lệnh bán là quyết định đầu tư thực sự — không phải giao dịch nhằm đánh lừa hay bóp méo giá. Biết rằng một giao dịch lớn hợp pháp có thể làm giá biến động không phải là market manipulation."
 },
 {
  "q": "Frank Schneider, CFA, a securities analyst, applies for a new position. In his application, he makes two statements. Statement 1: I passed all three CFA examinations in three consecutive attempts. Statement 2: Based on my success in the CFA Program, I have a superior ability to analyze stocks compared to my peers. Schneider has most likely violated the Standards by making:",
  "opts": [
   "Statement 1 only",
   "Statement 2 only",
   "Both Statement 1 and Statement 2"
  ],
  "ans": 1,
  "en": "Stating a factual, verifiable record (passing three exams consecutively) is allowed. Claiming SUPERIOR ability because of the CFA designation exaggerates the meaning of the charter and violates Standard VII(B).",
  "vi": "Nêu một sự thật có thể kiểm chứng (đỗ 3 kỳ thi liên tiếp) là được phép. Nhưng tuyên bố có năng lực VƯỢT TRỘI nhờ chương trình CFA là phóng đại ý nghĩa của chứng chỉ, vi phạm Standard VII(B)."
 },
 {
  "q": "Sue Kim, CFA, a US citizen, works as an analyst for a subsidiary of a US investment firm on a small island that attracts offshore investment accounts. Local securities laws allow insider trading. While having dinner with the CEO of a local company, Kim learns that the firm is in negotiations to be acquired for a significant premium. Would Kim most likely comply with the CFA Institute Standards if she purchased the company's shares for her client accounts?",
  "opts": [
   "No",
   "Yes, because local laws allow insider trading",
   "Yes, if she receives permission from her firm's compliance department"
  ],
  "ans": 0,
  "en": "Acquisition negotiations are material nonpublic information. Standard II(A) prohibits trading on MNPI regardless of local law — members must follow the stricter of applicable law and the Standards, and compliance approval cannot override that.",
  "vi": "Thông tin đàm phán thâu tóm là material nonpublic information. Standard II(A) cấm giao dịch dựa trên MNPI bất kể luật địa phương — thành viên phải tuân theo quy định nghiêm ngặt hơn giữa luật và Standards, và sự chấp thuận của compliance cũng không thể vượt qua điều đó."
 },
 {
  "q": "A member works in a country where there is no regulation relating to investment performance standards. In the absence of any regulatory guidance, the member is required to communicate investment performance information to her clients in accordance with:",
  "opts": [
   "the GIPS standards.",
   "the Code and Standards.",
   "stricter of the GIPS standards and the Code and Standards."
  ],
  "ans": 1,
  "en": "Members are always REQUIRED to follow the Code and Standards — here III(D) Performance Presentation demands fair, accurate, and complete performance communication. GIPS compliance is voluntary and applies to firms, not individuals.",
  "vi": "Thành viên luôn BẮT BUỘC tuân theo Code and Standards — ở đây là III(D) Performance Presentation, yêu cầu truyền đạt kết quả đầu tư công bằng, chính xác và đầy đủ. GIPS là tự nguyện và áp dụng cho công ty, không phải cá nhân."
 },
 {
  "q": "According to the Standard relating to preservation of confidentiality, if local laws require investment personnel to maintain confidentiality, is a member permitted to share confidential client information?",
  "opts": [
   "No",
   "Yes, if the information concerns activities of a former client",
   "Yes, if the information is provided in support of an investigation by the CFA Institute Professional Conduct Program into the member's conduct"
  ],
  "ans": 2,
  "en": "Standard III(E) permits disclosing confidential information to the CFA Institute Professional Conduct Program for an investigation into the member's conduct (members are encouraged to cooperate, subject to applicable law). Confidentiality otherwise continues even for former clients.",
  "vi": "Standard III(E) cho phép cung cấp thông tin bảo mật cho Professional Conduct Program của CFA Institute khi điều tra hành vi của thành viên (thành viên được khuyến khích hợp tác, trong khuôn khổ luật cho phép). Ngoài trường hợp đó, nghĩa vụ bảo mật vẫn duy trì kể cả với khách hàng cũ."
 },
 {
  "q": "Which of the following member actions most likely violates the Standard relating to fair dealing?",
  "opts": [
   "Providing premium service levels to clients who pay higher fees",
   "Selectively offering different service levels to prospective clients",
   "Using different communication methods to recommend investments to clients"
  ],
  "ans": 1,
  "en": "Different service tiers are acceptable under III(B) only if they are disclosed and available to ALL clients and prospects. Offering levels SELECTIVELY — without disclosure or equal availability — disadvantages some prospects and violates fair dealing. Varying communication methods is fine if dissemination is fair.",
  "vi": "Các gói dịch vụ khác nhau chỉ hợp lệ theo III(B) nếu được công bố và mở cho TẤT CẢ khách hàng lẫn khách hàng tiềm năng. Chào mời CHỌN LỌC — không công bố, không bình đẳng — gây bất lợi cho một số người và vi phạm fair dealing. Dùng kênh liên lạc khác nhau là chấp nhận được nếu việc truyền tin vẫn công bằng."
 },
 {
  "q": "Sara Perkin, CFA, sends a stock recommendation in capsule form to clients and adds that additional information is available upon request. Perkin's colleague, Tom Miller, CFA, uses a return forecasting model which has delivered positive results for his equity fund in each of the last seven years. Miller provides the model output in a marketing brochure and notes: \"The fund will continue to deliver a positive return next year.\" Has the Standard relating to communication with clients and prospective clients been violated?",
  "opts": [
   "No",
   "Yes, by Miller",
   "Yes, by Perkin"
  ],
  "ans": 1,
  "en": "Capsule recommendations with details available on request are acceptable under V(B). Miller, however, states a model projection as a certainty — failing to separate fact from opinion and effectively guaranteeing future returns — a violation.",
  "vi": "Khuyến nghị dạng tóm tắt kèm thông tin chi tiết khi được yêu cầu là hợp lệ theo V(B). Nhưng Miller trình bày dự phóng của mô hình như một điều chắc chắn — không tách bạch sự thật với quan điểm và gần như bảo đảm lợi nhuận tương lai — nên vi phạm."
 },
 {
  "q": "An inventory system that reduces average inventory without affecting sales will most likely reduce the:",
  "opts": [
   "quick ratio.",
   "inventory turnover.",
   "cash conversion cycle."
  ],
  "ans": 2,
  "en": "Lower average inventory with unchanged sales raises inventory turnover and cuts days of inventory on hand, so the cash conversion cycle (DOH + DSO − DPO) falls. The quick ratio excludes inventory and would not be reduced.",
  "vi": "Tồn kho bình quân giảm trong khi doanh thu không đổi làm inventory turnover tăng và số ngày tồn kho (DOH) giảm, nên cash conversion cycle (DOH + DSO − DPO) giảm. Quick ratio không tính tồn kho nên không bị giảm."
 },
 {
  "q": "With respect to fintech, which of the following statements is most accurate?",
  "opts": [
   "Big Data solves the issue of selection bias.",
   "A neural network that learns a dataset too precisely may indicate overfitting.",
   "Machine learning algorithms require assumptions on the underlying probability distribution of the data."
  ],
  "ans": 1,
  "en": "Learning the training data too precisely — including its noise — is the definition of overfitting, which hurts out-of-sample performance. Big Data does not cure selection bias, and ML methods are largely distribution-free.",
  "vi": "Học dữ liệu huấn luyện quá sát — bao gồm cả nhiễu — chính là overfitting, làm giảm hiệu quả trên dữ liệu ngoài mẫu. Big Data không giải quyết được selection bias, và các thuật toán machine learning phần lớn không cần giả định về phân phối xác suất."
 },
 {
  "q": "In calculating basic and diluted EPS, if the numerators are the same but the denominators are different, the company:",
  "opts": [
   "split its stock during the year.",
   "had stock options outstanding at year end.",
   "had convertible debt outstanding at year end."
  ],
  "ans": 1,
  "en": "Dilutive stock options add shares (treasury stock method) but do not change net income, so only the denominator differs. Convertible debt would also change the numerator (after-tax interest added back). A stock split affects both EPS figures identically.",
  "vi": "Stock options có tính pha loãng làm tăng số cổ phiếu (phương pháp treasury stock) nhưng không đổi net income, nên chỉ mẫu số khác nhau. Convertible debt sẽ làm thay đổi cả tử số (cộng lại lãi vay sau thuế). Chia tách cổ phiếu ảnh hưởng hai chỉ số EPS như nhau."
 },
 {
  "q": "Which of the following is most likely a feature of sole proprietorships?",
  "opts": [
   "Existence of a legal identity",
   "Operational simplicity and flexibility",
   "Taxation of business profits as corporate income"
  ],
  "ans": 1,
  "en": "A sole proprietorship is an extension of its owner: simple and flexible to operate, with no separate legal identity, and profits taxed as the owner's personal income rather than corporate income.",
  "vi": "Hộ kinh doanh cá thể là phần mở rộng của chủ sở hữu: vận hành đơn giản, linh hoạt, không có tư cách pháp nhân riêng, và lợi nhuận bị đánh thuế như thu nhập cá nhân của chủ chứ không phải thuế thu nhập doanh nghiệp."
 },
 {
  "q": "A risky project has an initial cash outflow followed by cash inflows only. If the project's IRR is zero, the project's NPV is most likely:",
  "opts": [
   "negative.",
   "zero.",
   "positive."
  ],
  "ans": 0,
  "en": "IRR = 0 means NPV is zero only when discounting at 0%. A risky project has a positive required return, and for conventional cash flows NPV falls as the discount rate rises — so at any positive cost of capital, NPV is negative.",
  "vi": "IRR = 0 nghĩa là NPV bằng 0 chỉ khi chiết khấu ở mức 0%. Dự án rủi ro có required return dương, và với dòng tiền thông thường NPV giảm khi lãi suất chiết khấu tăng — nên tại bất kỳ chi phí vốn dương nào, NPV sẽ âm."
 },
 {
  "q": "Which of the following is a common pitfall in capital allocation analysis?",
  "opts": [
   "Ignoring costs of internal financing",
   "Performing analysis in nominal terms",
   "Incorporating other companies' potential responses into the analysis"
  ],
  "ans": 0,
  "en": "Treating internally generated funds as free — ignoring their opportunity cost — is a classic capital allocation pitfall (source-of-capital bias). Nominal analysis is fine if cash flows and rates are consistent, and considering competitors' responses is good practice, not a pitfall.",
  "vi": "Coi vốn nội bộ là miễn phí — bỏ qua chi phí cơ hội của nó — là lỗi kinh điển trong phân bổ vốn. Phân tích theo giá trị danh nghĩa vẫn ổn nếu dòng tiền và lãi suất nhất quán, còn tính đến phản ứng của đối thủ là thực hành tốt, không phải lỗi."
 },
 {
  "q": "Which of the following best reflects good corporate governance?",
  "opts": [
   "Dual-class share structure",
   "Established brand reputation",
   "Diversity, experience, and independence of directors"
  ],
  "ans": 2,
  "en": "Strong governance rests on a capable board: diverse, experienced, and independent directors who can oversee management objectively. Dual-class shares weaken governance by separating control from economic ownership; brand reputation is not a governance mechanism.",
  "vi": "Quản trị tốt dựa trên một hội đồng quản trị chất lượng: đa dạng, giàu kinh nghiệm và độc lập để giám sát ban điều hành một cách khách quan. Cơ cấu cổ phiếu hai hạng làm suy yếu quản trị vì tách quyền kiểm soát khỏi sở hữu kinh tế; uy tín thương hiệu không phải cơ chế quản trị."
 },
 {
  "q": "Which of the following disclosures about intangible assets is required under US GAAP?",
  "opts": [
   "Why an asset is considered to have an indefinite life",
   "Where amortization is included on the income statement",
   "What the estimated amortization expense for the next five fiscal years will be"
  ],
  "ans": 2,
  "en": "US GAAP requires companies to disclose the estimated aggregate amortization expense for intangibles for each of the next five fiscal years.",
  "vi": "US GAAP yêu cầu công ty công bố ước tính tổng chi phí khấu hao tài sản vô hình cho từng năm trong 5 năm tài chính tiếp theo."
 },
 {
  "q": "An analyst forecasts the following results for a company: net profit margin 18%; depreciation $6 million; decrease in working capital $1.5 million; increase in fixed capital $6 million; market share 9%. If total industry sales are forecasted to be $3.3 billion and the company has no interest expense, the company's forecasted free cash flow to the firm is closest to:",
  "opts": [
   "$43 million.",
   "$52 million.",
   "$55 million."
  ],
  "ans": 2,
  "en": "Sales = 9% × $3.3B = $297m; NI = 18% × 297 = $53.46m. With no interest, FCFF = NI + Dep − FCInv − WCInv = 53.46 + 6 − 6 − (−1.5) = $54.96m ≈ $55m. The working capital DECREASE releases cash, so it is added.",
  "vi": "Doanh thu = 9% × 3,3 tỷ = 297 triệu; NI = 18% × 297 = 53,46 triệu. Không có lãi vay nên FCFF = NI + Khấu hao − FCInv − WCInv = 53,46 + 6 − 6 − (−1,5) = 54,96 ≈ 55 triệu USD. Vốn lưu động GIẢM tức giải phóng tiền, nên được cộng vào."
 },
 {
  "q": "Which of the following would best mitigate an analyst's confirmation bias when forecasting a firm's financial statements?",
  "opts": [
   "Speaking with management of the firm",
   "Ignoring information about the firm's competitors",
   "Reading the research from analysts with a negative opinion of the firm"
  ],
  "ans": 2,
  "en": "Confirmation bias is countered by actively seeking DISconfirming evidence — such as bearish research. Management tends to reinforce the positive narrative, and ignoring competitor information narrows the evidence base further.",
  "vi": "Confirmation bias được hóa giải bằng cách chủ động tìm bằng chứng TRÁI CHIỀU — ví dụ đọc báo cáo của các analyst có quan điểm tiêu cực. Ban lãnh đạo thường củng cố câu chuyện tích cực, còn bỏ qua thông tin đối thủ chỉ càng thu hẹp nguồn bằng chứng."
 },
 {
  "q": "Because of a problem with the production process, a manufacturer produced a batch of defective finished goods with a total cost of $18,000. The sales value of this batch in its current condition is $6,000. With $3,000 of additional processing, however, the batch could be sold for $11,000. The value of the unsold inventory is closest to:",
  "opts": [
   "$8,000.",
   "$9,000.",
   "$11,000."
  ],
  "ans": 0,
  "en": "Inventory is written down to net realizable value: the best option is further processing, giving NRV = $11,000 − $3,000 = $8,000, which exceeds the $6,000 as-is value and is below cost ($18,000).",
  "vi": "Tồn kho được ghi giảm về net realizable value: phương án tốt nhất là gia công thêm, cho NRV = 11.000 − 3.000 = 8.000 USD, cao hơn giá trị bán ngay (6.000) và thấp hơn giá vốn (18.000)."
 },
 {
  "q": "A common market has a higher degree of economic integration than a(n):",
  "opts": [
   "customs union.",
   "monetary union.",
   "economic union."
  ],
  "ans": 0,
  "en": "The integration ladder runs: free trade area → customs union → common market (adds free movement of labor and capital) → economic union → monetary union. A common market sits above a customs union but below economic and monetary unions.",
  "vi": "Bậc thang hội nhập: khu vực thương mại tự do → liên minh thuế quan → thị trường chung (thêm tự do di chuyển lao động và vốn) → liên minh kinh tế → liên minh tiền tệ. Thị trường chung cao hơn liên minh thuế quan nhưng thấp hơn liên minh kinh tế và tiền tệ."
 },
 {
  "q": "An analyst runs a simple linear regression using 35 months of data to assess a country's short-term interest rate as a function of its inflation rate. ANOVA results: Regression — df 1, Sum of Squares 17.3009, Mean Square 17.3009; Error — df 33, Sum of Squares 20.2299, Mean Square 0.6130; Total — df 34, Sum of Squares 37.5308. The percentage of the variation in the short-term interest rate that is explained by the inflation rate is closest to:",
  "opts": [
   "46%.",
   "54%.",
   "61%."
  ],
  "ans": 0,
  "en": "R² = SSR/SST = 17.3009 / 37.5308 = 0.461 → about 46% of the variation is explained by the regression.",
  "vi": "R² = SSR/SST = 17,3009 / 37,5308 = 0,461 → khoảng 46% biến thiên của lãi suất ngắn hạn được giải thích bởi tỷ lệ lạm phát."
 },
 {
  "q": "An asset management firm generated the following annual net returns in their US large-cap equity portfolio: 2008 = −34.8%, 2009 = +32.2%, 2010 = +11.1%, 2011 = −1.4%. The 2012 return needed to achieve a trailing five-year geometric mean annualized return of 5% when calculated at the end of 2012 is closest to:",
  "opts": [
   "17.9%.",
   "27.6%.",
   "35.2%."
  ],
  "ans": 2,
  "en": "Required cumulative growth = 1.05⁵ = 1.27628. Product of 2008–2011 factors = 0.652 × 1.322 × 1.111 × 0.986 = 0.94421. Needed 2012 factor = 1.27628 / 0.94421 = 1.3517 → about 35.2%.",
  "vi": "Tăng trưởng tích lũy cần đạt = 1,05⁵ = 1,27628. Tích các hệ số 2008–2011 = 0,652 × 1,322 × 1,111 × 0,986 = 0,94421. Hệ số 2012 cần có = 1,27628 / 0,94421 = 1,3517 → khoảng 35,2%."
 },
 {
  "q": "A central bank most likely:",
  "opts": [
   "will not lend money to banks facing shortages.",
   "is a monopoly supplier of a country's currency.",
   "does not manage a country's foreign currency reserves."
  ],
  "ans": 1,
  "en": "A central bank is the sole (monopoly) issuer of the nation's currency. It also acts as lender of last resort to banks facing shortages and typically manages the country's foreign exchange reserves — so the other two statements are false.",
  "vi": "Ngân hàng trung ương là nhà phát hành độc quyền đồng tiền quốc gia. Nó cũng là người cho vay cuối cùng đối với các ngân hàng thiếu hụt thanh khoản và thường quản lý dự trữ ngoại hối — nên hai phát biểu còn lại đều sai."
 },
 {
  "q": "A lessee entering into a long-term lease most likely:",
  "opts": [
   "faces a higher risk of asset obsolescence compared to purchasing the asset with cash.",
   "reports a lower total asset turnover in the year of acquisition compared to purchasing the asset with cash.",
   "reports a greater investing cash outflow in the year of acquisition compared to purchasing the asset with cash."
  ],
  "ans": 1,
  "en": "A cash purchase just swaps cash for PP&E, leaving total assets unchanged; a lease adds a right-of-use asset (and liability) with no cash outflow, so total assets are HIGHER and revenue/assets — total asset turnover — is lower. Leasing reduces obsolescence risk and has no investing outflow at inception.",
  "vi": "Mua bằng tiền mặt chỉ hoán đổi tiền lấy PP&E nên tổng tài sản không đổi; thuê tài sản tạo thêm right-of-use asset (và nợ thuê) mà không chi tiền, nên tổng tài sản CAO HƠN và vòng quay tổng tài sản thấp hơn. Thuê còn giảm rủi ro lỗi thời và không có dòng tiền đầu tư ra tại thời điểm bắt đầu."
 },
 {
  "q": "An analyst gathers the following information about a company: ROE = 6%; ROA = 4%; average total assets = €600,000. Based only on this information, average total liabilities are:",
  "opts": [
   "€200,000.",
   "€300,000.",
   "€400,000."
  ],
  "ans": 0,
  "en": "Net income = ROA × assets = 4% × 600,000 = €24,000. Equity = NI / ROE = 24,000 / 6% = €400,000. Liabilities = 600,000 − 400,000 = €200,000.",
  "vi": "Net income = ROA × tổng tài sản = 4% × 600.000 = 24.000 €. Vốn chủ = NI / ROE = 24.000 / 6% = 400.000 €. Nợ phải trả = 600.000 − 400.000 = 200.000 €."
 },
 {
  "q": "In contrast to non-probability sampling, probability sampling:",
  "opts": [
   "depends on factors other than probability considerations.",
   "has a high risk of generating a non-representative sample.",
   "gives every member of the population an equal chance of being selected."
  ],
  "ans": 2,
  "en": "Probability sampling gives every population member an equal (known) chance of selection, which tends to produce representative samples. Non-probability sampling relies on judgment or convenience and carries higher representativeness risk.",
  "vi": "Probability sampling cho mọi phần tử của tổng thể cơ hội được chọn ngang nhau (đã biết), nhờ đó mẫu có tính đại diện cao. Non-probability sampling dựa vào phán đoán hoặc sự thuận tiện nên rủi ro mẫu thiếu đại diện cao hơn."
 },
 {
  "q": "In which phase of the business cycle is actual output most likely below potential output?",
  "opts": [
   "Recovery",
   "Slowdown",
   "Expansion"
  ],
  "ans": 0,
  "en": "In recovery the economy is climbing out of a trough: activity accelerates but actual output remains BELOW potential (a negative output gap) until the expansion closes it. In expansion and slowdown, output is at or above potential.",
  "vi": "Trong pha recovery, nền kinh tế đang thoát đáy: hoạt động tăng tốc nhưng sản lượng thực tế vẫn DƯỚI mức tiềm năng (chênh lệch sản lượng âm) cho đến khi pha mở rộng lấp đầy. Ở pha expansion và slowdown, sản lượng bằng hoặc trên mức tiềm năng."
 },
 {
  "q": "An analyst gathers the following information about a company that uses only common equity and debt in its capital structure: cost of debt (estimated by yield to maturity) = 5.1%; cost of equity = 9.8%; percent of capital from debt = 40.0%. If the company's marginal tax rate is 25%, the WACC is closest to:",
  "opts": [
   "5.9%.",
   "7.4%.",
   "7.9%."
  ],
  "ans": 1,
  "en": "WACC = 0.40 × 5.1% × (1 − 0.25) + 0.60 × 9.8% = 1.53% + 5.88% = 7.41% ≈ 7.4%. Only the debt cost is tax-adjusted.",
  "vi": "WACC = 0,40 × 5,1% × (1 − 0,25) + 0,60 × 9,8% = 1,53% + 5,88% = 7,41% ≈ 7,4%. Chỉ chi phí nợ được điều chỉnh thuế."
 },
 {
  "q": "The 'box' in a box and whisker plot represents the:",
  "opts": [
   "interquartile range.",
   "range between the median and the arithmetic average.",
   "range between the highest and lowest values of the distribution."
  ],
  "ans": 0,
  "en": "The box spans from the first quartile to the third quartile — the interquartile range containing the middle 50% of observations. The whiskers extend toward the extremes.",
  "vi": "Chiếc hộp trải từ tứ phân vị thứ nhất đến tứ phân vị thứ ba — tức interquartile range chứa 50% quan sát ở giữa. Hai râu (whiskers) vươn về phía các giá trị cực trị."
 },
 {
  "q": "An analyst gathers the following information (in £ thousands) about equipment owned by a company: carrying amount prior to impairment = 36; fair value = 34; selling costs = 4; undiscounted expected future cash flows = 38; discounted expected future cash flows = 32. The equipment is considered impaired under:",
  "opts": [
   "IFRS only.",
   "US GAAP only.",
   "both IFRS and US GAAP."
  ],
  "ans": 0,
  "en": "IFRS: recoverable amount = higher of fair value less costs to sell (34 − 4 = 30) and value in use (32) = 32 < carrying 36 → impaired. US GAAP step 1: undiscounted cash flows 38 > 36 → recoverable, NOT impaired.",
  "vi": "IFRS: recoverable amount = giá trị cao hơn giữa fair value trừ chi phí bán (34 − 4 = 30) và value in use (32) = 32 < giá trị ghi sổ 36 → bị suy giảm. US GAAP bước 1: dòng tiền chưa chiết khấu 38 > 36 → thu hồi được, KHÔNG suy giảm."
 },
 {
  "q": "The reversal of a prior fiscal year inventory write-down is:",
  "opts": [
   "prohibited.",
   "recognized as a reduction in cost of sales.",
   "recognized as an increase in other operating income."
  ],
  "ans": 1,
  "en": "Under IFRS, a reversal of an inventory write-down (limited to the original write-down amount) is recognized as a REDUCTION of cost of sales in the period of reversal. US GAAP prohibits reversals, but the IFRS treatment is the accepted answer here.",
  "vi": "Theo IFRS, hoàn nhập khoản ghi giảm tồn kho (tối đa bằng khoản đã ghi giảm) được ghi nhận là khoản GIẢM giá vốn hàng bán trong kỳ hoàn nhập. US GAAP cấm hoàn nhập, nhưng cách xử lý theo IFRS là đáp án được chấp nhận ở đây."
 },
 {
  "q": "The structural budget deficit is the deficit that exists if the economy:",
  "opts": [
   "is below full potential output.",
   "is at full potential output.",
   "is above full potential output."
  ],
  "ans": 1,
  "en": "The structural (cyclically adjusted) deficit is the deficit that would remain even with the economy operating AT full potential output — it strips out the cyclical component caused by booms and recessions.",
  "vi": "Thâm hụt cơ cấu (đã điều chỉnh chu kỳ) là mức thâm hụt vẫn tồn tại khi nền kinh tế hoạt động ĐÚNG mức sản lượng tiềm năng — nó loại bỏ phần thâm hụt chu kỳ do bùng nổ hay suy thoái gây ra."
 },
 {
  "q": "Two populations are normally distributed with unknown variances that are assumed to be equal. If a large independent random sample is drawn from each population, the most appropriate test statistic for testing the difference between the population means is the:",
  "opts": [
   "t-statistic.",
   "z-statistic.",
   "F-statistic."
  ],
  "ans": 0,
  "en": "With unknown (assumed equal) variances, the difference in means is tested with a t-statistic using a pooled variance estimate — even for large samples. The F-statistic compares variances, not means.",
  "vi": "Khi phương sai chưa biết (giả định bằng nhau), kiểm định chênh lệch trung bình dùng t-statistic với ước lượng phương sai gộp (pooled) — kể cả mẫu lớn. F-statistic dùng để so sánh phương sai, không phải trung bình."
 },
 {
  "q": "An analyst gathers the following information about a company's 3-year contract to produce computers: total sales price = €200,000; estimated total costs = €100,000; actual costs incurred in Year 1 = €50,000; total contracted number of computers to be produced = 100 units; total number of computers produced in Year 1 = 30 units. The output method provides an appropriate measure of progress towards completing the contract and performance obligations are satisfied over time. Assuming it is highly probable that revenue will not be subsequently reversed, revenue recognized in Year 1 is closest to:",
  "opts": [
   "€60,000.",
   "€66,667.",
   "€100,000."
  ],
  "ans": 0,
  "en": "Under the OUTPUT method, progress = units delivered / total units = 30/100 = 30%. Revenue in Year 1 = 30% × €200,000 = €60,000. (€100,000 would result from the input/cost method: 50,000/100,000 = 50%.)",
  "vi": "Theo phương pháp OUTPUT, tiến độ = số máy hoàn thành / tổng số máy = 30/100 = 30%. Doanh thu Năm 1 = 30% × 200.000 = 60.000 €. (Đáp án 100.000 € là bẫy của phương pháp input theo chi phí: 50.000/100.000 = 50%.)"
 },
 {
  "q": "An analyst gathers the following USD/GBP exchange rate information: spot rate = 1.11721; 1-year forward rate = 1.11851 (USD/GBP is the amount of USD per 1 GBP). The 1-year forward points are closest to:",
  "opts": [
   "1.2.",
   "13.0.",
   "25.0."
  ],
  "ans": 1,
  "en": "Forward points = (forward − spot) × 10,000 = (1.11851 − 1.11721) × 10,000 = 0.00130 × 10,000 = 13.0 points.",
  "vi": "Forward points = (tỷ giá kỳ hạn − giao ngay) × 10.000 = (1,11851 − 1,11721) × 10.000 = 0,00130 × 10.000 = 13,0 điểm."
 },
 {
  "q": "Which of the following statements about financial reporting is most accurate?",
  "opts": [
   "Aggressive accounting choices in the current period may decrease the company's future reported earnings",
   "High-quality financial reports contain information that is relevant, complete, conservative, and free from error",
   "Conservative accounting choices help a company with good performance issue higher quality financial reports"
  ],
  "ans": 0,
  "en": "Aggressive choices pull earnings forward, 'borrowing' from the future and depressing later results. High-quality information should be NEUTRAL and unbiased — conservatism is itself a bias and does not raise reporting quality.",
  "vi": "Lựa chọn kế toán 'hung hăng' kéo lợi nhuận về hiện tại, tức 'vay mượn' từ tương lai và làm giảm kết quả các kỳ sau. Thông tin chất lượng cao phải TRUNG LẬP, không thiên lệch — thận trọng quá mức cũng là một dạng thiên lệch, không làm báo cáo chất lượng hơn."
 },
 {
  "q": "A mining company has received government approval for the development of a mining property and has also consulted with members of the local community near the development site throughout the project assessment process. The latter action is best described as an example of:",
  "opts": [
   "regulatory compliance.",
   "stakeholder management.",
   "principal–agent conflict mitigation."
  ],
  "ans": 1,
  "en": "The local community is a non-contractual stakeholder; engaging and consulting them throughout the project is stakeholder management, going beyond what regulation requires.",
  "vi": "Cộng đồng địa phương là bên liên quan phi hợp đồng; việc tham vấn họ xuyên suốt dự án chính là stakeholder management, vượt trên yêu cầu tuân thủ quy định."
 },
 {
  "q": "Under US GAAP, material income items that are unusual and infrequent are shown as part of:",
  "opts": [
   "continuing operations and presented separately.",
   "continuing operations and not presented separately.",
   "non-operating activities and not presented separately."
  ],
  "ans": 0,
  "en": "US GAAP requires material unusual and/or infrequent items to be reported within income from CONTINUING operations but disclosed separately so users can evaluate their impact.",
  "vi": "US GAAP yêu cầu các khoản trọng yếu bất thường và/hoặc không thường xuyên được báo cáo trong thu nhập từ hoạt động LIÊN TỤC nhưng trình bày tách riêng để người đọc đánh giá được tác động."
 },
 {
  "q": "A deferred tax liability could arise when:",
  "opts": [
   "interest is received in advance but taxed on a cash basis.",
   "the carrying amount of an asset is higher than its tax base.",
   "taxable income is higher than accounting profit due to temporary differences."
  ],
  "ans": 1,
  "en": "When an asset's carrying amount exceeds its tax base (e.g., faster tax depreciation), future taxable income will exceed future accounting income — a deferred tax LIABILITY. The other two situations describe deferred tax assets.",
  "vi": "Khi giá trị ghi sổ của tài sản cao hơn cơ sở tính thuế (ví dụ khấu hao thuế nhanh hơn), thu nhập chịu thuế tương lai sẽ vượt lợi nhuận kế toán — tạo deferred tax LIABILITY. Hai tình huống còn lại tạo ra deferred tax asset."
 },
 {
  "q": "Using long-term debt or equity to finance working capital needs most likely:",
  "opts": [
   "reduces the cost of financing working capital.",
   "provides the opportunity to borrow only as needed.",
   "reduces the need to access capital markets in times of stress."
  ],
  "ans": 2,
  "en": "This conservative approach locks in funding, so the firm need not tap markets during stressful periods. It usually COSTS more than short-term borrowing, and 'borrow only as needed' flexibility belongs to short-term financing.",
  "vi": "Cách tiếp cận thận trọng này chốt sẵn nguồn vốn, nên doanh nghiệp không phải huy động trên thị trường lúc căng thẳng. Nó thường TỐN KÉM hơn vay ngắn hạn, còn tính linh hoạt 'vay khi cần' thuộc về tài trợ ngắn hạn."
 },
 {
  "q": "An analyst gathers the following information about a company: average variable cost per unit = $12.50; selling price per unit = $37.50; total fixed costs = $900,000. The minimum production level needed to continue operations over the long run is most likely:",
  "opts": [
   "24,000 units.",
   "36,000 units.",
   "72,000 units."
  ],
  "ans": 1,
  "en": "In the long run the firm must cover ALL costs. Breakeven quantity = fixed costs / contribution per unit = 900,000 / (37.50 − 12.50) = 900,000 / 25 = 36,000 units.",
  "vi": "Trong dài hạn doanh nghiệp phải bù đắp TOÀN BỘ chi phí. Sản lượng hòa vốn = định phí / lãi góp đơn vị = 900.000 / (37,50 − 12,50) = 900.000 / 25 = 36.000 đơn vị."
 },
 {
  "q": "For an analyst estimating a company's target capital structure, which of the following methods is most appropriate?",
  "opts": [
   "Apply the company's current capital structure at book value weights",
   "Use the average capital structure of a diversified group of companies",
   "Infer the target capital structure by analyzing management statements on capital structure policy"
  ],
  "ans": 2,
  "en": "Acceptable approaches: current capital structure at MARKET values, trends and management statements about financing policy, or averages of COMPARABLE companies. Book value weights and a diversified (non-comparable) peer group are both inappropriate.",
  "vi": "Các cách hợp lệ: cơ cấu vốn hiện tại theo GIÁ THỊ TRƯỜNG, xu hướng và phát biểu của ban lãnh đạo về chính sách tài trợ, hoặc trung bình của các công ty TƯƠNG ĐỒNG. Trọng số theo giá trị sổ sách và nhóm công ty đa ngành (không tương đồng) đều không phù hợp."
 },
 {
  "q": "Which of the following statements about kurtosis is most accurate?",
  "opts": [
   "A fat-tailed distribution is referred to as platykurtic.",
   "All distributions with kurtosis above zero are fat-tailed.",
   "The calculation for kurtosis involves finding the average of deviations from the mean raised to the fourth power."
  ],
  "ans": 2,
  "en": "Kurtosis is based on the average of fourth-power deviations from the mean (scaled by σ⁴). Fat-tailed distributions are LEPTOkurtic; fat tails require EXCESS kurtosis above zero (kurtosis above 3), since the normal itself has kurtosis of 3.",
  "vi": "Kurtosis được tính từ trung bình các độ lệch so với mean lũy thừa bậc bốn (chuẩn hóa theo σ⁴). Phân phối đuôi dày gọi là LEPTOkurtic; đuôi dày đòi hỏi EXCESS kurtosis dương (kurtosis trên 3), vì bản thân phân phối chuẩn đã có kurtosis bằng 3."
 },
 {
  "q": "An analyst gathers the following information about a company: Revenue — Year 2 = €725,000, Year 1 = €720,000; EBIT — Year 2 = €93,500, Year 1 = €91,500; net income — Year 2 = €57,500, Year 1 = €58,000; weighted average common shares outstanding during the year — Year 2 = 650,000, Year 1 = 635,000. Which of the following increased from Year 1 to Year 2?",
  "opts": [
   "Basic EPS",
   "EBIT margin",
   "Net profit margin"
  ],
  "ans": 1,
  "en": "EBIT margin rose from 91,500/720,000 = 12.71% to 93,500/725,000 = 12.90%. Basic EPS fell (58,000/635,000 = 0.0913 → 57,500/650,000 = 0.0885) and net margin fell (8.06% → 7.93%).",
  "vi": "Biên EBIT tăng từ 91.500/720.000 = 12,71% lên 93.500/725.000 = 12,90%. Basic EPS giảm (58.000/635.000 = 0,0913 → 57.500/650.000 = 0,0885) và biên lợi nhuận ròng giảm (8,06% → 7,93%)."
 },
 {
  "q": "Monetary policy:",
  "opts": [
   "aims to redistribute wealth within the economy.",
   "adjusts taxation rates to influence growth in the economy.",
   "aims to control the quantity of money and credit in an economy."
  ],
  "ans": 2,
  "en": "Monetary policy is the central bank's management of money and credit quantities (and their price — interest rates). Taxation and wealth redistribution are fiscal policy tools.",
  "vi": "Chính sách tiền tệ là việc ngân hàng trung ương điều tiết lượng tiền và tín dụng (cùng giá của chúng — lãi suất). Thuế và tái phân phối của cải thuộc chính sách tài khóa."
 },
 {
  "q": "An analyst examines the following quarterly returns for a client's portfolio: 8%, 3%, −2%, 10%, 8%, 0%, −3%, 12%. If the target return is 5% per quarter, the target downside deviation is closest to:",
  "opts": [
   "4.50%.",
   "11.92%.",
   "20.29%."
  ],
  "ans": 0,
  "en": "Below-target deviations: (3−5)=−2, (−2−5)=−7, (0−5)=−5, (−3−5)=−8. Sum of squares = 4+49+25+64 = 142. Divide by n−1 = 7 → 20.29; square root → 4.50%. (20.29 is the semivariance — the trap.)",
  "vi": "Các độ lệch dưới mục tiêu: (3−5)=−2, (−2−5)=−7, (0−5)=−5, (−3−5)=−8. Tổng bình phương = 4+49+25+64 = 142. Chia n−1 = 7 → 20,29; lấy căn bậc hai → 4,50%. (20,29 là semivariance — chính là bẫy.)"
 },
 {
  "q": "An increase in a central bank's policy rate most likely leads to:",
  "opts": [
   "decreasing real domestic demand and increasing net external demand.",
   "increasing real domestic demand and decreasing net external demand.",
   "decreasing real domestic demand and decreasing net external demand."
  ],
  "ans": 2,
  "en": "Higher policy rates raise borrowing costs, curbing domestic consumption and investment. They also attract capital and appreciate the currency, making exports dearer and imports cheaper — so net external demand falls too.",
  "vi": "Lãi suất chính sách tăng làm chi phí vay đắt hơn, kìm hãm tiêu dùng và đầu tư trong nước. Nó cũng hút vốn vào và làm nội tệ lên giá, khiến xuất khẩu đắt hơn, nhập khẩu rẻ hơn — nên nhu cầu ròng từ bên ngoài cũng giảm."
 },
 {
  "q": "If an auditor is experiencing some scope limitation, but can still issue an opinion, the auditor most likely issues a(n):",
  "opts": [
   "adverse opinion.",
   "qualified opinion.",
   "disclaimer of opinion."
  ],
  "ans": 1,
  "en": "A qualified opinion is issued when there are limitations or exceptions ('except for...') that are material but not pervasive. Adverse means the statements are materially misstated; a disclaimer means no opinion can be expressed at all.",
  "vi": "Ý kiến ngoại trừ (qualified) được đưa ra khi có giới hạn phạm vi hoặc ngoại lệ ('ngoại trừ...') trọng yếu nhưng không lan tỏa. Adverse nghĩa là báo cáo sai lệch trọng yếu; disclaimer nghĩa là không thể đưa ra ý kiến."
 },
 {
  "q": "An account has a stated annual interest rate of 3.6% with monthly compounding. The number of years it will take for an initial investment in the account to double is closest to:",
  "opts": [
   "19.3.",
   "19.6.",
   "20.0."
  ],
  "ans": 0,
  "en": "Monthly rate = 3.6%/12 = 0.3%. Solve (1.003)ⁿ = 2 → n = ln2 / ln1.003 = 231.4 months = 19.3 years.",
  "vi": "Lãi suất tháng = 3,6%/12 = 0,3%. Giải (1,003)ⁿ = 2 → n = ln2 / ln1,003 = 231,4 tháng = 19,3 năm."
 },
 {
  "q": "Whenever Variable X increases by four units, Variable Y increases by one unit. The correlation between X and Y is:",
  "opts": [
   "0.25.",
   "0.75.",
   "1.00."
  ],
  "ans": 2,
  "en": "The relationship is perfectly linear and deterministic (every 4-unit move in X gives exactly a 1-unit move in Y), so the correlation is +1.00. Correlation measures the strength of the linear link, not the slope.",
  "vi": "Mối quan hệ hoàn toàn tuyến tính và tất định (X tăng 4 đơn vị thì Y tăng đúng 1 đơn vị), nên hệ số tương quan là +1,00. Correlation đo độ chặt của quan hệ tuyến tính, không phải độ dốc."
 },
 {
  "q": "The F-statistic for the test of fit of a simple linear regression is given by the:",
  "opts": [
   "mean square regression divided by the mean square error.",
   "mean square regression divided by the sum of squares total.",
   "sum of squares regression divided by the sum of squares total."
  ],
  "ans": 0,
  "en": "F = MSR / MSE, where MSR = SSR/1 and MSE = SSE/(n−2) for a simple regression. (SSR/SST is R², not the F-statistic.)",
  "vi": "F = MSR / MSE, trong đó MSR = SSR/1 và MSE = SSE/(n−2) với hồi quy đơn. (SSR/SST là R², không phải F-statistic.)"
 },
 {
  "q": "An analyst gathers the following information (in € thousands) about a company: revenue — Year 2 = 2,400, Year 1 = 2,000; cost of sales — Year 2 = 1,800, Year 1 = 1,400; ending accounts receivable — Year 2 = 240, Year 1 = 160. The number of days of sales outstanding for Year 2, based on a 365-day year, is closest to:",
  "opts": [
   "30 days.",
   "33 days.",
   "41 days."
  ],
  "ans": 0,
  "en": "Average receivables = (160 + 240)/2 = 200. Receivables turnover = 2,400/200 = 12. DSO = 365/12 = 30.4 → about 30 days.",
  "vi": "Phải thu bình quân = (160 + 240)/2 = 200. Vòng quay phải thu = 2.400/200 = 12. DSO = 365/12 = 30,4 → khoảng 30 ngày."
 },
 {
  "q": "With respect to national security, a country focusing on domestic economic factors most likely focuses on:",
  "opts": [
   "growing national wealth.",
   "standardization of industries.",
   "securing essential resources through trade."
  ],
  "ans": 0,
  "en": "A domestically focused national-security posture emphasizes building the nation's own economic strength — growing national wealth and self-sufficiency. Securing resources through trade relies on external partners, the opposite of a domestic focus.",
  "vi": "Định hướng an ninh quốc gia hướng nội nhấn mạnh xây dựng sức mạnh kinh tế tự thân — gia tăng của cải quốc gia và tự chủ. Bảo đảm tài nguyên qua thương mại lại phụ thuộc đối tác bên ngoài, ngược với định hướng nội địa."
 },
 {
  "q": "Nationalization of industries is an example of which type of geopolitical tool?",
  "opts": [
   "Financial",
   "Economic",
   "National security"
  ],
  "ans": 1,
  "en": "Geopolitical tools: national security tools (military, alliances), ECONOMIC tools (nationalization, trade agreements, multilateral institutions), and financial tools (currency access, sanctions on capital flows). Nationalizing industries is an economic tool.",
  "vi": "Công cụ địa chính trị gồm: công cụ an ninh quốc gia (quân sự, liên minh), công cụ KINH TẾ (quốc hữu hóa, hiệp định thương mại, thể chế đa phương), và công cụ tài chính (tiếp cận tiền tệ, trừng phạt dòng vốn). Quốc hữu hóa ngành là công cụ kinh tế."
 },
 {
  "q": "With respect to the statement of cash flows under the indirect method, which of the following will increase net cash provided by operating activities compared to net income? An increase in:",
  "opts": [
   "inventory.",
   "accounts payable.",
   "accounts receivable."
  ],
  "ans": 1,
  "en": "A rise in accounts payable means the company delayed paying suppliers — a source of cash added back to net income. Increases in inventory and receivables absorb cash and are subtracted.",
  "vi": "Phải trả người bán tăng nghĩa là công ty trì hoãn thanh toán cho nhà cung cấp — một nguồn tiền được cộng vào net income. Tồn kho và phải thu tăng thì hút tiền và bị trừ đi."
 },
 {
  "q": "A company's ability to support debt most likely improves with a(n):",
  "opts": [
   "increase in liquidity.",
   "increase in leverage ratio.",
   "decrease in interest coverage."
  ],
  "ans": 0,
  "en": "More liquidity means more capacity to service obligations, improving debt capacity. Higher leverage and lower interest coverage both signal WEAKER ability to support additional debt.",
  "vi": "Thanh khoản cao hơn đồng nghĩa khả năng trả nợ tốt hơn, cải thiện năng lực vay nợ. Đòn bẩy cao hơn và hệ số bao phủ lãi vay thấp hơn đều cho thấy khả năng gánh nợ YẾU đi."
 },
 {
  "q": "According to Modigliani-Miller propositions, if a profitable company uses more debt in the presence of taxes, firm value will:",
  "opts": [
   "decrease.",
   "remain the same.",
   "increase."
  ],
  "ans": 2,
  "en": "With corporate taxes, MM Proposition I becomes V(levered) = V(unlevered) + t×D: interest is tax-deductible, so the debt tax shield raises firm value as debt increases.",
  "vi": "Khi có thuế doanh nghiệp, MM Proposition I trở thành V(có nợ) = V(không nợ) + t×D: lãi vay được khấu trừ thuế, nên lá chắn thuế của nợ làm giá trị doanh nghiệp tăng khi tăng nợ."
 },
 {
  "q": "Capital restrictions most likely:",
  "opts": [
   "allow capital to earn the highest return.",
   "help a country exercise control over its external balance.",
   "lead to a higher rate of growth than would otherwise occur."
  ],
  "ans": 1,
  "en": "Capital controls give governments a lever over capital inflows/outflows and thus the external balance and exchange rate. They typically PREVENT capital from seeking its highest return and tend to reduce, not raise, long-run growth.",
  "vi": "Kiểm soát vốn cho chính phủ công cụ điều tiết dòng vốn vào/ra, qua đó kiểm soát cán cân đối ngoại và tỷ giá. Chúng thường NGĂN vốn tìm đến nơi sinh lời cao nhất và có xu hướng làm giảm, chứ không tăng, tăng trưởng dài hạn."
 },
 {
  "q": "A test of independence is based on the data in a contingency table with 5 rows and 4 columns. Using a nonparametric test statistic that is chi-square distributed, the number of degrees of freedom is:",
  "opts": [
   "7.",
   "12.",
   "20."
  ],
  "ans": 1,
  "en": "df = (rows − 1) × (columns − 1) = 4 × 3 = 12.",
  "vi": "Bậc tự do = (số hàng − 1) × (số cột − 1) = 4 × 3 = 12."
 },
 {
  "q": "The demand curve of a perfectly competitive firm is:",
  "opts": [
   "vertical.",
   "horizontal.",
   "downward sloping."
  ],
  "ans": 1,
  "en": "A perfectly competitive firm is a price taker: it can sell any quantity at the market price, so its individual demand curve is horizontal (perfectly elastic) at that price.",
  "vi": "Doanh nghiệp cạnh tranh hoàn hảo là người chấp nhận giá: bán được bất kỳ sản lượng nào tại giá thị trường, nên đường cầu riêng của nó nằm ngang (co giãn hoàn hảo) tại mức giá đó."
 },
 {
  "q": "All else being equal, in periods of decreasing prices and constant inventory quantities, the FIFO inventory valuation method results in a higher:",
  "opts": [
   "current ratio than LIFO.",
   "gross profit margin than LIFO.",
   "total asset turnover than LIFO."
  ],
  "ans": 2,
  "en": "With falling prices, FIFO expenses the OLDER, higher costs (higher COGS, lower margin) and carries inventory at NEWER, lower costs (lower assets). Lower total assets → HIGHER total asset turnover; current ratio and gross margin are lower than under LIFO.",
  "vi": "Khi giá giảm, FIFO đưa vào giá vốn các lô CŨ giá cao (COGS cao, biên lợi nhuận thấp) và ghi tồn kho theo giá MỚI thấp hơn (tài sản thấp). Tổng tài sản thấp hơn → vòng quay tổng tài sản CAO hơn; current ratio và biên lợi nhuận gộp đều thấp hơn so với LIFO."
 },
 {
  "q": "The Herfindahl–Hirschman index (HHI) is more responsive than the concentration ratio to:",
  "opts": [
   "the elasticity of demand.",
   "potential entrants to the market.",
   "mergers among the existing companies in the market."
  ],
  "ans": 2,
  "en": "Because HHI sums SQUARED market shares, combining two firms raises the index sharply, while a simple concentration ratio may barely move. Neither measure captures demand elasticity or potential entry.",
  "vi": "Vì HHI cộng BÌNH PHƯƠNG thị phần, việc hai công ty sáp nhập làm chỉ số tăng vọt, trong khi concentration ratio đơn thuần có thể gần như không đổi. Cả hai thước đo đều không phản ánh độ co giãn của cầu hay khả năng gia nhập."
 },
 {
  "q": "A company uses both debt and equity financing as part of its capital structure. If the government reduces the corporate tax rate, the company's WACC will:",
  "opts": [
   "decrease.",
   "remain the same.",
   "increase."
  ],
  "ans": 2,
  "en": "The after-tax cost of debt is rd × (1 − t). A lower tax rate shrinks the tax shield, raising the after-tax cost of debt and therefore the WACC.",
  "vi": "Chi phí nợ sau thuế là rd × (1 − t). Thuế suất giảm làm lá chắn thuế nhỏ lại, khiến chi phí nợ sau thuế tăng và do đó WACC tăng."
 },
 {
  "q": "Selling a product at a discount in order to build scale best describes:",
  "opts": [
   "bundling.",
   "tiered pricing.",
   "penetration pricing."
  ],
  "ans": 2,
  "en": "Penetration pricing deliberately sacrifices margin — pricing low — to win market share and build scale quickly. Bundling packages products together; tiered pricing charges different prices by volume or segment.",
  "vi": "Penetration pricing chủ động hy sinh biên lợi nhuận — định giá thấp — để giành thị phần và tạo quy mô nhanh. Bundling là bán gộp sản phẩm; tiered pricing là định giá khác nhau theo khối lượng hoặc phân khúc."
 },
 {
  "q": "An investor plans to purchase an annuity for $1,500,000 in exactly 20 years to fund his retirement. The investor wants to save for that purchase by making 20 annual deposits into an account, starting today. If the account earns 4% per year, the annual deposit required to meet the investor's retirement goal is closest to:",
  "opts": [
   "$48,435.",
   "$50,373.",
   "$52,388."
  ],
  "ans": 0,
  "en": "Deposits start TODAY → annuity due. FV factor = [(1.04²⁰ − 1)/0.04] × 1.04 = 29.778 × 1.04 = 30.969. Payment = 1,500,000 / 30.969 ≈ $48,435. (Set calculator to BGN mode.)",
  "vi": "Gửi tiền từ HÔM NAY → annuity due. Hệ số FV = [(1,04²⁰ − 1)/0,04] × 1,04 = 29,778 × 1,04 = 30,969. Khoản gửi = 1.500.000 / 30,969 ≈ 48.435 USD. (Máy tính chuyển sang chế độ BGN.)"
 },
 {
  "q": "The liquidity premium is 2% and the real risk-free interest rate is 4%. According to economic theory, the rate that only reflects the time preferences of individuals for current versus future real consumption is:",
  "opts": [
   "2%.",
   "4%.",
   "6%."
  ],
  "ans": 1,
  "en": "The REAL RISK-FREE rate is the pure compensation for postponing consumption — time preference only. Here that is 4%; the liquidity premium compensates for a different risk.",
  "vi": "Lãi suất PHI RỦI RO THỰC là phần đền bù thuần túy cho việc trì hoãn tiêu dùng — chỉ phản ánh sở thích thời gian. Ở đây là 4%; phần bù thanh khoản đền bù cho một loại rủi ro khác."
 },
 {
  "q": "To increase liquidity, a central bank most likely implements an interest rate policy that is:",
  "opts": [
   "contractionary.",
   "neutral.",
   "expansionary."
  ],
  "ans": 2,
  "en": "Cutting policy rates below the neutral rate is expansionary: cheaper borrowing expands money and credit, increasing liquidity in the economy.",
  "vi": "Hạ lãi suất chính sách xuống dưới mức trung tính là nới lỏng: vay rẻ hơn làm tiền và tín dụng mở rộng, tăng thanh khoản cho nền kinh tế."
 },
 {
  "q": "A company reporting under US GAAP has production facilities with a net book value of $28.4 million. Recently, several competitors have entered its market, and the company now estimates that its production facilities will be able to generate cash flows of only $3 million per year for the next seven years. The firm has a cost of capital of 10%. Based on these recent events related to its production facilities, the company's financial statements will most likely report a:",
  "opts": [
   "$13.8 million reduction in operating cash flows.",
   "$13.8 million impairment loss on the income statement.",
   "$7.4 million reduction in the balance sheet carrying amount."
  ],
  "ans": 1,
  "en": "Step 1: undiscounted cash flows = 7 × $3m = $21m < $28.4m → impaired. Step 2: write down to fair value ≈ PV of cash flows = $3m × 4.8684 = $14.6m. Loss = 28.4 − 14.6 = $13.8m on the income statement; impairment itself is non-cash.",
  "vi": "Bước 1: dòng tiền chưa chiết khấu = 7 × 3 = 21 triệu < 28,4 triệu → suy giảm giá trị. Bước 2: ghi giảm về fair value ≈ PV dòng tiền = 3 × 4,8684 = 14,6 triệu. Lỗ = 28,4 − 14,6 = 13,8 triệu USD trên báo cáo kết quả kinh doanh; bản thân khoản impairment không phải dòng tiền."
 },
 {
  "q": "An analyst gathers the following information (in € millions) about three companies operating in the same industry: PP&E — Company 1 = 100, Company 2 = 150, Company 3 = 120; total liabilities and shareholders' equity — Company 1 = 600, Company 2 = 1,000, Company 3 = 800; total shareholders' equity — Company 1 = 200, Company 2 = 500, Company 3 = 200. Applying vertical common-size balance sheet analysis, which company has the highest PP&E?",
  "opts": [
   "Company 1",
   "Company 2",
   "Company 3"
  ],
  "ans": 0,
  "en": "Vertical common-size scales each item by TOTAL ASSETS (= total liabilities and equity): C1 = 100/600 = 16.7%, C2 = 150/1,000 = 15.0%, C3 = 120/800 = 15.0%. Company 1 is highest despite the smallest absolute PP&E.",
  "vi": "Phân tích vertical common-size chia từng khoản mục cho TỔNG TÀI SẢN (= tổng nợ và vốn chủ): C1 = 100/600 = 16,7%, C2 = 150/1.000 = 15,0%, C3 = 120/800 = 15,0%. Company 1 cao nhất dù PP&E tuyệt đối nhỏ nhất."
 },
 {
  "q": "A potential benefit of effective corporate governance is:",
  "opts": [
   "an increase in creditors' required return.",
   "the ability to mitigate the various risks underlying conflict of interest and agency problems.",
   "the opportunity for managers to manage the company with a lower risk profile relative to shareholders' risk tolerance."
  ],
  "ans": 1,
  "en": "Good governance aligns interests and controls agency conflicts among managers, shareholders, and creditors — reducing operational, legal, and reputational risks. It should LOWER creditors' required return, and managers running risk below shareholders' tolerance is itself an agency problem.",
  "vi": "Quản trị tốt giúp hài hòa lợi ích và kiểm soát xung đột đại diện giữa ban điều hành, cổ đông và chủ nợ — giảm rủi ro vận hành, pháp lý, uy tín. Nó sẽ làm GIẢM lợi suất chủ nợ đòi hỏi, còn việc ban điều hành chấp nhận rủi ro thấp hơn khẩu vị của cổ đông chính là một vấn đề đại diện."
 },
 {
  "q": "With respect to the cash flow statement, under US GAAP, interest paid is reported as a(n):",
  "opts": [
   "investing activity.",
   "financing activity.",
   "operating activity."
  ],
  "ans": 2,
  "en": "US GAAP mandates that interest paid (and received) be classified as OPERATING cash flow. Under IFRS, interest paid may be operating or financing.",
  "vi": "US GAAP bắt buộc lãi vay đã trả (và đã nhận) được xếp vào dòng tiền HOẠT ĐỘNG KINH DOANH. Theo IFRS, lãi vay đã trả có thể xếp vào hoạt động kinh doanh hoặc tài chính."
 }
]
});
window.CFA.mocktests.push({
 name: "Mock Exam 3 — Session 2 (FI · Equity · Derivatives · Alternatives · PM)",
 qs: [
 {
  "q": "Two years ago, a homeowner took out a $1 million home mortgage from a bank. The current principal on the loan is $750,000, and the homeowner has defaulted on the loan. Following foreclosure proceedings, the bank sells the property for $600,000 and is only entitled to use these funds to satisfy the loan obligation. The homeowner most likely had a:",
  "opts": [
   "bullet loan.",
   "recourse loan.",
   "non-recourse loan."
  ],
  "ans": 2,
  "en": "The bank's claim is limited to the foreclosure proceeds — it cannot pursue the borrower's other assets for the $150,000 shortfall. That is the defining feature of a NON-recourse loan.",
  "vi": "Quyền đòi nợ của ngân hàng chỉ giới hạn ở số tiền bán tài sản thế chấp — không được truy đòi tài sản khác của người vay cho phần thiếu hụt 150.000 USD. Đó chính là đặc điểm của khoản vay NON-recourse."
 },
 {
  "q": "Valuing private equity investments using estimated prices rather than market prices most likely causes an:",
  "opts": [
   "overestimation of both return volatility and the correlation of returns with traditional asset classes.",
   "underestimation of both return volatility and the correlation of returns with traditional asset classes.",
   "underestimation of return volatility and overestimation of the correlation of returns with traditional asset classes."
  ],
  "ans": 1,
  "en": "Appraisal-based values are smoothed and stale: reported returns move less than true economic returns, UNDERSTATING volatility, and they respond sluggishly to market moves, UNDERSTATING correlation with traditional assets.",
  "vi": "Định giá theo thẩm định bị 'làm mượt' và trễ nhịp: lợi nhuận báo cáo dao động ít hơn thực tế, làm ĐÁNH GIÁ THẤP độ biến động, và phản ứng chậm với thị trường, làm ĐÁNH GIÁ THẤP tương quan với các lớp tài sản truyền thống."
 },
 {
  "q": "A greenfield infrastructure investment is best described as an asset that has:",
  "opts": [
   "yet to be constructed.",
   "already been constructed.",
   "reached the end of its useful life."
  ],
  "ans": 0,
  "en": "Greenfield projects are built from scratch — the asset does not exist yet. Existing, operating assets are brownfield investments.",
  "vi": "Dự án greenfield được xây từ đầu — tài sản chưa tồn tại. Tài sản đã xây dựng và vận hành là đầu tư brownfield."
 },
 {
  "q": "Which of the following statements is most accurate? US commercial paper typically:",
  "opts": [
   "requires the issuer to pledge collateral.",
   "requires the issuer to have a backup line of credit.",
   "has a maturity ranging from a few days up to two years."
  ],
  "ans": 1,
  "en": "Commercial paper is unsecured (no collateral) with maturities up to 270 days in the US. Issuers are expected to maintain backup lines of credit to cover rollover risk.",
  "vi": "Commercial paper là nợ không bảo đảm (không thế chấp) với kỳ hạn tối đa 270 ngày tại Mỹ. Nhà phát hành cần duy trì hạn mức tín dụng dự phòng (backup line of credit) để phòng rủi ro đảo nợ."
 },
 {
  "q": "A limit order is an example of a(n):",
  "opts": [
   "validity instruction.",
   "clearing instruction.",
   "execution instruction."
  ],
  "ans": 2,
  "en": "Execution instructions specify HOW to trade — a limit order sets the worst acceptable price. Validity instructions specify WHEN the order may be filled (e.g., good-till-cancelled); clearing instructions cover settlement arrangements.",
  "vi": "Execution instruction quy định CÁCH giao dịch — lệnh limit đặt mức giá xấu nhất chấp nhận được. Validity instruction quy định KHI NÀO lệnh còn hiệu lực (ví dụ good-till-cancelled); clearing instruction liên quan đến việc thanh toán bù trừ."
 },
 {
  "q": "Direct ownership of commercial real estate most likely:",
  "opts": [
   "provides greater liquidity than a real estate investment trust.",
   "requires a lower initial investment than a real estate investment trust.",
   "offers greater investor control over underlying properties than a real estate investment trust."
  ],
  "ans": 2,
  "en": "Owning the property directly gives the investor control over management, leasing, and disposal decisions. REITs offer better liquidity and lower minimum investment, but no control over individual assets.",
  "vi": "Sở hữu trực tiếp bất động sản cho nhà đầu tư quyền kiểm soát việc quản lý, cho thuê và bán tài sản. REIT thanh khoản tốt hơn và vốn tối thiểu thấp hơn, nhưng không có quyền kiểm soát từng tài sản."
 },
 {
  "q": "A net investment hedge occurs when a derivative is used to:",
  "opts": [
   "offset the fluctuation in the fair value of an asset or liability.",
   "absorb the variable cash flow of a floating rate asset or liability.",
   "offset the exchange rate risk of the equity of a foreign operation."
  ],
  "ans": 2,
  "en": "A net investment hedge protects the parent's equity stake in a foreign subsidiary from currency movements. Fair value hedges cover asset/liability values; cash flow hedges cover variable cash flows.",
  "vi": "Net investment hedge bảo vệ phần vốn chủ của công ty mẹ tại công ty con nước ngoài trước biến động tỷ giá. Fair value hedge phòng hộ giá trị tài sản/nợ; cash flow hedge phòng hộ dòng tiền biến đổi."
 },
 {
  "q": "Consider bonds that have the same yield-to-maturity and maturity. The bond with the greatest reinvestment risk is most likely the one selling at:",
  "opts": [
   "a discount.",
   "par.",
   "a premium."
  ],
  "ans": 2,
  "en": "A premium bond carries the highest coupon, so more of its return depends on reinvesting large coupons at the assumed yield — the greatest reinvestment risk. A discount (low-coupon) bond relies least on reinvestment.",
  "vi": "Trái phiếu premium có coupon cao nhất, nên phần lớn lợi suất phụ thuộc vào việc tái đầu tư các coupon lớn tại mức yield giả định — rủi ro tái đầu tư lớn nhất. Trái phiếu discount (coupon thấp) ít phụ thuộc tái đầu tư nhất."
 },
 {
  "q": "Which of the following is most likely considered an investor constraint in an investment policy statement?",
  "opts": [
   "Time horizon",
   "Risk tolerance",
   "Return requirement"
  ],
  "ans": 0,
  "en": "IPS constraints: liquidity, time horizon, taxes, legal/regulatory, and unique circumstances. Risk tolerance and return requirement are the investment OBJECTIVES.",
  "vi": "Các ràng buộc trong IPS: thanh khoản, thời gian đầu tư, thuế, pháp lý và hoàn cảnh đặc thù. Risk tolerance và return requirement là MỤC TIÊU đầu tư, không phải ràng buộc."
 },
 {
  "q": "A positive duration gap indicates that a bond investor is currently:",
  "opts": [
   "at risk of lower interest rates.",
   "at risk of higher interest rates.",
   "hedged against interest rate risk."
  ],
  "ans": 1,
  "en": "Duration gap = Macaulay duration − investment horizon. Positive gap → price risk dominates reinvestment risk, so the investor is hurt if rates RISE before the horizon.",
  "vi": "Duration gap = Macaulay duration − thời gian đầu tư. Gap dương → rủi ro giá lấn át rủi ro tái đầu tư, nên nhà đầu tư chịu thiệt nếu lãi suất TĂNG trước khi hết kỳ đầu tư."
 },
 {
  "q": "Both equity and fixed-income indexes can be categorized according to the:",
  "opts": [
   "currency of payments.",
   "issuer's economic sector.",
   "degree of inflation protection."
  ],
  "ans": 1,
  "en": "Sector classification applies to both equity indexes (sector indexes) and bond indexes (issuer sector: government, corporate, etc.). Currency and inflation protection are fixed-income-specific dimensions.",
  "vi": "Phân loại theo ngành áp dụng cho cả chỉ số cổ phiếu (sector index) lẫn chỉ số trái phiếu (theo ngành của tổ chức phát hành: chính phủ, doanh nghiệp...). Đồng tiền thanh toán và mức bảo vệ lạm phát là tiêu chí riêng của trái phiếu."
 },
 {
  "q": "Real estate is best classified as a:",
  "opts": [
   "commodity.",
   "physical asset.",
   "financial asset."
  ],
  "ans": 1,
  "en": "Real estate is a physical (real) asset — a tangible property. Financial assets are claims like stocks and bonds; commodities are standardized tradeable raw goods.",
  "vi": "Bất động sản là tài sản vật chất (real asset) — tài sản hữu hình. Tài sản tài chính là các quyền đòi như cổ phiếu, trái phiếu; hàng hóa (commodity) là nguyên liệu chuẩn hóa để giao dịch."
 },
 {
  "q": "An analyst gathers the following information to evaluate the effect of dividends and leverage on future growth: Scenario 1 — dividend payout ratio 60%, financial leverage 3.0; Scenario 2 — dividend payout ratio 40%, financial leverage 2.5. If return on assets is the same for each scenario, the sustainable growth rate is:",
  "opts": [
   "higher under Scenario 1.",
   "higher under Scenario 2.",
   "the same under both Scenario 1 and Scenario 2."
  ],
  "ans": 1,
  "en": "g = retention × ROE = retention × ROA × leverage. Scenario 1: 0.4 × 3.0 = 1.2×ROA. Scenario 2: 0.6 × 2.5 = 1.5×ROA. The higher retention in Scenario 2 outweighs its lower leverage.",
  "vi": "g = tỷ lệ giữ lại × ROE = tỷ lệ giữ lại × ROA × đòn bẩy. Kịch bản 1: 0,4 × 3,0 = 1,2×ROA. Kịch bản 2: 0,6 × 2,5 = 1,5×ROA. Tỷ lệ giữ lại cao hơn ở Kịch bản 2 thắng phần đòn bẩy thấp hơn."
 },
 {
  "q": "An analyst gathers the following data (in INR millions) for a company located in India: market value of debt = 10.0; market value of preferred stock = 5.0; cash and short-term investments = 4.5; EBITDA = 15.0. Assuming an enterprise value multiple of 3.2, the company's market capitalization (in INR millions) is closest to:",
  "opts": [
   "28.5.",
   "33.0.",
   "37.5."
  ],
  "ans": 2,
  "en": "EV = 3.2 × 15 = 48. EV = market cap + debt + preferred − cash → market cap = 48 − 10 − 5 + 4.5 = 37.5.",
  "vi": "EV = 3,2 × 15 = 48. EV = vốn hóa + nợ + cổ phiếu ưu đãi − tiền mặt → vốn hóa = 48 − 10 − 5 + 4,5 = 37,5."
 },
 {
  "q": "Financial forecasting using historical base rates and convergence is best suited for companies that are:",
  "opts": [
   "in highly cyclical industries.",
   "in well-established industries.",
   "industry leaders by a wide margin."
  ],
  "ans": 1,
  "en": "Base rates and mean reversion work best in mature, stable, well-established industries where firms tend to converge toward industry norms. Cyclical swings and dominant outliers break that pattern.",
  "vi": "Base rate và tính hồi quy về trung bình phát huy tốt nhất ở các ngành chín muồi, ổn định, nơi các công ty có xu hướng hội tụ về chuẩn ngành. Dao động chu kỳ mạnh và các công ty vượt trội cá biệt phá vỡ quy luật đó."
 },
 {
  "q": "A bond has a modified duration of 7.5 years and an annual convexity of 280. If yields decrease by 60 basis points, the percentage price change is closest to:",
  "opts": [
   "4.00%.",
   "5.00%.",
   "5.51%."
  ],
  "ans": 1,
  "en": "%ΔP = (−7.5 × −0.006) + (0.5 × 280 × 0.006²) = 0.0450 + 0.0050 = 0.0500 → +5.00%. Convexity adds to the duration gain when yields fall.",
  "vi": "%ΔP = (−7,5 × −0,006) + (0,5 × 280 × 0,006²) = 0,0450 + 0,0050 = 0,0500 → +5,00%. Convexity cộng thêm vào mức tăng giá từ duration khi lợi suất giảm."
 },
 {
  "q": "An analyst observes the fee structure and performance of a hedge fund with $100 million assets under management at the beginning of the year: annual management fee = 2%; incentive fee = 20%; hard hurdle rate = 3%. The annual management fee is based on the year-end valuation, and the incentive fee is calculated net of the management fee. If the fund return before fees is 10% at year end, the total annual fee earned by the fund manager is closest to:",
  "opts": [
   "$3.2 million.",
   "$3.6 million.",
   "$3.8 million."
  ],
  "ans": 0,
  "en": "Year-end AUM = $110m → management fee = 2% × 110 = $2.2m. Gain net of management fee = 10 − 2.2 = $7.8m; hard hurdle removes 3% × 100 = $3m → incentive = 20% × 4.8 = $0.96m. Total = 2.2 + 0.96 = $3.16m ≈ $3.2m.",
  "vi": "AUM cuối năm = 110 triệu → phí quản lý = 2% × 110 = 2,2 triệu. Lãi sau phí quản lý = 10 − 2,2 = 7,8 triệu; hard hurdle trừ 3% × 100 = 3 triệu → phí thành tích = 20% × 4,8 = 0,96 triệu. Tổng = 2,2 + 0,96 = 3,16 ≈ 3,2 triệu USD."
 },
 {
  "q": "Which of the following measures is least appropriate for evaluating the risk of a currency option?",
  "opts": [
   "Beta",
   "Vega",
   "Delta"
  ],
  "ans": 0,
  "en": "Beta measures sensitivity to equity market movements — irrelevant for a currency option. Delta (sensitivity to the underlying exchange rate) and vega (sensitivity to volatility) are core option risk measures.",
  "vi": "Beta đo độ nhạy với biến động thị trường cổ phiếu — không liên quan đến quyền chọn tiền tệ. Delta (độ nhạy với tỷ giá cơ sở) và vega (độ nhạy với biến động) mới là thước đo rủi ro cốt lõi của quyền chọn."
 },
 {
  "q": "Compared to a European waterfall, an American waterfall is:",
  "opts": [
   "less advantageous to the general partner.",
   "equally advantageous to the general partner.",
   "more advantageous to the general partner."
  ],
  "ans": 2,
  "en": "An American (deal-by-deal) waterfall pays carried interest on each profitable exit before LPs recover all capital, so the GP collects performance fees earlier — more favorable to the GP. The European (whole-of-fund) waterfall favors LPs.",
  "vi": "Waterfall kiểu Mỹ (theo từng thương vụ) trả carried interest ngay trên mỗi thương vụ có lãi trước khi LP thu hồi toàn bộ vốn, nên GP nhận phí thành tích sớm hơn — có lợi hơn cho GP. Waterfall kiểu châu Âu (toàn quỹ) có lợi cho LP."
 },
 {
  "q": "For a given equity index, the long-term total return of the index is most likely greater than the price return:",
  "opts": [
   "for any series of price returns.",
   "only when the price returns are less than zero.",
   "only when the price returns are equal to or greater than zero."
  ],
  "ans": 0,
  "en": "Total return = price return + income (dividends). As long as constituents pay any dividends, total return exceeds price return regardless of whether prices rose or fell.",
  "vi": "Total return = price return + thu nhập (cổ tức). Chỉ cần các cổ phiếu thành phần có trả cổ tức, total return luôn vượt price return bất kể giá tăng hay giảm."
 },
 {
  "q": "With respect to a client's IPS, which of the following measures is most likely used when stating a relative risk objective?",
  "opts": [
   "Value at risk",
   "Tracking risk",
   "Standard deviation of returns"
  ],
  "ans": 1,
  "en": "A relative risk objective is defined against a benchmark — tracking risk (tracking error) measures deviation from that benchmark. VaR and standard deviation are ABSOLUTE risk measures.",
  "vi": "Mục tiêu rủi ro tương đối được xác định so với benchmark — tracking risk (tracking error) đo độ lệch so với benchmark đó. VaR và độ lệch chuẩn là thước đo rủi ro TUYỆT ĐỐI."
 },
 {
  "q": "Hedge funds are most likely characterized by:",
  "opts": [
   "significant investment restrictions.",
   "a high correlation of returns with investment-grade bonds.",
   "performance relative to a traditional portfolio that may be hard to gauge."
  ],
  "ans": 2,
  "en": "Hedge funds pursue absolute returns with flexible mandates and limited transparency, so judging their performance against a traditional stock/bond portfolio is difficult. They face FEW restrictions and generally low correlation with investment-grade bonds.",
  "vi": "Hedge fund theo đuổi lợi nhuận tuyệt đối với chiến lược linh hoạt và độ minh bạch hạn chế, nên rất khó so sánh hiệu quả với danh mục cổ phiếu/trái phiếu truyền thống. Chúng chịu ÍT ràng buộc và thường có tương quan thấp với trái phiếu investment-grade."
 },
 {
  "q": "Insurance on a portfolio of risky assets is most likely:",
  "opts": [
   "negatively correlated with the portfolio's assets.",
   "uncorrelated with the portfolio's assets.",
   "positively correlated with the portfolio's assets."
  ],
  "ans": 0,
  "en": "Insurance pays off precisely when the portfolio loses value — its payoff moves opposite to the assets, i.e., negative correlation. That is why it hedges.",
  "vi": "Bảo hiểm chi trả đúng lúc danh mục mất giá — dòng tiền của nó biến động ngược chiều tài sản, tức tương quan âm. Đó là lý do nó có tác dụng phòng hộ."
 },
 {
  "q": "When forming asset classes for a strategic asset allocation, the defined asset classes should:",
  "opts": [
   "approximate the relevant investable universe.",
   "have high pairwise correlations between them.",
   "contain negatively correlated assets within each asset class."
  ],
  "ans": 0,
  "en": "Asset classes should be mutually exclusive, collectively exhaustive — as a group approximating the investable universe. Correlations should be LOW between classes and relatively high (homogeneous) within a class.",
  "vi": "Các lớp tài sản phải loại trừ lẫn nhau và bao phủ đầy đủ — gộp lại xấp xỉ toàn bộ vũ trụ đầu tư. Tương quan giữa các lớp nên THẤP, còn trong nội bộ một lớp nên tương đối cao (đồng nhất)."
 },
 {
  "q": "An analyst gathers the following information about a company's common stock: dividend per share Year 1 = $2.00; dividend per share Year 2 = $2.10; annual dividend per share Year 3 and beyond = $2.21. If the required rate of return is 10%, the intrinsic value per share is closest to:",
  "opts": [
   "$21.82.",
   "$22.10.",
   "$27.31."
  ],
  "ans": 0,
  "en": "V = 2.00/1.10 + 2.10/1.10² + (2.21/0.10)/1.10² = 1.818 + 1.736 + 22.10/1.21 = 1.818 + 1.736 + 18.264 = $21.82. The flat $2.21 stream is a perpetuity valued at end of Year 2.",
  "vi": "V = 2,00/1,10 + 2,10/1,10² + (2,21/0,10)/1,10² = 1,818 + 1,736 + 22,10/1,21 = 1,818 + 1,736 + 18,264 = 21,82 USD. Dòng cổ tức cố định 2,21 là perpetuity định giá tại cuối Năm 2."
 },
 {
  "q": "A call option with an exercise price of $38 was bought for $3. The price of the underlying increases from $42 to $47. At expiration, the payoff to the call buyer is equal to:",
  "opts": [
   "$4.",
   "$6.",
   "$9."
  ],
  "ans": 2,
  "en": "Payoff = max(0, S − X) = 47 − 38 = $9. The $3 premium matters for PROFIT ($6), but the question asks for the payoff.",
  "vi": "Payoff = max(0, S − X) = 47 − 38 = 9 USD. Phí quyền chọn 3 USD chỉ liên quan đến LỢI NHUẬN (6 USD), còn câu hỏi yêu cầu payoff."
 },
 {
  "q": "According to capital market theory, the only type of risk that is priced is:",
  "opts": [
   "systematic risk.",
   "diversifiable risk.",
   "idiosyncratic risk."
  ],
  "ans": 0,
  "en": "Investors can eliminate diversifiable (idiosyncratic) risk at no cost, so the market compensates only systematic risk — the risk that remains in a well-diversified portfolio.",
  "vi": "Nhà đầu tư có thể loại bỏ rủi ro phi hệ thống (idiosyncratic) miễn phí bằng đa dạng hóa, nên thị trường chỉ đền bù cho rủi ro hệ thống — phần rủi ro còn lại trong danh mục đã đa dạng hóa tốt."
 },
 {
  "q": "An increase in which of the following most likely increases the time value of a European put option?",
  "opts": [
   "The volatility of the underlying only",
   "The current market interest rate only",
   "Both the volatility of the underlying and the current market interest rate"
  ],
  "ans": 0,
  "en": "Higher volatility raises the value of both calls and puts. Higher interest rates, however, DECREASE put values (the present value of the exercise price falls) — so only volatility increases the put's time value.",
  "vi": "Biến động tăng làm giá trị cả call lẫn put tăng. Nhưng lãi suất tăng lại làm GIẢM giá trị put (hiện giá của giá thực hiện giảm) — nên chỉ có biến động làm tăng time value của put."
 },
 {
  "q": "An investor gathers the following information: risk-free rate per annum = 1.50%; exercise price = $9.75; 9-month call option price = $3.25. According to put–call–forward parity, the price of a 9-month fiduciary call is closest to:",
  "opts": [
   "$12.89.",
   "$13.00.",
   "$13.11."
  ],
  "ans": 0,
  "en": "Fiduciary call = call + risk-free bond paying X at expiry = 3.25 + 9.75/(1.015)^0.75 = 3.25 + 9.64 = $12.89.",
  "vi": "Fiduciary call = quyền chọn mua + trái phiếu phi rủi ro trả X khi đáo hạn = 3,25 + 9,75/(1,015)^0,75 = 3,25 + 9,64 = 12,89 USD."
 },
 {
  "q": "An investor gathers the following information about a European call option with 9 months until expiration: current stock price = $112; strike price of option = $115; current call option price = $4; 1-year risk free rate = 2.5%. According to put–call parity, the current price of a put option with the same maturity and strike price is closest to:",
  "opts": [
   "$3.11.",
   "$4.20.",
   "$4.89."
  ],
  "ans": 2,
  "en": "p = c − S + X/(1+r)^T = 4 − 112 + 115/(1.025)^0.75 = 4 − 112 + 112.89 = $4.89.",
  "vi": "p = c − S + X/(1+r)^T = 4 − 112 + 115/(1,025)^0,75 = 4 − 112 + 112,89 = 4,89 USD."
 },
 {
  "q": "An analyst gathers the following information about spot rates: 1 year = 2%; 2 year = 3%; 3 year = 4%. Using spot rates, the price of a 3-year, 6% annual coupon bond is closest to:",
  "opts": [
   "105.38.",
   "105.55.",
   "105.77."
  ],
  "ans": 2,
  "en": "Price = 6/1.02 + 6/1.03² + 106/1.04³ = 5.882 + 5.656 + 94.234 = 105.77. Each cash flow is discounted at its own spot rate.",
  "vi": "Giá = 6/1,02 + 6/1,03² + 106/1,04³ = 5,882 + 5,656 + 94,234 = 105,77. Mỗi dòng tiền được chiết khấu theo đúng spot rate kỳ hạn của nó."
 },
 {
  "q": "If yields decrease by 0.75%, the convexity adjustment for a bond with an annual convexity of 400 is:",
  "opts": [
   "0.01125.",
   "0.02250.",
   "1.50000."
  ],
  "ans": 0,
  "en": "Convexity adjustment = 0.5 × 400 × (0.0075)² = 0.5 × 400 × 0.00005625 = 0.01125 (i.e., +1.125% added to the duration estimate).",
  "vi": "Điều chỉnh convexity = 0,5 × 400 × (0,0075)² = 0,5 × 400 × 0,00005625 = 0,01125 (tức cộng thêm +1,125% vào ước lượng theo duration)."
 },
 {
  "q": "Compared to a defined benefit plan's investment time horizon, a bank's investment time horizon is most likely:",
  "opts": [
   "shorter.",
   "the same.",
   "longer."
  ],
  "ans": 0,
  "en": "Banks manage portfolios against short-term deposit liabilities and liquidity needs, so their horizon is short. DB pension plans invest against obligations stretching decades into the future.",
  "vi": "Ngân hàng quản lý danh mục đối ứng với các khoản tiền gửi ngắn hạn và nhu cầu thanh khoản, nên thời gian đầu tư ngắn. Quỹ hưu trí DB đầu tư cho các nghĩa vụ kéo dài hàng thập kỷ."
 },
 {
  "q": "Management fees for private equity funds are most likely based on:",
  "opts": [
   "invested capital.",
   "committed capital.",
   "assets under management."
  ],
  "ans": 1,
  "en": "PE management fees are typically charged on COMMITTED capital (the total LPs pledged), even before it is fully drawn — unlike hedge funds, which charge on assets under management.",
  "vi": "Phí quản lý quỹ PE thường tính trên vốn CAM KẾT (committed capital) — tổng số LP đã cam kết — kể cả khi chưa giải ngân hết, khác với hedge fund tính phí trên AUM."
 },
 {
  "q": "A portfolio manager analyzes a market and discovers that it is not possible to achieve consistent and superior risk-adjusted returns, net of all expenses. This market is most likely characterized by:",
  "opts": [
   "persistent anomalies.",
   "informational efficiency.",
   "restrictions on short selling."
  ],
  "ans": 1,
  "en": "The inability to consistently beat the market after costs is the hallmark of an informationally efficient market — prices already reflect available information.",
  "vi": "Không thể liên tục đạt lợi nhuận vượt trội sau chi phí chính là dấu hiệu của thị trường hiệu quả về thông tin — giá đã phản ánh thông tin sẵn có."
 },
 {
  "q": "Which of the following statements about the use of derivative instruments is most accurate?",
  "opts": [
   "Small exposures to an underlying can be created with a large cash outlay",
   "Financial market exposure associated with commercial transactions can be offset by issuers",
   "Higher transaction costs are typically incurred compared to underlying spot market transactions"
  ],
  "ans": 1,
  "en": "Derivatives let issuers and firms hedge (offset) market exposures arising from ordinary commercial activity — e.g., FX or rate risk. Derivatives actually create LARGE exposures with SMALL outlays and usually carry LOWER transaction costs than spot trades.",
  "vi": "Phái sinh cho phép doanh nghiệp phòng hộ (bù trừ) các rủi ro thị trường phát sinh từ hoạt động thương mại thông thường — như rủi ro tỷ giá hay lãi suất. Thực tế phái sinh tạo exposure LỚN với vốn NHỎ và chi phí giao dịch thường THẤP hơn thị trường giao ngay."
 },
 {
  "q": "Which of the following cognitive errors is best classified as a belief perseverance bias?",
  "opts": [
   "Availability bias",
   "Confirmation bias",
   "Mental accounting bias"
  ],
  "ans": 1,
  "en": "Belief perseverance biases cling to prior views: conservatism, confirmation, representativeness, illusion of control, hindsight. Availability and mental accounting are information-processing biases.",
  "vi": "Nhóm belief perseverance bám giữ quan điểm cũ: conservatism, confirmation, representativeness, illusion of control, hindsight. Availability và mental accounting thuộc nhóm sai lệch xử lý thông tin (information-processing)."
 },
 {
  "q": "The redemption value of a US Treasury Inflation-Protected Securities (TIPS) issue at maturity is most likely:",
  "opts": [
   "equal to the initial par value.",
   "the greater of the inflation-adjusted principal or initial par value.",
   "above or below the initial par value depending on actual inflation during the term."
  ],
  "ans": 1,
  "en": "TIPS repay the inflation-adjusted principal, but with a deflation floor: at maturity the holder receives the GREATER of adjusted principal or original par — deflation cannot push redemption below par.",
  "vi": "TIPS hoàn trả gốc đã điều chỉnh lạm phát, kèm sàn bảo vệ giảm phát: khi đáo hạn, người nắm giữ nhận giá trị CAO HƠN giữa gốc điều chỉnh và mệnh giá ban đầu — giảm phát không thể kéo giá trị hoàn trả xuống dưới mệnh giá."
 },
 {
  "q": "Tactical asset allocation is best described as adding value by:",
  "opts": [
   "subdividing portfolio risk over the sources of investment return.",
   "deliberately deviating from policy exposures to systematic risk factors.",
   "combining long-term capital market expectations with investor objectives and constraints."
  ],
  "ans": 1,
  "en": "TAA seeks short-term excess return by intentionally departing from the strategic (policy) weights to exploit perceived opportunities. The long-term combination of expectations with objectives defines the STRATEGIC allocation.",
  "vi": "TAA tìm kiếm lợi nhuận vượt trội ngắn hạn bằng cách cố ý lệch khỏi tỷ trọng chiến lược (policy) để khai thác cơ hội. Việc kết hợp kỳ vọng dài hạn với mục tiêu nhà đầu tư là định nghĩa của phân bổ CHIẾN LƯỢC."
 },
 {
  "q": "In a one-period binomial model, the risk-neutral probabilities of upward and downward price movements of an underlying asset are determined by:",
  "opts": [
   "the risk-free rate.",
   "investors' risk aversion.",
   "the probabilities of the underlying price moving up and down."
  ],
  "ans": 0,
  "en": "Risk-neutral probabilities come from the risk-free rate and the up/down move sizes — π = (1 + r − d)/(u − d). Actual probabilities and investors' risk preferences play no role in derivative pricing.",
  "vi": "Xác suất trung lập rủi ro được suy từ lãi suất phi rủi ro và biên độ tăng/giảm — π = (1 + r − d)/(u − d). Xác suất thực tế và khẩu vị rủi ro của nhà đầu tư không có vai trò trong định giá phái sinh."
 },
 {
  "q": "An investor buys a call for $24.70 that has a strike price of $650. If the value at expiration for this call is $47.60, the price of the underlying at expiration is closest to:",
  "opts": [
   "$602.40.",
   "$672.90.",
   "$697.60."
  ],
  "ans": 2,
  "en": "At expiration, call value = S − X (when in the money): 47.60 = S − 650 → S = $697.60. The premium paid is irrelevant to the expiration value.",
  "vi": "Khi đáo hạn, giá trị call = S − X (nếu có lãi): 47,60 = S − 650 → S = 697,60 USD. Phí quyền chọn đã trả không liên quan đến giá trị khi đáo hạn."
 },
 {
  "q": "An annual-pay bond with a £1,000 face value has a coupon rate of 4% and matures in three years. If the yield to maturity is 3%, the current value of the bond is closest to:",
  "opts": [
   "£972.",
   "£1,028.",
   "£1,142."
  ],
  "ans": 1,
  "en": "Price = 40/1.03 + 40/1.03² + 1,040/1.03³ = 38.83 + 37.70 + 951.75 = £1,028. Coupon above yield → premium over par.",
  "vi": "Giá = 40/1,03 + 40/1,03² + 1.040/1,03³ = 38,83 + 37,70 + 951,75 = 1.028 £. Coupon cao hơn yield → giá cao hơn mệnh giá (premium)."
 },
 {
  "q": "With respect to the absolute priority of claims in bankruptcy, which of the following most likely has the highest seniority ranking?",
  "opts": [
   "Third lien debt",
   "Subordinated debt",
   "Senior unsecured debt"
  ],
  "ans": 0,
  "en": "Any SECURED claim — even a third lien — ranks ahead of unsecured creditors. The order here: third lien (secured) > senior unsecured > subordinated.",
  "vi": "Mọi khoản nợ CÓ BẢO ĐẢM — kể cả third lien — đứng trước chủ nợ không bảo đảm. Thứ tự ở đây: third lien (có bảo đảm) > senior unsecured > subordinated."
 },
 {
  "q": "Compared with its market-value-weighted counterpart, a fundamental-weighted index is least likely to have a:",
  "opts": [
   "value tilt.",
   "contrarian effect.",
   "momentum effect."
  ],
  "ans": 2,
  "en": "Fundamental weighting sizes holdings by accounting measures, producing a value tilt and a contrarian rebalancing effect (adding to price laggards). MOMENTUM is a feature of market-cap weighting, where winners' weights grow automatically.",
  "vi": "Trọng số theo yếu tố cơ bản phân bổ theo chỉ tiêu kế toán, tạo thiên hướng value và hiệu ứng contrarian khi tái cân bằng (mua thêm cổ phiếu tụt giá). Hiệu ứng MOMENTUM là đặc trưng của trọng số vốn hóa, nơi tỷ trọng cổ phiếu thắng tự động phình to."
 },
 {
  "q": "In contrast to risk tolerance, risk budgeting focuses more on:",
  "opts": [
   "how risk is taken.",
   "the appetite for risk.",
   "what is and is not acceptable risk."
  ],
  "ans": 0,
  "en": "Risk budgeting allocates the total risk budget across factors, strategies, or managers — it governs HOW risk is taken. Risk tolerance/appetite defines how much and what kinds of risk are acceptable.",
  "vi": "Risk budgeting phân bổ tổng ngân sách rủi ro cho các yếu tố, chiến lược hay nhà quản lý — tức quyết định CÁCH rủi ro được sử dụng. Risk tolerance/appetite xác định mức độ và loại rủi ro chấp nhận được."
 },
 {
  "q": "Which of the following statements is most accurate? Cryptocurrencies:",
  "opts": [
   "exhibit low volatility.",
   "have no limits on the total amount of currency that may be issued.",
   "allow transactions between parties without the need for an intermediary."
  ],
  "ans": 2,
  "en": "Decentralized ledgers let parties transact peer-to-peer without a trusted intermediary. Cryptocurrencies are highly VOLATILE, and many (like Bitcoin) have a capped maximum supply.",
  "vi": "Sổ cái phi tập trung cho phép các bên giao dịch ngang hàng mà không cần trung gian tin cậy. Tiền mã hóa biến động RẤT MẠNH, và nhiều đồng (như Bitcoin) có nguồn cung tối đa bị giới hạn."
 },
 {
  "q": "The duration statistic that best measures the interest rate risk of a bond that does not have a well-defined internal rate of return is:",
  "opts": [
   "effective duration.",
   "modified duration.",
   "Macaulay duration."
  ],
  "ans": 0,
  "en": "Bonds with embedded options or uncertain cash flows lack a well-defined yield, so their rate sensitivity must be measured with EFFECTIVE duration, based on a benchmark yield-curve shift. Modified and Macaulay durations require a defined YTM.",
  "vi": "Trái phiếu có quyền chọn đính kèm hoặc dòng tiền không chắc chắn không có yield xác định rõ, nên độ nhạy lãi suất phải đo bằng EFFECTIVE duration, dựa trên dịch chuyển của đường cong lợi suất chuẩn. Modified và Macaulay duration đòi hỏi YTM xác định."
 },
 {
  "q": "An analyst gathers the following information about three well-diversified equity portfolios: Portfolio 1 — mean return 9.2%, beta 1.2; Portfolio 2 — mean return 12.4%, beta 1.4; Portfolio 3 — mean return 15.0%, beta 2.3. Given a risk-free rate of 1.8%, the portfolio with the highest Treynor ratio is:",
  "opts": [
   "Portfolio 1.",
   "Portfolio 2.",
   "Portfolio 3."
  ],
  "ans": 1,
  "en": "Treynor = (return − rf)/beta. P1: 7.4/1.2 = 6.17; P2: 10.6/1.4 = 7.57; P3: 13.2/2.3 = 5.74. Portfolio 2 delivers the most excess return per unit of systematic risk.",
  "vi": "Treynor = (lợi suất − rf)/beta. P1: 7,4/1,2 = 6,17; P2: 10,6/1,4 = 7,57; P3: 13,2/2,3 = 5,74. Portfolio 2 mang lại nhiều lợi nhuận vượt trội nhất trên mỗi đơn vị rủi ro hệ thống."
 },
 {
  "q": "The modified duration of an option-free corporate bond best estimates the percentage price change due to changes in the:",
  "opts": [
   "horizon yield.",
   "yield-to-maturity.",
   "benchmark yield curve."
  ],
  "ans": 1,
  "en": "Modified duration measures price sensitivity to a change in the bond's OWN yield-to-maturity. Sensitivity to benchmark curve shifts is captured by effective duration.",
  "vi": "Modified duration đo độ nhạy của giá với thay đổi trong yield-to-maturity CỦA CHÍNH trái phiếu đó. Độ nhạy với dịch chuyển đường cong chuẩn được đo bằng effective duration."
 },
 {
  "q": "An analyst gathers the following information about a portfolio: Asset 1 — portfolio weight 25%, standard deviation 12%; Asset 2 — portfolio weight 75%, standard deviation 16%. If the correlation coefficient between the two assets is 0.75, the standard deviation of the portfolio is closest to:",
  "opts": [
   "12.37%.",
   "14.39%.",
   "15.00%."
  ],
  "ans": 1,
  "en": "Var = 0.25²×12² + 0.75²×16² + 2×0.25×0.75×0.75×12×16 = 9 + 144 + 54 = 207 → σ = √207 = 14.39%. Correlation below 1 pulls it under the 15% weighted average.",
  "vi": "Phương sai = 0,25²×12² + 0,75²×16² + 2×0,25×0,75×0,75×12×16 = 9 + 144 + 54 = 207 → σ = √207 = 14,39%. Tương quan nhỏ hơn 1 kéo kết quả xuống dưới trung bình gia quyền 15%."
 },
 {
  "q": "Two investors have utility functions that differ only with regard to the coefficient of risk aversion. Relative to the investor with a higher coefficient of risk aversion, the optimal portfolio for the investor with a lower coefficient of risk aversion will most likely have:",
  "opts": [
   "a lower level of risk and return.",
   "the same level of risk and return.",
   "a higher level of risk and return."
  ],
  "ans": 2,
  "en": "A less risk-averse investor has flatter indifference curves, so the tangency with the capital allocation line lands further out — accepting more risk for more expected return.",
  "vi": "Nhà đầu tư ít e ngại rủi ro có đường bàng quan thoải hơn, nên điểm tiếp xúc với capital allocation line nằm xa hơn — chấp nhận rủi ro cao hơn để đổi lấy lợi nhuận kỳ vọng cao hơn."
 },
 {
  "q": "Which of the following involves a private equity firm introducing leverage to its portfolio company and paying itself a dividend out of the new capital structure?",
  "opts": [
   "Venture debt",
   "Recapitalization",
   "Mezzanine loans"
  ],
  "ans": 1,
  "en": "A (dividend) recapitalization adds debt to the portfolio company and uses the proceeds to pay the PE owner a dividend — monetizing part of the investment without selling.",
  "vi": "Recapitalization (tái cấu trúc vốn kiểu chia cổ tức) bơm thêm nợ vào công ty trong danh mục và dùng số tiền đó trả cổ tức cho chủ sở hữu PE — hiện thực hóa một phần khoản đầu tư mà không cần bán."
 },
 {
  "q": "A European call option has an exercise price of $80 and an option premium of $12. The price of the underlying is $75. The intrinsic value of the option is:",
  "opts": [
   "$0.",
   "$5.",
   "$7."
  ],
  "ans": 0,
  "en": "Intrinsic value = max(0, S − X) = max(0, 75 − 80) = $0. The option is out of the money; its entire $12 premium is time value.",
  "vi": "Giá trị nội tại = max(0, S − X) = max(0, 75 − 80) = 0 USD. Quyền chọn đang out of the money; toàn bộ phí 12 USD là time value."
 },
 {
  "q": "Which of the following most likely provides the greatest redemption flexibility?",
  "opts": [
   "Hedge funds",
   "Private equity funds",
   "Funds of hedge funds"
  ],
  "ans": 2,
  "en": "Funds of hedge funds hold diversified stakes across many funds and manage liquidity buffers, so they can typically offer investors better redemption terms than single hedge funds. Private equity offers essentially no redemption until exits.",
  "vi": "Fund of hedge funds nắm giữ phân tán ở nhiều quỹ và duy trì đệm thanh khoản, nên thường cho nhà đầu tư điều kiện rút vốn linh hoạt hơn một hedge fund đơn lẻ. Private equity gần như không cho rút vốn cho đến khi thoái vốn."
 },
 {
  "q": "An equity portfolio manager is evaluating her sector allocation strategy for the upcoming year. She expects the global economy to experience a slowdown period for the next two years. Furthermore, she believes that companies will be facing diminishing growth rates with respect to revenues and profits. On the basis of these beliefs, the portfolio manager will most likely overweight:",
  "opts": [
   "autos.",
   "materials.",
   "consumer staples."
  ],
  "ans": 2,
  "en": "In a slowdown, defensive sectors with stable demand — consumer staples, utilities, health care — outperform. Autos and materials are cyclical and suffer as growth fades.",
  "vi": "Trong pha giảm tốc, các ngành phòng thủ có cầu ổn định — hàng tiêu dùng thiết yếu, tiện ích, y tế — vượt trội. Ô tô và vật liệu là ngành chu kỳ, chịu thiệt khi tăng trưởng suy yếu."
 },
 {
  "q": "A company's depository receipts most likely trade:",
  "opts": [
   "like ordinary shares on the investors' local exchanges.",
   "in the local currency on the company's local exchange.",
   "in the company's currency on investors' local exchanges."
  ],
  "ans": 0,
  "en": "Depository receipts represent foreign shares but trade like ordinary shares — in the investor's local market and local currency (e.g., ADRs in USD on US exchanges).",
  "vi": "Chứng chỉ lưu ký đại diện cho cổ phiếu nước ngoài nhưng giao dịch như cổ phiếu thường — trên thị trường và bằng đồng tiền của nhà đầu tư (ví dụ ADR bằng USD trên sàn Mỹ)."
 },
 {
  "q": "An investor opens a margin account with an initial deposit of $5,000. He then purchases 300 shares of a stock at $30 per share using margin. The account requires a maintenance margin of 30%. Ignoring commissions and interest, the price below which the investor will first receive a margin call is closest to:",
  "opts": [
   "$19.05.",
   "$23.08.",
   "$23.81."
  ],
  "ans": 0,
  "en": "Borrowed = 300×30 − 5,000 = $4,000. Margin call when equity/value = 30%: (300P − 4,000)/300P = 0.30 → 210P = 4,000 → P = $19.05.",
  "vi": "Tiền vay = 300×30 − 5.000 = 4.000 USD. Margin call khi vốn chủ/giá trị = 30%: (300P − 4.000)/300P = 0,30 → 210P = 4.000 → P = 19,05 USD."
 },
 {
  "q": "What is the most likely reason why arbitrage will not completely eliminate all pricing discrepancies for derivatives?",
  "opts": [
   "Transaction costs",
   "Inaccurate forecasts",
   "Differences in risk aversion"
  ],
  "ans": 0,
  "en": "Small mispricings persist when the cost of executing the arbitrage — commissions, spreads, market impact — exceeds the profit. Arbitrage is riskless and forecast-free, so forecasts and risk aversion are irrelevant.",
  "vi": "Các sai lệch giá nhỏ vẫn tồn tại khi chi phí thực hiện arbitrage — hoa hồng, chênh lệch giá, tác động thị trường — vượt quá lợi nhuận thu được. Arbitrage vốn phi rủi ro và không cần dự báo, nên dự báo hay khẩu vị rủi ro không liên quan."
 },
 {
  "q": "Key rate duration measures the sensitivity of a bond's price to a change in:",
  "opts": [
   "its yield to maturity.",
   "its yield to first call.",
   "the shape of the benchmark yield curve."
  ],
  "ans": 2,
  "en": "Key rate (partial) durations measure price sensitivity to a shift at ONE maturity point on the benchmark curve, holding others constant — capturing exposure to changes in the curve's SHAPE.",
  "vi": "Key rate duration (duration từng phần) đo độ nhạy của giá với thay đổi tại MỘT điểm kỳ hạn trên đường cong chuẩn, giữ nguyên các điểm khác — phản ánh mức nhạy cảm với thay đổi HÌNH DẠNG đường cong."
 },
 {
  "q": "The sum of the coupon payments over a year divided by the flat price of a bond is best defined as:",
  "opts": [
   "true yield.",
   "simple yield.",
   "current yield."
  ],
  "ans": 2,
  "en": "Current yield = annual coupon / flat price. Simple yield adds straight-line amortization of the discount or premium; true yield uses actual payment dates.",
  "vi": "Current yield = coupon cả năm / giá flat. Simple yield cộng thêm phần phân bổ đều của chiết khấu/phụ trội; true yield dùng ngày thanh toán thực tế."
 },
 {
  "q": "An analyst is concerned that a bond might be downgraded one category by Standard & Poor's and become non-investment grade. The current rating of this bond is most likely:",
  "opts": [
   "A–.",
   "BB–.",
   "BBB–."
  ],
  "ans": 2,
  "en": "BBB− is the LOWEST investment-grade rating on the S&P scale; one notch down (BB+) is high yield. BB− is already non-investment grade, and A− has several notches of cushion.",
  "vi": "BBB− là bậc THẤP NHẤT của nhóm investment-grade theo thang S&P; hạ một bậc (BB+) là rơi vào high yield. BB− vốn đã dưới chuẩn đầu tư, còn A− vẫn còn nhiều bậc đệm."
 },
 {
  "q": "A company that is required to raise equity capital to continue to operate as a going concern is most likely doing so to:",
  "opts": [
   "purchase long-lived assets.",
   "fund capital expansion projects.",
   "improve capital adequacy ratios."
  ],
  "ans": 2,
  "en": "Being REQUIRED to raise equity to keep operating points to regulatory capital needs — e.g., a bank restoring capital adequacy ratios. Asset purchases and expansion are discretionary growth uses.",
  "vi": "Bị BUỘC phải huy động vốn cổ phần để tiếp tục hoạt động cho thấy nhu cầu vốn theo quy định — ví dụ ngân hàng khôi phục hệ số an toàn vốn. Mua tài sản hay mở rộng là mục đích tăng trưởng tùy chọn."
 },
 {
  "q": "An investor purchased shares on margin at €50 per share using a leverage ratio of 2.0. If the shares are sold for €70 per share, the return on the investor's equity investment is:",
  "opts": [
   "40%.",
   "80%.",
   "180%."
  ],
  "ans": 1,
  "en": "Leverage 2.0 → equity = €25, debt = €25 per share. Sale at €70 → equity becomes 70 − 25 = €45. Return = (45 − 25)/25 = 80% — the 40% unleveraged return doubled by 2× leverage.",
  "vi": "Đòn bẩy 2,0 → vốn tự có = 25 €, vay = 25 € mỗi cổ phiếu. Bán ở 70 € → vốn còn lại = 70 − 25 = 45 €. Lợi suất = (45 − 25)/25 = 80% — mức 40% không đòn bẩy được nhân đôi bởi đòn bẩy 2×."
 },
 {
  "q": "With respect to asset-backed securities, which of the following most likely redistributes prepayment risk?",
  "opts": [
   "Subordination",
   "Time tranching",
   "Credit tranching"
  ],
  "ans": 1,
  "en": "Time tranching creates sequential classes that absorb prepayments in order, redistributing contraction/extension risk. Subordination (credit tranching) redistributes CREDIT risk.",
  "vi": "Time tranching tạo các lớp tuần tự hấp thụ khoản trả trước theo thứ tự, qua đó phân phối lại rủi ro trả trước (co ngắn/kéo dài). Subordination (credit tranching) phân phối lại rủi ro TÍN DỤNG."
 },
 {
  "q": "An investor whose portfolio lies to the right of the market portfolio on the CML most likely:",
  "opts": [
   "invested all available funds in the risk-free asset.",
   "borrowed funds at the risk-free rate and invested all available funds in the market portfolio.",
   "loaned some funds at the risk-free rate and invested the remaining funds in the market portfolio."
  ],
  "ans": 1,
  "en": "Beyond the market portfolio on the CML lies the leveraged region: the investor borrows at the risk-free rate and puts more than 100% into the market portfolio. Lending positions sit to the LEFT.",
  "vi": "Bên phải danh mục thị trường trên CML là vùng đòn bẩy: nhà đầu tư vay ở lãi suất phi rủi ro và đầu tư hơn 100% vào danh mục thị trường. Vị thế cho vay nằm bên TRÁI."
 },
 {
  "q": "The security market line plots the expected return of a portfolio against a measure of the portfolio's:",
  "opts": [
   "total risk.",
   "systematic risk.",
   "unsystematic risk."
  ],
  "ans": 1,
  "en": "The SML graphs expected return against BETA — systematic risk — and applies to any security or portfolio. The CML, by contrast, uses total risk (standard deviation) and only efficient portfolios.",
  "vi": "SML biểu diễn lợi suất kỳ vọng theo BETA — rủi ro hệ thống — và áp dụng cho mọi chứng khoán hay danh mục. Ngược lại, CML dùng rủi ro tổng thể (độ lệch chuẩn) và chỉ cho danh mục hiệu quả."
 },
 {
  "q": "Which of the following statements is most accurate? A standard interest rate swap has:",
  "opts": [
   "a symmetric payoff profile.",
   "the principal cash flow exchanged upfront.",
   "periodic settlements that occur at the beginning of each period."
  ],
  "ans": 0,
  "en": "A plain-vanilla swap is a series of forward-like commitments, so gains and losses are linear and symmetric. Notional principal is NOT exchanged, and settlements occur at the END of each period.",
  "vi": "Swap lãi suất chuẩn là chuỗi cam kết kiểu forward, nên lãi/lỗ tuyến tính và đối xứng. Vốn danh nghĩa KHÔNG được hoán đổi, và các kỳ thanh toán diễn ra vào CUỐI mỗi kỳ."
 },
 {
  "q": "Which of the following is used by clearinghouses to determine the gain and loss to the parties of a futures contract?",
  "opts": [
   "Limit up and limit down",
   "Margin call",
   "Daily settlement"
  ],
  "ans": 2,
  "en": "Futures are marked to market daily: the clearinghouse computes each day's settlement price and transfers gains/losses between margin accounts. Margin calls and price limits are consequences, not the measurement mechanism.",
  "vi": "Hợp đồng tương lai được mark-to-market hằng ngày: trung tâm bù trừ xác định giá thanh toán mỗi ngày và chuyển lãi/lỗ giữa các tài khoản ký quỹ. Margin call và biên độ giá chỉ là hệ quả, không phải cơ chế xác định lãi lỗ."
 },
 {
  "q": "Which of the following statements about robo-advisers is most accurate?",
  "opts": [
   "Robo-advisers charge higher fees than traditional investment advisers",
   "Robo-advisers mainly target investors with a high level of investable assets",
   "Assets managed by robo-advisers are growing in part due to new entrants such as insurance companies"
  ],
  "ans": 2,
  "en": "Robo-advice keeps growing as new players — insurers, asset managers, banks — enter the space. Robo-advisers charge LOWER fees than traditional advisers and chiefly serve the mass-affluent, lower-asset segment.",
  "vi": "Robo-adviser tiếp tục tăng trưởng nhờ những người chơi mới — công ty bảo hiểm, quản lý quỹ, ngân hàng — tham gia. Robo-adviser thu phí THẤP hơn tư vấn truyền thống và chủ yếu phục vụ phân khúc tài sản vừa và nhỏ."
 },
 {
  "q": "Enterprise value equals the market value of a company's debt and equity reduced by the company's:",
  "opts": [
   "debt.",
   "cash.",
   "preferred stock."
  ],
  "ans": 1,
  "en": "EV = market value of common equity + debt + preferred − cash and short-term investments. Cash is subtracted because an acquirer effectively gets it back.",
  "vi": "EV = giá trị thị trường vốn cổ phần thường + nợ + cổ phiếu ưu đãi − tiền và đầu tư ngắn hạn. Tiền mặt được trừ đi vì bên mua thực chất thu hồi lại được khoản này."
 },
 {
  "q": "Which of the following statements is most accurate about a strong-form efficient market?",
  "opts": [
   "Fundamental analysis can generate abnormal returns",
   "Insiders can earn abnormal returns from trading on private information",
   "Passive portfolio management should outperform active portfolio management"
  ],
  "ans": 2,
  "en": "In a strong-form efficient market, prices reflect ALL information — public and private — so neither fundamental analysis nor insider trading earns abnormal returns, and low-cost passive management beats active after fees.",
  "vi": "Trong thị trường hiệu quả dạng mạnh, giá phản ánh MỌI thông tin — công khai lẫn nội bộ — nên cả phân tích cơ bản lẫn giao dịch nội gián đều không tạo lợi nhuận vượt trội, và quản lý thụ động chi phí thấp sẽ thắng chủ động sau phí."
 },
 {
  "q": "Commercial paper with a face value of $25,000,000 and a term of 120 days was issued 55 days ago. If the current market value is $24,855,000, the implied discount rate assuming a 360-day year is closest to:",
  "opts": [
   "3.21%.",
   "3.23%.",
   "3.80%."
  ],
  "ans": 0,
  "en": "Days remaining = 120 − 55 = 65. Discount rate = (145,000 / 25,000,000) × (360/65) = 0.58% × 5.538 = 3.21%. Discount rates use FACE value as the base.",
  "vi": "Số ngày còn lại = 120 − 55 = 65. Discount rate = (145.000 / 25.000.000) × (360/65) = 0,58% × 5,538 = 3,21%. Lãi suất chiết khấu tính trên MỆNH GIÁ."
 },
 {
  "q": "All else being equal, a bond issuer is most likely to be evaluated as more creditworthy than its peers if it has a:",
  "opts": [
   "lower debt/EBITDA and a lower EBITDA/interest expense.",
   "lower debt/EBITDA and a higher EBITDA/interest expense.",
   "higher debt/EBITDA and a lower EBITDA/interest expense."
  ],
  "ans": 1,
  "en": "Stronger credit = LESS leverage (lower debt/EBITDA) and MORE coverage (higher EBITDA/interest). The two ratios must move in those opposite directions.",
  "vi": "Tín nhiệm mạnh hơn = đòn bẩy THẤP hơn (debt/EBITDA thấp) và khả năng trả lãi CAO hơn (EBITDA/interest cao). Hai tỷ số phải theo đúng hai hướng ngược nhau đó."
 },
 {
  "q": "An analyst gathers the following information about a hedge fund's fee structure: assets under management (AUM), beginning of period = $80 million; management fee, based on year-end AUM = 2%; incentive fee = 20%. The management and incentive fees are calculated independently. If the hedge fund generates a gross return of 25%, the assets under management after fees at the end of the period are closest to:",
  "opts": [
   "$94.0 million.",
   "$94.4 million.",
   "$97.6 million."
  ],
  "ans": 0,
  "en": "Year-end AUM = 80 × 1.25 = $100m. Management fee = 2% × 100 = $2m; incentive = 20% × (100 − 80) = $4m (independent, gross of the management fee). Net AUM = 100 − 2 − 4 = $94.0m.",
  "vi": "AUM cuối kỳ = 80 × 1,25 = 100 triệu. Phí quản lý = 2% × 100 = 2 triệu; phí thành tích = 20% × (100 − 80) = 4 triệu (tính độc lập, trước phí quản lý). AUM ròng = 100 − 2 − 4 = 94,0 triệu USD."
 },
 {
  "q": "An analyst gathers the following information about two companies' non-callable, non-convertible perpetual preference shares: Preference Share 1 — par value $100, required rate of return 8%, annual dividend per share $6; Preference Share 2 — par value $100, required rate of return 11%, annual dividend per share $8. The value of Preference Share 1 is:",
  "opts": [
   "less than the value of Preference Share 2.",
   "equal to the value of Preference Share 2.",
   "greater than the value of Preference Share 2."
  ],
  "ans": 2,
  "en": "Perpetuity value = dividend / required return. Share 1 = 6/0.08 = $75.00; Share 2 = 8/0.11 = $72.73. Share 1 is worth more despite the smaller dividend, because its required return is much lower.",
  "vi": "Giá trị perpetuity = cổ tức / lợi suất yêu cầu. Cổ phiếu 1 = 6/0,08 = 75,00 USD; Cổ phiếu 2 = 8/0,11 = 72,73 USD. Cổ phiếu 1 giá trị cao hơn dù cổ tức nhỏ hơn, vì lợi suất yêu cầu thấp hơn nhiều."
 },
 {
  "q": "An analyst gathers the following information: Bond 1 — time to maturity 4 years, yield to maturity 3.3%; Bond 2 — time to maturity 7 years, yield to maturity 5.1%. Based only on this information, the estimated market discount rate for a 6-year bond with similar credit quality is:",
  "opts": [
   "3.9%.",
   "4.2%.",
   "4.5%."
  ],
  "ans": 2,
  "en": "Linear interpolation: 3.3% + [(6 − 4)/(7 − 4)] × (5.1% − 3.3%) = 3.3% + (2/3) × 1.8% = 3.3% + 1.2% = 4.5%.",
  "vi": "Nội suy tuyến tính: 3,3% + [(6 − 4)/(7 − 4)] × (5,1% − 3,3%) = 3,3% + (2/3) × 1,8% = 3,3% + 1,2% = 4,5%."
 },
 {
  "q": "Which of the following statements best describes changes in the value of a long forward position during its life?",
  "opts": [
   "As interest rates go down, the value of the position goes up",
   "As the time to maturity goes down, the value of the position goes up",
   "As the price of the underlying goes up, the value of the position goes up"
  ],
  "ans": 2,
  "en": "The long forward gains when the underlying's spot price rises above what was locked in: V = S − PV(F). Falling rates raise PV(F), which HURTS the long, and time passage alone has no fixed direction.",
  "vi": "Vị thế mua forward có lợi khi giá giao ngay của tài sản cơ sở vượt mức đã chốt: V = S − PV(F). Lãi suất giảm làm PV(F) tăng, gây BẤT LỢI cho bên mua, còn riêng việc thời gian trôi qua không có chiều hướng cố định."
 },
 {
  "q": "A reason for a company's management to repurchase its shares is to signal a belief that the company's shares are:",
  "opts": [
   "undervalued.",
   "fairly valued.",
   "overvalued."
  ],
  "ans": 0,
  "en": "Buybacks are a classic signal that management believes the stock trades BELOW intrinsic value — repurchasing cheap shares benefits remaining shareholders.",
  "vi": "Mua lại cổ phiếu là tín hiệu kinh điển rằng ban lãnh đạo tin cổ phiếu đang giao dịch DƯỚI giá trị nội tại — mua lại cổ phiếu rẻ mang lợi cho cổ đông còn lại."
 },
 {
  "q": "An analyst gathers the following estimates about a company: earnings retention rate = 40%; growth rate = 3%. If the justified forward P/E is 10 based on the Gordon growth model, the required rate of return is:",
  "opts": [
   "6%.",
   "7%.",
   "9%."
  ],
  "ans": 2,
  "en": "Justified forward P/E = payout / (r − g) = (1 − 0.40)/(r − 0.03) = 10 → r − 0.03 = 0.06 → r = 9%.",
  "vi": "P/E kỳ vọng hợp lý = tỷ lệ chi trả / (r − g) = (1 − 0,40)/(r − 0,03) = 10 → r − 0,03 = 0,06 → r = 9%."
 },
 {
  "q": "Which of the following is most likely considered an affirmative covenant?",
  "opts": [
   "A minimum interest coverage ratio",
   "A limit on the level of share buybacks",
   "What the issuer will do with the proceeds of a bond issue"
  ],
  "ans": 2,
  "en": "Affirmative covenants state what the issuer WILL do — e.g., use proceeds as stated, pay taxes, maintain assets. Ratio requirements and buyback limits are restrictive (negative) covenants.",
  "vi": "Affirmative covenant quy định những gì nhà phát hành SẼ làm — như dùng vốn đúng mục đích công bố, nộp thuế, duy trì tài sản. Yêu cầu tỷ số tài chính và hạn chế mua lại cổ phiếu là covenant hạn chế (negative)."
 },
 {
  "q": "The actions of non-hedging investors impact:",
  "opts": [
   "commodity supply only.",
   "commodity demand only.",
   "both commodity supply and commodity demand."
  ],
  "ans": 1,
  "en": "Non-hedging (financial) investors do not produce or hold physical output for commercial use — their positioning adds to the DEMAND side of commodity markets. Supply is driven by producers.",
  "vi": "Nhà đầu tư không phòng hộ (tài chính) không sản xuất hay nắm giữ hàng thực cho mục đích thương mại — vị thế của họ chỉ tác động phía CẦU của thị trường hàng hóa. Nguồn cung do nhà sản xuất quyết định."
 },
 {
  "q": "Accounting standards and reporting requirements that produce meaningful and timely financial disclosures are most critical for achieving which of the following efficiencies associated with a well-functioning financial system?",
  "opts": [
   "Allocational",
   "Informational",
   "Operational"
  ],
  "ans": 1,
  "en": "Reliable, timely disclosure makes prices reflect fundamental information — INFORMATIONAL efficiency. That in turn supports capital flowing to its best uses, but the disclosures act first on information.",
  "vi": "Công bố thông tin đáng tin cậy, kịp thời giúp giá phản ánh thông tin cơ bản — hiệu quả THÔNG TIN. Điều đó về sau hỗ trợ vốn chảy vào nơi sử dụng tốt nhất, nhưng tác động trực tiếp của công bố là lên thông tin."
 },
 {
  "q": "At initiation, the price of a forward contract is most likely:",
  "opts": [
   "less than the value of the forward contract.",
   "equal to the value of the forward contract.",
   "greater than the value of the forward contract."
  ],
  "ans": 2,
  "en": "At initiation the VALUE of a forward is zero (no money changes hands), while the forward PRICE — the agreed delivery price — is positive. Hence price exceeds value.",
  "vi": "Tại thời điểm khởi tạo, GIÁ TRỊ hợp đồng forward bằng 0 (không có tiền trao tay), còn GIÁ forward — mức giá giao hàng đã thỏa thuận — là số dương. Vì vậy giá lớn hơn giá trị."
 },
 {
  "q": "An asset-backed securitization with a waterfall structure is most likely structured with which type of credit enhancement?",
  "opts": [
   "Subordination",
   "Time tranching",
   "Special-purpose entity (SPE)"
  ],
  "ans": 0,
  "en": "A waterfall pays senior classes first and pushes losses to junior classes first — that is subordination (credit tranching). Time tranching manages prepayment risk; the SPE is the issuing vehicle, not a credit enhancement.",
  "vi": "Cơ chế waterfall trả cho lớp senior trước và dồn tổn thất cho lớp junior trước — đó chính là subordination (credit tranching). Time tranching xử lý rủi ro trả trước; SPE chỉ là pháp nhân phát hành, không phải công cụ tăng cường tín dụng."
 },
 {
  "q": "Failed market regulation most likely results in decreased:",
  "opts": [
   "fraud.",
   "economic efficiency.",
   "costs for investor participation."
  ],
  "ans": 1,
  "en": "When regulation fails, trust erodes, fraud and participation costs RISE, and resources are misallocated — economic efficiency falls.",
  "vi": "Khi quy định thị trường thất bại, niềm tin xói mòn, gian lận và chi phí tham gia TĂNG, nguồn lực bị phân bổ sai — hiệu quả kinh tế giảm."
 },
 {
  "q": "Under which of the following alternative investment methods can an investor invest indirectly in alternative assets?",
  "opts": [
   "Co-investing only",
   "Fund investing only",
   "Both co-investing and fund investing"
  ],
  "ans": 1,
  "en": "Pure INDIRECT access is fund investing — the manager invests on the investor's behalf. Co-investing combines a fund stake with a DIRECT investment alongside the fund into the portfolio company.",
  "vi": "Kênh GIÁN TIẾP thuần túy là đầu tư qua quỹ — nhà quản lý đầu tư thay cho nhà đầu tư. Co-investing kết hợp phần vốn trong quỹ với một khoản đầu tư TRỰC TIẾP song song vào công ty trong danh mục."
 },
 {
  "q": "Information for Stock A and the market appear in the following table: standard deviation of Stock A's return = 40%; standard deviation of the market's return = 20%; correlation of Stock A with the market = 85%. The beta of Stock A is closest to:",
  "opts": [
   "0.43.",
   "1.70.",
   "2.35."
  ],
  "ans": 1,
  "en": "Beta = correlation × (σ_stock / σ_market) = 0.85 × (40/20) = 1.70.",
  "vi": "Beta = tương quan × (σ_cổ phiếu / σ_thị trường) = 0,85 × (40/20) = 1,70."
 },
 {
  "q": "Which of the following is most likely a cross-sectional anomaly in financial markets?",
  "opts": [
   "Value effect",
   "Overreaction effect",
   "Closed-end fund discount"
  ],
  "ans": 0,
  "en": "The value effect — value stocks outperforming growth stocks — is a cross-sectional anomaly (comparing securities at a point in time). Overreaction is a time-series anomaly; closed-end fund discounts are classified as 'other' anomalies.",
  "vi": "Hiệu ứng value — cổ phiếu giá trị vượt trội cổ phiếu tăng trưởng — là anomaly theo lát cắt ngang (so sánh các chứng khoán tại một thời điểm). Overreaction là anomaly chuỗi thời gian; chiết khấu quỹ đóng thuộc nhóm 'khác'."
 },
 {
  "q": "Compared to investing in a single security, the portfolio approach can improve investors' risk–return trade-off by offering:",
  "opts": [
   "lower expected return with the same overall volatility of returns.",
   "the same expected return with lower overall volatility of returns.",
   "higher overall volatility of returns for a given level of expected return."
  ],
  "ans": 1,
  "en": "Diversification's core benefit: combining imperfectly correlated assets keeps the weighted expected return but cuts overall volatility — a better risk–return trade-off.",
  "vi": "Lợi ích cốt lõi của đa dạng hóa: kết hợp các tài sản tương quan không hoàn hảo vẫn giữ lợi suất kỳ vọng bình quân nhưng giảm biến động tổng thể — cải thiện đánh đổi rủi ro–lợi nhuận."
 },
 {
  "q": "In a rising interest rate environment, the effective duration of a putable bond relative to an otherwise identical non-putable bond, will most likely be:",
  "opts": [
   "lower.",
   "the same.",
   "higher."
  ],
  "ans": 0,
  "en": "As rates rise, the put option gains value: the holder can sell the bond back at the put price, which cushions price declines and SHORTENS effective duration versus the straight bond.",
  "vi": "Khi lãi suất tăng, quyền bán lại (put) tăng giá trị: trái chủ có thể bán lại trái phiếu ở giá put, làm giảm mức rớt giá và RÚT NGẮN effective duration so với trái phiếu thường."
 }
]
});

window.CFA.mocktests.push({
name: "Mock Exam 4 — Session 1 (Ethics · Quant · Econ · FSA · Corporate Issuers)",
qs: [
{
q: "Max Ohn, CFA, sets up a mutual referral arrangement with a real estate agency: he refers clients to the agency and it refers clients to him. Because the agency does not compete with his employer and the arrangement benefits his firm, Ohn does not disclose it to his employer. He does diligently disclose the arrangement to referred clients, but only after they have become clients of his firm. Has Ohn violated the Standard on referral fees?",
opts: ["No", "Yes, only by omitting disclosure of the arrangement to his employer", "Yes, both by omitting disclosure to his employer and by disclosing to referred clients only after they became clients"],
ans: 2,
en: "Standard VI(C) requires disclosure of referral arrangements to BOTH the employer AND to clients/prospects BEFORE any resulting service is provided, so clients can judge any partiality. Ohn failed on both counts: he told his employer nothing, and he told clients only after they had signed on — too late to inform their decision.",
vi: "Chuẩn mực VI(C) yêu cầu công bố thỏa thuận giới thiệu cho CẢ nhà tuyển dụng LẪN khách hàng/khách hàng tiềm năng TRƯỚC khi cung cấp dịch vụ, để họ đánh giá được khả năng thiên vị. Ohn vi phạm cả hai: không nói gì với nhà tuyển dụng, và chỉ công bố cho khách hàng SAU khi họ đã trở thành khách hàng — quá muộn."
},
{
q: "An independent analyst is approached by two companies for issuer-paid research. Company 1 proposes a flat fee plus stock warrants. Company 2 proposes a flat fee but requires the analyst to obtain the company's approval before publishing any report. The analyst violates the Standards if she agrees to write research for:",
opts: ["Company 1 only", "Company 2 only", "both Company 1 and Company 2"],
ans: 2,
en: "Under Standard I(B), issuer-paid research must preserve independence. A flat fee set in advance is acceptable, but compensation tied to share performance (stock warrants) creates a conflict — Company 1 fails. Letting the issuer approve/gate the report before publication also destroys independence (the issuer could suppress unfavorable conclusions) — Company 2 fails. The issuer may review only for factual accuracy.",
vi: "Theo Chuẩn mực I(B), nghiên cứu do bên phát hành trả tiền phải giữ tính độc lập. Phí cố định định trước thì được, nhưng thù lao gắn với giá cổ phiếu (stock warrants) tạo xung đột — Company 1 sai. Cho bên phát hành duyệt/kiểm soát báo cáo trước khi công bố cũng phá vỡ tính độc lập (họ có thể chặn kết luận bất lợi) — Company 2 sai. Bên phát hành chỉ được rà soát tính chính xác dữ kiện."
},
{
q: "Toni Lynn, CFA, a research analyst, relies on colleagues to judge whether third-party research is sound, and she also uses content from personal blogs and social media after concluding it is sound. Has Lynn violated the Standard on diligence and reasonable basis?",
opts: ["No", "Yes, by using content from personal blogs and social media", "Yes, by relying on her colleagues to determine whether third-party research is sound"],
ans: 0,
en: "Standard V(A) allows a member to rely on others' research and on any information source — including blogs or social media — provided she has a reasonable basis to believe it is sound. Lynn made that judgment in both cases, so neither action is a violation. The source itself is not prohibited; the requirement is diligence in verifying it.",
vi: "Chuẩn mực V(A) cho phép thành viên dựa vào nghiên cứu của người khác và bất kỳ nguồn thông tin nào — kể cả blog hay mạng xã hội — miễn là có cơ sở hợp lý để tin nguồn đó đáng tin cậy. Lynn đã đánh giá điều đó trong cả hai trường hợp, nên không vi phạm. Bản thân nguồn không bị cấm; yêu cầu là sự thẩm định kỹ lưỡng."
},
{
q: "Teresa Avila, CFA, is a micro-cap analyst at a hedge fund that requires her to hold the securities she recommends in her personal account. Because her account is small, whenever she trades for herself she combines her transactions in the same block as the fund's trades so her account stays aligned with the fund. Has Avila violated any Standard?",
opts: ["No", "Yes, the Standard relating to misconduct", "Yes, the Standard relating to priority of transactions"],
ans: 0,
en: "Standard VI(B) requires client and employer transactions to take priority over personal ones. Participating in the same block trade at the same execution price does not disadvantage the fund — clients still receive the same terms simultaneously, so priority is preserved. There is no front-running and no misconduct.",
vi: "Chuẩn mực VI(B) yêu cầu giao dịch của khách hàng và nhà tuyển dụng được ưu tiên hơn giao dịch cá nhân. Tham gia cùng lệnh block ở cùng giá khớp không gây bất lợi cho quỹ — khách hàng vẫn nhận cùng điều kiện đồng thời, nên nguyên tắc ưu tiên được giữ. Không có front-running, không có hành vi sai trái."
},
{
q: "Kush Shah, CFA, CIO of a firm, discovers during a routine review that the firm erroneously bought shares of IY Steel for several clients. He immediately sells the shares, realizing a significant profit for those clients. Later Shah outsources a portion of client portfolios to an external manager but does not notify clients, reasoning that the firm's stock-selection process is unchanged. Shah violated the Standards by failing to notify clients:",
opts: ["only about the erroneous purchase of IY shares", "only about outsourcing a portion of the portfolios to an external manager", "about both the erroneous purchase and the outsourcing"],
ans: 1,
en: "Standard V(B) requires disclosure of material changes to the investment process. Delegating management to an external manager is a material change clients are entitled to know about — the unchanged selection process does not excuse it. The IY purchase was an error that was corrected immediately with a profit to clients, so it carried no ongoing disclosure obligation.",
vi: "Chuẩn mực V(B) yêu cầu công bố các thay đổi trọng yếu trong quy trình đầu tư. Giao một phần danh mục cho nhà quản lý bên ngoài là thay đổi trọng yếu mà khách hàng có quyền biết — việc quy trình chọn cổ phiếu không đổi không miễn trừ được. Giao dịch IY là lỗi đã được sửa ngay và mang lại lợi nhuận cho khách hàng, nên không phát sinh nghĩa vụ công bố tiếp diễn."
},
{
q: "The Standard on additional compensation arrangements requires members to disclose to their employer which of the following that might create a conflict with the employer's interest?",
opts: ["Only direct compensation", "Only indirect compensation", "Both direct and indirect compensation"],
ans: 2,
en: "Standard IV(B) requires members to obtain written consent for, and disclose, all benefits that might conflict with the employer's interest — monetary or otherwise. This covers both direct compensation (cash, bonuses) and indirect benefits (gifts, perquisites, favors).",
vi: "Chuẩn mực IV(B) yêu cầu thành viên xin chấp thuận bằng văn bản và công bố mọi lợi ích có thể xung đột với lợi ích của nhà tuyển dụng — bằng tiền hay hình thức khác. Bao gồm cả thù lao trực tiếp (tiền mặt, thưởng) lẫn lợi ích gián tiếp (quà tặng, đặc quyền, ưu đãi)."
},
{
q: "Ana Kloes passes all three CFA exam levels in three consecutive years. After passing Level III but before the charter is awarded, she adds 'Partial CFA, awaiting CFA charter' to her email signature, and posts on social media 'I passed all three levels of the CFA Program on my first attempt in three consecutive years.' Has Kloes violated the Standards?",
opts: ["No", "Yes, because of the 'Partial CFA, awaiting CFA charter' email signature", "Yes, because of the social media post about passing all three levels on the first attempt"],
ans: 1,
en: "Standard VII(B) prohibits any reference to a partial designation — there is no such thing as a 'partial CFA.' Stating factually that one passed all three levels (even noting consecutive years or first attempt) is permitted. So the email signature is the violation; the social media post is a factual, allowable statement.",
vi: "Chuẩn mực VII(B) cấm mọi cách nói về một danh hiệu 'một phần' — không hề có 'Partial CFA'. Nêu sự thật rằng đã đậu cả ba cấp (kể cả nói đậu liên tiếp hay đậu lần đầu) thì được phép. Vậy chữ ký email là vi phạm; bài đăng mạng xã hội là phát biểu sự thật, được phép."
},
{
q: "To be compliant with the GIPS standards, after a firm initially presents five years of performance history it must subsequently build up to a minimum of:",
opts: ["7 years", "10 years", "15 years"],
ans: 1,
en: "GIPS requires a minimum of five years of compliant performance at initial presentation (or since inception if the firm/composite is younger), after which the firm must add annual performance until a minimum of ten years is presented.",
vi: "GIPS yêu cầu tối thiểu 5 năm kết quả tuân thủ khi trình bày lần đầu (hoặc từ khi thành lập nếu công ty/composite chưa đủ 5 năm), sau đó phải bổ sung kết quả hằng năm cho đến khi trình bày đủ tối thiểu 10 năm."
},
{
q: "Akash Gupta has just finished the Level II exam for the second time. He is careful not to discuss specific questions with other candidates. However, he calls a friend (a charterholder) and, comparing his two sittings, notes there were many derivatives calculation questions the first time and none the second. Later, on a public blog, he expresses strong disagreement with CFA Institute's shift to computer-based testing. Has Gupta violated the Standards?",
opts: ["No", "Yes, by revealing that there were no derivatives calculation questions on the recent exam", "Yes, by expressing disagreement on a public blog about the shift to computer-based testing"],
ans: 1,
en: "Standard VII(A) prohibits disclosing confidential exam information, which includes the topical mix and question formats. Telling someone which subjects had (or lacked) calculation questions reveals exam content — a violation. Expressing an opinion or disagreement about CFA Institute policies such as CBT is expressly permitted.",
vi: "Chuẩn mực VII(A) cấm tiết lộ thông tin mật của kỳ thi, bao gồm cả cơ cấu chủ đề và dạng câu hỏi. Nói cho người khác biết môn nào có (hay không có) câu tính toán là tiết lộ nội dung đề — vi phạm. Việc nêu quan điểm hay phản đối chính sách của CFA Institute như CBT thì được phép rõ ràng."
},
{
q: "A member who pays a higher brokerage commission on behalf of all clients than he would otherwise pay, without any corresponding benefit to the clients, violates the Standard relating to:",
opts: ["suitability", "fair dealing", "loyalty, prudence, and care"],
ans: 2,
en: "Standard III(A) requires members to seek best execution and to use client brokerage only for the client's benefit. Paying above-market commissions with no offsetting benefit (research or execution quality) breaches the duty of loyalty, prudence, and care owed to clients.",
vi: "Chuẩn mực III(A) yêu cầu thành viên tìm kiếm best execution và chỉ dùng phí môi giới của khách hàng vì lợi ích của khách hàng. Trả phí hoa hồng cao hơn thị trường mà không có lợi ích bù đắp (nghiên cứu hay chất lượng khớp lệnh) là vi phạm nghĩa vụ trung thành, thận trọng và cẩn trọng đối với khách hàng."
},
{
q: "Which of the following statements is accurate regarding GIPS verification?",
opts: ["Verification eliminates the need for a prospective investor to perform in-depth due diligence on a GIPS-compliant firm", "Verification can be performed on a single composite to ensure the accuracy of that composite's presentation", "Verification provides assurance about whether the firm's policies and procedures have been implemented on a firm-wide basis"],
ans: 2,
en: "Verification is performed on a FIRM-WIDE basis and tests whether the firm's policies and procedures for composite construction and performance calculation are designed and implemented across the entire firm. It does not replace investor due diligence, and it cannot be applied to a single composite in isolation (that is a separate performance examination).",
vi: "Verification được thực hiện trên phạm vi TOÀN CÔNG TY và kiểm tra xem chính sách, quy trình xây dựng composite và tính toán hiệu suất có được thiết kế và áp dụng trên toàn công ty hay không. Nó không thay thế việc thẩm định của nhà đầu tư, và không áp dụng cho riêng một composite (đó là performance examination riêng)."
},
{
q: "Which of the following is NOT a recommended procedure for compliance with the Standard on misrepresentation? Firms should:",
opts: ["avoid verifying information provided by third-party firms about their timely trade executions", "specifically designate which employees are authorized to speak on behalf of the firm", "periodically review employee correspondence that contains representations about individual qualifications"],
ans: 0,
en: "Recommended procedures under Standard I(C) include designating authorized spokespeople and reviewing employee correspondence for accuracy. 'Avoiding' verification of third-party information is the opposite of good practice — members should verify outside information before relying on or presenting it.",
vi: "Các thủ tục được khuyến nghị theo Chuẩn mực I(C) gồm chỉ định người phát ngôn được ủy quyền và rà soát thư từ của nhân viên để bảo đảm chính xác. 'Tránh' xác minh thông tin của bên thứ ba là ngược với thông lệ tốt — thành viên nên xác minh thông tin bên ngoài trước khi dựa vào hay trình bày."
},
{
q: "An investment advisor receives a large unsolicited trade request from a client that is not aligned with the client's investment objectives. Which action is consistent with the Standard on suitability? The member:",
opts: ["immediately executes the trade", "reduces the size of the requested investment and then executes the trade", "discusses the investment with the client, updates the client's investment policy statement, and executes the trade"],
ans: 2,
en: "Under Standard III(C), for an unsuitable unsolicited trade the member should first discuss the mismatch with the client. If the client still wants to proceed, the member should either obtain the client's acknowledgement or update the IPS to reflect the change before executing. Simply executing, or unilaterally resizing, is not appropriate.",
vi: "Theo Chuẩn mực III(C), với lệnh khách tự yêu cầu nhưng không phù hợp, thành viên trước hết nên trao đổi về sự không tương thích. Nếu khách vẫn muốn thực hiện, thành viên nên lấy xác nhận của khách hoặc cập nhật IPS phản ánh thay đổi trước khi khớp lệnh. Chỉ khớp lệnh ngay, hoặc tự ý giảm quy mô, đều không phù hợp."
},
{
q: "Petra Vogler, CFA, tells a client she uses mosaic theory: she analyzes public and nonmaterial nonpublic information, including her evaluation of statements made to her by company insiders in one-on-one meetings where management discusses new earnings projections not known to the public. She also gathers general industry data from experts. Vogler violates the Standards because of her use of:",
opts: ["industry expert information", "one-on-one meeting information", "nonmaterial nonpublic information"],
ans: 1,
en: "Mosaic theory permits combining public and NONmaterial nonpublic information. But new earnings projections not known to the public are MATERIAL nonpublic information. Acting on what management disclosed in the one-on-one meetings therefore violates Standard II(A). Using nonmaterial nonpublic information and general industry information is fine.",
vi: "Mosaic theory cho phép kết hợp thông tin công khai và thông tin phi công khai KHÔNG trọng yếu. Nhưng dự phóng lợi nhuận mới chưa được công bố là thông tin phi công khai TRỌNG YẾU. Do đó hành động dựa trên nội dung ban lãnh đạo tiết lộ trong cuộc gặp riêng vi phạm Chuẩn mực II(A). Dùng thông tin phi công khai không trọng yếu và thông tin ngành chung thì được."
},
{
q: "Shruti Kurup, CFA, is preparing to leave her firm for a competitor. Before leaving, she calls all her clients to inform them of her decision. When asked why, she cites a lack of confidence in the firm's leadership and adds that more employees are likely to leave soon. Kurup violated the Standard(s) relating to:",
opts: ["loyalty only", "communication with clients only", "both loyalty and communication with clients"],
ans: 0,
en: "Standard IV(A) prohibits conduct that harms the employer, including disparaging the firm's leadership and spreading speculation that other staff will depart. That is the violation here. Standard V(B) concerns communication about the investment process and does not apply to these statements.",
vi: "Chuẩn mực IV(A) cấm hành vi gây hại cho nhà tuyển dụng, gồm cả chê bai ban lãnh đạo và lan truyền suy đoán rằng nhân viên khác sẽ nghỉ. Đó là vi phạm ở đây. Chuẩn mực V(B) liên quan đến việc trao đổi về quy trình đầu tư và không áp dụng cho các phát biểu này."
},
{
q: "To comply with the Standard on knowledge of the law, members are required to take which of the following actions? Action 1: acquire detailed knowledge of all laws relating to their activities. Action 2: dissociate from the activities of others that they know are illegal or unethical.",
opts: ["Action 1 only", "Action 2 only", "Both Action 1 and Action 2"],
ans: 1,
en: "Standard I(A) requires members to UNDERSTAND applicable laws and regulations and to dissociate from illegal or unethical conduct — but it does not require members to become legal experts or to have detailed knowledge of ALL laws. So only Action 2 is required.",
vi: "Chuẩn mực I(A) yêu cầu thành viên HIỂU các luật, quy định áp dụng và tách khỏi hành vi bất hợp pháp hoặc phi đạo đức — nhưng không yêu cầu trở thành chuyên gia pháp lý hay nắm chi tiết TẤT CẢ các luật. Vậy chỉ Action 2 là bắt buộc."
},
{
q: "Peter Chang, CFA, spreads rumors on social media about a potential acquisition of Advanced Electronics Company (AEC) after buying the stock for his personal account. Despite the rumors, AEC's price declines and Chang closes his position at a significant loss. Has Chang violated the Standards?",
opts: ["No", "Yes, only the Standard on market manipulation", "Yes, both the Standard on market manipulation and the Standard on misconduct"],
ans: 2,
en: "Spreading false rumors to move a share price is information-based market manipulation under Standard II(B), and the intent to manipulate is what matters — the fact that he lost money is irrelevant. Because the rumors were dishonest and deceitful, the conduct also violates Standard I(D) misconduct. Both apply.",
vi: "Tung tin đồn sai để tác động giá cổ phiếu là thao túng thị trường dựa trên thông tin theo Chuẩn mực II(B), và điều quan trọng là ý định thao túng — việc anh ta bị lỗ không liên quan. Vì tin đồn mang tính gian dối, hành vi cũng vi phạm Chuẩn mực I(D) về hành vi sai trái. Cả hai đều áp dụng."
},
{
q: "According to the Standards, which of the following requires disclosure? Information 1: a member's brother inherits a significant holding in a stock the member covers, and the member has no beneficial ownership in her brother's investments. Information 2: a member does unpaid volunteer work at a charity on holiday weekends. Information 3: the member's firm agrees to receive commissions from a mutual fund for recommending that fund to clients.",
opts: ["Information 1", "Information 2", "Information 3"],
ans: 2,
en: "Standard VI(A) requires disclosure of matters that could impair objectivity. The firm receiving commissions for recommending a specific fund is a clear conflict that must be disclosed to clients. The brother's holding (no beneficial ownership by the member) and unpaid, unrelated charity work create no conflict requiring disclosure.",
vi: "Chuẩn mực VI(A) yêu cầu công bố những vấn đề có thể làm suy giảm tính khách quan. Việc công ty nhận hoa hồng để giới thiệu một quỹ cụ thể là xung đột rõ ràng phải công bố cho khách hàng. Khoản nắm giữ của người anh (thành viên không có quyền lợi hưởng dụng) và việc thiện nguyện không lương, không liên quan thì không tạo xung đột cần công bố."
},
{
q: "According to the Standards, a member engages in information-based manipulation when she:",
opts: ["uses public information to implement trading strategies intended to exploit perceived market inefficiencies", "induces other market participants to trade a security by issuing an overly optimistic projection of its value", "relies on false rumors spread by other participants to secure a dominant position in the underlying security"],
ans: 1,
en: "Information-based manipulation involves disseminating false or misleading information to move prices. Issuing a deliberately over-optimistic projection to induce others to trade is exactly that. Exploiting inefficiencies with public information is legitimate, and securing a dominant position is transaction-based (not information-based) manipulation.",
vi: "Thao túng dựa trên thông tin là phát tán thông tin sai lệch hoặc gây hiểu lầm để tác động giá. Đưa ra dự phóng cố tình quá lạc quan nhằm dụ người khác giao dịch chính là như vậy. Khai thác điểm kém hiệu quả bằng thông tin công khai là hợp pháp, và chiếm vị thế chi phối là thao túng dựa trên giao dịch (không phải dựa trên thông tin)."
},
{
q: "Under the Standard on preservation of confidentiality, a member is required to maintain the confidentiality of information communicated to her by:",
opts: ["her former clients only", "her prospective clients only", "both her former clients and her prospective clients"],
ans: 2,
en: "Standard III(E) applies to current, former, AND prospective clients. The duty of confidentiality does not end when a client relationship ends, and it begins when a prospect shares information, so both former and prospective clients are covered.",
vi: "Chuẩn mực III(E) áp dụng cho khách hàng hiện tại, cũ VÀ tiềm năng. Nghĩa vụ bảo mật không kết thúc khi quan hệ khách hàng chấm dứt, và bắt đầu khi khách hàng tiềm năng chia sẻ thông tin, nên cả khách hàng cũ lẫn tiềm năng đều được bảo vệ."
},
{
q: "Anisha Joshi develops a product that selects mutual funds using historical data. She tests the methodology and produces simulated performance results. The promotional material does not indicate that the results are simulated. Joshi has violated the Standard(s) relating to:",
opts: ["fair dealing only", "performance presentation only", "both fair dealing and performance presentation"],
ans: 1,
en: "Standard III(D) requires performance presentations to be fair, accurate, and complete; simulated or back-tested results must be clearly identified as such. Failing to label results as simulated misrepresents performance. Fair dealing (III(B)) concerns treating clients equitably in recommendations and actions and is not implicated here.",
vi: "Chuẩn mực III(D) yêu cầu trình bày hiệu suất công bằng, chính xác và đầy đủ; kết quả mô phỏng hoặc back-test phải được nêu rõ. Không ghi rõ kết quả là mô phỏng là trình bày sai hiệu suất. Fair dealing (III(B)) liên quan đến đối xử công bằng với khách hàng trong khuyến nghị và hành động, không liên quan ở đây."
},
{
q: "Who is most likely responsible for claiming and maintaining compliance with the GIPS standards?",
opts: ["The firm claiming compliance", "The independent verification firm", "The firm's performance measurement department"],
ans: 0,
en: "GIPS compliance is claimed and maintained by the FIRM as a whole, on a firm-wide basis. Verifiers and internal departments may assist, but responsibility for the claim of compliance rests with the firm itself.",
vi: "Việc tuyên bố và duy trì tuân thủ GIPS là do CÔNG TY nói chung thực hiện, trên phạm vi toàn công ty. Bên verification và các phòng ban nội bộ có thể hỗ trợ, nhưng trách nhiệm về tuyên bố tuân thủ thuộc về chính công ty."
},
{
q: "Mila Roy, CFA, heads a research division. She sends a recommended stock list to all clients with a note that a detailed report on each stock is available on request. She then personally calls only her premium fee-paying clients to discuss the recommendations. These additional services are available to any client willing to pay the premium fee and are fully disclosed in the client agreement. Has Roy violated the Standards?",
opts: ["No", "Yes, the Standard on fair dealing", "Yes, the Standard on communication with clients"],
ans: 0,
en: "Standard III(B) permits offering different service levels to different clients as long as the arrangement is disclosed and available to all clients willing to pay for it. Roy released the recommendation to all clients simultaneously; the extra discussion is a disclosed premium service open to anyone who pays. No violation.",
vi: "Chuẩn mực III(B) cho phép cung cấp các mức dịch vụ khác nhau cho các khách hàng khác nhau, miễn là thỏa thuận được công bố và mở cho mọi khách hàng sẵn sàng trả phí. Roy phát hành khuyến nghị cho tất cả khách hàng cùng lúc; phần trao đổi thêm là dịch vụ cao cấp đã công bố, mở cho bất kỳ ai trả phí. Không vi phạm."
},
{
q: "The GIPS standards were created to prevent the:",
opts: ["comparison of comparable time periods across different firms' results", "selection of a single top-performing portfolio to represent a firm's strategy", "presentation of an average performance history that includes terminated portfolios"],
ans: 1,
en: "GIPS was designed to stop misleading practices such as cherry-picking a single representative (best) account to portray a strategy. Comparing comparable periods is a goal, not a problem, and GIPS actually REQUIRES including terminated portfolios to eliminate survivorship bias.",
vi: "GIPS được lập ra để ngăn các thông lệ gây hiểu lầm như chọn lọc một tài khoản đại diện (tốt nhất) để mô tả chiến lược. So sánh các giai đoạn tương đương là mục tiêu chứ không phải vấn đề, và GIPS thực ra YÊU CẦU đưa cả danh mục đã chấm dứt vào để loại bỏ survivorship bias."
},
{
q: "Under the Standard on responsibilities of supervisors, a member who is a department head managing a large number of employees must:",
opts: ["have in-depth knowledge of the Code and Standards", "personally evaluate the conduct of every employee in the department on a continuing basis", "make reasonable efforts to ensure that employees under his supervision comply with applicable laws and regulations"],
ans: 2,
en: "Standard IV(C) is built on 'reasonable efforts' to detect and prevent violations by those under supervision — implemented through adequate compliance systems, not by personally evaluating every employee (impossible for a large staff). Personal, continuous evaluation of all employees is not required; reasonable supervisory effort is.",
vi: "Chuẩn mực IV(C) dựa trên 'nỗ lực hợp lý' để phát hiện và ngăn ngừa vi phạm của những người dưới quyền — thực hiện qua hệ thống tuân thủ đầy đủ, chứ không phải tự mình đánh giá từng nhân viên (bất khả thi với đội ngũ lớn). Không bắt buộc đánh giá cá nhân liên tục mọi nhân viên; điều bắt buộc là nỗ lực giám sát hợp lý."
},
{
q: "Regarding challenges to ethical behavior, which of the following is NOT an example of a situational influence?",
opts: ["Bonuses", "Internal traits", "Loyalty to the employer"],
ans: 1,
en: "Situational influences are EXTERNAL pressures in the environment — money (bonuses), prestige and power, and loyalty to a group or employer. Internal traits (a person's own beliefs and character) are not situational influences; they are the opposite.",
vi: "Situational influences là các áp lực BÊN NGOÀI trong môi trường — tiền (thưởng), danh tiếng và quyền lực, và lòng trung thành với một nhóm hay nhà tuyển dụng. Các đặc điểm nội tại (niềm tin và tính cách của bản thân) không phải là situational influence; chúng là điều ngược lại."
},
{
q: "Mary Lawrence, CFA, archives her research notes for recommendations that change but discards her notes for cases where the recommendation does not change. She also discards the third-party research reports she used to support her analysis. Lawrence has violated the Standards:",
opts: ["only by discarding the third-party research reports", "only by discarding her notes when the recommendation does not change", "both by discarding the third-party reports and by discarding her notes when the recommendation does not change"],
ans: 2,
en: "Standard V(C) requires retaining all records that support analysis, recommendations, and actions — including the records behind a decision NOT to change a recommendation, and the third-party research relied upon. Discarding either set breaches the record-retention requirement.",
vi: "Chuẩn mực V(C) yêu cầu lưu giữ mọi hồ sơ hỗ trợ phân tích, khuyến nghị và hành động — kể cả hồ sơ đằng sau quyết định KHÔNG thay đổi khuyến nghị, và nghiên cứu bên thứ ba đã dựa vào. Bỏ đi bất kỳ nhóm nào đều vi phạm yêu cầu lưu trữ hồ sơ."
},
{
q: "The central limit theorem:",
opts: ["requires that the underlying population be approximately normally distributed", "implies that the sample mean is a consistent estimator of the population mean", "states that the product of independent random variables is normally distributed"],
ans: 1,
en: "The CLT says the sampling distribution of the sample MEAN approaches normality as sample size grows, regardless of the population's shape, with variance sigma-squared/n. Because that variance shrinks toward zero as n rises, the sample mean converges to the population mean — it is a consistent estimator.",
vi: "CLT nói rằng phân phối mẫu của TRUNG BÌNH mẫu tiến tới chuẩn khi cỡ mẫu tăng, bất kể hình dạng của tổng thể, với phương sai sigma-bình/n. Vì phương sai đó giảm dần về 0 khi n tăng, trung bình mẫu hội tụ về trung bình tổng thể — nó là ước lượng nhất quán (consistent)."
},
{
q: "A portfolio invested in two assets has an expected return of 11%. The expected returns for Assets A and B are 8% and 12%, respectively. The portfolio weight of Asset B is closest to:",
opts: ["25%", "50%", "75%"],
ans: 2,
en: "Solve 11 = 8(1 - wB) + 12(wB) = 8 + 4wB, so 4wB = 3 and wB = 0.75. Asset B carries three-quarters of the portfolio.",
vi: "Giải 11 = 8(1 - wB) + 12(wB) = 8 + 4wB, nên 4wB = 3 và wB = 0,75. Asset B chiếm ba phần tư danh mục."
},
{
q: "In a test of independence based on data in a contingency table, the appropriate nonparametric test statistic is:",
opts: ["F-distributed", "normally distributed", "chi-square distributed"],
ans: 2,
en: "A test of independence using a contingency table compares observed and expected cell frequencies, and the resulting test statistic follows a chi-square distribution.",
vi: "Kiểm định tính độc lập dùng bảng chéo (contingency table) so sánh tần số quan sát và kỳ vọng ở từng ô, và thống kê kiểm định thu được tuân theo phân phối chi-square."
},
{
q: "An analyst gathers the following (in GBP millions): beginning accounts receivable 5,500; ending accounts receivable 7,000; revenue 35,000. Assuming all sales are on credit, the cash received from customers (in GBP millions) is closest to:",
opts: ["33,500", "35,000", "36,500"],
ans: 0,
en: "Cash received from customers = revenue minus the increase in accounts receivable = 35,000 - (7,000 - 5,500) = 35,000 - 1,500 = 33,500. Receivables rose, so less cash was collected than revenue recognized.",
vi: "Tiền thu từ khách hàng = doanh thu trừ mức tăng khoản phải thu = 35,000 - (7,000 - 5,500) = 35,000 - 1,500 = 33,500. Khoản phải thu tăng nên tiền thu về ít hơn doanh thu ghi nhận."
},
{
q: "Double taxation of corporate income occurs when a corporation pays taxes on its profits and additional taxes are then paid by:",
opts: ["the shareholders on the dividends they receive", "the corporation on distributions made to shareholders", "the shareholders on gains from their equity investment"],
ans: 0,
en: "In the classical (double-taxation) system, corporate profits are taxed at the company level, and then shareholders pay personal tax on the dividends distributed from those already-taxed profits — the same income is taxed twice.",
vi: "Trong hệ thống cổ điển (đánh thuế hai lần), lợi nhuận doanh nghiệp bị đánh thuế ở cấp công ty, sau đó cổ đông nộp thuế cá nhân trên cổ tức chia ra từ phần lợi nhuận đã bị đánh thuế đó — cùng một khoản thu nhập bị đánh thuế hai lần."
},
{
q: "An analyst gathers the following (in JPY millions): cash flow from operating activities 28,808; purchase of equipment 1,300; sale of equipment 1,750; long-term debt repayment 470; increase in short-term borrowing 930. Free cash flow to equity (FCFE) is closest to:",
opts: ["JPY 28,798", "JPY 29,258", "JPY 29,718"],
ans: 2,
en: "FCFE = CFO - net fixed capital investment + net borrowing. Net FCInv = 1,300 - 1,750 = -450 (a net inflow). Net borrowing = 930 - 470 = 460. FCFE = 28,808 - (-450) + 460 = 28,808 + 450 + 460 = 29,718.",
vi: "FCFE = CFO - đầu tư tài sản cố định ròng + vay ròng. FCInv ròng = 1,300 - 1,750 = -450 (dòng vào ròng). Vay ròng = 930 - 470 = 460. FCFE = 28,808 - (-450) + 460 = 28,808 + 450 + 460 = 29,718."
},
{
q: "A positive movement in a lagging indicator would LEAST likely be used to:",
opts: ["identify a past condition of the economy", "identify an expected future economic upturn", "confirm that an expansion is currently underway"],
ans: 1,
en: "Lagging indicators change after the economy does, so they confirm past turning points and current trends. Predicting a FUTURE upturn is the role of leading indicators, so a lagging indicator would least likely be used for that.",
vi: "Chỉ báo trễ (lagging) thay đổi sau khi nền kinh tế đã thay đổi, nên chúng xác nhận các bước ngoặt trong quá khứ và xu hướng hiện tại. Dự báo một đợt phục hồi TƯƠNG LAI là vai trò của chỉ báo dẫn dắt (leading), nên chỉ báo trễ ít được dùng cho việc đó nhất."
},
{
q: "Which of the following is an example of cooperative behavior between countries?",
opts: ["Autarky", "Hegemony", "Bilateralism"],
ans: 2,
en: "Bilateralism — two countries entering agreements or arrangements together — is cooperative behavior. Autarky (self-sufficient isolation) and hegemony (one state's dominance) are non-cooperative.",
vi: "Bilateralism — hai quốc gia cùng ký kết thỏa thuận hay dàn xếp — là hành vi hợp tác. Autarky (tự cung tự cấp, cô lập) và hegemony (sự thống trị của một nước) là phi hợp tác."
},
{
q: "A firm is operating under an oligopoly when it is:",
opts: ["the sole provider of a good or service", "one of many providers of a good or service", "one of a small number of providers of a good or service"],
ans: 2,
en: "An oligopoly is a market with a SMALL number of interdependent sellers. A single provider is a monopoly; many providers describes perfect or monopolistic competition.",
vi: "Oligopoly là thị trường có SỐ ÍT người bán phụ thuộc lẫn nhau. Một người bán duy nhất là độc quyền (monopoly); nhiều người bán mô tả cạnh tranh hoàn hảo hoặc cạnh tranh độc quyền."
},
{
q: "An analyst gathers the following (in EUR millions) about a machine: carrying amount prior to impairment 8.0; present value of expected future cash flows 7.4; undiscounted expected future cash flows 7.8; costs to sell 0.2; impairment loss 0.5. The fair value of the machine (in EUR millions) is closest to:",
opts: ["7.5", "7.7", "7.8"],
ans: 1,
en: "The impairment of 0.5 means the recoverable amount = 8.0 - 0.5 = 7.5. Under IFRS, recoverable amount is the higher of value in use (7.4) and fair value less costs to sell. Since 7.5 exceeds 7.4, recoverable amount must equal fair value less costs to sell: 7.5 = fair value - 0.2, so fair value = 7.7.",
vi: "Impairment 0.5 nghĩa là recoverable amount = 8.0 - 0.5 = 7.5. Theo IFRS, recoverable amount là giá trị lớn hơn giữa value in use (7.4) và fair value trừ chi phí bán. Vì 7.5 > 7.4, recoverable amount phải bằng fair value trừ chi phí bán: 7.5 = fair value - 0.2, nên fair value = 7.7."
},
{
q: "An advantage of indirect taxes as a fiscal policy tool is that such taxes:",
opts: ["can be adjusted almost immediately", "minimize interference with consumers' choices", "have a greater impact on aggregate spending and output than direct government spending"],
ans: 0,
en: "Indirect taxes (VAT, sales, excise) can be changed and take effect almost at once, giving them a very short implementation lag. They DO distort consumer choices, and direct government spending generally has a larger multiplier effect on output.",
vi: "Thuế gián thu (VAT, thuế bán hàng, thuế tiêu thụ đặc biệt) có thể thay đổi và có hiệu lực gần như ngay lập tức, nên độ trễ triển khai rất ngắn. Chúng CÓ làm méo mó lựa chọn của người tiêu dùng, và chi tiêu chính phủ trực tiếp thường có hiệu ứng số nhân lớn hơn lên sản lượng."
},
{
q: "The notes to the financial statements are required to provide:",
opts: ["explanatory information about every line item on the balance sheet and income statement", "information about the accounting policies, methods, and estimates used to prepare the statements", "management's commentary on favorable or unfavorable trends and significant events and uncertainties"],
ans: 1,
en: "The notes disclose the accounting policies, methods, and estimates underlying the statements, plus supporting detail. They do not cover every single line item, and management's discussion of trends and uncertainties belongs in MD&A, not the notes.",
vi: "Phần thuyết minh công bố các chính sách, phương pháp và ước tính kế toán làm nền cho báo cáo, cùng chi tiết hỗ trợ. Nó không bao trùm từng dòng mục, và phần bình luận của ban lãnh đạo về xu hướng và bất định thuộc về MD&A, không phải thuyết minh."
},
{
q: "At which stage of its life cycle would a typical company most likely have more debt than equity in its capital structure?",
opts: ["Start-up stage", "Growth stage", "Mature stage"],
ans: 2,
en: "Mature companies have stable, predictable cash flows and tangible assets, so they can support and service higher debt levels. Start-ups and high-growth firms rely more on equity because their cash flows are uncertain and risky for lenders.",
vi: "Công ty trưởng thành có dòng tiền ổn định, dễ dự đoán và tài sản hữu hình, nên có thể gánh và trả mức nợ cao hơn. Doanh nghiệp khởi nghiệp và tăng trưởng cao dựa nhiều vào vốn chủ vì dòng tiền bất định và rủi ro với bên cho vay."
},
{
q: "A business model should have:",
opts: ["a value chain only", "a value proposition only", "both a value chain and a value proposition"],
ans: 2,
en: "A business model describes both a value proposition (what is offered, to whom, and why they buy) and a value chain (how the firm creates, produces, and delivers that value). Both are essential components.",
vi: "Mô hình kinh doanh mô tả cả value proposition (cung cấp gì, cho ai, và vì sao họ mua) lẫn value chain (công ty tạo ra, sản xuất và cung cấp giá trị đó như thế nào). Cả hai đều là thành phần thiết yếu."
},
{
q: "An analyst gathers the following about a capital investment: initial cash outlay USD 90 million; annual before-tax cash flows of USD 50 million at year-end for years 1 through 6; marginal tax rate 15%; required return 12%. The NPV is closest to:",
opts: ["USD 85 million", "USD 116 million", "USD 175 million"],
ans: 0,
en: "After-tax annual cash flow = 50 x (1 - 0.15) = 42.5 million. The 6-year annuity factor at 12% = [1 - 1.12^-6] / 0.12 = 4.1114. PV of inflows = 42.5 x 4.1114 = 174.7 million. NPV = 174.7 - 90 = 84.7, about USD 85 million.",
vi: "Dòng tiền sau thuế hằng năm = 50 x (1 - 0.15) = 42.5 triệu. Hệ số niên kim 6 năm ở 12% = [1 - 1.12^-6] / 0.12 = 4.1114. PV dòng vào = 42.5 x 4.1114 = 174.7 triệu. NPV = 174.7 - 90 = 84.7, khoảng USD 85 triệu."
},
{
q: "When determining an appropriate time horizon for financial projections of a company held in an equity portfolio, the analyst should consider:",
opts: ["the portfolio's turnover only", "the cyclicality of the company's industry only", "both the portfolio's turnover and the cyclicality of the company's industry"],
ans: 2,
en: "The projection horizon should reflect the expected holding period (proxied by portfolio turnover) AND the length of the industry's business cycle, so the forecast spans at least a full cycle. Both considerations matter.",
vi: "Khung thời gian dự phóng nên phản ánh kỳ nắm giữ dự kiến (đại diện bằng vòng quay danh mục) VÀ độ dài chu kỳ kinh doanh của ngành, để dự phóng bao trùm ít nhất một chu kỳ trọn vẹn. Cả hai yếu tố đều quan trọng."
},
{
q: "An analyst gathers the following: market value of debt USD 1,000 million; market value of equity USD 500 million; book value of debt USD 900 million; book value of equity USD 300 million; pre-tax cost of debt 4%; cost of equity 6%; marginal tax rate 30%. If interest is fully tax deductible, the WACC is closest to:",
opts: ["3.6%", "3.9%", "4.7%"],
ans: 1,
en: "Use market-value weights: wD = 1,000 / 1,500 = 0.667, wE = 500 / 1,500 = 0.333. WACC = 0.667 x 4% x (1 - 0.30) + 0.333 x 6% = 1.867% + 2.000% = 3.87%, about 3.9%.",
vi: "Dùng trọng số theo giá trị thị trường: wD = 1,000 / 1,500 = 0.667, wE = 500 / 1,500 = 0.333. WACC = 0.667 x 4% x (1 - 0.30) + 0.333 x 6% = 1.867% + 2.000% = 3.87%, khoảng 3.9%."
},
{
q: "The regulation of economic activity over time is associated with:",
opts: ["fiscal policy only", "monetary policy only", "both fiscal policy and monetary policy"],
ans: 2,
en: "Both fiscal policy (government spending and taxation) and monetary policy (interest rates and money supply) are used to regulate the level of economic activity over time. They are the two primary macroeconomic policy tools.",
vi: "Cả chính sách tài khóa (chi tiêu chính phủ và thuế) lẫn chính sách tiền tệ (lãi suất và cung tiền) đều được dùng để điều tiết mức hoạt động kinh tế theo thời gian. Đó là hai công cụ chính sách vĩ mô chủ yếu."
},
{
q: "An analyst gathers the following one-period continuously compounded returns: r for period 0 to 1 is 4.2%; r for 1 to 2 is 3.0%; r for 2 to 3 is -1.0%. The continuously compounded return from time 0 to time 3 is closest to:",
opts: ["6.07%", "6.20%", "6.25%"],
ans: 1,
en: "Continuously compounded returns are additive across periods: 4.2% + 3.0% + (-1.0%) = 6.2%. No compounding adjustment is needed because log returns simply sum.",
vi: "Lợi suất ghép liên tục cộng dồn qua các kỳ: 4.2% + 3.0% + (-1.0%) = 6.2%. Không cần điều chỉnh ghép lãi vì log return chỉ đơn giản là cộng lại."
},
{
q: "An analyst runs a simple linear regression to test whether variation in the demand for corn explains variation in the supply of wheat. In this model, the demand for corn is a(n):",
opts: ["indicator variable", "explained variable", "independent variable"],
ans: 2,
en: "The variable doing the explaining is the independent (explanatory) variable — here, the demand for corn. The supply of wheat is the dependent (explained) variable. An indicator variable is a 0/1 dummy, which does not apply.",
vi: "Biến làm nhiệm vụ giải thích là biến độc lập (giải thích) — ở đây là cầu ngô. Cung lúa mì là biến phụ thuộc (được giải thích). Indicator variable là biến giả 0/1, không áp dụng ở đây."
},
{
q: "A company must disclose, for each class of long-lived assets, the amount of impairment losses recognized in the period and where those losses are recognized in the financial statements under:",
opts: ["IFRS only", "US GAAP only", "both IFRS and US GAAP"],
ans: 2,
en: "Both IFRS and US GAAP require disclosure, by class of asset, of impairment losses recognized during the period and the line item(s) of the income statement in which they are included.",
vi: "Cả IFRS lẫn US GAAP đều yêu cầu công bố, theo từng nhóm tài sản, các khoản lỗ suy giảm ghi nhận trong kỳ và (các) chỉ tiêu trên báo cáo kết quả kinh doanh nơi chúng được đưa vào."
},
{
q: "A country that is in fiscal balance and has a trade surplus will most likely:",
opts: ["sell assets to foreigners to reduce the imbalance", "increase the imbalance by lending to foreign countries", "have an excess of domestic saving relative to investment spending"],
ans: 2,
en: "From national accounts, (S - I) + (T - G) = (X - M). With a balanced budget (T - G = 0) and a trade surplus (X - M > 0), it follows that S - I > 0 — domestic saving exceeds domestic investment.",
vi: "Từ hệ thống tài khoản quốc gia, (S - I) + (T - G) = (X - M). Với ngân sách cân bằng (T - G = 0) và thặng dư thương mại (X - M > 0), suy ra S - I > 0 — tiết kiệm trong nước vượt đầu tư trong nước."
},
{
q: "Which change to a management compensation package would most likely make management MORE risk averse in its corporate decision making?",
opts: ["Decreasing the length of management's tenure", "Eliminating stock grants and options from management compensation", "Tying management compensation to the size of the company's business"],
ans: 1,
en: "Stock options give managers convex, upside-heavy payoffs that encourage risk-taking. Removing grants and options strips away that upside incentive, so managers focus on protecting their fixed pay and become more risk averse.",
vi: "Quyền chọn cổ phiếu mang lại cho ban lãnh đạo khoản lợi lồi, nghiêng về mặt tăng, khuyến khích chấp nhận rủi ro. Loại bỏ cổ phiếu thưởng và quyền chọn xóa đi động cơ tăng đó, nên ban lãnh đạo tập trung bảo vệ lương cố định và trở nên e ngại rủi ro hơn."
},
{
q: "Members of a company's board of directors are most likely required to:",
opts: ["report to the company's CEO", "display loyalty to the company", "work for the company or the industry in which the company operates"],
ans: 1,
en: "Directors owe a fiduciary duty of loyalty to the company and its shareholders. To remain effective and independent they generally do NOT report to the CEO, and independence is enhanced when they are not employees or industry insiders.",
vi: "Thành viên HĐQT có nghĩa vụ ủy thác trung thành với công ty và cổ đông. Để giữ hiệu quả và độc lập, họ thường KHÔNG báo cáo cho CEO, và tính độc lập được tăng cường khi họ không phải nhân viên hay người trong ngành."
},
{
q: "An analyst gathers the following about a company's common stock in Year 1: 1 January 200,000 shares outstanding; 1 June 50,000 shares issued; 1 August a two-for-one stock split; 31 December 500,000 shares outstanding. To calculate EPS for Year 1, the weighted average number of shares outstanding is closest to:",
opts: ["350,000", "375,000", "458,332"],
ans: 2,
en: "A stock split is applied retroactively to all shares outstanding before the split. Split-adjusted: 400,000 shares for Jan-May (5 months) and 500,000 for Jun-Dec (7 months). Weighted average = (400,000 x 5 + 500,000 x 7) / 12 = 5,500,000 / 12 = 458,333.",
vi: "Chia tách cổ phiếu được áp dụng hồi tố cho mọi cổ phiếu đang lưu hành trước ngày tách. Sau điều chỉnh tách: 400,000 cổ phiếu cho Jan-May (5 tháng) và 500,000 cho Jun-Dec (7 tháng). Bình quân gia quyền = (400,000 x 5 + 500,000 x 7) / 12 = 5,500,000 / 12 = 458,333."
},
{
q: "The most appropriate accounting treatment of goodwill is that it be:",
opts: ["amortized over its useful life", "tested annually for impairment", "fully expensed at the time of acquisition"],
ans: 1,
en: "Under both IFRS and US GAAP, goodwill is not amortized. Instead it is carried at cost and tested at least annually for impairment (and whenever indicators of impairment arise).",
vi: "Theo cả IFRS lẫn US GAAP, goodwill không được khấu hao. Thay vào đó nó được ghi theo giá gốc và kiểm tra suy giảm giá trị ít nhất hằng năm (và bất cứ khi nào có dấu hiệu suy giảm)."
},
{
q: "A corporate takeover mechanism by which shareholders are persuaded to vote for a group seeking a controlling position on a company's board of directors best defines a:",
opts: ["tender offer", "proxy contest", "hostile takeover"],
ans: 1,
en: "In a proxy contest (proxy fight), an activist or acquiring group solicits shareholders' proxy votes to install its own nominees on the board. A tender offer buys shares directly, and a hostile takeover is the broader category of an unwelcome acquisition.",
vi: "Trong proxy contest (proxy fight), một nhóm nhà đầu tư chủ động hoặc bên thâu tóm vận động phiếu ủy quyền của cổ đông để đưa người của mình vào HĐQT. Tender offer là mua cổ phiếu trực tiếp, và hostile takeover là nhóm rộng hơn chỉ vụ thâu tóm không được chào đón."
},
{
q: "If all observations in a data set have distinct positive values, which of the following relationships holds?",
opts: ["Arithmetic mean is less than the harmonic mean, which is less than the geometric mean", "Geometric mean is less than the arithmetic mean, which is less than the harmonic mean", "Harmonic mean is less than the geometric mean, which is less than the arithmetic mean"],
ans: 2,
en: "For a set of positive numbers, harmonic mean is less than or equal to geometric mean is less than or equal to arithmetic mean, with equality only when all values are identical. Because the values here are distinct, the inequalities are strict: HM < GM < AM.",
vi: "Với một tập số dương, harmonic mean nhỏ hơn hoặc bằng geometric mean nhỏ hơn hoặc bằng arithmetic mean, chỉ bằng nhau khi mọi giá trị giống hệt. Vì các giá trị ở đây khác biệt, bất đẳng thức là nghiêm ngặt: HM < GM < AM."
},
{
q: "An analyst gathers the following: debt-to-equity ratio based on market value 43%; debt-to-equity ratio based on book value 52%. The weight of debt the analyst should use when estimating the company's target capital structure is closest to:",
opts: ["30%", "43%", "52%"],
ans: 0,
en: "Market values are used for capital-structure weights. With D/E = 0.43, the weight of debt = D / (D + E) = 0.43 / 1.43 = 0.30, or about 30%.",
vi: "Trọng số cấu trúc vốn dùng giá trị thị trường. Với D/E = 0.43, trọng số nợ = D / (D + E) = 0.43 / 1.43 = 0.30, tức khoảng 30%."
},
{
q: "A portfolio holds two stocks with equal weights. The variance of returns for each stock is 100 (percent squared) and the covariance between them is 50 (percent squared). The portfolio's standard deviation of returns is closest to:",
opts: ["7.9%", "8.7%", "75.0%"],
ans: 1,
en: "Portfolio variance = 0.5^2(100) + 0.5^2(100) + 2(0.5)(0.5)(50) = 25 + 25 + 25 = 75 percent squared. The standard deviation = square root of 75 = 8.66%, about 8.7%.",
vi: "Phương sai danh mục = 0.5^2(100) + 0.5^2(100) + 2(0.5)(0.5)(50) = 25 + 25 + 25 = 75 (phần trăm bình phương). Độ lệch chuẩn = căn bậc hai của 75 = 8.66%, khoảng 8.7%."
},
{
q: "In capital investment decisions, an abandonment option is most likely a type of:",
opts: ["sizing option", "timing option", "flexibility option"],
ans: 2,
en: "An abandonment option lets management exit a project early if outcomes are poor. Along with expansion and other embedded real options, it is a form of flexibility option — the ability to alter a project after it begins.",
vi: "Quyền chọn từ bỏ (abandonment) cho phép ban lãnh đạo thoát dự án sớm nếu kết quả kém. Cùng với quyền chọn mở rộng và các real option gắn kèm khác, nó là một dạng flexibility option — khả năng thay đổi dự án sau khi đã bắt đầu."
},
{
q: "Which of the following available sources of capital is taken into account when calculating the WACC of an unlevered company?",
opts: ["Preferred stock only", "Common stock only", "Both preferred stock and common stock"],
ans: 1,
en: "An unlevered company is financed entirely by common equity — it uses no debt and, in this framework, no preferred stock (preferred, like debt, is a fixed senior claim that constitutes a form of leverage). So only the cost of common equity enters its WACC.",
vi: "Công ty không dùng đòn bẩy (unlevered) được tài trợ hoàn toàn bằng vốn cổ phần thường — không dùng nợ và, trong khung này, không dùng cổ phiếu ưu đãi (preferred, như nợ, là khoản đòi hỏi ưu tiên cố định, cấu thành một dạng đòn bẩy). Vậy chỉ chi phí vốn cổ phần thường đi vào WACC của nó."
},
{
q: "An analyst gathers the following (in EUR thousands) about an electronics manufacturer: cost of sales Year 2 1,250, Year 1 1,000; cost of inventory Year 2 225, Year 1 375; net realizable value of inventory Year 2 300, Year 1 325. Changes to the allowance for obsolescence are already reflected in cost of sales. The inventory turnover based on average inventory for Year 2 is closest to:",
opts: ["4.0", "4.2", "4.5"],
ans: 2,
en: "Inventory is reported at the lower of cost or NRV. Year 2 = min(225, 300) = 225; Year 1 = min(375, 325) = 325. Average inventory = (225 + 325) / 2 = 275. Inventory turnover = 1,250 / 275 = 4.5.",
vi: "Hàng tồn kho được ghi theo giá thấp hơn giữa cost và NRV. Năm 2 = min(225, 300) = 225; Năm 1 = min(375, 325) = 325. Tồn kho bình quân = (225 + 325) / 2 = 275. Vòng quay hàng tồn kho = 1,250 / 275 = 4.5."
},
{
q: "The long-run marginal cost schedule serves as a firm's supply curve under a(n):",
opts: ["oligopoly market", "perfectly competitive market", "monopolistically competitive market"],
ans: 1,
en: "In perfect competition, the firm is a price taker and supplies where price equals marginal cost, so its marginal cost curve (above minimum average cost) is its supply curve. Firms with market power do not have a supply curve defined this way.",
vi: "Trong cạnh tranh hoàn hảo, doanh nghiệp là người chấp nhận giá và cung ứng tại điểm giá bằng chi phí biên, nên đường chi phí biên (phía trên mức chi phí trung bình tối thiểu) chính là đường cung. Doanh nghiệp có sức mạnh thị trường không có đường cung xác định theo cách này."
},
{
q: "Fiat money is currency that is:",
opts: ["legal tender", "not created by a central bank", "convertible by law into gold or another commodity"],
ans: 0,
en: "Fiat money is designated legal tender by government decree. It is created by the central bank and is not backed by or convertible into any commodity such as gold — its value rests on public confidence and legal status.",
vi: "Tiền pháp định (fiat money) được nhà nước tuyên bố là phương tiện thanh toán hợp pháp (legal tender). Nó do ngân hàng trung ương tạo ra và không được bảo chứng hay chuyển đổi thành hàng hóa như vàng — giá trị dựa trên niềm tin của công chúng và địa vị pháp lý."
},
{
q: "The reversal of an inventory write-down:",
opts: ["reduces cost of sales", "increases other comprehensive income", "is permitted under both IFRS and US GAAP"],
ans: 0,
en: "Under IFRS, if the value of previously written-down inventory recovers, the write-down may be reversed (up to the original cost) and recognized as a reduction in cost of sales. US GAAP prohibits such reversals, so it is not permitted under both.",
vi: "Theo IFRS, nếu giá trị hàng tồn kho đã ghi giảm phục hồi, khoản ghi giảm có thể được hoàn nhập (tối đa đến giá gốc) và ghi nhận như một khoản giảm cost of sales. US GAAP cấm hoàn nhập như vậy, nên không phải cả hai đều cho phép."
},
{
q: "An asset earns the following monthly returns: January -30%; February 10%; March 10%; April 10%. The sample skewness is:",
opts: ["negative", "zero", "positive"],
ans: 0,
en: "The mean is (-30 + 10 + 10 + 10) / 4 = 0. The distribution has one large value far below the mean (-30) and three equal values above it, creating a long LEFT tail. A long left tail means negative skewness.",
vi: "Trung bình là (-30 + 10 + 10 + 10) / 4 = 0. Phân phối có một giá trị lớn nằm rất xa dưới trung bình (-30) và ba giá trị bằng nhau ở trên, tạo ra đuôi TRÁI dài. Đuôi trái dài nghĩa là độ lệch âm (negative skewness)."
},
{
q: "Which statement about the use of financial ratios is most accurate?",
opts: ["Each financial ratio is relevant to all industries", "Financial ratios can be affected by the phase of the business cycle", "Aggregate financial ratios are useful for companies operating in different lines of business"],
ans: 1,
en: "Ratios move with the business cycle — for example, turnover and margins differ in expansions versus recessions. Not every ratio is relevant to every industry, and consolidated ratios for a company spanning very different businesses can be misleading rather than useful.",
vi: "Các tỷ số biến động theo chu kỳ kinh doanh — ví dụ vòng quay và biên lợi nhuận khác nhau giữa lúc mở rộng và suy thoái. Không phải tỷ số nào cũng phù hợp với mọi ngành, và tỷ số hợp nhất của công ty trải trên nhiều mảng rất khác nhau có thể gây hiểu lầm hơn là hữu ích."
},
{
q: "A decrease in which of the following ratios decreases the cash conversion cycle?",
opts: ["Payables turnover", "Inventory turnover", "Receivables turnover"],
ans: 0,
en: "Cash conversion cycle = days of receivables + days of inventory - days of payables. A lower payables turnover raises days of payables (365 / turnover), and because days of payables is subtracted, the cash conversion cycle falls.",
vi: "Chu kỳ chuyển đổi tiền mặt = ngày phải thu + ngày tồn kho - ngày phải trả. Vòng quay phải trả thấp hơn làm tăng số ngày phải trả (365 / vòng quay), và vì số ngày phải trả bị trừ đi, chu kỳ chuyển đổi tiền mặt giảm."
},
{
q: "Frequent changes to commercial bank reserve requirements are most likely:",
opts: ["disruptive for banks", "conducive to high money growth", "common in developed countries"],
ans: 0,
en: "Reserve requirements are a blunt tool; changing them frequently forces banks to make large, costly adjustments to their operations, so it is disruptive. Central banks in developed economies rarely adjust reserve requirements, preferring open market operations.",
vi: "Tỷ lệ dự trữ bắt buộc là công cụ 'thô'; thay đổi thường xuyên buộc ngân hàng phải điều chỉnh lớn và tốn kém trong hoạt động, nên gây xáo trộn. Ngân hàng trung ương ở các nền kinh tế phát triển hiếm khi điều chỉnh dự trữ bắt buộc, ưu tiên nghiệp vụ thị trường mở."
},
{
q: "In the long run, a perfectly competitive firm's marginal cost is:",
opts: ["less than its average cost", "equal to its average cost", "greater than its average cost"],
ans: 1,
en: "In long-run competitive equilibrium, firms earn zero economic profit and produce at the minimum of average total cost, where marginal cost equals average total cost. So MC equals AC in the long run.",
vi: "Trong cân bằng dài hạn cạnh tranh, doanh nghiệp có lợi nhuận kinh tế bằng 0 và sản xuất tại điểm chi phí trung bình tối thiểu, nơi chi phí biên bằng chi phí trung bình. Vậy trong dài hạn MC bằng AC."
},
{
q: "With respect to Big Data, which of the following is best classified as structured data?",
opts: ["SQL tables", "HTML code", "Video messages"],
ans: 0,
en: "Structured data is organized in a predefined format of rows and columns, exactly as in SQL/relational tables. HTML is semi-structured (tagged but not tabular), and video is unstructured.",
vi: "Dữ liệu có cấu trúc được tổ chức theo định dạng dòng-cột định sẵn, đúng như bảng SQL/quan hệ. HTML là bán cấu trúc (có thẻ nhưng không dạng bảng), và video là phi cấu trúc."
},
{
q: "An analyst gathers the following (in EUR thousands) about equipment: carrying amount prior to impairment 20,000; undiscounted expected future cash flows 19,000; present value of expected future cash flows 17,000; fair value if sold 18,000; costs to sell 2,000. Based only on this information, the impairment loss under IFRS is:",
opts: ["less than the impairment loss under US GAAP", "the same as the impairment loss under US GAAP", "greater than the impairment loss under US GAAP"],
ans: 2,
en: "IFRS: recoverable amount = higher of value in use (17,000) and fair value less costs to sell (18,000 - 2,000 = 16,000) = 17,000; impairment = 20,000 - 17,000 = 3,000. US GAAP: undiscounted cash flows (19,000) are below carrying amount, so impairment = carrying - fair value = 20,000 - 18,000 = 2,000. IFRS loss (3,000) is greater.",
vi: "IFRS: recoverable amount = giá trị lớn hơn giữa value in use (17,000) và fair value trừ chi phí bán (18,000 - 2,000 = 16,000) = 17,000; impairment = 20,000 - 17,000 = 3,000. US GAAP: dòng tiền chưa chiết khấu (19,000) thấp hơn carrying amount, nên impairment = carrying - fair value = 20,000 - 18,000 = 2,000. Lỗ theo IFRS (3,000) lớn hơn."
},
{
q: "When revenue is recognized for a contract with separate performance obligations that have not all been met, and no consideration has yet been received, the seller's balance sheet will reflect a:",
opts: ["receivable", "contract asset", "contract liability"],
ans: 1,
en: "When the seller has recognized revenue but its right to payment is still conditional on satisfying remaining performance obligations, it records a contract asset. A receivable arises only once the right to payment is unconditional (dependent only on the passage of time).",
vi: "Khi người bán đã ghi nhận doanh thu nhưng quyền nhận thanh toán vẫn phụ thuộc vào việc hoàn thành các nghĩa vụ còn lại, họ ghi nhận một contract asset. Receivable chỉ phát sinh khi quyền nhận thanh toán là vô điều kiện (chỉ còn phụ thuộc thời gian trôi qua)."
},
{
q: "An analyst gathers the following return observations: 1.4%, 2.7%, 4.1%, 4.8%, 6.1%, 6.9%, 8.3%, 9.0%. The 30th percentile is closest to:",
opts: ["2.7%", "3.3%", "3.7%"],
ans: 2,
en: "With n = 8, the location of the 30th percentile is (n + 1)(30/100) = 9 x 0.3 = 2.7, i.e. 0.7 of the way from the 2nd to the 3rd value. Interpolating: 2.7 + 0.7(4.1 - 2.7) = 2.7 + 0.98 = 3.68%, about 3.7%.",
vi: "Với n = 8, vị trí của bách phân vị thứ 30 là (n + 1)(30/100) = 9 x 0.3 = 2.7, tức 0.7 quãng đường từ giá trị thứ 2 đến thứ 3. Nội suy: 2.7 + 0.7(4.1 - 2.7) = 2.7 + 0.98 = 3.68%, khoảng 3.7%."
},
{
q: "In a simple linear regression, the standard error of the estimate is also known as the:",
opts: ["mean square error", "sum of squares error", "root mean square error"],
ans: 2,
en: "The standard error of the estimate is the square root of the mean square error (of the residuals), which is precisely the root mean square error. It measures the typical distance of observations from the regression line.",
vi: "Sai số chuẩn của ước lượng (SEE) là căn bậc hai của mean square error (của phần dư), tức chính là root mean square error. Nó đo khoảng cách điển hình của các quan sát tới đường hồi quy."
},
{
q: "According to the Modigliani-Miller propositions with no taxes, an increase in financial leverage will increase the cost of equity and:",
opts: ["decrease the WACC", "have no effect on the WACC", "increase the WACC"],
ans: 1,
en: "Under MM with no taxes, capital structure is irrelevant to firm value and WACC. Adding leverage raises the cost of equity just enough to offset the greater use of cheaper debt, leaving WACC unchanged.",
vi: "Theo MM không có thuế, cấu trúc vốn không ảnh hưởng đến giá trị doanh nghiệp và WACC. Thêm đòn bẩy làm chi phí vốn cổ phần tăng vừa đủ để bù cho việc dùng nhiều nợ rẻ hơn, khiến WACC không đổi."
},
{
q: "If a deferred tax asset was recognized in the past but the criterion that economic benefits will be realized is no longer met at the current balance sheet date, under US GAAP the company should:",
opts: ["perform an impairment test", "reverse the deferred tax asset", "establish a valuation allowance"],
ans: 2,
en: "Under US GAAP, when it becomes more likely than not that a deferred tax asset will not be realized, the company records a valuation allowance that reduces the DTA (rather than derecognizing it). The allowance can be reversed if realization later becomes probable.",
vi: "Theo US GAAP, khi khả năng không thu được lợi ích của một tài sản thuế hoãn lại trở nên cao hơn (more likely than not), công ty lập một valuation allowance làm giảm DTA (thay vì xóa sổ). Khoản dự phòng này có thể được hoàn nhập nếu sau đó khả năng thu hồi trở lại."
},
{
q: "In an economy with long-run expected inflation of 3% and a real trend rate of economic growth of 2%, the neutral policy rate is closest to:",
opts: ["1%", "3%", "5%"],
ans: 2,
en: "The neutral (neither expansionary nor contractionary) policy rate is approximately the real trend growth rate plus expected inflation: 2% + 3% = 5%.",
vi: "Lãi suất chính sách trung tính (không nới lỏng cũng không thắt chặt) xấp xỉ bằng tốc độ tăng trưởng thực xu hướng cộng lạm phát kỳ vọng: 2% + 3% = 5%."
},
{
q: "Which of the following is the first step in the standard process of hypothesis testing?",
opts: ["Collect the data", "State the hypotheses", "Specify the level of significance"],
ans: 1,
en: "Hypothesis testing begins by stating the null and alternative hypotheses. Only after the hypotheses are framed does one choose the test, set the significance level, and collect and analyze the data.",
vi: "Kiểm định giả thuyết bắt đầu bằng việc phát biểu giả thuyết không (null) và giả thuyết đối (alternative). Chỉ sau khi đã đặt giả thuyết mới chọn kiểm định, ấn định mức ý nghĩa, rồi thu thập và phân tích dữ liệu."
},
{
q: "Which of the following events is most likely to lead management to make biased accounting choices?",
opts: ["Changing the company's CEO", "Changing the company's audit firm", "Changing the company's fiscal year"],
ans: 0,
en: "A change of CEO creates an incentive for a 'big bath' — the incoming CEO may overstate current-period losses (blaming the predecessor) to make future results look better by comparison. Changing auditors or fiscal year does not create the same earnings-management incentive.",
vi: "Thay CEO tạo động cơ 'big bath' — CEO mới có thể phóng đại lỗ của kỳ hiện tại (đổ cho người tiền nhiệm) để kết quả tương lai trông tốt hơn khi so sánh. Thay công ty kiểm toán hay năm tài chính không tạo động cơ điều chỉnh lợi nhuận tương tự."
},
{
q: "A lessor would derecognize the underlying leased asset from its balance sheet and recognize a lease receivable for:",
opts: ["a finance lease only", "an operating lease only", "both a finance lease and an operating lease"],
ans: 0,
en: "For a finance (sales-type) lease, the lessor removes the asset and records a lease receivable, effectively treating the arrangement as a sale. For an operating lease the lessor keeps the asset on its books and recognizes lease income over time.",
vi: "Với finance lease (sales-type), bên cho thuê xóa tài sản khỏi bảng và ghi nhận một khoản phải thu cho thuê, coi giao dịch như một vụ bán. Với operating lease, bên cho thuê giữ tài sản trên sổ và ghi nhận thu nhập cho thuê theo thời gian."
},
{
q: "All else equal, in periods of rising prices and constant inventory quantities, FIFO most likely results in a higher:",
opts: ["total asset turnover than LIFO", "working capital turnover than LIFO", "days of inventory on hand than LIFO"],
ans: 2,
en: "With rising prices, FIFO leaves newer, higher-cost units in ending inventory (higher inventory, lower COGS). Higher inventory and lower COGS make inventory turnover lower and therefore days of inventory on hand HIGHER than under LIFO. Higher assets and working capital make the two turnover ratios lower, not higher.",
vi: "Khi giá tăng, FIFO để lại các đơn vị mới, giá cao trong tồn kho cuối (tồn kho cao hơn, COGS thấp hơn). Tồn kho cao và COGS thấp làm vòng quay tồn kho thấp hơn nên số ngày tồn kho CAO hơn so với LIFO. Tài sản và vốn lưu động cao hơn khiến hai tỷ số vòng quay kia thấp hơn chứ không cao hơn."
},
{
q: "An analyst gathers the following: net profit margin Year 2 3.6%, Year 1 2.5%; total asset turnover Year 2 1.0, Year 1 1.5; financial leverage Year 2 1.25, Year 1 1.2. Based only on this information, from Year 1 to Year 2 the company's ROE:",
opts: ["decreased", "remained the same", "increased"],
ans: 1,
en: "Using the DuPont identity, ROE = net profit margin x total asset turnover x financial leverage. Year 1 = 2.5% x 1.5 x 1.2 = 4.5%; Year 2 = 3.6% x 1.0 x 1.25 = 4.5%. ROE is unchanged.",
vi: "Dùng đẳng thức DuPont, ROE = biên lợi nhuận ròng x vòng quay tổng tài sản x đòn bẩy tài chính. Năm 1 = 2.5% x 1.5 x 1.2 = 4.5%; Năm 2 = 3.6% x 1.0 x 1.25 = 4.5%. ROE không đổi."
},
{
q: "Which of the following is a secondary source of liquidity?",
opts: ["Free cash flow", "Dividend suspension", "Short-term investment portfolio"],
ans: 1,
en: "Primary sources of liquidity are routine, low-cost options such as cash balances, short-term funds, and operating cash flow. Secondary sources typically signal financial stress and affect operations — for example, suspending dividends, renegotiating debt, or liquidating assets.",
vi: "Nguồn thanh khoản sơ cấp là các lựa chọn thường xuyên, chi phí thấp như số dư tiền mặt, vốn ngắn hạn và dòng tiền hoạt động. Nguồn thứ cấp thường báo hiệu căng thẳng tài chính và ảnh hưởng đến hoạt động — ví dụ tạm ngừng cổ tức, tái đàm phán nợ, hay thanh lý tài sản."
},
{
q: "An analyst gathers the following (in GBP millions): cost of goods sold 6,000; increase in inventory 3,000; increase in accounts payable 2,500. Cash paid to suppliers (in GBP millions) is closest to:",
opts: ["6,500", "9,000", "11,500"],
ans: 0,
en: "Purchases = COGS + increase in inventory = 6,000 + 3,000 = 9,000. Cash paid to suppliers = purchases - increase in accounts payable = 9,000 - 2,500 = 6,500.",
vi: "Mua hàng = COGS + mức tăng tồn kho = 6,000 + 3,000 = 9,000. Tiền trả cho nhà cung cấp = mua hàng - mức tăng khoản phải trả = 9,000 - 2,500 = 6,500."
},
{
q: "If practical, retrospective application is required for a change in:",
opts: ["accounting policies only", "accounting estimates only", "both accounting policies and accounting estimates"],
ans: 0,
en: "A change in accounting policy is applied retrospectively (restating prior periods) when practical. A change in accounting estimate is applied prospectively — only current and future periods are affected — so retrospective treatment applies to policies only.",
vi: "Thay đổi chính sách kế toán được áp dụng hồi tố (trình bày lại các kỳ trước) khi khả thi. Thay đổi ước tính kế toán được áp dụng phi hồi tố (prospective) — chỉ ảnh hưởng kỳ hiện tại và tương lai — nên xử lý hồi tố chỉ áp dụng cho chính sách."
},
{
q: "An investment makes ten annual payments of USD 10,000, with the first payment made today. If the annual discount rate is 6%, the present value of the investment is closest to:",
opts: ["USD 72,098", "USD 73,601", "USD 78,017"],
ans: 2,
en: "This is an annuity due (payments at the beginning of each period). The ordinary-annuity present value = 10,000 x [1 - 1.06^-10] / 0.06 = 73,601. Multiplying by (1 + 0.06) for the annuity due gives 73,601 x 1.06 = 78,017.",
vi: "Đây là annuity due (thanh toán đầu mỗi kỳ). PV của annuity thường = 10,000 x [1 - 1.06^-10] / 0.06 = 73,601. Nhân với (1 + 0.06) cho annuity due được 73,601 x 1.06 = 78,017."
},
{
q: "All else equal, cash dividends paid to common shareholders result in a:",
opts: ["lower ROA than if no dividends were paid", "higher ROE than if no dividends were paid", "lower net profit margin than if no dividends were paid"],
ans: 1,
en: "Dividends reduce cash (assets) and retained earnings (equity) but do not change net income. With smaller equity, ROE (net income / equity) is higher; with smaller assets, ROA is higher, not lower; and net profit margin is unchanged since neither income nor revenue is affected.",
vi: "Cổ tức làm giảm tiền mặt (tài sản) và lợi nhuận giữ lại (vốn chủ) nhưng không đổi lợi nhuận ròng. Với vốn chủ nhỏ hơn, ROE (lợi nhuận ròng / vốn chủ) cao hơn; với tài sản nhỏ hơn, ROA cao hơn chứ không thấp hơn; và biên lợi nhuận ròng không đổi vì cả thu nhập lẫn doanh thu đều không bị ảnh hưởng."
},
{
q: "The following ten observations are a sample drawn from an approximately normal population: -31, -14, 3, -18, 34, 20, -6, 9, 7, -16. The sample standard deviation is closest to:",
opts: ["17.56", "18.58", "19.59"],
ans: 2,
en: "The sample mean is -1.2. Summing the squared deviations gives 3,453.6. Dividing by n - 1 = 9 gives a sample variance of 383.7, and the square root is 19.59.",
vi: "Trung bình mẫu là -1.2. Cộng bình phương các độ lệch được 3,453.6. Chia cho n - 1 = 9 được phương sai mẫu 383.7, và căn bậc hai là 19.59."
},
{
q: "The velocity of geopolitical risk is best described as the:",
opts: ["pace of its impact on the investor's portfolio", "frequency of its impact on the investor's portfolio", "magnitude of its impact on the investor's portfolio"],
ans: 0,
en: "Velocity refers to how quickly (the pace at which) a geopolitical risk affects a portfolio. Frequency is how often risks occur, and magnitude is how large the impact is — both distinct from velocity.",
vi: "Velocity chỉ tốc độ (nhịp độ) mà một rủi ro địa chính trị tác động đến danh mục. Frequency là mức độ thường xuyên rủi ro xảy ra, và magnitude là độ lớn của tác động — cả hai đều khác với velocity."
},
{
q: "If the USD/EUR (amount of USD per 1 EUR) spot rate is 1.2055 and the 12-month forward points are 21.3, the 12-month forward rate is closest to:",
opts: ["1.20337", "1.20763", "1.22680"],
ans: 1,
en: "Forward points are quoted in units of the fourth decimal (pips). Forward rate = 1.2055 + 21.3/10,000 = 1.2055 + 0.00213 = 1.20763.",
vi: "Forward points được yết theo đơn vị chữ số thập phân thứ tư (pip). Tỷ giá forward = 1.2055 + 21.3/10,000 = 1.2055 + 0.00213 = 1.20763."
},
{
q: "An analyst gathers the following spot exchange rates: CAD/USD 1.2930 (amount of CAD per 1 USD); AUD/USD 1.3245 (amount of AUD per 1 USD). The spot CAD/AUD (amount of CAD per 1 AUD) cross rate is closest to:",
opts: ["0.9762", "1.0244", "1.7126"],
ans: 0,
en: "CAD per AUD = (CAD per USD) / (AUD per USD) = 1.2930 / 1.3245 = 0.9762. The common USD term cancels, leaving the CAD/AUD cross rate.",
vi: "CAD trên mỗi AUD = (CAD trên mỗi USD) / (AUD trên mỗi USD) = 1.2930 / 1.3245 = 0.9762. Đơn vị USD chung triệt tiêu, còn lại tỷ giá chéo CAD/AUD."
}
]
});

window.CFA.mocktests.push({
name: "Mock Exam 4 — Session 2 (FI · Equity · Derivatives · Alternatives · PM)",
qs: [
{
q: "A measure of the sensitivity of a bond's price to a change in a specific maturity segment of the benchmark yield curve best defines:",
opts: ["key rate duration", "effective duration", "modified duration"],
ans: 0,
en: "Key rate (partial) duration measures price sensitivity to a yield change at one specific maturity point on the curve, holding other maturities fixed. Effective and modified duration measure sensitivity to a parallel shift across the whole curve.",
vi: "Key rate duration (partial duration) đo độ nhạy của giá với thay đổi lợi suất tại một điểm kỳ hạn cụ thể trên đường cong, giữ nguyên các kỳ hạn khác. Effective và modified duration đo độ nhạy với dịch chuyển song song của toàn bộ đường cong."
},
{
q: "An analyst assumes that a company's market share gains will decline smoothly to zero over the next five years. This forecast is best described as a:",
opts: ["discretionary forecast of a top-down revenue driver", "historical base rates and convergence forecast of a top-down revenue driver", "historical base rates and convergence forecast of a bottom-up revenue driver"],
ans: 1,
en: "Market share is a top-down revenue driver (it starts from total market size). Assuming the incremental gains fade smoothly to zero is a convergence (mean-reversion toward a base rate) approach, not a bespoke discretionary judgment.",
vi: "Thị phần là yếu tố dẫn dắt doanh thu theo hướng top-down (bắt đầu từ quy mô thị trường tổng). Giả định phần tăng thêm nhạt dần đều về 0 là cách tiếp cận hội tụ (convergence, hồi quy về base rate), không phải phán đoán tùy ý (discretionary) riêng lẻ."
},
{
q: "A portfolio's investment strategy relies on a particular element of the tax code to produce superior after-tax returns for high-net-worth individuals. Because of this strategy, the portfolio most likely faces a high level of:",
opts: ["legal risk", "model risk", "compliance risk"],
ans: 2,
en: "Depending on a specific provision of the tax code exposes the strategy to the risk that laws or regulations change and eliminate the benefit — this is compliance (regulatory) risk. Legal risk concerns litigation, and model risk concerns flawed valuation or analytical models.",
vi: "Phụ thuộc vào một điều khoản cụ thể của luật thuế khiến chiến lược chịu rủi ro luật hoặc quy định thay đổi và xóa bỏ lợi ích — đó là compliance (regulatory) risk. Legal risk liên quan kiện tụng, còn model risk liên quan mô hình định giá hay phân tích sai."
},
{
q: "The expected return for a security equals the market's risk premium. If the risk-free rate is positive and the CAPM holds, the beta of the security is:",
opts: ["less than 1", "equal to 1", "greater than 1"],
ans: 0,
en: "CAPM: E(R) = Rf + beta(Rm - Rf). Setting E(R) = Rm - Rf gives beta = (Rm - 2Rf)/(Rm - Rf). With Rf positive, the numerator is smaller than the denominator, so beta is less than 1. (For example, Rf = 2%, Rm = 10% gives beta = 0.75.)",
vi: "CAPM: E(R) = Rf + beta(Rm - Rf). Đặt E(R) = Rm - Rf cho beta = (Rm - 2Rf)/(Rm - Rf). Với Rf dương, tử số nhỏ hơn mẫu số, nên beta nhỏ hơn 1. (Ví dụ Rf = 2%, Rm = 10% cho beta = 0.75.)"
},
{
q: "With regard to their investment in a pension plan, employees with defined contribution plans accept:",
opts: ["inflation risk only", "investment risk only", "both inflation and investment risks"],
ans: 2,
en: "In a defined contribution plan, the eventual benefit depends on how the invested contributions perform and on how inflation erodes their purchasing power, so the employee bears both investment and inflation risk. In a defined benefit plan the employer bears these risks.",
vi: "Trong quỹ hưu đóng góp xác định (DC), lợi ích cuối cùng phụ thuộc vào hiệu suất của các khoản đóng góp đã đầu tư và vào việc lạm phát bào mòn sức mua, nên người lao động chịu cả rủi ro đầu tư lẫn rủi ro lạm phát. Trong quỹ hưu lợi ích xác định (DB), người sử dụng lao động gánh các rủi ro này."
},
{
q: "Redemption regimes are a feature of:",
opts: ["covered bonds", "auto loan-backed securities", "commercial mortgage-backed securities"],
ans: 0,
en: "Covered bonds specify redemption regimes — hard bullet, soft bullet, or conditional pass-through — that govern what happens to scheduled payments if the issuer defaults or cannot pay at maturity. This is a distinguishing feature of covered bonds.",
vi: "Covered bond quy định các cơ chế hoàn trả (redemption regime) — hard bullet, soft bullet, hoặc conditional pass-through — điều chỉnh điều gì xảy ra với các khoản thanh toán theo lịch nếu bên phát hành vỡ nợ hoặc không thể trả khi đáo hạn. Đây là đặc điểm phân biệt của covered bond."
},
{
q: "Private equity securities most likely:",
opts: ["are highly illiquid", "trade on active secondary markets", "have market-determined quoted prices"],
ans: 0,
en: "Private equity securities are highly illiquid: there is no active secondary market and no continuous market-determined price. Investors typically commit capital for years and value holdings through periodic appraisals rather than live quotes.",
vi: "Chứng khoán private equity có tính thanh khoản rất thấp: không có thị trường thứ cấp sôi động và không có giá do thị trường xác định liên tục. Nhà đầu tư thường cam kết vốn trong nhiều năm và định giá qua các lần thẩm định định kỳ chứ không phải giá yết trực tiếp."
},
{
q: "An analyst gathers the following about a hedge fund: beginning-of-year AUM USD 100,000,000; annual gross return 15%; management fee (based on end-of-year AUM) 2%; incentive fee 20%; hard hurdle rate 5%. If the incentive fee is based on returns net of the management fee, total fees for the year are closest to:",
opts: ["USD 3,840,000", "USD 4,300,000", "USD 4,840,000"],
ans: 0,
en: "End-of-year gross value = 115M, so gain = 15M. Management fee = 2% x 115M = 2.3M. With a hard hurdle, the incentive fee applies only to the net return above the 5% hurdle: net-of-fee gain = 15M - 2.3M = 12.7M, less the 5M hurdle = 7.7M; incentive = 20% x 7.7M = 1.54M. Total = 2.3M + 1.54M = 3.84M.",
vi: "Giá trị gộp cuối năm = 115 triệu, nên lãi = 15 triệu. Phí quản lý = 2% x 115 triệu = 2.3 triệu. Với hard hurdle, phí thưởng chỉ áp dụng cho phần lợi nhuận ròng vượt hurdle 5%: lãi sau phí quản lý = 15 triệu - 2.3 triệu = 12.7 triệu, trừ hurdle 5 triệu = 7.7 triệu; phí thưởng = 20% x 7.7 triệu = 1.54 triệu. Tổng = 2.3 triệu + 1.54 triệu = 3.84 triệu."
},
{
q: "The price of a forward contract most likely:",
opts: ["decreases as the price of the underlying goes up", "is constant and set as part of the contract specifications", "increases as market risk increases"],
ans: 1,
en: "The forward PRICE is agreed at initiation and fixed for the life of the contract. It is the forward VALUE that changes over time as the underlying moves. Do not confuse the two.",
vi: "GIÁ forward được thỏa thuận lúc khởi tạo và cố định trong suốt vòng đời hợp đồng. Chính GIÁ TRỊ forward mới thay đổi theo thời gian khi tài sản cơ sở biến động. Đừng nhầm lẫn hai khái niệm."
},
{
q: "With respect to risk governance, which statement is most accurate?",
opts: ["With more use of technology, less time is required to test data and models", "Enterprise risk management requires that assets and liabilities be considered in isolation", "Both financial assets and human capital can be considered in an individual's risk allocation"],
ans: 2,
en: "An individual's total economic balance sheet includes human capital alongside financial assets, so both belong in the risk allocation. Enterprise risk management takes a holistic view (not isolation), and greater technology use does not reduce the need to test data and models.",
vi: "Bảng cân đối kinh tế tổng thể của một cá nhân bao gồm cả vốn con người (human capital) bên cạnh tài sản tài chính, nên cả hai đều thuộc phần phân bổ rủi ro. Enterprise risk management nhìn tổng thể (không tách rời), và dùng công nghệ nhiều hơn không làm giảm nhu cầu kiểm định dữ liệu và mô hình."
},
{
q: "Compared with unregulated markets, regulated markets are best characterized by:",
opts: ["higher transaction costs", "lower trading volumes", "reduced arbitrage opportunities"],
ans: 2,
en: "Regulation improves market integrity and efficiency, which narrows mispricing and reduces arbitrage opportunities. Regulation generally supports higher trading volumes and can lower transaction costs, not raise them.",
vi: "Quy định cải thiện tính liêm chính và hiệu quả của thị trường, làm thu hẹp định giá sai và giảm cơ hội arbitrage. Quy định nhìn chung hỗ trợ khối lượng giao dịch cao hơn và có thể làm giảm chi phí giao dịch, chứ không làm tăng."
},
{
q: "Challenges in constructing fixed-income indexes most likely include that:",
opts: ["there is a small number of securities", "securities are relatively illiquid compared to equities", "fixed-income markets are predominantly order-driven markets"],
ans: 1,
en: "Bonds are relatively illiquid and trade infrequently compared to equities, making pricing and index construction difficult. There is actually a very LARGE number of individual bond issues, and fixed-income trading is predominantly dealer/quote-driven, not order-driven.",
vi: "Trái phiếu tương đối kém thanh khoản và giao dịch không thường xuyên so với cổ phiếu, khiến việc định giá và xây dựng chỉ số khó khăn. Thực ra số lượng phát hành trái phiếu riêng lẻ RẤT LỚN, và giao dịch trái phiếu chủ yếu do dealer/quote điều khiển, không phải order-driven."
},
{
q: "The first date on which a buyer of shares is NOT entitled to an announced dividend is the:",
opts: ["declaration date", "ex-dividend date", "holder-of-record date"],
ans: 1,
en: "On and after the ex-dividend date, the shares trade without the right to the declared dividend, so a buyer on that date does not receive it. The declaration date is when the dividend is announced, and the holder-of-record date determines who is on the books.",
vi: "Từ ngày ex-dividend trở đi, cổ phiếu giao dịch không kèm quyền nhận cổ tức đã công bố, nên người mua vào ngày đó không nhận cổ tức. Declaration date là ngày công bố cổ tức, và holder-of-record date xác định ai có tên trên sổ."
},
{
q: "Commodity futures prices are most likely in backwardation when:",
opts: ["interest rates are high", "storage costs are high", "the convenience yield is high"],
ans: 2,
en: "Backwardation (futures price below spot) arises when the convenience yield — the benefit of holding the physical commodity — is high enough to exceed storage and financing costs. High interest rates and high storage costs push prices toward contango instead.",
vi: "Backwardation (giá tương lai thấp hơn giá giao ngay) xuất hiện khi convenience yield — lợi ích của việc nắm giữ hàng vật chất — đủ cao để vượt chi phí lưu kho và tài chính. Lãi suất cao và chi phí lưu kho cao lại đẩy giá về phía contango."
},
{
q: "In venture capital financing, seed-stage financing most likely supports:",
opts: ["initial commercial production and sales", "product development and/or marketing efforts", "transformation of an idea into a business plan"],
ans: 1,
en: "Seed-stage capital funds product development and early marketing to prove the concept. Transforming an idea into a business plan is the earlier angel/pre-seed stage, and initial commercial production and sales occur at the later early/start-up stage.",
vi: "Vốn giai đoạn seed tài trợ phát triển sản phẩm và tiếp thị ban đầu để chứng minh ý tưởng. Biến ý tưởng thành kế hoạch kinh doanh là giai đoạn sớm hơn (angel/pre-seed), còn sản xuất và bán hàng thương mại ban đầu diễn ra ở giai đoạn early/start-up muộn hơn."
},
{
q: "A put option sells for USD 4 with an exercise price of USD 58. What is the profit to the put buyer if the price of the underlying at expiration is USD 57?",
opts: ["-USD 3", "USD 1", "USD 3"],
ans: 0,
en: "The put's payoff = max(0, 58 - 57) = USD 1. The buyer paid USD 4 in premium, so profit = 1 - 4 = -USD 3.",
vi: "Payoff của put = max(0, 58 - 57) = 1 USD. Người mua đã trả 4 USD phí quyền chọn, nên lợi nhuận = 1 - 4 = -3 USD."
},
{
q: "Base-rate neglect is a type of:",
opts: ["hindsight bias", "endowment bias", "representativeness bias"],
ans: 2,
en: "Base-rate neglect — ignoring the underlying probability of a category in favor of superficial resemblance — is a form of representativeness bias, a cognitive information-processing error.",
vi: "Base-rate neglect — bỏ qua xác suất nền của một nhóm để chạy theo sự giống bề ngoài — là một dạng representativeness bias, một lỗi nhận thức trong xử lý thông tin."
},
{
q: "A mechanism that allows a hedge fund to temporarily restrict redemptions by all investors is known as a:",
opts: ["gate", "notice period", "lockup period"],
ans: 0,
en: "A gate lets the fund limit or suspend redemptions across all investors during stressed conditions. A lockup is the initial period during which a new investor cannot redeem, and a notice period is the advance warning required before a redemption.",
vi: "Gate cho phép quỹ giới hạn hoặc tạm ngừng rút vốn của tất cả nhà đầu tư trong điều kiện căng thẳng. Lockup là kỳ ban đầu mà nhà đầu tư mới chưa được rút, và notice period là thời gian báo trước cần thiết trước khi rút vốn."
},
{
q: "The partnership agreement of a private equity fund has no catch-up clause and includes a hurdle rate of 9.0% and a performance fee of 20.0%. Profits are split 80/20 between the limited partners and the general partner. If the general partner achieves an IRR of 22.0% on an investment, the general partner's return from the performance fee is closest to:",
opts: ["1.8%", "2.6%", "4.4%"],
ans: 1,
en: "With no catch-up, the GP earns the performance fee only on the return in excess of the hurdle. Excess return = 22.0% - 9.0% = 13.0%; performance fee = 20% x 13.0% = 2.6%.",
vi: "Không có catch-up, GP chỉ nhận phí thưởng trên phần lợi nhuận vượt hurdle. Lợi nhuận vượt = 22.0% - 9.0% = 13.0%; phí thưởng = 20% x 13.0% = 2.6%."
},
{
q: "If a floating-rate note is trading at a discount to par, the bond's required margin is:",
opts: ["less than the quoted margin", "the same as the quoted margin", "greater than the quoted margin"],
ans: 2,
en: "A floater trades at a discount when the market demands a wider spread than the note pays. The required (discount) margin therefore exceeds the quoted margin, pushing the price below par. At par the two margins are equal; at a premium the required margin is lower.",
vi: "FRN giao dịch dưới mệnh giá khi thị trường đòi hỏi spread rộng hơn mức trái phiếu trả. Do đó required (discount) margin lớn hơn quoted margin, đẩy giá xuống dưới par. Ở par hai margin bằng nhau; ở giá premium thì required margin thấp hơn."
},
{
q: "A characteristic of real assets is that they most likely:",
opts: ["trade in liquid markets", "are inexpensive to manage", "are unique assets with different attributes"],
ans: 2,
en: "Real assets such as real estate and infrastructure are heterogeneous — each has distinct location, condition, and other attributes. They tend to be illiquid and can be costly to manage, so the other choices are incorrect.",
vi: "Tài sản thực như bất động sản và hạ tầng có tính không đồng nhất — mỗi tài sản có vị trí, tình trạng và các thuộc tính riêng biệt. Chúng thường kém thanh khoản và có thể tốn kém để quản lý, nên các lựa chọn còn lại đều sai."
},
{
q: "A repurchase agreement (repo) is best defined as a:",
opts: ["publicly traded, collateralized short-term security", "security that gives the holder the right to sell it back to the issuer at par", "sale of a security with an agreement by the seller to buy it back at a specified price"],
ans: 2,
en: "A repo is the sale of a security combined with an agreement for the seller to repurchase it later at a specified (higher) price. The price difference represents the implied interest (repo rate). It is a collateralized short-term borrowing, not a publicly traded security or a put feature.",
vi: "Repo là việc bán một chứng khoán kèm thỏa thuận người bán sẽ mua lại sau ở một mức giá (cao hơn) đã định. Chênh lệch giá là lãi ngầm định (repo rate). Đây là khoản vay ngắn hạn có tài sản bảo đảm, không phải chứng khoán niêm yết hay đặc tính quyền bán."
},
{
q: "Compared to mutual funds, hedge funds most likely:",
opts: ["have increased operating constraints", "have a longer notice period for redemptions", "use a traditional index benchmark to gauge performance"],
ans: 1,
en: "Hedge funds impose longer notice (and lockup) periods for redemptions than mutual funds. They operate under FEWER regulatory constraints and typically measure performance against an absolute return target rather than a traditional index.",
vi: "Hedge fund áp thời gian báo trước (và lockup) cho việc rút vốn dài hơn mutual fund. Chúng hoạt động dưới ÍT ràng buộc quy định hơn và thường đo hiệu suất theo mục tiêu lợi nhuận tuyệt đối chứ không phải một chỉ số truyền thống."
},
{
q: "A company announces an unexpected improvement in its earnings forecast for the coming year. The announcement most likely immediately impacts the company's:",
opts: ["book value of equity only", "market value of equity only", "both book value and market value of equity"],
ans: 1,
en: "The market value of equity (share price) reacts immediately to the new forecast because it reflects expectations of future cash flows. Book value is an accounting figure that changes only when earnings are actually recorded, so it is unaffected at announcement.",
vi: "Giá trị thị trường của vốn cổ phần (giá cổ phiếu) phản ứng ngay với dự phóng mới vì nó phản ánh kỳ vọng dòng tiền tương lai. Giá trị sổ sách là con số kế toán chỉ thay đổi khi lợi nhuận thực sự được ghi nhận, nên không bị ảnh hưởng tại thời điểm công bố."
},
{
q: "Which section of an investment policy statement most likely provides information about specific types of assets to be excluded from a portfolio?",
opts: ["Procedures", "Investment Guidelines", "Statement of Duties and Responsibilities"],
ans: 1,
en: "The Investment Guidelines section addresses how the policy is executed, including permissible and prohibited asset classes, instruments, and specific exclusions. Duties and responsibilities and procedures cover governance and process, not asset restrictions.",
vi: "Phần Investment Guidelines trình bày cách thực thi chính sách, gồm các loại tài sản, công cụ được phép và bị cấm, cùng các loại trừ cụ thể. Phần trách nhiệm và quy trình bao quát quản trị và tiến trình, không phải hạn chế tài sản."
},
{
q: "Only the seller can default on a(n):",
opts: ["swap", "option", "forward"],
ans: 1,
en: "In an option, the buyer pays the premium up front and thereafter has only a right, no obligation — so only the seller (writer) can default. In swaps and forwards either counterparty can owe money and therefore either can default.",
vi: "Trong quyền chọn, người mua trả phí ngay từ đầu và sau đó chỉ có quyền, không có nghĩa vụ — nên chỉ người bán (writer) mới có thể vỡ nợ. Trong swap và forward, cả hai bên đều có thể nợ tiền nên cả hai đều có thể vỡ nợ."
},
{
q: "Which statement regarding alternative asset co-investing is correct? Statement 1: the investor invests in assets indirectly through a fund. Statement 2: the investor possesses rights to invest directly in the same assets.",
opts: ["Statement 1 only", "Statement 2 only", "Both Statement 1 and Statement 2"],
ans: 2,
en: "Co-investing combines both: the investor participates in the fund (indirect exposure) and also holds rights to invest additional capital directly alongside the fund in the same deals. Both statements describe co-investing.",
vi: "Co-investing kết hợp cả hai: nhà đầu tư tham gia quỹ (tiếp xúc gián tiếp) và đồng thời có quyền đầu tư thêm vốn trực tiếp song song với quỹ vào cùng các thương vụ. Cả hai phát biểu đều mô tả co-investing."
},
{
q: "An analyst gathers the following (in USD millions) for the year just ended. Company X: operating income 10, depreciation and amortization 2, interest expense 1, debt 50. Company Y: operating income 12, depreciation and amortization 1, interest expense 3, debt 60. Based on an assessment of leverage, Company X has:",
opts: ["lower creditworthiness than Company Y", "the same creditworthiness as Company Y", "higher creditworthiness than Company Y"],
ans: 2,
en: "EBITDA is 12 for X and 13 for Y. Debt/EBITDA is 50/12 = 4.2 for X versus 60/13 = 4.6 for Y (X less levered), and EBIT interest coverage is 10/1 = 10 for X versus 12/3 = 4 for Y (X far stronger). Both metrics point to higher creditworthiness for Company X.",
vi: "EBITDA là 12 với X và 13 với Y. Debt/EBITDA là 50/12 = 4.2 với X so với 60/13 = 4.6 với Y (X ít đòn bẩy hơn), và EBIT interest coverage là 10/1 = 10 với X so với 12/3 = 4 với Y (X mạnh hơn nhiều). Cả hai chỉ số đều cho thấy Company X có mức tín nhiệm cao hơn."
},
{
q: "An analyst gathers the following for a company's fiscal year: net profit margin 8%; total asset turnover 1.5; financial leverage 1.2; EPS EUR 0.15; dividend per common share EUR 0.10. The sustainable growth rate is closest to:",
opts: ["3.2%", "4.8%", "9.6%"],
ans: 1,
en: "ROE = 8% x 1.5 x 1.2 = 14.4%. The retention ratio = 1 - (0.10 / 0.15) = 0.333. Sustainable growth = retention x ROE = 0.333 x 14.4% = 4.8%.",
vi: "ROE = 8% x 1.5 x 1.2 = 14.4%. Tỷ lệ giữ lại = 1 - (0.10 / 0.15) = 0.333. Tăng trưởng bền vững = tỷ lệ giữ lại x ROE = 0.333 x 14.4% = 4.8%."
},
{
q: "An increase in the dividend payout ratio will most likely increase the intrinsic value estimate when using a(n):",
opts: ["multiplier model", "present value model", "asset-based valuation model"],
ans: 1,
en: "A present value model such as a dividend discount model values the stream of dividends directly, so raising the payout increases the near-term dividends being discounted and lifts the estimate. An asset-based model values net assets and is not driven by payout.",
vi: "Mô hình giá trị hiện tại như dividend discount model định giá trực tiếp dòng cổ tức, nên nâng tỷ lệ chi trả làm tăng cổ tức gần hạn được chiết khấu và nâng giá trị ước tính. Mô hình dựa trên tài sản định giá tài sản ròng và không bị dẫn dắt bởi tỷ lệ chi trả."
},
{
q: "If Investor 1 has a lower risk aversion coefficient than Investor 2, will Investor 2's optimal portfolio have a higher expected return on the capital allocation line?",
opts: ["Yes", "No, because Investor 2 has lower risk tolerance", "No, because Investor 2 has higher risk tolerance"],
ans: 1,
en: "A higher risk aversion coefficient means lower risk tolerance. The more risk-averse Investor 2 will choose a point on the CAL with less risk and therefore a LOWER expected return. So the answer is no, because Investor 2 has lower risk tolerance.",
vi: "Hệ số e ngại rủi ro cao hơn nghĩa là mức chấp nhận rủi ro thấp hơn. Investor 2 e ngại rủi ro hơn sẽ chọn một điểm trên CAL có ít rủi ro hơn và do đó lợi suất kỳ vọng THẤP hơn. Vậy câu trả lời là không, vì Investor 2 có mức chấp nhận rủi ro thấp hơn."
},
{
q: "An analyst gathers the following about a company: retention rate 40%; growth rate 1%. According to the Gordon growth model, if an investor's required return is 6%, the justified forward P/E is:",
opts: ["8", "10", "12"],
ans: 2,
en: "Justified forward (leading) P/E = payout ratio / (r - g) = (1 - 0.40) / (0.06 - 0.01) = 0.60 / 0.05 = 12.",
vi: "P/E dự phóng (forward) hợp lý = tỷ lệ chi trả / (r - g) = (1 - 0.40) / (0.06 - 0.01) = 0.60 / 0.05 = 12."
},
{
q: "A hedge fund begins the year with USD 120 million and earns a 25% gross return. It charges a 1.5% management fee on end-of-year value and a 15% incentive fee on the return, net of the management fee, that exceeds a 6% fixed hurdle rate. The investors' return for the year, net of all fees, is closest to:",
opts: ["19.66%", "20.56%", "21.25%"],
ans: 1,
en: "Gross value = 150M; gain = 30M. Management fee = 1.5% x 150M = 2.25M, leaving a net-of-management gain of 27.75M. The incentive fee applies above the 6% (7.2M) hurdle: 15% x (27.75 - 7.2) = 3.0825M. Ending value = 150 - 2.25 - 3.0825 = 144.6675M; investor return = (144.6675 - 120)/120 = 20.56%.",
vi: "Giá trị gộp = 150 triệu; lãi = 30 triệu. Phí quản lý = 1.5% x 150 triệu = 2.25 triệu, còn lãi sau phí quản lý là 27.75 triệu. Phí thưởng áp trên phần vượt hurdle 6% (7.2 triệu): 15% x (27.75 - 7.2) = 3.0825 triệu. Giá trị cuối = 150 - 2.25 - 3.0825 = 144.6675 triệu; lợi suất nhà đầu tư = (144.6675 - 120)/120 = 20.56%."
},
{
q: "All else equal, which of the following bonds most likely has the highest yield to maturity?",
opts: ["Putable bonds", "Convertible bonds", "Contingent convertible bonds"],
ans: 2,
en: "Options that benefit the investor (put, conversion) let the investor accept a lower yield. A contingent convertible (CoCo) works against the investor — it converts to equity or is written down exactly when the issuer is in trouble — so investors demand the highest yield to compensate.",
vi: "Các quyền chọn có lợi cho nhà đầu tư (put, chuyển đổi) khiến nhà đầu tư chấp nhận lợi suất thấp hơn. Contingent convertible (CoCo) lại bất lợi cho nhà đầu tư — nó chuyển thành cổ phần hoặc bị ghi giảm đúng lúc bên phát hành gặp khó — nên nhà đầu tư đòi lợi suất cao nhất để bù đắp."
},
{
q: "According to behavioral finance, observed overreaction in securities markets most likely occurs because of:",
opts: ["loss aversion", "the disposition effect", "the gambler's fallacy"],
ans: 0,
en: "Loss aversion — feeling losses far more intensely than equivalent gains — leads investors to react excessively to news, especially negative news, producing overreaction. The disposition effect and the gambler's fallacy are more closely associated with momentum/underreaction and expected reversals, respectively.",
vi: "Loss aversion — cảm nhận mất mát mạnh hơn nhiều so với lợi ích tương đương — khiến nhà đầu tư phản ứng thái quá với tin tức, đặc biệt tin xấu, gây ra overreaction. Disposition effect và gambler's fallacy gắn nhiều hơn với momentum/underreaction và niềm tin đảo chiều, tương ứng."
},
{
q: "Using put-call parity, a long call can best be replicated by going:",
opts: ["long the put, short the asset, and long the bond", "short the put, long the asset, and short the bond", "long the put, long the asset, and short the bond"],
ans: 2,
en: "Put-call parity is c + PV(X) = p + S. Solving for the call: c = p + S - PV(X), which is long the put, long the underlying asset, and short the bond (borrowing the present value of the strike).",
vi: "Put-call parity là c + PV(X) = p + S. Giải cho call: c = p + S - PV(X), tức mua put, mua tài sản cơ sở, và bán trái phiếu (vay giá trị hiện tại của giá thực hiện)."
},
{
q: "The value of a European call option is inversely related:",
opts: ["only to the risk-free interest rate", "only to the dividends paid by the underlying stock", "to both the risk-free interest rate and the dividends paid by the underlying stock"],
ans: 1,
en: "A call's value is positively related to the risk-free rate but inversely related to dividends: dividends lower the underlying's price, reducing the call's value. So it is inversely related only to dividends.",
vi: "Giá trị của call quan hệ thuận với lãi suất phi rủi ro nhưng nghịch với cổ tức: cổ tức làm giảm giá tài sản cơ sở, làm giảm giá trị của call. Vậy nó nghịch biến chỉ với cổ tức."
},
{
q: "With respect to index construction, which method of grouping companies most likely experiences the highest turnover in its constituents? Grouping by:",
opts: ["industry", "geography", "statistical similarities"],
ans: 2,
en: "Statistical groupings are based on measured relationships (such as return correlations) that shift over time, so constituents move in and out frequently — the highest turnover. Industry and geography classifications are far more stable.",
vi: "Nhóm theo thống kê dựa trên các mối quan hệ đo được (như tương quan lợi suất) vốn thay đổi theo thời gian, nên thành phần ra vào thường xuyên — vòng quay cao nhất. Phân loại theo ngành và địa lý ổn định hơn nhiều."
},
{
q: "Unlike traditional financial assets, digital assets are most likely:",
opts: ["subject to well-defined regulatory standards", "recorded in private ledgers maintained by central intermediaries", "valued based on anticipated price appreciation rather than underlying cash flow"],
ans: 2,
en: "Most digital assets generate no cash flows, so their value rests on expected price appreciation. They are recorded on decentralized (typically public) ledgers, not private ledgers run by a central intermediary, and their regulatory framework is still evolving rather than well-defined.",
vi: "Hầu hết tài sản số không tạo dòng tiền, nên giá trị dựa vào kỳ vọng tăng giá. Chúng được ghi trên sổ cái phi tập trung (thường công khai), không phải sổ cái riêng do một trung gian trung tâm vận hành, và khung pháp lý của chúng vẫn đang hình thành chứ chưa rõ ràng."
},
{
q: "Which of the following transactions most likely represents a fair value hedge?",
opts: ["Commodity futures to hedge inventory", "Currency forward to hedge forecasted sales", "Interest rate swap to a fixed rate for floating-rate debt"],
ans: 0,
en: "A fair value hedge offsets changes in the fair value of an existing recognized asset or liability. Using commodity futures to hedge inventory already on the books protects that inventory's fair value. Hedging forecasted sales, or swapping floating-rate debt to fixed, hedges variability in future cash flows and is therefore a cash flow hedge.",
vi: "Fair value hedge bù đắp thay đổi giá trị hợp lý của một tài sản hoặc nợ đã ghi nhận hiện có. Dùng hợp đồng tương lai hàng hóa để phòng hộ hàng tồn kho đang có trên sổ là bảo vệ giá trị hợp lý của tồn kho đó. Phòng hộ doanh số dự báo, hay hoán đổi nợ lãi suất thả nổi sang cố định, là phòng hộ biến động dòng tiền tương lai nên thuộc cash flow hedge."
},
{
q: "If the current share price is USD 60, a trader who wants to purchase the share at USD 58 or less will most likely place a:",
opts: ["limit order", "market order", "stop-buy order"],
ans: 0,
en: "A buy limit order set at USD 58 executes only at USD 58 or lower, guaranteeing the price limit. A market order fills at the prevailing price (around 60), and a stop-buy triggers only above the market price.",
vi: "Lệnh mua giới hạn (limit) đặt ở 58 USD chỉ khớp ở 58 USD hoặc thấp hơn, bảo đảm giới hạn giá. Lệnh thị trường khớp ở giá hiện hành (khoảng 60), và stop-buy chỉ kích hoạt khi giá vượt trên mức thị trường."
},
{
q: "A lifecycle fund will most likely:",
opts: ["maintain a fixed asset allocation of stocks and bonds", "use tactical asset allocation to capture market opportunities", "change the asset allocation as the fund nears its target date"],
ans: 2,
en: "A lifecycle (target-date) fund follows a glide path, gradually shifting from growth assets toward more conservative assets as the target date approaches. Its allocation is deliberately not fixed and is driven by the horizon, not tactical bets.",
vi: "Quỹ lifecycle (target-date) đi theo một glide path, dần chuyển từ tài sản tăng trưởng sang tài sản thận trọng hơn khi ngày mục tiêu tới gần. Phân bổ của nó cố ý không cố định và được dẫn dắt bởi khung thời gian, không phải cược tactical."
},
{
q: "A trader enters into a margin transaction: purchase price per share EUR 100; initial margin posted as equity 45%; holding period 1 year; unleveraged security return over the period 15%; one-year call money rate 4%. With no dividends or commissions, and interest paid at the end of the period, the trader's rate of return on the margin transaction is closest to:",
opts: ["27.3%", "28.4%", "29.3%"],
ans: 1,
en: "Equity posted = 45; borrowed = 55. The share rises 15% to 115, a gain of 15. Interest on the loan = 4% x 55 = 2.20. Net gain = 15 - 2.20 = 12.80; return on equity = 12.80 / 45 = 28.4%.",
vi: "Vốn tự có = 45; vay = 55. Cổ phiếu tăng 15% lên 115, lãi 15. Lãi vay = 4% x 55 = 2.20. Lãi ròng = 15 - 2.20 = 12.80; lợi suất trên vốn tự có = 12.80 / 45 = 28.4%."
},
{
q: "In which form of market efficiency do security prices fully reflect private information?",
opts: ["Weak-form efficient", "Semi-strong-form efficient", "Strong-form efficient"],
ans: 2,
en: "Strong-form efficiency means prices reflect all information — public and private (including insider) information. Weak form reflects only past prices; semi-strong reflects all public information.",
vi: "Hiệu quả dạng mạnh (strong-form) nghĩa là giá phản ánh mọi thông tin — công khai và riêng tư (kể cả thông tin nội bộ). Dạng yếu chỉ phản ánh giá quá khứ; dạng bán mạnh phản ánh mọi thông tin công khai."
},
{
q: "The data for two stocks in an index. Stock A: shares outstanding 5,000; float 90%; beginning price USD 40; ending price USD 45; dividend per share USD 1.00. Stock B: shares outstanding 2,000; float 100%; beginning price USD 68; ending price USD 60; dividend per share USD 0.50. If the beginning value of the float-adjusted market-capitalization-weighted index is 100, the ending value is closest to:",
opts: ["102.06", "102.68", "103.80"],
ans: 0,
en: "Beginning float market cap = 5,000(0.9)(40) + 2,000(1.0)(68) = 180,000 + 136,000 = 316,000. Ending (price basis) = 5,000(0.9)(45) + 2,000(1.0)(60) = 202,500 + 120,000 = 322,500. A market-cap price index ignores dividends: 100 x 322,500/316,000 = 102.06.",
vi: "Vốn hóa float đầu kỳ = 5,000(0.9)(40) + 2,000(1.0)(68) = 180,000 + 136,000 = 316,000. Cuối kỳ (theo giá) = 5,000(0.9)(45) + 2,000(1.0)(60) = 202,500 + 120,000 = 322,500. Chỉ số giá theo vốn hóa bỏ qua cổ tức: 100 x 322,500/316,000 = 102.06."
},
{
q: "A trader sells a put option with an exercise price of USD 33.50 for USD 3.00. If the price of the underlying at expiration is USD 29.50, the trader's profit is:",
opts: ["-USD 1.00", "USD 1.00", "USD 4.00"],
ans: 0,
en: "The put's payoff to the buyer = max(0, 33.50 - 29.50) = USD 4.00, which the seller must pay. The seller collected USD 3.00 in premium, so profit = 3.00 - 4.00 = -USD 1.00.",
vi: "Payoff của put với người mua = max(0, 33.50 - 29.50) = 4.00 USD, mà người bán phải trả. Người bán đã thu 3.00 USD phí, nên lợi nhuận = 3.00 - 4.00 = -1.00 USD."
},
{
q: "A bond has a 10-year maturity, a USD 1,000 face value, and a 7% coupon rate. If the market requires a yield of 8% on similar bonds, the bond will most likely trade at a:",
opts: ["discount", "premium", "discount or premium, depending on its duration"],
ans: 0,
en: "When the coupon rate (7%) is below the required market yield (8%), the bond's price falls below par to raise its effective yield — it trades at a discount. Duration does not change the direction of this relationship.",
vi: "Khi lãi suất coupon (7%) thấp hơn lợi suất thị trường yêu cầu (8%), giá trái phiếu rớt dưới mệnh giá để nâng lợi suất hiệu dụng — nó giao dịch ở giá chiết khấu (discount). Duration không làm thay đổi chiều của quan hệ này."
},
{
q: "A bond has an annual modified duration of 8 and an annual convexity measure of 150. If the bond's yield to maturity decreases by 140 basis points, the change in the price of the bond is closest to:",
opts: ["9.7%", "12.7%", "14.1%"],
ans: 1,
en: "Percentage price change = -ModDur(delta y) + 0.5(convexity)(delta y)^2 = -8(-0.0140) + 0.5(150)(0.0140)^2 = 0.112 + 0.0147 = 0.1267, or about 12.7%.",
vi: "Thay đổi giá phần trăm = -ModDur(delta y) + 0.5(convexity)(delta y)^2 = -8(-0.0140) + 0.5(150)(0.0140)^2 = 0.112 + 0.0147 = 0.1267, tức khoảng 12.7%."
},
{
q: "At expiration, an option that is in the money will most likely have:",
opts: ["time value but no exercise value", "exercise value but no time value", "both time value and exercise value"],
ans: 1,
en: "At expiration there is no time remaining, so time value is zero. An in-the-money option retains only its exercise (intrinsic) value — the amount by which it is in the money.",
vi: "Tại thời điểm đáo hạn không còn thời gian, nên time value bằng 0. Quyền chọn in-the-money chỉ giữ lại exercise (intrinsic) value — phần chênh mà nó đang có lãi."
},
{
q: "Investing in an existing solar power plant is most appropriately categorized as a:",
opts: ["utility asset", "greenfield investment", "social infrastructure asset"],
ans: 0,
en: "A solar power plant is an economic infrastructure asset in the utility/energy category. Because it already exists it is a brownfield (not greenfield) investment, and it is economic rather than social infrastructure (which covers schools, hospitals, and the like).",
vi: "Nhà máy điện mặt trời là tài sản hạ tầng kinh tế thuộc nhóm tiện ích/năng lượng. Vì đã tồn tại nên đó là khoản đầu tư brownfield (không phải greenfield), và là hạ tầng kinh tế chứ không phải hạ tầng xã hội (vốn gồm trường học, bệnh viện, v.v.)."
},
{
q: "An analyst gathers the following about three companies and their common shares. Company 1: next year's dividend USD 1.00, payout 10%. Company 2: next year's dividend USD 1.00, payout 20%. Company 3: next year's dividend USD 1.25, payout 15%. All three have ROE of 10% and required return of 10%. Using the Gordon growth model, the company with the highest intrinsic value is:",
opts: ["Company 1", "Company 2", "Company 3"],
ans: 0,
en: "When ROE equals the required return, value equals E1/r, so higher earnings mean higher value. Implied earnings are 1.00/0.10 = 10 (Company 1), 1.00/0.20 = 5 (Company 2), and 1.25/0.15 = 8.33 (Company 3), giving values of 100, 50, and 83.33. Company 1 is highest.",
vi: "Khi ROE bằng lợi suất yêu cầu, giá trị bằng E1/r, nên lợi nhuận cao hơn nghĩa là giá trị cao hơn. Lợi nhuận ngầm định là 1.00/0.10 = 10 (Company 1), 1.00/0.20 = 5 (Company 2), và 1.25/0.15 = 8.33 (Company 3), cho giá trị 100, 50 và 83.33. Company 1 cao nhất."
},
{
q: "With respect to the capital market line, the market portfolio is best described as the:",
opts: ["optimal risky portfolio", "portfolio that maximizes an investor's utility", "optimal combination of the risk-free asset and a portfolio of risky assets"],
ans: 0,
en: "On the CML the market portfolio is the tangency (optimal risky) portfolio held by all investors. An investor's utility-maximizing portfolio is a point on the CML combining the risk-free asset with that market portfolio, but the market portfolio itself is the optimal risky portfolio.",
vi: "Trên CML, danh mục thị trường là danh mục tiếp tuyến (danh mục rủi ro tối ưu) mà mọi nhà đầu tư nắm giữ. Danh mục tối đa hóa hữu dụng của một nhà đầu tư là một điểm trên CML kết hợp tài sản phi rủi ro với danh mục thị trường đó, nhưng bản thân danh mục thị trường là danh mục rủi ro tối ưu."
},
{
q: "Which of the following statements is most accurate regarding derivatives pricing?",
opts: ["Investors are assumed to be risk averse", "The expected payoff of a derivative can be discounted at the risk-free rate", "A portfolio of the underlying and the derivative must earn the risk-free rate plus a risk premium"],
ans: 1,
en: "Derivatives are priced using risk-neutral valuation: expected payoffs computed with risk-neutral probabilities are discounted at the risk-free rate. A fully hedged portfolio of the underlying and the derivative earns only the risk-free rate, with no risk premium, and no assumption about risk aversion is needed.",
vi: "Phái sinh được định giá bằng risk-neutral valuation: payoff kỳ vọng tính theo xác suất trung tính rủi ro được chiết khấu ở lãi suất phi rủi ro. Danh mục phòng hộ hoàn toàn gồm tài sản cơ sở và phái sinh chỉ hưởng lãi suất phi rủi ro, không có phần bù rủi ro, và không cần giả định về mức e ngại rủi ro."
},
{
q: "An example of a negative bond covenant is a:",
opts: ["promise to pay required taxes", "limit on the issuance of additional debt", "requirement to comply with existing laws and regulations"],
ans: 1,
en: "Negative (restrictive) covenants prohibit the issuer from taking certain actions — for example, limiting additional debt issuance. Paying taxes and complying with laws are affirmative covenants (things the issuer must do).",
vi: "Negative (restrictive) covenant cấm bên phát hành thực hiện một số hành động — ví dụ giới hạn phát hành thêm nợ. Nộp thuế và tuân thủ pháp luật là affirmative covenant (những việc bên phát hành phải làm)."
},
{
q: "The slope of the security market line is best derived from the:",
opts: ["beta of the security", "market risk premium", "risk-free rate of return"],
ans: 1,
en: "The SML plots expected return against beta, and its slope is the market risk premium (Rm - Rf). Beta is the horizontal axis, and the risk-free rate is the intercept, not the slope.",
vi: "SML vẽ lợi suất kỳ vọng theo beta, và độ dốc của nó là phần bù rủi ro thị trường (Rm - Rf). Beta là trục hoành, và lãi suất phi rủi ro là hệ số chặn, không phải độ dốc."
},
{
q: "Which of the following statements is most accurate?",
opts: ["The value of a swap fluctuates as market conditions change", "The price and the value of a swap are the same at expiration", "The price of a swap at initiation is zero because there is no initial cash outlay"],
ans: 0,
en: "A swap's value changes over time as underlying rates or prices move. At initiation the swap's VALUE (not price) is zero; the swap price is the fixed rate set so that value is zero. Confusing price with value makes the other two statements inaccurate.",
vi: "Giá trị của swap thay đổi theo thời gian khi lãi suất hay giá cơ sở biến động. Lúc khởi tạo, GIÁ TRỊ swap (không phải giá) bằng 0; giá swap là lãi suất cố định được đặt sao cho giá trị bằng 0. Nhầm giá với giá trị khiến hai phát biểu kia sai."
},
{
q: "In a declining interest rate environment, an investor would find it most difficult to estimate future cash flows for which of the following bonds with similar maturities?",
opts: ["A putable bond", "A floating-rate bond with a floor", "A mortgage pass-through security"],
ans: 2,
en: "Falling rates trigger mortgage prepayments (refinancing), so a mortgage pass-through's cash-flow timing becomes highly uncertain (contraction risk). A putable bond would not be put when rates fall, and a floored floater has fairly predictable cash flows.",
vi: "Lãi suất giảm kích hoạt trả trước các khoản thế chấp (tái cấp vốn), nên thời điểm dòng tiền của mortgage pass-through trở nên rất bất định (contraction risk). Putable bond sẽ không bị put khi lãi suất giảm, và floater có sàn thì dòng tiền khá dễ dự đoán."
},
{
q: "An analyst gathers the following about three investors, each holding a bond with a Macaulay duration of 5.5 years. Investor A: horizon 5 years. Investor B: horizon 2 years. Investor C: horizon 8 years. All else equal, which investor is currently most vulnerable to an increase in interest rates?",
opts: ["Investor A", "Investor B", "Investor C"],
ans: 1,
en: "The duration gap = Macaulay duration - investment horizon. Gaps are +0.5 (A), +3.5 (B), and -2.5 (C). A large positive gap means market price risk dominates reinvestment risk, so the investor loses when rates rise. Investor B has the largest positive gap and is most exposed.",
vi: "Duration gap = Macaulay duration - kỳ đầu tư. Các gap là +0.5 (A), +3.5 (B), và -2.5 (C). Gap dương lớn nghĩa là rủi ro giá thị trường lấn át rủi ro tái đầu tư, nên nhà đầu tư lỗ khi lãi suất tăng. Investor B có gap dương lớn nhất và chịu rủi ro cao nhất."
},
{
q: "The sensitivity of a bond's price to a change in the benchmark yield curve is best described as:",
opts: ["effective duration", "modified duration", "the price value of a basis point"],
ans: 0,
en: "Effective duration measures the price sensitivity to a parallel shift in the entire benchmark yield curve and is the appropriate measure for bonds with embedded options. Modified duration assumes cash flows are fixed, and PVBP is a money (not curve-based) sensitivity.",
vi: "Effective duration đo độ nhạy của giá với dịch chuyển song song của toàn bộ đường cong lợi suất chuẩn và là thước đo phù hợp cho trái phiếu có quyền chọn gắn kèm. Modified duration giả định dòng tiền cố định, và PVBP là độ nhạy theo tiền (không dựa trên đường cong)."
},
{
q: "An analyst gathers the following about a bond: market price 96.00; market price if yields rise 1 basis point 95.92; market price if yields fall 1 basis point 96.10. The price value of a basis point is:",
opts: ["0.08", "0.09", "0.18"],
ans: 1,
en: "PVBP = (price if yields fall - price if yields rise) / 2 = (96.10 - 95.92) / 2 = 0.18 / 2 = 0.09. It captures the average price change for a one-basis-point move.",
vi: "PVBP = (giá khi lợi suất giảm - giá khi lợi suất tăng) / 2 = (96.10 - 95.92) / 2 = 0.18 / 2 = 0.09. Nó thể hiện thay đổi giá bình quân cho một bước 1 điểm cơ bản."
},
{
q: "The convexity of a putable bond is:",
opts: ["always positive", "negative for a decrease in yield", "negative for an increase in yield"],
ans: 0,
en: "The put option protects the investor when yields rise (the bond can be sold back at par), so the price-yield curve stays above its tangent line throughout — convexity is always positive. It is the callable bond that shows negative convexity, at low yields.",
vi: "Quyền chọn put bảo vệ nhà đầu tư khi lợi suất tăng (trái phiếu có thể bán lại ở par), nên đường giá-lợi suất luôn nằm trên đường tiếp tuyến — convexity luôn dương. Chính trái phiếu có thể mua lại (callable) mới thể hiện convexity âm, ở vùng lợi suất thấp."
},
{
q: "Which of the following is used by clearinghouses to determine the daily gain and loss to the parties of a futures contract?",
opts: ["Mark to market", "Maintenance margin", "Limit up and limit down"],
ans: 0,
en: "Mark-to-market (daily settlement) revalues open futures positions to the settlement price each day and credits or debits each party's account for the day's gain or loss. Maintenance margin is a minimum balance, and price limits cap daily moves.",
vi: "Mark-to-market (thanh toán hằng ngày) định giá lại các vị thế futures mở theo giá thanh toán mỗi ngày và ghi có hoặc ghi nợ tài khoản mỗi bên theo lãi/lỗ trong ngày. Maintenance margin là số dư tối thiểu, và giới hạn giá chặn biên độ trong ngày."
},
{
q: "In the private debt market, a hybrid loan structure that combines secured and unsecured debt into a single loan with a blended interest rate is best described as:",
opts: ["unitranche debt", "mezzanine debt", "a leveraged loan"],
ans: 0,
en: "Unitranche debt merges senior (secured) and subordinated (unsecured) debt into one facility with a single blended rate. Mezzanine debt is subordinated financing often with equity features, and a leveraged loan is senior debt to an already highly indebted borrower.",
vi: "Unitranche debt hợp nhất nợ ưu tiên (có bảo đảm) và nợ thứ cấp (không bảo đảm) thành một khoản vay duy nhất với một lãi suất pha trộn. Mezzanine debt là tài trợ thứ cấp thường kèm đặc tính vốn cổ phần, và leveraged loan là nợ ưu tiên cấp cho bên vay vốn đã có nợ rất cao."
},
{
q: "The two-fund separation theorem states that all investors will hold a combination of the:",
opts: ["risk-free asset and the optimal risky portfolio", "risk-free asset and the global minimum-variance portfolio", "optimal risky portfolio and the global minimum-variance portfolio"],
ans: 0,
en: "Two-fund separation says every investor holds some mix of just two funds: the risk-free asset and the same optimal risky (tangency) portfolio. Risk preferences determine only the proportions, not the composition of the risky portfolio.",
vi: "Two-fund separation nói mọi nhà đầu tư nắm giữ một tổ hợp của chỉ hai quỹ: tài sản phi rủi ro và cùng một danh mục rủi ro tối ưu (tiếp tuyến). Sở thích rủi ro chỉ quyết định tỷ lệ, không quyết định thành phần của danh mục rủi ro."
},
{
q: "The Gordon growth model is most appropriate for valuing the common stock of a dividend-paying company that is:",
opts: ["young and just entering the growth phase", "mature and relatively insensitive to economic fluctuations", "experiencing growth higher than the sustainable growth rate"],
ans: 1,
en: "The constant-growth (Gordon) model assumes dividends grow at a single, stable, perpetual rate, which fits mature, stable companies that are relatively insensitive to the business cycle. Young or above-sustainable-growth firms violate the constant-growth assumption.",
vi: "Mô hình tăng trưởng đều (Gordon) giả định cổ tức tăng ở một tốc độ duy nhất, ổn định, vĩnh viễn, phù hợp với công ty trưởng thành, ổn định, ít nhạy với chu kỳ kinh doanh. Công ty non trẻ hay tăng trưởng vượt mức bền vững vi phạm giả định tăng trưởng đều."
},
{
q: "An analyst gathers the following balance sheet data (in USD millions): cash 2.5; accounts receivable 7.5; inventories 15.0; net fixed assets 25.0; total assets 50.0; total liabilities 22.5; common equity 27.5. The market value of inventories is 110% of reported value and the market value of net fixed assets is 115% of reported value; all other items are as reported. There are 2.0 million shares outstanding and the current share price is USD 18.00. Using an asset-based valuation approach, the company's shares are most likely:",
opts: ["undervalued", "fairly valued", "overvalued"],
ans: 2,
en: "Adjusted assets = 2.5 + 7.5 + (15.0 x 1.10) + (25.0 x 1.15) = 2.5 + 7.5 + 16.5 + 28.75 = 55.25. Net asset value = 55.25 - 22.5 = 32.75, or 16.375 per share. Since the market price of 18.00 exceeds 16.375, the shares are overvalued.",
vi: "Tài sản điều chỉnh = 2.5 + 7.5 + (15.0 x 1.10) + (25.0 x 1.15) = 2.5 + 7.5 + 16.5 + 28.75 = 55.25. Giá trị tài sản ròng = 55.25 - 22.5 = 32.75, tức 16.375 mỗi cổ phiếu. Vì giá thị trường 18.00 vượt 16.375, cổ phiếu bị định giá cao."
},
{
q: "Based on historical returns, a portfolio has a Sharpe ratio of 2.0. If the mean return to the portfolio is 20% and the mean return to a risk-free asset is 4%, the standard deviation of return on the portfolio is closest to:",
opts: ["8%", "10%", "12%"],
ans: 0,
en: "Sharpe ratio = (Rp - Rf) / sigma. Rearranging, sigma = (20% - 4%) / 2.0 = 16% / 2.0 = 8%.",
vi: "Sharpe ratio = (Rp - Rf) / sigma. Sắp xếp lại, sigma = (20% - 4%) / 2.0 = 16% / 2.0 = 8%."
},
{
q: "With respect to return-generating models, statistical factor models:",
opts: ["only include factors that have economic meaning", "identify factors that explain the covariance in observed returns", "only include factors that have a fundamental connection to returns"],
ans: 1,
en: "Statistical factor models derive their factors from the historical covariance structure of returns using techniques such as factor analysis or principal components. The factors need not have any economic or fundamental interpretation; that is the domain of macroeconomic and fundamental factor models.",
vi: "Mô hình nhân tố thống kê rút ra các nhân tố từ cấu trúc hiệp phương sai lịch sử của lợi suất bằng các kỹ thuật như factor analysis hay principal components. Các nhân tố không nhất thiết có ý nghĩa kinh tế hay cơ bản; đó là phạm vi của mô hình nhân tố vĩ mô và cơ bản."
},
{
q: "A portfolio consists of two securities. Security 1: expected return 17%, standard deviation 24%. Security 2: expected return 6%, standard deviation 12%. If the portfolio's expected return is 12.6% and the returns are uncorrelated, the portfolio's standard deviation is closest to:",
opts: ["13.4%", "15.2%", "19.2%"],
ans: 1,
en: "From 12.6 = 17w1 + 6(1 - w1), w1 = 0.6 and w2 = 0.4. With zero correlation, variance = 0.6^2(24^2) + 0.4^2(12^2) = 207.36 + 23.04 = 230.4; standard deviation = square root of 230.4 = 15.2%.",
vi: "Từ 12.6 = 17w1 + 6(1 - w1), w1 = 0.6 và w2 = 0.4. Với tương quan bằng 0, phương sai = 0.6^2(24^2) + 0.4^2(12^2) = 207.36 + 23.04 = 230.4; độ lệch chuẩn = căn bậc hai của 230.4 = 15.2%."
},
{
q: "A financial system is best described as operationally efficient when:",
opts: ["the costs of arranging trades are low", "asset and contract prices reflect all available information", "an economy's resources are used where they are most valuable"],
ans: 0,
en: "Operational efficiency refers to low costs of arranging and executing trades. Prices reflecting all information describes informational efficiency, and channeling resources to their most valuable uses describes allocational efficiency.",
vi: "Hiệu quả vận hành (operational efficiency) chỉ chi phí thấp trong việc sắp xếp và thực hiện giao dịch. Giá phản ánh mọi thông tin mô tả hiệu quả thông tin, và đưa nguồn lực đến nơi có giá trị nhất mô tả hiệu quả phân bổ."
},
{
q: "If futures prices are positively correlated with interest rates, then futures contracts are most likely:",
opts: ["less desirable to holders of long positions than are forwards", "more desirable to holders of long positions than are forwards", "neither more nor less desirable to holders of long positions than are forwards"],
ans: 1,
en: "With positive correlation, a long futures holder receives daily settlement gains when prices (and rates) are high, reinvesting them at higher rates, and finances losses when rates are low. This timing benefit makes futures more desirable to longs than otherwise-identical forwards.",
vi: "Với tương quan dương, người giữ futures long nhận lãi thanh toán hằng ngày khi giá (và lãi suất) cao, tái đầu tư ở lãi suất cao hơn, và tài trợ khoản lỗ khi lãi suất thấp. Lợi ích về thời điểm này khiến futures hấp dẫn hơn đối với bên long so với forward giống hệt còn lại."
},
{
q: "A security's market value and intrinsic value are most likely the same if:",
opts: ["the market is efficient", "active investment is profitable", "the security's cash flows are complex"],
ans: 0,
en: "In an efficient market, prices fully reflect all relevant information, so market value equals intrinsic value. If active investing were reliably profitable, it would imply market value diverges from intrinsic value (an inefficiency).",
vi: "Trong thị trường hiệu quả, giá phản ánh đầy đủ mọi thông tin liên quan, nên giá trị thị trường bằng giá trị nội tại. Nếu đầu tư chủ động có lãi một cách bền vững thì hàm ý giá trị thị trường lệch khỏi giá trị nội tại (kém hiệu quả)."
},
{
q: "For a coupon bond with a positive yield, compounding more frequently within the year results in a yield-to-maturity that is:",
opts: ["less positive", "the same", "more positive"],
ans: 0,
en: "For a given price and effective annual return, adding compounding periods lowers the stated (nominal) annual yield toward the continuously compounded limit. So the more frequently the bond compounds, the less positive the stated YTM.",
vi: "Với một mức giá và lợi suất hiệu dụng năm cho trước, thêm kỳ ghép lãi làm giảm lợi suất năm danh nghĩa tiến về giới hạn ghép liên tục. Vậy trái phiếu ghép lãi càng thường xuyên thì YTM công bố càng ít dương hơn."
},
{
q: "The option-free bonds of Argus Corporation have a duration of eight years. When interest rates rise by 100 bps, the price declines by 7.9%; when rates fall by 100 bps, the price rises by 8.2%. This asymmetrical price change is most likely caused by the:",
opts: ["coupon effect", "maturity effect", "convexity effect"],
ans: 2,
en: "Convexity makes the price-yield relationship curved, so a bond gains more when yields fall than it loses when yields rise by the same amount. That curvature produces the asymmetric 8.2% versus 7.9% response.",
vi: "Convexity làm quan hệ giá-lợi suất cong, nên trái phiếu tăng giá nhiều hơn khi lợi suất giảm so với mức mất khi lợi suất tăng cùng biên độ. Độ cong đó tạo ra phản ứng bất đối xứng 8.2% so với 7.9%."
},
{
q: "In a binomial option pricing model, the expected payoff is based on:",
opts: ["estimated probabilities and discounted at the risk-free rate", "risk-neutral probabilities and discounted at the risk-free rate", "risk-neutral probabilities and discounted at the risk-free rate plus a risk premium"],
ans: 1,
en: "The binomial model computes the expected payoff using risk-neutral probabilities and discounts it at the risk-free rate. Actual (real-world) probabilities and risk premiums are not used because the replicating/hedged position removes risk.",
vi: "Mô hình nhị thức tính payoff kỳ vọng bằng xác suất trung tính rủi ro và chiết khấu ở lãi suất phi rủi ro. Xác suất thực (real-world) và phần bù rủi ro không được dùng vì vị thế sao chép/phòng hộ đã loại bỏ rủi ro."
},
{
q: "In the portfolio management process, the decision whether to use a nominal or real return objective is most likely part of the:",
opts: ["planning step", "feedback step", "execution step"],
ans: 0,
en: "Return objectives, including whether they are stated in nominal or real terms, are established in the investment policy statement during the planning step. Execution implements the strategy, and feedback monitors and rebalances.",
vi: "Mục tiêu lợi suất, kể cả việc nêu theo danh nghĩa hay thực, được thiết lập trong investment policy statement ở bước lập kế hoạch (planning). Bước thực thi triển khai chiến lược, và bước phản hồi (feedback) giám sát và tái cân bằng."
},
{
q: "In relation to asset allocation, which of the following is a desirable property when specifying asset classes?",
opts: ["Asset classes should be mutually exclusive", "An asset class should contain heterogeneous assets", "Each asset class should be composed of assets with low paired correlations"],
ans: 0,
en: "Well-specified asset classes are mutually exclusive (no asset in two classes). Within a class, assets should be relatively homogeneous and highly correlated; low correlations are desirable BETWEEN classes, not within them.",
vi: "Các lớp tài sản được xác định tốt thì loại trừ lẫn nhau (không tài sản nào ở hai lớp). Trong một lớp, các tài sản nên tương đối đồng nhất và tương quan cao; tương quan thấp là điều mong muốn GIỮA các lớp, không phải trong cùng một lớp."
},
{
q: "With respect to a client's investment policy statement, the set of exposures to the permissible asset classes that is expected to achieve the client's long-term objectives best describes the:",
opts: ["security selection", "tactical asset allocation", "strategic asset allocation"],
ans: 2,
en: "Strategic asset allocation sets the long-term target weights across permissible asset classes designed to meet the client's objectives. Tactical allocation makes short-term deviations, and security selection chooses individual holdings within classes.",
vi: "Strategic asset allocation đặt trọng số mục tiêu dài hạn giữa các lớp tài sản được phép nhằm đạt mục tiêu của khách hàng. Tactical allocation tạo các sai lệch ngắn hạn, và security selection chọn từng khoản đầu tư trong các lớp."
},
{
q: "When constructing an equity index, each company's weight depends on its number of shares outstanding if the index is:",
opts: ["price weighted", "equal weighted", "market-capitalization weighted"],
ans: 2,
en: "In a market-capitalization-weighted index, weight equals price times shares outstanding, so shares outstanding directly affect the weight. A price-weighted index depends only on price, and an equal-weighted index assigns the same weight to each constituent.",
vi: "Trong chỉ số theo vốn hóa, trọng số bằng giá nhân số cổ phiếu lưu hành, nên số cổ phiếu lưu hành ảnh hưởng trực tiếp đến trọng số. Chỉ số theo giá chỉ phụ thuộc giá, và chỉ số trọng số bằng nhau gán cùng trọng số cho mỗi thành phần."
},
{
q: "The methodology used by a credit rating agency to adjust a specific bond issue's rating is best described as:",
opts: ["notching", "cross-default", "structural subordination"],
ans: 0,
en: "Notching adjusts an individual issue's rating up or down from the issuer rating to reflect that issue's seniority, security, and expected recovery. Cross-default and structural subordination are features of debt structures, not the rating-adjustment method.",
vi: "Notching điều chỉnh xếp hạng của một đợt phát hành cụ thể lên hoặc xuống so với xếp hạng của bên phát hành để phản ánh thứ tự ưu tiên, mức bảo đảm và khả năng thu hồi của đợt đó. Cross-default và structural subordination là đặc điểm của cấu trúc nợ, không phải phương pháp điều chỉnh xếp hạng."
},
{
q: "One source of return for an investor in a fixed-rate corporate bond is most likely the:",
opts: ["bid-ask spread", "interest on the collateral", "reinvestment of coupon payments"],
ans: 2,
en: "A bondholder's total return comes from coupons, the reinvestment of those coupons, and any capital gain or loss. Reinvestment of coupon payments is therefore a genuine source of return; the bid-ask spread is a trading cost, not a return.",
vi: "Tổng lợi suất của trái chủ đến từ coupon, việc tái đầu tư các coupon đó, và lãi/lỗ vốn. Do đó tái đầu tư coupon là nguồn lợi suất thực; chênh lệch bid-ask là chi phí giao dịch, không phải lợi suất."
},
{
q: "The price of a fixed-rate corporate bond with an annual modified duration of 6.32 increases from 90 to 95 per 100 of par value. If the government benchmark yield declines by 5 bps, the estimated decline in the spread over the benchmark yield is closest to:",
opts: ["82.9 bps", "87.9 bps", "92.9 bps"],
ans: 0,
en: "Price return = (95 - 90)/90 = 5.556%. The implied total yield change = -0.05556 / 6.32 = -0.8791, i.e. yields fell about 87.91 bps. Since total change = benchmark change + spread change, the spread change = -87.91 - (-5) = -82.9 bps.",
vi: "Lợi suất giá = (95 - 90)/90 = 5.556%. Thay đổi tổng lợi suất ngầm định = -0.05556 / 6.32 = -0.8791, tức lợi suất giảm khoảng 87.91 bps. Vì thay đổi tổng = thay đổi benchmark + thay đổi spread, thay đổi spread = -87.91 - (-5) = -82.9 bps."
},
{
q: "Which of the following statements about REITs is most accurate?",
opts: ["Adding real estate to a portfolio of traditional investments will increase portfolio risk", "Adding real estate to a portfolio of traditional investments will decrease portfolio diversification", "Equity REIT correlations with traditional investments are at their highest during steep market downturns"],
ans: 2,
en: "Correlations between equity REITs and traditional assets tend to spike during steep downturns, reducing the diversification benefit exactly when it is most needed. Normally, adding real estate lowers portfolio risk and improves diversification, so the other two statements are incorrect.",
vi: "Tương quan giữa equity REIT và tài sản truyền thống có xu hướng tăng vọt trong các đợt sụt giảm mạnh, làm giảm lợi ích đa dạng hóa đúng lúc cần nhất. Thông thường, thêm bất động sản làm giảm rủi ro danh mục và cải thiện đa dạng hóa, nên hai phát biểu kia sai."
},
{
q: "An analyst gathers the following for a 2-year option contract: forward price 1.2000 USD/EUR; strike price 1.2250 USD/EUR; risk-free rate 5%; call premium 0.0500 USD/EUR (USD/EUR is the amount of USD per 1 EUR). The put premium is closest to:",
opts: ["0.0273 USD/EUR", "0.0727 USD/EUR", "0.0750 USD/EUR"],
ans: 1,
en: "Put-call parity with a forward: c - p = (F - X)/(1 + r)^T = (1.2000 - 1.2250)/1.05^2 = -0.0250/1.1025 = -0.022676. So p = c + 0.022676 = 0.0500 + 0.022676 = 0.0727.",
vi: "Put-call parity với forward: c - p = (F - X)/(1 + r)^T = (1.2000 - 1.2250)/1.05^2 = -0.0250/1.1025 = -0.022676. Vậy p = c + 0.022676 = 0.0500 + 0.022676 = 0.0727."
},
{
q: "For non-amortizing, non-mortgage asset-backed securities, the lockout period most likely represents when:",
opts: ["investors start receiving repayments", "overcollateralization begins to be reduced", "repaid principal is reinvested in loans of equal principal"],
ans: 2,
en: "For non-amortizing ABS such as credit card receivables, during the lockout (revolving) period principal collections are used to buy new receivables rather than being paid to investors. Investors receive only interest until the lockout period ends.",
vi: "Với ABS không phân bổ dần như khoản phải thu thẻ tín dụng, trong kỳ lockout (revolving) tiền gốc thu về được dùng để mua các khoản phải thu mới thay vì trả cho nhà đầu tư. Nhà đầu tư chỉ nhận lãi cho đến khi kỳ lockout kết thúc."
},
{
q: "An analyst gathers the following about a bond portfolio. Bond 1: par 700,000; book value 750,000; market value 770,000; modified duration 3. Bond 2: par 825,000; book value 700,000; market value 850,000; modified duration 8. The portfolio's duration is closest to:",
opts: ["5.4", "5.6", "5.7"],
ans: 1,
en: "Portfolio duration is the market-value-weighted average of the component durations. Total market value = 1,620,000; weights are 770,000/1,620,000 = 0.475 and 850,000/1,620,000 = 0.525. Duration = 0.475(3) + 0.525(8) = 5.6.",
vi: "Duration danh mục là bình quân gia quyền theo giá trị thị trường của duration từng thành phần. Tổng giá trị thị trường = 1,620,000; trọng số là 770,000/1,620,000 = 0.475 và 850,000/1,620,000 = 0.525. Duration = 0.475(3) + 0.525(8) = 5.6."
},
{
q: "An investor purchases common shares at EUR 22 per share on margin, depositing just enough to cover the 60% initial margin requirement. If the maintenance margin requirement is 25%, the share price below which the investor will first receive a margin call is closest to:",
opts: ["EUR 11.73", "EUR 16.50", "EUR 17.60"],
ans: 0,
en: "Amount borrowed = (1 - 0.60) x 22 = 8.80 per share. A margin call occurs when equity/price falls to the 25% maintenance level: (P - 8.80)/P = 0.25, so 0.75P = 8.80 and P = 11.73.",
vi: "Số tiền vay = (1 - 0.60) x 22 = 8.80 mỗi cổ phiếu. Margin call xảy ra khi vốn tự có/giá rớt về mức duy trì 25%: (P - 8.80)/P = 0.25, nên 0.75P = 8.80 và P = 11.73."
},
{
q: "An analyst gathers the following forward curve for one-year rates: 0y1y 1.20%; 1y1y 1.88%; 2y1y 2.46%; 3y1y 2.93%. The price of a three-year, 5% annual-pay bond is closest to:",
opts: ["107.42", "109.18", "111.73"],
ans: 1,
en: "Discount each cash flow along the forward path. DF1 = 1/1.012 = 0.98814; DF2 = DF1/1.0188 = 0.96991; DF3 = DF2/1.0246 = 0.94661. Price = 5(0.98814) + 5(0.96991) + 105(0.94661) = 4.941 + 4.850 + 99.394 = 109.18.",
vi: "Chiết khấu từng dòng tiền dọc theo chuỗi forward. DF1 = 1/1.012 = 0.98814; DF2 = DF1/1.0188 = 0.96991; DF3 = DF2/1.0246 = 0.94661. Giá = 5(0.98814) + 5(0.96991) + 105(0.94661) = 4.941 + 4.850 + 99.394 = 109.18."
},
{
q: "An American waterfall distributes performance fees on a(n):",
opts: ["deal-by-deal basis and is more advantageous to the general partner than a European waterfall", "deal-by-deal basis and is more advantageous to the limited partners than a European waterfall", "aggregated fund level and is more advantageous to the limited partners than a European waterfall"],
ans: 0,
en: "An American (deal-by-deal) waterfall lets the general partner collect performance fees on each successful deal as it is realized, so the GP is paid earlier — more advantageous to the GP than a European (whole-fund) waterfall, which favors the limited partners.",
vi: "American waterfall (deal-by-deal) cho phép general partner thu phí thưởng trên từng thương vụ thành công khi được hiện thực hóa, nên GP được trả sớm hơn — có lợi cho GP hơn so với European waterfall (toàn quỹ), vốn có lợi cho limited partner."
},
{
q: "A factor that most likely measures a client's ability to bear risk is his or her:",
opts: ["time horizon", "personality type", "inclination to independent thinking"],
ans: 0,
en: "Ability to bear risk depends on objective circumstances such as time horizon, wealth, income stability, and liquidity needs. Personality type and thinking style relate to willingness (the psychological dimension) rather than ability.",
vi: "Khả năng chịu rủi ro phụ thuộc vào hoàn cảnh khách quan như khung thời gian, tài sản, sự ổn định thu nhập và nhu cầu thanh khoản. Kiểu tính cách và lối tư duy liên quan đến mức sẵn lòng (khía cạnh tâm lý) chứ không phải khả năng."
}
]
});
