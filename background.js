browser.contextMenus.create({
    id: "preview",
    title: "Print Preview",
    enabled: true,
});

browser.contextMenus.create({
    id: "print",
    title: "Print...",
    enabled: true,
});


chrome.contextMenus.onClicked.addListener(
    function(info,tab)
    {
        if (info.menuItemId == "print")
        {
            chrome.tabs.print();
        }
        else if (info.menuItemId == "preview")
        {
            chrome.tabs.printPreview();
        }
    });
