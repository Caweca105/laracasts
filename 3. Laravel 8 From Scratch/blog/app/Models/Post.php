<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    // protected $guarded = ['id'];
    // protected $fillable = ['title', 'excerpt', 'body'];

    protected $guarded = [];

    protected $with = ['category', 'author'];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function author() // $post->user->name
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
