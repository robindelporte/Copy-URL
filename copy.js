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
      // Si un conteneur de message existe déjà dans le DOM
      if (messageWrapper.style.display === 'none') {
        messageWrapper.style.display = 'block';
      } else if (messageWrapper.classList.contains('hide')) {
        messageWrapper.classList.remove('hide');
      }
      // Mettre à jour le texte selon la langue
      messageWrapper.textContent = copyMessage;
      
      setTimeout(() => {
        if (messageWrapper.style.display === 'block') {
          messageWrapper.style.display = 'none';
        } else if (!messageWrapper.classList.contains('hide')) {
          messageWrapper.classList.add('hide');
        }
      }, 2000);
    } else {
      // Créer un nouveau message si aucun conteneur n'existe
      let messageText = 
        document.querySelector('[copy-message]')?.getAttribute('copy-message') ||
        copyMessage;
      
      let message = document.createElement('div');
      message.style.position = 'absolute';
      message.style.bottom = '-25px';
      message.style.left = '-15px';
      message.style.display = 'block';
      message.style.whiteSpace = 'nowrap';
      message.setAttribute('id', 'copy-message');
      message.textContent = messageText;
      
      let existingMessage = copyButton.querySelector('#copy-message');
      if (!existingMessage) {
        copyButton.insertBefore(message, copyButton.firstChild);
      } else {
        existingMessage.style.display = 'block';
        existingMessage.textContent = messageText;
      }
      
      setTimeout(() => {
        (existingMessage || message).style.display = 'none';
      }, 2000);
    }
  });
}

/**
 * Détermine le message de copie selon la langue actuelle du site
 * Vous devez adapter cette fonction selon votre méthode de détection de langue
 */
function getCopyMessageByLanguage() {
  // Méthode 1: Détecter par l'attribut lang de l'élément html
  const htmlLang = document.documentElement.lang.toLowerCase();
  
  // Méthode 2: Alternative - détecter par l'URL (décommenter si nécessaire)
  // const currentUrl = window.location.pathname;
  // const urlLangMatch = currentUrl.match(/^\/([a-z]{2})(\/|$)/);
  // const urlLang = urlLangMatch ? urlLangMatch[1].toLowerCase() : '';
  
  // Utiliser la langue détectée (préférer htmlLang, sinon urlLang)
  const currentLang = htmlLang || /* urlLang || */ 'en';
  
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
    // Ajoutez d'autres langues selon vos besoins
  };
  
  // Retourner le message dans la langue actuelle ou en anglais par défaut
  return messages[currentLang] || messages['en'];
}
