import { XMLParser, XMLBuilder } from "fast-xml-parser";

async function run() {
  const headers = new Headers();
  headers.append("Content-Type", "application/xml");
  headers.append("Accept", "application/xml");

  //define as JS obj, then build to XML to make the request
  const obj = {
    ProductQueryRequest: {
      APIKey: "MY-API-KEY",
      SkuNbr: "15LS-91",
    },
  };
  const builder = new XMLBuilder();
  const xml = builder.build(obj);

  const requestOptions = {
    method: "POST",
    headers,
    body: xml,
  };

  const response = await fetch(
    `https://salesdemo_portal.impress.apteancloud.com/ProcessXML.dll`,
    requestOptions
  );

  //parse the received XML into a JS obj for easy use
  const parser = new XMLParser();
  const text = await response.text();
  const data = parser.parse(text);
  const productName = data.ProductQueryResponse?.Product?.Description;

  console.log(productName);
}
run();
