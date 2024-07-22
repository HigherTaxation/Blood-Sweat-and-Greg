ServerEvents.recipes(event => {
	event.remove({output: 'bloodmagic:altar'})
	event.remove({output: 'bloodmagic:sacrificialdagger'})
	event.remove({output: 'bloodmagic:blankslate'})
	
	event.recipes.bloodmagic.altar('bloodmagic:blankslate', 'gtceu:andesite_alloy_plate').upgradeLevel(0).altarSyphon(1000)
	
	event.shaped(
  	Item.of('bloodmagic:altar', 1), 
  	[
   	 'A A',
   	 'ABA', 
   	 'CCC'
  	],
  	{
	  A: 'minecraft:andesite',
  	  B: 'minecraft:furnace',
	  C: 'minecraft:smooth_stone'
  	}
	)
	
	event.shaped(
  	Item.of('bloodmagic:sacrificialdagger', 1), 
  	[
   	 'AAA',
   	 'CBA', 
   	 'BCA'
  	],
  	{
	  A: 'notreepunching:flint_shard',
  	  B: 'minecraft:stick',
	  C: '#forge:string'
  	}
	)

});
