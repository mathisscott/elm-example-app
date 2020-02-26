module Utils.ClarityComponents exposing (clrButton, clrIcon)

import Html exposing (Attribute, Html, node)


clrButton : List (Attribute a) -> List (Html a) -> Html a
clrButton =
    Html.node "cwc-button"


clrIcon : List (Attribute a) -> List (Html a) -> Html a
clrIcon =
    Html.node "cwc-icon"
