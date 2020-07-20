(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{755:function(e,t,a){"use strict";a.r(t);var v=a(10),_=Object(v.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("我们已经学习了 20 节内容，你有没有发现，有两种数据结构，散列表和链表，经常会被放在一起使用。你还记得，前面的章节中都有哪些地方讲到散列表和链表的组合使用吗？我带你一起回忆一下。")]),e._v(" "),a("p",[e._v("在链表那一节，我讲到如何用链表来实现 LRU 缓存淘汰算法，但是链表实现的 LRU 缓存淘汰算法的时间复杂度是 O(n)，当时我也提到了，通过散列表可以将这个时间复杂度降低到 O(1)。")]),e._v(" "),a("p",[e._v("在跳表那一节，我提到 Redis 的有序集合是使用跳表来实现的，跳表可以看作一种改进版的链表。当时我们也提到，Redis 有序集合不仅使用了跳表，还用到了散列表。")]),e._v(" "),a("p",[e._v("除此之外，如果你熟悉 Java 编程语言，你会发现 LinkedHashMap 这样一个常用的容器，也用到了散列表和链表两种数据结构。")]),e._v(" "),a("p",[e._v("今天，我们就来看看，在这几个问题中，散列表和链表都是如何组合起来使用的，以及为什么散列表和链表会经常放到一块使用")]),e._v(" "),a("h2",{attrs:{id:"lru-缓存淘汰算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lru-缓存淘汰算法"}},[e._v("#")]),e._v(" LRU 缓存淘汰算法")]),e._v(" "),a("p",[e._v("在链表那一节中，我提到，借助散列表，我们可以把 LRU 缓存淘汰算法的时间复杂度降低为 O(1)。现在，我们就来看看它是如何做到的。")]),e._v(" "),a("p",[e._v("首先，我们来回顾一下当时我们是如何通过链表实现 LRU 缓存淘汰算法的。")]),e._v(" "),a("p",[e._v("我们需要维护一个按照访问时间从大到小有序排列的链表结构。因为缓存大小有限，当缓存空间不够，需要淘汰一个数据的时候，我们就直接将链表头部的结点删除。")]),e._v(" "),a("p",[e._v("当要缓存某个数据的时候，先在链表中查找这个数据。如果没有找到，则直接将数据放到链表的尾部；如果找到了，我们就把它移动到链表的尾部。因为查找数据需要遍历链表，所以单纯用链表实现的 LRU 缓存淘汰算法的时间复杂很高，是 O(n)。")]),e._v(" "),a("blockquote",[a("p",[e._v("实际上，我总结一下，一个缓存（cache）系统主要包含下面这几个操作：")])]),e._v(" "),a("ul",[a("li",[e._v("往缓存中添加一个数据；")]),e._v(" "),a("li",[e._v("从缓存中删除一个数据；")]),e._v(" "),a("li",[e._v("在缓存中查找一个数据。")])]),e._v(" "),a("p",[e._v("这三个操作都要涉及“查找”操作，如果单纯地采用链表的话，时间复杂度只能是 O(n)。如果我们将散列表和链表两种数据结构组合使用，可以将这三个操作的时间复杂度都降低到 O(1)。具体的结构就是下面这个样子：")]),e._v(" "),a("p",[a("img",{attrs:{src:"http://blog.poetries.top/img-repo/2020/07/234.png",alt:""}})]),e._v(" "),a("p",[e._v("我们使用双向链表存储数据，链表中的每个结点处理存储数据（data）、前驱指针（prev）、后继指针（next）之外，还新增了一个特殊的字段 hnext。这个 hnext 有什么作用呢？")]),e._v(" "),a("p",[e._v("因为我们的散列表是通过链表法解决散列冲突的，所以每个结点会在两条链中。一个链是刚刚我们提到的双向链表，另一个链是散列表中的拉链。前驱和后继指针是为了将结点串在双向链表中，hnext 指针是为了将结点串在散列表的拉链中。")]),e._v(" "),a("p",[e._v("了解了这个散列表和双向链表的组合存储结构之后，我们再来看，前面讲到的缓存的三个操作，是如何做到时间复杂度是 O(1) 的？")]),e._v(" "),a("p",[e._v("首先，我们来看如何查找一个数据。我们前面讲过，散列表中查找数据的时间复杂度接近 O(1)，所以通过散列表，我们可以很快地在缓存中找到一个数据。当找到数据之后，我们还需要将它移动到双向链表的尾部。")]),e._v(" "),a("p",[e._v("其次，我们来看如何删除一个数据。我们需要找到数据所在的结点，然后将结点删除。借助散列表，我们可以在 O(1) 时间复杂度里找到要删除的结点。因为我们的链表是双向链表，双向链表可以通过前驱指针 O(1) 时间复杂度获取前驱结点，所以在双向链表中，删除结点只需要 O(1) 的时间复杂度。")]),e._v(" "),a("p",[e._v("最后，我们来看如何添加一个数据。添加数据到缓存稍微有点麻烦，我们需要先看这个数据是否已经在缓存中。如果已经在其中，需要将其移动到双向链表的尾部；如果不在其中，还要看缓存有没有满。如果满了，则将双向链表头部的结点删除，然后再将数据放到链表的尾部；如果没有满，就直接将数据放到链表的尾部。")]),e._v(" "),a("p",[e._v("这整个过程涉及的查找操作都可以通过散列表来完成。其他的操作，比如删除头结点、链表尾部插入数据等，都可以在 O(1) 的时间复杂度内完成。所以，这三个操作的时间复杂度都是 O(1)。至此，我们就通过散列表和双向链表的组合使用，实现了一个高效的、支持 LRU 缓存淘汰算法的缓存系统原型")]),e._v(" "),a("h2",{attrs:{id:"redis-有序集合"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis-有序集合"}},[e._v("#")]),e._v(" Redis 有序集合")]),e._v(" "),a("p",[e._v("在跳表那一节，讲到有序集合的操作时，我稍微做了些简化。实际上，在有序集合中，每个成员对象有两个重要的属性，key（键值）和score（分值）。我们不仅会通过 score 来查找数据，还会通过 key 来查找数据。")]),e._v(" "),a("p",[e._v("举个例子，比如用户积分排行榜有这样一个功能：我们可以通过用户的 ID 来查找积分信息，也可以通过积分区间来查找用户 ID 或者姓名信息。这里包含 ID、姓名和积分的用户信息，就是成员对象，用户 ID 就是 key，积分就是 score。")]),e._v(" "),a("p",[e._v("所以，如果我们细化一下 Redis 有序集合的操作，那就是下面这样：")]),e._v(" "),a("ul",[a("li",[e._v("添加一个成员对象；")]),e._v(" "),a("li",[e._v("按照键值来删除一个成员对象；")]),e._v(" "),a("li",[e._v("按照键值来查找一个成员对象；")]),e._v(" "),a("li",[e._v("按照分值区间查找数据，比如查找积分在 [100, 356] 之间的成员对象；")]),e._v(" "),a("li",[e._v("按照分值从小到大排序成员变量；")])]),e._v(" "),a("p",[e._v("如果我们仅仅按照分值将成员对象组织成跳表的结构，那按照键值来删除、查询成员对象就会很慢，解决方法与 LRU 缓存淘汰算法的解决方法类似。我们可以再按照键值构建一个散列表，这样按照 key 来删除、查找一个成员对象的时间复杂度就变成了 O(1)。同时，借助跳表结构，其他操作也非常高效。")]),e._v(" "),a("p",[e._v("实际上，Redis 有序集合的操作还有另外一类，也就是查找成员对象的排名（Rank）或者根据排名区间查找成员对象。这个功能单纯用刚刚讲的这种组合结构就无法高效实现了。这块内容我后面的章节再讲。")]),e._v(" "),a("h2",{attrs:{id:"java-linkedhashmap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java-linkedhashmap"}},[e._v("#")]),e._v(" Java LinkedHashMap")]),e._v(" "),a("p",[e._v("前面我们讲了两个散列表和链表结合的例子，现在我们再来看另外一个，Java 中的 LinkedHashMap 这种容器。")]),e._v(" "),a("p",[e._v("如果你熟悉 Java，那你几乎天天会用到这个容器。我们之前讲过，HashMap 底层是通过散列表这种数据结构实现的。而 LinkedHashMap 前面比 HashMap 多了一个“Linked”，这里的“Linked”是不是说，LinkedHashMap 是一个通过链表法解决散列冲突的散列表呢？")]),e._v(" "),a("p",[e._v("实际上，LinkedHashMap 并没有这么简单，其中的“Linked”也并不仅仅代表它是通过链表法解决散列冲突的。关于这一点，在我是初学者的时候，也误解了很久。")]),e._v(" "),a("p",[e._v("我们先来看一段代码。你觉得这段代码会以什么样的顺序打印 3，1，5，2 这几个 key 呢？原因又是什么呢？")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("HashMap<Integer, Integer> m = new LinkedHashMap<>();\nm.put(3, 11);\nm.put(1, 12);\nm.put(5, 23);\nm.put(2, 22);\n \nfor (Map.Entry e : m.entrySet()) {\n  System.out.println(e.getKey());\n}\n")])])]),a("p",[e._v("我先告诉你答案，上面的代码会按照数据插入的顺序依次来打印，也就是说，打印的顺序就是 3，1，5，2。你有没有觉得奇怪？散列表中数据是经过散列函数打乱之后无规律存储的，这里是如何实现按照数据的插入顺序来遍历打印的呢？")]),e._v(" "),a("p",[e._v("你可能已经猜到了，LinkedHashMap 也是通过散列表和链表组合在一起实现的。实际上，它不仅支持按照插入顺序遍历数据，还支持按照访问顺序来遍历数据。你可以看下面这段代码：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// 10 是初始大小，0.75 是装载因子，true 是表示按照访问时间排序\nHashMap<Integer, Integer> m = new LinkedHashMap<>(10, 0.75f, true);\nm.put(3, 11);\nm.put(1, 12);\nm.put(5, 23);\nm.put(2, 22);\n \nm.put(3, 26);\nm.get(5);\n \nfor (Map.Entry e : m.entrySet()) {\n  System.out.println(e.getKey());\n}\n")])])]),a("p",[e._v("这段代码打印的结果是 1，2，3，5。我来具体分析一下，为什么这段代码会按照这样顺序来打印。")]),e._v(" "),a("p",[e._v("每次调用 put() 函数，往 LinkedHashMap 中添加数据的时候，都会将数据添加到链表的尾部，所以，在前四个操作完成之后，链表中的数据是下面这样")]),e._v(" "),a("p",[a("img",{attrs:{src:"http://blog.poetries.top/img-repo/2020/07/235.png",alt:""}})]),e._v(" "),a("p",[e._v("在第 8 行代码中，再次将键值为 3 的数据放入到 LinkedHashMap 的时候，会先查找这个键值是否已经有了，然后，再将已经存在的 (3,11) 删除，并且将新的 (3,26) 放到链表的尾部。所以，这个时候链表中的数据就是下面这样：")]),e._v(" "),a("p",[a("img",{attrs:{src:"http://blog.poetries.top/img-repo/2020/07/236.png",alt:""}})]),e._v(" "),a("p",[e._v("当第 9 行代码访问到 key 为 5 的数据的时候，我们将被访问到的数据移动到链表的尾部。所以，第 9 行代码之后，链表中的数据是下面这样：")]),e._v(" "),a("p",[a("img",{attrs:{src:"http://blog.poetries.top/img-repo/2020/07/237.png",alt:""}})]),e._v(" "),a("p",[e._v("所以，最后打印出来的数据是 1，2，3，5。从上面的分析，你有没有发现，按照访问时间排序的 "),a("code",[e._v("LinkedHashMap")]),e._v(" 本身就是一个支持 LRU 缓存淘汰策略的缓存系统？实际上，它们两个的实现原理也是一模一样的。我也就不再啰嗦了。")]),e._v(" "),a("blockquote",[a("p",[e._v("我现在来总结一下，实际上，LinkedHashMap 是通过双向链表和散列表这两种数据结构组合实现的。LinkedHashMap 中的“Linked”实际上是指的是双向链表，并非指用链表法解决散列冲突。")])]),e._v(" "),a("h2",{attrs:{id:"解答开篇-内容小结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解答开篇-内容小结"}},[e._v("#")]),e._v(" 解答开篇 & 内容小结")]),e._v(" "),a("p",[e._v("弄懂刚刚我讲的这三个例子，开篇的问题也就不言而喻了。我这里总结一下，为什么散列表和链表经常一块使用？")]),e._v(" "),a("p",[e._v("散列表这种数据结构虽然支持非常高效的数据插入、删除、查找操作，但是散列表中的数据都是通过散列函数打乱之后无规律存储的。也就说，它无法支持按照某种顺序快速地遍历数据。如果希望按照顺序遍历散列表中的数据，那我们需要将散列表中的数据拷贝到数组中，然后排序，再遍历。")]),e._v(" "),a("p",[e._v("因为散列表是动态数据结构，不停地有数据的插入、删除，所以每当我们希望按顺序遍历散列表中的数据的时候，都需要先排序，那效率势必会很低。为了解决这个问题，我们将散列表和链表（或者跳表）结合在一起使用")])])}),[],!1,null,null,null);t.default=_.exports}}]);