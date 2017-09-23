# Node Js code librady
## Node JS standard output

### End event from process.stdin could not be triggered
I copy the standard code from HackerRank and find out when running in windows, we could never enter end event which supposed to happen when nothing is entered, and then I find out a solution from [jianshu](http://www.jianshu.com/p/537b44a90c83) and it seems when you tap enter key in windows, it actually read enter as '\n' so this is considered as two character. Solve this issue then could go into end event and execute my program.
