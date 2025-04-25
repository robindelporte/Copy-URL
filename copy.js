let copyButton = document.querySelector('[copy="url"]');
if (copyButton) {
  copyButton.style.position = 'relative';
  copyButton.addEventListener('click', function () {
    let url = window.location.href;
    navigator.clipboard.writeText(url);
    
    // Déterminer le message selon la langue actuelle
    let copyMessage = getCopyMessageByLanguage();
    
    let messageWrapper = document.querySelector('[copy-message="message"]');
    if (messageWrapper) {
      if (messageWrapper.style.display === 'none') {
        messageWrapper.style.display = 'block';
      } else if (messageWrapper.classList.contains('hide')) {
        messageWrapper.classList.remove('hide');
      }
      setTimeout(() => {
        if (messageWrapper.style.display === 'block') {
          messageWrapper.style.display = 'none';
        } else if (!messageWrapper.classList.contains('hide')) {
          messageWrapper.classList.add('hide');
        }
      }, 2000);
    } else {
      let messageText =
        document.querySelector('[copy-message]')?.getAttribute('copy-message') ||
        'Copied!';
      let message = document.createElement('div');
      message.style.position = 'absolute';
      message.style.bottom = '-25px';
      message.style.left = '-15px';
      message.style.display = 'block';
      message.style.whiteSpace = 'nowrap';
      message.setAttribute('id', 'copy-message');
      message.textContent = copyMessage;
      let existingMessage = copyButton.querySelector('#copy-message');
      if (!existingMessage) {
        copyButton.insertBefore(message, copyButton.firstChild);
      } else {
        existingMessage.style.display = 'block';
      }
      setTimeout(() => {
        (existingMessage || message).style.display = 'none';
      }, 2000);
    }
  });
}

/**
 * Détermine le message de copie selon la langue actuelle du site
 */
function getCopyMessageByLanguage() {
  // Détecter par l'attribut lang de l'élément html
  const htmlLang = document.documentElement.lang?.toLowerCase() || '';
  
  // Utiliser la langue détectée ou l'anglais par défaut
  const currentLang = htmlLang || 'en';
  
  // Dictionnaire des messages par langue
  const messages = {
    'fr': 'Copié !',
    'en': 'Copied!',
    'es': '¡Copiado!',
    'de': 'Kopiert!',
    'it': 'Copiato!',
    'pt': 'Copiado!',
    'ru': 'Скопировано!',
    'zh': '已复制!',
    'ja': 'コピーしました!',
    'ar': 'تم النسخ!'
  };
  
  // Retourner le message dans la langue actuelle ou en anglais par défaut
  return messages[currentLang] || messages['en'];
}
