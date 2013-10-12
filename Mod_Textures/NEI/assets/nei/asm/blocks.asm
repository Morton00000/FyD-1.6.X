list needle1
GETSTATIC aqz.s:[Laqz;

list needle2
ATHROW

list call
ALOAD 0
ILOAD 1
INVOKESTATIC codechicken/nei/IDConflictReporter.blockConstructed(Laqz;I)V

list needle3
GETSTATIC aqz.s:[Laqz;
ILOAD 1
ALOAD 0
AASTORE

list pre3
GETSTATIC aqz.s:[Laqz;
ILOAD 1
AALOAD
IFNONNULL LPOST3

list mobspawner
ILOAD 2
PUTSTATIC codechicken/nei/ItemMobSpawner.placedX:I
ILOAD 3
PUTSTATIC codechicken/nei/ItemMobSpawner.placedY:I
ILOAD 4
PUTSTATIC codechicken/nei/ItemMobSpawner.placedZ:I
RETURN

list needle4
ACONST_NULL

list call4
ALOAD 0
INVOKEVIRTUAL abn.a()Labw;
