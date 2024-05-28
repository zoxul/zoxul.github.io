window.onload = function () {
    if (window.location.href.indexOf("/print_page") > -1) {
        window.print();
    }


    // 在表格內使用code
    let fileLoadingPromises = [];

    let codes = document.querySelectorAll('.code');
    codes.forEach(function (code, index) {
        let codeValue = code.innerHTML.trim();
        let preId = `code_${index}`;

        let fileLoadingPromise = fetch(`${codeValue}.txt`)
            .then(response => response.text())
            .then(text => {
                let converter = new showdown.Converter();
                let html = converter.makeHtml(text);
                code.innerHTML = html;
                const pre = code.querySelector('pre');
                pre.id = preId;
                pre.innerHTML += `<button class="md-clipboard md-icon" title="Copy to clipboard" data-clipboard-target="#${preId}"></button>`
            })
            .catch(error => console.error('Error:', error));

        fileLoadingPromises.push(fileLoadingPromise);
    });


    Promise.all([...fileLoadingPromises]).then(function () {
        let script = document.createElement('script');
        script.src = 'https://unpkg.com/@highlightjs/cdn-assets@11.9.0/highlight.min.js';
        script.onload = function () {
            window.hljs.initHighlightingOnLoad();

        };
        document.body.appendChild(script);
    });
}

