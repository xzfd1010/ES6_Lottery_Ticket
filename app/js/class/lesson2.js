{
    let a, b, rest;
    [a, b] = [1, 2];
    console.log(a, b);
}

{
    let a, b, rest;
    [a, b, ...rest] = [1, 2, 3, 4, 5, 6];
    console.log(a, b, rest);
}

{
    let a, b;
    ({a, b} = {a: 1, b: 2});
    console.log(a, b);
}

{
    let a, b, c, rest;
    [a, b, c = 3] = [1, 2];
    console.log(a, b, c);
}

{
    let a = 1;
    let b = 2;
    [a, b] = [b, a];
    console.log(a, b);
}

{
    function f() {
        return [1, 2];
    }

    let a, b;
    [a, b] = f();
}

{
    function f() {
        return [1, 2, 3, 4, 5];
    }

    let a, b, c;
    [a, , , b] = f();
    console.log(a, b);
}
{
    function f() {
        return [1, 2, 3, 4, 5];
    }

    let a, b, c;
    [a, ...b] = f();
    console.log(a, b);
}

{
    let o = {p: 42, q: true};
    let {p, q} = o;
    console.log(p, q);
}

{
    let metaData = {
        title: 'abc',
        test: [{
            title: 'test',
            desc: 'description'
        }]
    };
    let {title: esTitle, test: [{title: cnTitle}]} = metaData;
    console.log(esTitle, cnTitle);
}

{
    let node = {
        loc: {
            start: {
                line: 1,
                column: 5
            }
        }
    };

    let {loc: {start: {line, column}}} = node;
}

{
    let {log} = console;
    log('a');
}

{
    let jsonData = {
        id: 42,
        status: "OK",
        data: [867, 5309]
    };

    let { id, status, data } = jsonData;

    console.log(id, status, data);
}