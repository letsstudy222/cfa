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
