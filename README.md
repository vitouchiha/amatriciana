# 📅 Matrice Orari

Web app single-page per la visualizzazione e generazione della **matrice settimanale dei turni di lavoro** per **Dipendenti** e **Tutor**.

🔗 **Live demo:** [amatriciana.vercel.app](https://amatriciana.vercel.app)

---

## ✨ Funzionalità

- 👤 **Due ruoli** supportati: Dipendente (ciclo 18 settimane) e Tutor (ciclo 15 settimane)
- 📆 **Generazione automatica** fino a fine anno dalla settimana di partenza selezionata
- 🕐 **Monte ore configurabile**: 4h, 6h, 6h 40m, 7h 55m
- 🗓️ **Festività italiane** rilevate automaticamente (Pasquetta inclusa)
- 🌙 **Tema light/dark** commutabile
- 📊 **Vista tabella** e **vista a schede** (ottimizzata per mobile)
- 📸 **Esportazione PNG** e **condivisione** nativa
- 💾 Preferenze salvate in **localStorage**

---

## 🏗️ Struttura del progetto

```
matrice visual/
├── index.html          # Applicazione completa (single file)
└── README.md
```

L'intera app è contenuta in un singolo file `index.html` — nessuna dipendenza da installare, nessun build step.

---

## 🔄 Pattern turni

### Dipendente — ciclo 18 settimane
Ogni settimana ha un orario di inizio e 2 giorni di riposo fissi. Alcune settimane hanno override specifici per Sabato/Domenica.

### Tutor — ciclo 15 settimane
| # | Orario | Riposi | Override weekend |
|---|--------|--------|-----------------|
| 1 | 12:00 | Mer, Sab | Dom → 12:00 |
| 2 | 06:00 | Mar, Sab | Dom → 06:00 |
| 3 | 18:00 | Mer, Dom | Sab → 18:00 |
| 4 | 15:00 | Sab, Dom | — |
| 5 | 06:00 | Gio, Dom | Sab → 06:00 |
| 6 | 18:00 | Lun, Sab | Dom → 18:00 |
| 7 | 12:00 | Mar, Dom | Sab → 12:00 |
| 8 | 08:00 | Sab, Dom | — |
| 9 | 18:00 | Mar, Sab | Dom → 18:00 |
| 10 | 12:00 | Lun, Sab | Dom → 12:00 |
| 11 | 06:00 | Mer, Dom | Sab → 06:00 |
| 12 | 11:00 | Sab, Dom | — |
| 13 | 12:00 | Gio, Dom | Sab → 12:00 |
| 14 | 06:00 | Lun, Sab | Dom → 06:00 |
| 15 | 18:00 | Gio, Dom | Sab → 18:00 |

> Il turno `18:00` è speciale: l'orario di inizio viene ricalcolato come `mezzanotte − monte ore`, con fine sempre a `00:00`.

---

## 🚀 Deploy

Il progetto è deployato su **Vercel** con il progetto `amatriciana`.

### Aggiornamento manuale
```bash
git add .
git commit -m "update"
git push
```
Vercel aggiornerà automaticamente la preview e la produzione.

---

## 📦 Dipendenze esterne (CDN)
- [Inter Font](https://fonts.google.com/specimen/Inter) — Google Fonts
- [Font Awesome 6.5](https://fontawesome.com/) — icone
- [html2canvas 1.4.1](https://html2canvas.hertzen.com/) — export PNG

---

## 📝 Changelog
### v1.4.0
- **Fix** export schede PNG: tutti i pannelli ora aperti nel clone
- **Fix** reset: `updateGenerateEnabled()` chiamato correttamente
- **Fix** calendario mobile: celle leggibili su schermi < 480px
- **Tasto Oggi**: scrolla alla cella/riga/giorno corrente nella vista attiva
- **Evidenziazione giorno corrente** in tutte e 3 le viste (azzurro/outline)
- **Contatore ore mensili** nel calendario: `N giorni · Xh Ym` per ogni mese
- **Filtro rapido mese** nel calendario: pill cliccabili per saltare al mese
- **Weekend colorati** nel calendario (Sab/Dom lavorativi con sfondo distinto)
- **Indicatore vista attiva** sotto il tasto Vista (Tabella / Schede / Calendario)
- **CSS Stampa ottimizzato**: stampa solo la vista attiva, no topbar/bottombar
### v1.3.0
- Nuova vista **Calendario mensile**: griglia 7 colonne (Lun-Dom) per ogni mese generato
- Il tasto Vista cicla tra 3 modalità: Tabella → Schede → Calendario → Tabella
- Icona del toggle aggiornata per indicare la prossima vista
- Preferenza di vista salvata in localStorage

### v1.2.0
- Matrice generata fino a fine anno per entrambi i ruoli (Dipendente + Tutor)

### v1.1.0
- Matrice Tutor estesa fino a fine anno dalla settimana di partenza

### v1.0.0
- Prima release: matrice 18 settimane (Dipendente) e 15 settimane (Tutor)
- Tema light/dark, export PNG, condivisione, festività italiane
