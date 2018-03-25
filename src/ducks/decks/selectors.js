export function getDecks(state) {
  return Object.values(state.decks)
}

export function getDeck(state, deckId) {
  if (!state.decks[deckId]) {
    throw new Error('Deck not found')
  }
  return state.decks[deckId]
}
