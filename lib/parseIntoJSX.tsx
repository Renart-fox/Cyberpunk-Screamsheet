export default function parseIntoJSX(element) {
  var table: JSX.Element[] = [];

  element.map((e, _) => {
    switch (e["element"]) {
      case "h2":
        table.push(<h2 style={e["style"]}>{e["text"]}</h2>);
        break;
      case "span":
        table.push(<span style={e["style"]}>{e["text"]}</span>);
        break;
    }
  });
  return table;
}
