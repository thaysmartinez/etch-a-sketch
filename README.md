# Etch-a-Sketch

Digital version of the toy Etch-a-Sketch. Developed using HTML, CSS and Vanilla
JavaScript

🔗 (Live preview)[https://thaysmartinez.github.io/etch-a-sketch/]

## How to use

1. Hover the mouse over the grid to start sketching. Default grid size is 16x16
   squares, and paint color is black.
2. Select between 16x16, 32x32 or 64x64 to change grid size.
3. Select between 'Rainbow' and 'Shading' to change paint color.
4. Select 'Reset' to reset the grid to it's initial state.

## Main challenges

- Tried to create the grid using solely the flexbox layout, but failed to make
  the changing grid size function to work properly. Although not part to the
  curriculum, I experimented with the `grid` layout and it turned out to be the
  best solution for the problems I had, with the additional benefit of learning
  a new tool for designing the page.
- For the reset function, I was trying to reset the grid container element but
  failed to realize I needed to remove it's children instead. After many
  iterations I found the `removeChild()` method. I was overcomplicating what was
  a simple one-liner solution.
- Changing the percentage from the RGBA black color to darken the gray scale
  didn't work as it only changes transparency, making the grid background darken
  from red to black. To solve it I used `rbg(255,255,255)` and decreased the
  channels by 25 steps on each mouse pass.

## What I Learned

- DOM Manipulation
- Grid layout
- removeChild() method
- `mouseenter` and `mouseover` events
- CSS pseudo-classes and transitions
- Favicons

## What can be Improved

- Add a color picker to the menu bar
- Function reset to remember last grid size and chosen color
- Add a grid-size slider to offer more size options
- Accessibility compliance
- Cross platform compatibility
