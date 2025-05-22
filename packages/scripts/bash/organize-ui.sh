#!/bin/bash

# Usage: ./scripts/organize-ui.sh atoms
LAYER=$1
ROOT="packages/ui/$LAYER"

if [ -z "$LAYER" ]; then
  echo "❌ Please provide a UI layer (e.g. atoms, molecules, organisms)."
  echo "   Usage: ./scripts/organize-ui.sh atoms"
  exit 1
fi

if [ ! -d "$ROOT" ]; then
  echo "❌ Directory '$ROOT' does not exist."
  exit 1
fi

echo "🔁 Organizing '$LAYER' into platform folders (web/, native/)..."

for DIR in "$ROOT"/*; do
  [ -d "$DIR" ] || continue
  NAME=$(basename "$DIR")

  for TARGET in web native; do
    FILE="$DIR/$TARGET.tsx"
    if [ -f "$FILE" ]; then
      mkdir -p "$DIR/$TARGET"
      mv "$FILE" "$DIR/$TARGET/${NAME^}.tsx"
      echo "export { default } from './${NAME^}'" > "$DIR/$TARGET/index.ts"
      echo "✅ $LAYER/$NAME → $TARGET/${NAME^}.tsx + index.ts"
    fi
  done
done

echo "✅ Finished organizing '$LAYER'."
