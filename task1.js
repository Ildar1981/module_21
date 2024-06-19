const parser = new DOMParser();
const XMLString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

let resultArray = [];

const XMLDom = parser.parseFromString(XMLString, "text/xml");
const list = XMLDom.querySelector("list");

const studentArray = [...list.children]; 

studentArray.forEach((item, index) => {
  const student = item;
  const name = student.querySelector("name");
  const firstName = name.querySelector("first");
  const secondName = name.querySelector("second");
  const age = student.querySelector("age");
  const prof = student.querySelector("prof");  
 
  const langAttr = name.getAttribute('lang');

  const result = {
    name: firstName.textContent + " " + secondName.textContent,
    age: Number(age.textContent),
    prof: prof.textContent,
    lang: langAttr,
  };
  
  
  resultArray[index] = result;
      
});
console.log(resultArray);