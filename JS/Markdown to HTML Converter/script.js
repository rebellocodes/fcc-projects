// Input DOM elements
const markdownInput = document.getElementById("markdown-input");
const htmlOutput = document.getElementById("html-output");
const preview = document.getElementById("preview")


// regex patterns

const cleanH1 = /^#\s.+/;
const cleanH2 = /^##\s.+/;
const cleanH3 = /^###\s.+/;

// NOTE: Adjusted content capture for generic bold/italic for cleaner replacement
const boldText = /^(\*\*|\_\_)(.+)\1$/; 
const italicText = /^(\*|\_)(.+)\1$/;

const linkUrl = /^\!\[(.+)\]\((.+)\)$/;
const anchorUrl = /^\[(.+)\]\((.+)\)$/;
const quote = /^\>\s.+/;

const headerAndBold = /^\#\s(\*\*|\_\_)(.+)\1$/;

// Corrected quoteAndItalicAndBold pattern:
// Group 1: Bold marker, Group 2: Content before italic, Group 3: Italic content, Group 4: Content after italic
const quoteAndItalicAndBold = /^\>\s(\*\*|\_\_)(.+?)\*(.+?)\*(\1)$/; 


const convertMarkdown = () => {
    const inputText = markdownInput.value;
    const lines = inputText.split("\n");
    let output = "";
    
    for (const line of lines) {
        
        // 1. Check most specific/complex patterns first (HeaderAndBold, Nested Quote)
        if(headerAndBold.test(line)) {
            output += `<h1><strong>${line.replace(headerAndBold, "$2")}</strong></h1>`;
        
        } else if (quoteAndItalicAndBold.test(line)) {
            // Use a replacement function to build the complex HTML string using the captured groups.
            output += line.replace(quoteAndItalicAndBold, (match, g1, g2, g3) => {
                // g1 = bold marker, g2 = text before italic, g3 = italic text (only need g2 and g3)
                // Note: The pattern allows for text after the inner * and before the final \1, 
                // but for the specific test case (> **this is a *quote***), g4 is empty/unnecessary.
                return `<blockquote><strong>${g2}<em>${g3}</em></strong></blockquote>`;
            });

        } 
        
        // 2. Check general headings
        else if (cleanH1.test(line)) {
            output += `<h1>${line.replace(/^#\s/, "")}</h1>`;
        
        } else if(cleanH2.test(line)) {
            output += `<h2>${line.replace(/^##\s/, "")}</h2>`;
        
        } else if(cleanH3.test(line)) {
            output += `<h3>${line.replace(/^###\s/, "")}</h3>`;
        
        }
        
        // 3. Check for dedicated block elements (Links, Quotes)
        else if(linkUrl.test(line)) {
            output += `<img alt="${line.replace(linkUrl, "$1")}" src="${line.replace(linkUrl, "$2")}">`;
        
        } else if(anchorUrl.test(line)) {
            output += `<a href="${line.replace(anchorUrl,"$2")}">${line.replace(anchorUrl,"$1")}</a>`;
        
        } else if(quote.test(line)) {
            output += `<blockquote>${line.replace(/^\>\s/, "")}</blockquote>`;
        
        }
        
        // 4. Check for dedicated bold/italic lines (using $2 for content)
        else if(boldText.test(line)) {
            // Replaces the entire line (full match) with only the content (Group 2)
            output += `<strong>${line.replace(boldText, "$2")}</strong>`; 
        }
        else if(italicText.test(line)) {
            // Replaces the entire line (full match) with only the content (Group 2)
            output += `<em>${line.replace(italicText, "$2")}</em>`;
        
        }
        
        // 5. Handle all other non-empty lines as paragraphs
        else if (line.trim() !== "") {
            output +=`<p>${line.trim()}</p>`
        }
        
    } 
    preview.innerHTML = output;
    return htmlOutput.innerText = output;
}

markdownInput.addEventListener('input',convertMarkdown);