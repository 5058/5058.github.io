#墙哥陪你写Python

##Week 1 ：Intro ，工具，基本环境和Python内置类型

###Week 1 Task：使用Python编写拼音汉字转换脚本

墙哥会提供一个完整的拼音汉字对照字典，使用这个字典编写一个脚本，不会超过40行，实现拼音汉字转换。

###Intro ：The single most important skill for a computer scientist is problem solving.

墙哥假设您具有一般的C语言水平，和C++或Java语言基础。如果你觉得前面说到的这三种语言都还OK的话，墙哥相信您可以在半个月之内写出能够干点事情的Python代码。

对**Problem Solving**来说，Python是一个利器。Python可以大大缩减编写程序的时间，对于程序员，创业公司，科学家，不，对于人类来说，最重要的是我们的时间。

####为什么选择Python，因为Python有  库 帮你做很多不必要的轮子

Python最强大的部分，是几乎只要你有需求，就会有前人实现过的代码，摆在那里，等着你用。

####Python主要解决哪些问题

* 数据挖掘，人工智能和机器学习。在自然语言处理上，Python拥有成熟的[NTLK](http://www.nltk.org/); Python拥有优秀的机器学习工具库[Scikit-Learn](http://scikit-learn.org/stable/);数学运算包[numpy](http://www.numpy.org/)
* Web。你可能在某些很叼的人嘴里听说过[Django](https://www.djangoproject.com/)，或者什么东西。相对于Java Web，Python可以用1/2的代码量实现相同的事情。Web是可以最大程度解放Python性能诟病的地方（Web的性能瓶颈主要为IO）。在教程的后面部分，我们会从[Flask](http://flask.pocoo.org/)入手，接触Python Web开发。当然这其中涉及的事情很多很杂，并且相对于PHP，学习曲线略陡。
* 图像处理。
* 大型网游游戏服务器。


Python与前面三种语言相比 ，差别主要有以下几点：

####弱类型

在Python中，存在5大种基本的内置数据类型：__数字__, __None__,__字典__,__序列__,__集合__。没有整型，浮点型，单精度浮点型，双精度浮点型等等的差别。关于内置类型的详细内容和Python中怎样标记类型的内容我们在这一章中都会涉及到。

####编译 or/and 解释

C和C++是典型的编译型语言：编译器接受全部的程序源代码，编译为目标程序（二进制），目标程序在计算机上直接执行。与C不同的是，很多人将Python称为**解释性**语言，Python代码可以直接在解释器中执行。我更倾向于将Python称为一种**半编译半解释型**的语言，Python代码是会被编译为**字节码**(Byte Code)的, 字节码会在虚拟机中的一个函数来解释执行。除此之外，更直观的的编译过程存在于**模块倒入**，在我们 'import' 一个Python文件a.py到另一个被执行的Python主文件中时，Python会将a.py编译为a.pyc，我们可以将其理解为a文件的字节码缓存文件，这会有效的提高程序效率，并实现复用。

####Everything is Object

我不会在刚开篇就去讲Python中的对象机制，以免吓跑了你。但让我们首先来先给**Python中的对象**一个定义：

	对象：妹子或衰锅
	对象：一切可以赋值给变量或传入函数中的东西

台湾人管**对象**叫**物件**，你可以试试用台湾人的方式来叫你的对象，一定会有惊喜。记住后面那个对象的定义，也会有惊喜。

###工具

言归正传：

请随便找一本Python入门书或者直接上官网下载对应系统的Python，2.7和3.3，或者使用Linux或Mac OS系统。

这里先来介绍我们这些专业的程序员和玩数据的学习Python可能需要的工具：

* 一个Linux发行版，早晚你会需要的
* [pip](https://pypi.python.org/pypi/pip) 和 [setuptool](https://pypi.python.org/pypi/setuptools)(easy_install)
* [PDB](http://docs.python.org/2/library/pdb.html)
* [VirtualEnv](https://pypi.python.org/pypi/virtualenv)

---------
不管你专不专业，都需要的

* 会Google
* 会English
* 会StackOverflow
* 会泡妹子

---------

####入门

熟读Python官方文档和写代码

####进阶

写代码和熟读Python官方文档

####进阶后进阶

写熟码和代官方档文读Python

####一些资料

推荐直接看英文文档。

* [深入Python 3](http://woodpecker.org.cn/diveintopython3/index.html)
* [Learn Python The Hard Way](http://learnpythonthehardway.org/)
* [Full Stack Python](http://www.fullstackpython.com/introduction.html)
* [Python 简明教程](http://sebug.net/paper/python/)
* [Python 中文文档](http://www.pythondoc.com/)

####交互式命令行模式和脚本模式

请在任意一本Python入门资料中自行熟悉。

关于Windows中将Python加入环境变量的内容请自行Google。

###内置类型

####数字

实际使用时，抛开什么浮点，整型，长整型，只需要输入你想要的数字就可以了，在数字上，我们可以做 + ，-，*，/，**，还有//，%，+=，/=等等，但是没有++和--，关于Python中为什么没有++和--,知乎有一个[答案](http://www.zhihu.com/question/20913064)。

让我们打开Python Shell，实验一下这些符号。在Python 2和Python 3中，有一点点小的区别。
	
	>>> #Python 2.7：
	>>> 2/3
	0
	>>> 2//3
	0
	>>> 2.0 / 3
	0.666666666666666
	>>> 2.0 // 3
	0.0

	>>> #Python 3.3
	>>> 2/3
	0.666666666666666
	>>> 2//3
	0

在进行运算时，会涉及符号的优先级问题:

	>>> 3*1**4
	3

所以，**使用括号**，在你需要明确优先级的时候。

#####Python 2和Python 3中数字类型的一点区别
 ----------
使用type()可以查看对象的类型：
	
	>>> #Python 2.7
	>>> type(2.9)
	<typy 'float'>
	>>> type(2)
	<type 'int'>
	>>> import sys
	>>> type(sys.maxint + 1)
	<type 'long'>

如上所示，Python 2.7共有float，int，long三种类型。让我们回到Python 3

	>>> #Python 3.3
	>>> #sys里面已经没有maxint了，Python3 中使用Python 2中的long 作为整型int
	>>> type(22222222222222222222222222222222222222222)
	<class 'int'>#通过这，你可以间接发现int是一个类，数字是一个类的实例，也就是对象

####列表

列表是Python中一个很强大的数据结构。列表是泛型的，就是说，列表中的数据类型可以是任何对象：

	>>> a = [1,2,3,4]
	>>> b = ['hello', 2, [1,3], {1 : 'jason'}, lambda x: x**3]
	>>> c = [c]
	NameError....c is not defined

#####遍历

	>>> for i in b:
	...  i
	...
	'hello'
	2
	[1,3] 
	{1 : 'jason'} 
	lambda x: x**3
	>>>

#####下标

	>>> d = map(b[-1], a)
	>>> #Python 2.7
	>>> d
	[1, 8, 27, 64]
	>>> #Python 3.3
	>>> list(d)
	>>> d
	[1, 8, 27, 64]

这里，我们变了一个稍微复杂的魔法，首先是**map**函数，map函数的第一个参数是一个函数，第二个参数是一个可迭代对象。map函数会将函数一次作用在可迭代对象的每一个元素上，最后得到一个列表（Python 2）或者map对象（不可迭代，Python 3）。注意Python 2和Python 3中map的区别。

另外一个魔法是**lambda**，说实话，Python中的lambda是一个鸡肋。虽然是鸡肋，但还是要说一说。

lambda可以在一行内定义一个函数,如上所示：

	lambda x : x ** 3

上面这行代码定义了一个**匿名函数**，没有名字，接受一个参数x，返回x ** 3。使用lambda可以简洁的完成许多简单操作。

#####列表推倒

还是上面的那个将a列表中的数字全部立方，得到一个新列表，我们可以用列表推倒一行做到：

	>>> [i ** 3 for i in a]
	[1 ,8 ,27, 64]

列表推倒是Python最推荐使用的语法之一，简洁而有效。如果你是一个Python新手，实现上面这个功能，其实你很可能写出下面这样的代码：

	>>> result = []
	>>> for i in a:
	...  result.append(i**3)
	...
	>>> result
	[1, 8, 27, 64]

永远不要这样写Python！这个风格是C，不是Python，写Python时，让列表推倒取代你写C时的惯用思维，会对你有很大的帮助。





	






