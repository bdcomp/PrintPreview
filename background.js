browser.contextMenus.create({
    id: "preview",
    title: browser.i18n.getMessage("PrintPreview"),
    enabled: true,
});

browser.contextMenus.create({
    id: "print",
    title: browser.i18n.getMessage("Print"),
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
