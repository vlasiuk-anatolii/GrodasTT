const amoutOfDomElements = document.getElementsByTagName('*').length;
const allTags = document.getElementsByTagName('*');
const groupedByName = [];
const groupedByTagsLength = [];

for (let i = 0; i < allTags.length; i += 1) {
  groupedByName.push(document.getElementsByTagName(allTags[i].tagName));
  if (groupedByTagsLength[allTags[i].tagName.length] === undefined) {
    groupedByTagsLength[allTags[i].tagName.length] = [];
  }

  groupedByTagsLength[allTags[i].tagName.length].push(allTags[i].tagName);
}

// eslint-disable-next-line no-console
console.log(amoutOfDomElements, groupedByName, groupedByTagsLength);
