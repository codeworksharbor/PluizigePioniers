extends AnimatedSprite2D

# Declare the variable to hold the reference to AnimatedSprite2D
@onready var animatedSprite: AnimatedSprite2D = $AnimatedSprite2D

func _ready():
	# Check if the reference is valid
	if animatedSprite:
		print("AnimatedSprite2D found:", animatedSprite)
	else:
		print("AnimatedSprite2D not found. Check node hierarchy.")

# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta):
	# Check if the reference is valid before calling play
	if animatedSprite:
		animatedSprite.play("run")
	else:
		print("AnimatedSprite2D not found. Check node hierarchy.")
