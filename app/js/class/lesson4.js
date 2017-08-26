{
    console.log('a', `\u0061`);
    console.log('s', `\u20BB7`); // 大于0xFFFF的字符不能正确解析
}

{
    console.log('s', `\u{20BB7}`);

    let s = '𠮷';
    console.log(s.length);//计算字节时每两个字节是一个长度
    console.log('0', s.charAt(0));// 取字符
    console.log('0', s.charAt(1));
    console.log('at0', s.charCodeAt(0));// 取码值
    console.log('at0', s.charCodeAt(1));

    // 解决方案：codePointAt
    let s1 = '𠮷a';
    console.log('length', s1.length);
    console.log('code0', s1.codePointAt(0));//codePointAt会取四个字节的内容
    console.log('code0', s1.codePointAt(0).toString(16));
    console.log('code1', s1.codePointAt(1));
    console.log('code2', s1.codePointAt(2));

}

{
    // fromCodePoint处理大于0xffff的Unicode字符
    console.log(String.fromCharCode("0x20bb7"));
    console.log(String.fromCodePoint("0x20bb7"));
}

{
    // 字符串遍历器接口
    let str = '\u{20bb7}abc';
    for (let i = 0; i < str.length; i++) {
        console.log('es5', str[i]);
    }
    //let of遍历器
    for (let code of str) {
        console.log('es6', code);
    }
}

{
    // 判断字符串中是否包含某些字符  includes
    // 判断字符串是否以某些字符起始  startWith
    // 判断字符串是否以某些字符结束  endsWith
    let str = "string";
    console.log('includes', str.includes("r"));
    console.log('start', str.startsWith('str'));
    console.log('end', str.endsWith('ng'));
}

{
    // 重复
    let str = 'abc';
    console.log(str.repeat(2));
}

{
    // 模板字符串
    let name = "list";
    let info = "hello world";
    let m = `I am ${name},${info}`;
    console.log(m);
}

{
    // ES7的草案，处理日期非常方便
    console.log('1'.padStart(2, '0'));// 补白的作用 至少2位，缺少补0
    console.log('1'.padEnd(2, '0'));// 补白的作用 至少2位，缺少补0
}

{
    // 标签模板
    /**
     *  作用：
     *      1. 处理xss攻击
     *      2. 处理多语言操作
     */

    let user = {
        name: 'list',
        info: 'hello world'
    };
    console.log(abc`I am ${user.name},${user.info}`);

    function abc(s, v1, v2) {
        console.log(s, v1, v2);
        return s + v1 + v2;
    }

    // another demo
    function passthru(literals, ...values) {
        let output = "";
        for (var index = 0; index < values.length; index++) {
            output += literals[index] + values[index];
        }

        output += literals[index];
        return output;
    }
    let total = 30;
    let msg = passthru`The total is ${total} (${total*1.05} with tax)`;
    console.log(msg);

}


{
    // string.raw
    console.log(String.raw`Hi\n${1 + 2}`); // String.raw API对所有的\进行了转义，使转义字符不生效
    console.log(`Hi\n${1 + 2}`);
}

{
    // at方法
    console.log('𠮷'.at(0));
}

{
    // normalize方法
    console.log('\u004F\u030C'.normalize('NFD'))
}

{
    function compile(template) {
        let evalExpr = /<%=(.+?)%>/g;
        let expr = /<%([\s\S]+?)%>/g;

        template = template
            .replace(evalExpr, '`); \n  echo( $1 ); \n  echo(`')
            .replace(expr, '`); \n $1 \n  echo(`');

        template = 'echo(`' + template + '`);';

        let script =
            `(function parse(data){
                var output = "";
            
                function echo(html){
                  output += html;
                }
            
                ${ template }
            
                return output;
              })`;

        return script;
    }

    let template = `
            <ul>
              <% for(var i=0; i < data.supplies.length; i++) { %>
                <li><%= data.supplies[i] %></li>
              <% } %>
            </ul>
            `;
    // 上面代码在模板字符串之中，放置了一个常规模板。该模板使用<%...%>放置JavaScript代码，使用<%= ... %>输出JavaScript表达式。

    let parse = eval(compile(template));
    document.body.innerHTML = parse({supplies: ["broom", "mop", "cleaner"]});

}