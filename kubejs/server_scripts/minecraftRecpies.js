ServerEvents.recipes(event => {
  event.remove({id: 'gtceu:shaped/furnace'});

event.shaped(
  Item.of('minecraft:furnace', 1),
  [
    'AAA',
    'BCB',
    'AAA'
  ],
  {
    A: '#forge:cobblestone',
    B: 'minecraft:andesite',
    C: 'minecraft:flint'
  }
)
});
