/* =====================================================================
   Topic 08 — Derivatives
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
 "id": "deriv",
 "num": "08",
 "name": "Derivatives",
 "vi": "Công cụ phái sinh",
 "w": [
  5,
  8
 ],
 "blurb": "Forwards, futures, swaps, and options: features, payoff profiles, arbitrage-based pricing, and put–call parity.",
 "intro": {
  "en": "Derivatives at Level 1 is conceptual: know the instruments (forwards, futures, swaps, options), who bears which risk, and the no-arbitrage logic that prices them. The most testable pieces: forward pricing via cost of carry, option moneyness and payoff diagrams, and put–call parity.",
  "vi": "Derivatives ở Level 1 thiên về khái niệm: nắm các công cụ (forward, futures, swap, option), ai chịu rủi ro gì, và logic không-arbitrage dùng để định giá. Phần dễ ra thi nhất: định giá forward theo chi phí lưu giữ (cost of carry), trạng thái lời/lỗ (moneyness) và đồ thị payoff của quyền chọn, và ngang giá quyền chọn mua–bán (put–call parity)."
 },
 "modules": [
  {
   "title": "Forward Commitments",
   "sections": [
    {
     "h": "Forwards, futures, and swaps",
     "en": "<ul><li>A <strong>forward</strong> obligates both parties to trade an asset at a set price on a future date. OTC, customized, counterparty risk, no cash changes hands at initiation (value = 0 at start; the forward <em>price</em> is set so this holds).</li><li><strong>Futures</strong> are standardized, exchange-traded forwards with a clearinghouse guarantee, daily <strong>mark-to-market</strong> and margin. This removes most counterparty risk.</li><li>A <strong>swap</strong> is a series of forward-like exchanges. In a plain-vanilla interest rate swap, one side pays fixed and receives floating on a notional amount; only net payments are exchanged. The fixed rate is set so the swap has zero value at initiation. Pay-fixed = like being short bonds / hedging against rising rates.</li><li><strong>Pricing by no-arbitrage (cost of carry):</strong> F₀ = S₀ × (1 + r)<sup>T</sup> + FV(costs) − FV(benefits). Benefits (dividends, coupons, convenience yield) lower the forward price; carrying costs (storage, insurance) raise it. If the market forward deviates, cash-and-carry (or reverse) arbitrage forces it back.</li></ul>",
     "vi": "<ul><li><strong>Forward</strong> ràng buộc cả hai bên giao dịch tài sản tại mức giá xác định vào ngày tương lai. OTC, tùy chỉnh, có rủi ro đối tác, không trao tiền lúc khởi tạo (giá trị = 0 tại thời điểm đầu; <em>giá</em> forward được đặt để điều này đúng).</li><li><strong>Futures</strong> là forward chuẩn hóa, giao dịch trên sàn với trung tâm thanh toán bù trừ bảo lãnh, <strong>mark-to-market</strong> hằng ngày và ký quỹ → gần như loại bỏ rủi ro đối tác.</li><li><strong>Swap</strong> là chuỗi các trao đổi kiểu forward. Trong swap lãi suất chuẩn, một bên trả cố định – nhận thả nổi trên vốn danh nghĩa; chỉ trao đổi phần chênh lệch ròng. Lãi suất cố định được đặt để swap có giá trị 0 lúc khởi tạo. Trả cố định = giống bán khống trái phiếu / phòng hộ trước lãi suất tăng.</li><li><strong>Định giá theo không-arbitrage (cost of carry):</strong> F₀ = S₀ × (1 + r)<sup>T</sup> + FV(chi phí) − FV(lợi ích). Lợi ích (cổ tức, coupon, convenience yield) làm giảm giá forward; chi phí lưu giữ (kho bãi, bảo hiểm) làm tăng. Nếu giá thị trường lệch, arbitrage cash-and-carry (hoặc ngược lại) sẽ kéo về.</li></ul>"
    }
   ]
  },
  {
   "title": "Options & Put–Call Parity",
   "sections": [
    {
     "h": "Option basics and moneyness",
     "en": "<ul><li>A <strong>call</strong> gives the buyer the <em>right</em> (not obligation) to buy at the strike X; a <strong>put</strong> the right to sell. The buyer pays a <strong>premium</strong>; the seller (writer) keeps the premium and bears the obligation.</li><li>Payoffs at expiry: call buyer = max(0, S − X); put buyer = max(0, X − S). Profits subtract/add the premium. Maximum loss for a buyer = premium; maximum loss for a call writer = unlimited; for a put writer = X − premium.</li><li><strong>Moneyness:</strong> a call is in-the-money when S &gt; X; a put when S &lt; X. Option value = <strong>intrinsic value + time value</strong>; time value erodes to zero at expiry (theta decay).</li><li>Value drivers: calls rise with the underlying price, volatility, time (usually), and rates; fall with strike and expected dividends. Puts are the mirror image (but higher rates <em>reduce</em> put values). <em>Higher volatility raises both call and put values</em> — payoffs are asymmetric.</li><li>European options can be exercised only at expiry; American any time (worth at least as much).</li></ul>",
     "vi": "<ul><li><strong>Call</strong> cho người mua <em>quyền</em> (không phải nghĩa vụ) mua tại giá thực hiện X; <strong>put</strong> là quyền bán. Người mua trả <strong>phí quyền chọn</strong>; người bán nhận phí và gánh nghĩa vụ.</li><li>Payoff khi đáo hạn: mua call = max(0, S − X); mua put = max(0, X − S). Lợi nhuận cộng/trừ phí. Lỗ tối đa của người mua = phí; lỗ tối đa của người bán call = vô hạn; người bán put = X − phí.</li><li><strong>Moneyness:</strong> call ITM khi S &gt; X; put ITM khi S &lt; X. Giá trị quyền chọn = <strong>giá trị nội tại + giá trị thời gian</strong>; giá trị thời gian mòn về 0 khi đáo hạn.</li><li>Yếu tố tác động: call tăng theo giá tài sản, độ biến động, thời gian (thường), lãi suất; giảm theo giá thực hiện và cổ tức kỳ vọng. Put ngược lại (nhưng lãi suất cao làm <em>giảm</em> giá put). <em>Biến động cao làm tăng giá cả call lẫn put</em> — vì payoff bất đối xứng.</li><li>Quyền chọn kiểu Âu chỉ thực hiện lúc đáo hạn; kiểu Mỹ bất kỳ lúc nào (giá trị ít nhất bằng kiểu Âu).</li></ul>"
    },
    {
     "h": "Put–call parity",
     "en": "<p>For European options on the same underlying, strike, and expiry:</p><p><strong>c + X/(1+r)<sup>T</sup> = p + S₀</strong></p><p>Left side = <em>fiduciary call</em> (call + riskless bond paying X); right side = <em>protective put</em> (stock + put). Both give the same payoff — max(S<sub>T</sub>, X) — so they must cost the same, or arbitrage exists. Rearranged, parity lets you create <strong>synthetic</strong> positions: e.g., synthetic call = p + S₀ − X/(1+r)<sup>T</sup>. Put–call–forward parity replaces the stock with a forward: c + X/(1+r)<sup>T</sup> = p + F₀/(1+r)<sup>T</sup>.</p>",
     "vi": "<p>Với quyền chọn kiểu Âu cùng tài sản cơ sở, cùng giá thực hiện và ngày đáo hạn:</p><p><strong>c + X/(1+r)<sup>T</sup> = p + S₀</strong></p><p>Vế trái = <em>fiduciary call</em> (call + trái phiếu phi rủi ro trả X); vế phải = <em>protective put</em> (cổ phiếu + put). Cả hai cho cùng payoff — max(S<sub>T</sub>, X) — nên phải có cùng giá, nếu không sẽ có arbitrage. Biến đổi công thức cho phép tạo vị thế <strong>tổng hợp (synthetic)</strong>: VD call tổng hợp = p + S₀ − X/(1+r)<sup>T</sup>. Ngang giá put–call–forward thay cổ phiếu bằng forward.</p>"
    }
   ],
   "formulas": [
    [
     "Forward price",
     "F0 = S0(1+r)^T + FV(costs) − FV(benefits)",
     "Cost of carry model"
    ],
    [
     "Call payoff",
     "max(0, S − X)",
     "Put payoff: max(0, X − S)"
    ],
    [
     "Put–call parity",
     "c + X/(1+r)^T = p + S0",
     "European options only"
    ],
    [
     "Intrinsic value (call)",
     "max(0, S − X)",
     "Option value = intrinsic + time value"
    ]
   ]
  }
 ],
 "vocab": [
  [
   "notional amount",
   "Reference amount on which derivative payments are computed.",
   "giá trị danh nghĩa"
  ],
  [
   "mark-to-market",
   "Daily settlement of futures gains and losses.",
   "hạch toán theo giá thị trường hằng ngày"
  ],
  [
   "clearinghouse",
   "Entity that guarantees both sides of exchange-traded derivatives.",
   "trung tâm thanh toán bù trừ"
  ],
  [
   "strike (exercise) price",
   "Price at which an option can be exercised.",
   "giá thực hiện"
  ],
  [
   "premium",
   "Price paid by the option buyer to the writer.",
   "phí quyền chọn"
  ],
  [
   "in/at/out of the money",
   "Option with positive / zero / negative intrinsic value.",
   "trạng thái lời / hòa / lỗ của quyền chọn"
  ],
  [
   "time value",
   "Option value above intrinsic value; decays with time.",
   "giá trị thời gian"
  ],
  [
   "protective put",
   "Long stock + long put: downside insurance.",
   "chiến lược bảo hộ bằng quyền chọn bán"
  ],
  [
   "covered call",
   "Long stock + short call: income, capped upside.",
   "bán call có bảo đảm"
  ],
  [
   "contango / backwardation",
   "Futures price above / below the spot price.",
   "giá kỳ hạn cao hơn / thấp hơn giá giao ngay"
  ]
 ],
 "quiz": [
  {
   "q": "A stock trades at $100. The risk-free rate is 5% and the stock pays no dividends. The one-year forward price is closest to:",
   "opts": [
    "$95.24",
    "$100.00",
    "$105.00"
   ],
   "ans": 2,
   "en": "C is correct. F0 = S0(1+r)^T = 100 × 1.05 = $105. The forward price compensates the short for carrying the asset — it is an arbitrage relationship, not a forecast of the future spot price.",
   "vi": "Đáp án C. F0 = 100 × 1.05 = 105 USD. Giá forward bù đắp chi phí nắm giữ tài sản — đây là quan hệ arbitrage, không phải dự báo giá giao ngay tương lai."
  },
  {
   "q": "An investor buys a call with strike $50 for a premium of $4. At expiration the stock trades at $57. The investor’s profit is:",
   "opts": [
    "$3",
    "$7",
    "$11"
   ],
   "ans": 0,
   "en": "A is correct. Payoff = max(0, 57 − 50) = $7; profit = payoff − premium = 7 − 4 = $3.",
   "vi": "Đáp án A. Payoff = max(0, 57 − 50) = 7; lợi nhuận = 7 − 4 = 3 USD."
  },
  {
   "q": "According to put–call parity, a synthetic long call position can be created by:",
   "opts": [
    "long put + long stock + borrowing the PV of the strike.",
    "long put + long stock + lending the PV of the strike.",
    "short put + long risk-free bond."
   ],
   "ans": 0,
   "en": "A is correct. From c = p + S0 − X/(1+r)^T: buy the put, buy the stock, and borrow the present value of the strike (the negative bond term = borrowing).",
   "vi": "Đáp án A. Từ c = p + S0 − X/(1+r)^T: mua put, mua cổ phiếu, và vay khoản bằng hiện giá của giá thực hiện (dấu trừ của trái phiếu = đi vay)."
  },
  {
   "q": "Compared with forwards, futures contracts most likely have:",
   "opts": [
    "greater counterparty risk.",
    "greater customization of contract terms.",
    "daily settlement of gains and losses."
   ],
   "ans": 2,
   "en": "C is correct. Futures are marked to market daily through a clearinghouse with margin requirements, which nearly eliminates counterparty risk (A wrong) at the cost of standardization (B wrong).",
   "vi": "Đáp án C. Futures được hạch toán lãi/lỗ hằng ngày qua trung tâm thanh toán bù trừ với ký quỹ, gần như loại bỏ rủi ro đối tác (A sai) nhưng đổi lại là hợp đồng chuẩn hóa, không tùy chỉnh (B sai)."
  }
 ]
});
window.CFA.extra["deriv"] = {
 "checks": [
  [
   {
    "q": "Compared with a forward contract, a futures contract most notably features:",
    "opts": [
     "Customized terms and no collateral",
     "Exchange trading, daily mark-to-market, and a clearinghouse guarantee",
     "Higher counterparty risk"
    ],
    "ans": 1,
    "en": "Futures are standardized, exchange-traded, margined and marked to market daily — nearly eliminating counterparty risk that forwards carry.",
    "vi": "Futures chuẩn hóa, giao dịch trên sàn, ký quỹ và hạch toán lãi lỗ hằng ngày qua trung tâm thanh toán bù trừ — gần như loại bỏ rủi ro đối tác của forward."
   },
   {
    "q": "With spot price S₀ and risk-free rate r, the no-arbitrage forward price for delivery at time T (no carry costs or income) is:",
    "opts": [
     "The market’s expected future spot price",
     "S₀ × (1 + r)ᵀ",
     "S₀ discounted at r"
    ],
    "ans": 1,
    "en": "F₀ = S₀(1 + r)ᵀ comes from cash-and-carry arbitrage — it is a financing relationship, not a forecast of the future spot price.",
    "vi": "F₀ = S₀(1 + r)ᵀ suy ra từ arbitrage mua–nắm giữ; đây là quan hệ chi phí vốn, không phải dự báo giá giao ngay tương lai."
   }
  ],
  [
   {
    "q": "A call option with strike $50 on a stock trading at $57 is:",
    "opts": [
     "Out of the money",
     "In the money with intrinsic value $7",
     "At the money"
    ],
    "ans": 1,
    "en": "Call intrinsic value = max(S − X, 0) = 57 − 50 = $7 → in the money. (For puts it is max(X − S, 0).)",
    "vi": "Giá trị nội tại của call = max(S − X, 0) = 7 USD → đang có lời (ITM). Với put là max(X − S, 0)."
   },
   {
    "q": "Put–call parity for European options on a non-dividend stock states:",
    "opts": [
     "c + S = p + PV(X)",
     "c + PV(X) = p + S",
     "c − p = PV(X) − S"
    ],
    "ans": 1,
    "en": "c + PV(X) = p + S: a fiduciary call (call + risk-free bond) replicates a protective put (stock + put). Any violation is an arbitrage.",
    "vi": "c + PV(X) = p + S: “fiduciary call” (call + trái phiếu phi rủi ro) tương đương “protective put” (cổ phiếu + put). Lệch đẳng thức là có arbitrage."
   }
  ]
 ],
 "sets": [
  [
   {
    "q": "A stock trades at $100 and the annual risk-free rate is 5%. The no-arbitrage one-year forward price is:",
    "opts": [
     "$95.24",
     "$105.00",
     "$100.00"
    ],
    "ans": 1,
    "en": "F₀ = 100 × 1.05 = $105.",
    "vi": "F₀ = 100 × 1,05 = 105 USD theo nguyên tắc không arbitrage."
   },
   {
    "q": "The payoff at expiration to a long put with strike X on a stock priced Sᵀ is:",
    "opts": [
     "max(Sᵀ − X, 0)",
     "max(X − Sᵀ, 0)",
     "X − Sᵀ always"
    ],
    "ans": 1,
    "en": "A put pays max(X − Sᵀ, 0): value rises as the stock falls below strike; worthless above it.",
    "vi": "Put đáo hạn trả max(X − Sᵀ, 0): có giá trị khi giá cổ phiếu thấp hơn strike, bằng 0 nếu cao hơn."
   },
   {
    "q": "An interest rate swap can best be viewed as:",
    "opts": [
     "A single option contract",
     "A series of forward contracts on interest rates",
     "A portfolio of equities"
    ],
    "ans": 1,
    "en": "Each swap settlement is economically an FRA — the swap is a package of forward commitments priced so initial value is zero.",
    "vi": "Mỗi kỳ thanh toán của swap tương đương một hợp đồng kỳ hạn lãi suất (FRA) — swap là chuỗi forward, định giá sao cho giá trị ban đầu bằng 0."
   },
   {
    "q": "At expiration, an option’s time value equals:",
    "opts": [
     "Its intrinsic value",
     "Zero — the option is worth only intrinsic value",
     "The premium paid"
    ],
    "ans": 1,
    "en": "Time value decays to zero at expiry; the option finishes worth exactly max(intrinsic, 0).",
    "vi": "Giá trị thời gian hao mòn về 0 khi đáo hạn; option chỉ còn đúng giá trị nội tại."
   },
   {
    "q": "A protective put strategy consists of:",
    "opts": [
     "Long stock + long put, creating a floor on portfolio value",
     "Long stock + short call",
     "Short stock + long call"
    ],
    "ans": 0,
    "en": "Stock plus a long put guarantees a minimum exit price of X (less the premium) — insurance on the position.",
    "vi": "Cổ phiếu + mua put tạo mức sàn giá trị danh mục (strike trừ phí quyền) — như mua bảo hiểm cho vị thế."
   },
   {
    "q": "Derivative pricing models rely fundamentally on:",
    "opts": [
     "Investors’ risk preferences",
     "The law of one price and the absence of arbitrage",
     "Historical average returns"
    ],
    "ans": 1,
    "en": "No-arbitrage/replication logic prices derivatives independent of risk preferences — identical payoffs must have identical prices.",
    "vi": "Định giá phái sinh dựa trên nguyên tắc một giá và không arbitrage: hai dòng tiền giống hệt nhau phải có cùng một giá, bất kể khẩu vị rủi ro."
   }
  ],
  [
   {
    "q": "European options: call price $6, PV of strike $95, stock price $98. By put–call parity, the put price is:",
    "opts": [
     "$3.00",
     "$9.00",
     "$1.00"
    ],
    "ans": 0,
    "en": "p = c + PV(X) − S = 6 + 95 − 98 = $3.",
    "vi": "p = c + PV(X) − S = 6 + 95 − 98 = 3 USD."
   },
   {
    "q": "Daily marking to market of futures primarily reduces:",
    "opts": [
     "Market risk",
     "Counterparty (default) risk",
     "Liquidity"
    ],
    "ans": 1,
    "en": "Settling gains and losses daily through margin accounts keeps unpaid exposures tiny, so a default costs little.",
    "vi": "Hạch toán lãi lỗ hằng ngày qua tài khoản ký quỹ giữ mức lỗ chưa thanh toán rất nhỏ → rủi ro đối tác gần như triệt tiêu."
   },
   {
    "q": "A covered call (long stock + short call) is best described as:",
    "opts": [
     "Unlimited upside with a floor",
     "Income today in exchange for giving up upside above the strike",
     "A riskless arbitrage"
    ],
    "ans": 1,
    "en": "The premium enhances income, but stock gains above the strike are surrendered to the call buyer; downside remains (cushioned by the premium).",
    "vi": "Covered call: nhận phí quyền ngay nhưng từ bỏ phần tăng giá vượt strike; rủi ro giảm giá vẫn còn, chỉ được đệm bằng khoản phí."
   },
   {
    "q": "An American option differs from a European option in that it:",
    "opts": [
     "Trades only in the US",
     "Can be exercised at any time up to expiration",
     "Always costs less"
    ],
    "ans": 1,
    "en": "American = exercisable any time (worth at least as much as the European equivalent); European = exercisable only at expiration.",
    "vi": "Option kiểu Mỹ được thực hiện bất cứ lúc nào trước đáo hạn (giá trị ≥ kiểu Âu tương đương); kiểu Âu chỉ tại đáo hạn."
   },
   {
    "q": "The maximum loss to the buyer of a call option is:",
    "opts": [
     "Unlimited",
     "The premium paid",
     "The strike price"
    ],
    "ans": 1,
    "en": "A long option can expire worthless at most — loss is capped at the premium. (The short call bears the unlimited risk.)",
    "vi": "Người mua call lỗ tối đa bằng phí quyền đã trả; rủi ro không giới hạn thuộc về người bán call."
   },
   {
    "q": "As a futures contract approaches expiration, its price:",
    "opts": [
     "Diverges from the spot price",
     "Converges to the spot price of the underlying",
     "Becomes constant"
    ],
    "ans": 1,
    "en": "At expiry the futures is the spot transaction, so any gap would be a riskless arbitrage — prices must converge.",
    "vi": "Đến đáo hạn, hợp đồng futures chính là giao dịch giao ngay — chênh lệch nào cũng là arbitrage phi rủi ro nên giá phải hội tụ về giá spot."
   }
  ]
 ]
};
