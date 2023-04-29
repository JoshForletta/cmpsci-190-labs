function Parent(name, children) {
    this.name = name;
    this.children = children;
}

let parent = new Parent("Lemmor", ["Jim", "Douglas", "Mylth"]);

document.write(JSON.stringify(parent));
