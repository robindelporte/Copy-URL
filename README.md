# Copy-URL

Un script JavaScript léger et multilingue pour copier facilement l'URL de la page en cours et afficher un message de confirmation dans la langue de l'utilisateur.

## 📋 Fonctionnalités

- Copie l'URL actuelle dans le presse-papiers
- Affiche un message de confirmation qui disparaît automatiquement
- Support multilingue (détecte automatiquement la langue du site)
- Installation facile via CDN
- Compatible avec Webflow et autres plateformes

## 🚀 Installation

### Via CDN (Recommandé)

Ajoutez simplement cette ligne dans la section `<head>` ou avant la fermeture de `</body>` de votre site :

```html
<script src="https://cdn.jsdelivr.net/gh/robindelporte/Copy-URL@main/copy.js"></script>
```

### Pour forcer le rafraîchissement du cache

Si vous avez mis à jour le script et souhaitez forcer le rafraîchissement du cache :

```html
<script src="https://cdn.jsdelivr.net/gh/robindelporte/Copy-URL@main/copy.js?v=1"></script>
```

Incrémentez le paramètre `v=` à chaque mise à jour.

## 💻 Utilisation

1. Ajoutez l'attribut `copy="url"` à n'importe quel élément HTML que vous souhaitez transformer en bouton de copie :

```html
<button copy="url">Copier l'URL</button>
```

2. Optionnel : Ajoutez un élément avec l'attribut `copy-message="message"` pour personnaliser le conteneur du message :

```html
<div copy-message="message">Copié !</div>
```

Si vous ne spécifiez pas cet élément, le script créera automatiquement un message qui s'affichera sous le bouton.

## 🌐 Support multilingue

Le script détecte automatiquement la langue de votre site via l'attribut `lang` de l'élément HTML et affiche le message de confirmation dans la langue correspondante.

Langues actuellement supportées :
- 🇫🇷 Français : "Copié !"
- 🇬🇧 Anglais : "Copied!"
- 🇪🇸 Espagnol : "¡Copiado!"
- 🇩🇪 Allemand : "Kopiert!"
- 🇮🇹 Italien : "Copiato!"
- 🇵🇹 Portugais : "Copiado!"
- 🇷🇺 Russe : "Скопировано!"
- 🇨🇳 Chinois : "已复制!"
- 🇯🇵 Japonais : "コピーしました!"
- 🇸🇦 Arabe : "تم النسخ!"

## ⚙️ Personnalisation

Vous pouvez modifier le script pour ajouter d'autres langues ou personnaliser les styles du message.

Pour ajouter une nouvelle langue, éditez la fonction `getCopyMessageByLanguage()` et ajoutez votre traduction au dictionnaire `messages`.

## 📱 Compatibilité

Compatible avec tous les navigateurs modernes qui supportent les API Clipboard.

## 📄 Licence

MIT

## 👨‍💻 Auteur

- Robin Delporte

---

N'hésitez pas à contribuer à ce projet en ouvrant une issue ou en soumettant une pull request !
