# Monster in a Box - CSS Animation Project

![Monster in a Box Animation](assets/header-monster-box.gif)

Welcome to your first **build-from-scratch** animation project! Today you're going to bring something truly unique to life - a mysterious creature peering through a crack in a box. 

This isn't just about animations though. You'll be practicing the complete web development workflow: planning your structure, writing HTML from scratch, styling with CSS, and then adding the magic of animation.

## 🎯 What You'll Build

By the end of this project, you'll have created:

- **A contained scene**: A bordered box that holds your animation
- **Dynamic walls**: Pieces that slide apart to reveal a crack  
- **Monster fingers**: Dark appendages gripping the crack edges
- **Mysterious eyes**: Glowing orbs that blink when the crack opens
- **Coordinated animation**: Everything moving together in sequence

## 🚀 Your Mission

> **The Challenge**: Build an animated scene where a mysterious creature is trapped in a box, occasionally prying the walls apart with its fingers to peek out with glowing eyes.

You'll approach this like a real developer would - breaking down the problem, building piece by piece, and testing as you go.

## 📋 The Development Process

Each checkpoint below represents a working milestone. Don't rush ahead - make sure each step works before moving to the next!

### Checkpoint 1: Scene Setup
**Goal**: Create the foundation structure

- Set up your HTML file and basic styling
- Create a centered box container
- Style it with a brown border and rounded corners

<details>
<summary>🖼️ Checkpoint 1 Reference</summary>

![Checkpoint 1](assets/checkpoint-1-scene-setup.png)

Your page should show a simple bordered box centered on a dark background.

</details>

### Checkpoint 2: Wall Structure  
**Goal**: Fill the box with walls that have a crack

- Add two wall pieces (top and bottom)
- Position them to create a thin horizontal crack in the middle
- Match the wall color to the border

<details>
<summary>🖼️ Checkpoint 2 Reference</summary>

![Checkpoint 2](assets/checkpoint-2-wall-structure.png)

Your box should now be filled with brown walls, with a thin dark crack visible across the middle.

</details>

### Checkpoint 3: Monster Fingers
**Goal**: Add fingers gripping the crack edges

- Create 8 finger elements (4 on top edge, 4 on bottom edge)
- Position them at different spots along the crack
- Style them as small dark rounded rectangles

<details>
<summary>🖼️ Checkpoint 3 Reference</summary>

![Checkpoint 3](assets/checkpoint-3-monster-fingers.png)

Dark finger-like shapes should now be visible gripping both edges of the crack.

</details>

### Checkpoint 4: Monster Eyes
**Goal**: Add hidden eyes behind the crack

- Create two eye elements positioned in the crack space
- Style them with a red color and black pupils
- Keep them hidden initially (opacity: 0)

<details>
<summary>🖼️ Checkpoint 4 Reference</summary>

![Checkpoint 4](assets/checkpoint-4-monster-eyes.png)

The scene should look the same as Checkpoint 3 - the eyes are there but hidden.

</details>

### Checkpoint 5: Wall Opening Animation
**Goal**: Make the walls slide apart

- Create keyframes to move the walls away from each other
- Add transforms to make the opening look realistic
- Apply the animation to both wall pieces

<details>
<summary>🖼️ Checkpoint 5 Reference</summary>

![Checkpoint 5](assets/checkpoint-5-wall-animation.gif)

The walls should now slide apart periodically, revealing a wider crack.

</details>

### Checkpoint 6: Finger Extension
**Goal**: Make fingers extend as the crack opens

- Create animations for fingers to grow longer
- Coordinate the timing with the wall animation
- Different behavior for top vs bottom fingers

<details>
<summary>🖼️ Checkpoint 6 Reference</summary>

![Checkpoint 6](assets/checkpoint-6-finger-extension.gif)

As the crack opens, the fingers should stretch to reach further into the gap.

</details>

### Checkpoint 7: Eye Blinking Animation
**Goal**: Complete the creature with blinking eyes

- Create animations for eyes to appear and blink
- Time it to happen when the crack is fully open
- Make them disappear when the crack closes

<details>
<summary>🖼️ Checkpoint 7 Reference</summary>

![Checkpoint 7](assets/checkpoint-7-complete-animation.gif)

Your complete monster should now peek through the crack with animated blinking eyes!

</details>

## 🛠️ Getting Started

1. **Create your files**: You'll need `index.html` and `style.css`
2. **Work through each checkpoint**: Don't skip ahead!
3. **Test frequently**: Open your HTML file in the browser after each change
4. **Reference the examples**: Use the checkpoint images to verify you're on track

## 📝 Development Tips

### HTML Structure Strategy
Think about what elements you need:
- A container for the whole scene
- Wall pieces that can move
- Individual finger elements you can position
- Eye elements you can show/hide

### CSS Positioning Approach
- Use `position: relative` on containers
- Use `position: absolute` for elements you need to place precisely
- Remember that transforms are great for animations

### Animation Timing
- Start with simple movements, add complexity later
- Use the same duration for related animations to keep them synchronized
- Test one animation at a time before combining them

## 🔧 Getting Unstuck

### If elements aren't positioning correctly:
- Double-check your position properties (`relative` vs `absolute`)
- Verify your container has `position: relative`
- Use browser developer tools to inspect element positions

### If animations aren't working:
- Make sure your `@keyframes` name matches your `animation` property
- Check that you have semicolons after all CSS properties
- Verify your timing values make sense

### If you're completely stuck:
- Try building just one piece at a time
- Check the solution file (but try to solve it yourself first!)
- Remember: every developer gets stuck - persistence is the key skill

## 🎨 Make It Your Own

Once you have the basic animation working, feel free to experiment:
- Change colors (monster eyes, wall color, finger color)
- Adjust timing (faster/slower animations)
- Modify positions (different finger arrangements)
- Add your own creative touches!

## 🎉 Success Criteria

You'll know you've succeeded when:
- Your box appears centered with proper styling
- Walls slide apart smoothly in a coordinated way
- Fingers extend and retract with the wall movement
- Eyes appear and blink when the crack is open
- The whole sequence loops smoothly
- You built it yourself from scratch!

---

**Estimated Time**: 90 minutes  
**Difficulty**: Intermediate (build-from-scratch challenge)  
**Skills Focus**: HTML structure, CSS positioning, keyframe animations, project workflow

Ready to bring your monster to life? Let's start with Checkpoint 1!