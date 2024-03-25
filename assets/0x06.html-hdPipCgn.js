import{_ as p}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as t,c as e,a as o,b as n,f as a,d as s}from"./app-_Us5wM1p.js";const c={},l=n("p",null,"倍增，顾名思义就是翻倍。它能够使线性的处理转化为对数级的处理，大大地优化时间复杂度。",-1),i=a(`<p>这个方法在很多算法中均有应用，其中最常用的是 RMQ 问题的ST算法和求 LCA（最近公共祖先）树上倍增。</p><h2 id="倍增法" tabindex="-1"><a class="header-anchor" href="#倍增法" aria-hidden="true">#</a> 倍增法</h2><p>倍增法是一种快速计算一个数的幂的算法。该算法基于指数的二进制分解，并利用指数的二进制表示的特性，通过不断平方和乘法来快速计算幂。该算法的时间复杂度为$O(\\log n)$。<br> 通过递推状态空间在2的整数次幂位置上的值作为代表，当需要其他位置上的值时，可以将任意整数表示成若干个2的次幂项之和，即二进制划分，使用已经记录的代表值拼接，因此使用倍增法需要我们的递推问题状态空间关于2 的次幂具有可划分性。</p><h3 id="例题-acwing109-天才acm" tabindex="-1"><a class="header-anchor" href="#例题-acwing109-天才acm" aria-hidden="true">#</a> 例题 AcWing109 天才ACM</h3><h4 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h4><p>给定一个整数 M，对于任意一个整数集合 S，定义“校验值”如下:<br> 从集合 S 中取出 M 对数(即 2×M 个数，不能重复使用集合中的数，如果 S 中的整数不够 M 对，则取到不能取为止)，使得“每对数的差的平方”之和最大，这个最大值就称为集合 S 的“校验值”。</p><p>现在给定一个长度为 N 的数列 A 以及一个整数 T。</p><p>我们要把 A 分成若干段，使得每一段的“校验值”都不超过 T。</p><p>求最少需要分成几段。</p><h4 id="input" tabindex="-1"><a class="header-anchor" href="#input" aria-hidden="true">#</a> Input</h4><p>第一行输入整数 K，代表有 K 组测试数据。</p><p>对于每组测试数据，第一行包含三个整数 N,M,T 。</p><p>第二行包含 N 个整数，表示数列A1,A2…AN。</p><h4 id="output" tabindex="-1"><a class="header-anchor" href="#output" aria-hidden="true">#</a> Output</h4><p>对于每组测试数据，输出其答案，每个答案占一行。</p><h4 id="range" tabindex="-1"><a class="header-anchor" href="#range" aria-hidden="true">#</a> Range</h4><p>$1≤K≤12,1≤N,M≤500000,0≤T≤1018,0≤Ai≤220$</p><h4 id="sample-input" tabindex="-1"><a class="header-anchor" href="#sample-input" aria-hidden="true">#</a> Sample Input</h4><p>2<br> 5 1 49<br> 8 2 1 7 9<br> 5 1 64<br> 8 2 1 7 9</p><h4 id="sample-output" tabindex="-1"><a class="header-anchor" href="#sample-output" aria-hidden="true">#</a> Sample Output</h4><p>2<br> 1</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token triple-quoted-string string">&quot;&quot;&quot;
二分区间可以求解，但扩展速度太慢，需要一种与右端点R扩展长度相适应的算法
倍增过程如下:
1. 初始化  p=1, R=L
2. 求出  [L, R+p]  这一段区间的校验值:
    - 若校验值  \\leq T  ，则  R+=p, p^{*}=2
    - 若校验值  &gt;T  ，则  \\mathrm{p} /=2
3. 重复上一步，直到  p  变为 0 为止，此时  R  即为所求
&quot;&quot;&quot;</span>


<span class="token keyword">def</span> <span class="token function">check</span><span class="token punctuation">(</span>l<span class="token punctuation">,</span> r<span class="token punctuation">)</span><span class="token punctuation">:</span>
    sub <span class="token operator">=</span> <span class="token builtin">sorted</span><span class="token punctuation">(</span>A<span class="token punctuation">[</span>l<span class="token punctuation">:</span>r<span class="token punctuation">]</span><span class="token punctuation">)</span>
    tot <span class="token operator">=</span> <span class="token number">0</span>
    i<span class="token punctuation">,</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> r <span class="token operator">-</span> l <span class="token operator">-</span> <span class="token number">1</span>
    <span class="token keyword">while</span> i <span class="token operator">&lt;</span> j <span class="token keyword">and</span> i <span class="token operator">&lt;</span> M<span class="token punctuation">:</span>
        tot <span class="token operator">+=</span> <span class="token punctuation">(</span>sub<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-</span> sub<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">**</span> <span class="token number">2</span>
        i <span class="token operator">+=</span> <span class="token number">1</span>
        j <span class="token operator">-=</span> <span class="token number">1</span>
    <span class="token keyword">return</span> tot <span class="token operator">&lt;=</span> T

<span class="token triple-quoted-string string">&quot;&quot;&quot;
优化：二路归并，只排序r-r+p的新序列，与原排序好的序列合并
&quot;&quot;&quot;</span>

<span class="token keyword">def</span> <span class="token function">merge</span><span class="token punctuation">(</span>sub_old<span class="token punctuation">,</span> sub_new<span class="token punctuation">)</span><span class="token punctuation">:</span>
    i <span class="token operator">=</span> j <span class="token operator">=</span> <span class="token number">0</span>
    merged <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">while</span> i <span class="token operator">&lt;</span> <span class="token builtin">len</span><span class="token punctuation">(</span>sub_old<span class="token punctuation">)</span> <span class="token keyword">and</span> j <span class="token operator">&lt;</span> <span class="token builtin">len</span><span class="token punctuation">(</span>sub_new<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> sub_old<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> sub_new<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">:</span>
            merged<span class="token punctuation">.</span>append<span class="token punctuation">(</span>sub_new<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span>
            j <span class="token operator">+=</span> <span class="token number">1</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            merged<span class="token punctuation">.</span>append<span class="token punctuation">(</span>sub_old<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
            i <span class="token operator">+=</span> <span class="token number">1</span>
    merged <span class="token operator">+=</span> sub_old<span class="token punctuation">[</span>i<span class="token punctuation">:</span><span class="token punctuation">]</span>
    merged <span class="token operator">+=</span> sub_new<span class="token punctuation">[</span>j<span class="token punctuation">:</span><span class="token punctuation">]</span>
    <span class="token keyword">return</span> merged


K <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">while</span> K<span class="token punctuation">:</span>
    N<span class="token punctuation">,</span> M<span class="token punctuation">,</span> T <span class="token operator">=</span> <span class="token builtin">map</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    A <span class="token operator">=</span> <span class="token builtin">list</span><span class="token punctuation">(</span><span class="token builtin">map</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    old <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    l<span class="token punctuation">,</span> cnt <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span>
    <span class="token keyword">while</span> l <span class="token operator">&lt;</span> N<span class="token punctuation">:</span>
        p<span class="token punctuation">,</span> r <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> l
        <span class="token keyword">while</span> p<span class="token punctuation">:</span>
            <span class="token keyword">if</span> r <span class="token operator">+</span> p <span class="token operator">&lt;=</span> N <span class="token keyword">and</span> check<span class="token punctuation">(</span>l<span class="token punctuation">,</span> r <span class="token operator">+</span> p<span class="token punctuation">)</span><span class="token punctuation">:</span>
                r <span class="token operator">+=</span> p
                p <span class="token operator">*=</span> <span class="token number">2</span>
            <span class="token keyword">else</span><span class="token punctuation">:</span>
                p <span class="token operator">//=</span> <span class="token number">2</span>
        cnt <span class="token operator">+=</span> <span class="token number">1</span>
        l <span class="token operator">=</span> r
    <span class="token keyword">print</span><span class="token punctuation">(</span>cnt<span class="token punctuation">)</span>
    K <span class="token operator">-=</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="st算法" tabindex="-1"><a class="header-anchor" href="#st算法" aria-hidden="true">#</a> ST算法</h2><p>在RMQ问题（区间最值问题）中，ST(Sparse Table)算法是倍增的衍生。</p><p>一般来说，ST算法与线段树算法等一起提及，线段树算法是对一维序列递归二分的一棵树形结构，用于维护区间信息。ST算法也有一些限制，它要求查询的区间大小不能超过预处理区间的大小，而线段树算法没有这个限制，可以处理更为灵活的查询。</p><p>给定一个长度为N的数列A，ST算法能在$O(N \\log N)$时间预处理后，以$O(1)$的时间复杂度在线回答”数列A中下标在l~r之间的数的最大值是多少“这样的问题。</p><p>设f[i, j]表示数列A中下标在子区间[i， i + $2^j$ - 1]里的最大值，即从i开始的$2^j$个数的最大值。递推边界为f[i, 0] = A[i]，即数列A在子区间[i, i]里的最大值。</p>`,27),u=n("p",null,[s("在递推过程中，将子区间的长度成倍增长，公式f[i, j] = max(f[i, j - 1], f[i + $2^{j - 1}$, j - 1])，即长度为$2"),n("sup",{j:"","-":"",1:""},"j$的子区间的最大值是左右两半长度为$2"),s("$的子区间的最大值中较大的一个。")],-1),r=a(`<p>当询问任意区间[l, r]最值时，首先计算出k，满足$2^k$ &lt;= r - l + 1 &lt; $2^k$，即在2的k次幂小于区间长度的前提下最大的k。<br> 那”从l开始的$2<sup>k$个数“和“以r结尾的$2</sup>k$个数”这两段一定能够覆盖整个区间[l, r]，这两段的最大值分别是f[l][k]和f[r - 2 ** k + 1][k]，而这种较大的值便是整个区间[l, r]的最值，虽然区间存在重叠，但覆盖了整个区间，所以不存在影响。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> N <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        f<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> A<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> LOG_N<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>N <span class="token operator">-</span> <span class="token number">2</span> <span class="token operator">**</span> j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            f<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token builtin">max</span><span class="token punctuation">(</span>f<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> f<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">2</span> <span class="token operator">**</span> <span class="token punctuation">(</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span>


<span class="token keyword">def</span> <span class="token function">query</span><span class="token punctuation">(</span>l<span class="token punctuation">,</span> r<span class="token punctuation">)</span><span class="token punctuation">:</span>
    k <span class="token operator">=</span> <span class="token punctuation">(</span>r <span class="token operator">-</span> l <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span>bit_length<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span>
    <span class="token keyword">return</span> <span class="token builtin">max</span><span class="token punctuation">(</span>f<span class="token punctuation">[</span>l<span class="token punctuation">]</span><span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">,</span> f<span class="token punctuation">[</span>r <span class="token operator">-</span> <span class="token number">2</span> <span class="token operator">**</span> k <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">)</span>

N <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
l<span class="token punctuation">,</span> r <span class="token operator">=</span> <span class="token builtin">map</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
log_N <span class="token operator">=</span> N<span class="token punctuation">.</span>bit_length<span class="token punctuation">(</span><span class="token punctuation">)</span>
f <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">*</span> <span class="token punctuation">(</span>log_N <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">for</span> _ <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>N <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
A <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token builtin">list</span><span class="token punctuation">(</span><span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> N <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
build<span class="token punctuation">(</span><span class="token punctuation">)</span>
query<span class="token punctuation">(</span>l<span class="token punctuation">,</span> r<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function k(d,b){return t(),e("div",null,[l,o(" more "),i,u,r])}const h=p(c,[["render",k],["__file","0x06.html.vue"]]);export{h as default};