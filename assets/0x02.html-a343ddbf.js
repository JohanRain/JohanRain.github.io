import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as n,a as l,d as s,f as a}from"./app-617842b0.js";const i={},r=s("p",null,"状态空间是指在一个问题域内所有可能的状态组成的集合。",-1),m=a('<p>在求解问题时，状态空间常用于生成问题的解空间，这是一个包含所有问题可能解的集合。生成解空间的过程可能涉及到搜索、剪枝和启发式算法等技术。递推与递归时常用遍历状态空间的基本方式。</p><h2 id="递推与递归的宏观描述" tabindex="-1"><a class="header-anchor" href="#递推与递归的宏观描述" aria-hidden="true">#</a> 递推与递归的宏观描述</h2><p>递归和递推都是计算机程序设计中常用的概念，它们都是计算机算法的基础。</p><p>递归是指在一个函数或者过程中调用自身，通常递归函数会有一个或多个基准情形（base case），用于终止递归的过程。递归函数在运行时会将问题分解成同样的子问题，递归地解决子问题，并将它们的解合并成原问题的解。递归函数的实现可以使代码结构更加简洁和易于理解，但是也需要额外的内存和时间成本。</p><p>递推是指在计算一个问题的解时，利用已知答案的情况下，通过逐步推导得到后面的答案。递推一般通过迭代的方式实现，即从已知问题的解开始，依次推导出后面的解。递推法通常会消耗更少的内存和时间，但是实现的代码可能会比递归更加繁琐。</p><p>总的来说，递推和递归都是解决问题的有效方法，具体使用哪种方法取决于问题的特性和计算机的资源限制。</p><h3 id="递归" tabindex="-1"><a class="header-anchor" href="#递归" aria-hidden="true">#</a> 递归</h3><p>递归是通过在一个函数或者过程中调用自身来解决问题的一种方法。递归包括两个要素：递归调用和终止条件。递归的终止条件是必须的，如果没有终止条件，递归就会一直进行下去，直到内存耗尽。</p><p>递归的实现过程一般可以使用栈来进行模拟。每次递归调用，函数的参数和局部变量都会被保存在栈中，直到递归结束，栈中的元素才会出栈回到上一次调用的位置。因为递归需要不断地进行函数调用和返回过程，所以在程序运算过程中可能会导致较大的时间和空间开销。</p><p>虽然递归实现算法相对复杂，但递归的思想却可以使代码更加简洁和易于理解。递归可以用于解决许多问题，如树的遍历、排列和组合等数学问题，以及迷宫问题、回溯问题等其他算法问题。</p><h3 id="递推" tabindex="-1"><a class="header-anchor" href="#递推" aria-hidden="true">#</a> 递推</h3><p>递推是一种通过已知的初始值和递推公式/递推关系式计算出一系列项的方法。递推包括两个要素：初始值和递推公式。初始值是指已知的第一项或者前几项的值，而递推公式则是指根据已知项求解下一项的数学公式/关系式。</p><p>递推算法通常是以循环的方式实现的。在执行递归循环过程中，每当算法计算出一个新的值，这个值就会被用作下次循环的开始值。因此，通过一系列迭代，递推算法可以快速计算出一连串项的值。与递归算法相比，递推算法通常更高效，因为递推算法避免了递归过程中的多次函数调用以及额外的栈空间开销。</p><p>递推广泛应用于各种数学问题，例如解决斐波那契数列、等差数列、等比数列，以及求解二项式系数等问题。此外，在动态规划算法中，递推算法也扮演着重要的角色。</p><h2 id="递推与递归的应用" tabindex="-1"><a class="header-anchor" href="#递推与递归的应用" aria-hidden="true">#</a> 递推与递归的应用</h2>',15),c=s("table",null,[s("thead",null,[s("tr",null,[s("th",{style:{"text-align":"center"}},"枚举类型"),s("th",{style:{"text-align":"center"}},"状态空间规模"),s("th",{style:{"text-align":"center"}},"遍历方式")])]),s("tbody",null,[s("tr",null,[s("td",{style:{"text-align":"center"}},"多项式"),s("td",{style:{"text-align":"center"}},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("msup",null,[s("mi",null,"n"),s("mi",null,"k")]),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"O(n^k)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.0991em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"n"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8491em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight",style:{"margin-right":"0.03148em"}},"k")])])])])])])]),s("span",{class:"mclose"},")")])])])]),s("td",{style:{"text-align":"center"}},"循环、递推")]),s("tr",null,[s("td",{style:{"text-align":"center"}},"指数"),s("td",{style:{"text-align":"center"}},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("msup",null,[s("mi",null,"k"),s("mi",null,"n")]),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"O(k^n)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.03148em"}},"k"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.6644em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mathnormal mtight"},"n")])])])])])])]),s("span",{class:"mclose"},")")])])])]),s("td",{style:{"text-align":"center"}},"递归回溯、位运算")]),s("tr",null,[s("td",{style:{"text-align":"center"}},"排列"),s("td",{style:{"text-align":"center"}},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"n"),s("mo",{stretchy:"false"},"!"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"O(n!)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mclose"},"!)")])])])]),s("td",{style:{"text-align":"center"}},"递归回溯")]),s("tr",null,[s("td",{style:{"text-align":"center"}},"组合"),s("td",{style:{"text-align":"center"}},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msubsup",null,[s("mi",null,"C"),s("mi",null,"n"),s("mi",null,"m")])]),s("annotation",{encoding:"application/x-tex"},"C_{n}^{m}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.9303em","vertical-align":"-0.247em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal",style:{"margin-right":"0.07153em"}},"C"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.6644em"}},[s("span",{style:{top:"-2.453em","margin-left":"-0.0715em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"n")])])]),s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathnormal mtight"},"m")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.247em"}},[s("span")])])])])])])])])]),s("td",{style:{"text-align":"center"}},"递归回溯剪枝")])])],-1),h=a('<h3 id="其他例题" tabindex="-1"><a class="header-anchor" href="#其他例题" aria-hidden="true">#</a> 其他例题</h3><p>AcWing 92 递归实现指数型枚举</p><p>AcWing 93 递归实现组合型枚举</p><p>AcWing 94 递归实现排列型枚举</p><p>AcWing 95 费解的开关</p><p>AcWing 96 汉诺塔</p><h2 id="分治" tabindex="-1"><a class="header-anchor" href="#分治" aria-hidden="true">#</a> 分治</h2><p>分治是一种常用的算法设计方法，它将一个大问题分解成若干个相互独立且相同或类似的子问题，然后递归地解决每个子问题，最后合并子问题的解得到原问题的解。</p><p>分治法的基本思想是：将一个难以直接求解的大问题，分割成一些规模较小的子问题，然后递归求解这些子问题，最后将子问题的解合并成大问题的解。分治法需要满足两个基本要素：分阶段和合并阶段。在分阶段中，将问题划分成若干个阶段，在每个阶段内都是同样的操作；在合并阶段中，将各个阶段的结果汇总起来，得到最终的输出。</p><p>分治法的典型应用是归并排序、快速排序和二分查找等算法。</p><h2 id="分形" tabindex="-1"><a class="header-anchor" href="#分形" aria-hidden="true">#</a> 分形</h2><p>分形是一类具有自相似性的图形或物体，它们在任意不同的尺度下看起来都非常相似。分形具有无穷分割、无穷嵌套的特点，无论从整体还是局部来看，它的形状都是相似的，它们的形态构造往往可以通过数学公式来描述，也可以通过简单的递归方法得到。常见的分形有科赫雪花、曼德布洛集、分形树等等。</p><h2 id="递归的机器实现" tabindex="-1"><a class="header-anchor" href="#递归的机器实现" aria-hidden="true">#</a> 递归的机器实现*</h2>',13);function p(o,d){return e(),n("div",null,[r,l(" more "),m,c,h])}const x=t(i,[["render",p],["__file","0x02.html.vue"]]);export{x as default};
