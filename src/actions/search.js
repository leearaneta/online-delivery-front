export const INPUT_FOCUSED = 'INPUT_FOCUSED';
export const INPUT_BLURRED = 'INPUT_BLURRED';
export const INPUT_CHANGED = 'INPUT_CHANGED';
export const UPDATE_FOCUSED_SUGGESTION = 'UPDATE_FOCUSED_SUGGESTION';
export const REVEAL_SUGGESTIONS = 'REVEAL_SUGGESTIONS';
export const CLOSE_SUGGESTIONS = 'CLOSE_SUGGESTIONS';

function inputFocused(shouldRenderSuggestions) {
  return {
    type: INPUT_FOCUSED,
    shouldRenderSuggestions
  };
}

function inputBlurred(shouldRenderSuggestions) {
  return {
    type: INPUT_BLURRED,
    shouldRenderSuggestions
  };
}

function inputChanged(shouldRenderSuggestions) {
  return {
    type: INPUT_CHANGED,
    shouldRenderSuggestions
  };
}

function updateFocusedSuggestion(sectionIndex, suggestionIndex, value) {
  return {
    type: UPDATE_FOCUSED_SUGGESTION,
    sectionIndex,
    suggestionIndex,
    value
  };
}

function revealSuggestions() {
  return {
    type: REVEAL_SUGGESTIONS
  };
}

function closeSuggestions() {
  return {
    type: CLOSE_SUGGESTIONS
  };
}

export const actionCreators = {
  inputFocused,
  inputBlurred,
  inputChanged,
  updateFocusedSuggestion,
  revealSuggestions,
  closeSuggestions
};