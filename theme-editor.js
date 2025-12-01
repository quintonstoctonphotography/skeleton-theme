// Shopify Theme Editor Events
document.addEventListener('shopify:section:load', function(event) {
  console.log('Section loaded:', event.detail.sectionId);
  // Reinitialize scripts after section loads
  if (window.initializeSection) {
    window.initializeSection(event.detail.sectionId);
  }
});

document.addEventListener('shopify:section:unload', function(event) {
  console.log('Section unloaded:', event.detail.sectionId);
  // Clean up section-specific code
  document.querySelectorAll(`[data-section-id="${event.detail.sectionId}"]`).forEach(el => {
    el.remove();
  });
});

document.addEventListener('shopify:section:select', function(event) {
  console.log('Section selected:', event.detail.sectionId);
});

document.addEventListener('shopify:section:deselect', function(event) {
  console.log('Section deselected:', event.detail.sectionId);
});

document.addEventListener('shopify:block:select', function(event) {
  console.log('Block selected:', event.detail.blockId);
});

document.addEventListener('shopify:block:deselect', function(event) {
  console.log('Block deselected:', event.detail.blockId);
});
