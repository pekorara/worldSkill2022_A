var render = (e) => {
    document.designMode = "on";
    document.execCommand("HiliteColor", false, "yellow");
    document.execCommand("foreColor", false, "red");
    document.designMode = "off";
}
window.onload = () => {
    const btn = document.querySelector(' .render-btn');
    btn.onclick = render;
}
// Object.defineProperty(window, 'render', {
//     get() {
//         let selection = window.getSelection();
//
//         if (selection.rangeCount === 0 || selection.toString().trim() === '') {
//             console.log('No text selected');
//             return;
//         }
//         let range = selection.getRangeAt(0);
//         let containers = document.querySelectorAll('.container');
//         let isInContainer = containers[0].contains(range.commonAncestorContainer);
//
//         if (!isInContainer) {
//             console.log('Selection not in container');
//             return;
//         }
//         let highlightSpan = document.createElement('span');
//         highlightSpan.classList.add('highlight');
//
//         if (range.startContainer !== range.endContainer) {
//             let contents = range.extractContents();
//             highlightSpan.appendChild(contents);
//             range.insertNode(highlightSpan);
//         } else {
//             range.surroundContents(highlightSpan);
//         }
//         console.log('Text highlighted successfully');
//         selection.removeAllRanges();
//
//         return null;
//     }
// });
//
// // var render = function() {
// //     // Get the current selection
// //     var selection = window.getSelection();
// //
// //     // Check if there's actually text selected
// //     if (selection.rangeCount === 0 || selection.toString().trim() === '') {
// //         console.log('No text selected');
// //         return;
// //     }
// //
// //     // Get the selected range
// //     var range = selection.getRangeAt(0);
// //
// //     // Check if the selection is within the container
// //     var containers = document.querySelectorAll('.container');
// //     var isInContainer = false;
// //
// //     for (var i = 0; i < containers.length; i++) {
// //         if (containers[i].contains(range.commonAncestorContainer)) {
// //             isInContainer = true;
// //             break;
// //         }
// //     }
// //
// //     if (!isInContainer) {
// //         console.log('Selection not in container');
// //         return;
// //     }
// //
// //     // Create a span element with the highlight class
// //     var highlightSpan = document.createElement('span');
// //     highlightSpan.className = 'highlight';
// //
// //     try {
// //         // Check if the range crosses element boundaries
// //         if (range.startContainer !== range.endContainer) {
// //             // Handle complex selections that span multiple elements
// //             var contents = range.extractContents();
// //             highlightSpan.appendChild(contents);
// //             range.insertNode(highlightSpan);
// //         } else {
// //             // Simple case - selection within a single text node
// //             range.surroundContents(highlightSpan);
// //         }
// //         console.log('Text highlighted successfully');
// //     } catch (error) {
// //         console.log('Error highlighting:', error);
// //         // Fallback method
// //         var contents = range.extractContents();
// //         highlightSpan.appendChild(contents);
// //         range.insertNode(highlightSpan);
// //     }
// //
// //     // Clear the selection
// //     selection.removeAllRanges();
// // };