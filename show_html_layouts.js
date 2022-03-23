        render(document.body, document.body.children);

        function render(target, children) {

            for (let child of children) {
                if (child.classList != 'ignore' && child.nodeName != 'SCRIPT') {
                    let name = child.nodeName;

                    /// uncomment to see id
                    // const id = child.id;
                    // if (id) {
                    //     name += ` id: ${id}`;
                    // }

                    /// uncomment to see classes
                    // const classList = child.classList;
                    // if (classList.length > 0) {
                    //     name += ` class: ${classList}`;
                    // }

                    /// uncomment to see collection length
                    // name += ` length: ${child.children.length}`;

                    const childBox = createBox(name);
                    target.appendChild(childBox);

                    if (target.nodeName !== 'BODY') {
                        target.style.display = 'flex';
                        target.style.flexWrap = 'wrap';
                        target.style.justifyContent = 'center';
                    }
                    render(childBox, child.children);
                }
            }
        }

        function createBox(name) {
            const newBox = document.createElement('div');
            newBox.textContent = name;
            newBox.style.backgroundColor = 'rgba(0, 128, 128, 0.1)';
            newBox.style.boxShadow = `5px 5px 5px rgba(0, 0, 0, 0.35)`;
            newBox.style.border = '3px solid gray';
            newBox.style.borderRadius = '5px';
            newBox.style.padding = '3px';
            newBox.style.margin = '3px';
            newBox.classList = 'ignore';
            return newBox;
        }
